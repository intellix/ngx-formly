import { FormlyFieldConfigCache } from '../../components/formly.field.config';
import { FormControl, Validators, ValidationErrors, FormGroup } from '@angular/forms';
import { of } from 'rxjs';
import { createBuilder } from '../../test-utils';

function buildField({model, options, form: formControl, ...field}: FormlyFieldConfigCache): FormlyFieldConfigCache {
  const builder = createBuilder({
    extensions: ['core', 'validation'],
    onInit: c => c.addConfig({
      validators: [
        { name: 'required', validation: Validators.required },
        { name: 'asyncRequired', validation: ctrl => of(Validators.required(ctrl)) },
      ],
    }),
  });

  field = { key: 'name', ...field };

  builder.buildField({
    model: model || {},
    options,
    formControl,
    fieldGroup: [field],
  });

  return field;
}

function validate(field: FormlyFieldConfigCache, value: any, errors: ValidationErrors) {
  const formControl = new FormControl(value, { validators: field._validators });
  expect(typeof field._validators === 'function').toBeTruthy();
  expect(formControl.errors).toEqual(errors);
}

function asyncValidate(field: FormlyFieldConfigCache, value: any, errors: ValidationErrors) {
  const formControl = new FormControl(value, { asyncValidators: field._asyncValidators });
  expect(typeof field._asyncValidators === 'function').toBeTruthy();
  formControl.statusChanges.subscribe(() => {
    expect(formControl.errors).toEqual(errors);
  });
}

describe('FieldValidationExtension: initialise field validators', () => {
  describe('built-in validations', () => {
    it('required', () => {
      const field = buildField({
        templateOptions: { required: true },
      });

      validate(field, 'test', null);
      validate(field, null, { required: true });
    });

    it('pattern', () => {
      const field = buildField({
        templateOptions: { pattern: '[0-9]{5}' },
      });

      validate(field, '75964', null);
      validate(field, 'ddd', { pattern: { requiredPattern: '^[0-9]{5}$', actualValue: 'ddd' } });
    });

    it('minLength', () => {
      const field = buildField({
        templateOptions: { minLength: 5 },
      });

      validate(field, '12345', null);
      validate(field, '123', { minlength: { requiredLength: 5, actualLength: 3 } });
    });

    it('maxLength', () => {
      const field = buildField({
        templateOptions: { maxLength: 10 },
      });

      validate(field, '123', null);
      validate(field, '12345678910', { maxlength: { requiredLength: 10, actualLength: 11 } });
    });

    it('min', () => {
      const field = buildField({
        templateOptions: { min: 10 },
      });

      validate(field, null, null);
      validate(field, 10, null);
      validate(field, 5, { min: { min: 10, actual: 5 } });
    });

    it('max', () => {
      const field = buildField({
        templateOptions: { max: 4 },
      });

      validate(field, null, null);
      validate(field, 3, null);
      validate(field, 5, { max: { max: 4, actual: 5 } });
    });
  });

  describe('validators', () => {
    describe('using `validation` option', () => {
      it(`using pre-defined type`, () => {
        const field = buildField({
          validators: { validation: ['required'] },
        });

        validate(field, 'test', null);
        validate(field, null, { required: true });
      });

      it(`using custom type`, () => {
        const field = buildField({
          validators: { validation: [Validators.required] },
        });

        validate(field, 'test', null);
        validate(field, null, { required: true });
      });
    });

    describe('without validation option', () => {
      it(`using function`, () => {
        const field = buildField({
          validators: { custom: (form) => form.value },
        });

        validate(field, 'test', null);
        validate(field, null, { custom: true });
      });

      it(`using expression property`, () => {
        const field = buildField({
          validators: {
            custom: { expression: (form, field) => field.key === 'name' ? form.value : false },
          },
        });

        validate(field, 'test', null);
        validate(field, null, { custom: true });
      });

      it(`using expression property with errorPath`, () => {
        const field = buildField({
          key: 'address',
          fieldGroup: [{ key: 'city' }],
          validators: {
            custom: {
              errorPath: 'pwd',
              expression: () => false,
              message: 'custom msg',
            },
          },
        });

        field.formControl = new FormGroup(
          { pwd: new FormControl() },
          { validators: field._validators },
        );

        field.formControl.setValue({ pwd: 'oo' });
        expect(field.formControl.errors).toEqual({ custom: {
          errorPath: 'pwd',
        } });
        expect(field.formControl.get('pwd').errors).toEqual({ custom: {
          message: 'custom msg',
        } });
      });

      it(`using expression property with validation option`, () => {
        const field = buildField({
          validators: {
            validation: ['required'],
            required: { expression: (form, field) => field.key === 'name' ? form.value : false },
          },
        });

        validate(field, 'test', null);
        validate(field, null, { required: true });
      });
    });
  });

  describe('asyncValidators', () => {
    it(`using Promise`, () => {
      const field = buildField({
        asyncValidators: {
          custom: (control: FormControl) => new Promise(resolve => resolve(control.value !== 'test')),
        },
      });

      asyncValidate(field, 'test', null);
      asyncValidate(field, 'custom', { custom: true });
    });

    it(`using Observable`, () => {
      const field = buildField({
        asyncValidators: {
          custom: (control: FormControl) => of(control.value !== 'test'),
        },
      });

      asyncValidate(field, 'test', null);
      asyncValidate(field, 'custom', { custom: true });
    });
  });

  // https://github.com/ngx-formly/ngx-formly/issues/1578
  it('should not override existing validation when re-build form', () => {
    const field = buildField({
      _validators: Validators.compose([Validators.required]),
      formControl: new FormControl(null, { validators: Validators.required }),
      templateOptions: { required: true },
    });

    expect(field._validators).toBe(field.formControl.validator);
  });
});

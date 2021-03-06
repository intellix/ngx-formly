import { FormControl, FormGroup } from '@angular/forms';
import { FormlyFieldConfigCache } from '../../components/formly.field.config';
import { createBuilder } from '../../test-utils';

function buildField({ model, options, form: formControl, ...field }: FormlyFieldConfigCache): FormlyFieldConfigCache {
  const builder = createBuilder({
    extensions: ['core', 'validation', 'form'],
  });

  builder.buildField({
    model: model || {},
    options,
    formControl,
    fieldGroup: [field],
  });

  return field;
}

describe('FieldFormExtension', () => {
  describe('assign model field to form control', () => {
    it('should assign model for nested field key', () => {
      const { form } = buildField({
        key: 'address.city',
        model: { address: { city: 'test' } },
      });

      expect(form.get('address.city')).toBeDefined();
      expect(form.get('address.city').value).toEqual('test');
    });

    it('should assign model for nested field integer key', () => {
      const { form } = buildField({
        key: 'a.1',
        model: { a: ['foo', 'bar'] },
      });

      expect(form.get('a.1').value).toEqual('bar');
    });

    it('should assign model for nested field fieldGroup', () => {
      const { form } = buildField({
        key: 'a.b',
        fieldGroup: [{ key: 'c' }],
        model: { a: { b: { c: 'foo' } } },
      });

      expect(form.get('a.b').value).toEqual({ c: 'foo' });
    });
  });

  describe('field', () => {
    it('should assign parent form to field', () => {
      const field = buildField({ key: 'title' });

      expect(field.form instanceof FormGroup).toBeTruthy();
      expect(field.form).toBe(field.parent.formControl as FormGroup);
    });

    it('should assign parent form to root field', () => {
      const field = buildField({
        key: 'title',
        formControl: new FormControl(),
      });

      expect(field.form).toBe(field.formControl.parent as FormGroup);
    });

    it('should create formControl when key exist', () => {
      const field = buildField({ key: 'title' });

      expect(field.formControl instanceof FormControl).toBeTruthy();
    });

    it('should not create formControl when key is empty', () => {
      const field = buildField({});

      expect(field.formControl).toBeUndefined();
    });

    it('should use the same formcontrol for fields that use the same key', () => {
      const { fieldGroup: [f1, f2] } = buildField({
        fieldGroup: [
          { key: 'test' },
          { key: 'test' },
        ],
      });

      expect(f1.formControl).toEqual(f2.formControl);
    });
  });

  describe('fieldGroup', () => {
    it('should create FormGroup control when fieldGroup and key are set', () => {
      const field = buildField({ key: 'test', fieldGroup: [] });

      expect(field.formControl instanceof FormGroup).toBeTruthy();
    });

    it('should assign parent formcontrol when key is empty', () => {
      const field = buildField({ fieldGroup: [] });

      expect(field.formControl).toEqual(field.form);
    });

    it('should skip build field when fieldArray is set', () => {
      const field = buildField({
        key: 'test',
        fieldArray: {},
      });

      expect(field.formControl).toBeUndefined();
    });
  });

  it('should use existing formcontrol from built form', () => {
    const fooControl = new FormControl();
    const field = buildField({
      key: 'foo',
      form: new FormGroup({ foo: fooControl }),
    });

    expect(field.formControl).toBe(fooControl);
  });

  it('should override existing formcontrol when key is empty', () => {
    const field = buildField({
      fieldGroup: [],
      formControl: new FormControl(),
    });

    expect(field.formControl).toEqual(field.form);
  });

  it('should update the formcontrol validation when field update', () => {
    const formControl = new FormControl();
    spyOn(formControl, 'setValidators');
    spyOn(formControl, 'setAsyncValidators');
    spyOn(formControl, 'updateValueAndValidity');
    const field = buildField({
      key: 'test',
      formControl,
      templateOptions: { required: true },
      form: new FormGroup({ test: formControl }),
    });

    expect(formControl.setValidators).toHaveBeenCalledWith(field._validators);
    expect(formControl.updateValueAndValidity).toHaveBeenCalledTimes(1);
  });
});

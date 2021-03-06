import { TestBed } from '@angular/core/testing';
import { createGenericTestComponent } from '../test-utils';
import { Component, ViewChild } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormArray } from '@angular/forms';
import { FormlyModule, FormlyForm, FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FieldArrayType } from './field-array.type';
import { FormlyFieldText } from '../components/formly.field.spec';

function createFormlyTestComponent() {
  return createGenericTestComponent('<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>', TestComponent);
}

let app: Partial<{
  form: FormGroup;
  fields: FormlyFieldConfig[];
  options: FormlyFormOptions;
  model: any;
}>;

describe('Array Field Type', () => {
  beforeEach(() => {
    app = {
      form: new FormGroup({}),
      model: {},
    };
    TestBed.configureTestingModule({
      declarations: [TestComponent, ArrayTypeComponent, FormlyFieldText],
      imports: [
        ReactiveFormsModule,
        FormlyModule.forRoot({
          types: [
            {
                name: 'input',
                component: FormlyFieldText,
            },
            {
              name: 'array',
              component: ArrayTypeComponent,
            },
          ],
        }),
      ],
    });
  });

  it('should mark the form dirty on Add/Remove', () => {
    app.model = { array: null };
    app.fields = [{
      key: 'array',
      type: 'array',
    }];

    const fixture = createFormlyTestComponent();
    expect(app.form.dirty).toBeFalsy();

    fixture.nativeElement.querySelector('#add').click();
    fixture.detectChanges();
    expect(app.form.dirty).toBeTruthy();

    app.form.markAsPristine();
    fixture.nativeElement.querySelector('#remove-0').click();
    fixture.detectChanges();
    expect(app.form.dirty).toBeTruthy();
  });

  it('should work with nullable model', () => {
    app.model = { array: null };
    app.fields = [{
      key: 'array',
      type: 'array',
    }];

    const fixture = createFormlyTestComponent();
    expect(app.fields[0].fieldGroup).toEqual([]);
    expect(app.fields[0].model).toBeNull();

    fixture.nativeElement.querySelector('#add').click();
    fixture.detectChanges();

    expect(app.fields[0].fieldGroup.length).toEqual(1);
    expect(app.fields[0].model.length).toBe(1);
  });

  it('should keep formControl instance on remove item for repeat section', () => {
    app.model = { foo: [1, 2] };
    app.fields = [{
      key: 'foo',
      type: 'array',
      fieldArray: { type: 'input' },
    }];

    const fixture = createFormlyTestComponent();
    const formArray = app.fields[0].formControl as FormArray;

    const formControl = formArray.at(1);
    fixture.nativeElement.querySelector('#remove-0').click();
    fixture.detectChanges();

    expect(formArray.controls.length).toEqual(1);
    expect(formArray.at(0)).toEqual(formControl);
  });

  it('should emit `modelChange` on model change', () => {
    app.fields = [{
      key: 'foo',
      type: 'array',
      fieldArray: {
        fieldGroup: [{
          key: 'title',
          type: 'input',
        }],
      },
    }];

    const fixture = createFormlyTestComponent();
    const spy = jasmine.createSpy('model change spy');
    const subscription = fixture.componentInstance.formlyForm.modelChange.subscribe(spy);
    fixture.nativeElement.querySelector('#add').click();
    fixture.detectChanges();

    const formArray = app.form.get('foo') as FormArray;
    formArray.at(0).get('title').patchValue('***');

    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith({ foo: [{}] });
    expect(spy).toHaveBeenCalledWith({ foo: [{ title: '***' }] });
    expect(app.model).toEqual({ foo: [{ title: '***' }] });

    fixture.nativeElement.querySelector('#remove-0').click();
    expect(app.model).toEqual({ foo: [] });

    subscription.unsubscribe();
  });

  it('should update field visibility within field arrays', () => {
    app.fields = [
      {
        key: 'address',
        type: 'array',
        hideExpression: model => model.length !== 1,
        fieldArray: {
          fieldGroup: [
            {
              key: 'city',
              type: 'input',
              hideExpression: 'model.addressIsRequired',
            },
          ],
        },
      },
      { key: 'addressIsRequired' },
    ];
    app.model = {
      address: [{
        addressIsRequired: true,
      }],
    };

    const fixture = createFormlyTestComponent();

    const cityField = app.fields[0].fieldGroup[0].fieldGroup[0];

    expect(cityField.templateOptions.hidden).toBeTruthy();
    expect(cityField.hide).toBeTruthy();

    app.model.address[0].addressIsRequired = false;
    fixture.detectChanges();

    expect(cityField.templateOptions.hidden).toBeFalsy();
    expect(cityField.hide).toBeFalsy();
  });

  it('should update field validity within field arrays', () => {
    app.fields = [
      {
        key: 'address',
        type: 'array',
        fieldArray: {
          fieldGroup: [
            {
              key: 'city',
              type: 'input',
              expressionProperties: {
                'templateOptions.required': 'model.addressIsRequired',
              },
            },
          ],
        },
      },
      { key: 'addressIsRequired' },
    ];
    app.model = {
      address: [{
        addressIsRequired: true,
      }],
    };

    const fixture = createFormlyTestComponent();

    const cityField = app.fields[0].fieldGroup[0].fieldGroup[0];

    expect(cityField.formControl.status).toEqual('INVALID');

    app.model.address[0].addressIsRequired = false;

    fixture.detectChanges();

    expect(cityField.formControl.status).toEqual('VALID');
  });
});

@Component({ selector: 'formly-form-test', template: '', entryComponents: [] })
class TestComponent {
  @ViewChild(FormlyForm, { static: true }) formlyForm: FormlyForm;

  fields = app.fields;
  form: FormGroup = app.form;
  model = app.model;
  options = app.options;
}

@Component({
  selector: 'formly-array-type',
  template: `
    <div *ngFor="let field of field.fieldGroup; let i = index;">
      <formly-group [field]="field"></formly-group>
      <button [id]="'remove-' + i" type="button" (click)="remove(i)">Remove</button>
    </div>
    <button id="add" type="button" (click)="add()">Add</button>
  `,
})
class ArrayTypeComponent extends FieldArrayType {}

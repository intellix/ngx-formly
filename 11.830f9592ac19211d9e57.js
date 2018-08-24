(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"0UhC":function(n,s){n.exports='<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>form</span> <span class="token attr-name" >[formGroup]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>formly-form</span> <span class="token attr-name" >[model]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>model<span class="token punctuation" >"</span></span> <span class="token attr-name" >[fields]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>fields<span class="token punctuation" >"</span></span> <span class="token attr-name" >[options]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>options<span class="token punctuation" >"</span></span> <span class="token attr-name" >[form]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>formly-form</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>form</span><span class="token punctuation" >></span></span>\n'},"0uUY":function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NgModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> CommonModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/common\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> ReactiveFormsModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyBootstrapModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/bootstrap\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FileValueAccessor <span class="token punctuation" >}</span> from <span class="token string" >\'./file-value-accessor\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyFieldFile <span class="token punctuation" >}</span> from <span class="token string" >\'./file-type.component\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> AppComponent <span class="token punctuation" >}</span> from <span class="token string" >\'./app.component\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >NgModule</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  imports<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    CommonModule<span class="token punctuation" >,</span>\n    ReactiveFormsModule<span class="token punctuation" >,</span>\n    FormlyBootstrapModule<span class="token punctuation" >,</span>\n    FormlyModule<span class="token punctuation" >.</span><span class="token function" >forRoot</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      types<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span> name<span class="token punctuation" >:</span> <span class="token string" >\'file\'</span><span class="token punctuation" >,</span> component<span class="token punctuation" >:</span> FormlyFieldFile<span class="token punctuation" >,</span> wrappers<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token string" >\'form-field\'</span><span class="token punctuation" >]</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  declarations<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    FileValueAccessor<span class="token punctuation" >,</span>\n    FormlyFieldFile<span class="token punctuation" >,</span>\n    AppComponent<span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppModule</span> <span class="token punctuation" >{</span> <span class="token punctuation" >}</span>\n'},"1nEY":function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormGroup <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyFormOptions<span class="token punctuation" >,</span> FormlyFieldConfig <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-app-example\'</span><span class="token punctuation" >,</span>\n  templateUrl<span class="token punctuation" >:</span> <span class="token string" >\'./app.component.html\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppComponent</span> <span class="token punctuation" >{</span>\n  form <span class="token operator" >=</span> <span class="token keyword" >new</span> <span class="token class-name" >FormGroup</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  model <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  options<span class="token punctuation" >:</span> FormlyFormOptions <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  fields<span class="token punctuation" >:</span> FormlyFieldConfig<span class="token punctuation" >[</span><span class="token punctuation" >]</span> <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'file\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'file\'</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n'},"3G0C":function(n,s,a){"use strict";a.r(s);var o=a("CcnG"),t=a("gIcY"),p=function(){return function(){this.form=new t.FormGroup({}),this.model={},this.options={},this.fields=[{key:"file",type:"file"}]}}(),e={examples:[{title:"File input",component:p,files:[{file:"app.component.html",content:a("0UhC"),filecontent:a("l++u")},{file:"app.component.ts",content:a("1nEY"),filecontent:a("5VxB")},{file:"file-value-accessor.ts",content:a("Qlpc"),filecontent:a("TKVR")},{file:"file-type.component.ts",content:a("Q+cE"),filecontent:a("FWKg")},{file:"app.module.ts",content:a("0uUY"),filecontent:a("AezG")}]}]},l=function(){},c=a("NcP4"),u=a("goW2"),i=a("htty"),r=a("MT1c"),k=a("1Q/V"),m=a("9+aI"),d=a("haId"),f=a("LJsP"),g=a("yR2A"),y=a("grA4"),v=a("UFMs"),C=function(){function n(){this.onChange=function(n){},this.onTouched=function(){}}return n.prototype.writeValue=function(n){},n.prototype.registerOnChange=function(n){this.onChange=n},n.prototype.registerOnTouched=function(n){this.onTouched=n},n}(),F=a("gfpZ"),h=a("mrSG"),w=function(n){function s(){return null!==n&&n.apply(this,arguments)||this}return Object(h.__extends)(s,n),s}(a("HkYz").b),b=o["\u0275crt"]({encapsulation:2,styles:[],data:{}});function _(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,7,"input",[["type","file"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[1,"name",0],[1,"placeholder",0],[1,"tabindex",0],[1,"readonly",0],[1,"step",0]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"],[null,"keyup"],[null,"keydown"],[null,"click"],[null,"keypress"],[null,"focus"]],function(n,s,a){var t=!0;return"input"===s&&(t=!1!==o["\u0275nov"](n,1)._handleInput(a.target.value)&&t),"blur"===s&&(t=!1!==o["\u0275nov"](n,1).onTouched()&&t),"compositionstart"===s&&(t=!1!==o["\u0275nov"](n,1)._compositionStart()&&t),"compositionend"===s&&(t=!1!==o["\u0275nov"](n,1)._compositionEnd(a.target.value)&&t),"change"===s&&(t=!1!==o["\u0275nov"](n,2).onChange(a.target.files)&&t),"blur"===s&&(t=!1!==o["\u0275nov"](n,2).onTouched()&&t),"keyup"===s&&(t=!1!==(o["\u0275nov"](n,7).to.keyup&&o["\u0275nov"](n,7).to.keyup(o["\u0275nov"](n,7).field,a))&&t),"keydown"===s&&(t=!1!==(o["\u0275nov"](n,7).to.keydown&&o["\u0275nov"](n,7).to.keydown(o["\u0275nov"](n,7).field,a))&&t),"click"===s&&(t=!1!==(o["\u0275nov"](n,7).to.click&&o["\u0275nov"](n,7).to.click(o["\u0275nov"](n,7).field,a))&&t),"change"===s&&(t=!1!==(o["\u0275nov"](n,7).to.change&&o["\u0275nov"](n,7).to.change(o["\u0275nov"](n,7).field,a))&&t),"keypress"===s&&(t=!1!==(o["\u0275nov"](n,7).to.keypress&&o["\u0275nov"](n,7).to.keypress(o["\u0275nov"](n,7).field,a))&&t),"focus"===s&&(t=!1!==o["\u0275nov"](n,7).onFocus(a)&&t),"blur"===s&&(t=!1!==o["\u0275nov"](n,7).onBlur(a)&&t),t},null,null)),o["\u0275did"](1,16384,null,0,t.DefaultValueAccessor,[o.Renderer2,o.ElementRef,[2,t.COMPOSITION_BUFFER_MODE]],null,null),o["\u0275did"](2,16384,null,0,C,[],null,null),o["\u0275prd"](1024,null,t.NG_VALUE_ACCESSOR,function(n,s){return[n,s]},[t.DefaultValueAccessor,C]),o["\u0275did"](4,540672,null,0,t.FormControlDirective,[[8,null],[8,null],[6,t.NG_VALUE_ACCESSOR],[2,t["\u0275angular_packages_forms_forms_j"]]],{form:[0,"form"]},null),o["\u0275prd"](2048,null,t.NgControl,null,[t.FormControlDirective]),o["\u0275did"](6,16384,null,0,t.NgControlStatus,[[4,t.NgControl]],null,null),o["\u0275did"](7,540672,null,0,F.a,[o.Renderer2,o.ElementRef],{field:[0,"field"]},null)],function(n,s){var a=s.component;n(s,4,0,a.formControl),n(s,7,0,a.field)},function(n,s){n(s,0,1,[o["\u0275nov"](s,6).ngClassUntouched,o["\u0275nov"](s,6).ngClassTouched,o["\u0275nov"](s,6).ngClassPristine,o["\u0275nov"](s,6).ngClassDirty,o["\u0275nov"](s,6).ngClassValid,o["\u0275nov"](s,6).ngClassInvalid,o["\u0275nov"](s,6).ngClassPending,o["\u0275nov"](s,7).field.name,o["\u0275nov"](s,7).to.placeholder,o["\u0275nov"](s,7).to.tabindex,o["\u0275nov"](s,7).to.readonly,o["\u0275nov"](s,7).to.step])})}var x=o["\u0275ccf"]("formly-field-file",w,function(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"formly-field-file",[],null,null,null,_,b)),o["\u0275did"](1,49152,null,0,w,[],null,null)],null,null)},{form:"form",field:"field",options:"options",model:"model"},{},[]),A=a("pMnS"),M=a("4o01"),O=a("Dl9q"),R=a("9Glx"),V=a("UcnZ"),E=a("DAbo"),G=o["\u0275crt"]({encapsulation:2,styles:[],data:{}});function N(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,6,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,s,a){var t=!0;return"submit"===s&&(t=!1!==o["\u0275nov"](n,2).onSubmit(a)&&t),"reset"===s&&(t=!1!==o["\u0275nov"](n,2).onReset()&&t),t},null,null)),o["\u0275did"](1,16384,null,0,t["\u0275angular_packages_forms_forms_bg"],[],null,null),o["\u0275did"](2,540672,null,0,t.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},null),o["\u0275prd"](2048,null,t.ControlContainer,null,[t.FormGroupDirective]),o["\u0275did"](4,16384,null,0,t.NgControlStatusGroup,[[4,t.ControlContainer]],null,null),(n()(),o["\u0275eld"](5,0,null,null,1,"formly-form",[],null,null,null,O.b,O.a)),o["\u0275did"](6,966656,null,0,R.a,[V.a,E.b,[2,t.NgForm],[2,t.FormGroupDirective],[3,R.a]],{model:[0,"model"],form:[1,"form"],fields:[2,"fields"],options:[3,"options"]},null)],function(n,s){var a=s.component;n(s,2,0,a.form),n(s,6,0,a.model,a.form,a.fields,a.options)},function(n,s){n(s,0,0,o["\u0275nov"](s,4).ngClassUntouched,o["\u0275nov"](s,4).ngClassTouched,o["\u0275nov"](s,4).ngClassPristine,o["\u0275nov"](s,4).ngClassDirty,o["\u0275nov"](s,4).ngClassValid,o["\u0275nov"](s,4).ngClassInvalid,o["\u0275nov"](s,4).ngClassPending)})}var T=o["\u0275ccf"]("formly-app-example",p,function(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,N,G)),o["\u0275did"](1,49152,null,0,p,[],null,null)],null,null)},{},{},[]),S=a("Ip0R"),D=a("M2Lx"),U=a("eDkP"),L=a("Fzqc"),I=a("v9Dh"),B=a("6LlJ"),P=a("F6kA"),Q=a("dWZg"),Y=a("lLAP"),z=a("4c35"),W=a("qAlS"),Z=a("Wf4p"),j=a("La40"),q=a("SMsm"),J=a("UodH"),K=a("5QwG"),H=a("XR12"),$=a("me7w"),X=a("N3PW"),nn=a("l4pn"),sn=a("Fv2i"),an=a("wBYW"),on=a("IE48"),tn=a("zn1Q"),pn=a("Q4Tx"),en=a("zdmU"),ln=a("Nsh5"),cn=a("8mMr"),un=a("LC5p"),rn=a("0/Q6"),kn=a("mqvi"),mn=a("lYui"),dn=a("1ey0"),fn=function(){},gn=a("ZYCi"),yn=a("cIcG");a.d(s,"ConfigModuleNgFactory",function(){return vn});var vn=o["\u0275cmf"](l,[],function(n){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[c.a,u.a,i.a,r.a,k.a,m.a,d.a,f.a,g.a,y.a,v.a,x,A.a,M.a,T]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,S.NgLocalization,S.NgLocaleLocalization,[o.LOCALE_ID,[2,S["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,D.c,D.c,[]),o["\u0275mpd"](4608,U.c,U.c,[U.i,U.e,o.ComponentFactoryResolver,U.h,U.f,o.Injector,o.NgZone,S.DOCUMENT,L.b]),o["\u0275mpd"](5120,U.j,U.k,[U.c]),o["\u0275mpd"](5120,I.b,I.c,[U.c]),o["\u0275mpd"](4608,B.a,B.a,[]),o["\u0275mpd"](4608,P.a,P.a,[]),o["\u0275mpd"](4608,t.FormBuilder,t.FormBuilder,[]),o["\u0275mpd"](4608,t["\u0275angular_packages_forms_forms_i"],t["\u0275angular_packages_forms_forms_i"],[]),o["\u0275mpd"](4608,V.a,V.a,[E.b]),o["\u0275mpd"](1073742336,S.CommonModule,S.CommonModule,[]),o["\u0275mpd"](1073742336,Q.b,Q.b,[]),o["\u0275mpd"](1073742336,D.d,D.d,[]),o["\u0275mpd"](1073742336,Y.a,Y.a,[]),o["\u0275mpd"](1073742336,L.a,L.a,[]),o["\u0275mpd"](1073742336,z.g,z.g,[]),o["\u0275mpd"](1073742336,W.b,W.b,[]),o["\u0275mpd"](1073742336,U.g,U.g,[]),o["\u0275mpd"](1073742336,Z.l,Z.l,[[2,Z.d]]),o["\u0275mpd"](1073742336,I.e,I.e,[]),o["\u0275mpd"](1073742336,Z.w,Z.w,[]),o["\u0275mpd"](1073742336,j.i,j.i,[]),o["\u0275mpd"](1073742336,q.b,q.b,[]),o["\u0275mpd"](1073742336,J.c,J.c,[]),o["\u0275mpd"](1073742336,K.b,K.b,[]),o["\u0275mpd"](512,E.b,E.b,[]),o["\u0275mpd"](1024,E.a,function(){return[H.b(),{types:[{name:"input",component:$.a,wrappers:["form-field"]},{name:"checkbox",component:X.a,wrappers:["form-field"],defaultOptions:{templateOptions:{indeterminate:!0,hideLabel:!0}}},{name:"radio",component:nn.a,wrappers:["form-field"],defaultOptions:{templateOptions:{options:[]}}},{name:"select",component:sn.a,wrappers:["form-field"],defaultOptions:{templateOptions:{options:[]}}},{name:"textarea",component:an.a,wrappers:["form-field"],defaultOptions:{templateOptions:{cols:1,rows:1}}},{name:"multicheckbox",component:on.a,wrappers:["form-field"],defaultOptions:{templateOptions:{options:[]}}}],wrappers:[{name:"addons",component:tn.a},{name:"form-field",component:pn.a}],manipulators:[{class:en.a,method:"run"}]},H.b(),{types:[{name:"file",component:w,wrappers:["form-field"]}]}]},[]),o["\u0275mpd"](1073742336,H.a,H.a,[E.b,o.ComponentFactoryResolver,[2,E.a]]),o["\u0275mpd"](1073742336,ln.h,ln.h,[]),o["\u0275mpd"](1073742336,cn.b,cn.b,[]),o["\u0275mpd"](1073742336,Z.m,Z.m,[]),o["\u0275mpd"](1073742336,Z.u,Z.u,[]),o["\u0275mpd"](1073742336,un.b,un.b,[]),o["\u0275mpd"](1073742336,rn.c,rn.c,[]),o["\u0275mpd"](1073742336,kn.a,kn.a,[]),o["\u0275mpd"](1073742336,t["\u0275angular_packages_forms_forms_bb"],t["\u0275angular_packages_forms_forms_bb"],[]),o["\u0275mpd"](1073742336,t.ReactiveFormsModule,t.ReactiveFormsModule,[]),o["\u0275mpd"](1073742336,mn.a,mn.a,[]),o["\u0275mpd"](1073742336,dn.a,dn.a,[]),o["\u0275mpd"](1073742336,fn,fn,[]),o["\u0275mpd"](1073742336,gn.s,gn.s,[[2,gn.y],[2,gn.p]]),o["\u0275mpd"](1073742336,l,l,[]),o["\u0275mpd"](1024,gn.n,function(){return[[{path:"",component:yn.a,data:e}]]},[])])})},"5VxB":function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model = {};\n  options: FormlyFormOptions = {};\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'file',\n      type: 'file',\n    },\n  ];\n}\n"},AezG:function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { FileValueAccessor } from './file-value-accessor';\nimport { FormlyFieldFile } from './file-type.component';\nimport { AppComponent } from './app.component';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      types: [\n        { name: 'file', component: FormlyFieldFile, wrappers: ['form-field'] },\n      ],\n    }),\n  ],\n  declarations: [\n    FileValueAccessor,\n    FormlyFieldFile,\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"},FWKg:function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FieldType } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-field-file',\n  template: `\n    <input type=\"file\" [formControl]=\"formControl\" [formlyAttributes]=\"field\">\n  `,\n})\nexport class FormlyFieldFile extends FieldType {}\n"},"Q+cE":function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FieldType <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-field-file\'</span><span class="token punctuation" >,</span>\n  template<span class="token punctuation" >:</span> `\n    <span class="token operator" >&lt;</span>input type<span class="token operator" >=</span><span class="token string" >"file"</span> <span class="token punctuation" >[</span>formControl<span class="token punctuation" >]</span><span class="token operator" >=</span><span class="token string" >"formControl"</span> <span class="token punctuation" >[</span>formlyAttributes<span class="token punctuation" >]</span><span class="token operator" >=</span><span class="token string" >"field"</span><span class="token operator" >></span>\n  `<span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >FormlyFieldFile</span> <span class="token keyword" >extends</span> <span class="token class-name" >FieldType</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span>\n'},Qlpc:function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Directive <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NG_VALUE_ACCESSOR<span class="token punctuation" >,</span> ControlValueAccessor <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Directive</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token comment" spellcheck="true">// tslint:disable-next-line</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'input[type=file]\'</span><span class="token punctuation" >,</span>\n  host<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n    <span class="token string" >\'(change)\'</span><span class="token punctuation" >:</span> <span class="token string" >\'onChange($event.target.files)\'</span><span class="token punctuation" >,</span>\n    <span class="token string" >\'(blur)\'</span><span class="token punctuation" >:</span> <span class="token string" >\'onTouched()\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  providers<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    <span class="token punctuation" >{</span> provide<span class="token punctuation" >:</span> NG_VALUE_ACCESSOR<span class="token punctuation" >,</span> useExisting<span class="token punctuation" >:</span> FileValueAccessor<span class="token punctuation" >,</span> multi<span class="token punctuation" >:</span> <span class="token keyword" >true</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token comment" spellcheck="true">// https://github.com/angular/angular/issues/7341</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >FileValueAccessor</span> <span class="token keyword" >implements</span> <span class="token class-name" >ControlValueAccessor</span> <span class="token punctuation" >{</span>\n  value<span class="token punctuation" >:</span> <span class="token keyword" >any</span><span class="token punctuation" >;</span>\n  onChange <span class="token operator" >=</span> <span class="token punctuation" >(</span>_<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span> <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  onTouched <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span> <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n  <span class="token function" >writeValue</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span> <span class="token punctuation" >}</span>\n  <span class="token function" >registerOnChange</span><span class="token punctuation" >(</span>fn<span class="token punctuation" >:</span> <span class="token keyword" >any</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>onChange <span class="token operator" >=</span> fn<span class="token punctuation" >;</span> <span class="token punctuation" >}</span>\n  <span class="token function" >registerOnTouched</span><span class="token punctuation" >(</span>fn<span class="token punctuation" >:</span> <span class="token keyword" >any</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>onTouched <span class="token operator" >=</span> fn<span class="token punctuation" >;</span> <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'},TKVR:function(n,s){n.exports="import { Directive } from '@angular/core';\nimport { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';\n\n@Directive({\n  // tslint:disable-next-line\n  selector: 'input[type=file]',\n  host: {\n    '(change)': 'onChange($event.target.files)',\n    '(blur)': 'onTouched()',\n  },\n  providers: [\n    { provide: NG_VALUE_ACCESSOR, useExisting: FileValueAccessor, multi: true },\n  ],\n})\n// https://github.com/angular/angular/issues/7341\nexport class FileValueAccessor implements ControlValueAccessor {\n  value: any;\n  onChange = (_) => { };\n  onTouched = () => { };\n\n  writeValue(value) { }\n  registerOnChange(fn: any) { this.onChange = fn; }\n  registerOnTouched(fn: any) { this.onTouched = fn; }\n}\n"},"l++u":function(n,s){n.exports='<form [formGroup]="form">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form">\n  </formly-form>\n</form>\n'}}]);
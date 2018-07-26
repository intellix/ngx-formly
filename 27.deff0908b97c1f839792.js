(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"/Z3c":function(n,s,a){"use strict";a.r(s);var t=a("CcnG"),p=a("gIcY"),o=function(){function n(){var n=this;this.form=new p.FormGroup({}),this.model={},this.options={},this.existingUsers=["user1","user2","user3"],this.fields=[{key:"text",type:"input",templateOptions:{label:"Username (validated on `blur`)",placeholder:"Username",required:!0},modelOptions:{updateOn:"blur"},asyncValidators:{uniqueUsername:{expression:function(s){return new Promise(function(a,t){setTimeout(function(){a(-1===n.existingUsers.indexOf(s.value))},1e3)})},message:"This username is already taken."}}}]}return n.prototype.submit=function(){this.form.valid&&alert(JSON.stringify(this.model))},n}(),e={examples:[{title:"Async validation and `updateOn`",description:"\n              This example shows how to determine when the control should trigger validation.<br/>\n              By default, controls are validated on a `change` event. It may be a better experience to validate on `blur` or even `submit`, <br/>\n              especially if async validation can become an expensive operation.\n            ",component:o,files:[{file:"app.component.html",content:a("FSxq"),filecontent:a("F5ll")},{file:"app.component.ts",content:a("1yW4"),filecontent:a("W5e8")},{file:"app.module.ts",content:a("GqMw"),filecontent:a("rlJS")}]}]},l=function(){},u=a("NcP4"),c=a("goW2"),i=a("MT1c"),r=a("1Q/V"),k=a("9+aI"),m=a("haId"),d=a("LJsP"),f=a("yR2A"),g=a("Bbog"),b=a("fFVA"),y=a("Nntq"),v=a("L0Z1"),F=a("grA4"),w=a("pMnS"),x=a("4o01"),h=a("Ip0R"),C=a("Dl9q"),M=a("9Glx"),O=a("UcnZ"),U=a("wdLZ"),_=a("DAbo"),q=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function S(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),t["\u0275ted"](1,null,["",""]))],null,function(n,s){n(s,1,0,s.context.$implicit)})}function N(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Existing usernames"])),(n()(),t["\u0275eld"](2,0,null,null,2,"ul",[],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,S)),t["\u0275did"](4,802816,null,0,h.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["\u0275eld"](5,0,null,null,8,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,s,a){var p=!0,o=n.component;return"submit"===s&&(p=!1!==t["\u0275nov"](n,7).onSubmit(a)&&p),"reset"===s&&(p=!1!==t["\u0275nov"](n,7).onReset()&&p),"ngSubmit"===s&&(p=!1!==o.submit()&&p),p},null,null)),t["\u0275did"](6,16384,null,0,p["\u0275angular_packages_forms_forms_bg"],[],null,null),t["\u0275did"](7,540672,null,0,p.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t["\u0275prd"](2048,null,p.ControlContainer,null,[p.FormGroupDirective]),t["\u0275did"](9,16384,null,0,p.NgControlStatusGroup,[[4,p.ControlContainer]],null,null),(n()(),t["\u0275eld"](10,0,null,null,3,"formly-form",[],null,null,null,C.b,C.a)),t["\u0275did"](11,966656,null,0,M.a,[O.a,U.a,_.b,[2,p.NgForm],[2,p.FormGroupDirective],[3,M.a]],{model:[0,"model"],form:[1,"form"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),t["\u0275eld"](12,0,null,0,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Submit"]))],function(n,s){var a=s.component;n(s,4,0,a.existingUsers),n(s,7,0,a.form),n(s,11,0,a.model,a.form,a.fields,a.options)},function(n,s){n(s,5,0,t["\u0275nov"](s,9).ngClassUntouched,t["\u0275nov"](s,9).ngClassTouched,t["\u0275nov"](s,9).ngClassPristine,t["\u0275nov"](s,9).ngClassDirty,t["\u0275nov"](s,9).ngClassValid,t["\u0275nov"](s,9).ngClassInvalid,t["\u0275nov"](s,9).ngClassPending)})}var R=t["\u0275ccf"]("formly-app-example",o,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,N,q)),t["\u0275did"](1,49152,null,0,o,[],null,null)],null,null)},{},{},[]),A=a("M2Lx"),G=a("eDkP"),T=a("Fzqc"),L=a("v9Dh"),D=a("6LlJ"),I=a("F6kA"),J=a("dWZg"),P=a("lLAP"),B=a("4c35"),W=a("qAlS"),V=a("Wf4p"),Z=a("La40"),E=a("SMsm"),z=a("UodH"),Q=a("5QwG"),j=a("Nsh5"),Y=a("8mMr"),H=a("LC5p"),K=a("0/Q6"),X=a("mqvi"),$=a("lYui"),nn=a("AMrk"),sn=a("me7w"),an=a("N3PW"),tn=a("l4pn"),pn=a("Fv2i"),on=a("wBYW"),en=a("IE48"),ln=a("Ltwa"),un=a("4Mh+"),cn=a("b7gF"),rn=a("DJQk"),kn=a("zn1Q"),mn=a("CgTb"),dn=a("+oK5"),fn=a("zdmU"),gn=a("XR12"),bn=a("1ey0"),yn=function(){},vn=a("ZYCi"),Fn=a("cIcG");a.d(s,"ConfigModuleNgFactory",function(){return wn});var wn=t["\u0275cmf"](l,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,c.a,i.a,r.a,k.a,m.a,d.a,f.a,g.a,b.a,y.a,v.a,F.a,w.a,x.a,R]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,h.NgLocalization,h.NgLocaleLocalization,[t.LOCALE_ID,[2,h["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,A.c,A.c,[]),t["\u0275mpd"](4608,G.c,G.c,[G.i,G.e,t.ComponentFactoryResolver,G.h,G.f,t.Injector,t.NgZone,h.DOCUMENT,T.b]),t["\u0275mpd"](5120,G.j,G.k,[G.c]),t["\u0275mpd"](5120,L.b,L.c,[G.c]),t["\u0275mpd"](4608,D.a,D.a,[]),t["\u0275mpd"](4608,I.a,I.a,[]),t["\u0275mpd"](4608,p.FormBuilder,p.FormBuilder,[]),t["\u0275mpd"](4608,p["\u0275angular_packages_forms_forms_i"],p["\u0275angular_packages_forms_forms_i"],[]),t["\u0275mpd"](1073742336,h.CommonModule,h.CommonModule,[]),t["\u0275mpd"](1073742336,J.b,J.b,[]),t["\u0275mpd"](1073742336,A.d,A.d,[]),t["\u0275mpd"](1073742336,P.a,P.a,[]),t["\u0275mpd"](1073742336,T.a,T.a,[]),t["\u0275mpd"](1073742336,B.g,B.g,[]),t["\u0275mpd"](1073742336,W.b,W.b,[]),t["\u0275mpd"](1073742336,G.g,G.g,[]),t["\u0275mpd"](1073742336,V.l,V.l,[[2,V.d]]),t["\u0275mpd"](1073742336,L.e,L.e,[]),t["\u0275mpd"](1073742336,V.w,V.w,[]),t["\u0275mpd"](1073742336,Z.i,Z.i,[]),t["\u0275mpd"](1073742336,E.b,E.b,[]),t["\u0275mpd"](1073742336,z.c,z.c,[]),t["\u0275mpd"](1073742336,Q.b,Q.b,[]),t["\u0275mpd"](1073742336,j.h,j.h,[]),t["\u0275mpd"](1073742336,Y.b,Y.b,[]),t["\u0275mpd"](1073742336,V.m,V.m,[]),t["\u0275mpd"](1073742336,V.u,V.u,[]),t["\u0275mpd"](1073742336,H.b,H.b,[]),t["\u0275mpd"](1073742336,K.c,K.c,[]),t["\u0275mpd"](1073742336,X.a,X.a,[]),t["\u0275mpd"](1073742336,p["\u0275angular_packages_forms_forms_bb"],p["\u0275angular_packages_forms_forms_bb"],[]),t["\u0275mpd"](1073742336,p.ReactiveFormsModule,p.ReactiveFormsModule,[]),t["\u0275mpd"](1073742336,$.a,$.a,[]),t["\u0275mpd"](1024,_.a,function(){return[{types:[{name:"formly-group",component:nn.a}]},{types:[{name:"input",component:sn.a,wrappers:["fieldset","label"]},{name:"checkbox",component:an.a,wrappers:["fieldset"],defaultOptions:{templateOptions:{indeterminate:!0}}},{name:"radio",component:tn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}},{name:"select",component:pn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}},{name:"textarea",component:on.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{cols:1,rows:1}}},{name:"multicheckbox",component:en.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}}],wrappers:[{name:"label",component:ln.a},{name:"description",component:un.a},{name:"validation-message",component:cn.a},{name:"fieldset",component:rn.a},{name:"addons",component:kn.a}],manipulators:[{class:mn.a,method:"run"},{class:dn.a,method:"run"},{class:fn.a,method:"run"}]},{types:[{name:"formly-group",component:nn.a}]},{validationMessages:[{name:"required",message:"This field is required"}]}]},[]),t["\u0275mpd"](1073742336,gn.a,gn.a,[_.b,t.ComponentFactoryResolver,[2,_.a]]),t["\u0275mpd"](1073742336,bn.a,bn.a,[]),t["\u0275mpd"](1073742336,yn,yn,[]),t["\u0275mpd"](1073742336,vn.r,vn.r,[[2,vn.x],[2,vn.o]]),t["\u0275mpd"](1073742336,l,l,[]),t["\u0275mpd"](1024,vn.m,function(){return[[{path:"",component:Fn.a,data:e}]]},[])])})},"1yW4":function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormGroup<span class="token punctuation" >,</span> FormControl <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyFormOptions<span class="token punctuation" >,</span> FormlyFieldConfig <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-app-example\'</span><span class="token punctuation" >,</span>\n  templateUrl<span class="token punctuation" >:</span> <span class="token string" >\'./app.component.html\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppComponent</span> <span class="token punctuation" >{</span>\n  form <span class="token operator" >=</span> <span class="token keyword" >new</span> <span class="token class-name" >FormGroup</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  model<span class="token punctuation" >:</span> <span class="token keyword" >any</span> <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  options<span class="token punctuation" >:</span> FormlyFormOptions <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n  existingUsers <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n    <span class="token string" >\'user1\'</span><span class="token punctuation" >,</span>\n    <span class="token string" >\'user2\'</span><span class="token punctuation" >,</span>\n    <span class="token string" >\'user3\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n  fields<span class="token punctuation" >:</span> FormlyFieldConfig<span class="token punctuation" >[</span><span class="token punctuation" >]</span> <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'text\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'Username (validated on `blur`)\'</span><span class="token punctuation" >,</span>\n        placeholder<span class="token punctuation" >:</span> <span class="token string" >\'Username\'</span><span class="token punctuation" >,</span>\n        required<span class="token punctuation" >:</span> <span class="token keyword" >true</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      modelOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        updateOn<span class="token punctuation" >:</span> <span class="token string" >\'blur\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      asyncValidators<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        uniqueUsername<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n          expression<span class="token punctuation" >:</span> <span class="token punctuation" >(</span>control<span class="token punctuation" >:</span> FormControl<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n            <span class="token keyword" >return</span> <span class="token keyword" >new</span> <span class="token class-name" >Promise</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span>resolve<span class="token punctuation" >,</span> reject<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n              <span class="token function" >setTimeout</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n                <span class="token function" >resolve</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>existingUsers<span class="token punctuation" >.</span><span class="token function" >indexOf</span><span class="token punctuation" >(</span>control<span class="token punctuation" >.</span>value<span class="token punctuation" >)</span> <span class="token operator" >===</span> <span class="token operator" >-</span><span class="token number" >1</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n              <span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token number" >1000</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n            <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n          <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          message<span class="token punctuation" >:</span> <span class="token string" >\'This username is already taken.\'</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n  <span class="token function" >submit</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>form<span class="token punctuation" >.</span>valid<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token function" >alert</span><span class="token punctuation" >(</span>JSON<span class="token punctuation" >.</span><span class="token function" >stringify</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>model<span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'},F5ll:function(n,s){n.exports='<b>Existing usernames</b>\n<ul>\n  <li *ngFor="let u of existingUsers">{{ u }}</li>\n</ul>\n\n<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form">\n    <button type="submit" class="btn btn-primary submit-button">Submit</button>\n  </formly-form>\n</form>\n'},FSxq:function(n,s){n.exports='<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>b</span><span class="token punctuation" >></span></span>Existing usernames<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>b</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ul</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>li</span> <span class="token attr-name" >*ngFor</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>let u of existingUsers<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>{{ u }}<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>li</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>ul</span><span class="token punctuation" >></span></span>\n\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>form</span> <span class="token attr-name" >[formGroup]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span> <span class="token attr-name" >(ngSubmit)</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit()<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>formly-form</span> <span class="token attr-name" >[model]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>model<span class="token punctuation" >"</span></span> <span class="token attr-name" >[fields]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>fields<span class="token punctuation" >"</span></span> <span class="token attr-name" >[options]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>options<span class="token punctuation" >"</span></span> <span class="token attr-name" >[form]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit<span class="token punctuation" >"</span></span> <span class="token attr-name" >class</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>btn btn-primary submit-button<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Submit<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>formly-form</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>form</span><span class="token punctuation" >></span></span>\n'},GqMw:function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NgModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> CommonModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/common\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> ReactiveFormsModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyBootstrapModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/bootstrap\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> AppComponent <span class="token punctuation" >}</span> from <span class="token string" >\'./app.component\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >NgModule</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  imports<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    CommonModule<span class="token punctuation" >,</span>\n    ReactiveFormsModule<span class="token punctuation" >,</span>\n    FormlyBootstrapModule<span class="token punctuation" >,</span>\n    FormlyModule<span class="token punctuation" >.</span><span class="token function" >forRoot</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      validationMessages<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span> name<span class="token punctuation" >:</span> <span class="token string" >\'required\'</span><span class="token punctuation" >,</span> message<span class="token punctuation" >:</span> <span class="token string" >\'This field is required\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  declarations<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    AppComponent<span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppModule</span> <span class="token punctuation" >{</span> <span class="token punctuation" >}</span>\n'},W5e8:function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FormGroup, FormControl } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  existingUsers = [\n    'user1',\n    'user2',\n    'user3',\n  ];\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'text',\n      type: 'input',\n      templateOptions: {\n        label: 'Username (validated on `blur`)',\n        placeholder: 'Username',\n        required: true,\n      },\n      modelOptions: {\n        updateOn: 'blur',\n      },\n      asyncValidators: {\n        uniqueUsername: {\n          expression: (control: FormControl) => {\n            return new Promise((resolve, reject) => {\n              setTimeout(() => {\n                resolve(this.existingUsers.indexOf(control.value) === -1);\n              }, 1000);\n            });\n          },\n          message: 'This username is already taken.',\n        },\n      },\n    },\n  ];\n\n  submit() {\n    if (this.form.valid) {\n      alert(JSON.stringify(this.model));\n    }\n  }\n}\n"},rlJS:function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\nimport { AppComponent } from './app.component';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validationMessages: [\n        { name: 'required', message: 'This field is required' },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"}}]);
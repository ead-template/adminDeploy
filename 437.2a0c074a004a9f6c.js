"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[437],{8057:(K,B,_)=>{_.d(B,{XZ:()=>D,nD:()=>H});var w=_(4902),T=_(5671),i=_(3144),d=_(4942),g=_(6814),e=_(6954),R=_(6223),k=_(2332),y=_(5219),x=_(2591),I=["cb"];function L(h,f){if(1&h&&e._UZ(0,"span",10),2&h){var p=e.oxw(3);e.Q6J("ngClass",p.checkboxIcon)}}function P(h,f){1&h&&e._UZ(0,"CheckIcon",11),2&h&&e.Q6J("styleClass","p-checkbox-icon")}function E(h,f){if(1&h&&(e.ynx(0),e.YNc(1,L,1,1,"span",8),e.YNc(2,P,1,1,"CheckIcon",9),e.BQk()),2&h){var p=e.oxw(2);e.xp6(1),e.Q6J("ngIf",p.checkboxIcon),e.xp6(1),e.Q6J("ngIf",!p.checkboxIcon)}}function M(h,f){}function S(h,f){1&h&&e.YNc(0,M,0,0,"ng-template")}function O(h,f){if(1&h&&(e.TgZ(0,"span",12),e.YNc(1,S,1,0,null,13),e.qZA()),2&h){var p=e.oxw(2);e.xp6(1),e.Q6J("ngTemplateOutlet",p.checkboxIconTemplate)}}function A(h,f){if(1&h&&(e.ynx(0),e.YNc(1,E,3,2,"ng-container",5),e.YNc(2,O,2,1,"span",7),e.BQk()),2&h){var p=e.oxw();e.xp6(1),e.Q6J("ngIf",!p.checkboxIconTemplate),e.xp6(1),e.Q6J("ngIf",p.checkboxIconTemplate)}}var z=function(f,p,u){return{"p-checkbox-label":!0,"p-checkbox-label-active":f,"p-disabled":p,"p-checkbox-label-focus":u}};function Q(h,f){if(1&h){var p=e.EpF();e.TgZ(0,"label",14),e.NdJ("click",function(C){e.CHM(p);var v=e.oxw(),Z=e.MAs(3);return e.KtG(v.onClick(C,Z,!0))}),e._uU(1),e.qZA()}if(2&h){var u=e.oxw();e.Tol(u.labelStyleClass),e.Q6J("ngClass",e.kEZ(5,z,u.checked(),u.disabled,u.focused)),e.uIk("for",u.inputId),e.xp6(1),e.Oqu(u.label)}}var J=function(f,p,u){return{"p-checkbox p-component":!0,"p-checkbox-checked":f,"p-checkbox-disabled":p,"p-checkbox-focused":u}},F=function(f,p,u){return{"p-highlight":f,"p-disabled":p,"p-focus":u}},N={provide:R.JU,useExisting:(0,e.Gpc)(function(){return D}),multi:!0},D=function(){var h,f=function(){function p(u){(0,T.Z)(this,p),(0,d.Z)(this,"cd",void 0),(0,d.Z)(this,"value",void 0),(0,d.Z)(this,"name",void 0),(0,d.Z)(this,"disabled",void 0),(0,d.Z)(this,"binary",void 0),(0,d.Z)(this,"label",void 0),(0,d.Z)(this,"ariaLabelledBy",void 0),(0,d.Z)(this,"ariaLabel",void 0),(0,d.Z)(this,"tabindex",void 0),(0,d.Z)(this,"inputId",void 0),(0,d.Z)(this,"style",void 0),(0,d.Z)(this,"styleClass",void 0),(0,d.Z)(this,"labelStyleClass",void 0),(0,d.Z)(this,"formControl",void 0),(0,d.Z)(this,"checkboxIcon",void 0),(0,d.Z)(this,"readonly",void 0),(0,d.Z)(this,"required",void 0),(0,d.Z)(this,"trueValue",!0),(0,d.Z)(this,"falseValue",!1),(0,d.Z)(this,"onChange",new e.vpe),(0,d.Z)(this,"inputViewChild",void 0),(0,d.Z)(this,"templates",void 0),(0,d.Z)(this,"checkboxIconTemplate",void 0),(0,d.Z)(this,"model",void 0),(0,d.Z)(this,"onModelChange",function(){}),(0,d.Z)(this,"onModelTouched",function(){}),(0,d.Z)(this,"focused",!1),this.cd=u}return(0,i.Z)(p,[{key:"ngAfterContentInit",value:function(){var c=this;this.templates.forEach(function(C){"icon"===C.getType()&&(c.checkboxIconTemplate=C.template)})}},{key:"onClick",value:function(c,C,v){c.preventDefault(),!this.disabled&&!this.readonly&&(this.updateModel(c),v&&C.focus())}},{key:"updateModel",value:function(c){var v,C=this;this.binary?(v=this.checked()?this.falseValue:this.trueValue,this.model=v,this.onModelChange(v)):(v=this.checked()?this.model.filter(function(Z){return!k.gb.equals(Z,C.value)}):this.model?[].concat((0,w.Z)(this.model),[this.value]):[this.value],this.onModelChange(v),this.model=v,this.formControl&&this.formControl.setValue(v)),this.onChange.emit({checked:v,originalEvent:c})}},{key:"handleChange",value:function(c){this.readonly||this.updateModel(c)}},{key:"onFocus",value:function(){this.focused=!0}},{key:"onBlur",value:function(){this.focused=!1,this.onModelTouched()}},{key:"focus",value:function(){var c;null===(c=this.inputViewChild)||void 0===c||c.nativeElement.focus()}},{key:"writeValue",value:function(c){this.model=c,this.cd.markForCheck()}},{key:"registerOnChange",value:function(c){this.onModelChange=c}},{key:"registerOnTouched",value:function(c){this.onModelTouched=c}},{key:"setDisabledState",value:function(c){this.disabled=c,this.cd.markForCheck()}},{key:"checked",value:function(){return this.binary?this.model===this.trueValue:k.gb.contains(this.value,this.model)}}]),p}();return h=f,(0,d.Z)(f,"\u0275fac",function(u){return new(u||h)(e.Y36(e.sBO))}),(0,d.Z)(f,"\u0275cmp",e.Xpm({type:h,selectors:[["p-checkbox"]],contentQueries:function(u,c,C){var v;1&u&&e.Suo(C,y.jx,4),2&u&&e.iGM(v=e.CRH())&&(c.templates=v)},viewQuery:function(u,c){var C;1&u&&e.Gf(I,5),2&u&&e.iGM(C=e.CRH())&&(c.inputViewChild=C.first)},hostAttrs:[1,"p-element"],inputs:{value:"value",name:"name",disabled:"disabled",binary:"binary",label:"label",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:"tabindex",inputId:"inputId",style:"style",styleClass:"styleClass",labelStyleClass:"labelStyleClass",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:"readonly",required:"required",trueValue:"trueValue",falseValue:"falseValue"},outputs:{onChange:"onChange"},features:[e._Bn([N])],decls:7,vars:26,consts:[[3,"ngStyle","ngClass"],[1,"p-hidden-accessible"],["type","checkbox",3,"readonly","value","checked","disabled","focus","blur","change"],["cb",""],[1,"p-checkbox-box",3,"ngClass","click"],[4,"ngIf"],[3,"class","ngClass","click",4,"ngIf"],["class","p-checkbox-icon",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[3,"styleClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"],[1,"p-checkbox-icon"],[4,"ngTemplateOutlet"],[3,"ngClass","click"]],template:function(u,c){if(1&u){var C=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"input",2,3),e.NdJ("focus",function(){return c.onFocus()})("blur",function(){return c.onBlur()})("change",function(Z){return c.handleChange(Z)}),e.qZA()(),e.TgZ(4,"div",4),e.NdJ("click",function(Z){e.CHM(C);var Y=e.MAs(3);return e.KtG(c.onClick(Z,Y,!0))}),e.YNc(5,A,3,2,"ng-container",5),e.qZA()(),e.YNc(6,Q,2,9,"label",6)}2&u&&(e.Tol(c.styleClass),e.Q6J("ngStyle",c.style)("ngClass",e.kEZ(18,J,c.checked(),c.disabled,c.focused)),e.xp6(2),e.Q6J("readonly",c.readonly)("value",c.value)("checked",c.checked())("disabled",c.disabled),e.uIk("id",c.inputId)("name",c.name)("tabindex",c.tabindex)("aria-labelledby",c.ariaLabelledBy)("aria-label",c.ariaLabel)("aria-checked",c.checked())("required",c.required),e.xp6(2),e.Q6J("ngClass",e.kEZ(22,F,c.checked(),c.disabled,c.focused)),e.xp6(1),e.Q6J("ngIf",c.checked()),e.xp6(1),e.Q6J("ngIf",c.label))},dependencies:function(){return[g.mk,g.O5,g.tP,g.PC,x.n]},styles:[".p-checkbox{display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:bottom;position:relative}.p-checkbox-disabled{cursor:default!important;pointer-events:none}.p-checkbox-box{display:flex;justify-content:center;align-items:center}p-checkbox{display:inline-flex;vertical-align:bottom;align-items:center}.p-checkbox-label{line-height:1}\n"],encapsulation:2,changeDetection:0})),f}(),H=function(){var h,f=(0,i.Z)(function p(){(0,T.Z)(this,p)});return h=f,(0,d.Z)(f,"\u0275fac",function(u){return new(u||h)}),(0,d.Z)(f,"\u0275mod",e.oAB({type:h})),(0,d.Z)(f,"\u0275inj",e.cJS({imports:[g.ez,x.n,y.m8]})),f}()},1423:(K,B,_)=>{_.d(B,{ro:()=>V,QK:()=>te,gz:()=>ae});var w=_(5671),T=_(3144),i=_(4942),d=_(6825),g=_(6814),e=_(6954),R=_(6223),k=_(5219),y=_(2076),x=_(3714),I=_(2332),L=_(7778),P=_(7326),E=_(136),M=_(8486),S=_(4713),O=function(){var s,r=function(l){(0,E.Z)(n,l);var t=(0,M.Z)(n);function n(){var a;(0,w.Z)(this,n);for(var o=arguments.length,m=new Array(o),b=0;b<o;b++)m[b]=arguments[b];return a=t.call.apply(t,[this].concat(m)),(0,i.Z)((0,P.Z)(a),"pathId",void 0),a}return(0,T.Z)(n,[{key:"ngOnInit",value:function(){this.pathId="url(#"+(0,I.Th)()+")"}}]),n}(S.s);return s=r,(0,i.Z)(r,"\u0275fac",function(){var l;return function(n){return(l||(l=e.n5z(s)))(n||s)}}()),(0,i.Z)(r,"\u0275cmp",e.Xpm({type:s,selectors:[["EyeSlashIcon"]],standalone:!0,features:[e.qOj,e.jDz],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(t,n){1&t&&(e.O4$(),e.TgZ(0,"svg",0)(1,"g"),e._UZ(2,"path",1),e.qZA(),e.TgZ(3,"defs")(4,"clipPath",2),e._UZ(5,"rect",3),e.qZA()()()),2&t&&(e.Tol(n.getClassNames()),e.uIk("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),e.xp6(1),e.uIk("clip-path",n.pathId),e.xp6(3),e.Q6J("id",n.pathId))},encapsulation:2})),r}(),A=function(){var s,r=function(l){(0,E.Z)(n,l);var t=(0,M.Z)(n);function n(){return(0,w.Z)(this,n),t.apply(this,arguments)}return(0,T.Z)(n)}(S.s);return s=r,(0,i.Z)(r,"\u0275fac",function(){var l;return function(n){return(l||(l=e.n5z(s)))(n||s)}}()),(0,i.Z)(r,"\u0275cmp",e.Xpm({type:s,selectors:[["EyeIcon"]],standalone:!0,features:[e.qOj,e.jDz],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z","fill","currentColor"]],template:function(t,n){1&t&&(e.O4$(),e.TgZ(0,"svg",0),e._UZ(1,"path",1),e.qZA()),2&t&&(e.Tol(n.getClassNames()),e.uIk("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})),r}(),z=["input"];function Q(s,r){if(1&s){var l=e.EpF();e.TgZ(0,"TimesIcon",8),e.NdJ("click",function(){e.CHM(l);var n=e.oxw(2);return e.KtG(n.clear())}),e.qZA()}2&s&&e.Q6J("styleClass","p-password-clear-icon")}function J(s,r){}function F(s,r){1&s&&e.YNc(0,J,0,0,"ng-template")}function N(s,r){if(1&s){var l=e.EpF();e.ynx(0),e.YNc(1,Q,1,1,"TimesIcon",5),e.TgZ(2,"span",6),e.NdJ("click",function(){e.CHM(l);var a=e.oxw();return e.KtG(a.clear())}),e.YNc(3,F,1,0,null,7),e.qZA(),e.BQk()}if(2&s){var t=e.oxw();e.xp6(1),e.Q6J("ngIf",!t.clearIconTemplate),e.xp6(2),e.Q6J("ngTemplateOutlet",t.clearIconTemplate)}}function D(s,r){if(1&s){var l=e.EpF();e.TgZ(0,"EyeSlashIcon",10),e.NdJ("click",function(){e.CHM(l);var n=e.oxw(3);return e.KtG(n.onMaskToggle())}),e.qZA()}}function H(s,r){}function h(s,r){1&s&&e.YNc(0,H,0,0,"ng-template")}function f(s,r){if(1&s){var l=e.EpF();e.TgZ(0,"span",10),e.NdJ("click",function(){e.CHM(l);var a=e.oxw(3);return e.KtG(a.onMaskToggle())}),e.YNc(1,h,1,0,null,7),e.qZA()}if(2&s){var t=e.oxw(3);e.xp6(1),e.Q6J("ngTemplateOutlet",t.hideIconTemplate)}}function p(s,r){if(1&s&&(e.ynx(0),e.YNc(1,D,1,0,"EyeSlashIcon",9),e.YNc(2,f,2,1,"span",9),e.BQk()),2&s){var l=e.oxw(2);e.xp6(1),e.Q6J("ngIf",!l.hideIconTemplate),e.xp6(1),e.Q6J("ngIf",l.hideIconTemplate)}}function u(s,r){if(1&s){var l=e.EpF();e.TgZ(0,"EyeIcon",10),e.NdJ("click",function(){e.CHM(l);var n=e.oxw(3);return e.KtG(n.onMaskToggle())}),e.qZA()}}function c(s,r){}function C(s,r){1&s&&e.YNc(0,c,0,0,"ng-template")}function v(s,r){if(1&s){var l=e.EpF();e.TgZ(0,"span",10),e.NdJ("click",function(){e.CHM(l);var a=e.oxw(3);return e.KtG(a.onMaskToggle())}),e.YNc(1,C,1,0,null,7),e.qZA()}if(2&s){var t=e.oxw(3);e.xp6(1),e.Q6J("ngTemplateOutlet",t.showIconTemplate)}}function Z(s,r){if(1&s&&(e.ynx(0),e.YNc(1,u,1,0,"EyeIcon",9),e.YNc(2,v,2,1,"span",9),e.BQk()),2&s){var l=e.oxw(2);e.xp6(1),e.Q6J("ngIf",!l.showIconTemplate),e.xp6(1),e.Q6J("ngIf",l.showIconTemplate)}}function Y(s,r){if(1&s&&(e.ynx(0),e.YNc(1,p,3,2,"ng-container",3),e.YNc(2,Z,3,2,"ng-container",3),e.BQk()),2&s){var l=e.oxw();e.xp6(1),e.Q6J("ngIf",l.unmasked),e.xp6(1),e.Q6J("ngIf",!l.unmasked)}}function U(s,r){1&s&&e.GkF(0)}function G(s,r){1&s&&e.GkF(0)}function W(s,r){if(1&s&&(e.ynx(0),e.YNc(1,G,1,0,"ng-container",7),e.BQk()),2&s){var l=e.oxw(2);e.xp6(1),e.Q6J("ngTemplateOutlet",l.contentTemplate)}}var j=function(r){return{width:r}};function q(s,r){if(1&s&&(e.TgZ(0,"div",15),e._UZ(1,"div",0),e.ALo(2,"mapper"),e.qZA(),e.TgZ(3,"div",16),e._uU(4),e.qZA()),2&s){var l=e.oxw(2);e.xp6(1),e.Q6J("ngClass",e.xi3(2,3,l.meter,l.strengthClass))("ngStyle",e.VKq(6,j,l.meter?l.meter.width:"")),e.xp6(3),e.Oqu(l.infoText)}}function X(s,r){1&s&&e.GkF(0)}var $=function(r,l){return{showTransitionParams:r,hideTransitionParams:l}},ee=function(r){return{value:"visible",params:r}};function ne(s,r){if(1&s){var l=e.EpF();e.TgZ(0,"div",11,12),e.NdJ("click",function(o){e.CHM(l);var m=e.oxw();return e.KtG(m.onOverlayClick(o))})("@overlayAnimation.start",function(o){e.CHM(l);var m=e.oxw();return e.KtG(m.onAnimationStart(o))})("@overlayAnimation.done",function(o){e.CHM(l);var m=e.oxw();return e.KtG(m.onAnimationEnd(o))}),e.YNc(2,U,1,0,"ng-container",7),e.YNc(3,W,2,1,"ng-container",13),e.YNc(4,q,5,8,"ng-template",null,14,e.W1O),e.YNc(6,X,1,0,"ng-container",7),e.qZA()}if(2&s){var t=e.MAs(5),n=e.oxw();e.Q6J("ngClass","p-password-panel p-component")("@overlayAnimation",e.VKq(9,ee,e.WLB(6,$,n.showTransitionOptions,n.hideTransitionOptions))),e.xp6(2),e.Q6J("ngTemplateOutlet",n.headerTemplate),e.xp6(1),e.Q6J("ngIf",n.contentTemplate)("ngIfElse",t),e.xp6(3),e.Q6J("ngTemplateOutlet",n.footerTemplate)}}var te=function(){var s,r=function(){function l(t,n,a,o,m){(0,w.Z)(this,l),(0,i.Z)(this,"document",void 0),(0,i.Z)(this,"platformId",void 0),(0,i.Z)(this,"renderer",void 0),(0,i.Z)(this,"el",void 0),(0,i.Z)(this,"zone",void 0),(0,i.Z)(this,"promptLabel","Enter a password"),(0,i.Z)(this,"weakLabel","Weak"),(0,i.Z)(this,"mediumLabel","Medium"),(0,i.Z)(this,"strongLabel","Strong"),(0,i.Z)(this,"feedback",!0),(0,i.Z)(this,"panel",void 0),(0,i.Z)(this,"meter",void 0),(0,i.Z)(this,"info",void 0),(0,i.Z)(this,"filled",void 0),(0,i.Z)(this,"scrollHandler",void 0),(0,i.Z)(this,"documentResizeListener",void 0),this.document=t,this.platformId=n,this.renderer=a,this.el=o,this.zone=m}return(0,T.Z)(l,[{key:"showPassword",set:function(n){this.el.nativeElement.type=n?"text":"password"}},{key:"ngDoCheck",value:function(){this.updateFilledState()}},{key:"onInput",value:function(n){this.updateFilledState()}},{key:"updateFilledState",value:function(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}},{key:"createPanel",value:function(){(0,g.NF)(this.platformId)&&(this.panel=this.renderer.createElement("div"),this.renderer.addClass(this.panel,"p-password-panel"),this.renderer.addClass(this.panel,"p-component"),this.renderer.addClass(this.panel,"p-password-panel-overlay"),this.renderer.addClass(this.panel,"p-connected-overlay"),this.meter=this.renderer.createElement("div"),this.renderer.addClass(this.meter,"p-password-meter"),this.renderer.appendChild(this.panel,this.meter),this.info=this.renderer.createElement("div"),this.renderer.addClass(this.info,"p-password-info"),this.renderer.setProperty(this.info,"textContent",this.promptLabel),this.renderer.appendChild(this.panel,this.info),this.renderer.setStyle(this.panel,"minWidth","".concat(this.el.nativeElement.offsetWidth,"px")),this.renderer.appendChild(document.body,this.panel))}},{key:"showOverlay",value:function(){var n=this;this.feedback&&(this.panel||this.createPanel(),this.renderer.setStyle(this.panel,"zIndex",String(++y.p.zindex)),this.renderer.setStyle(this.panel,"display","block"),this.zone.runOutsideAngular(function(){setTimeout(function(){y.p.addClass(n.panel,"p-connected-overlay-visible"),n.bindScrollListener(),n.bindDocumentResizeListener()},1)}),y.p.absolutePosition(this.panel,this.el.nativeElement))}},{key:"hideOverlay",value:function(){var n=this;this.feedback&&this.panel&&(y.p.addClass(this.panel,"p-connected-overlay-hidden"),y.p.removeClass(this.panel,"p-connected-overlay-visible"),this.unbindScrollListener(),this.unbindDocumentResizeListener(),this.zone.runOutsideAngular(function(){setTimeout(function(){n.ngOnDestroy()},150)}))}},{key:"onFocus",value:function(){this.showOverlay()}},{key:"onBlur",value:function(){this.hideOverlay()}},{key:"onKeyup",value:function(n){if(this.feedback){var a=n.target.value,o=null,m=null;if(0===a.length)o=this.promptLabel,m="0px 0px";else{var b=this.testStrength(a);b<30?(o=this.weakLabel,m="0px -10px"):b>=30&&b<80?(o=this.mediumLabel,m="0px -20px"):b>=80&&(o=this.strongLabel,m="0px -30px")}(!this.panel||!y.p.hasClass(this.panel,"p-connected-overlay-visible"))&&this.showOverlay(),this.renderer.setStyle(this.meter,"backgroundPosition",m),this.info.textContent=o}}},{key:"testStrength",value:function(n){var o,a=0;return o=n.match("[0-9]"),a+=25*this.normalize(o?o.length:.25,1),o=n.match("[a-zA-Z]"),a+=10*this.normalize(o?o.length:.5,3),o=n.match("[!@#$%^&*?_~.,;=]"),a+=35*this.normalize(o?o.length:.16666666666666666,1),o=n.match("[A-Z]"),a+=30*this.normalize(o?o.length:.16666666666666666,1),(a*=n.length/8)>100?100:a}},{key:"normalize",value:function(n,a){return n-a<=0?n/a:1+n/(n+a/4)*.5}},{key:"disabled",get:function(){return this.el.nativeElement.disabled}},{key:"bindScrollListener",value:function(){var n=this;this.scrollHandler||(this.scrollHandler=new y.V(this.el.nativeElement,function(){y.p.hasClass(n.panel,"p-connected-overlay-visible")&&n.hideOverlay()})),this.scrollHandler.bindScrollListener()}},{key:"unbindScrollListener",value:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}},{key:"bindDocumentResizeListener",value:function(){(0,g.NF)(this.platformId)&&!this.documentResizeListener&&(this.documentResizeListener=this.renderer.listen(this.document.defaultView,"resize",this.onWindowResize.bind(this)))}},{key:"unbindDocumentResizeListener",value:function(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}},{key:"onWindowResize",value:function(){y.p.isTouchDevice()||this.hideOverlay()}},{key:"ngOnDestroy",value:function(){this.panel&&(this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindDocumentResizeListener(),this.renderer.removeChild(this.document.body,this.panel),this.panel=null,this.meter=null,this.info=null)}}]),l}();return s=r,(0,i.Z)(r,"\u0275fac",function(t){return new(t||s)(e.Y36(g.K0),e.Y36(e.Lbi),e.Y36(e.Qsj),e.Y36(e.SBq),e.Y36(e.R0b))}),(0,i.Z)(r,"\u0275dir",e.lG2({type:s,selectors:[["","pPassword",""]],hostAttrs:[1,"p-inputtext","p-component","p-element"],hostVars:2,hostBindings:function(t,n){1&t&&e.NdJ("input",function(o){return n.onInput(o)})("focus",function(){return n.onFocus()})("blur",function(){return n.onBlur()})("keyup",function(o){return n.onKeyup(o)}),2&t&&e.ekj("p-filled",n.filled)},inputs:{promptLabel:"promptLabel",weakLabel:"weakLabel",mediumLabel:"mediumLabel",strongLabel:"strongLabel",feedback:"feedback",showPassword:"showPassword"}})),r}(),ie=function(){var s,r=function(){function l(){(0,w.Z)(this,l)}return(0,T.Z)(l,[{key:"transform",value:function(n,a){for(var o=arguments.length,m=new Array(o>2?o-2:0),b=2;b<o;b++)m[b-2]=arguments[b];return a.apply(void 0,[n].concat(m))}}]),l}();return s=r,(0,i.Z)(r,"\u0275fac",function(t){return new(t||s)}),(0,i.Z)(r,"\u0275pipe",e.Yjl({name:"mapper",type:s,pure:!0})),r}(),se={provide:R.JU,useExisting:(0,e.Gpc)(function(){return V}),multi:!0},V=function(){var s,r=function(){function l(t,n,a,o,m,b,le){(0,w.Z)(this,l),(0,i.Z)(this,"document",void 0),(0,i.Z)(this,"platformId",void 0),(0,i.Z)(this,"renderer",void 0),(0,i.Z)(this,"cd",void 0),(0,i.Z)(this,"config",void 0),(0,i.Z)(this,"el",void 0),(0,i.Z)(this,"overlayService",void 0),(0,i.Z)(this,"ariaLabel",void 0),(0,i.Z)(this,"ariaLabelledBy",void 0),(0,i.Z)(this,"label",void 0),(0,i.Z)(this,"disabled",void 0),(0,i.Z)(this,"promptLabel",void 0),(0,i.Z)(this,"mediumRegex","^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"),(0,i.Z)(this,"strongRegex","^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"),(0,i.Z)(this,"weakLabel",void 0),(0,i.Z)(this,"mediumLabel",void 0),(0,i.Z)(this,"maxLength",void 0),(0,i.Z)(this,"strongLabel",void 0),(0,i.Z)(this,"inputId",void 0),(0,i.Z)(this,"feedback",!0),(0,i.Z)(this,"appendTo",void 0),(0,i.Z)(this,"toggleMask",void 0),(0,i.Z)(this,"inputStyleClass",void 0),(0,i.Z)(this,"styleClass",void 0),(0,i.Z)(this,"style",void 0),(0,i.Z)(this,"inputStyle",void 0),(0,i.Z)(this,"showTransitionOptions",".12s cubic-bezier(0, 0, 0.2, 1)"),(0,i.Z)(this,"hideTransitionOptions",".1s linear"),(0,i.Z)(this,"placeholder",void 0),(0,i.Z)(this,"showClear",!1),(0,i.Z)(this,"onFocus",new e.vpe),(0,i.Z)(this,"onBlur",new e.vpe),(0,i.Z)(this,"onClear",new e.vpe),(0,i.Z)(this,"input",void 0),(0,i.Z)(this,"contentTemplate",void 0),(0,i.Z)(this,"footerTemplate",void 0),(0,i.Z)(this,"headerTemplate",void 0),(0,i.Z)(this,"clearIconTemplate",void 0),(0,i.Z)(this,"hideIconTemplate",void 0),(0,i.Z)(this,"showIconTemplate",void 0),(0,i.Z)(this,"templates",void 0),(0,i.Z)(this,"overlayVisible",!1),(0,i.Z)(this,"meter",void 0),(0,i.Z)(this,"infoText",void 0),(0,i.Z)(this,"focused",!1),(0,i.Z)(this,"unmasked",!1),(0,i.Z)(this,"mediumCheckRegExp",void 0),(0,i.Z)(this,"strongCheckRegExp",void 0),(0,i.Z)(this,"resizeListener",void 0),(0,i.Z)(this,"scrollHandler",void 0),(0,i.Z)(this,"overlay",void 0),(0,i.Z)(this,"value",null),(0,i.Z)(this,"onModelChange",function(){}),(0,i.Z)(this,"onModelTouched",function(){}),(0,i.Z)(this,"translationSubscription",void 0),this.document=t,this.platformId=n,this.renderer=a,this.cd=o,this.config=m,this.el=b,this.overlayService=le}return(0,T.Z)(l,[{key:"ngAfterContentInit",value:function(){var n=this;this.templates.forEach(function(a){switch(a.getType()){case"content":default:n.contentTemplate=a.template;break;case"header":n.headerTemplate=a.template;break;case"footer":n.footerTemplate=a.template;break;case"clearicon":n.clearIconTemplate=a.template;break;case"hideicon":n.hideIconTemplate=a.template;break;case"showicon":n.showIconTemplate=a.template}})}},{key:"ngOnInit",value:function(){var n=this;this.infoText=this.promptText(),this.mediumCheckRegExp=new RegExp(this.mediumRegex),this.strongCheckRegExp=new RegExp(this.strongRegex),this.translationSubscription=this.config.translationObserver.subscribe(function(){n.updateUI(n.value||"")})}},{key:"onAnimationStart",value:function(n){switch(n.toState){case"visible":this.overlay=n.element,I.P9.set("overlay",this.overlay,this.config.zIndex.overlay),this.appendContainer(),this.alignOverlay(),this.bindScrollListener(),this.bindResizeListener();break;case"void":this.unbindScrollListener(),this.unbindResizeListener(),this.overlay=null}}},{key:"onAnimationEnd",value:function(n){"void"===n.toState&&I.P9.clear(n.element)}},{key:"appendContainer",value:function(){this.appendTo&&("body"===this.appendTo?this.renderer.appendChild(this.document.body,this.overlay):this.document.getElementById(this.appendTo).appendChild(this.overlay))}},{key:"alignOverlay",value:function(){this.appendTo?(this.overlay.style.minWidth=y.p.getOuterWidth(this.input.nativeElement)+"px",y.p.absolutePosition(this.overlay,this.input.nativeElement)):y.p.relativePosition(this.overlay,this.input.nativeElement)}},{key:"onInput",value:function(n){this.value=n.target.value,this.onModelChange(this.value)}},{key:"onInputFocus",value:function(n){this.focused=!0,this.feedback&&(this.overlayVisible=!0),this.onFocus.emit(n)}},{key:"onInputBlur",value:function(n){this.focused=!1,this.feedback&&(this.overlayVisible=!1),this.onModelTouched(),this.onBlur.emit(n)}},{key:"onKeyDown",value:function(n){"Escape"===n.key&&(this.overlayVisible=!1)}},{key:"onKeyUp",value:function(n){this.feedback&&(this.updateUI(n.target.value),this.overlayVisible||(this.overlayVisible=!0))}},{key:"updateUI",value:function(n){var a=null,o=null;switch(this.testStrength(n)){case 1:a=this.weakText(),o={strength:"weak",width:"33.33%"};break;case 2:a=this.mediumText(),o={strength:"medium",width:"66.66%"};break;case 3:a=this.strongText(),o={strength:"strong",width:"100%"};break;default:a=this.promptText(),o=null}this.meter=o,this.infoText=a}},{key:"onMaskToggle",value:function(){this.unmasked=!this.unmasked}},{key:"onOverlayClick",value:function(n){this.overlayService.add({originalEvent:n,target:this.el.nativeElement})}},{key:"testStrength",value:function(n){var a=0;return this.strongCheckRegExp.test(n)?a=3:this.mediumCheckRegExp.test(n)?a=2:n.length&&(a=1),a}},{key:"writeValue",value:function(n){this.value=void 0===n?null:n,this.feedback&&this.updateUI(this.value||""),this.cd.markForCheck()}},{key:"registerOnChange",value:function(n){this.onModelChange=n}},{key:"registerOnTouched",value:function(n){this.onModelTouched=n}},{key:"setDisabledState",value:function(n){this.disabled=n,this.cd.markForCheck()}},{key:"bindScrollListener",value:function(){var n=this;(0,g.NF)(this.platformId)&&(this.scrollHandler||(this.scrollHandler=new y.V(this.input.nativeElement,function(){n.overlayVisible&&(n.overlayVisible=!1)})),this.scrollHandler.bindScrollListener())}},{key:"bindResizeListener",value:function(){var n=this;(0,g.NF)(this.platformId)&&!this.resizeListener&&(this.resizeListener=this.renderer.listen(this.document.defaultView,"resize",function(){n.overlayVisible&&!y.p.isTouchDevice()&&(n.overlayVisible=!1)}))}},{key:"unbindScrollListener",value:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}},{key:"unbindResizeListener",value:function(){this.resizeListener&&(this.resizeListener(),this.resizeListener=null)}},{key:"containerClass",value:function(n){return{"p-password p-component p-inputwrapper":!0,"p-input-icon-right":n}}},{key:"inputFieldClass",value:function(n){return{"p-password-input":!0,"p-disabled":n}}},{key:"strengthClass",value:function(n){return"p-password-strength ".concat(n?n.strength:"")}},{key:"filled",value:function(){return null!=this.value&&this.value.toString().length>0}},{key:"promptText",value:function(){return this.promptLabel||this.getTranslation(k.ws.PASSWORD_PROMPT)}},{key:"weakText",value:function(){return this.weakLabel||this.getTranslation(k.ws.WEAK)}},{key:"mediumText",value:function(){return this.mediumLabel||this.getTranslation(k.ws.MEDIUM)}},{key:"strongText",value:function(){return this.strongLabel||this.getTranslation(k.ws.STRONG)}},{key:"restoreAppend",value:function(){this.overlay&&this.appendTo&&("body"===this.appendTo?this.renderer.removeChild(this.document.body,this.overlay):this.document.getElementById(this.appendTo).removeChild(this.overlay))}},{key:"inputType",value:function(n){return n?"text":"password"}},{key:"getTranslation",value:function(n){return this.config.getTranslation(n)}},{key:"clear",value:function(){this.value=null,this.onModelChange(this.value),this.writeValue(this.value),this.onClear.emit()}},{key:"ngOnDestroy",value:function(){this.overlay&&(I.P9.clear(this.overlay),this.overlay=null),this.restoreAppend(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.translationSubscription&&this.translationSubscription.unsubscribe()}}]),l}();return s=r,(0,i.Z)(r,"\u0275fac",function(t){return new(t||s)(e.Y36(g.K0),e.Y36(e.Lbi),e.Y36(e.Qsj),e.Y36(e.sBO),e.Y36(k.b4),e.Y36(e.SBq),e.Y36(k.F0))}),(0,i.Z)(r,"\u0275cmp",e.Xpm({type:s,selectors:[["p-password"]],contentQueries:function(t,n,a){var o;1&t&&e.Suo(a,k.jx,4),2&t&&e.iGM(o=e.CRH())&&(n.templates=o)},viewQuery:function(t,n){var a;1&t&&e.Gf(z,5),2&t&&e.iGM(a=e.CRH())&&(n.input=a.first)},hostAttrs:[1,"p-element","p-inputwrapper"],hostVars:8,hostBindings:function(t,n){2&t&&e.ekj("p-inputwrapper-filled",n.filled())("p-inputwrapper-focus",n.focused)("p-password-clearable",n.showClear)("p-password-mask",n.toggleMask)},inputs:{ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",label:"label",disabled:"disabled",promptLabel:"promptLabel",mediumRegex:"mediumRegex",strongRegex:"strongRegex",weakLabel:"weakLabel",mediumLabel:"mediumLabel",maxLength:"maxLength",strongLabel:"strongLabel",inputId:"inputId",feedback:"feedback",appendTo:"appendTo",toggleMask:"toggleMask",inputStyleClass:"inputStyleClass",styleClass:"styleClass",style:"style",inputStyle:"inputStyle",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",placeholder:"placeholder",showClear:"showClear"},outputs:{onFocus:"onFocus",onBlur:"onBlur",onClear:"onClear"},features:[e._Bn([se])],decls:9,vars:28,consts:[[3,"ngClass","ngStyle"],["pInputText","",3,"ngClass","ngStyle","value","input","focus","blur","keyup","keydown"],["input",""],[4,"ngIf"],[3,"ngClass","click",4,"ngIf"],[3,"styleClass","click",4,"ngIf"],[1,"p-password-clear-icon",3,"click"],[4,"ngTemplateOutlet"],[3,"styleClass","click"],[3,"click",4,"ngIf"],[3,"click"],[3,"ngClass","click"],["overlay",""],[4,"ngIf","ngIfElse"],["content",""],[1,"p-password-meter"],["className","p-password-info"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.ALo(1,"mapper"),e.TgZ(2,"input",1,2),e.NdJ("input",function(o){return n.onInput(o)})("focus",function(o){return n.onInputFocus(o)})("blur",function(o){return n.onInputBlur(o)})("keyup",function(o){return n.onKeyUp(o)})("keydown",function(o){return n.onKeyDown(o)}),e.ALo(4,"mapper"),e.ALo(5,"mapper"),e.qZA(),e.YNc(6,N,4,2,"ng-container",3),e.YNc(7,Y,3,2,"ng-container",3),e.YNc(8,ne,7,11,"div",4),e.qZA()),2&t&&(e.Tol(n.styleClass),e.Q6J("ngClass",e.xi3(1,19,n.toggleMask,n.containerClass))("ngStyle",n.style),e.xp6(2),e.Tol(n.inputStyleClass),e.Q6J("ngClass",e.xi3(4,22,n.disabled,n.inputFieldClass))("ngStyle",n.inputStyle)("value",n.value),e.uIk("label",n.label)("aria-label",n.ariaLabel)("aria-labelledBy",n.ariaLabelledBy)("id",n.inputId)("type",e.xi3(5,25,n.unmasked,n.inputType))("placeholder",n.placeholder)("maxlength",n.maxLength),e.xp6(4),e.Q6J("ngIf",n.showClear&&null!=n.value),e.xp6(1),e.Q6J("ngIf",n.toggleMask),e.xp6(1),e.Q6J("ngIf",n.overlayVisible))},dependencies:function(){return[g.mk,g.O5,g.tP,g.PC,x.o,L.q,O,A,ie]},styles:[".p-password{position:relative;display:inline-flex}.p-password-panel{position:absolute;top:0;left:0}.p-password .p-password-panel{min-width:100%}.p-password-meter{height:10px}.p-password-strength{height:100%;width:0%;transition:width 1s ease-in-out}.p-fluid .p-password{display:flex}.p-password-input::-ms-reveal,.p-password-input::-ms-clear{display:none}.p-password-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-password-clearable{position:relative}\n"],encapsulation:2,data:{animation:[(0,d.X$)("overlayAnimation",[(0,d.eR)(":enter",[(0,d.oB)({opacity:0,transform:"scaleY(0.8)"}),(0,d.jt)("{{showTransitionParams}}")]),(0,d.eR)(":leave",[(0,d.jt)("{{hideTransitionParams}}",(0,d.oB)({opacity:0}))])])]},changeDetection:0})),r}(),ae=function(){var s,r=(0,T.Z)(function l(){(0,w.Z)(this,l)});return s=r,(0,i.Z)(r,"\u0275fac",function(t){return new(t||s)}),(0,i.Z)(r,"\u0275mod",e.oAB({type:s})),(0,i.Z)(r,"\u0275inj",e.cJS({imports:[g.ez,x.j,L.q,O,A,k.m8]})),r}()}}]);
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="27bd3646-e172-520c-834d-2c7627d3a415")}catch(e){}}();
//# debugId=27bd3646-e172-520c-834d-2c7627d3a415

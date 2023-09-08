"use strict";(self.webpackChunkead_admin=self.webpackChunkead_admin||[]).push([[728],{3728:(J,p,t)=>{t.r(p),t.d(p,{AuthModule:()=>M});var u=t(3144),m=t(5671),y=t(6814),c=t(7795),n=t(6223),e=t(6954),Z=t(3859),b=t(1541),C=t(6896),g=t(707),h=t(8057),v=t(3714),x=t(1423),A=[{path:"",component:function(){var o,s=function(){function r(i,a,l,d,f){(0,m.Z)(this,r),this.layoutService=i,this.formBuilder=a,this.authService=l,this.router=d,this.notificationService=f,this.valCheck=["remember"],this.loginForm=this.formBuilder.group({username:["",n.kI.required],password:["",n.kI.required]})}return(0,u.Z)(r,[{key:"onSubmit",value:function(){var a=this;if(this.loginForm.valid){var l=this.loginForm.value;this.authService.login(l.username,l.password).then(function(T){T?(a.notificationService.showSuccess("Sucesso","Login realizado com sucesso"),a.router.navigate(["/"])):a.notificationService.showError("Error","Erro ao realizar o login ! Verifique suas credenciais")})}else this.notificationService.showError("Erro","Por favor, preencha todos os campos antes de continuar.")}}]),r}();return(o=s).\u0275fac=function(i){return new(i||o)(e.Y36(Z.P),e.Y36(n.qu),e.Y36(b.e),e.Y36(c.F0),e.Y36(C.g))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-login"]],decls:22,vars:3,consts:[[1,"surface-ground","flex","align-items-center","justify-content-center","min-h-screen","min-w-screen","overflow-hidden"],[1,"flex","flex-column","align-items-center","justify-content-center"],["src","assets/layout/images/logo.png","alt","Sakai logo",1,"mb-5","w-6rem","flex-shrink-0"],[2,"border-radius","56px","padding","0.3rem","background","linear-gradient(\n          180deg,\n          var(--primary-color) 10%,\n          rgba(33, 150, 243, 0) 30%\n        )"],[1,"w-full","surface-card","py-8","px-5","sm:px-8",2,"border-radius","53px"],[1,"text-center","mb-5"],[1,"text-600","font-medium"],[1,"p-4",3,"formGroup","ngSubmit"],["for","email",1,"block","text-900","text-xl","font-medium","mb-2"],["id","email","type","text","placeholder","Email address","pInputText","","formControlName","username",1,"w-full","md:w-30rem","mb-5","p-3"],["for","password",1,"block","text-900","font-medium","text-xl","mb-2"],["id","password","formControlName","password","placeholder","Password","styleClass","mb-5","inputStyleClass","w-full p-3 md:w-30rem",3,"toggleMask"],[1,"flex","align-items-center","justify-content-between","mb-5","gap-5"],[1,"flex","align-items-center"],["id","rememberme1","styleClass","mr-2",3,"binary"],["for","rememberme1"],["pButton","","pRipple","","label","Login","type","submit",1,"w-full","p-3","text-xl"]],template:function(i,a){1&i&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"img",2),e.TgZ(3,"div",3)(4,"div",4)(5,"div",5)(6,"span",6),e._uU(7,"Login"),e.qZA()(),e.TgZ(8,"form",7),e.NdJ("ngSubmit",function(){return a.onSubmit()}),e.TgZ(9,"div")(10,"label",8),e._uU(11,"Email"),e.qZA(),e._UZ(12,"input",9),e.TgZ(13,"label",10),e._uU(14,"Password"),e.qZA(),e._UZ(15,"p-password",11),e.TgZ(16,"div",12)(17,"div",13),e._UZ(18,"p-checkbox",14),e.TgZ(19,"label",15),e._uU(20,"Remember me"),e.qZA()()(),e._UZ(21,"button",16),e.qZA()()()()()()),2&i&&(e.xp6(8),e.Q6J("formGroup",a.loginForm),e.xp6(7),e.Q6J("toggleMask",!0),e.xp6(3),e.Q6J("binary",!0))},dependencies:[g.Hq,h.XZ,v.o,x.ro,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u],styles:["[_nghost-%COMP%]     .pi-eye, [_nghost-%COMP%]     .pi-eye-slash{transform:scale(1.6);margin-right:1rem;color:var(--primary-color)!important}"]}),s}()},{path:"**",redirectTo:"/notfound"}],w=function(){var o,s=(0,u.Z)(function r(){(0,m.Z)(this,r)});return(o=s).\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[c.Bz.forChild(A),c.Bz]}),s}(),M=function(){var o,s=(0,u.Z)(function r(){(0,m.Z)(this,r)});return(o=s).\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[y.ez,w,g.hJ,h.nD,v.j,x.gz,n.u5,n.UX]}),s}()}}]);
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="437aa0f1-b544-5614-89a9-d82c2ebeb0c8")}catch(e){}}();
//# debugId=437aa0f1-b544-5614-89a9-d82c2ebeb0c8

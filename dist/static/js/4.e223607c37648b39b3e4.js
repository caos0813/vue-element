webpackJsonp([4],{"49Lk":function(e,a){},Luci:function(e,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=r("Xxa5"),t=r.n(s),n=r("exGp"),o=r.n(n),i=r("0xDb"),u=r("lbHh"),c=r.n(u),m={data:function(){return{a:null,params:{},rules:{name:[{required:!0,message:"请输入账号",trigger:"change"}],passwords:[{required:!0,message:"请输入密码",trigger:"change"},{min:6,message:"密码长度不正确",trigger:"change"}]}}},methods:{getConfig:function(e){var a=this;return o()(t.a.mark(function r(){var s;return t.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,a.$fly.get(i.a.uploadToken,{},{headers:{Authorization:"Bearer "+e.token}});case 3:s=r.sent,c.a.set("user",{userName:a.params.userName,token:e.token,uploadConfig:s},{expires:7}),a.$message({message:"登录成功!",type:"success"}),a.$router.replace({name:"index"}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),a.$message({message:"登录失败",type:"error"});case 12:case"end":return r.stop()}},r,a,[[0,9]])}))()},submit:function(){var e=this;this.$refs.form.validate(function(a){a?e.$fly.post(i.a.login,e.params).then(function(a){e.getConfig(a)}).catch(function(){e.$message({message:"登录失败",type:"error"})}):console.log("error submit!!")})}}},p={render:function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"login-wrap"},[r("div",{staticClass:"form-wrap"},[r("el-form",{ref:"form",attrs:{model:e.params,rules:e.rules}},[r("el-form-item",{attrs:{prop:"userName"}},[r("el-input",{attrs:{placeholder:"请输入账号",name:"userName"},model:{value:e.params.name,callback:function(a){e.$set(e.params,"name",a)},expression:"params.name"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"passWord"}},[r("el-input",{attrs:{type:"passWord",placeholder:"请输入密码",name:"passWord"},model:{value:e.params.passwords,callback:function(a){e.$set(e.params,"passwords",a)},expression:"params.passwords"}})],1),e._v(" "),r("el-form-item",{staticClass:"text-center"},[r("el-button",{staticClass:"btn",attrs:{type:"primary","native-type":"submit",round:""},on:{click:function(a){return a.preventDefault(),e.submit(a)}}},[e._v("登录")])],1)],1)],1)])},staticRenderFns:[]};var l=r("VU/8")(m,p,!1,function(e){r("49Lk")},"data-v-4c8b91d2",null);a.default=l.exports}});
webpackJsonp([4],{Luci:function(e,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var r=a("0xDb"),t=a("lbHh"),n=a.n(t),o={data:function(){return{a:null,params:{},rules:{name:[{required:!0,message:"请输入账号",trigger:"change"}],passwords:[{required:!0,message:"请输入密码",trigger:"change"},{min:6,message:"密码长度不正确",trigger:"change"}]}}},methods:{submit:function(){var e=this;this.$refs.form.validate(function(s){s?(console.log(e.params),e.$fly.post(r.a.login,e.params).then(function(s){n.a.set("user",{userName:e.params.userName,token:s.token},{expires:7}),e.$message({message:"登录成功!",type:"success"}),e.$router.replace({name:"index"})}).catch(function(){e.$message({message:"登录失败",type:"error"})})):console.log("error submit!!")})}}},i={render:function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"login-wrap"},[a("div",{staticClass:"form-wrap"},[a("el-form",{ref:"form",attrs:{model:e.params,rules:e.rules}},[a("el-form-item",{attrs:{prop:"userName"}},[a("el-input",{attrs:{placeholder:"请输入账号",name:"userName"},model:{value:e.params.name,callback:function(s){e.$set(e.params,"name",s)},expression:"params.name"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"passWord"}},[a("el-input",{attrs:{type:"passWord",placeholder:"请输入密码",name:"passWord"},model:{value:e.params.passwords,callback:function(s){e.$set(e.params,"passwords",s)},expression:"params.passwords"}})],1),e._v(" "),a("el-form-item",{staticClass:"text-center"},[a("el-button",{staticClass:"btn",attrs:{type:"primary","native-type":"submit",round:""},on:{click:function(s){return s.preventDefault(),e.submit(s)}}},[e._v("登录")])],1)],1)],1)])},staticRenderFns:[]};var m=a("VU/8")(o,i,!1,function(e){a("x/M6")},"data-v-9456c97a",null);s.default=m.exports},"x/M6":function(e,s){}});
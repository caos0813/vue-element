webpackJsonp([3],{eZtN:function(e,t){},q5hk:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("0xDb"),i=a("bGai"),s={data:function(){return{rules:{title:[{required:!0,message:"请输入专题名称",trigger:"blur"}],filePath:[{required:!0,message:"请上传封面",trigger:"blur"}],pickerVal:[{required:!0,validator:function(e,t,a){t.length<1?a(new Error("请选择产品和分类")):a()},trigger:"change"}],introduction:[{required:!0,message:"请输入简介",trigger:"blur"}]},params:{title:"",isHomePageShow:0,pickerVal:[],filePath:"",introduction:""}}},components:{upload:i.e,picker:i.d},methods:{submit:function(){var e=this;this.$refs.form.validate(function(t){if(!t)return console.log("error submit!!"),!1;var a=e.params,i=a.title,s=a.filePath,l=a.pickerVal,o=a.id,n=a.introduction;e.$fly.post(r.a.specialHandle,{id:o,title:i,filePath:s,productId:l[0],introduction:n}).then(function(t){e.$message({message:"保存成功",duration:2e3,type:"success"}),e.$refs.form.resetFields(),e.goBack()}).catch(function(){e.$message({message:"保存失败",duration:2e3,type:"error"})})})}},created:function(){var e=this,t=this.$route.params.type,a=this.$route.query.id;"edit"===t&&this.$fly.get(r.a.specialDetail,{id:a}).then(function(t){e.params=t,e.params.pickerVal=[t.productId]})}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("div",{staticClass:"tools-bar"},[a("div",{staticClass:"left-wrap"},[a("back")],1),e._v(" "),a("div",{staticClass:"button-wrap"},[a("el-button",{attrs:{type:"warning",size:"small"},on:{click:e.submit}},[e._v("保存")])],1)]),e._v(" "),a("el-form",{ref:"form",attrs:{model:e.params,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{prop:"pickerVal",label:"产品"}},[a("picker",{model:{value:e.params.pickerVal,callback:function(t){e.$set(e.params,"pickerVal",t)},expression:"params.pickerVal"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"专题名称",prop:"title"}},[a("el-col",{attrs:{span:12}},[a("el-input",{model:{value:e.params.title,callback:function(t){e.$set(e.params,"title",t)},expression:"params.title"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"简介",prop:"introduction"}},[a("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入简介"},model:{value:e.params.introduction,callback:function(t){e.$set(e.params,"introduction",t)},expression:"params.introduction"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"封面",prop:"filePath"}},[a("upload",{model:{value:e.params.filePath,callback:function(t){e.$set(e.params,"filePath",t)},expression:"params.filePath"}})],1)],1)],1)},staticRenderFns:[]};var o=a("VU/8")(s,l,!1,function(e){a("eZtN")},"data-v-583a52a7",null);t.default=o.exports}});
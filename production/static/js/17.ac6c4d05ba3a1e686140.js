webpackJsonp([17],{NtuG:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("0xDb"),i=a("bGai"),s={data:function(){var e=this;return{params:{articleInfoTitle:null,moduleId:"",specialTopicInfoId:null,page:1,sortType:1},checkData:[],pickerVal:[],pageInfo:{totalElements:0,currentPage:1},tableData:[],loading:!1,sendDialog:!1,sendTitle:[],checkAll:!1,form:{radio:"1",sendTime:"",isIndeterminate:!0,provincesIds:[]},sendRules:{sendTime:[{required:!0,message:"请选择推送方式",trigger:"change",validator:function(t,a,n){"2"!==e.form.radio||e.form.sendTime?n():n(new Error("请选择定时推送时间"))}}],sendRange:[{type:"array",required:!0,message:"请至少选择一个推送范围",trigger:"change",validator:function(t,a,n){0===e.form.provincesIds.length?n(new Error("请至少选择一个推送范围")):n()}}]},pickerOptions2:{disabledDate:function(e){return e.getTime()<Date.now()-864e5}},provincesData:[],povincesDataById:[],bannerId:"",specialData:[],visible:!1}},components:{picker:i.e,listHandle:i.c,pagination:i.d,drawer:i.b},watch:{$route:function(e,t){console.log(e.params.type),this.params.page=1,this.params.specialTopicInfoId=null,this.params.articleInfoTitle=null,this.type=e.params.type,this.getArticleMajor(),this.getData(this.params)}},methods:{pickerChange:function(e){this.params.specialTopicInfoId=e,this.getData(this.params),console.log(e)},handleDelete:function(){var e=this;this.checkIds=[],Object(n.b)("您确定将选择的文章删除吗？","提示").then(function(){for(var t=0;t<e.checkData.length;t++){if(1===e.checkData[t].status)return e.$message.error("已发布的内容不能删除"),void(e.checkIds=[]);e.checkIds.push(e.checkData[t].id)}e.checkIds.length>0&&e.$fly.post(n.a["zhiyuan/articleDelete"],e.checkIds).then(function(t){if(!t.data)return e.$message({message:""+t.message,duration:2e3,type:"error"});e.$message({message:"删除成功",duration:2e3,type:"success"}),e.refresh()}).catch(function(){e.$message({message:"删除失败",duration:2e3,type:"error"})})})},handleSelectionChange:function(e){var t=this;this.checkData=[],this.lodash.map(e,function(e){t.checkData.push({id:e.id,status:e.status})})},pagination:function(e){this.params.page=e.page,this.params.size=e.limit,this.getData(this.params)},reset:function(){this.params={title:null,page:1,size:this.$refs.pageInfo.pageSizes[0],sortType:1},this.pickerVal=[],this.getData(this.params)},search:function(){console.log(this.pickerVal[0]),this.params.page=1,this.getData(this.params)},refresh:function(){this.params.page=1,this.getData(this.params)},getData:function(e){var t=this;e.moduleId=this.moduleId(this.type),e.page--,this.loading=!0,this.$fly.get(n.a.queryArticleInfoByCondition,e).then(function(a){setTimeout(function(){t.loading=!1},1e3);var n=a.data,i=n.content,s=n.totalElements;t.tableData=i,t.pageInfo={totalElements:parseInt(s),currentPage:e.page+1}})},openSendDialog:function(e){this.visible=!0,this.sendDialog=!0,this.bannerId=e,this.form={radio:"1",sendTime:"",isIndeterminate:!0,provincesIds:[]},this.$refs.form.resetFields()},handleCheckAllChange:function(e){var t=[];e?this.provincesData.map(function(e){if(!e.disabled)return t.push(e.name)}):t=[],this.form.provincesIds=t,this.form.provincesIds.length===this.provincesData.length&&(this.form.isIndeterminate=!1)},handleCheckedCitiesChange:function(e){var t=e.length;this.checkAll=t===this.provincesData.length,this.form.isIndeterminate=t>0&&t<this.provincesData.length},cancel:function(){this.$refs.form.resetFields(),this.visible=!1},sendFn:function(e){var t=this;this.$refs.form.validate(function(e){if(!e)return!1;!function(){var e=void 0,a=void 0,i=void 0,s=[],l=t.form.provincesIds,r=t.provincesData,o=function(e){l.map(function(t){return r[e].name===t&&s.push("pro_"+r[e].code),s})};for(var c in r)o(c);i=t.checkAll?0:1,e={id:t.bannerId,type:2,provinceIds:""+s,area:i},"1"===t.form.radio?a=n.a.bannerSend:"2"===t.form.radio&&(a=n.a.bannerSchedule,e.date=t.form.sendTime),Object(n.b)("您确定将推送选择的文章吗？","提示").then(function(){t.$fly.post(a,e).then(function(e){t.$message({message:"推送成功",duration:2e3,type:"success"}),t.params.page=1,t.getData(t.params)}).catch(function(){t.$message({message:"推送失败",duration:2e3,type:"error"}),t.visible=!1})}).catch(function(){t.visible=!1})}()})},handleBodyClick:function(e){this.visible=e},getArticleMajor:function(){var e=this;this.$fly.get(n.a.queryArticleInfoCondition,{moduleId:this.moduleId(this.type)}).then(function(t){e.specialData=t.specialTopicInfoBean})}},created:function(){var e=this;this.type=this.$route.params.type,this.getData(this.params),this.getArticleMajor(),this.$fly.get(n.a.getProvinces).then(function(t){if(1e5===t.status){var a=t.data;e.provincesData=a,e.$fly.get(n.a.getProvinceIds).then(function(t){e.povincesDataById=t,a.map(function(e){e.disabled=!0;for(var a=0;a<t.length;a++)if(t[a]==="pro_"+e.code){e.disabled=!1;break}}),e.$set(e,"provincesData",a)})}else e.$message({message:"请求失败",type:"error"})})},mounted:function(){this.params.size=this.$refs.pageInfo.pageSizes[0]}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("div",{staticClass:"tools-bar"},[a("div",{staticClass:"left-wrap"},[a("el-input",{attrs:{"prefix-icon":"el-icon-search",placeholder:"请输入搜索关键字",size:"small"},model:{value:e.params.articleInfoTitle,callback:function(t){e.$set(e.params,"articleInfoTitle",t)},expression:"params.articleInfoTitle"}}),e._v(" "),a("el-col",{attrs:{span:11}},[a("el-select",{attrs:{size:"small",placeholder:"请选择专题"},on:{change:e.pickerChange},model:{value:e.params.specialTopicInfoId,callback:function(t){e.$set(e.params,"specialTopicInfoId",t)},expression:"params.specialTopicInfoId"}},e._l(e.specialData,function(e,t){return a("el-option",{key:t,attrs:{label:e.title,value:e.id}})}))],1),e._v(" "),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.search}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{size:"small",type:"warning"},on:{click:e.reset}},[e._v("重置")])],1),e._v(" "),a("listHandle",{attrs:{checkData:e.checkData,module:e.params.moduleId,showDelete:!1},on:{refresh:e.refresh}},[a("el-button",{attrs:{type:"danger",size:"small"},on:{click:e.handleDelete}},[e._v("删除")])],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",attrs:{"header-cell-class-name":"tableHeader",data:e.tableData,"element-loading-text":"拼命加载中",border:"",stripe:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center","label-class-name":"checkLabel"}}),e._v(" "),a("el-table-column",{attrs:{prop:"title",label:"标题",align:"center","min-width":"180","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"specialTopicInfoTitle",label:"所属专题",width:"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"articleInfoLabelName",label:"文章标签",width:"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"状态",width:"90",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{size:"small",type:e._f("publicStatus")(t.row.status,"style")}},[e._v(e._s(e._f("publicStatus")(t.row.status)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"readNumber",label:"阅读量",width:"80",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"commentNumber",label:"评论量",width:"80",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"recommendNumber",label:"推荐量",width:"80",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"playNumber",label:"播放量",width:"80",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"collectionNumber",label:"收藏数",width:"80",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"jumpOutNumber",label:"跳出率",width:"100",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"createUse",label:"操作人",width:"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"创建时间",width:"170",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("dateTime")(t.row.createTime,"yyyy-MM-dd hh:mm:ss")))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"发布时间",width:"170",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("dateTime")(t.row.releaseTime,"yyyy-MM-dd hh:mm:ss")))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"80",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[2===t.row.status||3===t.row.status?a("el-button",{attrs:{type:"text ",size:"mini"}},[a("router-link",{attrs:{to:{name:"zhiyuan/article",params:{type:"edit"},query:{id:t.row.id}},tag:"span"}},[e._v("编辑")])],1):e._e(),e._v(" "),1===t.row.status?a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(a){a.stopPropagation(),e.openSendDialog(t.row.id)}}},[e._v("推送")]):e._e()]}}])})],1),e._v(" "),a("pagination",{ref:"pageInfo",attrs:{total:e.pageInfo.totalElements,page:e.pageInfo.currentPage},on:{"update:page":function(t){e.$set(e.pageInfo,"currentPage",t)},pagination:e.pagination}}),e._v(" "),a("drawer",{staticClass:"drawer-components",attrs:{title:"推送",width:"60",right:"120",placement:"right",showFooter:""},on:{bodyClick:e.handleBodyClick},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[a("el-form",{ref:"form",attrs:{model:e.form,"inline-message":"",rules:e.sendRules,"label-suffix":":","label-width":"100px"}},[a("el-form-item",{attrs:{label:"被推送的标题"}},e._l(e.checkData,function(t,n){return a("label",{key:n},[e._v(e._s(t.title))])})),e._v(" "),a("el-form-item",{attrs:{label:"推送时间",prop:"sendTime"}},[a("el-radio",{attrs:{label:"1"},model:{value:e.form.radio,callback:function(t){e.$set(e.form,"radio",t)},expression:"form.radio"}},[e._v("直接推送")]),e._v(" "),a("br"),e._v(" "),a("el-radio",{attrs:{label:"2"},model:{value:e.form.radio,callback:function(t){e.$set(e.form,"radio",t)},expression:"form.radio"}},[e._v("定时推送")]),e._v(" "),a("el-date-picker",{attrs:{type:"datetime",size:"small","picker-options":e.pickerOptions2,"value-format":"timestamp",placeholder:"请选择发布时间"},model:{value:e.form.sendTime,callback:function(t){e.$set(e.form,"sendTime",t)},expression:"form.sendTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"推送范围",prop:"sendRange"}},[a("el-checkbox",{attrs:{indeterminate:e.form.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全国")]),e._v(" "),a("el-checkbox-group",{on:{change:e.handleCheckedCitiesChange},model:{value:e.form.provincesIds,callback:function(t){e.$set(e.form,"provincesIds",t)},expression:"form.provincesIds"}},e._l(e.provincesData,function(t,n){return a("el-checkbox",{key:n,attrs:{label:t.name,disabled:t.disabled,min:1}},[e._v(e._s(t.name))])}))],1)],1),e._v(" "),a("template",{slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:e.cancel}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.sendFn("send")}}},[e._v("确定")])],1)],2)],1)},staticRenderFns:[]},r=a("VU/8")(s,l,!1,null,null,null);t.default=r.exports}});
//# sourceMappingURL=17.ac6c4d05ba3a1e686140.js.map
webpackJsonp([4],{"5rqN":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("0xDb"),s=a("bGai"),l={data:function(){return{params:{page:1},checkData:[],pageInfo:{totalElements:0,currentPage:1},tableData:[],loading:!1}},components:{listHandle:s.c,pagination:s.d},methods:{onPublish:function(e){var t=this,a=e.isPublish?"下架":"发布";this.$fly.post(n.a.appChangeStatus,{id:e.id}).then(function(e){1e5===e.status?(t.$message({message:a+"成功",type:"success"}),t.params.page=1,t.getData(t.params)):t.$message({message:a+"失败",type:"error"})}).catch(function(){t.$message({message:"请求失败",type:"error"})})},refresh:function(){this.params.page=1,this.getData(this.params)},handleSelectionChange:function(e){var t=this;this.checkData=[],this.lodash.map(e,function(e){t.checkData.push({id:e.id,status:e.status})})},pagination:function(e){this.params.page=e.page,this.params.size=e.limit,this.getData(this.params)},getData:function(e){var t=this;e.page--,this.loading=!0,this.$fly.get(n.a.appList,e).then(function(a){if(setTimeout(function(){t.loading=!1},1e3),1e5===a.status){var n=a.data,s=n.content,l=n.totalElements;t.tableData=s,t.pageInfo={totalElements:parseInt(l),currentPage:e.page+1}}else t.$message({message:"请求失败",type:"error"})})}},created:function(){this.getData(this.params)},mounted:function(){this.params.size=this.$refs.pageInfo.pageSizes[0]}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("div",{staticClass:"tools-bar"},[a("listHandle",{attrs:{showSoldout:!1,showDelete:!1,checkData:e.checkData},on:{refresh:e.refresh}})],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",attrs:{"header-cell-class-name":"tableHeader",data:e.tableData,"element-loading-text":"拼命加载中",border:"",stripe:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"index",width:"50",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"产品",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return t.row.product?[e._v(e._s(t.row.product.name))]:void 0}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"platform",label:"平台",align:"center",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"version",label:"版本号",align:"center",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"isProduction",label:"环境",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.isProduction?a("span",[e._v("正式环境")]):a("span",[e._v("其他环境")])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"状态",width:"90",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{size:"small",type:t.row.isPublish?"success":"warning"}},[t.row.isPublish?a("span",[e._v("已发布")]):a("span",[e._v("未发布")])])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"ossUrl",label:"下载地址",align:"center","min-width":"100"}}),e._v(" "),a("el-table-column",{attrs:{label:"创建人",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.createUser.username))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"创建时间",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("dateTime")(t.row.createTime,"yyyy-MM-dd hh:mm:ss")))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"80",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text ",size:"mini"},on:{click:function(a){e.onPublish(t.row)}}},[t.row.isPublish?a("span",[e._v("下架")]):a("span",[e._v("发布")])])]}}])})],1),e._v(" "),a("pagination",{ref:"pageInfo",attrs:{total:e.pageInfo.totalElements,page:e.pageInfo.currentPage},on:{"update:page":function(t){e.$set(e.pageInfo,"currentPage",t)},pagination:e.pagination}})],1)},staticRenderFns:[]};var r=a("VU/8")(l,i,!1,function(e){a("jUAN")},"data-v-a089ba2c",null);t.default=r.exports},jUAN:function(e,t){}});
//# sourceMappingURL=4.3347d6bb837e47e8cee5.js.map
webpackJsonp([1],{eutC:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("0xDb"),s=a("bGai"),n={data:function(){return{params:{title:null,page:1,sortType:1},checkData:[],pickerVal:[],pageInfo:{},tableData:[],loading:!1}},components:{picker:s.d,listHandle:s.b,page:s.c},methods:{handleSelectionChange:function(e){var t=this;this.checkData=[],this.lodash.map(e,function(e){t.checkData.push({id:e.id,status:e.status})})},currentChange:function(e){this.params.page=e,this.getData(this.params)},sizeChange:function(e){this.params.size=e,this.getData(this.params)},reset:function(){this.params={title:null,page:1,size:15,sortType:1},this.pickerVal=[],this.getData(this.params)},search:function(){console.log(this.pickerVal),this.params.productId=this.pickerVal[0],this.params.specialTopicId=this.pickerVal[1],this.getData(this.params)},refresh:function(){this.getData(this.params)},getData:function(e){var t=this;e.page--,this.loading=!0,this.$fly.get(l.a.articleList,e).then(function(a){t.loading=!1,t.tableData=a.content,t.pageInfo={totalElements:a.totalElements,currentPage:e.page+1}})}},created:function(){this.getData(this.params)},mounted:function(){this.params.size=this.$refs.pageInfo.pageSizes[0]}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("div",{staticClass:"tools-bar"},[a("div",{staticClass:"left-wrap"},[a("el-input",{attrs:{"prefix-icon":"el-icon-search",placeholder:"请输入搜索关键字",size:"small"},model:{value:e.params.title,callback:function(t){e.$set(e.params,"title",t)},expression:"params.title"}}),e._v(" "),a("picker",{attrs:{size:"small",span:-1,column:2},model:{value:e.pickerVal,callback:function(t){e.pickerVal=t},expression:"pickerVal"}}),e._v(" "),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.search}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{size:"small",type:"warning"},on:{click:e.reset}},[e._v("重置")])],1),e._v(" "),a("listHandle",{attrs:{checkData:e.checkData},on:{refresh:e.refresh}})],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",attrs:{"header-cell-class-name":"tableHeader",data:e.tableData,"element-loading-text":"拼命加载中",border:"",stripe:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center","label-class-name":"checkLabel"}}),e._v(" "),a("el-table-column",{attrs:{label:"标题",align:"center","min-width":"180","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.title))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"推荐",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{size:"small",type:1===t.row.isHomePageShow?"danger":"info"}},[e._v(e._s(t.row.isHomePageShow?"推荐":"不推荐"))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"所属专题","min-width":"160","show-overflow-tooltip":"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.product.name)+"、"+e._s(t.row.specialTopic.title))]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"userName",label:"操作人","min-width":"260",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"状态",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{size:"small",type:e._f("publicStatus")(t.row.status,"style")}},[e._v(e._s(e._f("publicStatus")(t.row.status)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"totalReadNum",label:"阅读量",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.totalReadNum)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"创建时间",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("dateTime")(t.row.createTime,"yyyy-MM-dd hh:mm:ss")))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"发布时间",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("dateTime")(t.row.publishTime,"yyyy-MM-dd hh:mm:ss")))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[2===t.row.status||3===t.row.status?a("el-button",{attrs:{type:"text ",size:"mini"}},[a("router-link",{attrs:{to:{name:"article",params:{type:"edit"},query:{id:t.row.id}},tag:"span"}},[e._v("编辑")])],1):e._e()]}}])})],1),e._v(" "),a("page",{ref:"pageInfo",attrs:{pageInfo:e.pageInfo},on:{sizeChange:e.sizeChange,currentChange:e.currentChange}})],1)},staticRenderFns:[]};var r=a("VU/8")(n,i,!1,function(e){a("tweH")},null,null);t.default=r.exports},tweH:function(e,t){}});
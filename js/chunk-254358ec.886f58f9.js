(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-254358ec"],{"7f7f":function(e,t,n){var a=n("86cc").f,o=Function.prototype,i=/^\s*function ([^ (]*)/,s="name";s in o||n("9e1e")&&a(o,s,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},8843:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hellomelody"},[n("h1",{on:{click:e.getJson}},[e._v("第"+e._s(e.$route.params.lesson)+"册")]),n("el-collapse",{on:{change:e.handleChange},model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},e._l(e.data,(function(t,a){return n("div",[n("el-collapse-item",{attrs:{title:t.Zhang,name:t.Zhang}},e._l(t.JieAndFile,(function(t,a){return n("div",[n("div",[n("el-link",{attrs:{type:"info",href:"http://elearning.shuangmeimelody.com/web/admin/UploadFiles/"+t.CoursewareUrl}},[e._v(e._s(t.CoursewareName))])],1)])})),0)],1)})),0)],1)},o=[],i=(n("7f7f"),{name:"hellomelody",components:{},data:function(){return{data:"",activeNames:"",url:""}},created:function(){this.getJson()},methods:{getJson:function(){var e=this;this.url="../lion/data/"+this.$route.params.name+this.$route.params.lesson+".json",this.$axios({url:this.url}).then((function(t){e.data=t.data.Result})).catch((function(e){console.log(e)}))},handleChange:function(e){}},watch:{"$route.path":function(e,t){this.getJson()}}}),s=i,l=n("2877"),c=Object(l["a"])(s,a,o,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-254358ec.886f58f9.js.map
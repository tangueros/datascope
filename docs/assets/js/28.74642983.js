(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{244:function(t,n,e){"use strict";e.r(n);var s=e(141),a=e.n(s),r={name:"vpversion",data:function(){return{items:[]}},computed:{counter:function(){return this.$data.items.length}},beforeMount:function(){var t=this;a.a.get("https://reqres.in/api/users").then(function(n){t.$data.items=n.data.data}).catch(function(t){console.log(t)})}},i=e(0),u=Object(i.a)(r,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("small",{attrs:{id:"VuePressVersioning"}},[e("span",[t._v("I have "+t._s(t.counter)+" items")]),t._l(t.items,function(n){return e("div",[e("h2",[t._v(t._s(n.first_name)+" "+t._s(n.last_name))]),e("img",{attrs:{src:n.avatar}})])})],2)},[],!1,null,null,null);n.default=u.exports}}]);
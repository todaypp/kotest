"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[1716],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},s=Object.keys(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,s=t.originalType,l=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return n?r.createElement(f,o(o({ref:e},u),{},{components:n})):r.createElement(f,o({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43808:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),o=["components"],i={id:"nested",title:"Nested Data Tests",slug:"nested-tests.html"},l=void 0,c={unversionedId:"framework/datatesting/nested",id:"framework/datatesting/nested",title:"Nested Data Tests",description:"Kotest's data testing is extremely flexible and allows to unlimited nesting of data test constructs.",source:"@site/docs/framework/datatesting/nested.md",sourceDirName:"framework/datatesting",slug:"/framework/datatesting/nested-tests.html",permalink:"/docs/next/framework/datatesting/nested-tests.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/framework/datatesting/nested.md",tags:[],version:"current",frontMatter:{id:"nested",title:"Nested Data Tests",slug:"nested-tests.html"},sidebar:"framework",previous:{title:"Data Test Names",permalink:"/docs/next/framework/datatesting/custom-test-names.html"},next:{title:"Eventually",permalink:"/docs/next/framework/concurrency/eventually.html"}},u={},p=[],d={toc:p};function m(t){var e=t.components,i=(0,a.Z)(t,o);return(0,s.kt)("wrapper",(0,r.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Kotest's data testing is extremely flexible and allows to unlimited nesting of data test constructs.\nEach extra nest will create another layer of nesting in the test output providing the cartesian join of all inputs."),(0,s.kt)("p",null,"For example, in the following code snippet, we have two layers of nesting."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'context("each service should support all http methods") {\n\n  val services = listOf(\n    "http://internal.foo",\n    "http://internal.bar",\n    "http://public.baz",\n  )\n\n  val methods = listOf("GET", "POST", "PUT")\n\n   withData(services) { service ->\n     withData(methods) { method ->\n       // test service against method\n     }\n   }\n\n}\n')),(0,s.kt)("p",null,"This would give output in intellij like:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"data test example output",src:n(42145).Z,width:"650",height:"349"})),(0,s.kt)("p",null,"And then here is the same example, but this time with a ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/framework/datatesting/custom-test-names.html"},"custom test name")," on the second level:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'context("each service should support all http methods") {\n\n    val services = listOf(\n       "http://internal.foo",\n       "http://internal.bar",\n       "http://public.baz",\n    )\n\n    val methods = listOf("GET", "POST", "PUT")\n\n    withData(services) { service ->\n       withData<String>({ "should support HTTP $it" }, methods) { method ->\n          // test service against method\n       }\n    }\n}\n')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"data test example output",src:n(79916).Z,width:"650",height:"358"})))}m.isMDXComponent=!0},42145:function(t,e,n){e.Z=n.p+"assets/images/datatest4-cb36be0d32cffe13011b8f0f1b9be8e1.png"},79916:function(t,e,n){e.Z=n.p+"assets/images/datatest5-ce8e0b295d9b800b11553ab30ada1335.png"}}]);
"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[9416],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,v=p["".concat(l,".").concat(d)]||p[d]||u[d]||s;return n?i.createElement(v,r(r({ref:t},m),{},{components:n})):i.createElement(v,r({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,r[1]=a;for(var c=2;c<s;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},80949:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});var i=n(87462),o=n(63366),s=(n(67294),n(3905)),r=["components"],a={id:"test_timeouts",title:"Test Timeouts",slug:"test-timeouts.html",sidebar_label:"Test Timeouts"},l=void 0,c={unversionedId:"framework/timeouts/test_timeouts",id:"framework/timeouts/test_timeouts",title:"Test Timeouts",description:"Kotest supports two types of test timeout. The first is the overall time for all invocations of a test. This is just called timeout.",source:"@site/docs/framework/timeouts/test_timeouts.md",sourceDirName:"framework/timeouts",slug:"/framework/timeouts/test-timeouts.html",permalink:"/docs/next/framework/timeouts/test-timeouts.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/framework/timeouts/test_timeouts.md",tags:[],version:"current",frontMatter:{id:"test_timeouts",title:"Test Timeouts",slug:"test-timeouts.html",sidebar_label:"Test Timeouts"},sidebar:"framework",previous:{title:"Test Output",permalink:"/docs/next/framework/test_output.html"},next:{title:"Project Timeout",permalink:"/docs/next/framework/timeouts/project-timeouts.html"}},m={},u=[{value:"Test Timeout",id:"test-timeout",level:3},{value:"Invocation Timeout",id:"invocation-timeout",level:3},{value:"Project wide settings",id:"project-wide-settings",level:3},{value:"System Properties",id:"system-properties",level:3}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,r);return(0,s.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Kotest supports two types of test timeout. The first is the overall time for all invocations of a test. This is just called ",(0,s.kt)("em",{parentName:"p"},"timeout"),".\nThe second is per individual run of a test, and this is called ",(0,s.kt)("em",{parentName:"p"},"invocation timeout"),"."),(0,s.kt)("h3",{id:"test-timeout"},"Test Timeout"),(0,s.kt)("p",null,"To set a test timeout, we can use test config:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class TimeoutTest : FunSpec({\n   test("this test will timeout quickly!").config(timeout = 100.milliseconds) {\n      // test here\n   }\n})\n')),(0,s.kt)("p",null,"Alternatively, we can apply a test timeout for all tests in a spec file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class TimeoutTest : FunSpec({\n\n   timeout = 100.milliseconds\n\n   test("this test will timeout quickly!") {\n      // test here\n   }\n\n   test("so will this one!") {\n      // test here\n   }\n})\n')),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The time taken for a test includes the execution time taken for nested tests, so factor this into your timeouts."))),(0,s.kt)("h3",{id:"invocation-timeout"},"Invocation Timeout"),(0,s.kt)("p",null,"Kotest can be configured to invoke a test multiple times. For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class TimeoutTest : DescribeSpec({\n\n   describe("my test context") {\n        it("run me three times").config(invocations = 3) {\n            // this test will be invoked three times\n        }\n   }\n\n})\n')),(0,s.kt)("p",null,"We can then apply a timeout ",(0,s.kt)("em",{parentName:"p"},"per invocation")," using the ",(0,s.kt)("inlineCode",{parentName:"p"},"invocationTimeout")," property."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class TimeoutTest : DescribeSpec({\n\n   describe("my test context") {\n        it("run me three times").config(invocations = 3, invocationTimeout = 60.milliseconds) {\n            // this test will be invoked three times and each has a timeout of 60 milliseconds\n        }\n   }\n\n})\n')),(0,s.kt)("p",null,"In the previous example, each invocation must complete in 60 milliseconds or less. We can combine this with an overall\ntest timeout:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class TimeoutTest : DescribeSpec({\n\n   describe("my test context") {\n        it("run me three times").config(timeout = 100.milliseconds, invocations = 3, invocationTimeout = 60.milliseconds) {\n            // this test will be invoked three times\n        }\n   }\n\n})\n')),(0,s.kt)("p",null,"Here we want all three tests to complete in 100 milliseconds or less, but allow any particular invocation to extend\nup to 60 milliseconds."),(0,s.kt)("p",null,"We can apply invocation timeouts at the spec level just like test timeouts:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class TimeoutTest : FunSpec({\n\n   invocationTimeout = 25.milliseconds\n\n   test("foo") {\n      // test here\n   }\n\n   test("bar") {\n      // test here\n   }\n})\n')),(0,s.kt)("h3",{id:"project-wide-settings"},"Project wide settings"),(0,s.kt)("p",null,"We can apply a test and/or invocation timeout for all tests in a module using project config."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},"object ProjectConfig : AbstractProjectConfig {\n    override val timeout = 100.milliseconds\n    override val invocationTimeout = 33.milliseconds\n}\n")),(0,s.kt)("p",null,"These values will take affect unless overriden at either the spec or the test level."),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"You can set a project wide timeout for tests and then override it per spec or per test"))),(0,s.kt)("h3",{id:"system-properties"},"System Properties"),(0,s.kt)("p",null,"Both test timeout and invocation timeouts can be set using system properties, with values in milliseconds."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"kotest.framework.timeout")," sets the combined test timeout"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"kotest.framework.invocation.timeout")," sets the invocation test timeouts.")))}d.isMDXComponent=!0}}]);
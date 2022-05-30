"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[4044],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,k=m["".concat(o,".").concat(u)]||m[u]||p[u]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2032:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],s={id:"simple_extensions",title:"Simple Extensions",slug:"simple-extensions.html",sidebar_label:"Simple Extensions"},o=void 0,c={unversionedId:"framework/extensions/simple_extensions",id:"version-5.3/framework/extensions/simple_extensions",title:"Simple Extensions",description:"This table lists the most basic extensions, that cover test and spec lifecycle events, and are mostly equivalent to lifecycle hooks. For more advanced extensions that can be used to modify the way the Engine runs, see advanced extensions.",source:"@site/versioned_docs/version-5.3/framework/extensions/simple.md",sourceDirName:"framework/extensions",slug:"/framework/extensions/simple-extensions.html",permalink:"/docs/framework/extensions/simple-extensions.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.3/framework/extensions/simple.md",tags:[],version:"5.3",frontMatter:{id:"simple_extensions",title:"Simple Extensions",slug:"simple-extensions.html",sidebar_label:"Simple Extensions"},sidebar:"framework",previous:{title:"Introduction",permalink:"/docs/framework/extensions/extensions-introduction.html"},next:{title:"Advanced Extensions",permalink:"/docs/framework/extensions/advanced-extensions.html"}},d={},p=[],m={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This table lists the most basic extensions, that cover test and spec lifecycle events, and are mostly equivalent to lifecycle hooks. For more advanced extensions that can be used to modify the way the Engine runs, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/framework/extensions/advanced-extensions.html"},"advanced extensions"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Extension"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"BeforeContainerListener"),(0,i.kt)("td",{parentName:"tr",align:null},"Invoked directly before each test with type ",(0,i.kt)("inlineCode",{parentName:"td"},"TestType.Container")," is executed. If the test is marked as ignored / disabled / inactive, then this callback won't be invoked.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AfterContainerListener"),(0,i.kt)("td",{parentName:"tr",align:null},"Invoked immediately after a ",(0,i.kt)("inlineCode",{parentName:"td"},"TestCase")," with type ",(0,i.kt)("inlineCode",{parentName:"td"},"TestType.Container")," has finished. If a test case was skipped (ignored / disabled / inactive) then this callback will not be invoked for that particular test case.",(0,i.kt)("br",null),(0,i.kt)("br",null),"The callback will execute even if the test fails.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"BeforeEachListener"),(0,i.kt)("td",{parentName:"tr",align:null},"Invoked directly before each test with type ",(0,i.kt)("inlineCode",{parentName:"td"},"TestType.Test")," is executed. If the test is marked as ignored / disabled / inactive, then this callback won't be invoked.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AfterEachListener"),(0,i.kt)("td",{parentName:"tr",align:null},"Invoked immediately after a ",(0,i.kt)("inlineCode",{parentName:"td"},"TestCase")," with type ",(0,i.kt)("inlineCode",{parentName:"td"},"TestType.Test")," has finished, with the ",(0,i.kt)("inlineCode",{parentName:"td"},"TestResult")," of that test. If a test case was skipped (ignored / disabled / inactive) then this callback will not be invoked for that particular test case.",(0,i.kt)("br",null),(0,i.kt)("br",null),"The callback will execute even if the test fails.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"BeforeTestListener"),(0,i.kt)("td",{parentName:"tr",align:null},"Invoked directly before each test is executed with the ",(0,i.kt)("inlineCode",{parentName:"td"},"TestCase")," instance as a parameter. If the test is marked as ignored / disabled / inactive, then this callback won't be invoked.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AfterTestListener"),(0,i.kt)("td",{parentName:"tr",align:null},"Invoked immediately after a ",(0,i.kt)("inlineCode",{parentName:"td"},"TestCase")," has finished with the ",(0,i.kt)("inlineCode",{parentName:"td"},"TestResult")," of that test. If a test case was skipped (ignored / disabled / inactive) then this callback will not be invoked for that particular test case.",(0,i.kt)("br",null),(0,i.kt)("br",null),"The callback will execute even if the test fails.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"BeforeInvocationListener"),(0,i.kt)("td",{parentName:"tr",align:null},"Invoked before each 'run' of a test, with a flag indicating the iteration number. If you are running a test with the default single invocation then this callback is effectively the same as ",(0,i.kt)("inlineCode",{parentName:"td"},"beforeTest"),".",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"Note: If you have multiple invocations and multiple threads, then this callback will be invoked concurrently."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AfterInvocationListener"),(0,i.kt)("td",{parentName:"tr",align:null},"Invoked after each 'run' of a test, with a flag indicating the iteration number. If you are running a test with the default single invocation then this callback is effectively the same as ",(0,i.kt)("inlineCode",{parentName:"td"},"afterTest"),".",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"Note: If you have multiple invocations and multiple threads, then this callback will be invoked concurrently."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"BeforeSpecListener"),(0,i.kt)("td",{parentName:"tr",align:null},"Invoked after the Engine instantiates a spec to be used as part of a test execution. If a spec is instantiated multiple times - for example, if ",(0,i.kt)("inlineCode",{parentName:"td"},"InstancePerTest")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"InstancePerLeaf")," isolation modes are used, then this callback will be invoked for each instance created.",(0,i.kt)("br",null),(0,i.kt)("br",null),"This callback can be used to perform setup each time a new spec instance is created. To perform setup once per class, then use ",(0,i.kt)("inlineCode",{parentName:"td"},"PrepareSpecListener"),".",(0,i.kt)("br",null),(0,i.kt)("br",null),"This listener is invoked before any test lifecycle events.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AfterSpecListener"),(0,i.kt)("td",{parentName:"tr",align:null},"Is invoked after the ",(0,i.kt)("inlineCode",{parentName:"td"},"TestCase"),"s that are part of a particular spec instance have completed.",(0,i.kt)("br",null),(0,i.kt)("br",null),"If a spec is instantiated multiple times - for example, if ",(0,i.kt)("inlineCode",{parentName:"td"},"InstancePerTest")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"InstancePerLeaf")," isolation modes are used, then this callback will be invoked for each instantiated spec, after the tests that are applicable to that spec instance have returned.",(0,i.kt)("br",null),(0,i.kt)("br",null),"This callback can be used to perform cleanup after each individual spec instance. To perform cleanup once per class, then use ",(0,i.kt)("inlineCode",{parentName:"td"},"FinalizeSpecListener."),(0,i.kt)("br",null),(0,i.kt)("br",null),"This listener is invoked after all test lifecycle events.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PrepareSpecListener"),(0,i.kt)("td",{parentName:"tr",align:null},"Called once per spec, when the engine is preparing to execute the tests for that spec.",(0,i.kt)("br",null),(0,i.kt)("br",null),"Regardless of how many times the spec is instantiated, for example, if ",(0,i.kt)("inlineCode",{parentName:"td"},"InstancePerTest")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"InstancePerLeaf")," isolation modes are used, this callback will only be invoked once. If the spec is skipped then this callback will ",(0,i.kt)("strong",{parentName:"td"},"not")," be invoked.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"FinalizeSpecListener"),(0,i.kt)("td",{parentName:"tr",align:null},"Called once per ",(0,i.kt)("inlineCode",{parentName:"td"},"Spec"),", after all tests have completed for that spec.",(0,i.kt)("br",null),(0,i.kt)("br",null),"Regardless of how many times the spec is instantiated, for example, if ",(0,i.kt)("inlineCode",{parentName:"td"},"InstancePerTest")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"InstancePerLeaf")," isolation modes are used, this callback will only be invoked once. If the spec is skipped then this callback will ",(0,i.kt)("strong",{parentName:"td"},"not")," be invoked.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"BeforeProjectListener"),(0,i.kt)("td",{parentName:"tr",align:null},"Is invoked before any specs are created.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AfterProjectListener"),(0,i.kt)("td",{parentName:"tr",align:null},"Is invoked once all tests and specs have completed")))))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[7620],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),d=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=d(n),c=r,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(k,l(l({ref:e},p),{},{components:n})):a.createElement(k,l({ref:e},p))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},41264:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"android_matchers",title:"Android Matchers",slug:"android-matchers.html",sidebar_label:"Android"},s=void 0,d={unversionedId:"assertions/android_matchers",id:"version-5.2/assertions/android_matchers",title:"Android Matchers",description:"This page lists all current Android matchers in Kotest. These are additional to the default matchers and are specific to Android.",source:"@site/versioned_docs/version-5.2/assertions/android_matchers.md",sourceDirName:"assertions",slug:"/assertions/android-matchers.html",permalink:"/docs/5.2/assertions/android-matchers.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.2/assertions/android_matchers.md",tags:[],version:"5.2",frontMatter:{id:"android_matchers",title:"Android Matchers",slug:"android-matchers.html",sidebar_label:"Android"},sidebar:"assertions",previous:{title:"Ktor",permalink:"/docs/5.2/assertions/ktor-matchers.html"},next:{title:"Kotlinx Datetime",permalink:"/docs/5.2/assertions/kotlinx-datetime-matchers.html"}},p={},m=[],u={toc:m};function c(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page lists all current Android matchers in Kotest. These are additional to the default ",(0,i.kt)("a",{parentName:"p",href:"/docs/5.2/assertions/matchers.html"},"matchers")," and are specific to Android."),(0,i.kt)("p",null,"To use them, it's required to add an extra dependency to your project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation("io.kotest:kotest-assertions-android:VERSION")\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"View"),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"view.shouldBeVisible()")),(0,i.kt)("td",{parentName:"tr",align:null},"Asserts that the view visibility is VISIBLE")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"view.shouldBeInvisible()")),(0,i.kt)("td",{parentName:"tr",align:null},"Asserts that the view visibility is INVISIBLE")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"view.shouldBeGone()")),(0,i.kt)("td",{parentName:"tr",align:null},"Asserts that the view visibility is GONE")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"view.shouldHaveContentDescription()")),(0,i.kt)("td",{parentName:"tr",align:null},"Asserts that the view has any content description")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"view.shouldHaveContentDescription(desc)")),(0,i.kt)("td",{parentName:"tr",align:null},"Asserts that the view has ",(0,i.kt)("inlineCode",{parentName:"td"},"desc")," as Content Description")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"view.shouldHaveTag(key, value)")),(0,i.kt)("td",{parentName:"tr",align:null},"Asserts that the view has a tag ",(0,i.kt)("inlineCode",{parentName:"td"},"key")," with value ",(0,i.kt)("inlineCode",{parentName:"td"},"value"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"view.shouldHaveTag(any)")),(0,i.kt)("td",{parentName:"tr",align:null},"Asserts that the view's tag is ",(0,i.kt)("inlineCode",{parentName:"td"},"any"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"view.shouldBeEnabled()")),(0,i.kt)("td",{parentName:"tr",align:null},"Asserts that the view is enabled")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"view.shouldBeFocused()")),(0,i.kt)("td",{parentName:"tr",align:null},"Asserts that the view has focus")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"view.shouldBeFocusable()")),(0,i.kt)("td",{parentName:"tr",align:null},"Asserts that the view is focusable")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"view.shouldBeFocusableInTouchMode()")),(0,i.kt)("td",{parentName:"tr",align:null},"Asserts that the view is focusable in touch mode")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"view.shouldBeClickable()")),(0,i.kt)("td",{parentName:"tr",align:null},"Asserts that the view is clickable")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"view.shouldBeLongClickable()")),(0,i.kt)("td",{parentName:"tr",align:null},"Asserts that the view is long clickable")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"TextView"),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"tv.shouldHaveText(text)")),(0,i.kt)("td",{parentName:"tr",align:null},"Asserts that the text view has text ",(0,i.kt)("inlineCode",{parentName:"td"},"text"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"tv.shouldHaveTextColorId(id)")),(0,i.kt)("td",{parentName:"tr",align:null},"Asserts that the text color is the same from color resource ",(0,i.kt)("inlineCode",{parentName:"td"},"id"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"tv.shouldHaveTextColor(colorInt)")),(0,i.kt)("td",{parentName:"tr",align:null},"Asserts that the text color is ",(0,i.kt)("inlineCode",{parentName:"td"},"colorInt"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"tv.shouldBeAllCaps()")),(0,i.kt)("td",{parentName:"tr",align:null},"Asserts that the textview is marked with the ",(0,i.kt)("inlineCode",{parentName:"td"},"isAllCaps")," flag")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"tv.shouldHaveTextAlignment(alignment)")),(0,i.kt)("td",{parentName:"tr",align:null},"Asserts that the text alignment is ",(0,i.kt)("inlineCode",{parentName:"td"},"alignment"))))))}c.isMDXComponent=!0}}]);
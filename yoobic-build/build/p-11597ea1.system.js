System.register(["./p-fd4afab3.system.js"],function(e){"use strict";var t;return{setters:[function(e){t=e.c}],execute:function(){var r=e("__moduleExports",t(function(e){var t={version:"2.1.1",options:{debug:false,localCacheFolder:"imgcache",useDataURI:false,chromeQuota:10*1024*1024,usePersistentCache:true,cacheClearSize:0,headers:{},withCredentials:false,skipURIencoding:false,cordovaFilesystemRoot:null,timeout:0},overridables:{hash:function(e){function t(e,t,r){while(0<r--)e.push(t)}function r(e,t){return e<<t|e>>>32-t}function o(e,t,r){return e^t^r}function i(e,t){var r=(t&65535)+(e&65535),o=(t>>>16)+(e>>>16)+(r>>>16);return(o&65535)<<16|r&65535}var a="0123456789abcdef";return function(e){var t=[],r=e.length*4,o;for(var i=0;i<r;i++){o=e[i>>2]>>(3-i%4)*8;t.push(a.charAt(o>>4&15)+a.charAt(o&15))}return t.join("")}(function(e,a){var n,s,l,u,c,d=e.length,f=1732584193,g=4023233417,v=2562383102,h=271733878,m=3285377520,b=[];t(b,1518500249,20);t(b,1859775393,20);t(b,2400959708,20);t(b,3395469782,20);e[a>>5]|=128<<24-a%32;e[(a+65>>9<<4)+15]=a;for(var p=0;p<d;p+=16){n=f;s=g;l=v;u=h;c=m;for(var C=0,y=[];C<80;C++){y[C]=C<16?e[C+p]:r(y[C-3]^y[C-8]^y[C-14]^y[C-16],1);var w=function(e,t,r,o,i){var a=(i&65535)+(e&65535)+(t&65535)+(r&65535)+(o&65535),n=(i>>>16)+(e>>>16)+(t>>>16)+(r>>>16)+(o>>>16)+(a>>>16);return(n&65535)<<16|a&65535}(C<20?function(e,t,r){return e&t^~e&r}(s,l,u):C<40?o(s,l,u):C<60?function(e,t,r){return e&t^e&r^t&r}(s,l,u):o(s,l,u),c,b[C],y[C],r(n,5));c=u;u=l;l=r(s,30);s=n;n=w}f=i(f,n);g=i(g,s);v=i(v,l);h=i(h,u);m=i(m,c)}return[f,g,v,h,m]}(function(e){var t=[],r=255,o=e.length*8;for(var i=0;i<o;i+=8){t[i>>5]|=(e.charCodeAt(i/8)&r)<<24-i%32}return t}(e).slice(),e.length*8))},log:function(e,a){if(t.options.debug){if(a===r){e="INFO: "+e}if(a===o){e="WARN: "+e}if(a===i){e="ERROR: "+e}console.log(e)}}},ready:false,attributes:{}},r=1,o=2,i=3;(function(a){var n={};n.sanitizeURI=function(e){if(t.options.skipURIencoding){return e}else{if(e.length>=2&&e[0]==='"'&&e[e.length-1]==='"'){e=e.substr(1,e.length-2)}var r=encodeURI(e);return r}};n.URI=function(e){if(!e){e=""}var t=/^(?:([^:\/?\#]+):)?(?:\/\/([^\/?\#]*))?([^?\#]*)(?:\?([^\#]*))?(?:\#(.*))?/,r=e.match(t);this.scheme=r[1]||null;this.authority=r[2]||null;this.path=r[3]||null;this.query=r[4]||null;this.fragment=r[5]||null};n.URIGetFileName=function(e){if(!e){return}var t=e.lastIndexOf("/");if(!t){return}return e.substr(t+1).toLowerCase()};n.URIGetPath=function(e){if(!e){return}var t=n.URI(e);return t.path.toLowerCase()};n.fileGetExtension=function(e){if(!e){return""}e=e.split("?")[0];var t=e.split(".").pop();if(!t||t.length>4){return""}return t};n.appendPaths=function(e,t){if(!t){t=""}if(!e||e===""){return(t.length>0&&t[0]=="/"?"":"/")+t}return e+(e[e.length-1]=="/"||t.length>0&&t[0]=="/"?"":"/")+t};n.hasJqueryOrJqueryLite=function(){return t.jQuery||t.jQueryLite};n.isCordova=function(){return(typeof cordova!=="undefined"||typeof phonegap!=="undefined")&&(cordova||phonegap).platformId!=="browser"};n.isCordovaAndroid=function(){return n.isCordova()&&device&&device.platform&&device.platform.toLowerCase().indexOf("android")>=0};n.isCordovaWindowsPhone=function(){return n.isCordova()&&device&&device.platform&&(device.platform.toLowerCase().indexOf("win32nt")>=0||device.platform.toLowerCase().indexOf("windows")>=0)};n.isCordovaIOS=function(){return n.isCordova()&&device&&device.platform&&device.platform.toLowerCase()==="ios"};n.isCordovaAndroidOlderThan3_3=function(){return n.isCordovaAndroid()&&device.version&&(device.version.indexOf("2.")===0||device.version.indexOf("3.0")===0||device.version.indexOf("3.1")===0||device.version.indexOf("3.2")===0)};n.isCordovaAndroidOlderThan4=function(){return n.isCordovaAndroid()&&device.version&&(device.version.indexOf("2.")===0||device.version.indexOf("3.")===0)};n.EntryToURL=function(e){if(n.isCordovaAndroidOlderThan4()&&typeof e.toNativeURL==="function"){return e.toNativeURL()}else if(typeof e.toInternalURL==="function"){return e.toInternalURL()}else{return e.toURL()}};n.EntryGetURL=function(e){return typeof e.toURL==="function"?n.EntryToURL(e):e.toURI()};n.EntryGetPath=function(e){if(n.isCordova()){if(n.isCordovaIOS()){if(n.isCordovaAndroidOlderThan3_3()){return e.fullPath}else{return e.nativeURL}}return typeof e.toURL==="function"?n.EntryToURL(e):e.fullPath}else{return e.fullPath}};n.getCordovaStorageType=function(e){if(typeof LocalFileSystem!=="undefined"){if(e&&LocalFileSystem.hasOwnProperty("PERSISTENT")){return LocalFileSystem.PERSISTENT}if(!e&&LocalFileSystem.hasOwnProperty("TEMPORARY")){return LocalFileSystem.TEMPORARY}}return e?window.PERSISTENT:window.TEMPORARY};var s={};s.trigger=function(e,r){if(t.jQuery){a(e).trigger(r)}else{if(n.isCordovaWindowsPhone()||!window.CustomEvent){window.CustomEvent=function e(t,r){var o;r=r||{bubbles:false,cancelable:false,detail:undefined};try{o=document.createEvent("CustomEvent");o.initCustomEvent(t,r.bubbles,r.cancelable,r.detail)}catch(e){o=document.createEvent("Event");o.initEvent(t,r.bubbles,r.cancelable);o.detail=r.detail}return o}}e.dispatchEvent(new CustomEvent(r))}};s.removeAttribute=function(e,t){if(n.hasJqueryOrJqueryLite()){e.removeAttr(t)}else{e.removeAttribute(t)}};s.setAttribute=function(e,t,r){if(n.hasJqueryOrJqueryLite()){e.attr(t,r)}else{e.setAttribute(t,r)}};s.getAttribute=function(e,t){if(n.hasJqueryOrJqueryLite()){return e.attr(t)}else{return e.getAttribute(t)}};s.getBackgroundImage=function(e){if(n.hasJqueryOrJqueryLite()){return e.attr("data-old-background")?"url("+e.attr("data-old-background")+")":e.css("background-image")}else{var t=window.getComputedStyle(e,null);if(!t){return}return e.getAttribute("data-old-background")?"url("+e.getAttribute("data-old-background")+")":t.backgroundImage}};s.setBackgroundImage=function(e,t){if(n.hasJqueryOrJqueryLite()){e.css("background-image",t)}else{e.style.backgroundImage=t}};var l={attributes:{}};l.isImgCacheLoaded=function(){if(!t.attributes.filesystem||!t.attributes.dirEntry){t.overridables.log("ImgCache not loaded yet! - Have you called ImgCache.init() first?",o);return false}return true};l.attributes.hasLocalStorage=false;l.hasLocalStorage=function(){if(l.attributes.hasLocalStorage){return l.attributes.hasLocalStorage}try{var e=t.overridables.hash("imgcache_test");localStorage.setItem(e,e);localStorage.removeItem(e);l.attributes.hasLocalStorage=true;return true}catch(e){t.overridables.log("Could not write to local storage: "+e.message,r);return false}};l.setCurrentSize=function(e){t.overridables.log("current size: "+e,r);if(l.hasLocalStorage()){localStorage.setItem("imgcache:"+t.options.localCacheFolder,e)}};l.getCachedFilePath=function(e){return n.appendPaths(t.options.localCacheFolder,l.getCachedFileName(e))};l.getCachedFileFullPath=function(e){var r=n.EntryGetPath(t.attributes.dirEntry);return n.appendPaths(r,l.getCachedFileName(e))};l.getCachedFileName=function(e){if(!e){t.overridables.log("No source given to getCachedFileName",o);return}var r=t.overridables.hash(e);var i=n.fileGetExtension(n.URIGetFileName(e));return r+(i?"."+i:"")};l.setNewImgPath=function(e,t,r){s.setAttribute(e,"src",t);s.setAttribute(e,u,r)};l.createCacheDir=function(e,a){if(!t.attributes.filesystem){t.overridables.log("Filesystem instance was not initialised",i);if(a){a()}return}var l=function(e){t.overridables.log("Failed to get/create local cache directory: "+e.code,i);if(a){a()}};var u=function(i){t.attributes.dirEntry=i;t.overridables.log("Local cache folder opened: "+n.EntryGetPath(i),r);if(n.isCordovaAndroid()){var a=function(){t.overridables.log(".nomedia file created.",r);if(e){e()}};i.getFile(".nomedia",{create:true,exclusive:false},a,l)}else if(!n.isCordovaWindowsPhone()){if(n.isCordovaIOS()&&i.setMetadata){i.setMetadata(function(){t.overridables.log("com.apple.MobileBackup metadata set",r)},function(){t.overridables.log("com.apple.MobileBackup metadata could not be set",o)},{"com.apple.MobileBackup":1})}if(e){e()}}else{if(e){e()}}t.ready=true;s.trigger(document,d)};t.attributes.filesystem.root.getDirectory(t.options.localCacheFolder,{create:true,exclusive:false},u,l)};l.FileTransferWrapper=function(e){if(n.isCordova()){this.fileTransfer=new FileTransfer}this.filesystem=e};l.FileTransferWrapper.prototype.download=function(e,r,o,i,a){var n=t.options.headers||{};var s=typeof a==="function";if(this.fileTransfer){if(s){this.fileTransfer.onprogress=a}return this.fileTransfer.download(e,r,o,i,false,{headers:n})}var l=this.filesystem;var u=function(o,i,a){t.overridables.log(o,i);if(a){a({code:0,source:e,target:r})}};var c=new XMLHttpRequest;c.open("GET",e,true);if(s){c.onprogress=a}if(t.options.withCredentials){c.withCredentials=true}c.timeout=t.options.timeout;c.responseType="blob";for(var d in n){c.setRequestHeader(d,n[d])}c.onload=function(){if(c.response&&(c.status===200||c.status===0)){l.root.getFile(r,{create:true},function(e){e.createWriter(function(t){t.onerror=i;t.onwriteend=function(){o(e)};t.write(c.response,i)},i)},i)}else{u("Image "+e+" could not be downloaded - status: "+c.status,3,i)}};c.onerror=function(){u("XHR error - Image "+e+" could not be downloaded - status: "+c.status,3,i)};c.ontimeout=function(){u("XHR error - Image "+e+" timed out - status: "+c.status,3,i)};c.send()};l.getBackgroundImageURL=function(e){var t=s.getBackgroundImage(e);if(!t){return}var r=/url\s?\((.+)\)/;var o=r.exec(t)[1];return o.replace(/(['"])/g,"")};l.getBase64DataFromEntry=function(e,a,n,s){var l=function(e){var i=new FileReader;i.onloadend=function(e){var i=e.target.result;if(i){t.overridables.log("File "+a+" loaded from cache",r);if(n){n(i)}}else{t.overridables.log("File in cache "+a+" is empty",o);if(s){s(a)}}};i.readAsDataURL(e)};var u=function(e){t.overridables.log("Failed to read file "+e.code,i);if(s){s(a)}};e.file(l,u)};l.loadCachedFile=function(e,o,a,s,u){if(!l.isImgCacheLoaded()){return}if(!e){t.overridables.log("First parameter of loadCachedFile is empty, should be a DOM element",i);return}var c=n.URIGetFileName(o);var d=function(i){if(t.options.useDataURI){l.getBase64DataFromEntry(i,c,function(t){a(e,t,o);if(s){s(e)}},function(){if(u){u(e)}})}else{var d=n.EntryGetURL(i);a(e,d,o);t.overridables.log("File "+c+" loaded from cache",r);if(s){s(e)}}};var f=function(){t.overridables.log("File "+c+" not in cache",r);if(u){u(e)}};t.attributes.filesystem.root.getFile(l.getCachedFilePath(o),{create:false},d,f)};l.setBackgroundImagePath=function(e,t,r){s.setBackgroundImage(e,'url("'+t+'")');s.setAttribute(e,c,r)};var u="data-old-src",c="data-old-background",d="ImgCacheReady";t.init=function(e,a){t.jQuery=window.jQuery||window.Zepto?true:false;t.jQueryLite=typeof window.angular!=="undefined"&&window.angular.element?true:false;t.attributes.init_callback=e;t.overridables.log("ImgCache initialising",r);var s=function(e){if(t.options.cacheClearSize>0){var r=t.getCurrentSize();if(r>t.options.cacheClearSize*1024*1024){t.clearCache(e,e)}else{if(e){e()}}}else{if(e){e()}}};var u=function(e){t.overridables.log("LocalFileSystem opened",r);t.attributes.filesystem=e;l.createCacheDir(function(){s(t.attributes.init_callback)},a)};var c=function(e){t.overridables.log("Failed to initialise LocalFileSystem "+e.code,i);if(a){a()}};if(n.isCordova()&&window.requestFileSystem){if(t.options.cordovaFilesystemRoot){try{window.resolveLocalFileSystemURL(t.options.cordovaFilesystemRoot,function(e){u({root:e})},c)}catch(e){c({code:e.message})}}else{window.requestFileSystem(n.getCordovaStorageType(t.options.usePersistentCache),0,u,c)}}else{var d=window.requestFileSystem||window.webkitRequestFileSystem;window.storageInfo=window.storageInfo||(t.options.usePersistentCache?navigator.webkitPersistentStorage:navigator.webkitTemporaryStorage);if(!window.storageInfo){t.overridables.log("Your browser does not support the html5 File API",o);if(a){a()}return}var f=t.options.chromeQuota;window.storageInfo.requestQuota(f,function(){var e=t.options.usePersistentCache?window.PERSISTENT:window.TEMPORARY;d(e,f,u,c)},function(e){t.overridables.log("Failed to request quota: "+e.message,i);if(a){a()}})}};t.getCurrentSize=function(){if(l.hasLocalStorage()){var e=localStorage.getItem("imgcache:"+t.options.localCacheFolder);if(e===null){return 0}return parseInt(e,10)}else{return 0}};t.cacheFile=function(e,a,s,u){if(!l.isImgCacheLoaded()||!e){return}e=n.sanitizeURI(e);var c=l.getCachedFileFullPath(e);var d=new l.FileTransferWrapper(t.attributes.filesystem);d.download(e,c,function(e){e.getMetadata(function(e){if(e&&"size"in e){t.overridables.log("Cached file size: "+e.size,r);l.setCurrentSize(t.getCurrentSize()+parseInt(e.size,10))}else{t.overridables.log("No metadata size property available",r)}});t.overridables.log("Download complete: "+n.EntryGetPath(e),r);if(e.setMetadata){e.setMetadata(function(){t.overridables.log("com.apple.MobileBackup metadata set",r)},function(){t.overridables.log("com.apple.MobileBackup metadata could not be set",o)},{"com.apple.MobileBackup":1})}if(a){a(e.toURL())}},function(e){if(e.source){t.overridables.log("Download error source: "+e.source,i)}if(e.target){t.overridables.log("Download error target: "+e.target,i)}t.overridables.log("Download error code: "+e.code,i);if(s){s()}},u)};t.getCachedFile=function(e,r){if(!l.isImgCacheLoaded()||!r){return}var o=e;e=n.sanitizeURI(e);var i=l.getCachedFilePath(e);if(n.isCordovaAndroid()){if(i.indexOf("file://")===0){i=i.substr(7)}}t.attributes.filesystem.root.getFile(i,{create:false},function(t){r(e,t)},function(){r(o,null)})};t.getCachedFileURL=function(e,r,o){var i=function(e,t){if(t){r(e,n.EntryGetURL(t))}else{if(o){o(e)}}};t.getCachedFile(e,i)};t.getCachedFileBase64Data=function(e,r,o){var i=function(e,t){if(t){l.getBase64DataFromEntry(t,e,function(t){r(e,t)},o)}else{if(o){o(e)}}};t.getCachedFile(e,i)};t.isCached=function(e,r){t.getCachedFile(e,function(e,t){r(e,t!==null)})};t.useOnlineFile=function(e){if(!l.isImgCacheLoaded()||!e){return}var t=s.getAttribute(e,u);if(t){s.setAttribute(e,"src",t)}s.removeAttribute(e,u)};t.useCachedFile=function(e,t,r){if(!l.isImgCacheLoaded()){return}var o=n.sanitizeURI(s.getAttribute(e,"src"));l.loadCachedFile(e,o,l.setNewImgPath,t,r)};t.useCachedFileWithSource=function(e,t,r,o){if(!l.isImgCacheLoaded()){return}var i=n.sanitizeURI(t);l.loadCachedFile(e,i,l.setNewImgPath,r,o)};t.clearCache=function(e,o){if(!l.isImgCacheLoaded()){return}t.attributes.dirEntry.removeRecursively(function(){t.overridables.log("Local cache cleared",r);l.setCurrentSize(0);l.createCacheDir(e,o)},function(e){t.overridables.log("Failed to remove directory or its contents: "+e.code,i);if(o){o()}})};t.removeFile=function(e,r,o){e=n.sanitizeURI(e);var a=l.getCachedFilePath(e);var s=function(e){t.overridables.log("Failed to remove file due to "+e.code,i);if(o){o()}};t.attributes.filesystem.root.getFile(a,{create:false},function(e){e.remove(function(){if(r){r()}},s)},s)};t.isBackgroundCached=function(e,r){var o=l.getBackgroundImageURL(e);t.getCachedFile(o,function(e,t){r(e,t!==null)})};t.cacheBackground=function(e,i,a,n){if(!l.isImgCacheLoaded()){return}var s=l.getBackgroundImageURL(e);if(!s){t.overridables.log("No background to cache",o);if(a){a()}return}t.overridables.log("Background image URL: "+s,r);t.cacheFile(s,i,a,n)};t.useCachedBackground=function(e,r,i){if(!l.isImgCacheLoaded()){return}var a=l.getBackgroundImageURL(e);if(!a){t.overridables.log("No background to cache",o);if(i){i()}return}l.loadCachedFile(e,a,l.setBackgroundImagePath,r,i)};t.useCachedBackgroundWithSource=function(e,t,r,o){if(!l.isImgCacheLoaded()){return}l.loadCachedFile(e,t,l.setBackgroundImagePath,r,o)};t.useBackgroundOnlineFile=function(e){if(!e){return}var t=s.getAttribute(e,c);if(t){s.setBackgroundImage(e,'url("'+t+'")')}s.removeAttribute(e,c)};t.getCacheFolderURI=function(){if(!l.isImgCacheLoaded()){return}return n.EntryGetURL(t.attributes.dirEntry)};t.helpers=n;t.domHelpers=s;t.private=l;if(e.exports){e.exports=t}else{window.ImgCache=t}})(window.jQuery||window.Zepto||function(){throw"jQuery is not available"})}));e("default",r)}}});
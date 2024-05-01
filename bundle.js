// (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//     (function(self) {
    
//     var irrelevant = (function (exports) {
    
//       var global =
//         (typeof globalThis !== 'undefined' && globalThis) ||
//         (typeof self !== 'undefined' && self) ||
//         (typeof global !== 'undefined' && global);
    
//       var support = {
//         searchParams: 'URLSearchParams' in global,
//         iterable: 'Symbol' in global && 'iterator' in Symbol,
//         blob:
//           'FileReader' in global &&
//           'Blob' in global &&
//           (function() {
//             try {
//               new Blob();
//               return true
//             } catch (e) {
//               return false
//             }
//           })(),
//         formData: 'FormData' in global,
//         arrayBuffer: 'ArrayBuffer' in global
//       };
    
//       function isDataView(obj) {
//         return obj && DataView.prototype.isPrototypeOf(obj)
//       }
    
//       if (support.arrayBuffer) {
//         var viewClasses = [
//           '[object Int8Array]',
//           '[object Uint8Array]',
//           '[object Uint8ClampedArray]',
//           '[object Int16Array]',
//           '[object Uint16Array]',
//           '[object Int32Array]',
//           '[object Uint32Array]',
//           '[object Float32Array]',
//           '[object Float64Array]'
//         ];
    
//         var isArrayBufferView =
//           ArrayBuffer.isView ||
//           function(obj) {
//             return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
//           };
//       }
    
//       function normalizeName(name) {
//         if (typeof name !== 'string') {
//           name = String(name);
//         }
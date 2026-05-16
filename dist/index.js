"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=s(function(f,o){
var l=require('@stdlib/array-base-assert-contains/dist').factory,m=require('@stdlib/array-zero-to/dist'),v=require('@stdlib/array-dtype/dist'),g=require('@stdlib/array-dtypes/dist'),i=require('@stdlib/array-base-join/dist'),a=require('@stdlib/error-tools-fmtprodmsg/dist'),t=g("numeric_and_generic"),n=l(t);function y(e){var r=v(e);if(r===null)throw new TypeError(a('1pH2f',e));if(arguments.length>1){if(r=arguments[1],!n(r))throw new TypeError(a('1pHDQ',i(t,'", "'),r))}else if(!n(r))throw new TypeError(a('invalid argument. First argument must have one of the following data types: "%s". Value: `%s`.',i(t,'", "'),r));return m(e.length,r)}o.exports=y
});var d=u();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

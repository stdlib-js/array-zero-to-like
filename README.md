<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# zeroToLike

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Generate a linearly spaced numeric array whose elements increment by `1` starting from zero and having the same length and data type as a provided input array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import zeroToLike from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-zero-to-like@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/array-zero-to-like/tags). For example,

```javascript
import zeroToLike from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-zero-to-like@v0.2.1-esm/index.mjs';
```

#### zeroToLike( x\[, dtype] )

Generates a linearly spaced numeric array whose elements increment by `1` starting from zero and having the same length and data type as a provided input array `x`.

```javascript
var arr = zeroToLike( [ 0, 0, 0, 0, 0 ] );
// returns [ 0, 1, 2, 3, 4 ]
```

The function recognizes the following data types:

-   `float64`: double-precision floating-point numbers (IEEE 754)
-   `float32`: single-precision floating-point numbers (IEEE 754)
-   `complex128`: double-precision complex floating-point numbers
-   `complex64`: single-precision complex floating-point numbers
-   `int32`: 32-bit two's complement signed integers
-   `uint32`: 32-bit unsigned integers
-   `int16`: 16-bit two's complement signed integers
-   `uint16`: 16-bit unsigned integers
-   `int8`: 8-bit two's complement signed integers
-   `uint8`: 8-bit unsigned integers
-   `uint8c`: 8-bit unsigned integers clamped to `0-255`
-   `generic`: generic JavaScript values

By default, the output array data type is inferred from the provided array `x`. To return an array having a different data type, provide a `dtype` argument.

```javascript
var arr = zeroToLike( [ 0, 0, 0, 0, 0 ], 'int32' );
// returns <Int32Array>[ 0, 1, 2, 3, 4 ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   For complex number arrays, each element of the returned array has an imaginary component equal to `0`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import sort2hp from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gsort2hp@esm/index.mjs';
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@esm/index.mjs';
import zeroToLike from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-zero-to-like@esm/index.mjs';

// Generate an array of random numbers:
var opts = {
    'dtype': 'generic'
};
var x = discreteUniform( 10, 100, 200, opts );

// Generate an array of indices:
var idx = zeroToLike( x );

// Create a temporary array to avoid mutation:
var tmp = x.slice();

// Sort the index array according to the sort order of `x`:
sort2hp( x.length, 1, tmp, 1, idx, 1 );

console.log( x );
console.log( idx );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array-empty-like`][@stdlib/array/empty-like]</span><span class="delimiter">: </span><span class="description">create an uninitialized array having the same length and data type as a provided array.</span>
-   <span class="package-name">[`@stdlib/array-full-like`][@stdlib/array/full-like]</span><span class="delimiter">: </span><span class="description">create a filled array having the same length and data type as a provided array.</span>
-   <span class="package-name">[`@stdlib/array-nans-like`][@stdlib/array/nans-like]</span><span class="delimiter">: </span><span class="description">create an array filled with NaNs and having the same length and data type as a provided array.</span>
-   <span class="package-name">[`@stdlib/array-one-to-like`][@stdlib/array/one-to-like]</span><span class="delimiter">: </span><span class="description">generate a linearly spaced numeric array whose elements increment by 1 starting from one and having the same length and data type as a provided input array.</span>
-   <span class="package-name">[`@stdlib/array-ones-like`][@stdlib/array/ones-like]</span><span class="delimiter">: </span><span class="description">create an array filled with ones and having the same length and data type as a provided array.</span>
-   <span class="package-name">[`@stdlib/array-zero-to`][@stdlib/array/zero-to]</span><span class="delimiter">: </span><span class="description">generate a linearly spaced numeric array whose elements increment by 1 starting from zero.</span>
-   <span class="package-name">[`@stdlib/array-zeros-like`][@stdlib/array/zeros-like]</span><span class="delimiter">: </span><span class="description">create a zero-filled array having the same length and data type as a provided array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-zero-to-like.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-zero-to-like

[test-image]: https://github.com/stdlib-js/array-zero-to-like/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/array-zero-to-like/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-zero-to-like/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-zero-to-like?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-zero-to-like.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-zero-to-like/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-zero-to-like/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-zero-to-like/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-zero-to-like/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-zero-to-like/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-zero-to-like/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-zero-to-like/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-zero-to-like/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-zero-to-like/main/LICENSE

<!-- <related-links> -->

[@stdlib/array/empty-like]: https://github.com/stdlib-js/array-empty-like/tree/esm

[@stdlib/array/full-like]: https://github.com/stdlib-js/array-full-like/tree/esm

[@stdlib/array/nans-like]: https://github.com/stdlib-js/array-nans-like/tree/esm

[@stdlib/array/one-to-like]: https://github.com/stdlib-js/array-one-to-like/tree/esm

[@stdlib/array/ones-like]: https://github.com/stdlib-js/array-ones-like/tree/esm

[@stdlib/array/zero-to]: https://github.com/stdlib-js/array-zero-to/tree/esm

[@stdlib/array/zeros-like]: https://github.com/stdlib-js/array-zeros-like/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->

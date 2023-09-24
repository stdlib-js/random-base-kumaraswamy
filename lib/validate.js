/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isPositive = require( '@stdlib/assert-is-positive-number' ).isPrimitive;
var format = require( '@stdlib/error-tools-fmtprodmsg' );


// MAIN //

/**
* Validates parameters.
*
* @private
* @param {PositiveNumber} a - first shape parameter
* @param {PositiveNumber} b - second shape parameter
* @returns {(Error|null)} error or null
*
* @example
* var err = validate( 1.0, 2.0 );
* if ( err ) {
*     throw err;
* }
*/
function validate( a, b ) {
	if ( !isPositive( a ) ) {
		return new TypeError( format( '0oX71,NQ', a ) );
	}
	if ( !isPositive( b ) ) {
		return new TypeError( format( '0oX72,Go', b ) );
	}
	return null;
}


// EXPORTS //

module.exports = validate;
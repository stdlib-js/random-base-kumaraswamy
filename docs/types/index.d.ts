/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import * as random from '@stdlib/types/random';

/**
* Interface defining `factory` options.
*/
interface Options {
	/**
	* Pseudorandom number generator which generates uniformly distributed pseudorandom numbers.
	*/
	prng?: random.PRNG;

	/**
	* Pseudorandom number generator seed.
	*/
	seed?: random.PRNGSeedMT19937;

	/**
	* Pseudorandom number generator state.
	*/
	state?: random.PRNGStateMT19937;

	/**
	* Specifies whether to copy a provided pseudorandom number generator state.
	*/
	copy?: boolean;
}

/**
* Interface for PRNG properties and methods.
*/
interface PRNG {
	/**
	* Generator name.
	*/
	readonly NAME: string;

	/**
	* Underlying pseudorandom number generator.
	*/
	readonly PRNG: random.PRNG;

	/**
	* PRNG seed.
	*/
	readonly seed: random.PRNGSeedMT19937;

	/**
	* PRNG seed length.
	*/
	readonly seedLength: number;

	/**
	* PRNG state.
	*/
	state: random.PRNGStateMT19937;

	/**
	* PRNG state length.
	*/
	readonly stateLength: number;

	/**
	* PRNG state size (in bytes).
	*/
	readonly byteLength: number;

	/**
	* Serializes the pseudorandom number generator as a JSON object.
	*
	* @returns JSON representation
	*/
	toJSON(): string;
}

/**
* Interface for generating Kumaraswamy's double bounded distributed pseudorandom numbers with pre-specified parameter values.
*/
interface NullaryFunction extends PRNG {
	/**
	* Returns a Kumaraswamy's double bounded distributed pseudorandom number.
	*
	* @returns pseudorandom number
	*/
	(): number;
}

/**
* Interface for generating Kumaraswamy's double bounded distributed pseudorandom numbers without pre-specified parameter values.
*/
interface BinaryFunction extends PRNG {
	/**
	* Returns a Kumaraswamy's double bounded distributed pseudorandom number.
	*
	* @param a - first shape parameter
	* @param b - second shape parameter
	* @returns pseudorandom number
	*/
	( a: number, b: number ): number;
}

/**
* Interface for generating pseudorandom numbers drawn from a Kumaraswamy's double bounded distribution.
*/
interface Random extends PRNG {
	/**
	* Returns a Kumaraswamy's double bounded distributed pseudorandom number.
	*
	* ## Notes
	*
	* -   If `a <= 0` or `b <= 0`, the function returns `NaN`.
	* -   If `a` or `b` is `NaN`, the function returns `NaN`.
	*
	* @param a - first shape parameter
	* @param b - second shape parameter
	* @returns pseudorandom number
	*
	* @example
	* var v = kumaraswamy( 1.5, 1.5 );
	* // returns <number>
	*/
	( a: number, b: number ): number;

	/**
	* Returns a pseudorandom number generator for generating Kumaraswamy's double bounded distributed random numbers.
	*
	* ## Notes
	*
	* -   When provided `a` and `b`, the returned PRNG returns random variates drawn from the specified distribution.
	*
	* @param a - first shape parameter
	* @param b - second shape parameter
	* @param options - function options
	* @param options.prng - pseudorandom number generator which generates uniformly distributed pseudorandom numbers
	* @param options.seed - pseudorandom number generator seed
	* @param options.state - pseudorandom number generator state
	* @param options.copy - boolean indicating whether to copy a provided pseudorandom number generator state (default: true)
	* @throws must provide a valid state
	* @returns pseudorandom number generator
	*
	* @example
	* var mykumaraswamy = kumaraswamy.factory( 1.5, 1.5 );
	*
	* var v = mykumaraswamy();
	* // returns <number>
	*
	* @example
	* var mykumaraswamy = kumaraswamy.factory( 2.0, 3.0, {
	*     'seed': 297
	* });
	* var v = mykumaraswamy();
	* // returns <number>
	*/
	factory( a: number, b: number, options?: Options ): NullaryFunction;

	/**
	* Returns a pseudorandom number generator for generating Kumaraswamy's double bounded distributed random numbers.
	*
	* ## Notes
	*
	* -   When not provided `a` and `b`, the returned PRNG requires that both `a` and `b` be provided at each invocation.
	*
	* @param options - function options
	* @param options.prng - pseudorandom number generator which generates uniformly distributed pseudorandom numbers
	* @param options.seed - pseudorandom number generator seed
	* @param options.state - pseudorandom number generator state
	* @param options.copy - boolean indicating whether to copy a provided pseudorandom number generator state (default: true)
	* @throws must provide a valid state
	* @returns pseudorandom number generator
	*
	* @example
	* var mykumaraswamy = kumaraswamy.factory();
	*
	* var v = mykumaraswamy( 1.5, 1.5 );
	* // returns <number>
	*
	* @example
	* var mykumaraswamy = kumaraswamy.factory({
	*     'seed': 297
	* });
	* var v = mykumaraswamy( 2.3, 3.0 );
	* // returns <number>
	*/
	factory( options?: Options ): BinaryFunction;
}

/**
* Returns a Kumaraswamy's double bounded distributed pseudorandom number.
*
* ## Notes
*
* -   If `a <= 0` or `b <= 0`, the function returns `NaN`.
* -   If `a` or `b` is `NaN`, the function returns `NaN`.
*
* @param a - first shape parameter
* @param b - second shape parameter
* @returns pseudorandom number
*
* @example
* var v = kumaraswamy( 1.5, 1.5 );
* // returns <number>
*
* @example
* var mykumaraswamy = kumaraswamy.factory( 1.5, 1.5 );
*
* var v = mykumaraswamy();
* // returns <number>
*/
declare var kumaraswamy: Random;


// EXPORTS //

export = kumaraswamy;

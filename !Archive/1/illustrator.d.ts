declare module javascript {

	/**
	 * The $ object provides a number of debugging facilities and informational methods.
	 */
	class $ {
		

		/**
		 * Shows an About box for the ExtendScript component, and returns the text for the box.
		 * @return {string}
		 */
		public static about(): string;
		

		/**
		 * Shows an About box for the ExtendScript component, and returns the text for the box.
		 * @return {string}
		 */
		public about(): string;
		

		/**
		 * Converts this object to a string.
		 * @return {string}
		 */
		public static toString(): string;
		

		/**
		 * Converts this object to a string.
		 * @return {string}
		 */
		public toString(): string;
		

		/**
		 * Prints text to the Console.
		 * @return {void}
		 * @param {any} text - The text to print. All arguments are concatenated.
		 */
		public static write(text: any): void;
		

		/**
		 * Prints text to the Console.
		 * @return {void}
		 * @param {any} text - The text to print. All arguments are concatenated.
		 */
		public write(text: any): void;
		

		/**
		 * Prints text to the Console, and adds a newline character.
		 * @return {void}
		 * @param {any} text - The text to print. All arguments are concatenated.
		 */
		public static writeln(text: any): void;
		

		/**
		 * Prints text to the Console, and adds a newline character.
		 * @return {void}
		 * @param {any} text - The text to print. All arguments are concatenated.
		 */
		public writeln(text: any): void;
		

		/**
		 * Breaks execution at the current position.
		 * @return {void}
		 * @param {any} condition - A string containing a JavaScript statement to be used as a condition. If the statement evaluates to true or nonzero when this point is reached, execution stops.
		 */
		public static bp(condition?: any): void;
		

		/**
		 * Breaks execution at the current position.
		 * @return {void}
		 * @param {any} condition - A string containing a JavaScript statement to be used as a condition. If the statement evaluates to true or nonzero when this point is reached, execution stops.
		 */
		public bp(condition?: any): void;
		

		/**
		 * Retrieves the value of an environment variable.
		 * @return {string}
		 * @param {string} name - The name of the variable.
		 */
		public static getenv(name: string): string;
		

		/**
		 * Retrieves the value of an environment variable.
		 * @return {string}
		 * @param {string} name - The name of the variable.
		 */
		public getenv(name: string): string;
		

		/**
		 * Sets the value of an environment variable.
		 * @return {void}
		 * @param {string} name - The name of the variable.
		 * @param {string} value - The value of the variable.
		 */
		public static setenv(name: string, value: string): void;
		

		/**
		 * Sets the value of an environment variable.
		 * @return {void}
		 * @param {string} name - The name of the variable.
		 * @param {string} value - The value of the variable.
		 */
		public setenv(name: string, value: string): void;
		

		/**
		 * Suspends the calling thread for a number of milliseconds.
		 * @return {void}
		 * @param {number} msecs - Number of milliseconds to sleep.
		 */
		public static sleep(msecs: number): void;
		

		/**
		 * Suspends the calling thread for a number of milliseconds.
		 * @return {void}
		 * @param {number} msecs - Number of milliseconds to sleep.
		 */
		public sleep(msecs: number): void;
		

		/**
		 * Invokes the platform-specific color selection dialog, and returns the selected color.
		 * @return {number}
		 * @param {number} color - The color to be preselected in the dialog, as 0xRRGGBB, or -1 for the platform default.
		 */
		public static colorPicker(color: number): number;
		

		/**
		 * Invokes the platform-specific color selection dialog, and returns the selected color.
		 * @return {number}
		 * @param {number} color - The color to be preselected in the dialog, as 0xRRGGBB, or -1 for the platform default.
		 */
		public colorPicker(color: number): number;
		

		/**
		 * Loads and evaluates a file.
		 * @return {any}
		 * @param {javascript.File} file - The file to load.
		 * @param {number} timeout - An optional timeout in milliseconds., optional default: 10000  @default [10000]
		 */
		public static evalFile(file: javascript.File, timeout?: number): any;
		

		/**
		 * Loads and evaluates a file.
		 * @return {any}
		 * @param {javascript.File} file - The file to load.
		 * @param {number} timeout - An optional timeout in milliseconds., optional default: 10000  @default [10000]
		 */
		public evalFile(file: javascript.File, timeout?: number): any;
		

		/**
		 * Initiates garbage collection in the ExtendScript engine.
		 * @return {void}
		 */
		public static gc(): void;
		

		/**
		 * Initiates garbage collection in the ExtendScript engine.
		 * @return {void}
		 */
		public gc(): void;
		

		/**
		 * The most recent run-time error information.
		 */
		public static error: Error;
		

		/**
		 * The most recent run-time error information.
		 */
		public error: Error;
		

		/**
		 * @readonly
		 * The version number of the ExtendScript engine.
		 */
		public static version: string;
		

		/**
		 * @readonly
		 * The version number of the ExtendScript engine.
		 */
		public version: string;
		

		/**
		 * @readonly
		 * The ExtendScript build information.
		 */
		public static build: string;
		

		/**
		 * @readonly
		 * The ExtendScript build information.
		 */
		public build: string;
		

		/**
		 * @readonly
		 * The ExtendScript build date.
		 */
		public static buildDate: Date;
		

		/**
		 * @readonly
		 * The ExtendScript build date.
		 */
		public buildDate: Date;
		

		/**
		 * @readonly
		 * A reference to the global object, which contains the JavaScript global namespace.
		 */
		public static global: any;
		

		/**
		 * @readonly
		 * A reference to the global object, which contains the JavaScript global namespace.
		 */
		public global: any;
		

		/**
		 * @readonly
		 * The current stack trace.
		 */
		public static stack: string;
		

		/**
		 * @readonly
		 * The current stack trace.
		 */
		public stack: string;
		

		/**
		 * The current debugging level, which enables or disables the JavaScript debugger.
		 */
		public static level: number;
		

		/**
		 * The current debugging level, which enables or disables the JavaScript debugger.
		 */
		public level: number;
		

		/**
		 * Gets or sets low-level debug output flags.
		 */
		public static flags: number;
		

		/**
		 * Gets or sets low-level debug output flags.
		 */
		public flags: number;
		

		/**
		 * Sets or clears strict mode for object modification.
		 */
		public static strict: any;
		

		/**
		 * Sets or clears strict mode for object modification.
		 */
		public strict: any;
		

		/**
		 * Gets or sets the current locale.
		 */
		public static locale: string;
		

		/**
		 * Gets or sets the current locale.
		 */
		public locale: string;
		

		/**
		 * Set to true to enable the extended localization features of the built-in toString() method.
		 */
		public static localize: boolean;
		

		/**
		 * Set to true to enable the extended localization features of the built-in toString() method.
		 */
		public localize: boolean;
		

		/**
		 * The character used as the decimal point character in formatted numeric output.
		 */
		public static decimalPoint: string;
		

		/**
		 * The character used as the decimal point character in formatted numeric output.
		 */
		public decimalPoint: string;
		

		/**
		 * The ExtendScript memory cache size, in bytes.
		 */
		public static memCache: number;
		

		/**
		 * The ExtendScript memory cache size, in bytes.
		 */
		public memCache: number;
		

		/**
		 * @readonly
		 * An array of objects containing information about the display screens attached to your computer.
		 */
		public static screens: any[];
		

		/**
		 * @readonly
		 * An array of objects containing information about the display screens attached to your computer.
		 */
		public screens: any[];
		

		/**
		 * @readonly
		 * The current operating system version information.
		 */
		public static os: string;
		

		/**
		 * @readonly
		 * The current operating system version information.
		 */
		public os: string;
		

		/**
		 * @readonly
		 * The file name of the current script.
		 */
		public static fileName: string;
		

		/**
		 * @readonly
		 * The file name of the current script.
		 */
		public fileName: string;
		

		/**
		 * @readonly
		 * The current line number of the currently executing script.
		 */
		public static line: number;
		

		/**
		 * @readonly
		 * The current line number of the currently executing script.
		 */
		public line: number;
		

		/**
		 * @readonly
		 * A high-resolution timer, measuring the time in microseconds. The timer starts when ExtendScript is
						initialized during the application startup sequence. Every read access resets the timer to Zero.
		 */
		public static hiresTimer: number;
		

		/**
		 * @readonly
		 * A high-resolution timer, measuring the time in microseconds. The timer starts when ExtendScript is
						initialized during the application startup sequence. Every read access resets the timer to Zero.
		 */
		public hiresTimer: number;
		

		/**
		 * @readonly
		 * The name of the current ExtendScript engine, if set.
		 */
		public static engineName: string;
		

		/**
		 * @readonly
		 * The name of the current ExtendScript engine, if set.
		 */
		public engineName: string;
		

		/**
		 * @readonly
		 * The path for include files for the current script.
		 */
		public static includePath: string;
		

		/**
		 * @readonly
		 * The path for include files for the current script.
		 */
		public includePath: string;
	}

	/**
	 * The base class of all JavaScript objects.
	 */
	class Object {
		

		/**
		 * @constructor
		 * Creates and returns a new object of a given type.
		 * @return {any}
		 * @param {any} what - The object type.
		 */
		public constructor(what: any);
		

		/**
		 * Reports whether an object is still valid.
		 * @return {boolean}
		 * @param {any} what - The object to check.
		 */
		public static isValid(what: any): boolean;
		

		/**
		 * Reports whether an object is still valid.
		 * @return {boolean}
		 * @param {any} what - The object to check.
		 */
		public isValid(what: any): boolean;
		

		/**
		 * Creates and returns a string representing this object.
		 * @return {string}
		 */
		public toString(): string;
		

		/**
		 * Creates and returns a string representing this object, localized for the current locale. See toString().
		 * @return {string}
		 */
		public toLocaleString(): string;
		

		/**
		 * Reports whether a given property is defined with an instance or within the prototype chain.
		 * @return {boolean}
		 * @param {string} name - The name of the property to check.
		 */
		public hasOwnProperty(name: string): boolean;
		

		/**
		 * Reports whether a given property is enumerable.
		 * @return {boolean}
		 * @param {string} name - The name of the property to check.
		 */
		public propertyIsEnumerable(name: string): boolean;
		

		/**
		 * Checks whether the given object is a prototype of this object.
		 * @return {boolean}
		 * @param {any} what - The object to check.
		 */
		public isPrototypeOf(what: any): boolean;
		

		/**
		 * Retrieves and returns the primitive value of this object.
		 * @return {any}
		 */
		public valueOf(): any;
		

		/**
		 * Creates and returns a string representation of this object.
		 * @return {string}
		 */
		public toSource(): string;
		

		/**
		 * Removes the watch function of a property.
		 * @return {void}
		 * @param {string} name - The name of the property to unwatch.
		 */
		public unwatch(name: string): void;
		

		/**
		 * Adds a watch function to a property, which is called when the value changes.
		 * @return {void}
		 * @param {string} name - The name of the property to watch.
		 * @param {Function} func - The function to be called when the value of this property changes.
		 */
		public watch(name: string, func: Function): void;
		

		/**
		 * @readonly
		 * Points to the prototype object for this object.
		 */
		public prototype: any;
		

		/**
		 * @readonly
		 * Retrieves and returns the Reflection object associated with this method or a property.
		 */
		public reflect: Reflection;
	}

	/**
	 * An array with integer indexing and a length property.
	 */
	class Array {
		

		/**
		 * @constructor
		 * Creates and returns a new array.
		 * @return {any[]}
		 * @param {number} length - If no other parameters are passed, the initial length of the empty array.
		 * @param {any} element - If there is more than one parameter, the array is initialized with the given parameters.
		 */
		public constructor(length: number, element?: any);
		

		/**
		 * Returns a new array created by concatenating the given values to the end of the original array.
		 * @return {any[]}
		 * @param {any} value - Any number of values to be added to the end of the array.
		 */
		public concat(value: any): any[];
		

		/**
		 * Joins all elements of the array into a string; optionally, each element is separated by delimiter.
		 * @return {string}
		 * @param {string} delimiter - A string used to separate each element of the array.
		 */
		public join(delimiter?: string): string;
		

		/**
		 * Reverses the order of the elements in the array.
		 * @return {any[]}
		 */
		public reverse(): any[];
		

		/**
		 * Creates a new array, which contains a subset of the original array's elements.
		 * @return {any[]}
		 */
		public slice(): any[];
		

		/**
		 * Sorts the elements of the array in place, using the given function to compare to elements.
		 * @return {void}
		 * @param {Function} userFunction - A user-supplied function of the form userFunction(a, b) which returns less than 0 if a is greater than b, 0 if a and b are equal, and greater than 0 if b is greater than a.
		 */
		public sort(userFunction: Function): void;
		

		/**
		 * Removes the last element from the array, decreases the length by 1, and returns the value of the element.
		 * @return {any}
		 */
		public pop(): any;
		

		/**
		 * Places one or more values onto the end of the array and increases length by n.
		 * @return {number}
		 * @param {number} value - Any number of values to be pushed onto the end of the array.
		 */
		public push(value: number): number;
		

		/**
		 * Removes num elements from the array beginning with index, start.
		 * @return {any[]}
		 * @param {number} start - The index of the first element to remove. Negative values are relative to the end of the array.
		 * @param {number} num - The number of array elements to remove, including start. If omitted, all elements from array index start to the end of the array are removed.
		 * @param {any} value - A list of one or more values to be added to the array starting at index start.
		 */
		public splice(start: number, num?: number, value?: any): any[];
		

		/**
		 * Removes the first element from the array, decreases the length by 1, and returns the value of the element.
		 * @return {any}
		 */
		public shift(): any;
		

		/**
		 * Converts an array to a string and returns the string.
		 * @return {string}
		 */
		public toString(): string;
		

		/**
		 * Converts an array to a string and returns the string (localized).
		 * @return {string}
		 */
		public toLocaleString(): string;
		

		/**
		 * Adds one or more elements to the beginning of the array.
		 * @return {number}
		 * @param {any} value - The values of one or more elements to be added to the beginning of the array.
		 */
		public unshift(value: any): number;
		

		/**
		 * Creates a string representation of this object that can be fed back to eval() to re-create an object. Works only with built-in classes.
		 * @return {string}
		 */
		public toSource(): string;
		

		/**
		 * The length of the array
		 */
		public length: number;
	}

	/**
	 * A global object containing a set of math functions and constants.
	 */
	class Math {
		

		/**
		 * Returns the absolute value of a number.
		 * @return {number}
		 * @param {number} x - A number.
		 */
		public static abs(x: number): number;
		

		/**
		 * Returns the absolute value of a number.
		 * @return {number}
		 * @param {number} x - A number.
		 */
		public abs(x: number): number;
		

		/**
		 * Returns the arc cosine(in radians) of a number.
		 * @return {number}
		 * @param {number} x - A number.
		 */
		public static acos(x: number): number;
		

		/**
		 * Returns the arc cosine(in radians) of a number.
		 * @return {number}
		 * @param {number} x - A number.
		 */
		public acos(x: number): number;
		

		/**
		 * Returns the arc sin(in radians) of a number.
		 * @return {number}
		 * @param {number} x - A number.
		 */
		public static asin(x: number): number;
		

		/**
		 * Returns the arc sin(in radians) of a number.
		 * @return {number}
		 * @param {number} x - A number.
		 */
		public asin(x: number): number;
		

		/**
		 * Returns the arc tangent(in radians) of a number.
		 * @return {number}
		 * @param {number} x - A number.
		 */
		public static atan(x: number): number;
		

		/**
		 * Returns the arc tangent(in radians) of a number.
		 * @return {number}
		 * @param {number} x - A number.
		 */
		public atan(x: number): number;
		

		/**
		 * Returns the arc tangent of the quotient of its arguments (y/x).
		 * @return {number}
		 * @param {number} y - A number.
		 * @param {number} x - A number.
		 */
		public static atan2(y: number, x: number): number;
		

		/**
		 * Returns the arc tangent of the quotient of its arguments (y/x).
		 * @return {number}
		 * @param {number} y - A number.
		 * @param {number} x - A number.
		 */
		public atan2(y: number, x: number): number;
		

		/**
		 * Rounds the number up to the nearest integer.
		 * @return {number}
		 * @param {number} x - A number.
		 */
		public static ceil(x: number): number;
		

		/**
		 * Rounds the number up to the nearest integer.
		 * @return {number}
		 * @param {number} x - A number.
		 */
		public ceil(x: number): number;
		

		/**
		 * Returns the cosine of an angle provided in radians.
		 * @return {number}
		 * @param {number} x - An angle, in radians.
		 */
		public static cos(x: number): number;
		

		/**
		 * Returns the cosine of an angle provided in radians.
		 * @return {number}
		 * @param {number} x - An angle, in radians.
		 */
		public cos(x: number): number;
		

		/**
		 * Returns Math.E raised to the power of a number.
		 * @return {number}
		 * @param {number} x - A number.
		 */
		public static exp(x: number): number;
		

		/**
		 * Returns Math.E raised to the power of a number.
		 * @return {number}
		 * @param {number} x - A number.
		 */
		public exp(x: number): number;
		

		/**
		 * Rounds a number down to the nearest integer.
		 * @return {number}
		 * @param {number} x - A number.
		 */
		public static floor(x: number): number;
		

		/**
		 * Rounds a number down to the nearest integer.
		 * @return {number}
		 * @param {number} x - A number.
		 */
		public floor(x: number): number;
		

		/**
		 * Returns the natural logarithm of a number.
		 * @return {number}
		 * @param {number} x - A number.
		 */
		public static log(x: number): number;
		

		/**
		 * Returns the natural logarithm of a number.
		 * @return {number}
		 * @param {number} x - A number.
		 */
		public log(x: number): number;
		

		/**
		 * Returns the largest of zero or more numbers.
		 * @return {number}
		 * @param {number} value1, value2, ... - Numbers.
		 */
		public static max(value1: number, value2: number, ...rest: number[]): number;
		

		/**
		 * Returns the largest of zero or more numbers.
		 * @return {number}
		 * @param {number} value1, value2, ... - Numbers.
		 */
		public max(value1: number, value2: number, ...rest: number[]): number;
		

		/**
		 * Returns the smallest of zero or more numbers.
		 * @return {number}
		 * @param {number} value1, value2, ... - Numbers.
		 */
		public static min(value1: number, value2: number, ...rest: number[]): number;
		

		/**
		 * Returns the smallest of zero or more numbers.
		 * @return {number}
		 * @param {number} value1, value2, ... - Numbers.
		 */
		public min(value1: number, value2: number, ...rest: number[]): number;
		

		/**
		 * Returns x raised to the power of y.
		 * @return {number}
		 * @param {number} x - Numbers.
		 * @param {number} y - 
		 */
		public static pow(x: number, y: number): number;
		

		/**
		 * Returns x raised to the power of y.
		 * @return {number}
		 * @param {number} x - Numbers.
		 * @param {number} y - 
		 */
		public pow(x: number, y: number): number;
		

		/**
		 * Returns a pseudo-random number from 0.0 up to but not including 1.0.
		 * @return {number}
		 */
		public static random(): number;
		

		/**
		 * Returns a pseudo-random number from 0.0 up to but not including 1.0.
		 * @return {number}
		 */
		public random(): number;
		

		/**
		 * Rounds a number to the nearest integer.
		 * @return {number}
		 * @param {number} x - A number.
		 */
		public static round(x: number): number;
		

		/**
		 * Rounds a number to the nearest integer.
		 * @return {number}
		 * @param {number} x - A number.
		 */
		public round(x: number): number;
		

		/**
		 * Returns the sine of an angle provided in radians.
		 * @return {number}
		 * @param {number} x - An angle, in radians.
		 */
		public static sin(x: number): number;
		

		/**
		 * Returns the sine of an angle provided in radians.
		 * @return {number}
		 * @param {number} x - An angle, in radians.
		 */
		public sin(x: number): number;
		

		/**
		 * Returns the square root of a number.
		 * @return {number}
		 * @param {number} x - A number.
		 */
		public static sqrt(x: number): number;
		

		/**
		 * Returns the square root of a number.
		 * @return {number}
		 * @param {number} x - A number.
		 */
		public sqrt(x: number): number;
		

		/**
		 * Returns the tangent of an angle provided in radians.
		 * @return {number}
		 * @param {number} x - An angle, in radians.
		 */
		public static tan(x: number): number;
		

		/**
		 * Returns the tangent of an angle provided in radians.
		 * @return {number}
		 * @param {number} x - An angle, in radians.
		 */
		public tan(x: number): number;
		

		/**
		 * @readonly
		 * Euler's constant and the base of natural logarithms.
		 */
		public static E: number;
		

		/**
		 * @readonly
		 * Euler's constant and the base of natural logarithms.
		 */
		public E: number;
		

		/**
		 * @readonly
		 * The natural logarithm of 10.
		 */
		public static LN10: number;
		

		/**
		 * @readonly
		 * The natural logarithm of 10.
		 */
		public LN10: number;
		

		/**
		 * @readonly
		 * The natural logarithm of 2.
		 */
		public static LN2: number;
		

		/**
		 * @readonly
		 * The natural logarithm of 2.
		 */
		public LN2: number;
		

		/**
		 * @readonly
		 * The base 2 logarithm of e.
		 */
		public static LOG2E: number;
		

		/**
		 * @readonly
		 * The base 2 logarithm of e.
		 */
		public LOG2E: number;
		

		/**
		 * @readonly
		 * The base 10 logarithm of e.
		 */
		public static LOG10E: number;
		

		/**
		 * @readonly
		 * The base 10 logarithm of e.
		 */
		public LOG10E: number;
		

		/**
		 * @readonly
		 * The ratio of the circumference of a circle to its diameter.
		 */
		public static PI: number;
		

		/**
		 * @readonly
		 * The ratio of the circumference of a circle to its diameter.
		 */
		public PI: number;
		

		/**
		 * @readonly
		 * The reciprocal of the square root of 1/2.
		 */
		public static SQRT1_2: number;
		

		/**
		 * @readonly
		 * The reciprocal of the square root of 1/2.
		 */
		public SQRT1_2: number;
		

		/**
		 * @readonly
		 * The square root of 2.
		 */
		public static SQRT2: number;
		

		/**
		 * @readonly
		 * The square root of 2.
		 */
		public SQRT2: number;
	}

	/**
	 * A date/time object.
	 */
	class Date {
		

		/**
		 * @constructor
		 * Returns a new Date object holding the current date and time.
		 * @return {Date}
		 * @param {number} year - The year expressed in four digits.
		 * @param {number} month - An integer value from 0 (Jan) to 11 (Dec)., optional default: 0  @default [0]
		 * @param {number} day - An integer value from 1 to 31, If this argument is not supplied, its value is set to 0., optional default: 0  @default [0]
		 * @param {number} hours - An integer value from 0 (midnight) to 23 (11 PM). If this argument is not supplied, its value is set to 0., optional default: 0  @default [0]
		 * @param {number} min - An integer value from 0 to 59. If this argument is not supplied, its value is set to 0., optional default: 0  @default [0]
		 * @param {number} sec - An Integer value from 0 to 59. If this argument is not supplied, its value is set to 0., optional default: 0  @default [0]
		 * @param {number} ms - An integer value from 0 to 999. If this argument is not supplied, its value is set to 0., optional default: 0  @default [0]
		 */
		public constructor(year: number, month?: number, day?: number, hours?: number, min?: number, sec?: number, ms?: number);
		

		/**
		 * Parses a string, returning a new Date object. The string should be similar to the string returned bt toString().
		 * @return {Date}
		 * @param {string} text - The string to parse.
		 */
		public static parse(text: string): Date;
		

		/**
		 * Parses a string, returning a new Date object. The string should be similar to the string returned bt toString().
		 * @return {Date}
		 * @param {string} text - The string to parse.
		 */
		public parse(text: string): Date;
		

		/**
		 * Returns the number of milliseconds between midnight January 1, 1970, UTC, and the specified time.
		 * @return {Date}
		 * @param {number} year - The year expressed in four digits, for example, 2001.
		 * @param {number} month - An integer value from 0 (Jan) to 11 (Dec)., optional default: 0  @default [0]
		 * @param {number} day - An integer value from 1 to 31, If this argument is not supplied, its value is set to 0., optional default: 0  @default [0]
		 * @param {number} hours - An integer value from 0 (midnight) to 23 (11 PM). If this argument is not supplied, its value is set to 0., optional default: 0  @default [0]
		 * @param {number} min - An integer value from 0 to 59. If this argument is not supplied, its value is set to 0., optional default: 0  @default [0]
		 * @param {number} sec - An Integer value from 0 to 59. If this argument is not supplied, its value is set to 0., optional default: 0  @default [0]
		 * @param {number} ms - An integer value from 0 to 999. If this argument is not supplied, its value is set to 0., optional default: 0  @default [0]
		 */
		public static UTC(year: number, month?: number, day?: number, hours?: number, min?: number, sec?: number, ms?: number): Date;
		

		/**
		 * Returns the number of milliseconds between midnight January 1, 1970, UTC, and the specified time.
		 * @return {Date}
		 * @param {number} year - The year expressed in four digits, for example, 2001.
		 * @param {number} month - An integer value from 0 (Jan) to 11 (Dec)., optional default: 0  @default [0]
		 * @param {number} day - An integer value from 1 to 31, If this argument is not supplied, its value is set to 0., optional default: 0  @default [0]
		 * @param {number} hours - An integer value from 0 (midnight) to 23 (11 PM). If this argument is not supplied, its value is set to 0., optional default: 0  @default [0]
		 * @param {number} min - An integer value from 0 to 59. If this argument is not supplied, its value is set to 0., optional default: 0  @default [0]
		 * @param {number} sec - An Integer value from 0 to 59. If this argument is not supplied, its value is set to 0., optional default: 0  @default [0]
		 * @param {number} ms - An integer value from 0 to 999. If this argument is not supplied, its value is set to 0., optional default: 0  @default [0]
		 */
		public UTC(year: number, month?: number, day?: number, hours?: number, min?: number, sec?: number, ms?: number): Date;
		

		/**
		 * Returns the day of the month of the specified Date object in local time.
		 * @return {number}
		 */
		public getDate(): number;
		

		/**
		 * Returns the day of the week for the specified Date object in local time.
		 * @return {number}
		 */
		public getDay(): number;
		

		/**
		 * Returns the year of the specified Date object, as a difference from 1900, in local time.
		 * @return {number}
		 */
		public getYear(): number;
		

		/**
		 * Returns the four digit year of the specified Date object in local time.
		 * @return {number}
		 */
		public getFullYear(): number;
		

		/**
		 * Returns the hour of the specified Date object in local time.
		 * @return {number}
		 */
		public getHours(): number;
		

		/**
		 * Returns the milliseconds of the specified Date object in local time.
		 * @return {number}
		 */
		public getMilliseconds(): number;
		

		/**
		 * Returns the minutes of the specified Date object in local time.
		 * @return {number}
		 */
		public getMinutes(): number;
		

		/**
		 * Returns the month of the specified Date object in local time.
		 * @return {number}
		 */
		public getMonth(): number;
		

		/**
		 * Returns the seconds of the specified Date object in local time.
		 * @return {number}
		 */
		public getSeconds(): number;
		

		/**
		 * Returns the number of milliseconds since midnight January 1,1970 UTC for the specified Date object.
		 * @return {number}
		 */
		public getTime(): number;
		

		/**
		 * Returns the difference in minutes between the computer's local time and UTC.
		 * @return {number}
		 */
		public getTimezoneOffset(): number;
		

		/**
		 * Returns the day of the month of the specified Date object according to UTC.
		 * @return {number}
		 */
		public getUTCDate(): number;
		

		/**
		 * Returns the day of the week for the specified Date object according to UTC.
		 * @return {number}
		 */
		public getUTCDay(): number;
		

		/**
		 * Returns the four digit year of the specified Date object according to UTC.
		 * @return {number}
		 */
		public getUTCFullYear(): number;
		

		/**
		 * Returns the hour of the specified Date object according to UTC.
		 * @return {number}
		 */
		public getUTCHours(): number;
		

		/**
		 * Returns the milliseconds of the specified Date object according to UTC.
		 * @return {number}
		 */
		public getUTCMilliseconds(): number;
		

		/**
		 * Returns the minutes of the specified Date object according to UTC.
		 * @return {number}
		 */
		public getUTCMinutes(): number;
		

		/**
		 * Returns the month of the specified Date object according to UTC.
		 * @return {number}
		 */
		public getUTCMonth(): number;
		

		/**
		 * Returns the seconds of the specified Date object according to UTC.
		 * @return {number}
		 */
		public getUTCSeconds(): number;
		

		/**
		 * Sets the day of the month of a specified Date object according to local time.
		 * @return {number}
		 * @param {number} date - An integer from 1 to 31 indicating the day of the month.
		 */
		public setDate(date: number): number;
		

		/**
		 * Sets the year of a specified Date object according to local time.
		 * @return {number}
		 * @param {number} year - A four-digit integer value indicating the year to set.
		 */
		public setFullYear(year: number): number;
		

		/**
		 * Sets the hours of a specified Date object according to local time.
		 * @return {number}
		 * @param {number} hour - An integer value from 0 (midnight) to 23 (11 PM).
		 */
		public setHours(hour: number): number;
		

		/**
		 * Sets the milliseconds of a specified Date object according to local time.
		 * @return {number}
		 * @param {number} ms - An integer value from 0 to 999.
		 */
		public setMilliseconds(ms: number): number;
		

		/**
		 * Sets the minutes of a specified Date object according to local time.
		 * @return {number}
		 * @param {number} minutes - An integer value from 0 to 59.
		 */
		public setMinutes(minutes: number): number;
		

		/**
		 * Sets the seconds of a specified Date object according to local time.
		 * @return {number}
		 * @param {number} seconds - An integer value from 0 to 59.
		 */
		public setSeconds(seconds: number): number;
		

		/**
		 * Sets the month of a specified Date object according to local time.
		 * @return {number}
		 * @param {number} month - An integer value from 0 (Jan) to 11 (Dec).
		 */
		public setMonth(month: number): number;
		

		/**
		 * Sets the date of a specified Date object according to universal time.
		 * @return {number}
		 * @param {number} date - An integer from 1 to 31 indicating the day of the month.
		 */
		public setUTCDate(date: number): number;
		

		/**
		 * Sets the year of a specified Date object according to UTC, can also set the month and date.
		 * @return {number}
		 * @param {number} year - The year expressed in four digits.
		 */
		public setUTCFullYear(year: number): number;
		

		/**
		 * Sets the hours of a specified Date object according to UTC.
		 * @return {number}
		 * @param {number} hours - An integer value from 0 (midnight) to 23 (11 PM) indicating the hour to be set.
		 */
		public setUTCHours(hours: number): number;
		

		/**
		 * Sets the milliseconds of a specified Date object according to UTC.
		 * @return {number}
		 * @param {number} ms - An integer value in the range of 0 to 999 indicating the number of milliseconds to set.
		 */
		public setUTCMilliseconds(ms: number): number;
		

		/**
		 * Sets the minutes of a specified Date object according to UTC.
		 * @return {number}
		 * @param {number} min - An integer value in the range 0 to 59 indicating the number of minutes to be set.
		 */
		public setUTCMinutes(min: number): number;
		

		/**
		 * Sets the seconds of a specified Date object according to UTC.
		 * @return {number}
		 * @param {number} sec - An integer value in the range 0 to 59 indicating the number of seconds to set.
		 */
		public setUTCSeconds(sec: number): number;
		

		/**
		 * Sets the month of a specified Date object according to UTC.
		 * @return {number}
		 * @param {number} month - An integer value in the range 0 (Jan.) to 11 (Dec.) indicating the month to set.
		 */
		public setUTCMonth(month: number): number;
		

		/**
		 * Sets the date of a specified Date object in milliseconds since midnight, January 1, 1970.
		 * @return {number}
		 * @param {number} ms - An integer indicating the number of milliseconds between the date set and midnight, January 1, 1970.
		 */
		public setTime(ms: number): number;
		

		/**
		 * Sets the year of a specified Date object according to local time, as a difference between the current year and 1900.
		 * @return {number}
		 * @param {number} year - An integer value indicating the year to set.
		 */
		public setYear(year: number): number;
		

		/**
		 * @return {string}
		 */
		public toDateString(): string;
		

		/**
		 * @return {string}
		 */
		public toTimeString(): string;
		

		/**
		 * @return {string}
		 */
		public toLocaleString(): string;
		

		/**
		 * @return {string}
		 */
		public toLocaleDateString(): string;
		

		/**
		 * @return {string}
		 */
		public toLocaleTimeString(): string;
		

		/**
		 * @return {string}
		 */
		public toGMTString(): string;
		

		/**
		 * @return {string}
		 */
		public toUTCString(): string;
		

		/**
		 * Returns a string value representing the date and time stored in the Date object in human readable format.
		 * @return {string}
		 */
		public toString(): string;
		

		/**
		 * The valueOf() method returns the number of milliseconds that have passed since midnight, Returns an integer.
		 * @return {number}
		 */
		public valueOf(): number;
		

		/**
		 * Creates a string representation of this object that can be fed back to eval() to re-create an object. Works only with built-in classes.
		 * @return {string}
		 */
		public toSource(): string;
	}

	/**
	 * Wraps a built-in or JavaScript function.
	 */
	class Function {
		

		/**
		 * @constructor
		 * @return {Function}
		 * @param {string} args - The list of formal arguments, separated by commas.
		 * @param {string} body - The body of the function to create.
		 */
		public constructor(args: string, body: string);
		

		/**
		 * Apply a this object and an argument list to a function.
		 * @return {any}
		 * @param {any} thisObj - 
		 * @param {any[]} args - An array of arguments.
		 */
		public apply(thisObj: any, args: any[]): any;
		

		/**
		 * Apply a this object and arguments to a function.
		 * @return {any}
		 * @param {any} thisObj - 
		 * @param {any} argument - 
		 */
		public call(thisObj: any, argument: any): any;
		

		/**
		 * Creates a string representation of this object that can be fed back to eval() to re-create an object. Works only with JavaScript functions.
		 * @return {string}
		 */
		public toSource(): string;
		

		/**
		 * Returns the function definition as a string.
		 * @return {string}
		 */
		public toString(): string;
		

		/**
		 * The function arguments, packed into an array.
		 */
		public arguments: any;
		

		/**
		 * @readonly
		 * The number of formal arguments.
		 */
		public length: number;
		

		/**
		 * @readonly
		 * The number of formal arguments.
		 */
		public arity: number;
		

		/**
		 * @readonly
		 * The function name.
		 */
		public name: string;
	}

	/**
	 * The global methods and properties for ExtendScript.
	 */
	class global {
		

		/**
		 * Encodes a string after RFC2396.
		 * @return {string}
		 * @param {string} text - The text to encode.
		 */
		public encodeURI(text: string): string;
		

		/**
		 * Encodes a string after RFC2396.
		 * @return {string}
		 * @param {string} text - The text to encode.
		 */
		public encodeURIComponent(text: string): string;
		

		/**
		 * Decodes a string created with encodeURI().
		 * @return {string}
		 * @param {string} uri - The text to decode.
		 */
		public decodeURI(uri: string): string;
		

		/**
		 * Decodes a string created with encodeURIComponent().
		 * @return {string}
		 * @param {string} uri - The text to decode.
		 */
		public decodeURIComponent(uri: string): string;
		

		/**
		 * Creates a URL-encoded string from aString.
		 * @return {string}
		 * @param {string} aString - The string to be encoded.
		 */
		public escape(aString: string): string;
		

		/**
		 * Evaluates its argument as a JavaScript script, and returns the result of evaluation.
		 * @return {any}
		 * @param {string} stringExpression - The string to evaluate.
		 */
		public eval(stringExpression: string): any;
		

		/**
		 * Creates a source code representation of the supplied argument, and returns it as a string.
		 * @return {string}
		 * @param {any} what - The object to uneval.
		 */
		public uneval(what: any): string;
		

		/**
		 * Evaluates an expression and reports whether the result is a finite number.
		 * @return {boolean}
		 * @param {number} expression - Any valid JavaScript expression.
		 */
		public isFinite(expression: number): boolean;
		

		/**
		 * Evaluates an expression and reports whether the result is "Not-a-Number" (NaN).
		 * @return {boolean}
		 * @param {number} expression - Any valid JavaScript expression.
		 */
		public isNaN(expression: number): boolean;
		

		/**
		 * Extracts an integer from a string.
		 * @return {number}
		 * @param {string} text - The string from which to extract an integer.
		 * @param {number} base - The base of the string to parse (from base 2 to base 36).
		 */
		public parseInt(text: string, base?: number): number;
		

		/**
		 * Extracts a floating-point number from a string.
		 * @return {number}
		 * @param {string} text - The string from which to extract a floating point number.
		 */
		public parseFloat(text: string): number;
		

		/**
		 * Translates URL-encoded string into a regular string, and returns that string.
		 * @return {string}
		 * @param {string} stringExpression - The URL-encoded string to convert.
		 */
		public unescape(stringExpression: string): string;
		

		/**
		 * Localizes a ZString-encoded string and merges additional arguments into the string.
		 * @return {string}
		 * @param {string} what - The string to localize. A ZString-encoded string that can contain placeholder for additional arguments in the form %1 to %n.
		 * @param {any} argument - Optional argument(s) to be merged into the string. There may be more than one argument.
		 */
		public localize(what: string, argument?: any): string;
		

		/**
		 * Returns true if the supplied string is a valid XML name.
		 * @return {boolean}
		 * @param {string} name - The XML name to test.
		 */
		public isXMLName(name: string): boolean;
		

		/**
		 * Defines the default XML namespace.
		 * @return {void}
		 * @param {Namespace} namespace - The namespace to use.
		 */
		public setDefaultXMLNamespace(namespace: Namespace): void;
		

		/**
		 * Displays an alert box
		 * @return {void}
		 * @param {string} message - The text to display
		 * @param {string} title - The title of the alert; ignored on the Macintosh
		 * @param {boolean} errorIcon - Display an Error icon; ignored on the Macintosh, default: false  @default [false]
		 */
		public alert(message: string, title: string, errorIcon: boolean): void;
		

		/**
		 * Displays an alert box with Yes and No buttons; returns true for Yes
		 * @return {boolean}
		 * @param {string} message - The text to display
		 * @param {boolean} noAsDefault - Set to true to set the No button as the default button, default: false  @default [false]
		 * @param {string} title - The title of the alert; ignored on the Macintosh
		 */
		public confirm(message: string, noAsDefault: boolean, title?: string): boolean;
		

		/**
		 * Displays a dialog allowing the user to enter text
		 * @return {string}
		 * @param {string} prompt - The text to display
		 * @param {string} defaultValue - The default text to preset the edit field with
		 * @param {string} title - The title of the dialog;
		 */
		public prompt(prompt: string, defaultValue?: string, title?: string): string;
		

		/**
		 * The NaN global property is a predefined variable with the value NaN (Not-a-Number), as specified by the IEEE-754 standard.
		 */
		public NaN: number;
		

		/**
		 * The Infinity global property is a predefined variable with the value for infinity.
		 */
		public Infinity: number;
	}

	/**
	 * A character string. Each character is adressable by index.
	 */
	class String {
		

		/**
		 * @constructor
		 * Returns a string representation of the value given as an argument.
		 * @return {string}
		 * @param {any} value - A number, variable, or object to convert to a string.
		 */
		public constructor(value: any);
		

		/**
		 * Returns a string created by concatenation one or more characters specified as ASCII values.
		 * @return {string}
		 * @param {number} value1 - One or more ASCII values.
		 */
		public static fromCharCode(value1: number): string;
		

		/**
		 * Returns a string created by concatenation one or more characters specified as ASCII values.
		 * @return {string}
		 * @param {number} value1 - One or more ASCII values.
		 */
		public fromCharCode(value1: number): string;
		

		/**
		 * Returns itself.
		 * @return {string}
		 */
		public toString(): string;
		

		/**
		 * Creates a string representation of this object that can be fed back to eval() to re-create an object. Works only with built-in classes.
		 * @return {string}
		 */
		public toSource(): string;
		

		/**
		 * Returns itself.
		 * @return {string}
		 */
		public valueOf(): string;
		

		/**
		 * Returns the character at the specified index.
		 * @return {string}
		 * @param {number} index - An integer between 0 and string.length -1, specifying the character to return.
		 */
		public charAt(index: number): string;
		

		/**
		 * Returns the Unicode value of the character at the given index.
		 * @return {number}
		 * @param {number} index - An integer between 0 and string.length -1, specifying the character.
		 */
		public charCodeAt(index: number): number;
		

		/**
		 * If necessary, converts the one or more given values to strings.
		 * @return {string}
		 * @param {string} value - The values to be concatenated with the given string.
		 */
		public concat(value: string): string;
		

		/**
		 * Returns the index within the string of the first occurrence of the specified string, starting the search at fromIndex if provided.
		 * @return {number}
		 * @param {string} searchValue - The string for which to search.
		 * @param {number} offset - The starting offset of the search.
		 */
		public indexOf(searchValue: string, offset?: number): number;
		

		/**
		 * Returns the index within the string of the last occurrence of the specified value.
		 * @return {number}
		 * @param {string} searchValue - The string for which to search.
		 * @param {number} offset - The starting offset of the search.
		 */
		public lastIndexOf(searchValue: string, offset?: number): number;
		

		/**
		 * Extracts a substring of the given string and returns it as a new string.
		 * @return {string}
		 * @param {number} startSlice - The index at which to begin extraction.
		 * @param {number} endSlice - The index at which to end extraction.
		 */
		public slice(startSlice: number, endSlice?: number): string;
		

		/**
		 * Returns a new string which contains all the characters of the original string converted to lowercase.
		 * @return {string}
		 */
		public toLowerCase(): string;
		

		/**
		 * Returns a new string which contains all the characters of the original string converted to uppercase.
		 * @return {string}
		 */
		public toUpperCase(): string;
		

		/**
		 * Returns a new string which contains all the characters of the original string converted to lowercase (localized).
		 * @return {string}
		 */
		public toLocaleLowerCase(): string;
		

		/**
		 * Returns a new string which contains all the characters of the original string converted to uppercase (localized).
		 * @return {string}
		 */
		public toLocaleUpperCase(): string;
		

		/**
		 * Performs a localized comparison of two strings.
		 * @return {number}
		 * @param {string} what - The string to compare with.
		 */
		public localeCompare(what: string): number;
		

		/**
		 * Matches a string against a regular expression.
		 * @return {any[]}
		 * @param {RegExp} regexp - The regular expression to use.
		 */
		public match(regexp: RegExp): any[];
		

		/**
		 * @return {string}
		 * @param {any} what - 
		 * @param {string} withValue - 
		 */
		public replace(what: any, withValue: string): string;
		

		/**
		 * @return {number}
		 * @param {RegExp} search - 
		 */
		public search(search: RegExp): number;
		

		/**
		 * Splits a string into a group of substrings, places those strings in an array, and returns the array.
		 * @return {string}
		 * @param {string} delimiter - Specifies the string to use for delimiting.
		 * @param {number} limit - 
		 */
		public split(delimiter: string, limit: number): string;
		

		/**
		 * Returns a string containing the characters beginning at the specified index, start, through the specified number of characters.
		 * @return {string}
		 * @param {number} start - Location at which to begin extracting characters.
		 * @param {number} length - (OptIonal) The number of characters to extract.
		 */
		public substr(start: number, length: number): string;
		

		/**
		 * Returns a substring of the given string by extracting characters from indexA up to but not including indexB.
		 * @return {string}
		 * @param {number} indexA - The index to begin extracting.
		 * @param {number} indexB - (Optional) The index at which to end extraction.
		 */
		public substring(indexA: number, indexB: number): string;
		

		/**
		 * Returns a string consisting of this string enclosed in a <a> tag.
		 * @return {string}
		 * @param {string} name - The text to be stored in the anchors' name attribute.
		 */
		public anchor(name: string): string;
		

		/**
		 * Returns a string consisting of this string enclosed in a <big> tag.
		 * @return {string}
		 */
		public big(): string;
		

		/**
		 * Returns a string consisting of this string enclosed in a <blink> tag.
		 * @return {string}
		 */
		public blink(): string;
		

		/**
		 * Returns a string consisting of this string enclosed in a <b> tag.
		 * @return {string}
		 */
		public bold(): string;
		

		/**
		 * Returns a string consisting of this string enclosed in a <tt> tag.
		 * @return {string}
		 */
		public fixed(): string;
		

		/**
		 * Returns a string consisting of this string enclosed in a <font> tag.
		 * @return {string}
		 * @param {string} color - The value to be stored in the tag's color attribute.
		 */
		public fontcolor(color: string): string;
		

		/**
		 * Returns a string consisting of this string enclosed in a <font> tag.
		 * @return {string}
		 * @param {number} size - The value to be stored in the tag's size attribute.
		 */
		public fontsize(size: number): string;
		

		/**
		 * Returns a string consisting of this string enclosed in a <i> tag.
		 * @return {string}
		 */
		public italics(): string;
		

		/**
		 * Returns a string consisting of this string enclosed in a <a> tag.
		 * @return {string}
		 * @param {string} href - The value to be stored in the tag's href attribute.
		 */
		public link(href: string): string;
		

		/**
		 * Returns a string consisting of this string enclosed in a <small> tag.
		 * @return {string}
		 */
		public small(): string;
		

		/**
		 * Returns a string consisting of this string enclosed in a <strike> tag.
		 * @return {string}
		 */
		public strike(): string;
		

		/**
		 * Returns a string consisting of this string enclosed in a <sub> tag.
		 * @return {string}
		 */
		public sub(): string;
		

		/**
		 * Returns a string consisting of this string enclosed in a <sup> tag.
		 * @return {string}
		 */
		public sup(): string;
		

		/**
		 * @readonly
		 * The length of the string.
		 */
		public length: number;
	}

	/**
	 * Wraps a numeric value.
	 */
	class Number {
		

		/**
		 * @constructor
		 * Returns a new Number object set to the value of the argument converted to a number.
		 * @return {number}
		 * @param {any} value - The value of the object being created.
		 */
		public constructor(value: any);
		

		/**
		 * @readonly
		 * A constant representing the smallest representable number.
		 */
		public static MIN_VALUE: number;
		

		/**
		 * @readonly
		 * A constant representing the smallest representable number.
		 */
		public MIN_VALUE: number;
		

		/**
		 * @readonly
		 * A constant representing the largest representable number.
		 */
		public static MAX_VALUE: number;
		

		/**
		 * @readonly
		 * A constant representing the largest representable number.
		 */
		public MAX_VALUE: number;
		

		/**
		 * @readonly
		 * A constant representing the special "Not a Number" value.
		 */
		public static NaN: number;
		

		/**
		 * @readonly
		 * A constant representing the special "Not a Number" value.
		 */
		public NaN: number;
		

		/**
		 * @readonly
		 * A constant representing negative infinity.
		 */
		public static NEGATIVE_INFINITY: number;
		

		/**
		 * @readonly
		 * A constant representing negative infinity.
		 */
		public NEGATIVE_INFINITY: number;
		

		/**
		 * @readonly
		 * A constant representing positive infinity.
		 */
		public static POSITIVE_INFINITY: number;
		

		/**
		 * @readonly
		 * A constant representing positive infinity.
		 */
		public POSITIVE_INFINITY: number;
		

		/**
		 * Creates a string representation of this object that can be fed back to eval() to re-create an object. Works only with built-in classes.
		 * @return {number}
		 */
		public toSource(): number;
		

		/**
		 * Returns the value of a Number object converted to a string.
		 * @return {number}
		 * @param {number} radix - The optional conversion radix.
		 */
		public toString(radix?: number): number;
		

		/**
		 * Returns the value of a Number object converted to a string, using localized conventions.
		 * @return {number}
		 */
		public toLocaleString(): number;
		

		/**
		 * Converts the Number object to a string with fixed decimals.
		 * @return {number}
		 * @param {number} decimals - The number of decimals.
		 */
		public toFixed(decimals: number): number;
		

		/**
		 * Converts the Number object to a string in scientific notation.
		 * @return {number}
		 * @param {number} decimals - The number of decimals.
		 */
		public toExponential(decimals: number): number;
		

		/**
		 * Converts the Number object to a string in either scientific or fixed notation, epending on its value.
		 * @return {number}
		 * @param {number} decimals - The number of decimals.
		 */
		public toPrecision(decimals: number): number;
		

		/**
		 * Returns the value of a Number object as a primitive number.
		 * @return {number}
		 */
		public valueOf(): number;
	}

	/**
	 * Wraps a Boolean value.
	 */
	class Boolean {
		

		/**
		 * @constructor
		 * Creates and returns a new Boolean object set to the value of the argument converted to a boolean.
		 * @return {boolean}
		 * @param {any} value - The value to be converted to a Boolean.
		 */
		public constructor(value: any);
		

		/**
		 * Creates a string representation of this object that can be fed back to eval() to re-create an object. Works only with built-in classes.
		 * @return {string}
		 */
		public toSource(): string;
		

		/**
		 * Returns the string representation of the value of bool.
		 * @return {string}
		 */
		public toString(): string;
		

		/**
		 * Returns the primitive value of bool.
		 * @return {boolean}
		 */
		public valueOf(): boolean;
	}

	/**
	 * Wraps a regular expression.
	 */
	class RegExp {
		

		/**
		 * @constructor
		 * Creates and returns a new RegExp object set to the value of the argument converted to a regular expression.
		 * @return {RegExp}
		 * @param {string} pattern - The pattern to convert.
		 * @param {string} flags - Flags that control how the conversion is performed.
		 */
		public constructor(pattern: string, flags?: string);
		

		/**
		 * @readonly
		 * The matched subexpression #1.
		 */
		public static $1: string;
		

		/**
		 * @readonly
		 * The matched subexpression #1.
		 */
		public $1: string;
		

		/**
		 * @readonly
		 * The matched subexpression #2.
		 */
		public static $2: string;
		

		/**
		 * @readonly
		 * The matched subexpression #2.
		 */
		public $2: string;
		

		/**
		 * @readonly
		 * The matched subexpression #3.
		 */
		public static $3: string;
		

		/**
		 * @readonly
		 * The matched subexpression #3.
		 */
		public $3: string;
		

		/**
		 * @readonly
		 * The matched subexpression #4.
		 */
		public static $4: string;
		

		/**
		 * @readonly
		 * The matched subexpression #4.
		 */
		public $4: string;
		

		/**
		 * @readonly
		 * The matched subexpression #5.
		 */
		public static $5: string;
		

		/**
		 * @readonly
		 * The matched subexpression #5.
		 */
		public $5: string;
		

		/**
		 * @readonly
		 * The matched subexpression #6.
		 */
		public static $6: string;
		

		/**
		 * @readonly
		 * The matched subexpression #6.
		 */
		public $6: string;
		

		/**
		 * @readonly
		 * The matched subexpression #7.
		 */
		public static $7: string;
		

		/**
		 * @readonly
		 * The matched subexpression #7.
		 */
		public $7: string;
		

		/**
		 * @readonly
		 * The matched subexpression #8.
		 */
		public static $8: string;
		

		/**
		 * @readonly
		 * The matched subexpression #8.
		 */
		public $8: string;
		

		/**
		 * @readonly
		 * The matched subexpression #9.
		 */
		public static $9: string;
		

		/**
		 * @readonly
		 * The matched subexpression #9.
		 */
		public $9: string;
		

		/**
		 * @readonly
		 * The last match.
		 */
		public static lastMatch: string;
		

		/**
		 * @readonly
		 * The last match.
		 */
		public lastMatch: string;
		

		/**
		 * @readonly
		 * The value of the last matched subexpression.
		 */
		public static lastParen: string;
		

		/**
		 * @readonly
		 * The value of the last matched subexpression.
		 */
		public lastParen: string;
		

		/**
		 * @readonly
		 * The string before the match.
		 */
		public static leftContext: string;
		

		/**
		 * @readonly
		 * The string before the match.
		 */
		public leftContext: string;
		

		/**
		 * @readonly
		 * The string after the match.
		 */
		public static rightContext: string;
		

		/**
		 * @readonly
		 * The string after the match.
		 */
		public rightContext: string;
		

		/**
		 * Indicates whether the match is a global match.
		 */
		public static global: boolean;
		

		/**
		 * Indicates whether the match is a global match.
		 */
		public global: boolean;
		

		/**
		 * Indicates whether the match is not case sensitive.
		 */
		public static ignoreCase: boolean;
		

		/**
		 * Indicates whether the match is not case sensitive.
		 */
		public ignoreCase: boolean;
		

		/**
		 * Indicates whether the match matches multiple lines.
		 */
		public static multiline: boolean;
		

		/**
		 * Indicates whether the match matches multiple lines.
		 */
		public multiline: boolean;
		

		/**
		 * The original input string.
		 */
		public static input: string;
		

		/**
		 * The original input string.
		 */
		public input: string;
		

		/**
		 * Converts this RegExp object to a string.
		 * @return {string}
		 */
		public toString(): string;
		

		/**
		 * Compiles a string to a regular expression. Returns true if the compilation was successful.
		 * @return {boolean}
		 * @param {string} pattern - The pattern to compile.
		 */
		public compile(pattern: string): boolean;
		

		/**
		 * Execute a regular expression.
		 * @return {any[]}
		 * @param {string} text - The string to match.
		 */
		public exec(text: string): any[];
		

		/**
		 * Execute a regular expression, and return true if there is a match.
		 * @return {boolean}
		 * @param {string} text - The string to match.
		 */
		public test(text: string): boolean;
	}

	/**
	 * Wraps a runtime error.
	 */
	class Error {
		

		/**
		 * @constructor
		 * Creates a new Error object.
		 * @return {Error}
		 * @param {string} msg - The error message.
		 * @param {string} file - The name of the file.
		 * @param {number} line - The line number.
		 */
		public constructor(msg: string, file?: string, line?: number);
		

		/**
		 * Convert this object to a string.
		 * @return {string}
		 */
		public toString(): string;
		

		/**
		 * Creates a string representation of this object that can be fed back to eval() to re-create an object. Works only with built-in classes.
		 * @return {string}
		 */
		public toSource(): string;
		

		/**
		 * The error message.
		 */
		public description: string;
	}

	/**
	 * Represents a file in the local file system in a platform-independent manner.
	 */
	class File {
		

		/**
		 * @constructor
		 * Creates and returns a new File object referring to a given file system location.
		 * @return {javascript.File}
		 * @param {string} path - The full or partial path name of the file,  in platform-specific or URI format.
		 */
		public constructor(path?: string);
		

		/**
		 * Encodes a string as required by RFC 2396, and returns the encoded string.
		 * @return {string}
		 * @param {string} name - The string to encode.
		 */
		public static encode(name: string): string;
		

		/**
		 * Encodes a string as required by RFC 2396, and returns the encoded string.
		 * @return {string}
		 * @param {string} name - The string to encode.
		 */
		public encode(name: string): string;
		

		/**
		 * Decodes a UTF-8 encoded string as required by RFC 2396, and returns the decoded string.
		 * @return {string}
		 * @param {string} uri - The UTF-8 encoded string to decode.
		 */
		public static decode(uri: string): string;
		

		/**
		 * Decodes a UTF-8 encoded string as required by RFC 2396, and returns the decoded string.
		 * @return {string}
		 * @param {string} uri - The UTF-8 encoded string to decode.
		 */
		public decode(uri: string): string;
		

		/**
		 * Reports whether a given encoding is available.
		 * @return {boolean}
		 * @param {string} name - The encoding name.
		 */
		public static isEncodingAvailable(name: string): boolean;
		

		/**
		 * Reports whether a given encoding is available.
		 * @return {boolean}
		 * @param {string} name - The encoding name.
		 */
		public isEncodingAvailable(name: string): boolean;
		

		/**
		 * Opens a dialog so the user can select one or more files to open.
		 * @return {javascript.File}
		 * @param {string} prompt - The prompt text, displayed if the dialog allows a prompt.
		 * @param {any} filter - A filter that limits the types of files displayed in the dialog., optional default: null  @default [null]
		 * @param {boolean} multiSelect - When true, the user can select multiple files and the return value is an array., optional default: false  @default [false]
		 */
		public static openDialog(prompt: string, filter?: any, multiSelect?: boolean): javascript.File;
		

		/**
		 * Opens a dialog so the user can select one or more files to open.
		 * @return {javascript.File}
		 * @param {string} prompt - The prompt text, displayed if the dialog allows a prompt.
		 * @param {any} filter - A filter that limits the types of files displayed in the dialog., optional default: null  @default [null]
		 * @param {boolean} multiSelect - When true, the user can select multiple files and the return value is an array., optional default: false  @default [false]
		 */
		public openDialog(prompt: string, filter?: any, multiSelect?: boolean): javascript.File;
		

		/**
		 * Opens a dialog so the user can select a file name to save to.
		 * @return {javascript.File}
		 * @param {string} prompt - The prompt text, displayed if the dialog allows a prompt.
		 * @param {any} filter - In Windows only, a filter that limits the types of files displayed in the dialog., optional default: null  @default [null]
		 */
		public static saveDialog(prompt: string, filter?: any): javascript.File;
		

		/**
		 * Opens a dialog so the user can select a file name to save to.
		 * @return {javascript.File}
		 * @param {string} prompt - The prompt text, displayed if the dialog allows a prompt.
		 * @param {any} filter - In Windows only, a filter that limits the types of files displayed in the dialog., optional default: null  @default [null]
		 */
		public saveDialog(prompt: string, filter?: any): javascript.File;
		

		/**
		 * @readonly
		 * The name of the file system.
		 */
		public static fs: string;
		

		/**
		 * @readonly
		 * The name of the file system.
		 */
		public fs: string;
		

		/**
		 * Attempts to resolve the file-system alias or shortcut that this object refers to.
		 * @return {javascript.File}
		 */
		public resolve(): javascript.File;
		

		/**
		 * Renames the associated file.
		 * @return {boolean}
		 * @param {string} newName - The new file name, with no path information.
		 */
		public rename(newName: string): boolean;
		

		/**
		 * Deletes the file associated with this object from disk immediately, without moving it to the system trash.
		 * @return {boolean}
		 */
		public remove(): boolean;
		

		/**
		 * Changes the path specification of the referenced file.
		 * @return {boolean}
		 * @param {string} path - A string containing the new path, absolute or relative to the current folder.
		 */
		public changePath(path: string): boolean;
		

		/**
		 * Retrieves and returns the path for this file, relative to the specified base path, in URI notation.
		 * @return {string}
		 * @param {string} basePath - A base path in URI notation.
		 */
		public getRelativeURI(basePath: string): string;
		

		/**
		 * Executes or opens this file using the appropriate application, as if it had been double-clicked in a file browser.
		 * @return {boolean}
		 */
		public execute(): boolean;
		

		/**
		 * Opens the built-in platform-specific file-browsing dialog, in which the user can select an existing file or files, and creates new File objects to represent the selected files.
		 * @return {javascript.File}
		 * @param {string} prompt - A string containing the prompt text, if the dialog allows a prompt.
		 * @param {any} filter - A filter that limits the types of files displayed in the dialog., optional default: null  @default [null]
		 * @param {boolean} multiSelect - When true, the user can select multiple files and the return value is an array., optional default: false  @default [false]
		 */
		public openDlg(prompt: string, filter?: any, multiSelect?: boolean): javascript.File;
		

		/**
		 * Opens the built-in platform-specific file-browsing dialog, in which the user can select an existing file location to which to save information, and creates a new File object to represent the selected file.
		 * @return {javascript.File}
		 * @param {string} prompt - A string containing the prompt text, if the dialog allows a prompt.
		 * @param {any} filter - In Windows only, a filter that limits the types of files displayed in the dialog., optional default: null  @default [null]
		 */
		public saveDlg(prompt: string, filter?: any): javascript.File;
		

		/**
		 * Converts this object to a string.
		 * @return {string}
		 */
		public toString(): string;
		

		/**
		 * Creates and returns a serialized string representation of this object.
		 * @return {string}
		 */
		public toSource(): string;
		

		/**
		 * Makes this file a file-system alias or shortcut to the specified file.
		 * @return {void}
		 * @param {string} path - A string containing the path of the target file.
		 */
		public createAlias(path: string): void;
		

		/**
		 * Opens the referenced file for subsequent read/write operations. The method resolves any aliases to find the file.
		 * @return {boolean}
		 * @param {string} mode - The read-write mode, a single-character string.
		 * @param {string} type - In Mac OS, the type of a newly created file, a 4-character string. Ignored in Windows and UNIX.
		 * @param {string} creator - In Mac OS, the creator of a newly created file, a 4-character string. Ignored in Windows and UNIX.
		 */
		public open(mode: string, type?: string, creator?: string): boolean;
		

		/**
		 * Closes this open file.
		 * @return {boolean}
		 */
		public close(): boolean;
		

		/**
		 * Reads the contents of the file, starting at the current position.
		 * @return {string}
		 * @param {number} chars - An integer specifying the number of characters to read.
		 */
		public read(chars?: number): string;
		

		/**
		 * Reads a single text character from the file at the current position.
		 * @return {string}
		 */
		public readch(): string;
		

		/**
		 * Reads a single line of text from the file at the current position.
		 * @return {string}
		 */
		public readln(): string;
		

		/**
		 * Writes the specified text to the file at the current position.
		 * @return {boolean}
		 * @param {string} text - A text string to be written.
		 */
		public write(text: string): boolean;
		

		/**
		 * Writes a string to the file at the current position and appends a line-feed sequence.
		 * @return {boolean}
		 * @param {string} text - A text string to be written.
		 */
		public writeln(text: string): boolean;
		

		/**
		 * Seeks to a given position in the file.
		 * @return {boolean}
		 * @param {number} pos - The new current position in the file as an offset in bytes from the start, current position, or end, depending on the mode.
		 * @param {number} mode - The seek mode., optional default: 0  @default [0]
		 */
		public seek(pos: number, mode?: number): boolean;
		

		/**
		 * Retrieves the current position as a byte offset from the start of the file.
		 * @return {number}
		 */
		public tell(): number;
		

		/**
		 * Copies this object’s referenced file to the specified target location.
		 * @return {boolean}
		 * @param {string} target - A string with the URI path to the target location, or a File object that references the target location.
		 */
		public copy(target: string): boolean;
		

		/**
		 * @readonly
		 * If true, the object refers to a file system alias or shortcut.
		 */
		public alias: boolean;
		

		/**
		 * @readonly
		 * The creation date of the referenced file, or null if the object does not refer to a file on disk.
		 */
		public created: Date;
		

		/**
		 * A string containing a message describing the most recent file system error.
		 */
		public error: string;
		

		/**
		 * @readonly
		 * If true, this object refers to a file or file-system alias that actually exists in the file system.
		 */
		public exists: boolean;
		

		/**
		 * @readonly
		 * The platform-specific full path name for the referenced file.
		 */
		public fsName: string;
		

		/**
		 * @readonly
		 * The full path name for the referenced file in URI notation.
		 */
		public fullName: string;
		

		/**
		 * @readonly
		 * The full path name for the referenced file in URI notation.
		 */
		public absoluteURI: string;
		

		/**
		 * @readonly
		 * The path name for the object in URI notation, relative to the current folder.
		 */
		public relativeURI: string;
		

		/**
		 * @readonly
		 * The date of the referenced file's last modification, or null if the object does not refer to a file on the disk.
		 */
		public modified: Date;
		

		/**
		 * @readonly
		 * The file name portion of the absolute URI for the referenced file, without the path specification.
		 */
		public name: string;
		

		/**
		 * @readonly
		 * The localized name of the referenced file, without the path specification.
		 */
		public displayName: string;
		

		/**
		 * @readonly
		 * The path portion of the absolute URI for the referenced file, without the file name.
		 */
		public path: string;
		

		/**
		 * @readonly
		 * The Folder object for the folder that contains this file.
		 */
		public parent: Folder;
		

		/**
		 * @readonly
		 * The file type as a four-character string.
		 */
		public type: string;
		

		/**
		 * @readonly
		 * In Mac OS, the file creator as a four-character string. In Windows or UNIX, value is "????".
		 */
		public creator: string;
		

		/**
		 * When true, the file is not shown in the platform-specific file browser.
		 */
		public hidden: boolean;
		

		/**
		 * When true, prevents the file from being altered or deleted.
		 */
		public readonly: boolean;
		

		/**
		 * How line feed characters are written in the file system.
		 */
		public lineFeed: string;
		

		/**
		 * The size of the file in bytes.
		 */
		public length: number;
		

		/**
		 * Gets or sets the encoding for subsequent read/write operations.
		 */
		public encoding: string;
		

		/**
		 * @readonly
		 * When true, a read attempt caused the current position to be at the end of the file, or the file is not open.
		 */
		public eof: boolean;
	}

	/**
	 * Represents a file-system folder or directory in a platform-independent manner.
	 */
	class Folder {
		

		/**
		 * @constructor
		 * Creates and returns a new Folder object referring to a given file-system location.
		 * @return {Folder}
		 * @param {string} path - The absolute or relative path to the folder associated with this object, specified in URI format.
		 */
		public constructor(path?: string);
		

		/**
		 * Encodes a string as required by RFC 2396, and returns the encoded string.
		 * @return {string}
		 * @param {string} name - The string to encode.
		 */
		public static encode(name: string): string;
		

		/**
		 * Encodes a string as required by RFC 2396, and returns the encoded string.
		 * @return {string}
		 * @param {string} name - The string to encode.
		 */
		public encode(name: string): string;
		

		/**
		 * Decodes a UTF-8 encoded string as required by RFC 2396, and returns the decoded string.
		 * @return {string}
		 * @param {string} uri - The UTF-8 string to decode.
		 */
		public static decode(uri: string): string;
		

		/**
		 * Decodes a UTF-8 encoded string as required by RFC 2396, and returns the decoded string.
		 * @return {string}
		 * @param {string} uri - The UTF-8 string to decode.
		 */
		public decode(uri: string): string;
		

		/**
		 * Reports whether a given encoding is available.
		 * @return {boolean}
		 * @param {string} name - The encoding name.
		 */
		public static isEncodingAvailable(name: string): boolean;
		

		/**
		 * Reports whether a given encoding is available.
		 * @return {boolean}
		 * @param {string} name - The encoding name.
		 */
		public isEncodingAvailable(name: string): boolean;
		

		/**
		 * Opens the built-in platform-specific file-browsing dialog, and creates a new File or Folder object for the selected file or folder.
		 * @return {Folder}
		 * @param {string} prompt - The prompt text, if the dialog allows a prompt.
		 */
		public static selectDialog(prompt: string): Folder;
		

		/**
		 * Opens the built-in platform-specific file-browsing dialog, and creates a new File or Folder object for the selected file or folder.
		 * @return {Folder}
		 * @param {string} prompt - The prompt text, if the dialog allows a prompt.
		 */
		public selectDialog(prompt: string): Folder;
		

		/**
		 * @readonly
		 * The name of the current file system.
		 */
		public static fs: string;
		

		/**
		 * @readonly
		 * The name of the current file system.
		 */
		public fs: string;
		

		/**
		 * A Folder object for the current folder.
		 */
		public static current: Folder;
		

		/**
		 * A Folder object for the current folder.
		 */
		public current: Folder;
		

		/**
		 * @readonly
		 * A Folder object for the folder containing the executable image of the running application.
		 */
		public static startup: Folder;
		

		/**
		 * @readonly
		 * A Folder object for the folder containing the executable image of the running application.
		 */
		public startup: Folder;
		

		/**
		 * @readonly
		 * In Mac OS, a Folder object for the folder containing the bundle of the running application.
		 */
		public static appPackage: Folder;
		

		/**
		 * @readonly
		 * In Mac OS, a Folder object for the folder containing the bundle of the running application.
		 */
		public appPackage: Folder;
		

		/**
		 * @readonly
		 * A Folder object for the folder containing the operating system files.
		 */
		public static system: Folder;
		

		/**
		 * @readonly
		 * A Folder object for the folder containing the operating system files.
		 */
		public system: Folder;
		

		/**
		 * @readonly
		 * A Folder object for the folder containing deleted items. On Windows, the trash folder is a virtual
								   folder containing a database; therefore, the property value is null on Windows.
		 */
		public static trash: Folder;
		

		/**
		 * @readonly
		 * A Folder object for the folder containing deleted items. On Windows, the trash folder is a virtual
								   folder containing a database; therefore, the property value is null on Windows.
		 */
		public trash: Folder;
		

		/**
		 * @readonly
		 * A Folder object for the default folder for temporary files.
		 */
		public static temp: Folder;
		

		/**
		 * @readonly
		 * A Folder object for the default folder for temporary files.
		 */
		public temp: Folder;
		

		/**
		 * @readonly
		 * A Folder object for the folder containing the user's application data.
		 */
		public static userData: Folder;
		

		/**
		 * @readonly
		 * A Folder object for the folder containing the user's application data.
		 */
		public userData: Folder;
		

		/**
		 * @readonly
		 * The folder containing the application data for all users.
		 */
		public static appData: Folder;
		

		/**
		 * @readonly
		 * The folder containing the application data for all users.
		 */
		public appData: Folder;
		

		/**
		 * @readonly
		 * A Folder object for the folder containing common files for all programs installed by the user.
		 */
		public static commonFiles: Folder;
		

		/**
		 * @readonly
		 * A Folder object for the folder containing common files for all programs installed by the user.
		 */
		public commonFiles: Folder;
		

		/**
		 * @readonly
		 * A folder pointing to the user's My Documents folder.
		 */
		public static myDocuments: Folder;
		

		/**
		 * @readonly
		 * A folder pointing to the user's My Documents folder.
		 */
		public myDocuments: Folder;
		

		/**
		 * @readonly
		 * A Folder object for the folder that contains the user’s desktop.
		 */
		public static desktop: Folder;
		

		/**
		 * @readonly
		 * A Folder object for the folder that contains the user’s desktop.
		 */
		public desktop: Folder;
		

		/**
		 * Attempts to resolve the file-system alias or shortcut that this object refers to.
		 * @return {Folder}
		 */
		public resolve(): Folder;
		

		/**
		 * Renames the associated folder.
		 * @return {boolean}
		 * @param {string} newName - The new folder name, with no path information.
		 */
		public rename(newName: string): boolean;
		

		/**
		 * Deletes the folder associated with this object from disk immediately, without moving it to the system trash.
		 * @return {boolean}
		 */
		public remove(): boolean;
		

		/**
		 * Changes the path specification of the referenced folder.
		 * @return {boolean}
		 * @param {string} path - A string containing the new path, absolute or relative to the current folder.
		 */
		public changePath(path: string): boolean;
		

		/**
		 * Retrieves and returns the path for this file, relative to the specified base path, in URI notation.
		 * @return {string}
		 * @param {string} basePath - A base path in URI notation., optional default: .  @default [.]
		 */
		public getRelativeURI(basePath?: string): string;
		

		/**
		 * Opens this folder in the platform-specific file browser (as if it had been double-clicked in the file browser).
		 * @return {boolean}
		 */
		public execute(): boolean;
		

		/**
		 * Converts this object to a string.
		 * @return {string}
		 */
		public toString(): string;
		

		/**
		 * Creates and returns a serialized string representation of this object.
		 * @return {string}
		 */
		public toSource(): string;
		

		/**
		 * Opens the built-in platform-specific file-browsing dialog, and creates a new File or Folder object for the selected file or folder.
		 * @return {Folder}
		 * @param {string} prompt - The prompt text, if the dialog allows a prompt.
		 */
		public selectDlg(prompt: string): Folder;
		

		/**
		 * Retrieves the contents of this folder, filtered by the supplied mask.
		 * @return {any[]}
		 * @param {any} mask - A search mask for file names, specified as a string or a function.
		 */
		public getFiles(mask: any): any[];
		

		/**
		 * Creates a folder at the location given by this object's path property.
		 * @return {boolean}
		 */
		public create(): boolean;
		

		/**
		 * @readonly
		 * When true, the object refers to a file system alias or shortcut.
		 */
		public alias: boolean;
		

		/**
		 * @readonly
		 * The creation date of the referenced folder, or null if the object does not refer to a folder on disk.
		 */
		public created: Date;
		

		/**
		 * A message describing the most recent file system error.
		 */
		public error: string;
		

		/**
		 * @readonly
		 * When true, this object refers to a folder that currently exists in the file system.
		 */
		public exists: boolean;
		

		/**
		 * @readonly
		 * The platform-specific name of the referenced folder as a full path name.
		 */
		public fsName: string;
		

		/**
		 * @readonly
		 * The full path name for the referenced folder in URI notation. .
		 */
		public fullName: string;
		

		/**
		 * @readonly
		 * The full path name for the referenced folder in URI notation.
		 */
		public absoluteURI: string;
		

		/**
		 * @readonly
		 * The path name for the referenced folder in URI notation, relative to the current folder.
		 */
		public relativeURI: string;
		

		/**
		 * @readonly
		 * The date of the referenced folder's last modification, or null if the object does not refer to a folder on disk.
		 */
		public modified: Date;
		

		/**
		 * @readonly
		 * The folder name portion of the absolute URI for the referenced file, without the path specification.
		 */
		public name: string;
		

		/**
		 * @readonly
		 * The localized name portion of the absolute URI for the referenced folder, without the path specification.
		 */
		public displayName: string;
		

		/**
		 * @readonly
		 * The path portion of the object absolute URI for the referenced file, without the folder name.
		 */
		public path: string;
		

		/**
		 * @readonly
		 * TThe Folder object for the folder that contains this folder, or null if this object refers to the root folder of a volume.
		 */
		public parent: Folder;
	}

	/**
	 * Creates a TCP/IP connection, or establishes a TCP/IP server.
	 */
	class Socket {
		

		/**
		 * @constructor
		 * Creates a new Socket object.
		 * @return {Socket}
		 */
		public constructor();
		

		/**
		 * Opens the connection for subsequent read/write operations.
		 * @return {boolean}
		 * @param {string} host - The server to connect to.
		 * @param {string} encoding - The encoding to be used for the connection, optional default: ASCII  @default [ASCII]
		 */
		public open(host: string, encoding?: string): boolean;
		

		/**
		 * Instructs the object to start listening for an incoming connection.
		 * @return {boolean}
		 * @param {number} port - The TCP/IP port number to listen on.
		 * @param {string} encoding - The encoding to be used for the connection, optional default: ASCII  @default [ASCII]
		 */
		public listen(port: number, encoding?: string): boolean;
		

		/**
		 * Terminates the open connection.
		 * @return {boolean}
		 */
		public close(): boolean;
		

		/**
		 * Reads up to the specified number of characters from the connection. CR characters are ignored unless the encoding is set to "BINARY".
		 * @return {string}
		 * @param {number} count - The number of characters to read.
		 */
		public read(count?: number): string;
		

		/**
		 * Reads one line of text up to the next line feed.
		 * @return {string}
		 */
		public readln(): string;
		

		/**
		 * Concatenates all arguments into a single string and writes that string to the connection.
		 * @return {boolean}
		 * @param {string} text - Any number of string values. All arguments are concatenated to form the string to be written. CRLF sequences are converted to LFs unless the encoding is set to "BINARY".
		 */
		public write(text: string): boolean;
		

		/**
		 * Concatenates all arguments into a single string, appends a LF character, and writes that string to the connection.
		 * @return {boolean}
		 * @param {string} text - Any number of string values. All arguments are concatenated to form the string to be written. CRLF sequences are converted to LFs unless the encoding is set to "BINARY".
		 */
		public writeln(text: string): boolean;
		

		/**
		 * Checks a listening object for a new incoming connection.
		 * @return {Socket}
		 */
		public poll(): Socket;
		

		/**
		 * @readonly
		 * The name of the remote computer when a connection is established.
		 */
		public host: string;
		

		/**
		 * Sets or retrieves the name of the encoding used to transmit data.
		 */
		public encoding: string;
		

		/**
		 * A message describing the most recent error. Setting this value clears any error message.
		 */
		public error: string;
		

		/**
		 * @readonly
		 * When true, the receive buffer is empty.
		 */
		public eof: boolean;
		

		/**
		 * @readonly
		 * When true, the connection is active.
		 */
		public connected: boolean;
		

		/**
		 * The timeout in seconds to be applied to read or write operations.
		 */
		public timeout: number;
	}

	/**
	 * Provides information about a method, a property or a method parameters.
	 */
	class ReflectionInfo {
		

		/**
		 * @readonly
		 * The class object that this element belongs to.
		 */
		public parent: Reflection;
		

		/**
		 * @readonly
		 * The element name.
		 */
		public name: string;
		

		/**
		 * @readonly
		 * The element type.
		 */
		public type: string;
		

		/**
		 * @readonly
		 * The data type.
		 */
		public dataType: string;
		

		/**
		 * @readonly
		 * The description of method or function arguments.
		 */
		public arguments: ReflectionInfo[];
		

		/**
		 * @readonly
		 * The minimum value.
		 */
		public min: number;
		

		/**
		 * @readonly
		 * The maximum value.
		 */
		public max: number;
		

		/**
		 * @readonly
		 * The default value.
		 */
		public defaultValue: any;
		

		/**
		 * @readonly
		 * Contains true if the class describes a collection class.
		 */
		public isCollection: boolean;
		

		/**
		 * @readonly
		 * The long description text.
		 */
		public description: string;
		

		/**
		 * @readonly
		 * The short description text.
		 */
		public help: string;
		

		/**
		 * @readonly
		 * Sample code, if present.
		 */
		public sampleCode: string;
		

		/**
		 * @readonly
		 * A file containing sample code. May be null.
		 */
		public sampleFile: javascript.File;
	}

	/**
	 * Provides information about a class.
	 */
	class Reflection {
		

		/**
		 * Finds an element description by name.
		 * @return {ReflectionInfo}
		 * @param {string} name - The name of the element to find.
		 */
		public find(name: string): ReflectionInfo;
		

		/**
		 * Returns this class information as XML in OMV format.
		 * @return {XML}
		 */
		public toXML(): XML;
		

		/**
		 * @readonly
		 * The class name.
		 */
		public name: string;
		

		/**
		 * @readonly
		 * An array of method descriptions.
		 */
		public methods: ReflectionInfo[];
		

		/**
		 * @readonly
		 * An array of property descriptions.
		 */
		public properties: ReflectionInfo[];
		

		/**
		 * @readonly
		 * An array of class method descriptions.
		 */
		public staticMethods: ReflectionInfo[];
		

		/**
		 * @readonly
		 * An array of class property descriptions.
		 */
		public staticProperties: ReflectionInfo[];
		

		/**
		 * @readonly
		 * The long description text.
		 */
		public description: string;
		

		/**
		 * @readonly
		 * The short description text.
		 */
		public help: string;
		

		/**
		 * @readonly
		 * Sample code, if present.
		 */
		public sampleCode: string;
		

		/**
		 * @readonly
		 * A file containing sample code. May be null.
		 */
		public sampleFile: javascript.File;
	}

	/**
	 * A qualified XML name, containing the URI and the local name.
	 */
	class QName {
		

		/**
		 * @constructor
		 * Creates a QName object.
		 * @return {QName}
		 * @param {any} uri - The URI, specified as a Namespace object, an existing QName object, or string.
		 * @param {string} name - The local name. Used only if URI is given as a string.
		 */
		public constructor(uri: any, name?: string);
		

		/**
		 * @readonly
		 * The URI part of the qualified name.
		 */
		public uri: string;
		

		/**
		 * @readonly
		 * The local name part of the qualified name.
		 */
		public localName: string;
	}

	/**
	 * A XML namespace object.
	 */
	class Namespace {
		

		/**
		 * @constructor
		 * Creates a Namespace object.
		 * @return {Namespace}
		 * @param {any} prefix - The URI  prefix, specified as an existing Namespace object, QName object, or string.
		 * @param {string} uri - The URI if the prefix is specified as a string.
		 */
		public constructor(prefix: any, uri?: string);
		

		/**
		 * @readonly
		 * The named prefix.
		 */
		public prefix: string;
		

		/**
		 * @readonly
		 * The URI.
		 */
		public uri: string;
	}

	/**
	 * Wraps XML into an object.
	 */
	class XML {
		

		/**
		 * @constructor
		 * Parses an XML string. Throws an error if the XML is incorrect.
		 * @return {XML}
		 * @param {string} text - The text to parse.
		 */
		public constructor(text: string);
		

		/**
		 * Returns an object containing the current parsing and print settings for XML.
		 * @return {any}
		 */
		public static settings(): any;
		

		/**
		 * Returns an object containing the current parsing and print settings for XML.
		 * @return {any}
		 */
		public settings(): any;
		

		/**
		 * Sets the parsing and print setting for XML using an object returned by the settings() method.
		 * @return {void}
		 * @param {any} obj - The object containing the settings to set.
		 */
		public static setSettings(obj: any): void;
		

		/**
		 * Sets the parsing and print setting for XML using an object returned by the settings() method.
		 * @return {void}
		 * @param {any} obj - The object containing the settings to set.
		 */
		public setSettings(obj: any): void;
		

		/**
		 * Returns an object containing the default parsing and print settings for XML.
		 * @return {any}
		 */
		public static defaultSettings(): any;
		

		/**
		 * Returns an object containing the default parsing and print settings for XML.
		 * @return {any}
		 */
		public defaultSettings(): any;
		

		/**
		 * Controls whether XML comments should be parsed (false) or ignored (true).
		 */
		public static ignoreComments: boolean;
		

		/**
		 * Controls whether XML comments should be parsed (false) or ignored (true).
		 */
		public ignoreComments: boolean;
		

		/**
		 * Controls whether XML preprocessing instructions should be parsed (false) or ignored (true).
		 */
		public static ignoreProcessingInstructions: boolean;
		

		/**
		 * Controls whether XML preprocessing instructions should be parsed (false) or ignored (true).
		 */
		public ignoreProcessingInstructions: boolean;
		

		/**
		 * Controls whether whitespace should be parsed (false) or ignored (true).
		 */
		public static ignoreWhitespace: boolean;
		

		/**
		 * Controls whether whitespace should be parsed (false) or ignored (true).
		 */
		public ignoreWhitespace: boolean;
		

		/**
		 * When true, XML is pretty-printed when converting to a string.
		 */
		public static prettyPrinting: boolean;
		

		/**
		 * When true, XML is pretty-printed when converting to a string.
		 */
		public prettyPrinting: boolean;
		

		/**
		 * The number of spaces used to indent pretty-printed XML.
		 */
		public static prettyIndent: number;
		

		/**
		 * The number of spaces used to indent pretty-printed XML.
		 */
		public prettyIndent: number;
		

		/**
		 * Adds a namespace declaration to the node. Returns the XML object itself.
		 * @return {XML}
		 * @param {Namespace} namespace - The namespace to add.
		 */
		public addNamespace(namespace: Namespace): XML;
		

		/**
		 * Appends the given XML to this XML as a child. Returns the XML object itself.
		 * @return {XML}
		 * @param {XML} child - The child XML to add.
		 */
		public appendChild(child: XML): XML;
		

		/**
		 * Returns a list containing all attribute elements matching the given name.
		 * @return {XML}
		 * @param {string} name - The attribute name to look for.
		 */
		public attribute(name: string): XML;
		

		/**
		 * Returns a list containing all attribute elements.
		 * @return {XML}
		 */
		public attributes(): XML;
		

		/**
		 * Returns a list containing all children of this XML matching the given element name.
		 * @return {XML}
		 * @param {string} name - The name or the index of the child element.
		 */
		public child(name: string): XML;
		

		/**
		 * Returns a number representing the ordinal position of this XML object within the context of its parent.
		 * @return {number}
		 */
		public childIndex(): number;
		

		/**
		 * Returns an XML object containing all the properties of this XML object in order.
		 * @return {XML}
		 */
		public children(): XML;
		

		/**
		 * Returns an XML object containing the properties of this XML object that represent XML comments.
		 * @return {XML}
		 */
		public comments(): XML;
		

		/**
		 * Checks if this XML object contains the given XML object.
		 * @return {boolean}
		 * @param {XML} xml - The XML to search for.
		 */
		public contains(xml: XML): boolean;
		

		/**
		 * Creates a copy of this XML object.
		 * @return {XML}
		 */
		public copy(): XML;
		

		/**
		 * Returns all the XML-valued descendants of this XML object with the given name.
		 * @return {XML}
		 * @param {string} name - The name of the descendant to find.
		 */
		public descendants(name?: string): XML;
		

		/**
		 * Returns a list of XML children that are elements with a given name, or all children that are XML elements.
		 * @return {XML}
		 * @param {string} name - The element name. If not supplied, gets all children that are XML elements.
		 */
		public elements(name?: string): XML;
		

		/**
		 * Reports whether this XML object contains complex content.
		 * @return {boolean}
		 */
		public hasComplexContent(): boolean;
		

		/**
		 * Reports whether this XML object contains simple content.
		 * @return {boolean}
		 */
		public hasSimpleContent(): boolean;
		

		/**
		 * Returns an array of Namespace objects mirroring the current list of valid namespaces at this element.
		 * @return {any[]}
		 */
		public inScopeNamespaces(): any[];
		

		/**
		 * Inserts the given child2 after the given child1 in this XML object and returns this XML object.
		 * @return {void}
		 * @param {XML} child1 - The child to insert the other child after.
		 * @param {XML} child2 - The XML to insert.
		 */
		public insertChildAfter(child1: XML, child2: XML): void;
		

		/**
		 * Inserts the given child2 before the given child1 in this XML object and returns this XML object.
		 * @return {void}
		 * @param {XML} child1 - The child to search for.
		 * @param {XML} child2 - The XML to insert.
		 */
		public insertChildBefore(child1: XML, child2: XML): void;
		

		/**
		 * Returns the number of elements contained in an XML list. If this XML object is not a list, returns 1.
		 * @return {number}
		 */
		public length(): number;
		

		/**
		 * Returns the local name of this XML object.
		 * @return {string}
		 */
		public localName(): string;
		

		/**
		 * Returns a QName object containing the URI and the local name of the element.
		 * @return {QName}
		 */
		public name(): QName;
		

		/**
		 * Returns a Namespace object containing the namespace URI of the current element.
		 * @return {Namespace}
		 */
		public namespace(): Namespace;
		

		/**
		 * Returns an array containing all namespace declarations of this XML object.
		 * @return {any[]}
		 */
		public namespaceDeclarations(): any[];
		

		/**
		 * Returns the type of this XML object as one of the strings "element", "attribute", "comment", "processing-instruction", or "text".
		 * @return {string}
		 */
		public nodeKind(): string;
		

		/**
		 * Puts all text nodes in this and all descendant XML objects into a normal form by merging adjacent text nodes and eliminating empty text nodes. Returns this XML object.
		 * @return {XML}
		 */
		public normalize(): XML;
		

		/**
		 * Returns the parent object of this XML object.
		 * @return {XML}
		 */
		public parent(): XML;
		

		/**
		 * Returns a list of preprocessing instructions.
		 * @return {XML}
		 * @param {string} name - The name of the preprocessing instruction to return.
		 */
		public processingInstructions(name?: string): XML;
		

		/**
		 * Inserts a given child into this object before its existing XML properties, and returns this XML object.
		 * @return {XML}
		 * @param {XML} child - The XML to insert.
		 */
		public prependChild(child: XML): XML;
		

		/**
		 * Removes the given namespace from this XML, and returns this XML.
		 * @return {XML}
		 * @param {Namespace} namespace - The namespace to remove.
		 */
		public removeNamespace(namespace: Namespace): XML;
		

		/**
		 * Replaces the value of specified XML properties of this XML object returns this XML object.
		 * @return {XML}
		 * @param {string} name - The property name.
		 * @param {XML} value - The XML with which to replace the value of the matching property.
		 */
		public replace(name: string, value: XML): XML;
		

		/**
		 * Replaces all of the XML-valued properties in this object with a new value, and returns this XML object.
		 * @return {XML}
		 * @param {XML} value - The new value, which can be a single XML object or an XML list.
		 */
		public setChildren(value: XML): XML;
		

		/**
		 * Replaces the local name of this XML object  with a string constructed from the given name
		 * @return {void}
		 * @param {string} name - The name to set.
		 */
		public setLocalName(name: string): void;
		

		/**
		 * Replaces the name of this XML object with the given QName object.
		 * @return {void}
		 * @param {QName} name - The fully qualified name.
		 */
		public setName(name: QName): void;
		

		/**
		 * Sets the namespace for this XML element.
		 * @return {void}
		 * @param {Namespace} namespace - The namespace to set.
		 */
		public setNamespace(namespace: Namespace): void;
		

		/**
		 * Returns an XML list containing all XML properties of this XML object that represent XML text nodes.
		 * @return {XML}
		 */
		public text(): XML;
		

		/**
		 * Returns the string representation of this object.
		 * @return {string}
		 */
		public toString(): string;
		

		/**
		 * Returns an XML-encoded string representation of this XML object.
		 * @return {string}
		 */
		public toXMLString(): string;
		

		/**
		 * Evaluates the given XPath expression in accordance with the W3C XPath recommendation, using this XML object as the context node.
		 * @return {XML}
		 * @param {string} expr - The XPath expression to use.
		 */
		public xpath(expr: string): XML;
	}

	/**
	 * An XML list object.
	 */
	class XMLList {
	}

	/**
	 * Represents a measurement as a combination of values and unit.
	 */
	class UnitValue {
		

		/**
		 * The base unit for all conversions.
		 */
		public static baseUnit: UnitValue;
		

		/**
		 * The base unit for all conversions.
		 */
		public baseUnit: UnitValue;
		

		/**
		 * Converts this instance to a different unit.
		 * @return {any}
		 * @param {string} unitName - The unit name.
		 */
		public convert(unitName: string): any;
		

		/**
		 * Returns this instance as a different unit.
		 * @return {UnitValue}
		 * @param {string} unitName - The unit name.
		 */
		public as(unitName: string): UnitValue;
		

		/**
		 * @readonly
		 * The unit name.
		 */
		public type: string;
		

		/**
		 * The numeric value.
		 */
		public value: number;
	}
}

declare module scriptui {

	/**
	 * A global class containing central information about ScriptUI. Not instantiable.
	 */
	class ScriptUI {
		

		/**
		 * Finds and returns the resource for a given text string from the host application's resource data.
		 * @return {string}
		 * @param {string} text - The text to match.
		 */
		public static getResourceText(text: string): string;
		

		/**
		 * Finds and returns the resource for a given text string from the host application's resource data.
		 * @return {string}
		 * @param {string} text - The text to match.
		 */
		public getResourceText(text: string): string;
		

		/**
		 * Loads a new image from resources or disk files into an image object.
		 * @return {ScriptUIImage}
		 * @param {string} normal - The resource name or the disk file path to the image used for the normal state.
		 * @param {string} disabled - The resource name, or the disk file path to the image used for the disabled state.
		 * @param {string} pressed - The resource name, or the file-system path to the image used for the pressed state.
		 * @param {string} rollover - The resource name, or the file-system path to the image used for the rollover state.
		 */
		public static newImage(normal: string, disabled?: string, pressed?: string, rollover?: string): ScriptUIImage;
		

		/**
		 * Loads a new image from resources or disk files into an image object.
		 * @return {ScriptUIImage}
		 * @param {string} normal - The resource name or the disk file path to the image used for the normal state.
		 * @param {string} disabled - The resource name, or the disk file path to the image used for the disabled state.
		 * @param {string} pressed - The resource name, or the file-system path to the image used for the pressed state.
		 * @param {string} rollover - The resource name, or the file-system path to the image used for the rollover state.
		 */
		public newImage(normal: string, disabled?: string, pressed?: string, rollover?: string): ScriptUIImage;
		

		/**
		 * Creates a new font object for use in text controls and titles.
		 * @return {ScriptUIFont}
		 * @param {string} name - The font name, or the font family name.
		 * @param {string} style - The font style; can be string, or one of the values of ScriptUI.FontStyle.
		 * @param {number} size - The font size in points.
		 */
		public static newFont(name: string, style: string, size: number): ScriptUIFont;
		

		/**
		 * Creates a new font object for use in text controls and titles.
		 * @return {ScriptUIFont}
		 * @param {string} name - The font name, or the font family name.
		 * @param {string} style - The font style; can be string, or one of the values of ScriptUI.FontStyle.
		 * @param {number} size - The font size in points.
		 */
		public newFont(name: string, style: string, size: number): ScriptUIFont;
		

		/**
		 * @readonly
		 * The font constants defined by the host application.
		 */
		public static applicationFonts: any;
		

		/**
		 * @readonly
		 * The font constants defined by the host application.
		 */
		public applicationFonts: any;
		

		/**
		 * @readonly
		 * An object whose properties are the names of compatability modes supported by the host application.
		 */
		public static compatibility: any;
		

		/**
		 * @readonly
		 * An object whose properties are the names of compatability modes supported by the host application.
		 */
		public compatibility: any;
		

		/**
		 * @readonly
		 * A string containing the internal version number of the ScriptUI module.
		 */
		public static coreVersion: string;
		

		/**
		 * @readonly
		 * A string containing the internal version number of the ScriptUI module.
		 */
		public coreVersion: string;
		

		/**
		 * @readonly
		 * An object whose properties define attributes of the environment in which ScriptUI operates.
		 */
		public static environment: Environment;
		

		/**
		 * @readonly
		 * An object whose properties define attributes of the environment in which ScriptUI operates.
		 */
		public environment: Environment;
		

		/**
		 * @readonly
		 * An object whose properties and methods provide access to objects used in the ScriptUI event system.
		 */
		public static events: Events;
		

		/**
		 * @readonly
		 * An object whose properties and methods provide access to objects used in the ScriptUI event system.
		 */
		public events: Events;
		

		/**
		 * @readonly
		 * A string containing the name of the UI component framework with which this version of ScriptUI is compatible.
		 */
		public static frameworkName: string;
		

		/**
		 * @readonly
		 * A string containing the name of the UI component framework with which this version of ScriptUI is compatible.
		 */
		public frameworkName: string;
		

		/**
		 * @readonly
		 * A string containing the version number of the ScriptUI component framework
		 */
		public static version: any;
		

		/**
		 * @readonly
		 * A string containing the version number of the ScriptUI component framework
		 */
		public version: any;
		

		/**
		 * @readonly
		 * Collects the enumerated values that can be used in the alignment and alignChildren properties of controls and containers.
		 */
		public static Alignment: string;
		

		/**
		 * @readonly
		 * Collects the enumerated values that can be used in the alignment and alignChildren properties of controls and containers.
		 */
		public Alignment: string;
		

		/**
		 * @readonly
		 * Collects the enumerated values that can be used as the style argument to the ScriptUI.newFont() method.
		 */
		public static FontStyle: any;
		

		/**
		 * @readonly
		 * Collects the enumerated values that can be used as the style argument to the ScriptUI.newFont() method.
		 */
		public FontStyle: any;
	}

	/**
	 * The instance represents a top-level window or dialog box, which contains user-interface elements.
	 */
	class Window {
		

		/**
		 * @constructor
		 * Creates a new window.
		 * @return {void}
		 * @param {string} type - The window type.
		 * @param {string} title - The window title, a localizable string.
		 * @param {Bounds} bounds - The window's position and size.
		 * @param {any} properties - An object containing creation-only properties.
		 */
		public constructor(type: string, title?: string, bounds?: Bounds, properties?: any);
		

		/**
		 * Use this method to find an existing window.
		 * @return {Window}
		 * @param {string} type - The name of a predefined resource available to JavaScript in the current application; or the window type.
		 * @param {string} title - The window title.
		 */
		public static find(type: string, title: string): Window;
		

		/**
		 * Use this method to find an existing window.
		 * @return {Window}
		 * @param {string} type - The name of a predefined resource available to JavaScript in the current application; or the window type.
		 * @param {string} title - The window title.
		 */
		public find(type: string, title: string): Window;
		

		/**
		 * Displays a platform-standard dialog containing a short message and an OK button.
		 * @return {void}
		 * @param {string} message - TThe string for the displayed message.
		 * @param {string} title - A string to appear as the title of the dialog, if the platform supports a title.
		 * @param {boolean} errorIcon - When true, the platform-standard alert icon is replaced by the platform-standard error icon in the dialog., default: false  @default [false]
		 */
		public static alert(message: string, title: string, errorIcon: boolean): void;
		

		/**
		 * Displays a platform-standard dialog containing a short message and an OK button.
		 * @return {void}
		 * @param {string} message - TThe string for the displayed message.
		 * @param {string} title - A string to appear as the title of the dialog, if the platform supports a title.
		 * @param {boolean} errorIcon - When true, the platform-standard alert icon is replaced by the platform-standard error icon in the dialog., default: false  @default [false]
		 */
		public alert(message: string, title: string, errorIcon: boolean): void;
		

		/**
		 * Displays a platform-standard dialog containing a short message and two buttons labeled Yes and No.
		 * @return {boolean}
		 * @param {string} message - The string for the displayed message.
		 * @param {boolean} noAsDefault - When true, the No button is the default choice, selected when the user types Enter., default: false  @default [false]
		 * @param {string} title - A string to appear as the title of the dialog, if the platform supports a title.
		 */
		public static confirm(message: string, noAsDefault: boolean, title?: string): boolean;
		

		/**
		 * Displays a platform-standard dialog containing a short message and two buttons labeled Yes and No.
		 * @return {boolean}
		 * @param {string} message - The string for the displayed message.
		 * @param {boolean} noAsDefault - When true, the No button is the default choice, selected when the user types Enter., default: false  @default [false]
		 * @param {string} title - A string to appear as the title of the dialog, if the platform supports a title.
		 */
		public confirm(message: string, noAsDefault: boolean, title?: string): boolean;
		

		/**
		 * Displays a modal dialog that returns the user’s text input.
		 * @return {string}
		 * @param {string} prompt - The string for the displayed message.
		 * @param {string} defaultValue - The initial value to be displayed in the text edit field.
		 * @param {string} title - A string to appear as the title of the dialog.
		 */
		public static prompt(prompt: string, defaultValue?: string, title?: string): string;
		

		/**
		 * Displays a modal dialog that returns the user’s text input.
		 * @return {string}
		 * @param {string} prompt - The string for the displayed message.
		 * @param {string} defaultValue - The initial value to be displayed in the text edit field.
		 * @param {string} title - A string to appear as the title of the dialog.
		 */
		public prompt(prompt: string, defaultValue?: string, title?: string): string;
		

		/**
		 * @readonly
		 * Deprecated. Use ScriptUI.frameworkName instead.
		 */
		public static frameworkName: string;
		

		/**
		 * @readonly
		 * Deprecated. Use ScriptUI.frameworkName instead.
		 */
		public frameworkName: string;
		

		/**
		 * @readonly
		 * Deprecated. Use ScriptUI.version instead.
		 */
		public static version: any;
		

		/**
		 * @readonly
		 * Deprecated. Use ScriptUI.version instead.
		 */
		public version: any;
		

		/**
		 * Makes this window visible.
		 * @return {void}
		 */
		public show(): void;
		

		/**
		 * Hides this windows.
		 * @return {void}
		 */
		public hide(): void;
		

		/**
		 * Sends a notification message to all listeners, simulating the specified user interaction event.
		 * @return {void}
		 * @param {string} eventName - The event name; if omitted, the default event is sent.
		 */
		public notify(eventName?: string): void;
		

		/**
		 * Centers this window on screen or with repect to another window.
		 * @return {void}
		 * @param {Window} window - The relative window. If not specified, centers on the screen.
		 */
		public center(window?: Window): void;
		

		/**
		 * Closes this window.
		 * @return {void}
		 * @param {any} returnValue - A number to be returned from the show() method that invoked this window as a modal dialog.
		 */
		public close(returnValue?: any): void;
		

		/**
		 * Creates and returns a new control or container object and adds it to the children of this window.
		 * @return {any}
		 * @param {string} type - The type of the child element, as specified for the type property.
		 * @param {Bounds} bounds - A bounds specification that describes the size and position of the new control or container, relative to its parent.
		 * @param {string} text - The text or label, a localizable string.
		 * @param {any} properties - An object that contains one or more creation properties of the new child (properties used only when the element is created).
		 */
		public add(type: string, bounds?: Bounds, text?: string, properties?: any): any;
		

		/**
		 * Removes the specified child control from this window’s children array.
		 * @return {void}
		 * @param {any} what - The child control to remove, specified by 0-based index, text property value, or as a control object.
		 */
		public remove(what: any): void;
		

		/**
		 * Registers an event handler for a particular type of event occuring in this window.
		 * @return {boolean}
		 * @param {string} eventName - The name of the event.
		 * @param {Function} handler - The function that handles the event.
		 * @param {boolean} capturePhase - When true, the handler is called only in the capturing phase of the event propagation., optional default: false  @default [false]
		 */
		public addEventListener(eventName: string, handler: Function, capturePhase?: boolean): boolean;
		

		/**
		 * Unregisters an event handler for a particular type of event occuring in this window.
		 * @return {boolean}
		 * @param {string} eventName - The name of the event.
		 * @param {Function} handler - The function that handles the event.
		 * @param {boolean} capturePhase - Whether to call the handler only in the capturing phase of the event propagation., default: false  @default [false]
		 */
		public removeEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
		

		/**
		 * Simulates the occurrence of an event in this target.
		 * @return {UIEvent}
		 */
		public dispatchEvent(): UIEvent;
		

		/**
		 * @readonly
		 * The graphics object that can be used to customize the window’s appearance, in response to the onDraw event.
		 */
		public graphics: ScriptUIGraphics;
		

		/**
		 * When true, the element is shown, when false it is hidden.
		 */
		public visible: boolean;
		

		/**
		 * The bounds of the window's drawable area, excluding the frame, in screen coordinates.
		 */
		public bounds: Bounds;
		

		/**
		 * @readonly
		 * The bounds of the window frame in screen coordinates.
		 */
		public frameBounds: Bounds;
		

		/**
		 * The top left corner of the window frame in screen coordinates.
		 */
		public frameLocation: number[];
		

		/**
		 * @readonly
		 * The size and location of the window's frame in screen coordinates.
		 */
		public frameSize: Dimension;
		

		/**
		 * The upper left corner of the window's drawable area.
		 */
		public location: number[];
		

		/**
		 * The largest rectangle to which the window can be resized.
		 */
		public maximumSize: Dimension;
		

		/**
		 * The smallest rectangle to which the window can be resized.
		 */
		public minimumSize: Dimension;
		

		/**
		 * The preferred size of the window.
		 */
		public preferredSize: Dimension;
		

		/**
		 * The current size and location of the content area of the window in screen coordinates.
		 */
		public size: Dimension;
		

		/**
		 * @readonly
		 * The bounds of this window relative to the top-level parent window.
		 */
		public windowBounds: Bounds;
		

		/**
		 * A number of characters for which to reserve space when calculating the preferred size of the window.
		 */
		public characters: number;
		

		/**
		 * The default text justification style for child text elements.
		 */
		public justify: string;
		

		/**
		 * The title, label, or displayed text, a localizeable string.
		 */
		public text: string;
		

		/**
		 * Set to true to make this window active.
		 */
		public active: boolean;
		

		/**
		 * The keypress combination that invokes this element's onShortcutKey() callback.
		 */
		public shortcutKey: string;
		

		/**
		 * For windows of type dialog, the UI element to notify when the user presses a cancellation key combination.
		 */
		public cancelElement: any;
		

		/**
		 * For windows of type dialog, the UI element to notify when the user presses a Enter key.
		 */
		public defaultElement: any;
		

		/**
		 * True if the window is expanded.
		 */
		public maximized: boolean;
		

		/**
		 * True if the window is minimized or iconified.
		 */
		public minimized: boolean;
		

		/**
		 * Tells the layout manager how unlike-sized children of this container should be aligned within a column or row.
		 */
		public alignChildren: string;
		

		/**
		 * @readonly
		 * The collection of UI elements that have been added to this container.
		 */
		public children: any[];
		

		/**
		 * The layout manager for this container.
		 */
		public layout: LayoutManager;
		

		/**
		 * The number of pixels between the edges of a container and the outermost child elements.
		 */
		public margins: number;
		

		/**
		 * The layout orientation of children in a container.
		 */
		public orientation: string;
		

		/**
		 * The number of pixels separating one child element from its adjacent sibling element.
		 */
		public spacing: number;
		

		/**
		 * The alignment style for child elements of a container. If defined, this value overrides the alignChildren setting for the parent container.
		 */
		public alignment: string;
		

		/**
		 * An object that contains one or more creation properties of the container (properties used only when the element is created).
		 */
		public properties: any;
		

		/**
		 * True if this element is enabled.
		 */
		public enabled: boolean;
		

		/**
		 * The help text that is displayed when the mouse hovers over the element.
		 */
		public helpTip: string;
		

		/**
		 * The number of pixels to indent the element.
		 */
		public indent: number;
		

		/**
		 * @readonly
		 * The immediate parent element.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The window that this element belongs to.
		 */
		public window: Window;
		

		/**
		 * @readonly
		 * The element type; "dialog", "palette", or "window".
		 */
		public type: string;
		

		/**
		 * The opacity of the window, in the range [0..1].
		 */
		public opacity: number;
	}

	/**
	 * Controls the automatic layout behavior for a window or container.
	 */
	class LayoutManager {
		

		/**
		 * Invokes the automatic layout behavior for the managed container.
		 * @return {void}
		 */
		public layout(): void;
		

		/**
		 * Performs a layout after a Window is resized, based on the new size.
		 * @return {void}
		 */
		public resize(): void;
	}

	/**
	 * A drawing pen that defines a color and line width used to stroke paths.
	 */
	class ScriptUIPen {
		

		/**
		 * @readonly
		 * The pen color.
		 */
		public color: number[];
		

		/**
		 * @readonly
		 * The theme name.
		 */
		public theme: string;
		

		/**
		 * @readonly
		 * The pen type, solid or theme.
		 */
		public type: string;
		

		/**
		 * The pixel width of the drawing line.
		 */
		public lineWidth: number;
	}

	/**
	 * A painting brush that encapsulates a color or pattern used to fill paths.
	 */
	class ScriptUIBrush {
		

		/**
		 * @readonly
		 * The brush color.
		 */
		public color: number[];
		

		/**
		 * @readonly
		 * The theme name.
		 */
		public theme: string;
		

		/**
		 * @readonly
		 * The brush type, solid or theme.
		 */
		public type: number;
	}

	/**
	 * A helper object that encapsulates a drawing path for a figure to be drawn into a window or control.
	 */
	class ScriptUIPath {
	}

	/**
	 * An object used to draw custom graphics, found in the graphics property of window, container, and control objects.
	 */
	class ScriptUIGraphics {
		

		/**
		 * @readonly
		 * Contains the enumerated constants for the type argument of newBrush().
		 */
		public static BrushType: any;
		

		/**
		 * @readonly
		 * Contains the enumerated constants for the type argument of newBrush().
		 */
		public BrushType: any;
		

		/**
		 * @readonly
		 * Contains the enumerated constants for the type argument of newPen().
		 */
		public static PenType: any;
		

		/**
		 * @readonly
		 * Contains the enumerated constants for the type argument of newPen().
		 */
		public PenType: any;
		

		/**
		 * Creates a new painting brush object.
		 * @return {ScriptUIBrush}
		 * @param {number} type - The brush type, solid or theme.
		 * @param {number[]} color - The brush color.
		 */
		public newBrush(type: number, color: number[]): ScriptUIBrush;
		

		/**
		 * Creates a new drawing pen object.
		 * @return {ScriptUIPen}
		 * @param {number} type - The pen type, solid or theme.
		 * @param {number[]} color - The pen color.
		 * @param {number} width - The width of the pen line in pixels.
		 */
		public newPen(type: number, color: number[], width: number): ScriptUIPen;
		

		/**
		 * Creates a new, empty path object.
		 * @return {ScriptUIPath}
		 */
		public newPath(): ScriptUIPath;
		

		/**
		 * Closes the current path.
		 * @return {void}
		 */
		public closePath(): void;
		

		/**
		 * Adds a given point to the currentPath, and makes it the current drawing position.
		 * @return {number[]}
		 * @param {number} x - The X coordinate for the new point, relative to the origin of this element.
		 * @param {number} y - The Y coordinate for the new point, relative to the origin of this element.
		 */
		public moveTo(x: number, y: number): number[];
		

		/**
		 * Adds a path segment to the currentPath.
		 * @return {number[]}
		 * @param {number} x - The X coordinate for the destination point, relative to the origin of this element.
		 * @param {number} y - The Y coordinate for the destination point, relative to the origin of this element.
		 */
		public lineTo(x: number, y: number): number[];
		

		/**
		 * Defines a rectangular path in the currentPath object.
		 * @return {number[]}
		 * @param {number} left - The left coordinate relative to the origin of this element.
		 * @param {number} top - The top coordinate relative to the origin of this element.
		 * @param {number} width - The width in pixels.
		 * @param {number} height - The height in pixels.
		 */
		public rectPath(left: number, top: number, width: number, height: number): number[];
		

		/**
		 * Defines an elliptical path within a given rectangular area in the currentPath object, which can be filled using fillPath() or stroked using strokePath().
		 * @return {number[]}
		 * @param {number} left - The left coordinate of the region, relative to the origin of this element.
		 * @param {number} top - The top coordinate of the region, relative to the origin of this element.
		 * @param {number} width - The width of the region in pixels.
		 * @param {number} height - The height of the region in pixels.
		 */
		public ellipsePath(left: number, top: number, width: number, height: number): number[];
		

		/**
		 * Strokes the path segments of a path with a given drawing pen.
		 * @return {void}
		 * @param {ScriptUIPen} pen - The drawing pen that defines the color and line width.
		 * @param {ScriptUIPath} path - The path object. Default is the currentPath.
		 */
		public strokePath(pen: ScriptUIPen, path?: ScriptUIPath): void;
		

		/**
		 * Fills a path using a given painting brush.
		 * @return {void}
		 * @param {ScriptUIBrush} brush - The brush object that defines the fill color.
		 * @param {ScriptUIPath} path - The path object. Default is the currentPath.
		 */
		public fillPath(brush: ScriptUIBrush, path?: ScriptUIPath): void;
		

		/**
		 * Draws a focus ring within a region of this element.
		 * @return {void}
		 * @param {number} left - The left coordinate of the region.
		 * @param {number} top - The top coordinate of the region.
		 * @param {number} width - The width of the region in pixels.
		 * @param {number} height - The height of the region in pixels.
		 */
		public drawFocusRing(left: number, top: number, width: number, height: number): void;
		

		/**
		 * Draws an image within a given region of the element.
		 * @return {void}
		 * @param {ScriptUIImage} image - The image to draw.
		 * @param {number} left - The left coordinate of the region, relative to the origin of this element.
		 * @param {number} top - The top coordinate of the region, relative to the origin of this element.
		 * @param {number} width - The width in pixels. If provided, the image is stretched or shrunk to fit. If omitted, uses the original image width.
		 * @param {number} height - The height in pixels. If provided, the image is stretched or shrunk to fit. If omitted, uses the original image height.
		 */
		public drawImage(image: ScriptUIImage, left: number, top: number, width?: number, height?: number): void;
		

		/**
		 * Draw the platform-specific control associated with this element.
		 * @return {void}
		 */
		public drawOSControl(): void;
		

		/**
		 * Draw a string of text starting at a given point in this element, using a given drawing pen and font.
		 * @return {void}
		 * @param {string} text - The text string.
		 * @param {ScriptUIPen} pen - The drawing pen to use.
		 * @param {number} x - The left coordinate, relative to the origin of this element.
		 * @param {number} y - The top coordinate, relative to the origin of this element.
		 * @param {ScriptUIFont} font - The font to use. Default is the  font value in this object.
		 */
		public drawString(text: string, pen: ScriptUIPen, x: number, y: number, font?: ScriptUIFont): void;
		

		/**
		 * Calculates the size needed to display a string using the given font.
		 * @return {Dimension}
		 * @param {string} text - The text string to measure.
		 * @param {ScriptUIFont} font - The font to use. Default is the font value in this object.
		 * @param {number} boundingWidth - The bounding width.
		 */
		public measureString(text: string, font?: ScriptUIFont, boundingWidth?: number): Dimension;
		

		/**
		 * The background color for containers; for non-containers, the parent background color.
		 */
		public backgroundColor: ScriptUIBrush;
		

		/**
		 * The background color for containers when disabled or inactive; for non-containers, the parent background color.
		 */
		public disabledBackgroundColor: ScriptUIBrush;
		

		/**
		 * The text color when the element is disabled or inactive.
		 */
		public disabledForegroundColor: ScriptUIPen;
		

		/**
		 * The default font to use for displaying text.
		 */
		public font: ScriptUIFont;
		

		/**
		 * The text color.
		 */
		public foregroundColor: ScriptUIPen;
		

		/**
		 * @readonly
		 * The current drawing path, encapsulated in a path object.
		 */
		public currentPath: ScriptUIPath;
		

		/**
		 * @readonly
		 * The current position in the current drawing path.
		 */
		public currentPoint: number[];
	}

	/**
	 * Describes an input state at the time of the triggering  ScriptUIGraphics.onDraw() event.
	 */
	class DrawState {
		

		/**
		 * @readonly
		 * True if the cursor is hovering over this element.
		 */
		public mouseOver: boolean;
		

		/**
		 * @readonly
		 * True if the left mouse button is being pressed.
		 */
		public leftButtonPressed: boolean;
		

		/**
		 * @readonly
		 * True if the middle mouse button is being pressed.
		 */
		public middleButtonPressed: boolean;
		

		/**
		 * @readonly
		 * True if the right mouse button is being pressed.
		 */
		public rightButtonPressed: boolean;
		

		/**
		 * @readonly
		 * True if the element has the input focus.
		 */
		public hasFocus: boolean;
		

		/**
		 * @readonly
		 * True if the Shift key is being pressed.
		 */
		public shiftKeyPressed: boolean;
		

		/**
		 * @readonly
		 * True if the Ctrl key is being pressed.
		 */
		public ctrlKeyPressed: boolean;
		

		/**
		 * @readonly
		 * True if the Command key is being pressed (in Mac OS only).
		 */
		public cmdKeyPressed: boolean;
		

		/**
		 * @readonly
		 * True if the Option key is being pressed (in Mac OS only).
		 */
		public optKeyPressed: boolean;
		

		/**
		 * @readonly
		 * True if the Alt key is being pressed (in Windows only).
		 */
		public altKeyPressed: boolean;
		

		/**
		 * @readonly
		 * True if the Num Lock key is being pressed.
		 */
		public numLockKeyPressed: boolean;
		

		/**
		 * @readonly
		 * True if the Caps Lock key is being pressed.
		 */
		public capsLockKeyPressed: boolean;
	}

	/**
	 * Encapsulates the qualities of a font used to draw text into a control.
	 */
	class ScriptUIFont {
		

		/**
		 * @readonly
		 * The font family name.
		 */
		public family: string;
		

		/**
		 * @readonly
		 * The complete font name, consisting of the family and style, if specified.
		 */
		public name: string;
		

		/**
		 * @readonly
		 * The font point size.
		 */
		public size: number;
		

		/**
		 * @readonly
		 * The font style. One of the constants in ScriptUIGraphics.FontStyle.
		 */
		public style: any;
		

		/**
		 * @readonly
		 * The name of a substitution font, a fallback font to substitute for this font if the requested font family or style is not available.
		 */
		public substitute: string;
	}

	/**
	 * Encapsulates a set of images that can be drawn into a control.
	 */
	class ScriptUIImage {
		

		/**
		 * @readonly
		 * The image format. One of: resource, JPEG, GIF, TIFF, PNG, or PICT (Macintosh).
		 */
		public format: string;
		

		/**
		 * @readonly
		 * The image name. Either the file name, or the resource name.
		 */
		public name: string;
		

		/**
		 * @readonly
		 * The full path to the file that contains the image.
		 */
		public pathname: string;
		

		/**
		 * @readonly
		 * The image size in pixels.
		 */
		public size: Dimension;
	}

	/**
	 * A text label that the user cannot change.
	 */
	class StaticText {
		

		/**
		 * Sends a notification message, simulating the specified user interaction event.
		 * @return {void}
		 * @param {string} eventName - The name of the control event handler to call.
		 */
		public notify(eventName?: string): void;
		

		/**
		 * Shows this element.
		 * @return {void}
		 */
		public show(): void;
		

		/**
		 * Hides this element.
		 * @return {void}
		 */
		public hide(): void;
		

		/**
		 * Registers an event handler for a particular type of event occuring in this element.
		 * @return {boolean}
		 * @param {string} eventName - The name of the event.
		 * @param {Function} handler - The function that handles the event.
		 * @param {boolean} capturePhase - When true, the handler is called only in the capturing phase of the event propagation., default: false  @default [false]
		 */
		public addEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
		

		/**
		 * Unregisters an event handler for a particular type of event occuring in this element.
		 * @return {boolean}
		 * @param {string} eventName - The name of the event.
		 * @param {Function} handler - The function that handles the event.
		 * @param {boolean} capturePhase - Whether to call the handler only in the capturing phase of the event propagation., default: false  @default [false]
		 */
		public removeEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
		

		/**
		 * Simulates the occurrence of an event in this target.
		 * @return {Event}
		 */
		public dispatchEvent(): Event;
		

		/**
		 * A number of characters for which to reserve space when calculating the preferred size of the element.
		 */
		public characters: number;
		

		/**
		 * The text justification style.
		 */
		public justify: string;
		

		/**
		 * The text to display, a localizable string.
		 */
		public text: string;
		

		/**
		 * Always false. This element cannot have input focus.
		 */
		public active: boolean;
		

		/**
		 * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
		 */
		public shortcutKey: string;
		

		/**
		 * @readonly
		 * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
		 */
		public graphics: ScriptUIGraphics;
		

		/**
		 * True if this element is shown, false if it is hidden.
		 */
		public visible: boolean;
		

		/**
		 * The boundaries of the element, in parent-relative coordinates.
		 */
		public bounds: Bounds;
		

		/**
		 * The upper left corner of this element relative to its parent.
		 */
		public location: number[];
		

		/**
		 * The maximum height and width to which the element can be resized.
		 */
		public maximumSize: Dimension;
		

		/**
		 * The minimum height and width to which the element can be resized.
		 */
		public minimumSize: Dimension;
		

		/**
		 * The preferred size, used by layout managers to determine the best size for each element.
		 */
		public preferredSize: Dimension;
		

		/**
		 * The current dimensions of this element.
		 */
		public size: Dimension;
		

		/**
		 * @readonly
		 * The bounds of this element relative to the top-level parent window.
		 */
		public windowBounds: Bounds;
		

		/**
		 * The alignment style for this element. If defined, this value overrides the alignChildren setting for the parent container.
		 */
		public alignment: string;
		

		/**
		 * @readonly
		 * An array of child elements.
		 */
		public children: any[];
		

		/**
		 * An object that contains one or more creation properties of the container (properties used only when the element is created).
		 */
		public properties: any;
		

		/**
		 * True if this element is enabled.
		 */
		public enabled: boolean;
		

		/**
		 * The help text that is displayed when the mouse hovers over the element.
		 */
		public helpTip: string;
		

		/**
		 * The number of pixels to indent the element during automatic layout.
		 */
		public indent: number;
		

		/**
		 * @readonly
		 * The parent element.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The window that this element belongs to.
		 */
		public window: Window;
		

		/**
		 * @readonly
		 * The element type, "statictext".
		 */
		public type: string;
	}

	/**
	 * A pushbutton element containing a mouse-sensitive text string.
	 */
	class Button {
		

		/**
		 * Sends a notification message, simulating the specified user interaction event.
		 * @return {void}
		 * @param {string} eventName - The name of the control event handler to call.
		 */
		public notify(eventName?: string): void;
		

		/**
		 * Shows this element.
		 * @return {void}
		 */
		public show(): void;
		

		/**
		 * Hides this element.
		 * @return {void}
		 */
		public hide(): void;
		

		/**
		 * Registers an event handler for a particular type of event occuring in this element.
		 * @return {boolean}
		 * @param {string} eventName - The name of the event.
		 * @param {Function} handler - The function that handles the event.
		 * @param {boolean} capturePhase - When true, the handler is called only in the capturing phase of the event propagation., default: false  @default [false]
		 */
		public addEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
		

		/**
		 * Unregisters an event handler for a particular type of event occuring in this element.
		 * @return {boolean}
		 * @param {string} eventName - The name of the event.
		 * @param {Function} handler - The function that handles the event.
		 * @param {boolean} capturePhase - Whether to call the handler only in the capturing phase of the event propagation., default: false  @default [false]
		 */
		public removeEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
		

		/**
		 * Simulates the occurrence of an event in this target.
		 * @return {Event}
		 */
		public dispatchEvent(): Event;
		

		/**
		 * A number of characters for which to reserve space when calculating the preferred size of the element.
		 */
		public characters: number;
		

		/**
		 * The text justification style.
		 */
		public justify: string;
		

		/**
		 * The text to display, a localizable string.
		 */
		public text: string;
		

		/**
		 * True if this element is active.
		 */
		public active: boolean;
		

		/**
		 * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
		 */
		public shortcutKey: string;
		

		/**
		 * @readonly
		 * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
		 */
		public graphics: ScriptUIGraphics;
		

		/**
		 * True if this element is shown, false if it is hidden.
		 */
		public visible: boolean;
		

		/**
		 * The boundaries of the element, in parent-relative coordinates.
		 */
		public bounds: Bounds;
		

		/**
		 * The upper left corner of this element relative to its parent.
		 */
		public location: number[];
		

		/**
		 * The maximum height and width to which the element can be resized.
		 */
		public maximumSize: Dimension;
		

		/**
		 * The minimum height and width to which the element can be resized.
		 */
		public minimumSize: Dimension;
		

		/**
		 * The preferred size, used by layout managers to determine the best size for each element.
		 */
		public preferredSize: Dimension;
		

		/**
		 * The current dimensions of this element.
		 */
		public size: Dimension;
		

		/**
		 * @readonly
		 * The bounds of this element relative to the top-level parent window.
		 */
		public windowBounds: Bounds;
		

		/**
		 * The alignment style for this element. If defined, this value overrides the alignChildren setting for the parent container.
		 */
		public alignment: string;
		

		/**
		 * @readonly
		 * An array of child elements.
		 */
		public children: any[];
		

		/**
		 * An object that contains one or more creation properties of the container (properties used only when the element is created).
		 */
		public properties: any;
		

		/**
		 * True if this element is enabled.
		 */
		public enabled: boolean;
		

		/**
		 * The help string that is displayed when the mouse hovers over the element.
		 */
		public helpTip: string;
		

		/**
		 * The number of pixels to indent the element during automatic layout.
		 */
		public indent: number;
		

		/**
		 * @readonly
		 * The parent element.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The window that this element belongs to.
		 */
		public window: Window;
		

		/**
		 * @readonly
		 * The element type; "button".
		 */
		public type: string;
	}

	/**
	 * A  mouse-sensitive pushbutton that displays an image instead of text.
	 */
	class IconButton {
		

		/**
		 * Sends a notification message, simulating the specified user interaction event.
		 * @return {void}
		 * @param {string} eventName - The name of the control event handler to call.
		 */
		public notify(eventName?: string): void;
		

		/**
		 * Shows this element.
		 * @return {void}
		 */
		public show(): void;
		

		/**
		 * Hides this element.
		 * @return {void}
		 */
		public hide(): void;
		

		/**
		 * Registers an event handler for a particular type of event occuring in this element.
		 * @return {boolean}
		 * @param {string} eventName - The name of the event.
		 * @param {Function} handler - The function that handles the event.
		 * @param {boolean} capturePhase - When true, the handler is called only in the capturing phase of the event propagation., default: false  @default [false]
		 */
		public addEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
		

		/**
		 * Unregisters an event handler for a particular type of event occuring in this element.
		 * @return {boolean}
		 * @param {string} eventName - The name of the event.
		 * @param {Function} handler - The function that handles the event.
		 * @param {boolean} capturePhase - Whether to call the handler only in the capturing phase of the event propagation., default: false  @default [false]
		 */
		public removeEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
		

		/**
		 * Simulates the occurrence of an event in this target.
		 * @return {Event}
		 */
		public dispatchEvent(): Event;
		

		/**
		 * The image object that defines the image to be drawn.
		 */
		public image: ScriptUIImage;
		

		/**
		 * True if this element is active.
		 */
		public active: boolean;
		

		/**
		 * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
		 */
		public shortcutKey: string;
		

		/**
		 * @readonly
		 * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
		 */
		public graphics: ScriptUIGraphics;
		

		/**
		 * True if this element is shown, false if it is hidden.
		 */
		public visible: boolean;
		

		/**
		 * The boundaries of the element, in parent-relative coordinates.
		 */
		public bounds: Bounds;
		

		/**
		 * The upper left corner of this element relative to its parent.
		 */
		public location: number[];
		

		/**
		 * The maximum height and width to which the element can be resized.
		 */
		public maximumSize: Dimension;
		

		/**
		 * The minimum height and width to which the element can be resized.
		 */
		public minimumSize: Dimension;
		

		/**
		 * The preferred size, used by layout managers to determine the best size for each element.
		 */
		public preferredSize: Dimension;
		

		/**
		 * The current dimensions of this element.
		 */
		public size: Dimension;
		

		/**
		 * @readonly
		 * The bounds of this element relative to the top-level parent window.
		 */
		public windowBounds: Bounds;
		

		/**
		 * The alignment style for this element. If defined, this value overrides the alignChildren setting for the parent container.
		 */
		public alignment: string;
		

		/**
		 * @readonly
		 * An array of child elements.
		 */
		public children: any[];
		

		/**
		 * An object that contains one or more creation properties of the container (properties used only when the element is created).
		 */
		public properties: any;
		

		/**
		 * True if this element is enabled.
		 */
		public enabled: boolean;
		

		/**
		 * The help text that is displayed when the mouse hovers over the element.
		 */
		public helpTip: string;
		

		/**
		 * The number of pixels to indent the element during automatic layout.
		 */
		public indent: number;
		

		/**
		 * @readonly
		 * The parent element.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The window that this element belongs to.
		 */
		public window: Window;
		

		/**
		 * @readonly
		 * The element type; "iconbutton".
		 */
		public type: string;
	}

	/**
	 * An editable text field that the user can select and change.
	 */
	class EditText {
		

		/**
		 * Shows this element.
		 * @return {void}
		 */
		public show(): void;
		

		/**
		 * Hides this element.
		 * @return {void}
		 */
		public hide(): void;
		

		/**
		 * Sends a notification message, simulating the specified user interaction event.
		 * @return {void}
		 * @param {string} eventName - The name of the control event handler to call.
		 */
		public notify(eventName?: string): void;
		

		/**
		 * Registers an event handler for a particular type of event occuring in this element.
		 * @return {boolean}
		 * @param {string} eventName - The name of the event.
		 * @param {Function} handler - The function that handles the event.
		 * @param {boolean} capturePhase - When true, the handler is called only in the capturing phase of the event propagation., default: false  @default [false]
		 */
		public addEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
		

		/**
		 * Unregisters an event handler for a particular type of event occuring in this element.
		 * @return {boolean}
		 * @param {string} eventName - The name of the event.
		 * @param {Function} handler - The function that handles the event.
		 * @param {boolean} capturePhase - Whether to call the handler only in the capturing phase of the event propagation., default: false  @default [false]
		 */
		public removeEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
		

		/**
		 * Simulates the occurrence of an event in this target.
		 * @return {Event}
		 */
		public dispatchEvent(): Event;
		

		/**
		 * The currently selected text, or the empty string if there is no text selected.
		 */
		public textselection: string;
		

		/**
		 * A number of characters for which to reserve space when calculating the preferred size of the element.
		 */
		public characters: number;
		

		/**
		 * The text justification style.
		 */
		public justify: string;
		

		/**
		 * The current text displayed in the field, a localizable string.
		 */
		public text: string;
		

		/**
		 * @readonly
		 * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
		 */
		public graphics: ScriptUIGraphics;
		

		/**
		 * True if this element is shown, false if it is hidden.
		 */
		public visible: boolean;
		

		/**
		 * The boundaries of the element, in parent-relative coordinates.
		 */
		public bounds: Bounds;
		

		/**
		 * The upper left corner of this element relative to its parent.
		 */
		public location: number[];
		

		/**
		 * The maximum height and width to which the element can be resized.
		 */
		public maximumSize: Dimension;
		

		/**
		 * The minimum height and width to which the element can be resized.
		 */
		public minimumSize: Dimension;
		

		/**
		 * The preferred size, used by layout managers to determine the best size for each element.
		 */
		public preferredSize: Dimension;
		

		/**
		 * The current dimensions of this element.
		 */
		public size: Dimension;
		

		/**
		 * @readonly
		 * The bounds of this element relative to the top-level parent window.
		 */
		public windowBounds: Bounds;
		

		/**
		 * True if this element is active.
		 */
		public active: boolean;
		

		/**
		 * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
		 */
		public shortcutKey: string;
		

		/**
		 * The alignment style for this element. If defined, this value overrides the alignChildren setting for the parent container.
		 */
		public alignment: string;
		

		/**
		 * @readonly
		 * An array of child elements.
		 */
		public children: any[];
		

		/**
		 * An object that contains one or more creation properties of the container (properties used only when the element is created).
		 */
		public properties: any;
		

		/**
		 * True if this element is enabled.
		 */
		public enabled: boolean;
		

		/**
		 * The help text that is displayed when the mouse hovers over the element.
		 */
		public helpTip: string;
		

		/**
		 * The number of pixels to indent the element during automatic layout.
		 */
		public indent: number;
		

		/**
		 * @readonly
		 * The parent element.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The window that this element belongs to.
		 */
		public window: Window;
		

		/**
		 * @readonly
		 * The element type; "edittext".
		 */
		public type: string;
	}

	/**
	 * Displays a list of choices, represented by ListItem objects.
	 */
	class ListBox {
		

		/**
		 * Adds an item to the choices in this list.
		 * @return {ListItem}
		 * @param {string} type - The type of the child element, the string "item".
		 * @param {string} text - The localizable text label for the item.
		 */
		public add(type: string, text?: string): ListItem;
		

		/**
		 * Retrieves an item object from the list that has a given text label.
		 * @return {ListItem}
		 * @param {string} text - The text string to match.
		 */
		public find(text: string): ListItem;
		

		/**
		 * Removes a child item from the list.
		 * @return {void}
		 * @param {any} what - The item or child to remove, specified by 0-based index, text value, or as a ListItem object.
		 */
		public remove(what: any): void;
		

		/**
		 * Removes all child items from the list.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Sends a notification message, simulating the specified user interaction event.
		 * @return {void}
		 * @param {string} eventName - The name of the control event handler to call.
		 */
		public notify(eventName?: string): void;
		

		/**
		 * Shows this element.
		 * @return {void}
		 */
		public show(): void;
		

		/**
		 * Hides this element.
		 * @return {void}
		 */
		public hide(): void;
		

		/**
		 * Registers an event handler for a particular type of event occuring in this element.
		 * @return {boolean}
		 * @param {string} eventName - The name of the event.
		 * @param {Function} handler - The function that handles the event.
		 * @param {boolean} capturePhase - When true, the handler is called only in the capturing phase of the event propagation., default: false  @default [false]
		 */
		public addEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
		

		/**
		 * Unregisters an event handler for a particular type of event occuring in this element.
		 * @return {boolean}
		 * @param {string} eventName - The name of the event.
		 * @param {Function} handler - The function that handles the event.
		 * @param {boolean} capturePhase - Whether to call the handler only in the capturing phase of the event propagation., default: false  @default [false]
		 */
		public removeEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
		

		/**
		 * Simulates the occurrence of an event in this target.
		 * @return {Event}
		 */
		public dispatchEvent(): Event;
		

		/**
		 * @readonly
		 * The array of choice items displayed in the list.
		 */
		public items: ListItem[];
		

		/**
		 * The width and height in pixels of each item in the list.
		 */
		public itemSize: Dimension;
		

		/**
		 * The currently selected item for a single-selection list, or an array of items for current selection in a multi-selection list.
		 */
		public selection: ListItem;
		

		/**
		 * True if this element is active.
		 */
		public active: boolean;
		

		/**
		 * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
		 */
		public shortcutKey: string;
		

		/**
		 * @readonly
		 * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
		 */
		public graphics: ScriptUIGraphics;
		

		/**
		 * True if this element is shown, false if it is hidden.
		 */
		public visible: boolean;
		

		/**
		 * The boundaries of the element, in parent-relative coordinates.
		 */
		public bounds: Bounds;
		

		/**
		 * The upper left corner of this element relative to its parent.
		 */
		public location: number[];
		

		/**
		 * The maximum height and width to which the element can be resized.
		 */
		public maximumSize: Dimension;
		

		/**
		 * The minimum height and width to which the element can be resized.
		 */
		public minimumSize: Dimension;
		

		/**
		 * The preferred size, used by layout managers to determine the best size for each element.
		 */
		public preferredSize: Dimension;
		

		/**
		 * The current dimensions of this element.
		 */
		public size: Dimension;
		

		/**
		 * @readonly
		 * The bounds of this element relative to the top-level parent window.
		 */
		public windowBounds: Bounds;
		

		/**
		 * The alignment style for this element. If defined, this value overrides the alignChildren setting for the parent container.
		 */
		public alignment: string;
		

		/**
		 * @readonly
		 * An array of child ListItem elements.
		 */
		public children: any[];
		

		/**
		 * @readonly
		 * For a multi-column list box, the column properties.
		 */
		public columns: any;
		

		/**
		 * An object that contains one or more creation properties of the control (properties used only when the element is created).
		 */
		public properties: any;
		

		/**
		 * True if this element is enabled.
		 */
		public enabled: boolean;
		

		/**
		 * The help text that is displayed when the mouse hovers over the element.
		 */
		public helpTip: string;
		

		/**
		 * The number of pixels to indent the element during automatic layout.
		 */
		public indent: number;
		

		/**
		 * @readonly
		 * The parent element.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The window that this element belongs to.
		 */
		public window: Window;
		

		/**
		 * @readonly
		 * The element type; "listbox".
		 */
		public type: string;
	}

	/**
	 * Displays a single visible item. When you click the control, a list drops down or pops up, and allows you to select one of the other items in the list.
	 */
	class DropDownList {
		

		/**
		 * Adds an item or separator to the choices in this list.
		 * @return {ListItem}
		 * @param {string} type - The type of the child element.
		 * @param {string} text - The localizable text label for the item.
		 */
		public add(type: string, text?: string): ListItem;
		

		/**
		 * Retrieves an item object from the list that has a given text label.
		 * @return {ListItem}
		 * @param {string} text - The text string to match.
		 */
		public find(text: string): ListItem;
		

		/**
		 * Removes a child item from the list.
		 * @return {void}
		 * @param {any} what - The item or child to remove, specified by 0-based index, text value, or as a ListItem object.
		 */
		public remove(what: any): void;
		

		/**
		 * Removes all child items from the list.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Sends a notification message, simulating the specified user interaction event.
		 * @return {void}
		 * @param {string} eventName - The name of the control event handler to call.
		 */
		public notify(eventName?: string): void;
		

		/**
		 * Shows this element.
		 * @return {void}
		 */
		public show(): void;
		

		/**
		 * Hides this element.
		 * @return {void}
		 */
		public hide(): void;
		

		/**
		 * Registers an event handler for a particular type of event occuring in this element.
		 * @return {boolean}
		 * @param {string} eventName - The name of the event.
		 * @param {Function} handler - The function that handles the event.
		 * @param {boolean} capturePhase - When true, the handler is called only in the capturing phase of the event propagation., default: false  @default [false]
		 */
		public addEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
		

		/**
		 * Unregisters an event handler for a particular type of event occuring in this element.
		 * @return {boolean}
		 * @param {string} eventName - The name of the event.
		 * @param {Function} handler - The function that handles the event.
		 * @param {boolean} capturePhase - Whether to call the handler only in the capturing phase of the event propagation., default: false  @default [false]
		 */
		public removeEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
		

		/**
		 * Simulates the occurrence of an event in this target.
		 * @return {Event}
		 */
		public dispatchEvent(): Event;
		

		/**
		 * @readonly
		 * The array of choice items displayed in the drop-down or pop-up list.
		 */
		public items: ListItem[];
		

		/**
		 * The width and height in pixels of each item in the list.
		 */
		public itemSize: Dimension;
		

		/**
		 * The currently selected  list item.
		 */
		public selection: ListItem;
		

		/**
		 * True if this element is active.
		 */
		public active: boolean;
		

		/**
		 * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
		 */
		public shortcutKey: string;
		

		/**
		 * @readonly
		 * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
		 */
		public graphics: ScriptUIGraphics;
		

		/**
		 * True if this element is shown, false if it is hidden.
		 */
		public visible: boolean;
		

		/**
		 * The boundaries of the element, in parent-relative coordinates.
		 */
		public bounds: Bounds;
		

		/**
		 * The upper left corner of this element relative to its parent.
		 */
		public location: number[];
		

		/**
		 * The maximum height and width to which the element can be resized.
		 */
		public maximumSize: Dimension;
		

		/**
		 * The minimum height and width to which the element can be resized.
		 */
		public minimumSize: Dimension;
		

		/**
		 * The preferred size, used by layout managers to determine the best size for each element.
		 */
		public preferredSize: Dimension;
		

		/**
		 * The current dimensions of this element.
		 */
		public size: Dimension;
		

		/**
		 * @readonly
		 * The bounds of this element relative to the top-level parent window.
		 */
		public windowBounds: Bounds;
		

		/**
		 * The alignment style for this element. If defined, this value overrides the alignChildren setting for the parent container.
		 */
		public alignment: string;
		

		/**
		 * @readonly
		 * An array of child elements.
		 */
		public children: any[];
		

		/**
		 * An object that contains one or more creation properties of the container (properties used only when the element is created).
		 */
		public properties: any;
		

		/**
		 * True if this element is enabled.
		 */
		public enabled: boolean;
		

		/**
		 * The help text that is displayed when the mouse hovers over the element.
		 */
		public helpTip: string;
		

		/**
		 * The number of pixels to indent the element during automatic layout.
		 */
		public indent: number;
		

		/**
		 * @readonly
		 * The parent element.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The window that this element belongs to.
		 */
		public window: Window;
		

		/**
		 * @readonly
		 * The element type; "dropdownlist".
		 */
		public type: string;
	}

	/**
	 * An item in a list box, drop-down list, or tree view.
	 */
	class ListItem {
		

		/**
		 * The checked state of an item in a list.
		 */
		public checked: boolean;
		

		/**
		 * The expansion state of an item of type node that is a child of a TreeView list control.
		 */
		public expanded: boolean;
		

		/**
		 * @readonly
		 * The 0-based index of this item in the items collection of its parent list control.
		 */
		public index: number;
		

		/**
		 * The selection state of this item.
		 */
		public selected: boolean;
		

		/**
		 * An image object for an icon to display in the item.
		 */
		public image: ScriptUIImage;
		

		/**
		 * The label text to display for the item, a localizable string.
		 */
		public text: string;
		

		/**
		 * @readonly
		 * When the parent is a multi-column ListBox, this describes the labels for this selectable row in additional columns.
		 */
		public subItems: any[];
		

		/**
		 * An object that contains one or more creation properties of the item (properties used only when the element is created).
		 */
		public properties: any;
		

		/**
		 * @readonly
		 * The parent element, a list control.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The element type.
		 */
		public type: string;
	}

	/**
	 * A dual-state control showing a box that has a checkmark when the value is true, and is empty when the value is false.
	 */
	class Checkbox {
		

		/**
		 * Sends a notification message, simulating the specified user interaction event.
		 * @return {void}
		 * @param {string} eventName - The name of the control event handler to call.
		 */
		public notify(eventName?: string): void;
		

		/**
		 * Shows this element.
		 * @return {void}
		 */
		public show(): void;
		

		/**
		 * Hides this element.
		 * @return {void}
		 */
		public hide(): void;
		

		/**
		 * Registers an event handler for a particular type of event occuring in this element.
		 * @return {boolean}
		 * @param {string} eventName - The name of the event.
		 * @param {Function} handler - The function that handles the event.
		 * @param {boolean} capturePhase - When true, the handler is called only in the capturing phase of the event propagation., default: false  @default [false]
		 */
		public addEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
		

		/**
		 * Unregisters an event handler for a particular type of event occuring in this element.
		 * @return {boolean}
		 * @param {string} eventName - The name of the event.
		 * @param {Function} handler - The function that handles the event.
		 * @param {boolean} capturePhase - Whether to call the handler only in the capturing phase of the event propagation., default: false  @default [false]
		 */
		public removeEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
		

		/**
		 * Simulates the occurrence of an event in this target.
		 * @return {Event}
		 */
		public dispatchEvent(): Event;
		

		/**
		 * The selection state of the control.
		 */
		public value: boolean;
		

		/**
		 * A number of characters for which to reserve space when calculating the preferred size of the element.
		 */
		public characters: number;
		

		/**
		 * The default text justification style for child text elements.
		 */
		public justify: string;
		

		/**
		 * The text to display, a localizable string.
		 */
		public text: string;
		

		/**
		 * True if this element is active.
		 */
		public active: boolean;
		

		/**
		 * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
		 */
		public shortcutKey: string;
		

		/**
		 * @readonly
		 * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
		 */
		public graphics: ScriptUIGraphics;
		

		/**
		 * True if this element is shown, false if it is hidden.
		 */
		public visible: boolean;
		

		/**
		 * The boundaries of the element, in parent-relative coordinates.
		 */
		public bounds: Bounds;
		

		/**
		 * The upper left corner of this element relative to its parent.
		 */
		public location: number[];
		

		/**
		 * The maximum height and width to which the element can be resized.
		 */
		public maximumSize: Dimension;
		

		/**
		 * The minimum height and width to which the element can be resized.
		 */
		public minimumSize: Dimension;
		

		/**
		 * The preferred size, used by layout managers to determine the best size for each element.
		 */
		public preferredSize: Dimension;
		

		/**
		 * The current dimensions of this element.
		 */
		public size: Dimension;
		

		/**
		 * @readonly
		 * The bounds of this element relative to the top-level parent window.
		 */
		public windowBounds: Bounds;
		

		/**
		 * The alignment style for this element. If defined, this value overrides the alignChildren setting for the parent container.
		 */
		public alignment: string;
		

		/**
		 * @readonly
		 * An array of child elements.
		 */
		public children: any[];
		

		/**
		 * An object that contains one or more creation properties of the item (properties used only when the element is created).
		 */
		public properties: any;
		

		/**
		 * True if this element is enabled.
		 */
		public enabled: boolean;
		

		/**
		 * The help text that is displayed when the mouse hovers over the element.
		 */
		public helpTip: string;
		

		/**
		 * The number of pixels to indent the element during automatic layout.
		 */
		public indent: number;
		

		/**
		 * @readonly
		 * The parent element.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The window that this element belongs to.
		 */
		public window: Window;
		

		/**
		 * @readonly
		 * The element type; "checkbox".
		 */
		public type: string;
	}

	/**
	 * A scrollbar with a draggable scroll indicator and stepper buttons to move the indicator.
	 */
	class Scrollbar {
		

		/**
		 * Sends a notification message, simulating the specified user interaction event.
		 * @return {void}
		 * @param {string} eventName - The name of the control event handler to call.
		 */
		public notify(eventName?: string): void;
		

		/**
		 * Shows this element.
		 * @return {void}
		 */
		public show(): void;
		

		/**
		 * Hides this element.
		 * @return {void}
		 */
		public hide(): void;
		

		/**
		 * Registers an event handler for a particular type of event occuring in this element.
		 * @return {boolean}
		 * @param {string} eventName - The name of the event.
		 * @param {Function} handler - The function that handles the event.
		 * @param {boolean} capturePhase - When true, the handler is called only in the capturing phase of the event propagation., default: false  @default [false]
		 */
		public addEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
		

		/**
		 * Unregisters an event handler for a particular type of event occuring in this element.
		 * @return {boolean}
		 * @param {string} eventName - The name of the event.
		 * @param {Function} handler - The function that handles the event.
		 * @param {boolean} capturePhase - Whether to call the handler only in the capturing phase of the event propagation., default: false  @default [false]
		 */
		public removeEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
		

		/**
		 * Simulates the occurrence of an event in this target.
		 * @return {Event}
		 */
		public dispatchEvent(): Event;
		

		/**
		 * The amount by which to increment or decrement a scrollbar element's position when the user clicks a stepper button.
		 */
		public stepdelta: number;
		

		/**
		 * The amount to increment or decrement a scrollbar indicator's position when the user clicks ahead or behind the moveable element.
		 */
		public jumpdelta: number;
		

		/**
		 * The current position of the indicator.
		 */
		public value: number;
		

		/**
		 * The minimum value allowed in the value property.
		 */
		public minvalue: number;
		

		/**
		 * The maximum value allowed in the value property.
		 */
		public maxvalue: number;
		

		/**
		 * True if this element is active.
		 */
		public active: boolean;
		

		/**
		 * The key sequence that invokes the  onShortcutKey() callback for this element (in Windows only).
		 */
		public shortcutKey: string;
		

		/**
		 * @readonly
		 * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
		 */
		public graphics: ScriptUIGraphics;
		

		/**
		 * True if this element is shown, false if it is hidden.
		 */
		public visible: boolean;
		

		/**
		 * The boundaries of the element, in parent-relative coordinates.
		 */
		public bounds: Bounds;
		

		/**
		 * The upper left corner of this element relative to its parent.
		 */
		public location: number[];
		

		/**
		 * The maximum height and width to which the element can be resized.
		 */
		public maximumSize: Dimension;
		

		/**
		 * The minimum height and width to which the element can be resized.
		 */
		public minimumSize: Dimension;
		

		/**
		 * The preferred size, used by layout managers to determine the best size for each element.
		 */
		public preferredSize: Dimension;
		

		/**
		 * The current dimensions of this element.
		 */
		public size: Dimension;
		

		/**
		 * @readonly
		 * The bounds of this element relative to the top-level parent window.
		 */
		public windowBounds: Bounds;
		

		/**
		 * The alignment style for this element. If defined, this value overrides the alignChildren setting for the parent container.
		 */
		public alignment: string;
		

		/**
		 * @readonly
		 * An array of child elements.
		 */
		public children: any[];
		

		/**
		 * An object that contains one or more creation properties of the container (properties used only when the element is created).
		 */
		public properties: any;
		

		/**
		 * True if this element is enabled.
		 */
		public enabled: boolean;
		

		/**
		 * The help text that is displayed when the mouse hovers over the element.
		 */
		public helpTip: string;
		

		/**
		 * The number of pixels to indent the element during automatic layout.
		 */
		public indent: number;
		

		/**
		 * @readonly
		 * The parent element.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The window that this element belongs to.
		 */
		public window: Window;
		

		/**
		 * @readonly
		 * The element type, "scrollbar".
		 */
		public type: string;
	}

	/**
	 * A dual-state control, grouped with other radiobuttons, of which only one can be in the selected state.
	 */
	class RadioButton {
		

		/**
		 * Sends a notification message, simulating the specified user interaction event.
		 * @return {void}
		 * @param {string} eventName - The name of the control event handler to call.
		 */
		public notify(eventName?: string): void;
		

		/**
		 * Shows this element.
		 * @return {void}
		 */
		public show(): void;
		

		/**
		 * Hides this element.
		 * @return {void}
		 */
		public hide(): void;
		

		/**
		 * Registers an event handler for a particular type of event occuring in this element.
		 * @return {boolean}
		 * @param {string} eventName - The name of the event.
		 * @param {Function} handler - The function that handles the event.
		 * @param {boolean} capturePhase - When true, the handler is called only in the capturing phase of the event propagation., default: false  @default [false]
		 */
		public addEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
		

		/**
		 * Unregisters an event handler for a particular type of event occuring in this element.
		 * @return {boolean}
		 * @param {string} eventName - The name of the event.
		 * @param {Function} handler - The function that handles the event.
		 * @param {boolean} capturePhase - Whether to call the handler only in the capturing phase of the event propagation., default: false  @default [false]
		 */
		public removeEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
		

		/**
		 * Simulates the occurrence of an event in this target.
		 * @return {Event}
		 */
		public dispatchEvent(): Event;
		

		/**
		 * The selection state of this button, selected when true.
		 */
		public value: boolean;
		

		/**
		 * A number of characters for which to reserve space when calculating the preferred size of the element.
		 */
		public characters: number;
		

		/**
		 * The default text justification style for child text elements.
		 */
		public justify: string;
		

		/**
		 * The label text for this button, a localizable string.
		 */
		public text: string;
		

		/**
		 * True if this element is active.
		 */
		public active: boolean;
		

		/**
		 * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
		 */
		public shortcutKey: string;
		

		/**
		 * @readonly
		 * The graphics object that can be used to customize the element's appearance, in response to the onDraw event.
		 */
		public graphics: ScriptUIGraphics;
		

		/**
		 * True if this element is shown, false if it is hidden.
		 */
		public visible: boolean;
		

		/**
		 * The boundaries of the element, in parent-relative coordinates.
		 */
		public bounds: Bounds;
		

		/**
		 * The upper left corner of this element relative to its parent.
		 */
		public location: number[];
		

		/**
		 * The maximum height and width to which the element can be resized.
		 */
		public maximumSize: Dimension;
		

		/**
		 * The minimum height and width to which the element can be resized.
		 */
		public minimumSize: Dimension;
		

		/**
		 * The preferred size, used by layout managers to determine the best size for each element.
		 */
		public preferredSize: Dimension;
		

		/**
		 * The current dimensions of this element.
		 */
		public size: Dimension;
		

		/**
		 * @readonly
		 * The bounds of this element relative to the top-level parent window.
		 */
		public windowBounds: Bounds;
		

		/**
		 * The alignment style for this element. If defined, this value overrides the alignChildren setting for the parent container.
		 */
		public alignment: string;
		

		/**
		 * @readonly
		 * An array of child elements.
		 */
		public children: any[];
		

		/**
		 * An object that contains one or more creation properties of the container (properties used only when the element is created).
		 */
		public properties: any;
		

		/**
		 * True if this element is enabled.
		 */
		public enabled: boolean;
		

		/**
		 * The help text that is displayed when the mouse hovers over the element.
		 */
		public helpTip: string;
		

		/**
		 * The number of pixels to indent the element during automatic layout.
		 */
		public indent: number;
		

		/**
		 * @readonly
		 * The parent element.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The window that this element belongs to.
		 */
		public window: Window;
		

		/**
		 * @readonly
		 * The element type; "radiobutton".
		 */
		public type: string;
	}

	/**
	 * A slider bar that indicates a numeric value with a moveable position indicator.
	 */
	class Slider {
		

		/**
		 * Sends a notification message, simulating the specified user interaction event.
		 * @return {void}
		 * @param {string} eventName - The name of the control event handler to call.
		 */
		public notify(eventName?: string): void;
		

		/**
		 * Shows this element.
		 * @return {void}
		 */
		public show(): void;
		

		/**
		 * Hides this element.
		 * @return {void}
		 */
		public hide(): void;
		

		/**
		 * Registers an event handler for a particular type of event occuring in this element.
		 * @return {boolean}
		 * @param {string} eventName - The name of the event.
		 * @param {Function} handler - The function that handles the event.
		 * @param {boolean} capturePhase - When true, the handler is called only in the capturing phase of the event propagation., default: false  @default [false]
		 */
		public addEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
		

		/**
		 * Unregisters an event handler for a particular type of event occuring in this element.
		 * @return {boolean}
		 * @param {string} eventName - The name of the event.
		 * @param {Function} handler - The function that handles the event.
		 * @param {boolean} capturePhase - Whether to call the handler only in the capturing phase of the event propagation., default: false  @default [false]
		 */
		public removeEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
		

		/**
		 * Simulates the occurrence of an event in this target.
		 * @return {Event}
		 */
		public dispatchEvent(): Event;
		

		/**
		 * The current position of the indicator.
		 */
		public value: number;
		

		/**
		 * The minimum value allowed in the value property.
		 */
		public minvalue: number;
		

		/**
		 * The maximum value allowed in the value property.
		 */
		public maxvalue: number;
		

		/**
		 * True if this element is active.
		 */
		public active: boolean;
		

		/**
		 * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
		 */
		public shortcutKey: string;
		

		/**
		 * @readonly
		 * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
		 */
		public graphics: ScriptUIGraphics;
		

		/**
		 * True if this element is shown, false if it is hidden.
		 */
		public visible: boolean;
		

		/**
		 * The boundaries of the element, in parent-relative coordinates.
		 */
		public bounds: Bounds;
		

		/**
		 * The upper left corner of this element relative to its parent.
		 */
		public location: number[];
		

		/**
		 * The maximum height and width to which the element can be resized.
		 */
		public maximumSize: Dimension;
		

		/**
		 * The minimum height and width to which the element can be resized.
		 */
		public minimumSize: Dimension;
		

		/**
		 * The preferred size, used by layout managers to determine the best size for each element.
		 */
		public preferredSize: Dimension;
		

		/**
		 * The current dimensions of this element.
		 */
		public size: Dimension;
		

		/**
		 * @readonly
		 * The bounds of this element relative to the top-level parent window.
		 */
		public windowBounds: Bounds;
		

		/**
		 * The alignment style for this element. If defined, this value overrides the alignChildren setting for the parent container.
		 */
		public alignment: string;
		

		/**
		 * @readonly
		 * An array of child elements.
		 */
		public children: any[];
		

		/**
		 * An object that contains one or more creation properties of the container (properties used only when the element is created).
		 */
		public properties: any;
		

		/**
		 * True if this element is enabled.
		 */
		public enabled: boolean;
		

		/**
		 * The help text that is displayed when the mouse hovers over the element.
		 */
		public helpTip: string;
		

		/**
		 * The number of pixels to indent the element during automatic layout.
		 */
		public indent: number;
		

		/**
		 * @readonly
		 * The parent element.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The window that this element belongs to.
		 */
		public window: Window;
		

		/**
		 * @readonly
		 * The element type, "slider".
		 */
		public type: string;
	}

	/**
	 * A horizontal bar with an indicator that shows the progress of an operation.
	 */
	class Progressbar {
		

		/**
		 * Shows this element.
		 * @return {void}
		 */
		public show(): void;
		

		/**
		 * Hides this element.
		 * @return {void}
		 */
		public hide(): void;
		

		/**
		 * Registers an event handler for a particular type of event occuring in this element.
		 * @return {boolean}
		 * @param {string} eventName - The name of the event.
		 * @param {Function} handler - The function that handles the event.
		 * @param {boolean} capturePhase - When true, the handler is called only in the capturing phase of the event propagation., default: false  @default [false]
		 */
		public addEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
		

		/**
		 * Unregisters an event handler for a particular type of event occuring in this element.
		 * @return {boolean}
		 * @param {string} eventName - The name of the event.
		 * @param {Function} handler - The function that handles the event.
		 * @param {boolean} capturePhase - Whether to call the handler only in the capturing phase of the event propagation., default: false  @default [false]
		 */
		public removeEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
		

		/**
		 * Simulates the occurrence of an event in this target.
		 * @return {Event}
		 */
		public dispatchEvent(): Event;
		

		/**
		 * The current position of the indicator.
		 */
		public value: number;
		

		/**
		 * The minimum value in the range; always 0. If set to a different value, it is ignored.
		 */
		public minvalue: number;
		

		/**
		 * The maximum value in the range. Default is 100.
		 */
		public maxvalue: number;
		

		/**
		 * @readonly
		 * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
		 */
		public graphics: ScriptUIGraphics;
		

		/**
		 * True if this element is shown, false if it is hidden.
		 */
		public visible: boolean;
		

		/**
		 * The boundaries of the element, in parent-relative coordinates.
		 */
		public bounds: Bounds;
		

		/**
		 * The upper left corner of this element relative to its parent.
		 */
		public location: number[];
		

		/**
		 * The maximum height and width to which the element can be resized.
		 */
		public maximumSize: Dimension;
		

		/**
		 * The minimum height and width to which the element can be resized.
		 */
		public minimumSize: Dimension;
		

		/**
		 * The preferred size, used by layout managers to determine the best size for each element.
		 */
		public preferredSize: Dimension;
		

		/**
		 * The current dimensions of this element.
		 */
		public size: Dimension;
		

		/**
		 * @readonly
		 * The bounds of this element relative to the top-level parent window.
		 */
		public windowBounds: Bounds;
		

		/**
		 * The alignment style for this element. If defined, this value overrides the alignChildren setting for the parent container.
		 */
		public alignment: string;
		

		/**
		 * @readonly
		 * An array of child elements.
		 */
		public children: any[];
		

		/**
		 * An object that contains one or more creation properties of the container (properties used only when the element is created).
		 */
		public properties: any;
		

		/**
		 * True if this element is enabled.
		 */
		public enabled: boolean;
		

		/**
		 * The help text that is displayed when the mouse hovers over the element.
		 */
		public helpTip: string;
		

		/**
		 * The number of pixels to indent the element during automatic layout.
		 */
		public indent: number;
		

		/**
		 * @readonly
		 * The parent element.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The window that this element belongs to.
		 */
		public window: Window;
		

		/**
		 * @readonly
		 * The element type, "progessbar".
		 */
		public type: string;
	}

	/**
	 * A hierarchical list whose items can contain child items.
	 */
	class TreeView {
		

		/**
		 * Adds an item to the top-level choices in this list.
		 * @return {ListItem}
		 * @param {string} type - The type of the child element, the string "item".
		 * @param {string} text - The localizable text label for the item.
		 */
		public add(type: string, text?: string): ListItem;
		

		/**
		 * Retrieves an item object from the list that has a given text label.
		 * @return {ListItem}
		 * @param {string} text - The text string to match.
		 */
		public find(text: string): ListItem;
		

		/**
		 * Removes a child item from the list.
		 * @return {void}
		 * @param {any} what - The item or child to remove, specified by 0-based index in the top-level item list, text value, or as a ListItem object.
		 */
		public remove(what: any): void;
		

		/**
		 * Removes all child items from the list.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Sends a notification message, simulating the specified user interaction event.
		 * @return {void}
		 * @param {string} eventName - The name of the control event handler to call.
		 */
		public notify(eventName?: string): void;
		

		/**
		 * Shows this element.
		 * @return {void}
		 */
		public show(): void;
		

		/**
		 * Hides this element.
		 * @return {void}
		 */
		public hide(): void;
		

		/**
		 * Registers an event handler for a particular type of event occuring in this element.
		 * @return {boolean}
		 * @param {string} eventName - The name of the event.
		 * @param {Function} handler - The function that handles the event.
		 * @param {boolean} capturePhase - When true, the handler is called only in the capturing phase of the event propagation., default: false  @default [false]
		 */
		public addEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
		

		/**
		 * Unregisters an event handler for a particular type of event occuring in this element.
		 * @return {boolean}
		 * @param {string} eventName - The name of the event.
		 * @param {Function} handler - The function that handles the event.
		 * @param {boolean} capturePhase - Whether to call the handler only in the capturing phase of the event propagation., default: false  @default [false]
		 */
		public removeEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
		

		/**
		 * Simulates the occurrence of an event in this target.
		 * @return {Event}
		 */
		public dispatchEvent(): Event;
		

		/**
		 * @readonly
		 * The array of top-level items displayed in the list.
		 */
		public items: ListItem[];
		

		/**
		 * The width and height in pixels of each item in the list.
		 */
		public itemSize: Dimension;
		

		/**
		 * The currently selected  list item.
		 */
		public selection: ListItem;
		

		/**
		 * True if this element is active.
		 */
		public active: boolean;
		

		/**
		 * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
		 */
		public shortcutKey: string;
		

		/**
		 * @readonly
		 * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
		 */
		public graphics: ScriptUIGraphics;
		

		/**
		 * True if this element is shown, false if it is hidden.
		 */
		public visible: boolean;
		

		/**
		 * The boundaries of the element, in parent-relative coordinates.
		 */
		public bounds: Bounds;
		

		/**
		 * The upper left corner of this element relative to its parent.
		 */
		public location: number[];
		

		/**
		 * The maximum height and width to which the element can be resized.
		 */
		public maximumSize: Dimension;
		

		/**
		 * The minimum height and width to which the element can be resized.
		 */
		public minimumSize: Dimension;
		

		/**
		 * The preferred size, used by layout managers to determine the best size for each element.
		 */
		public preferredSize: Dimension;
		

		/**
		 * The current dimensions of this element.
		 */
		public size: Dimension;
		

		/**
		 * @readonly
		 * The bounds of this element relative to the top-level parent window.
		 */
		public windowBounds: Bounds;
		

		/**
		 * The alignment style for this element. If defined, this value overrides the alignChildren setting for the parent container.
		 */
		public alignment: string;
		

		/**
		 * @readonly
		 * An array of child elements.
		 */
		public children: any[];
		

		/**
		 * An object that contains one or more creation properties of the control (properties used only when the element is created).
		 */
		public properties: any;
		

		/**
		 * True if this element is enabled.
		 */
		public enabled: boolean;
		

		/**
		 * The help text that is displayed when the mouse hovers over the element.
		 */
		public helpTip: string;
		

		/**
		 * The number of pixels to indent the element during automatic layout.
		 */
		public indent: number;
		

		/**
		 * @readonly
		 * The parent element.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The window that this element belongs to.
		 */
		public window: Window;
		

		/**
		 * @readonly
		 * The element type, "treeview".
		 */
		public type: string;
	}

	/**
	 * A control that contains a Flash Player, which can load and play Flash movies stored in SWF files.
	 */
	class FlashPlayer {
		

		/**
		 * Invokes an ActionScript function defined in the Flash application.
		 * @return {any}
		 * @param {string} name - The name of a Flash ActionScript function that has been registered with the ExternalInterface object by the currently loaded SWF file.
		 * @param {any} argument - An argument to pass through to the function.
		 */
		public invokePlayerFunction(name: string, argument?: any): any;
		

		/**
		 * Loads a movie into the Flash Player, and begins playing it.
		 * @return {void}
		 * @param {javascript.File} file - The File object for the SWF file to load.
		 */
		public loadMovie(file: javascript.File): void;
		

		/**
		 * Restarts a movie that has been stopped.
		 * @return {void}
		 * @param {boolean} rewind - When true, restarts the movie from the beginning; otherwise, starts playing from the	point where it was stopped., default: false  @default [false]
		 */
		public playMovie(rewind: boolean): void;
		

		/**
		 * Halts playback of the current movie.
		 * @return {void}
		 */
		public stopMovie(): void;
		

		/**
		 * Sends a notification message, simulating the specified user interaction event.
		 * @return {void}
		 * @param {string} eventName - The name of the control event handler to call.
		 */
		public notify(eventName?: string): void;
		

		/**
		 * Shows this element.
		 * @return {void}
		 */
		public show(): void;
		

		/**
		 * Hides this element.
		 * @return {void}
		 */
		public hide(): void;
		

		/**
		 * Registers an event handler for a particular type of event occuring in this element.
		 * @return {boolean}
		 * @param {string} eventName - The name of the event.
		 * @param {Function} handler - The function that handles the event.
		 * @param {boolean} capturePhase - When true, the handler is called only in the capturing phase of the event propagation., default: false  @default [false]
		 */
		public addEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
		

		/**
		 * Unregisters an event handler for a particular type of event occuring in this element.
		 * @return {boolean}
		 * @param {string} eventName - The name of the event.
		 * @param {Function} handler - The function that handles the event.
		 * @param {boolean} capturePhase - Whether to call the handler only in the capturing phase of the event propagation., default: false  @default [false]
		 */
		public removeEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
		

		/**
		 * Simulates the occurrence of an event in this target.
		 * @return {Event}
		 */
		public dispatchEvent(): Event;
		

		/**
		 * True if this element is active.
		 */
		public active: boolean;
		

		/**
		 * True if this element is shown, false if it is hidden.
		 */
		public visible: boolean;
		

		/**
		 * The boundaries of the element, in parent-relative coordinates.
		 */
		public bounds: Bounds;
		

		/**
		 * The upper left corner of this element relative to its parent.
		 */
		public location: number[];
		

		/**
		 * The maximum height and width to which the element can be resized.
		 */
		public maximumSize: Dimension;
		

		/**
		 * The minimum height and width to which the element can be resized.
		 */
		public minimumSize: Dimension;
		

		/**
		 * The preferred size, used by layout managers to determine the best size for each element.
		 */
		public preferredSize: Dimension;
		

		/**
		 * The current dimensions of this element.
		 */
		public size: Dimension;
		

		/**
		 * @readonly
		 * The bounds of this element relative to the top-level parent window.
		 */
		public windowBounds: Bounds;
		

		/**
		 * The alignment style for this element. If defined, this value overrides the alignChildren setting for the parent container.
		 */
		public alignment: string;
		

		/**
		 * An object that contains one or more creation properties of the container (properties used only when the element is created).
		 */
		public properties: any;
		

		/**
		 * True if this element is enabled.
		 */
		public enabled: boolean;
		

		/**
		 * The help text that is displayed when the mouse hovers over the element.
		 */
		public helpTip: string;
		

		/**
		 * The number of pixels to indent the element during automatic layout.
		 */
		public indent: number;
		

		/**
		 * @readonly
		 * The parent element.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The window that this element belongs to.
		 */
		public window: Window;
		

		/**
		 * @readonly
		 * The element type, "flashplayer".
		 */
		public type: string;
	}

	/**
	 * A container for other controls within a window.
	 */
	class Group {
		

		/**
		 * Shows this element.
		 * @return {void}
		 */
		public show(): void;
		

		/**
		 * Hides this element.
		 * @return {void}
		 */
		public hide(): void;
		

		/**
		 * Adds a child element to this container.
		 * @return {any}
		 * @param {string} type - The type of the child element, as specified for the type property.
		 * @param {Bounds} bounds - A bounds specification that describes the size and position of the new control or container, relative to its parent.
		 * @param {string} text - The text or label, a localizable string.
		 * @param {any} properties - An object that contains one or more creation properties of the new child (properties used only when the element is created).
		 */
		public add(type: string, bounds?: Bounds, text?: string, properties?: any): any;
		

		/**
		 * Removes the specified child control from this group's children array.
		 * @return {void}
		 * @param {any} what - The child control to remove, specified by 0-based index, text property value, or as a control object.
		 */
		public remove(what: any): void;
		

		/**
		 * Registers an event handler for a particular type of event occuring in this element.
		 * @return {boolean}
		 * @param {string} eventName - The name of the event.
		 * @param {Function} handler - The function that handles the event.
		 * @param {boolean} capturePhase - When true, the handler is called only in the capturing phase of the event propagation., default: false  @default [false]
		 */
		public addEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
		

		/**
		 * Unregisters an event handler for a particular type of event occuring in this element.
		 * @return {boolean}
		 * @param {string} eventName - The name of the event.
		 * @param {Function} handler - The function that handles the event.
		 * @param {boolean} capturePhase - Whether to call the handler only in the capturing phase of the event propagation., default: false  @default [false]
		 */
		public removeEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
		

		/**
		 * Simulates the occurrence of an event in this target.
		 * @return {Event}
		 */
		public dispatchEvent(): Event;
		

		/**
		 * @readonly
		 * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
		 */
		public graphics: ScriptUIGraphics;
		

		/**
		 * True if this element is shown, false if it is hidden.
		 */
		public visible: boolean;
		

		/**
		 * The boundaries of the element, in parent-relative coordinates.
		 */
		public bounds: Bounds;
		

		/**
		 * The upper left corner of this element relative to its parent.
		 */
		public location: number[];
		

		/**
		 * The maximum height and width to which the element can be resized.
		 */
		public maximumSize: Dimension;
		

		/**
		 * The minimum height and width to which the element can be resized.
		 */
		public minimumSize: Dimension;
		

		/**
		 * The preferred size, used by layout managers to determine the best size for each element.
		 */
		public preferredSize: Dimension;
		

		/**
		 * The current dimensions of this element.
		 */
		public size: Dimension;
		

		/**
		 * @readonly
		 * The bounds of this element relative to the top-level parent window.
		 */
		public windowBounds: Bounds;
		

		/**
		 * Tells the layout manager how unlike-sized children of this container should be aligned within a column or row.
		 */
		public alignChildren: string;
		

		/**
		 * @readonly
		 * An array of child elements.
		 */
		public children: any[];
		

		/**
		 * The layout manager for this container.
		 */
		public layout: LayoutManager;
		

		/**
		 * The number of pixels between the edges of a container and the outermost child elements.
		 */
		public margins: number;
		

		/**
		 * The layout orientation of children in a container.
		 */
		public orientation: string;
		

		/**
		 * The number of pixels separating one child element from its adjacent sibling element.
		 */
		public spacing: number;
		

		/**
		 * The alignment style for this element. If defined, this value overrides the alignChildren setting for the parent container.
		 */
		public alignment: string;
		

		/**
		 * An object that contains one or more creation properties of the control (properties used only when the element is created).
		 */
		public properties: any;
		

		/**
		 * True if this element is enabled.
		 */
		public enabled: boolean;
		

		/**
		 * The help text that is displayed when the mouse hovers over the element.
		 */
		public helpTip: string;
		

		/**
		 * The number of pixels to indent the element during automatic layout.
		 */
		public indent: number;
		

		/**
		 * @readonly
		 * The parent element.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The window that this element belongs to.
		 */
		public window: Window;
		

		/**
		 * @readonly
		 * The element type; "group".
		 */
		public type: string;
	}

	/**
	 * A container for other types of controls, with an optional frame.
	 */
	class Panel {
		

		/**
		 * Shows this element.
		 * @return {void}
		 */
		public show(): void;
		

		/**
		 * Hides this element.
		 * @return {void}
		 */
		public hide(): void;
		

		/**
		 * Adds a child element to this container.
		 * @return {any}
		 * @param {string} type - The type of the child element, as specified for the type property.
		 * @param {Bounds} bounds - A bounds specification that describes the size and position of the new control or container, relative to its parent.
		 * @param {string} text - The text or label, a localizable string.
		 * @param {any} properties - An object that contains one or more creation properties of the new child (properties used only when the element is created).
		 */
		public add(type: string, bounds?: Bounds, text?: string, properties?: any): any;
		

		/**
		 * Removes the specified child control from this group's children array.
		 * @return {void}
		 * @param {any} what - The child control to remove, specified by 0-based index, text property value, or as a control object.
		 */
		public remove(what: any): void;
		

		/**
		 * Registers an event handler for a particular type of event occuring in this element.
		 * @return {boolean}
		 * @param {string} eventName - The name of the event.
		 * @param {Function} handler - The function that handles the event.
		 * @param {boolean} capturePhase - When true, the handler is called only in the capturing phase of the event propagation., default: false  @default [false]
		 */
		public addEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
		

		/**
		 * Unregisters an event handler for a particular type of event occuring in this element.
		 * @return {boolean}
		 * @param {string} eventName - The name of the event.
		 * @param {Function} handler - The function that handles the event.
		 * @param {boolean} capturePhase - Whether to call the handler only in the capturing phase of the event propagation., default: false  @default [false]
		 */
		public removeEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
		

		/**
		 * Simulates the occurrence of an event in this target.
		 * @return {Event}
		 */
		public dispatchEvent(): Event;
		

		/**
		 * Reserve space for the specified number of characters; affects calculation of preferredSize .
		 */
		public characters: number;
		

		/**
		 * The default text justification style for child text elements.
		 */
		public justify: string;
		

		/**
		 * The title or label text, a localizable string.
		 */
		public text: string;
		

		/**
		 * @readonly
		 * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
		 */
		public graphics: ScriptUIGraphics;
		

		/**
		 * True if this element is shown, false if it is hidden.
		 */
		public visible: boolean;
		

		/**
		 * The boundaries of the element, in parent-relative coordinates.
		 */
		public bounds: Bounds;
		

		/**
		 * The upper left corner of this element's frame relative to its parent.
		 */
		public location: number[];
		

		/**
		 * The maximum height and width to which the element can be resized.
		 */
		public maximumSize: Dimension;
		

		/**
		 * The minimum height and width to which the element can be resized.
		 */
		public minimumSize: Dimension;
		

		/**
		 * The preferred size, used by layout managers to determine the best size for each element.
		 */
		public preferredSize: Dimension;
		

		/**
		 * The current dimensions of this element.
		 */
		public size: Dimension;
		

		/**
		 * @readonly
		 * The bounds of this element relative to the top-level parent window.
		 */
		public windowBounds: Bounds;
		

		/**
		 * Specifies how to align the child elements.
		 */
		public alignChildren: string;
		

		/**
		 * @readonly
		 * An array of child elements.
		 */
		public children: any[];
		

		/**
		 * The layout manager for this container.
		 */
		public layout: LayoutManager;
		

		/**
		 * The number of pixels between the edges of a container and the outermost child elements.
		 */
		public margins: number;
		

		/**
		 * The layout orientation of children in a container.
		 */
		public orientation: string;
		

		/**
		 * The number of pixels separating one child element from its adjacent sibling element.
		 */
		public spacing: number;
		

		/**
		 * The alignment style for this element. If defined, this value overrides the alignChildren setting for the parent container.
		 */
		public alignment: string;
		

		/**
		 * An object that contains one or more creation properties of the control (properties used only when the element is created).
		 */
		public properties: any;
		

		/**
		 * True if this element is enabled.
		 */
		public enabled: boolean;
		

		/**
		 * The help text that is displayed when the mouse hovers over the element.
		 */
		public helpTip: string;
		

		/**
		 * The number of pixels to indent the element during automatic layout.
		 */
		public indent: number;
		

		/**
		 * @readonly
		 * The parent element.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The window that this element belongs to.
		 */
		public window: Window;
		

		/**
		 * @readonly
		 * The element type; "panel".
		 */
		public type: string;
	}

	/**
	 * Defines the location of a window or UI element. Contains a 2-element array.
	 */
	class Point {
		

		/**
		 * The horizontal coordinate, a pixel offset from the origin of the element's coordinate space.
		 */
		public x: number;
		

		/**
		 * The vertical coordinate, a pixel offset from the origin of the element's coordinate space.
		 */
		public y: number;
		

		/**
		 * The left coordinate.
		 */
		public left: number;
		

		/**
		 * The top coordinate.
		 */
		public top: number;
		

		/**
		 * @readonly
		 * The array length.
		 */
		public length: number;
	}

	/**
	 * Defines the size of a window or UI element. Contains a 2-element array.
	 */
	class Dimension {
		

		/**
		 * The width in pixels.
		 */
		public width: number;
		

		/**
		 * The height in pixels.
		 */
		public height: number;
		

		/**
		 * @readonly
		 * The array length.
		 */
		public length: number;
	}

	/**
	 * Defines the boundaries of a window within the screen’s coordinate space, or of a UI element within the container’s coordinate space.
	 */
	class Bounds {
		

		/**
		 * The horizontal coordinate, a pixel offset from the origin of the element's coordinate space.
		 */
		public x: number;
		

		/**
		 * The vertical coordinate, a pixel offset from the origin of the element's coordinate space.
		 */
		public y: number;
		

		/**
		 * The width in pixels.
		 */
		public width: number;
		

		/**
		 * The height in pixels.
		 */
		public height: number;
		

		/**
		 * The horizontal coordinate, a pixel offset from the origin of the element's coordinate space.
		 */
		public left: number;
		

		/**
		 * The width in pixels.
		 */
		public right: number;
		

		/**
		 * The height in pixels.
		 */
		public top: number;
		

		/**
		 * The vertical coordinate, a pixel offset from the origin of the element's coordinate space.
		 */
		public bottom: number;
		

		/**
		 * @readonly
		 * The array length.
		 */
		public length: number;
	}

	/**
	 * Encapsulates input event information for an event that propagates through a container and control hierarchy.
	 */
	class UIEvent {
		

		/**
		 * @constructor
		 * Creates an event.
		 * @return {UIEvent}
		 * @param {string} type - The event type. See UIEvent.type property.
		 * @param {boolean} captures - Set to true if this event can be captured., default: false  @default [false]
		 * @param {boolean} bubbles - Set to true if the event bubbles., default: false  @default [false]
		 * @param {any} view - The ScriptUI element that this event relates to.
		 * @param {number} detail - The click count for a mouse-click event.
		 */
		public constructor(type: string, captures: boolean, bubbles: boolean, view?: any, detail?: number);
		

		/**
		 * Prevents the default action associated with this event from being called.
		 * @return {void}
		 */
		public preventDefault(): void;
		

		/**
		 * Stops the propagation of this event.
		 * @return {void}
		 */
		public stopPropagation(): void;
		

		/**
		 * Initializes a UI event as a core W3C event.
		 * @return {void}
		 * @param {string} type - The event type.
		 * @param {boolean} captures - Set to true if this event can be captured., default: false  @default [false]
		 * @param {boolean} bubbles - Set to true if the event bubbles., default: false  @default [false]
		 * @param {boolean} cancelable - Set to true if the default action is cancelable., default: false  @default [false]
		 */
		public initEvent(type: string, captures: boolean, bubbles: boolean, cancelable: boolean): void;
		

		/**
		 * Initializes an event.
		 * @return {void}
		 * @param {string} type - The event type.
		 * @param {boolean} captures - Set to true if this event can be captured., default: false  @default [false]
		 * @param {boolean} bubbles - Set to true if the event bubbles., default: false  @default [false]
		 * @param {any} view - The ScriptUI element that this event relates to.
		 * @param {number} detail - The click count for a mouse-click event.
		 */
		public initUIEvent(type: string, captures: boolean, bubbles: boolean, view?: any, detail?: number): void;
		

		/**
		 * @readonly
		 * True if this event can be captured.
		 */
		public captures: boolean;
		

		/**
		 * @readonly
		 * True if the event is of a type that bubbles.
		 */
		public bubbles: boolean;
		

		/**
		 * @readonly
		 * True if the default action associated with the event can be canceled with preventDefault().
		 */
		public cancelable: boolean;
		

		/**
		 * @readonly
		 * The event target object which is currently handling the event. During capturing and bubbling, this is different from the property target.
		 */
		public currentTarget: boolean;
		

		/**
		 * @readonly
		 * The current phase of event propagation; one of none, target, capture, bubble.
		 */
		public eventPhase: string;
		

		/**
		 * @readonly
		 * The event target object for this event.
		 */
		public target: any;
		

		/**
		 * @readonly
		 * The date and time at which the event occurred.
		 */
		public timeStamp: Date;
		

		/**
		 * @readonly
		 * The name of the event that this  object represents.
		 */
		public type: string;
		

		/**
		 * @readonly
		 * The ScriptUI element that this event relates to.
		 */
		public view: any;
		

		/**
		 * @readonly
		 * The click count for a mouse-click event.
		 */
		public detail: any;
	}

	/**
	 * Base class for UIEvent.
	 */
	class Event {
		

		/**
		 * @readonly
		 */
		public static NOT_DISPATCHING: any;
		

		/**
		 * @readonly
		 */
		public NOT_DISPATCHING: any;
		

		/**
		 * @readonly
		 */
		public static CAPTURING_PHASE: any;
		

		/**
		 * @readonly
		 */
		public CAPTURING_PHASE: any;
		

		/**
		 * @readonly
		 */
		public static AT_TARGET: any;
		

		/**
		 * @readonly
		 */
		public AT_TARGET: any;
		

		/**
		 * @readonly
		 */
		public static BUBBLING_PHASE: any;
		

		/**
		 * @readonly
		 */
		public BUBBLING_PHASE: any;
		

		/**
		 * Prevents the default action associated with this event from being called.
		 * @return {void}
		 */
		public preventDefault(): void;
		

		/**
		 * Stops the propagation of this event.
		 * @return {void}
		 */
		public stopPropagation(): void;
		

		/**
		 * @readonly
		 * True if this event can be captured.
		 */
		public captures: boolean;
		

		/**
		 * @readonly
		 * True if the event is of a type that bubbles.
		 */
		public bubbles: boolean;
		

		/**
		 * @readonly
		 * True if the default action associated with the event can be canceled with preventDefault().
		 */
		public cancelable: boolean;
		

		/**
		 * @readonly
		 * The event target object which is currently handling the event. During capturing and bubbling, this is different from the property target.
		 */
		public currentTarget: boolean;
		

		/**
		 * @readonly
		 * The current phase of event propagation; one of none, target, capture, bubble.
		 */
		public eventPhase: string;
		

		/**
		 * @readonly
		 * The event target object for this event.
		 */
		public target: any;
		

		/**
		 * @readonly
		 * The date and time at which the event occurred.
		 */
		public timeStamp: Date;
		

		/**
		 * @readonly
		 * The name of the event that this object represents.
		 */
		public type: string;
	}

	/**
	 * Defines attributes of the ScriptUI environment.
	 */
	class Environment {
		

		/**
		 * @readonly
		 * An object that reports the active state of the keyboard at any time.
		 */
		public keyboardState: KeyboardState;
	}

	/**
	 * Provides access to objects used in the ScriptUI event system.
	 */
	class Events {
		

		/**
		 * Creates an instance of the specified Event subclass.
		 * @return {Event}
		 * @param {string} eventType - The name of an event type: one of "UIEvent", "KeyboardEvent", or "MouseEvent".
		 */
		public createEvent(eventType: string): Event;
	}

	/**
	 * Reports the active state of the keyboard.
	 */
	class KeyboardState {
		

		/**
		 * @readonly
		 * A string containing the name of the currently pressed key, such as "a", or an empty string.
		 */
		public keyName: string;
		

		/**
		 * @readonly
		 * True if the Shift key is pressed.
		 */
		public shiftKey: boolean;
		

		/**
		 * @readonly
		 * True if the Ctrl key is pressed.
		 */
		public ctrlKey: boolean;
		

		/**
		 * @readonly
		 * True if the Alt or Option key is pressed.
		 */
		public altKey: boolean;
		

		/**
		 * @readonly
		 * True if the Cmd key (in Mac OS) or Windows key (in Windows) is pressed.
		 */
		public metaKey: boolean;
	}
}

declare module omv {

	/**
	 * The screen mode.
	 * @readonly
	 * @enum {number}
	 */
	enum ScreenMode {
		/**
		 * Display multiple windows.
		 */
		MULTIWINDOW = 1,
		/**
		 * Full screen with menu bar.
		 */
		DESKTOP = 2,
		/**
		 * Full screen without menu bar.
		 */
		FULLSCREEN = 3,
	}

	/**
	 * The color model.
	 * @readonly
	 * @enum {number}
	 */
	enum ColorType {
		None = 6,
		CMYK = 1,
		GRAY = 0,
		RGB = 5,
		SPOT = 3,
		PATTERN = 2,
		GRADIENT = 4,
	}

	/**
	 * The color spaces available for documents.
	 * @readonly
	 * @enum {number}
	 */
	enum DocumentColorSpace {
		/**
		 * RGB document color space.
		 */
		RGB = 1,
		/**
		 * CMYK document color space.
		 */
		CMYK = 2,
	}

	/**
	 * The preset types available for new documents.
	 * @readonly
	 * @enum {number}
	 */
	enum DocumentPresetType {
		/**
		 * The default Print document preset.
		 */
		Print = 1,
		/**
		 * The default Web document preset.
		 */
		Web = 2,
		/**
		 * The default Mobile document preset.
		 */
		Mobile = 3,
		/**
		 * The default Video and Film document preset.
		 */
		Video = 4,
		/**
		 * The default CMYK document preset.
		 */
		BasicCMYK = 5,
		/**
		 * The default RGB document preset.
		 */
		BasicRGB = 6,
	}

	/**
	 * The raster resolutions available when creating a new document.
	 * @readonly
	 * @enum {number}
	 */
	enum DocumentRasterResolution {
		/**
		 * Low raster resolution, 72 PPI.
		 */
		ScreenResolution = 1,
		/**
		 * Medium raster resolution, 150 PPI.
		 */
		MediumResolution = 2,
		/**
		 * High raster resolution, 300 PPI.
		 */
		HighResolution = 3,
	}

	/**
	 * The transparency grid for the new document, in video presets.
	 * @readonly
	 * @enum {number}
	 */
	enum DocumentTransparencyGrid {
		/**
		 * No grids.
		 */
		TransparencyGridNone = 0,
		/**
		 * Light grid colors.
		 */
		TransparencyGridLight = 1,
		/**
		 * Medium grid colors.
		 */
		TransparencyGridMedium = 2,
		/**
		 * Dark color grids.
		 */
		TransparencyGridDark = 3,
		/**
		 * Red grids.
		 */
		TransparencyGridRed = 4,
		/**
		 * Orange grids.
		 */
		TransparencyGridOrange = 5,
		/**
		 * Green grids.
		 */
		TransparencyGridGreen = 6,
		/**
		 * Blue grids.
		 */
		TransparencyGridBlue = 7,
		/**
		 * Purple grids.
		 */
		TransparencyGridPurple = 8,
	}

	/**
	 * The preview modes available when creating a new document.
	 * @readonly
	 * @enum {number}
	 */
	enum DocumentPreviewMode {
		/**
		 * Default Preview mode.
		 */
		DefaultPreview = 1,
		/**
		 * Pixel Preview mode.
		 */
		PixelPreview = 2,
		/**
		 * Overprint Preview Mode.
		 */
		OverprintPreview = 3,
	}

	/**
	 * The layout of artboards in document.
	 * @readonly
	 * @enum {number}
	 */
	enum DocumentArtboardLayout {
		/**
		 * Arrange artboards in Grid by Row pattern.
		 */
		GridByRow = 1,
		/**
		 * Arrange artboards in Grid by Column pattern.
		 */
		GridByCol = 2,
		/**
		 * Arrange artboards in a single row.
		 */
		Row = 3,
		/**
		 * Arrange artboards in a single column.
		 */
		Column = 4,
		/**
		 * Arrange artboards in Grid by Row pattern from right-to-left.
		 */
		RLGridByRow = 5,
		/**
		 * Arrange artboards in Grid by Column pattern from right-to-left.
		 */
		RLGridByCol = 6,
		/**
		 * Arrange artboards in a single row from right-to-left.
		 */
		RLRow = 7,
	}

	/**
	 * The color space.
	 * @readonly
	 * @enum {number}
	 */
	enum ImageColorSpace {
		/**
		 * Gray color space.
		 */
		GrayScale = 1,
		/**
		 * RGB color space.
		 */
		RGB = 2,
		/**
		 * CMYK color space.
		 */
		CMYK = 3,
		/**
		 * LAB color space.
		 */
		LAB = 4,
		/**
		 * Separation color space.
		 */
		Separation = 5,
		/**
		 * DeviceN color space.
		 */
		DeviceN = 6,
		/**
		 * Indexed color space.
		 */
		Indexed = 7,
	}

	/**
	 * The stroke cap.
	 * @readonly
	 * @enum {number}
	 */
	enum StrokeCap {
		/**
		 * Butted cap.
		 */
		BUTTENDCAP = 1,
		/**
		 * Rounded cap.
		 */
		ROUNDENDCAP = 2,
		/**
		 * Projecting cap.
		 */
		PROJECTINGENDCAP = 3,
	}

	/**
	 * The stroke joint.
	 * @readonly
	 * @enum {number}
	 */
	enum StrokeJoin {
		/**
		 * Mitered joints.
		 */
		MITERENDJOIN = 1,
		/**
		 * Rounded joints.
		 */
		ROUNDENDJOIN = 2,
		/**
		 * Beveled joints.
		 */
		BEVELENDJOIN = 3,
	}

	/**
	 * The path point selection state.
	 * @readonly
	 * @enum {number}
	 */
	enum PathPointSelection {
		/**
		 * Path point not selected.
		 */
		NOSELECTION = 1,
		/**
		 * Anchor point selected.
		 */
		ANCHORPOINT = 2,
		/**
		 * Left direction point selected.
		 */
		LEFTDIRECTION = 3,
		/**
		 * Right direction point selected.
		 */
		RIGHTDIRECTION = 4,
		/**
		 * Left and right direction points selected.
		 */
		LEFTRIGHTPOINT = 5,
	}

	/**
	 * The path point type: smooth/corner.
	 * @readonly
	 * @enum {number}
	 */
	enum PointType {
		/**
		 * Smooth path point.
		 */
		SMOOTH = 1,
		/**
		 * Corner point.
		 */
		CORNER = 2,
	}

	/**
	 * The type of text art.
	 * @readonly
	 * @enum {number}
	 */
	enum TextType {
		/**
		 * Text from a point.
		 */
		POINTTEXT = 0,
		/**
		 * Text within an area.
		 */
		AREATEXT = 1,
		/**
		 * Text on a path.
		 */
		PATHTEXT = 2,
	}

	/**
	 * The type of text antialiasing.
	 * @readonly
	 * @enum {number}
	 */
	enum TextAntialias {
		/**
		 * Text from a point.
		 */
		NONE = 1,
		/**
		 * Text within an area.
		 */
		SHARP = 2,
		/**
		 * Text on a path.
		 */
		CRISP = 3,
		/**
		 * Text on a path.
		 */
		STRONG = 4,
	}

	/**
	 * The gradient type.
	 * @readonly
	 * @enum {number}
	 */
	enum GradientType {
		/**
		 * Linear gradient.
		 */
		LINEAR = 1,
		RADIAL = 2,
	}

	/**
	 * The orientation.
	 * @readonly
	 * @enum {number}
	 */
	enum TextOrientation {
		/**
		 * Horizontal orientation.
		 */
		HORIZONTAL = 0,
		/**
		 * Vertical orientation.
		 */
		VERTICAL = 1,
	}

	/**
	 * The crop style.
	 * @readonly
	 * @enum {number}
	 */
	enum CropOptions {
		/**
		 * Standard crop style.
		 */
		Standard = 1,
		/**
		 * Japanese crop style.
		 */
		Japanese = 2,
	}

	/**
	 * The raster link state.
	 * @readonly
	 * @enum {number}
	 */
	enum RasterLinkState {
		/**
		 * Image data is not set.
		 */
		NODATA = 1,
		/**
		 * Image data is from the linked file.
		 */
		DATAFROMFILE = 2,
		/**
		 * Image data has been modified.
		 */
		DATAMODIFIED = 3,
	}

	/**
	 * The tab alignment.
	 * @readonly
	 * @enum {number}
	 */
	enum TabStopAlignment {
		Left = 0,
		Center = 1,
		Right = 2,
		Decimal = 3,
	}

	/**
	 * The paragraph alignment.
	 * @readonly
	 * @enum {number}
	 */
	enum Justification {
		LEFT = 0,
		RIGHT = 1,
		CENTER = 2,
		FULLJUSTIFYLASTLINELEFT = 3,
		FULLJUSTIFYLASTLINERIGHT = 4,
		FULLJUSTIFYLASTLINECENTER = 5,
		FULLJUSTIFY = 6,
	}

	/**
	 * The transformation type.
	 * @readonly
	 * @enum {number}
	 */
	enum Transformation {
		/**
		 * Transform relative to the illustration's page origin.
		 */
		DOCUMENTORIGIN = 1,
		/**
		 * Transform relative to the object's top left corner.
		 */
		TOPLEFT = 2,
		/**
		 * Transform relative to the object's left edge.
		 */
		LEFT = 3,
		/**
		 * Transform relative to the object's bottom left corner.
		 */
		BOTTOMLEFT = 4,
		/**
		 * Transform relative to the object's top edge.
		 */
		TOP = 5,
		/**
		 * Transform relative to the object's center.
		 */
		CENTER = 6,
		/**
		 * Transform relative to the object's bottom edge.
		 */
		BOTTOM = 7,
		/**
		 * Transform relative to the object's top right corner.
		 */
		TOPRIGHT = 8,
		/**
		 * Transform relative to the object's right edge.
		 */
		RIGHT = 9,
		/**
		 * Transform relative to the object's bottom right corner.
		 */
		BOTTOMRIGHT = 10,
	}

	/**
	 * Illustrator library types.
	 * @readonly
	 * @enum {number}
	 */
	enum LibraryType {
		/**
		 * Illustrator artwork.
		 */
		ILLUSTRATORARTWORK = 1,
		/**
		 * Illustrator swatches library.
		 */
		SWATCHES = 2,
		/**
		 * Illustrator brushes library.
		 */
		BRUSHES = 3,
		/**
		 * Illustrator graphic styles library.
		 */
		GRAPHICSTYLES = 4,
		/**
		 * Illustrator symbols library.
		 */
		SYMBOLS = 5,
	}

	/**
	 * Savable document types.
	 * @readonly
	 * @enum {number}
	 */
	enum DocumentType {
		/**
		 * Illustrator file format.
		 */
		ILLUSTRATOR = 1,
		/**
		 * EPS file format.
		 */
		EPS = 2,
		/**
		 * Acrobat PDF file format.
		 */
		PDF = 3,
		/**
		 * FXG file format.
		 */
		FXG = 4,
	}

	/**
	 * Export file types.
	 * @readonly
	 * @enum {number}
	 */
	enum ExportType {
		/**
		 * JPEG export file format.
		 */
		JPEG = 1,
		/**
		 * Photoshop export file format.
		 */
		PHOTOSHOP = 2,
		/**
		 * SVG export file format.
		 */
		SVG = 3,
		/**
		 * PNG 8-bit export file format.
		 */
		PNG8 = 4,
		/**
		 * PNG 24-bit export file format.
		 */
		PNG24 = 5,
		/**
		 * GIF export file format.
		 */
		GIF = 6,
		/**
		 * Flash export file format.
		 */
		FLASH = 7,
		/**
		 * AutoCAD export file format.
		 */
		AUTOCAD = 8,
		/**
		 * TIFF export file format.
		 */
		TIFF = 9,
		/**
		 * Web Optimized SVG export file format.
		 */
		WOSVG = 10,
	}

	/**
	 * Method used to reduce color for PNG8 and GIF export formats.
	 * @readonly
	 * @enum {number}
	 */
	enum ColorReductionMethod {
		SELECTIVE = 0x536C7476,
		ADAPTIVE = 0x41647074,
		PERCEPTUAL = 0x50726370,
		WEB = 0x57656220,
	}

	/**
	 * Method used to dither colors for PNG8 and GIF export formats.
	 * @readonly
	 * @enum {number}
	 */
	enum ColorDitherMethod {
		/**
		 * No dithering.
		 */
		NOREDUCTION = 0x4E6F6E65,
		DIFFUSION = 0x4466736E,
		PATTERNDITHER = 0x5074726E,
		NOISE = 0x424E6F69,
	}

	/**
	 * The compatibility type.
	 * @readonly
	 * @enum {number}
	 */
	enum Compatibility {
		ILLUSTRATOR3 = 3,
		JAPANESEVERSION3 = 3,
		ILLUSTRATOR8 = 8,
		ILLUSTRATOR9 = 9,
		ILLUSTRATOR10 = 10,
		ILLUSTRATOR11 = 11,
		ILLUSTRATOR12 = 12,
		ILLUSTRATOR13 = 13,
		ILLUSTRATOR14 = 14,
		ILLUSTRATOR15 = 15,
		ILLUSTRATOR16 = 16,
		ILLUSTRATOR17 = 17,
	}

	/**
	 * This provides a means for matching the color characteristics of a PDF document.
	 * @readonly
	 * @enum {number}
	 */
	enum PDFXStandard {
		/**
		 * The user isn't complying with any PDF standard.
		 */
		PDFXNONE = 1,
		/**
		 * Supports only a CMYK and spot color workflow, targeted to a specific output device.
		 */
		PDFX1A2001 = 2,
		/**
		 * Supports only a CMYK and spot color workflow, targeted to a specific output device.
		 */
		PDFX1A2003 = 3,
		/**
		 * Supports a color-managed workflow, allowing the use of device-independent color in addition to CMYK and spot colors.
		 */
		PDFX32001 = 4,
		/**
		 * Supports a color-managed workflow, allowing the use of device-independent color in addition to CMYK and spot colors.
		 */
		PDFX32002 = 4,
		/**
		 * Supports a color-managed workflow, allowing the use of device-independent color in addition to CMYK and spot colors.
		 */
		PDFX32003 = 5,
		/**
		 * Supports a color-managed workflow, allowing the use of device-independent color in addition to CMYK and spot colors.
		 */
		PDFX42007 = 6,
	}

	/**
	 * The PDF compatibility type.
	 * @readonly
	 * @enum {number}
	 */
	enum PDFCompatibility {
		/**
		 * Acrobat version 4.
		 */
		ACROBAT4 = 4,
		/**
		 * Acrobat version 5.
		 */
		ACROBAT5 = 5,
		/**
		 * Acrobat version 6.
		 */
		ACROBAT6 = 6,
		/**
		 * Acrobat version 7.
		 */
		ACROBAT7 = 7,
		/**
		 * Acrobat version 8.
		 */
		ACROBAT8 = 8,
	}

	/**
	 * The Photoshop compatibility type.
	 * @readonly
	 * @enum {number}
	 */
	enum PhotoshopCompatibility {
		/**
		 * Photoshop version 8.
		 */
		PHOTOSHOP8 = 1,
		/**
		 * Photoshop version 6.
		 */
		PHOTOSHOP6 = 2,
	}

	/**
	 * The compression type.
	 * @readonly
	 * @enum {number}
	 */
	enum CompressionQuality {
		/**
		 * Automatic compression.
		 */
		None = 1,
		JPEGMINIMUM = 3,
		JPEGLOW = 4,
		JPEGMEDIUM = 5,
		JPEGHIGH = 6,
		JPEGMAXIMUM = 7,
		ZIP4BIT = 8,
		ZIP8BIT = 9,
		/**
		 * Automatically choose between JPEG and ZIP performing minimum compression depending on images.
		 */
		AUTOMATICJPEGMINIMUM = 10,
		/**
		 * Automatic JPEG compression low.
		 */
		AUTOMATICJPEGLOW = 11,
		/**
		 * Automatic JPEG compression medium.
		 */
		AUTOMATICJPEGMEDIUM = 12,
		/**
		 * Automatic JPEG compression high.
		 */
		AUTOMATICJPEGHIGH = 13,
		/**
		 * Automatic JPEG compression maximum.
		 */
		AUTOMATICJPEGMAXIMUM = 14,
		/**
		 * Automatic JPEG2000 compression minimum.
		 */
		AUTOMATICJPEG2000MINIMUM = 15,
		/**
		 * Automatic JPEG2000 compression low.
		 */
		AUTOMATICJPEG2000LOW = 16,
		/**
		 * Automatic JPEG2000 compression medium.
		 */
		AUTOMATICJPEG2000MEDIUM = 17,
		/**
		 * Automatic JPEG2000 compression high.
		 */
		AUTOMATICJPEG2000HIGH = 18,
		/**
		 * Automatic JPEG2000 compression maximum.
		 */
		AUTOMATICJPEG2000MAXIMUM = 19,
		/**
		 * Automatic JPEG2000 compression lossless.
		 */
		AUTOMATICJPEG2000LOSSLESS = 20,
		JPEG2000MINIMUM = 21,
		JPEG2000LOW = 22,
		JPEG2000MEDIUM = 23,
		JPEG2000HIGH = 24,
		JPEG2000MAXIMUM = 25,
		JPEG2000LOSSLESS = 26,
	}

	/**
	 * PDF color conversion policy.
	 * @readonly
	 * @enum {number}
	 */
	enum ColorConversion {
		/**
		 * Preserves color data as is.
		 */
		None = 0,
		/**
		 * Converts all colors to the profile selected for Destination.
		 */
		COLORCONVERSIONTODEST = 1,
		/**
		 * Preserves color numbers for untagged content in the same color space as the destination profile. Not available with CMS off.
		 */
		COLORCONVERSIONREPURPOSE = 2,
	}

	/**
	 * PDF destination profile.
	 * @readonly
	 * @enum {number}
	 */
	enum ColorDestination {
		/**
		 * N/A.
		 */
		None = 0,
		/**
		 * Converts all colors to the profile selected for Destination.
		 */
		COLORDESTINATIONDOCCMYK = 1,
		/**
		 * Preserves color numbers for untagged content in the same color space as the destination profile. Not available with CMS off.
		 */
		COLORDESTINATIONWORKINGCMYK = 2,
		/**
		 * Preserves color numbers for untagged content in the same color space as the destination profile. Not available with CMS off.
		 */
		COLORDESTINATIONDOCRGB = 3,
		/**
		 * Preserves color numbers for untagged content in the same color space as the destination profile. Not available with CMS off.
		 */
		COLORDESTINATIONWORKINGRGB = 4,
		/**
		 * Preserves color numbers for untagged content in the same color space as the destination profile. Not available with CMS off.
		 */
		COLORDESTINATIONPROFILE = 5,
	}

	/**
	 * PDF ICC profile inclusion.
	 * @readonly
	 * @enum {number}
	 */
	enum ColorProfile {
		/**
		 * All profiles removed (embedProfile == false)
		 */
		None = 0,
		/**
		 * Everything gets tagged (embedProfile == true)
		 */
		INCLUDEALLPROFILE = 1,
		/**
		 * Leave tagged items tagged, untagged items untagged.
		 */
		LEAVEPROFILEUNCHANGED = 2,
		/**
		 * Tag all RGB, leave CMYK unchanged.
		 */
		INCLUDERGBPROFILE = 3,
		/**
		 * Everything ends up tagged with the destination profile.
		 */
		INCLUDEDESTPROFILE = 4,
	}

	/**
	 * The monochrome compression type.
	 * @readonly
	 * @enum {number}
	 */
	enum MonochromeCompression {
		/**
		 * Automatic compression.
		 */
		None = 0,
		/**
		 * CCITT Group 3 compression.
		 */
		CCIT3 = 1,
		/**
		 * CCITT Group 4 compression.
		 */
		CCIT4 = 2,
		/**
		 * ZIP compression.
		 */
		MONOZIP = 3,
		/**
		 * RLE compression.
		 */
		RUNLENGTH = 4,
	}

	/**
	 * Pdf trim mark weight options.
	 * @readonly
	 * @enum {number}
	 */
	enum PDFTrimMarkWeight {
		TRIMMARKWEIGHT0125 = 1,
		TRIMMARKWEIGHT025 = 2,
		TRIMMARKWEIGHT05 = 3,
	}

	/**
	 * Pdf overprint options.
	 * @readonly
	 * @enum {number}
	 */
	enum PDFOverprint {
		/**
		 * Preserve overprint.
		 */
		PRESERVEPDFOVERPRINT = 1,
		/**
		 * Discard overprint.
		 */
		DISCARDPDFOVERPRINT = 2,
	}

	/**
	 * Pdf print permissions.
	 * @readonly
	 * @enum {number}
	 */
	enum PDFPrintAllowedEnum {
		/**
		 * Printing allowed none - 128bit.
		 */
		PRINT128NONE = 1,
		/**
		 * Print allowed only in low resolution - 128bit.
		 */
		PRINT128LOWRESOLUTION = 2,
		/**
		 * Print high resolution allowed - 128bit.
		 */
		PRINT128HIGHRESOLUTION = 3,
		/**
		 * Printing allowed none - 40bit.
		 */
		PRINT40NONE = 4,
		/**
		 * Print high resolution allowed - 40bit.
		 */
		PRINT40HIGHRESOLUTION = 5,
	}

	/**
	 * Options available for making changes to a pdf document.
	 * @readonly
	 * @enum {number}
	 */
	enum PDFChangesAllowedEnum {
		/**
		 * No changes allowed - 128bit.
		 */
		CHANGE128NONE = 1,
		/**
		 * Editing page allowed - 128bit.
		 */
		CHANGE128EDITPAGE = 2,
		/**
		 * Filling in of form field and signing allowed - 128bit.
		 */
		CHANGE128FILLFORM = 3,
		/**
		 * Comment allowed - 128bit.
		 */
		CHANGE128COMMENTING = 4,
		/**
		 * Any changes allowed except extracting of pages- 128bit.
		 */
		CHANGE128ANYCHANGES = 5,
		/**
		 * No changes allowed - 40bit.
		 */
		CHANGE40NONE = 6,
		/**
		 * Comment allowed - 40bit.
		 */
		CHANGE40COMMENTING = 7,
		/**
		 * Page layout allowed - 40bit.
		 */
		CHANGE40PAGELAYOUT = 8,
		/**
		 * Any changes allowed except extracting of pages- 40bit.
		 */
		CHANGE40ANYCHANGES = 9,
	}

	/**
	 * The resample type.
	 * @readonly
	 * @enum {number}
	 */
	enum DownsampleMethod {
		/**
		 * Downsampling.
		 */
		NODOWNSAMPLE = 0,
		/**
		 * Average Downsampling.
		 */
		AVERAGEDOWNSAMPLE = 1,
		/**
		 * Subsampling.
		 */
		SUBSAMPLE = 2,
		/**
		 * Bicubic Downsampling.
		 */
		BICUBICDOWNSAMPLE = 3,
	}

	/**
	 * The preview type.
	 * @readonly
	 * @enum {number}
	 */
	enum EPSPreview {
		/**
		 * No preview.
		 */
		None = 1,
		/**
		 * Black and white Macintosh preview.
		 */
		BWMACINTOSH = 2,
		/**
		 * Color Macintosh preview.
		 */
		COLORMACINTOSH = 3,
		/**
		 * Black and white PC preview.
		 */
		BWTIFF = 4,
		/**
		 * Color PC preview.
		 */
		COLORTIFF = 6,
		/**
		 * Transparent color PC preview (8 or later)
		 */
		TRANSPARENTCOLORTIFF = 5,
	}

	/**
	 * The PostScript levels available when saving EPS files.
	 * @readonly
	 * @enum {number}
	 */
	enum EPSPostScriptLevelEnum {
		/**
		 * PostScript Level 2.
		 */
		LEVEL2 = 2,
		/**
		 * PostScript Level 3.
		 */
		LEVEL3 = 3,
	}

	/**
	 * The PostScript levels supported by various printers.
	 * @readonly
	 * @enum {number}
	 */
	enum PrinterPostScriptLevelEnum {
		/**
		 * PostScript Level 1.
		 */
		PSLEVEL1 = 1,
		/**
		 * PostScript Level 2.
		 */
		PSLEVEL2 = 2,
		/**
		 * PostScript Level 3.
		 */
		PSLEVEL3 = 3,
	}

	/**
	 * The options that may be applied when saving a file.
	 * @readonly
	 * @enum {number}
	 */
	enum SaveOptions {
		/**
		 * Save changes.
		 */
		SAVECHANGES = 1,
		/**
		 * Do not save changes.
		 */
		DONOTSAVECHANGES = 2,
		/**
		 * Ask the user whether to save.
		 */
		PROMPTTOSAVECHANGES = 3,
	}

	/**
	 * @readonly
	 * @enum {number}
	 */
	enum RulerUnits {
		/**
		 * Ruler units are unknown.
		 */
		Unknown = 1,
		/**
		 * Ruler units are unknown.
		 */
		Inches = 2,
		/**
		 * Ruler units are measured in centimeters.
		 */
		Centimeters = 3,
		/**
		 * Ruler units are measured in points.
		 */
		Points = 4,
		/**
		 * Ruler units are measured in picas.
		 */
		Picas = 5,
		/**
		 * Ruler units are measured in millimeters.
		 */
		Millimeters = 6,
		/**
		 * Ruler units are measured in Qs.
		 */
		Qs = 7,
		/**
		 * Ruler units are measured in pixels.
		 */
		Pixels = 8,
	}

	/**
	 * Blend modes used when compositing an object.
	 * @readonly
	 * @enum {number}
	 */
	enum BlendModes {
		NORMAL = 0,
		MULTIPLY = 1,
		SCREEN = 2,
		OVERLAY = 3,
		SOFTLIGHT = 4,
		HARDLIGHT = 5,
		COLORDODGE = 6,
		COLORBURN = 7,
		DARKEN = 8,
		LIGHTEN = 9,
		DIFFERENCE = 10,
		EXCLUSION = 11,
		HUE = 12,
		SATURATIONBLEND = 13,
		COLORBLEND = 14,
		LUMINOSITY = 15,
	}

	/**
	 * Knockout state of a page item.
	 * @readonly
	 * @enum {number}
	 */
	enum KnockoutState {
		/**
		 * Unknown/uninitialized knockout state.
		 */
		Unknown = -1,
		/**
		 * Knockout off.
		 */
		DISABLED = 0,
		/**
		 * Knockout off.
		 */
		ENABLED = 1,
		/**
		 * Knockout state inherited from group?
		 */
		INHERITED = 2,
	}

	/**
	 * How to re-arrange the art item.
	 * @readonly
	 * @enum {number}
	 */
	enum ZOrderMethod {
		/**
		 * Move art to front of it's group or layer.
		 */
		BRINGTOFRONT = 1,
		/**
		 * Move art one step forward in it's group or layer.
		 */
		BRINGFORWARD = 2,
		/**
		 * Move art one step backwards in it's group or layer.
		 */
		SENDBACKWARD = 3,
		/**
		 * Move art to back of it's group or layer.
		 */
		SENDTOBACK = 4,
	}

	/**
	 * The version of the SVG DTD.
	 * @readonly
	 * @enum {number}
	 */
	enum SVGDTDVersion {
		/**
		 * SVG 1.0.
		 */
		SVG1_0 = 1,
		/**
		 * SVG 1.1.
		 */
		SVG1_1 = 2,
		/**
		 * SVG Tiny 1.1.
		 */
		SVGTINY1_1 = 3,
		/**
		 * SVG Tiny 1.1 Plus.
		 */
		SVGTINY1_1PLUS = 4,
		/**
		 * SVG Basic 1.1.
		 */
		SVGBASIC1_1 = 5,
		/**
		 * SVG Tiny 1.2.
		 */
		SVGTINY1_2 = 6,
	}

	/**
	 * What font type to include with the file?
	 * @readonly
	 * @enum {number}
	 */
	enum SVGFontType {
		SVGFONT = 2,
		OUTLINEFONT = 3,
	}

	/**
	 * What fonts to include with the file?
	 * @readonly
	 * @enum {number}
	 */
	enum SVGFontSubsetting {
		/**
		 * Use system fonts.
		 */
		None = 1,
		GLYPHSUSED = 2,
		COMMONENGLISH = 3,
		GLYPHSUSEDPLUSENGLISH = 4,
		COMMONROMAN = 5,
		GLYPHSUSEDPLUSROMAN = 6,
		ALLGLYPHS = 7,
	}

	/**
	 * @readonly
	 * @enum {number}
	 */
	enum SVGDocumentEncoding {
		/**
		 * ISO 8859-1.
		 */
		ASCII = 1,
		UTF8 = 2,
		UTF16 = 3,
	}

	/**
	 * @readonly
	 * @enum {number}
	 */
	enum SVGCSSPropertyLocation {
		/**
		 * Style attributes with entity reference.
		 */
		ENTITIES = 2,
		STYLEATTRIBUTES = 1,
		STYLEELEMENTS = 3,
		PRESENTATIONATTRIBUTES = 4,
	}

	/**
	 * Type of SVG Id.
	 * @readonly
	 * @enum {number}
	 */
	enum SVGIdType {
		/**
		 * Style attributes with entity reference.
		 */
		SVGIDMINIMAL = 0,
		SVGIDREGULAR = 1,
		SVGIDUNIQUE = 2,
	}

	/**
	 * Decide where the raster images will be stored.
	 * @readonly
	 * @enum {number}
	 */
	enum RasterImageLocation {
		/**
		 * Embed the raster images in the svg file.
		 */
		EMBED = 0,
		LINK = 1,
		PRESERVE = 2,
	}

	/**
	 * How should transparency be flattened for pre-AI9 file formats.
	 * @readonly
	 * @enum {number}
	 */
	enum OutputFlattening {
		/**
		 * Discard transparency.
		 */
		PRESERVEPATHS = 0,
		PRESERVEAPPEARANCE = 1,
	}

	/**
	 * Color model of the custom color.
	 * @readonly
	 * @enum {number}
	 */
	enum ColorModel {
		/**
		 * Registration color (prints on in all separations)
		 */
		REGISTRATION = 0,
		/**
		 * Process color (mixed ink)
		 */
		PROCESS = 1,
		/**
		 * Spot color (separate ink)
		 */
		SPOT = 2,
	}

	/**
	 * Custom color kind of the spot color.
	 * @readonly
	 * @enum {number}
	 */
	enum SpotColorKind {
		/**
		 * Solid ink, expressed in four CMYK values.
		 */
		SPOTCMYK = 0,
		/**
		 * Solid color, expressed as three RGB values.
		 */
		SPOTRGB = 1,
		/**
		 * Lab color. Only valid for spot colors.
		 */
		SPOTLAB = 2,
	}

	/**
	 * @readonly
	 * @enum {number}
	 */
	enum FlashExportStyle {
		/**
		 * Illustrator Artboards to Flash Files.
		 */
		ARTBOARDSTOFILES = 5,
		/**
		 * Illustrator file to Flash file.
		 */
		ASFLASHFILE = 1,
		/**
		 * Illustrator layers to Flash frames.
		 */
		LAYERSASFRAMES = 2,
		/**
		 * Illustrator layers to Flash files.
		 */
		LAYERSASFILES = 3,
		/**
		 * Illustrator layers to Flash Symbols.
		 */
		LAYERSASSYMBOLS = 4,
	}

	/**
	 * How the arts should be clipped.
	 * @readonly
	 * @enum {number}
	 */
	enum ArtClippingOption {
		/**
		 * Output size is the size of the artwork.
		 */
		OUTPUTARTBOUNDS = 1,
		/**
		 * Output size is the size of the artboard.
		 */
		OUTPUTARTBOARDBOUNDS = 2,
		/**
		 * Output size is the size of the crop area.
		 */
		OUTPUTCROPRECTBOUNDS = 3,
	}

	/**
	 * Version of the SWF File to be exported.
	 * @readonly
	 * @enum {number}
	 */
	enum FlashExportVersion {
		/**
		 * SWF Version 1.
		 */
		FLASHVERSION1 = 1,
		/**
		 * SWF Version 2.
		 */
		FLASHVERSION2 = 2,
		/**
		 * SWF Version 3.
		 */
		FLASHVERSION3 = 3,
		/**
		 * SWF Version 4.
		 */
		FLASHVERSION4 = 4,
		/**
		 * SWF Version 5.
		 */
		FLASHVERSION5 = 5,
		/**
		 * SWF Version 6.
		 */
		FLASHVERSION6 = 6,
		/**
		 * SWF Version 7.
		 */
		FLASHVERSION7 = 7,
		/**
		 * SWF Version 8.
		 */
		FLASHVERSION8 = 8,
		/**
		 * SWF Version 9.
		 */
		FLASHVERSION9 = 9,
	}

	/**
	 * @readonly
	 * @enum {number}
	 */
	enum FlashImageFormat {
		LOSSLESS = 1,
		LOSSY = 2,
	}

	/**
	 * @readonly
	 * @enum {number}
	 */
	enum LayerOrderType {
		BOTTOMUP = 1,
		TOPDOWN = 2,
	}

	/**
	 * @readonly
	 * @enum {number}
	 */
	enum BlendAnimationType {
		/**
		 * No blend animation.
		 */
		NOBLENDANIMATION = 0,
		INSEQUENCE = 1,
		INBUILD = 2,
	}

	/**
	 * @readonly
	 * @enum {number}
	 */
	enum FlashJPEGMethod {
		Standard = 1,
		Optimized = 2,
	}

	/**
	 * @readonly
	 * @enum {number}
	 */
	enum FlashPlaybackSecurity {
		PlaybackLocal = 1,
		PlaybackNetwork = 2,
	}

	/**
	 * @readonly
	 * @enum {number}
	 */
	enum VariableKind {
		Unknown = 1,
		VISIBILITY = 2,
		TEXTUAL = 3,
		IMAGE = 4,
		GRAPH = 5,
	}

	/**
	 * @readonly
	 * @enum {number}
	 */
	enum AutoCADExportFileFormat {
		DXF = 0,
		DWG = 1,
	}

	/**
	 * @readonly
	 * @enum {number}
	 */
	enum AutoCADCompatibility {
		AutoCADRelease13 = 0,
		AutoCADRelease14 = 1,
		AutoCADRelease15 = 2,
		AutoCADRelease18 = 3,
		AutoCADRelease21 = 4,
		AutoCADRelease24 = 5,
	}

	/**
	 * @readonly
	 * @enum {number}
	 */
	enum AutoCADUnit {
		Points = 0,
		Picas = 1,
		Inches = 2,
		Millimeters = 3,
		Centimeters = 4,
		Pixels = 5,
	}

	/**
	 * @readonly
	 * @enum {number}
	 */
	enum AutoCADColors {
		Max8Colors = 0,
		Max16Colors = 1,
		Max256Colors = 2,
		TrueColors = 3,
	}

	/**
	 * @readonly
	 * @enum {number}
	 */
	enum AutoCADRasterFormat {
		PNG = 0,
		JPEG = 1,
	}

	/**
	 * @readonly
	 * @enum {number}
	 */
	enum AutoCADExportOption {
		PreserveAppearance = 0,
		MaximumEditability = 1,
	}

	/**
	 * @readonly
	 * @enum {number}
	 */
	enum AutoCADGlobalScaleOption {
		OriginalSize = 0,
		FitArtboard = 1,
		ScaleByValue = 2,
	}

	/**
	 * Byte Order of TIFF file.
	 * @readonly
	 * @enum {number}
	 */
	enum TIFFByteOrder {
		IBMPC = 0,
		MACINTOSH = 1,
	}

	/**
	 * COM user interaction enumeration.
	 * @readonly
	 * @enum {number}
	 */
	enum UserInteractionLevel {
		DONTDISPLAYALERTS = -1,
		DISPLAYALERTS = 2,
	}

	/**
	 * @readonly
	 * @enum {number}
	 */
	enum PolarityValues {
		POSITIVE = 1,
		NEGATIVE = -1,
	}

	/**
	 * When should a JavaScript debugger be shown.
	 * @readonly
	 * @enum {number}
	 */
	enum JavaScriptExecutionMode {
		/**
		 * Never show the JavaScript debugger. Treat runtime errors by throwing a JavaScript exceptions.
		 */
		never = 1,
		/**
		 * Show the JavaScript debugger is a runtime error occurs.
		 */
		OnRuntimeError = 2,
		/**
		 * Show the JavaScript debugger at the first line of the JavaScript.
		 */
		BeforeRunning = 3,
	}

	/**
	 * The artwork layers/objects to be printed.
	 * @readonly
	 * @enum {number}
	 */
	enum PrintArtworkDesignation {
		/**
		 * Print visible printable layers.
		 */
		VISIBLEPRINTABLELAYERS = 0,
		/**
		 * Print visible layers.
		 */
		VISIBLELAYERS = 1,
		/**
		 * Print all layers.
		 */
		ALLLAYERS = 2,
	}

	/**
	 * The printing bounds type.
	 * @readonly
	 * @enum {number}
	 */
	enum PrintingBounds {
		/**
		 * Use artboard bounds.
		 */
		ARTBOARDBOUNDS = 0,
		/**
		 * Use artwork bounds.
		 */
		ARTWORKBOUNDS = 1,
		/**
		 * Use crop bounds.
		 */
		CROPBOUNDS = 2,
	}

	/**
	 * The color separation mode.
	 * @readonly
	 * @enum {number}
	 */
	enum PrintColorSeparationMode {
		/**
		 * The composite mode.
		 */
		COMPOSITE = 0,
		/**
		 * The host based color separation mode.
		 */
		HOSTBASEDSEPARATION = 1,
		/**
		 * The InRIP color separation mode.
		 */
		INRIPSEPARATION = 2,
	}

	/**
	 * The artwork printing orientation.
	 * @readonly
	 * @enum {number}
	 */
	enum PrintOrientation {
		/**
		 * Portrait.
		 */
		PORTRAIT = 0,
		/**
		 * Landscape.
		 */
		LANDSCAPE = 1,
		/**
		 * Reverse portrait.
		 */
		REVERSEPORTRAIT = 2,
		/**
		 * Reverse landscape.
		 */
		REVERSELANDSCAPE = 3,
		/**
		 * Auto Rotate.
		 */
		AUTOROTATE = 4,
	}

	/**
	 * The artwork printing position on media.
	 * @readonly
	 * @enum {number}
	 */
	enum PrintPosition {
		/**
		 * Translate to the top left of media.
		 */
		TRANSLATETOPLEFT = 1,
		/**
		 * Translate to the top center of media.
		 */
		TRANSLATETOP = 2,
		/**
		 * Translate to the top right of media.
		 */
		TRANSLATETOPRIGHT = 3,
		/**
		 * Translate to the left center of media.
		 */
		TRANSLATELEFT = 4,
		/**
		 * Translate to the center of media.
		 */
		TRANSLATECENTER = 5,
		/**
		 * Translate to the right center of media.
		 */
		TRANSLATERIGHT = 6,
		/**
		 * Translate to the bottom left of media.
		 */
		TRANSLATEBOTTOMLEFT = 7,
		/**
		 * Translate to the bottom center of media.
		 */
		TRANSLATEBOTTOM = 8,
		/**
		 * Translate to the bottom right of media.
		 */
		TRANSLATEBOTTOMRIGHT = 9,
	}

	/**
	 * The page tiling type.
	 * @readonly
	 * @enum {number}
	 */
	enum PrintTiling {
		/**
		 * Tile single full page.
		 */
		TILESINGLEFULLPAGE = 0,
		/**
		 * Tile full pages.
		 */
		TILEFULLPAGES = 1,
		/**
		 * Tile imageable areas.
		 */
		TILEIMAGEABLEAREAS = 2,
	}

	/**
	 * The page marks style type.
	 * @readonly
	 * @enum {number}
	 */
	enum PageMarksTypes {
		/**
		 * Roman page marks style.
		 */
		Roman = 0,
		/**
		 * Japanese page marks style.
		 */
		Japanese = 1,
	}

	/**
	 * The printer font download mode.
	 * @readonly
	 * @enum {number}
	 */
	enum PrintFontDownloadMode {
		/**
		 * Download none.
		 */
		DOWNLOADNONE = 0,
		/**
		 * Download subset.
		 */
		DOWNLOADSUBSET = 1,
		/**
		 * Download complete.
		 */
		DOWNLOADCOMPLETE = 2,
	}

	/**
	 * The font substitution policy.
	 * @readonly
	 * @enum {number}
	 */
	enum FontSubstitutionPolicy {
		/**
		 * Substitute oblique font.
		 */
		SUBSTITUTEOBLIQUE = 0,
		/**
		 * Substitute tint font.
		 */
		SUBSTITUTETINT = 1,
		/**
		 * Substitute device font.
		 */
		SUBSTITUTEDEVICE = 2,
	}

	/**
	 * The PostScript image compression type.
	 * @readonly
	 * @enum {number}
	 */
	enum PostScriptImageCompressionType {
		/**
		 * No image compression.
		 */
		IMAGECOMPRESSIONNONE = 0,
		/**
		 * RLE image compression.
		 */
		RLE = 1,
		/**
		 * JPEG image compression.
		 */
		JPEG = 2,
	}

	/**
	 * The color profile type.
	 * @readonly
	 * @enum {number}
	 */
	enum PrintColorProfile {
		/**
		 * Use old style AI color profile.
		 */
		OLDSTYLEPROFILE = 0,
		/**
		 * Same as source color profile.
		 */
		SOURCEPROFILE = 1,
		/**
		 * Same as printer color profile.
		 */
		PRINTERPROFILE = 2,
		/**
		 * Use custom color profile.
		 */
		CUSTOMPROFILE = 3,
	}

	/**
	 * The color intent type.
	 * @readonly
	 * @enum {number}
	 */
	enum PrintColorIntent {
		/**
		 * Perceptual color intent.
		 */
		PERCEPTUALINTENT = 0,
		/**
		 * Saturation color intent.
		 */
		SATURATIONINTENT = 1,
		/**
		 * Relative colorimetric.
		 */
		RELATIVECOLORIMETRIC = 2,
		/**
		 * Absolute colorimetric.
		 */
		ABSOLUTECOLORIMETRIC = 3,
	}

	/**
	 * The printer type.
	 * @readonly
	 * @enum {number}
	 */
	enum PrinterTypeEnum {
		/**
		 * Unknown printer type.
		 */
		Unknown = 0,
		/**
		 * PostScript printer.
		 */
		POSTSCRIPTPRINTER = 1,
		/**
		 * Non PostScript printer.
		 */
		NONPOSTSCRIPTPRINTER = 2,
	}

	/**
	 * The printer color mode.
	 * @readonly
	 * @enum {number}
	 */
	enum PrinterColorMode {
		/**
		 * Color printer.
		 */
		COLORPRINTER = 0,
		/**
		 * Grayscale printer.
		 */
		GRAYSCALEPRINTER = 1,
		/**
		 * Black and white printer.
		 */
		BLACKANDWHITEPRINTER = 2,
	}

	/**
	 * The ink printing status.
	 * @readonly
	 * @enum {number}
	 */
	enum InkPrintStatus {
		/**
		 * Disable the ink during print.
		 */
		DISABLEINK = 0,
		/**
		 * Enable the ink during print.
		 */
		ENABLEINK = 1,
		/**
		 * Convert to process color during print.
		 */
		CONVERTINK = 2,
	}

	/**
	 * The ink type.
	 * @readonly
	 * @enum {number}
	 */
	enum InkType {
		/**
		 * Cyan color ink.
		 */
		CYANINK = 0,
		/**
		 * Magenta color ink.
		 */
		MAGENTAINK = 1,
		/**
		 * Yellow color ink.
		 */
		YELLOWINK = 2,
		/**
		 * Black color ink.
		 */
		BLACKINK = 3,
		/**
		 * Custom color ink.
		 */
		CUSTOMINK = 4,
	}

	/**
	 * The trapping type.
	 * @readonly
	 * @enum {number}
	 */
	enum TrappingType {
		/**
		 * Normal trapping type.
		 */
		NORMALTRAPPING = 0,
		/**
		 * Transparent trapping type.
		 */
		TRANSPARENT = 1,
		/**
		 * Opaque trapping type.
		 */
		OPAQUE = 2,
		/**
		 * Ignore opaque trapping type.
		 */
		IGNOREOPAQUE = 3,
	}

	/**
	 * The auto kern type.
	 * @readonly
	 * @enum {number}
	 */
	enum AutoKernType {
		/**
		 * No auto kerning.
		 */
		NOAUTOKERN = 0,
		/**
		 * Auto kerning.
		 */
		AUTO = 1,
		/**
		 * Optical kerning.
		 */
		OPTICAL = 2,
		/**
		 * Metrics roman only.
		 */
		METRICSROMANONLY = 3,
	}

	/**
	 * The auto leading type.
	 * @readonly
	 * @enum {number}
	 */
	enum AutoLeadingType {
		/**
		 * Roman leading type.
		 */
		BOTTOMTOBOTTOM = 0,
		/**
		 * Japanese leading type.
		 */
		TOPTOTOP = 1,
	}

	/**
	 * The case change type.
	 * @readonly
	 * @enum {number}
	 */
	enum CaseChangeType {
		/**
		 * Change to upper case.
		 */
		UPPERCASE = 0,
		/**
		 * Change to lower case.
		 */
		LOWERCASE = 1,
		/**
		 * Change to title case.
		 */
		TITLECASE = 2,
		/**
		 * Change to sentence case.
		 */
		SENTENCECASE = 3,
	}

	/**
	 * The font capitalization option.
	 * @readonly
	 * @enum {number}
	 */
	enum FontCapsOption {
		/**
		 * Normal caps.
		 */
		NORMALCAPS = 0,
		/**
		 * Small caps.
		 */
		SMALLCAPS = 1,
		/**
		 * All caps.
		 */
		ALLCAPS = 2,
		/**
		 * All small caps.
		 */
		ALLSMALLCAPS = 3,
	}

	/**
	 * The font baseline option.
	 * @readonly
	 * @enum {number}
	 */
	enum FontBaselineOption {
		/**
		 * Normal baseline.
		 */
		NORMALBASELINE = 0,
		/**
		 * Fauxed superscript baseline.
		 */
		SUPERSCRIPT = 1,
		/**
		 * Fauxed subscript baseline.
		 */
		SUBSCRIPT = 2,
	}

	/**
	 * The OpenType font position option.
	 * @readonly
	 * @enum {number}
	 */
	enum FontOpenTypePositionOption {
		/**
		 * Default position.
		 */
		OPENTYPEDEFAULT = 0,
		/**
		 * OpenType superscript position.
		 */
		OPENTYPESUPERSCRIPT = 1,
		/**
		 * OpenType subscript position.
		 */
		OPENTYPESUBSCRIPT = 2,
		/**
		 * OpenType numerator position.
		 */
		NUMERATOR = 3,
		/**
		 * OpenType denominator position.
		 */
		DENOMINATOR = 4,
	}

	/**
	 * The figure style type.
	 * @readonly
	 * @enum {number}
	 */
	enum FigureStyleType {
		/**
		 * Default figure style.
		 */
		DEFAULTFIGURESTYLE = 0,
		/**
		 * Tabular lining style.
		 */
		TABULAR = 1,
		/**
		 * Proportional oldstyle.
		 */
		PROPORTIONALOLDSTYLE = 2,
		/**
		 * Proportional lining style.
		 */
		PROPORTIONAL = 3,
		/**
		 * Tabular oldstyle.
		 */
		TABULAROLDSTYLE = 4,
	}

	/**
	 * The baseline direction type.
	 * @readonly
	 * @enum {number}
	 */
	enum BaselineDirectionType {
		Standard = 1,
		VerticalRotated = 2,
		TateChuYoko = 3,
	}

	/**
	 * The language of text.
	 * @readonly
	 * @enum {number}
	 */
	enum LanguageType {
		ENGLISH = 0,
		FINNISH = 1,
		STANDARDFRENCH = 2,
		CANADIANFRENCH = 3,
		STANDARDGERMAN = 4,
		OLDGERMAN = 5,
		SWISSGERMAN = 6,
		ITALIAN = 7,
		BOKMALNORWEGIAN = 8,
		/**
		 * Nynorsk Norwegian.
		 */
		NYNORSKNORWEGIAN = 9,
		STANDARDPORTUGUESE = 10,
		BRAZILLIANPORTUGUESE = 11,
		SPANISH = 12,
		SWEDISH = 13,
		UKENGLISH = 14,
		DUTCH = 15,
		DANISH = 16,
		CATALAN = 17,
		RUSSIAN = 18,
		UKRANIAN = 19,
		BULGARIAN = 20,
		SERBIAN = 21,
		CZECH = 22,
		POLISH = 23,
		RUMANIAN = 24,
		GREEK = 25,
		TURKISH = 26,
		ICELANDIC = 27,
		HUNGARIAN = 28,
		CHINESE = 29,
		JAPANESE = 30,
		ARABIC = 39,
		FARSI = 41,
		GERMAN2006REFORM = 42,
		DUTCH2005REFORM = 43,
		SWISSGERMAN2006REFORM = 44,
		HINDI = 49,
		MARATHI = 50,
		BENGALIINDIA = 51,
		PUNJABI = 52,
		GUJARATI = 53,
		ORIYA = 54,
		TAMIL = 55,
		TELUGU = 56,
		KANNADA = 57,
		MALAYALAM = 58,
	}

	/**
	 * The alternate glyphs form of text.
	 * @readonly
	 * @enum {number}
	 */
	enum AlternateGlyphsForm {
		DEFAULTFORM = 0,
		TRADITIONAL = 1,
		EXPERT = 2,
		JIS78FORM = 3,
		JIS83FORM = 4,
		HALFWIDTH = 5,
		THIRDWIDTH = 6,
		QUARTERWIDTH = 7,
		FULLWIDTH = 8,
		PROPORTIONALWIDTH = 9,
		JIS90FORM = 10,
		JIS04FORM = 11,
	}

	/**
	 * The style run alignment.
	 * @readonly
	 * @enum {number}
	 */
	enum StyleRunAlignmentType {
		bottom = 0,
		icfBottom = 1,
		ROMANBASELINE = 2,
		center = 3,
		icfTop = 4,
		top = 5,
	}

	/**
	 * The Wari-Chu alignment type.
	 * @readonly
	 * @enum {number}
	 */
	enum WariChuJustificationType {
		Left = 0,
		Right = 1,
		Center = 2,
		WARICHUFULLJUSTIFYLASTLINELEFT = 3,
		WARICHUFULLJUSTIFYLASTLINERIGHT = 4,
		WARICHUFULLJUSTIFYLASTLINECENTER = 5,
		WARICHUFULLJUSTIFY = 6,
		WARICHUAUTOJUSTIFY = 7,
	}

	/**
	 * The Burasagari type.
	 * @readonly
	 * @enum {number}
	 */
	enum BurasagariTypeEnum {
		None = 0,
		Standard = 1,
		Forced = 2,
	}

	/**
	 * The preferred Kinsoku order.
	 * @readonly
	 * @enum {number}
	 */
	enum KinsokuOrderEnum {
		PUSHIN = 0,
		PUSHOUTFIRST = 1,
		PUSHOUTONLY = 2,
	}

	/**
	 * Crop box.
	 * @readonly
	 * @enum {number}
	 */
	enum PDFBoxType {
		/**
		 * Crop to ArtBox. The art box defines the extent of the page's meaningful content (including potential white space) as intended by the page's creator.
		 */
		PDFARTBOX = 0,
		/**
		 * Crop to CropBox. The crop box is the region of the page to display and to print.
		 */
		PDFCROPBOX = 1,
		/**
		 * Crop to TrimBox. The trim box specifies the positioning of the page's content within the imposition.
		 */
		PDFTRIMBOX = 2,
		/**
		 * Crop to BleedBox. The bleed box defines the region to which the contents of the page should be clipped when output in a production environment.
		 */
		PDFBLEEDBOX = 3,
		/**
		 * Crop to MediaBox. The media box is a natural size of the page. For example, the dimensions of A4 sheet of paper.
		 */
		PDFMEDIABOX = 4,
		/**
		 * Crop to Bounding Box. The bounding box is the rectangle that encloses all text, graphics, and images on the page.
		 */
		PDFBOUNDINGBOX = 5,
	}

	/**
	 * The tracing method: abutting and overlapping.
	 * @readonly
	 * @enum {number}
	 */
	enum TracingMethodType {
		/**
		 * Tracing abutting method.
		 */
		TRACINGMETHODABUTTING = 0,
		/**
		 * Tracing overlapping method.
		 */
		TRACINGMETHODOVERLAPPING = 1,
	}

	/**
	 * The tracing mode: color, grayscale, black and white.
	 * @readonly
	 * @enum {number}
	 */
	enum TracingModeType {
		/**
		 * Color tracing mode.
		 */
		TRACINGMODECOLOR = 0,
		/**
		 * Grayscale tracing mode.
		 */
		TRACINGMODEGRAY = 1,
		/**
		 * Black and white tracing mode.
		 */
		TRACINGMODEBLACKANDWHITE = 2,
	}

	/**
	 * The input color type Full Color or Limited colors.
	 * @readonly
	 * @enum {number}
	 */
	enum TracingColorType {
		/**
		 * Use Limited colors for Tracing.
		 */
		TRACINGLIMITEDCOLOR = 0,
		/**
		 * Use Full colors for Tracing.
		 */
		TRACINGFULLCOLOR = 1,
	}

	/**
	 * Controls the type of vector view.
	 * @readonly
	 * @enum {number}
	 */
	enum ViewType {
		/**
		 * View artwork.
		 */
		TRACINGVIEWVECTORTRACINGRESULT = 0,
		/**
		 * View paths and transparent fills.
		 */
		TRACINGVIEWVECTOROUTLINESWITHTRACING = 1,
		/**
		 * View just the paths.
		 */
		TRACINGVIEWVECTOROUTLINES = 2,
		/**
		 * View Outlines with Transparent Image.
		 */
		TRACINGVIEWVECTORWITHTRANSPARENTIMAGE = 3,
		/**
		 * View Source Image.
		 */
		TRACINGVIEWIMAGE = 4,
	}

	/**
	 * Controls the color model for the rasterization.
	 * @readonly
	 * @enum {number}
	 */
	enum RasterizationColorModel {
		/**
		 * Rasterize in the default document color space.
		 */
		DEFAULTCOLORMODEL = 1,
		/**
		 * Rasterize as grayscale image.
		 */
		GRAYSCALE = 2,
		/**
		 * Rasterize as 1-bit bitmap.
		 */
		BITMAP = 3,
	}

	/**
	 * Controls the type of antialiasing method used in the rasterization.
	 * @readonly
	 * @enum {number}
	 */
	enum AntiAliasingMethod {
		/**
		 * No anti-aliasing allowed.
		 */
		None = 0,
		/**
		 * Optimize for the art object.
		 */
		ARTOPTIMIZED = 1,
		/**
		 * Optimize for the type object.
		 */
		TYPEOPTIMIZED = 2,
	}

	/**
	 * Denotes the purpose of color conversion using ConvertSmapleColor method.
	 * @readonly
	 * @enum {number}
	 */
	enum ColorConvertPurpose {
		/**
		 * Do standard conversion, without black preservation.
		 */
		defaultpurpose = 0,
		/**
		 * Conversion options appropriate to creating an image for screen display.
		 */
		previewpurpose = 1,
		/**
		 * Conversion options appropriate to creating an image for print or export.
		 */
		exportpurpose = 2,
		/**
		 * Dummy option.
		 */
		dummypurpose = 4,
	}

	/**
	 * The FXG file format version.
	 * @readonly
	 * @enum {number}
	 */
	enum FXGVersion {
		/**
		 * FXG version 1.0.
		 */
		VERSION1PT0 = 1,
		/**
		 * FXG version 2.0.
		 */
		VERSION2PT0 = 2,
	}

	/**
	 * Filters preserve policy used by FXG file format.
	 * @readonly
	 * @enum {number}
	 */
	enum FiltersPreservePolicy {
		/**
		 * Preserve the appearance of filters by expanding it.
		 */
		EXPANDFILTERS = 1,
		/**
		 * Preserve the appearance of filters by rasterizing it.
		 */
		RASTERIZEFILTERS = 2,
		/**
		 * Preserve the editability of filters.
		 */
		KEEPFILTERSEDITABLE = 3,
	}

	/**
	 * Text preserve policy used by FXG file format.
	 * @readonly
	 * @enum {number}
	 */
	enum TextPreservePolicy {
		/**
		 * Preserve the appearance of text by outlining it.
		 */
		OUTLINETEXT = 1,
		/**
		 * Preserve the appearance of text by rasterizing it.
		 */
		RASTERIZETEXT = 2,
		/**
		 * Preserve the editability of text.
		 */
		KEEPTEXTEDITABLE = 3,
		/**
		 * Automatically convert text.
		 */
		AUTOMATICALLYCONVERTTEXT = 4,
	}

	/**
	 * Gradients preserve policy used by FXG file format.
	 * @readonly
	 * @enum {number}
	 */
	enum GradientsPreservePolicy {
		/**
		 * Preserve the editability of gradients.
		 */
		KEEPGRADIENTSEDITABLE = 3,
		/**
		 * Automatically Convert Gradients.
		 */
		AUTOMATICALLYCONVERTGRADIENTS = 4,
	}

	/**
	 * Blends Expand policy used by FXG file format.
	 * @readonly
	 * @enum {number}
	 */
	enum BlendsExpandPolicy {
		/**
		 * Automatically Convert Blends.
		 */
		AUTOMATICALLYCONVERTBLENDS = 1,
		/**
		 * Expand Blends by Rasterizing.
		 */
		RASTERIZEBLENDS = 2,
	}

	/**
	 * Coordinate system used by Illustrator.
	 * @readonly
	 * @enum {number}
	 */
	enum CoordinateSystem {
		/**
		 * Document coordinate system.
		 */
		DOCUMENTCOORDINATESYSTEM = 0,
		/**
		 * Artboard coordinate system.
		 */
		ARTBOARDCOORDINATESYSTEM = 1,
	}

	/**
	 * The symbol registration point.
	 * @readonly
	 * @enum {number}
	 */
	enum SymbolRegistrationPoint {
		/**
		 * Top left point of symbol bounding box.
		 */
		SYMBOLTOPLEFTPOINT = 1,
		/**
		 * Top middle point of symbol bounding box.
		 */
		SYMBOLTOPMIDDLEPOINT = 2,
		/**
		 * Top right point of symbol bounding box.
		 */
		SYMBOLTOPRIGHTPOINT = 3,
		/**
		 * Middle left point of symbol bounding box.
		 */
		SYMBOLMIDDLELEFTPOINT = 4,
		/**
		 * Center point of symbol bounding box.
		 */
		SYMBOLCENTERPOINT = 5,
		/**
		 * Middle right point of symbol bounding box.
		 */
		SYMBOLMIDDLERIGHTPOINT = 6,
		/**
		 * Bottom left point of symbol bounding box.
		 */
		SYMBOLBOTTOMLEFTPOINT = 7,
		/**
		 * Bottom middle point of symbol bounding box.
		 */
		SYMBOLBOTTOMMIDDLEPOINT = 8,
		/**
		 * Bottom right point of symbol bounding box.
		 */
		SYMBOLBOTTOMRIGHTPOINT = 9,
	}

	/**
	 * Perspective grid plane types.
	 * @readonly
	 * @enum {number}
	 */
	enum PerspectiveGridPlaneType {
		/**
		 * Invalid Perspective Grid Plane Type.
		 */
		NOPLANE = 0,
		/**
		 * Perspective Grid Left Plane Type.
		 */
		LEFTPLANE = 1,
		/**
		 * Perspective Grid Right Plane Type.
		 */
		RIGHTPLANE = 2,
		/**
		 * Perspective Grid Floor Plane Type.
		 */
		FLOORPLANE = 3,
	}

	/**
	 * Text Item First baseline types.
	 * @readonly
	 * @enum {number}
	 */
	enum FirstBaselineType {
		/**
		 * First Baseline Ascent Type.
		 */
		BASELINEASCENT = 0,
		/**
		 * First baseline Cap Height Type.
		 */
		BASELINECAPHEIGHT = 1,
		/**
		 * First Baseline Leading Type.
		 */
		BASELINELEADING = 2,
		/**
		 * First Baseline x Height Type.
		 */
		BASELINEXHEIGHT = 3,
		/**
		 * First Baseline Em Box Height Type.
		 */
		BASELINEEMBOXHEIGHT = 4,
		/**
		 * First Baseline Fixed Type.
		 */
		BASELINEFIXED = 5,
		/**
		 * First Baseline Legacy Type.
		 */
		BASELINELEGACY = 6,
	}

	/**
	 * Document layout style types.
	 * @readonly
	 * @enum {number}
	 */
	enum DocumentLayoutStyle {
		/**
		 * Arranges document in cascaded style.
		 */
		CASCADE = 0,
		/**
		 * Arranges documents as horizontal tiles.
		 */
		HORIZONTALTILE = 1,
		/**
		 * Arranges documents as vertical tiles.
		 */
		VERTICALTILE = 2,
		/**
		 * Arranges all documents floating layout.
		 */
		FLOATALL = 3,
		/**
		 * Consolidates all documents.
		 */
		CONSOLIDATEALL = 4,
	}

	/**
	 * A collection of artboards.
	 */
	class Artboards {
	[index: number]: Artboard;
		

		/**
		 * Add artboard object.
		 * @return {Artboard}
		 * @param {number[]} artboardRect - Size and position of artboard.
		 */
		public static add(artboardRect: number[]): Artboard;
		

		/**
		 * Add artboard object.
		 * @return {Artboard}
		 * @param {number[]} artboardRect - Size and position of artboard.
		 */
		public add(artboardRect: number[]): Artboard;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Get the first element in the collection with the provided name.
		 * @return {Artboard}
		 * @param {string} name - 
		 */
		public getByName(name: string): Artboard;
		

		/**
		 * Delete artboard object.
		 * @return {void}
		 * @param {number} index - Index of the crop area to be deleted.
		 */
		public remove(index: number): void;
		

		/**
		 * Insert an Artboard at specified location.
		 * @return {void}
		 * @param {number[]} artboardRect - Size and position of artboard.
		 * @param {number} index - Index position where artboard should be inserted.
		 */
		public insert(artboardRect: number[], index: number): void;
		

		/**
		 * Retrieves the index position of the active artboard in the document's list.
		 * @return {number}
		 */
		public getActiveArtboardIndex(): number;
		

		/**
		 * Makes a specific artboard active, and makes it current in the iteration order.
		 * @return {void}
		 * @param {number} index - The 0-based index position of the artboard in the document list.
		 */
		public setActiveArtboardIndex(index: number): void;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Number of elements in the collection.
		 */
		public length: number;
	}

	/**
	 * A collection of documents.
	 */
	class Documents {
	[index: number]: Document;
		

		/**
		 * Create a new document from a preset.
		 * @return {Document}
		 * @param {string} startupPreset - The name of a startup document preset.
		 * @param {DocumentPreset} presetSettings - Custom settings to apply to the preset.
		 * @param {boolean} showOptionsDialog - If false, do not show Options dialog.
		 */
		public static addDocument(startupPreset: string, presetSettings?: DocumentPreset, showOptionsDialog?: boolean): Document;
		

		/**
		 * Create a new document from a preset.
		 * @return {Document}
		 * @param {string} startupPreset - The name of a startup document preset.
		 * @param {DocumentPreset} presetSettings - Custom settings to apply to the preset.
		 * @param {boolean} showOptionsDialog - If false, do not show Options dialog.
		 */
		public addDocument(startupPreset: string, presetSettings?: DocumentPreset, showOptionsDialog?: boolean): Document;
		

		/**
		 * Create a document from the preset with option to throw dialog to customize present settings.
		 * @return {Document}
		 * @param {string} startupPreset - The name of startup document preset.
		 * @param {boolean} showOptionsDialog - Argument controls if options Dialog is shown or not.
		 */
		public static addDocumentWithDialogOption(startupPreset: string, showOptionsDialog?: boolean): Document;
		

		/**
		 * Create a document from the preset with option to throw dialog to customize present settings.
		 * @return {Document}
		 * @param {string} startupPreset - The name of startup document preset.
		 * @param {boolean} showOptionsDialog - Argument controls if options Dialog is shown or not.
		 */
		public addDocumentWithDialogOption(startupPreset: string, showOptionsDialog?: boolean): Document;
		

		/**
		 * A document.
		 * @return {Document}
		 * @param {DocumentColorSpace} documentColorSpace - The color model used for the document., optional default: DocumentColorSpace.CMYK  @default [DocumentColorSpace.CMYK]
		 * @param {number} width - Width of the artboard., optional default: 612.0  @default [612.0]
		 * @param {number} height - Height of the artboard., optional default: 792.0  @default [792.0]
		 * @param {number} numArtboards - Number of artboards for new document.Range (1:100)., optional default: 1  @default [1]
		 * @param {DocumentArtboardLayout} artboardLayout - Layout of artboards for new document., optional default: DocumentArtboardLayout.GridByRow  @default [DocumentArtboardLayout.GridByRow]
		 * @param {number} artboardSpacing - Spacing between artboards for new document., optional default: 20.0  @default [20.0]
		 * @param {number} artboardRowsOrCols - Number of rows (for rows layout) OR column(for column layouts)of artboards.Range is 1 to (docNumArtboards - 1) or 1 for single row or column layouts., optional default: 1  @default [1]
		 */
		public static add(documentColorSpace?: DocumentColorSpace, width?: number, height?: number, numArtboards?: number, artboardLayout?: DocumentArtboardLayout, artboardSpacing?: number, artboardRowsOrCols?: number): Document;
		

		/**
		 * A document.
		 * @return {Document}
		 * @param {DocumentColorSpace} documentColorSpace - The color model used for the document., optional default: DocumentColorSpace.CMYK  @default [DocumentColorSpace.CMYK]
		 * @param {number} width - Width of the artboard., optional default: 612.0  @default [612.0]
		 * @param {number} height - Height of the artboard., optional default: 792.0  @default [792.0]
		 * @param {number} numArtboards - Number of artboards for new document.Range (1:100)., optional default: 1  @default [1]
		 * @param {DocumentArtboardLayout} artboardLayout - Layout of artboards for new document., optional default: DocumentArtboardLayout.GridByRow  @default [DocumentArtboardLayout.GridByRow]
		 * @param {number} artboardSpacing - Spacing between artboards for new document., optional default: 20.0  @default [20.0]
		 * @param {number} artboardRowsOrCols - Number of rows (for rows layout) OR column(for column layouts)of artboards.Range is 1 to (docNumArtboards - 1) or 1 for single row or column layouts., optional default: 1  @default [1]
		 */
		public add(documentColorSpace?: DocumentColorSpace, width?: number, height?: number, numArtboards?: number, artboardLayout?: DocumentArtboardLayout, artboardSpacing?: number, artboardRowsOrCols?: number): Document;
		

		/**
		 * Get the first element in the collection with the provided name.
		 * @return {Document}
		 * @param {string} name - 
		 */
		public getByName(name: string): Document;
		

		/**
		 * Arranges the documents in the specified style.
		 * @return {boolean}
		 * @param {DocumentLayoutStyle} layoutStyle - The document layout style.
		 */
		public arrange(layoutStyle: DocumentLayoutStyle): boolean;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Number of elements in the collection.
		 */
		public length: number;
	}

	/**
	 * A collection of layers.
	 */
	class Layers {
	[index: number]: Layer;
		

		/**
		 * Create a layer.
		 * @return {Layer}
		 */
		public static add(): Layer;
		

		/**
		 * Create a layer.
		 * @return {Layer}
		 */
		public add(): Layer;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Get the first element in the collection with the provided name.
		 * @return {Layer}
		 * @param {string} name - 
		 */
		public getByName(name: string): Layer;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Number of elements in the collection.
		 */
		public length: number;
	}

	/**
	 * A collection of group items.
	 */
	class GroupItems {
	[index: number]: GroupItem;
		

		/**
		 * Create a group item.
		 * @return {GroupItem}
		 */
		public static add(): GroupItem;
		

		/**
		 * Create a group item.
		 * @return {GroupItem}
		 */
		public add(): GroupItem;
		

		/**
		 * Create a group item from a vector graphics file.
		 * @return {GroupItem}
		 * @param {javascript.File} imageFile - The vector graphics file to be embedded.
		 */
		public static createFromFile(imageFile: javascript.File): GroupItem;
		

		/**
		 * Create a group item from a vector graphics file.
		 * @return {GroupItem}
		 * @param {javascript.File} imageFile - The vector graphics file to be embedded.
		 */
		public createFromFile(imageFile: javascript.File): GroupItem;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Get the first element in the collection with the provided name.
		 * @return {GroupItem}
		 * @param {string} name - 
		 */
		public getByName(name: string): GroupItem;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Number of elements in the collection.
		 */
		public length: number;
	}

	/**
	 * A collection of page items.
	 */
	class PageItems {
	[index: number]: PageItem;
		

		/**
		 * Get the first element in the collection with the provided name.
		 * @return {PageItem}
		 * @param {string} name - 
		 */
		public getByName(name: string): PageItem;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Number of elements in the collection.
		 */
		public length: number;
	}

	/**
	 * A collection of path items.
	 */
	class PathItems {
	[index: number]: PathItem;
		

		/**
		 * Create a path.
		 * @return {PathItem}
		 */
		public static add(): PathItem;
		

		/**
		 * Create a path.
		 * @return {PathItem}
		 */
		public add(): PathItem;
		

		/**
		 * Create an elliptical path item.
		 * @return {PathItem}
		 * @param {number} top - The ellipse's bounds., optional default: 100  @default [100]
		 * @param {number} left - The ellipse's bounds., optional default: 100  @default [100]
		 * @param {number} width - The ellipse's bounds., optional default: 50  @default [50]
		 * @param {number} height - The height of the ellipse., optional default: 100  @default [100]
		 * @param {boolean} reversed - Is the ellipse path reversed?, optional default: false  @default [false]
		 * @param {boolean} inscribed - Is the ellipse path inscribed?, optional default: true  @default [true]
		 */
		public static ellipse(top?: number, left?: number, width?: number, height?: number, reversed?: boolean, inscribed?: boolean): PathItem;
		

		/**
		 * Create an elliptical path item.
		 * @return {PathItem}
		 * @param {number} top - The ellipse's bounds., optional default: 100  @default [100]
		 * @param {number} left - The ellipse's bounds., optional default: 100  @default [100]
		 * @param {number} width - The ellipse's bounds., optional default: 50  @default [50]
		 * @param {number} height - The height of the ellipse., optional default: 100  @default [100]
		 * @param {boolean} reversed - Is the ellipse path reversed?, optional default: false  @default [false]
		 * @param {boolean} inscribed - Is the ellipse path inscribed?, optional default: true  @default [true]
		 */
		public ellipse(top?: number, left?: number, width?: number, height?: number, reversed?: boolean, inscribed?: boolean): PathItem;
		

		/**
		 * Used to create a rectangular path item. Not for path item access.
		 * @return {PathItem}
		 * @param {number} top - The top coordinate of the rectangle's bounds.
		 * @param {number} left - The left coordinate of the rectangle's bounds.
		 * @param {number} width - The width of the rectangle.
		 * @param {number} height - The height of the rectangle.
		 * @param {boolean} reversed - Is the rectangle path reversed?, optional default: false  @default [false]
		 */
		public static rectangle(top: number, left: number, width: number, height: number, reversed?: boolean): PathItem;
		

		/**
		 * Used to create a rectangular path item. Not for path item access.
		 * @return {PathItem}
		 * @param {number} top - The top coordinate of the rectangle's bounds.
		 * @param {number} left - The left coordinate of the rectangle's bounds.
		 * @param {number} width - The width of the rectangle.
		 * @param {number} height - The height of the rectangle.
		 * @param {boolean} reversed - Is the rectangle path reversed?, optional default: false  @default [false]
		 */
		public rectangle(top: number, left: number, width: number, height: number, reversed?: boolean): PathItem;
		

		/**
		 * Used to create a rounded-corner rectangular path item. Not for path item access.
		 * @return {PathItem}
		 * @param {number} top - 
		 * @param {number} left - 
		 * @param {number} width - 
		 * @param {number} height - 
		 * @param {number} horizontalRadius - Horizontal corner radius., optional default: 15  @default [15]
		 * @param {number} verticalRadius - Vertical corner radius., optional default: 20  @default [20]
		 * @param {boolean} reversed - Is the rectangle path reversed?, optional default: false  @default [false]
		 */
		public static roundedRectangle(top: number, left: number, width: number, height: number, horizontalRadius?: number, verticalRadius?: number, reversed?: boolean): PathItem;
		

		/**
		 * Used to create a rounded-corner rectangular path item. Not for path item access.
		 * @return {PathItem}
		 * @param {number} top - 
		 * @param {number} left - 
		 * @param {number} width - 
		 * @param {number} height - 
		 * @param {number} horizontalRadius - Horizontal corner radius., optional default: 15  @default [15]
		 * @param {number} verticalRadius - Vertical corner radius., optional default: 20  @default [20]
		 * @param {boolean} reversed - Is the rectangle path reversed?, optional default: false  @default [false]
		 */
		public roundedRectangle(top: number, left: number, width: number, height: number, horizontalRadius?: number, verticalRadius?: number, reversed?: boolean): PathItem;
		

		/**
		 * Used to create a regular polygon path item. Not for path item access.
		 * @return {PathItem}
		 * @param {number} centerX - , optional default: 200  @default [200]
		 * @param {number} centerY - , optional default: 300  @default [300]
		 * @param {number} radius - The radius of the polygon points., optional default: 50  @default [50]
		 * @param {number} sides - The number of sides on the polygon., optional default: 8  @default [8]
		 * @param {boolean} reversed - Is the polygon path reversed?, optional default: false  @default [false]
		 */
		public static polygon(centerX?: number, centerY?: number, radius?: number, sides?: number, reversed?: boolean): PathItem;
		

		/**
		 * Used to create a regular polygon path item. Not for path item access.
		 * @return {PathItem}
		 * @param {number} centerX - , optional default: 200  @default [200]
		 * @param {number} centerY - , optional default: 300  @default [300]
		 * @param {number} radius - The radius of the polygon points., optional default: 50  @default [50]
		 * @param {number} sides - The number of sides on the polygon., optional default: 8  @default [8]
		 * @param {boolean} reversed - Is the polygon path reversed?, optional default: false  @default [false]
		 */
		public polygon(centerX?: number, centerY?: number, radius?: number, sides?: number, reversed?: boolean): PathItem;
		

		/**
		 * Used to create a star-shaped path item. Not for path item access.
		 * @return {PathItem}
		 * @param {number} centerX - , optional default: 200  @default [200]
		 * @param {number} centerY - , optional default: 300  @default [300]
		 * @param {number} radius - The outside radius of the star points., optional default: 50  @default [50]
		 * @param {number} innerRadius - The inside radius of the star points., optional default: 20  @default [20]
		 * @param {number} points - The number of points on the star., optional default: 5  @default [5]
		 * @param {boolean} reversed - Is the star path reversed?, optional default: false  @default [false]
		 */
		public static star(centerX?: number, centerY?: number, radius?: number, innerRadius?: number, points?: number, reversed?: boolean): PathItem;
		

		/**
		 * Used to create a star-shaped path item. Not for path item access.
		 * @return {PathItem}
		 * @param {number} centerX - , optional default: 200  @default [200]
		 * @param {number} centerY - , optional default: 300  @default [300]
		 * @param {number} radius - The outside radius of the star points., optional default: 50  @default [50]
		 * @param {number} innerRadius - The inside radius of the star points., optional default: 20  @default [20]
		 * @param {number} points - The number of points on the star., optional default: 5  @default [5]
		 * @param {boolean} reversed - Is the star path reversed?, optional default: false  @default [false]
		 */
		public star(centerX?: number, centerY?: number, radius?: number, innerRadius?: number, points?: number, reversed?: boolean): PathItem;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Get the first element in the collection with the provided name.
		 * @return {PathItem}
		 * @param {string} name - 
		 */
		public getByName(name: string): PathItem;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Number of elements in the collection.
		 */
		public length: number;
	}

	/**
	 * A collection of path points.
	 */
	class PathPoints {
	[index: number]: PathPoint;
		

		/**
		 * Create a path point.
		 * @return {PathPoint}
		 */
		public static add(): PathPoint;
		

		/**
		 * Create a path point.
		 * @return {PathPoint}
		 */
		public add(): PathPoint;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Get the first element in the collection with the provided name.
		 * @return {PathPoint}
		 * @param {string} name - 
		 */
		public getByName(name: string): PathPoint;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Number of elements in the collection.
		 */
		public length: number;
	}

	/**
	 * A collection of compound path items.
	 */
	class CompoundPathItems {
	[index: number]: CompoundPathItem;
		

		/**
		 * Create a compound path item.
		 * @return {CompoundPathItem}
		 */
		public static add(): CompoundPathItem;
		

		/**
		 * Create a compound path item.
		 * @return {CompoundPathItem}
		 */
		public add(): CompoundPathItem;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Get the first element in the collection with the provided name.
		 * @return {CompoundPathItem}
		 * @param {string} name - 
		 */
		public getByName(name: string): CompoundPathItem;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Number of elements in the collection.
		 */
		public length: number;
	}

	/**
	 * A collection of stories.
	 */
	class Stories {
	[index: number]: Story;
		

		/**
		 * Get the first element in the collection with the provided name.
		 * @return {Story}
		 * @param {string} name - 
		 */
		public getByName(name: string): Story;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Number of elements in the collection.
		 */
		public length: number;
	}

	/**
	 * A collection of text frame items.
	 */
	class TextFrameItems {
	[index: number]: TextFrameItem;
		

		/**
		 * Create a point text frame item.
		 * @return {TextFrameItem}
		 */
		public static add(): TextFrameItem;
		

		/**
		 * Create a point text frame item.
		 * @return {TextFrameItem}
		 */
		public add(): TextFrameItem;
		

		/**
		 * Create a point text frame item.
		 * @return {TextFrameItem}
		 * @param {number[]} anchor - The position (coordinates) of the anchor point.
		 * @param {TextOrientation} orientation - The orientation of the text., optional default: TextOrientation.HORIZONTAL  @default [TextOrientation.HORIZONTAL]
		 */
		public static pointText(anchor: number[], orientation?: TextOrientation): TextFrameItem;
		

		/**
		 * Create a point text frame item.
		 * @return {TextFrameItem}
		 * @param {number[]} anchor - The position (coordinates) of the anchor point.
		 * @param {TextOrientation} orientation - The orientation of the text., optional default: TextOrientation.HORIZONTAL  @default [TextOrientation.HORIZONTAL]
		 */
		public pointText(anchor: number[], orientation?: TextOrientation): TextFrameItem;
		

		/**
		 * Create an area text frame item.
		 * @return {TextFrameItem}
		 * @param {PathItem} textPath - The path item associated with the text frame.
		 * @param {TextOrientation} orientation - The orientation of the text., optional default: TextOrientation.HORIZONTAL  @default [TextOrientation.HORIZONTAL]
		 * @param {TextFrameItem} baseFrame - The base text frame if it has one.
		 * @param {boolean} postFix - Whether to postfix/prefix the new text frame to the specified base text frame., optional default: true  @default [true]
		 */
		public static areaText(textPath: PathItem, orientation?: TextOrientation, baseFrame?: TextFrameItem, postFix?: boolean): TextFrameItem;
		

		/**
		 * Create an area text frame item.
		 * @return {TextFrameItem}
		 * @param {PathItem} textPath - The path item associated with the text frame.
		 * @param {TextOrientation} orientation - The orientation of the text., optional default: TextOrientation.HORIZONTAL  @default [TextOrientation.HORIZONTAL]
		 * @param {TextFrameItem} baseFrame - The base text frame if it has one.
		 * @param {boolean} postFix - Whether to postfix/prefix the new text frame to the specified base text frame., optional default: true  @default [true]
		 */
		public areaText(textPath: PathItem, orientation?: TextOrientation, baseFrame?: TextFrameItem, postFix?: boolean): TextFrameItem;
		

		/**
		 * Create an on-path text frame item.
		 * @return {TextFrameItem}
		 * @param {PathItem} textPath - The path item associated with the text frame.
		 * @param {number} startTValue - The start position of text along a path, as a value relative to the path's segments (path text only), optional default: 0.0  @default [0.0]
		 * @param {number} endTValue - The end position of text along a path, as a value relative to the path's segments (path text only), optional default: 0.0  @default [0.0]
		 * @param {TextOrientation} orientation - The orientation of the text., optional default: TextOrientation.HORIZONTAL  @default [TextOrientation.HORIZONTAL]
		 * @param {TextFrameItem} baseFrame - The base text frame if it has one.
		 * @param {boolean} postFix - Whether to postfix/prefix the new text frame to the specified base text frame., optional default: true  @default [true]
		 */
		public static pathText(textPath: PathItem, startTValue?: number, endTValue?: number, orientation?: TextOrientation, baseFrame?: TextFrameItem, postFix?: boolean): TextFrameItem;
		

		/**
		 * Create an on-path text frame item.
		 * @return {TextFrameItem}
		 * @param {PathItem} textPath - The path item associated with the text frame.
		 * @param {number} startTValue - The start position of text along a path, as a value relative to the path's segments (path text only), optional default: 0.0  @default [0.0]
		 * @param {number} endTValue - The end position of text along a path, as a value relative to the path's segments (path text only), optional default: 0.0  @default [0.0]
		 * @param {TextOrientation} orientation - The orientation of the text., optional default: TextOrientation.HORIZONTAL  @default [TextOrientation.HORIZONTAL]
		 * @param {TextFrameItem} baseFrame - The base text frame if it has one.
		 * @param {boolean} postFix - Whether to postfix/prefix the new text frame to the specified base text frame., optional default: true  @default [true]
		 */
		public pathText(textPath: PathItem, startTValue?: number, endTValue?: number, orientation?: TextOrientation, baseFrame?: TextFrameItem, postFix?: boolean): TextFrameItem;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Get the first element in the collection with the provided name.
		 * @return {TextFrameItem}
		 * @param {string} name - 
		 */
		public getByName(name: string): TextFrameItem;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Number of elements in the collection.
		 */
		public length: number;
	}

	/**
	 * A collection of legacy text items.
	 */
	class LegacyTextItems {
	[index: number]: LegacyTextItem;
		

		/**
		 * Get the first element in the collection with the provided name.
		 * @return {LegacyTextItem}
		 * @param {string} name - 
		 */
		public getByName(name: string): LegacyTextItem;
		

		/**
		 * Create text frames from all legacy text items. The original legacy text items will be deleted.
		 * @return {boolean}
		 */
		public convertToNative(): boolean;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Number of elements in the collection.
		 */
		public length: number;
	}

	/**
	 * A collection of text range items.
	 */
	class TextRanges {
	[index: number]: TextRange;
		

		/**
		 * Get the first element in the collection with the provided name.
		 * @return {TextRange}
		 * @param {string} name - 
		 */
		public getByName(name: string): TextRange;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Number of elements in the collection.
		 */
		public length: number;
	}

	/**
	 * A collection of insertion points.
	 */
	class InsertionPoints {
	[index: number]: InsertionPoint;
		

		/**
		 * Get the first element in the collection with the provided name.
		 * @return {InsertionPoint}
		 * @param {string} name - 
		 */
		public getByName(name: string): InsertionPoint;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Number of elements in the collection.
		 */
		public length: number;
	}

	/**
	 * A collection of characters.
	 */
	class Characters {
	[index: number]: TextRange;
		

		/**
		 * Create a character.
		 * @return {TextRange}
		 * @param {string} contents - The text string.
		 */
		public static add(contents: string): TextRange;
		

		/**
		 * Create a character.
		 * @return {TextRange}
		 * @param {string} contents - The text string.
		 */
		public add(contents: string): TextRange;
		

		/**
		 * @return {TextRange}
		 * @param {string} contents - The text string.
		 */
		public static addBefore(contents: string): TextRange;
		

		/**
		 * @return {TextRange}
		 * @param {string} contents - The text string.
		 */
		public addBefore(contents: string): TextRange;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Get the first element in the collection with the provided name.
		 * @return {TextRange}
		 * @param {string} name - 
		 */
		public getByName(name: string): TextRange;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Number of elements in the collection.
		 */
		public length: number;
	}

	/**
	 * A collection of words.
	 */
	class Words {
	[index: number]: TextRange;
		

		/**
		 * Create a word.
		 * @return {TextRange}
		 * @param {string} contents - The text string.
		 */
		public static add(contents: string): TextRange;
		

		/**
		 * Create a word.
		 * @return {TextRange}
		 * @param {string} contents - The text string.
		 */
		public add(contents: string): TextRange;
		

		/**
		 * @return {TextRange}
		 * @param {string} contents - The text string.
		 */
		public static addBefore(contents: string): TextRange;
		

		/**
		 * @return {TextRange}
		 * @param {string} contents - The text string.
		 */
		public addBefore(contents: string): TextRange;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Get the first element in the collection with the provided name.
		 * @return {TextRange}
		 * @param {string} name - 
		 */
		public getByName(name: string): TextRange;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Number of elements in the collection.
		 */
		public length: number;
	}

	/**
	 * A collection of lines.
	 */
	class Lines {
	[index: number]: TextRange;
		

		/**
		 * Get the first element in the collection with the provided name.
		 * @return {TextRange}
		 * @param {string} name - 
		 */
		public getByName(name: string): TextRange;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Number of elements in the collection.
		 */
		public length: number;
	}

	/**
	 * A collection of Paragraphs.
	 */
	class Paragraphs {
	[index: number]: TextRange;
		

		/**
		 * Create a text art item.
		 * @return {TextRange}
		 * @param {string} contents - The text string.
		 */
		public static add(contents: string): TextRange;
		

		/**
		 * Create a text art item.
		 * @return {TextRange}
		 * @param {string} contents - The text string.
		 */
		public add(contents: string): TextRange;
		

		/**
		 * @return {TextRange}
		 * @param {string} contents - The text string.
		 */
		public static addBefore(contents: string): TextRange;
		

		/**
		 * @return {TextRange}
		 * @param {string} contents - The text string.
		 */
		public addBefore(contents: string): TextRange;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Get the first element in the collection with the provided name.
		 * @return {TextRange}
		 * @param {string} name - 
		 */
		public getByName(name: string): TextRange;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Number of elements in the collection.
		 */
		public length: number;
	}

	/**
	 * A collection of character styles.
	 */
	class CharacterStyles {
	[index: number]: CharacterStyle;
		

		/**
		 * Create a named character style.
		 * @return {CharacterStyle}
		 * @param {string} name - The character style name.
		 */
		public static add(name: string): CharacterStyle;
		

		/**
		 * Create a named character style.
		 * @return {CharacterStyle}
		 * @param {string} name - The character style name.
		 */
		public add(name: string): CharacterStyle;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Get the first element in the collection with the provided name.
		 * @return {CharacterStyle}
		 * @param {string} name - 
		 */
		public getByName(name: string): CharacterStyle;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Number of elements in the collection.
		 */
		public length: number;
	}

	/**
	 * A collection of paragraph styles.
	 */
	class ParagraphStyles {
	[index: number]: ParagraphStyle;
		

		/**
		 * Create a named paragraph style.
		 * @return {ParagraphStyle}
		 * @param {string} name - The paragraph style name.
		 */
		public static add(name: string): ParagraphStyle;
		

		/**
		 * Create a named paragraph style.
		 * @return {ParagraphStyle}
		 * @param {string} name - The paragraph style name.
		 */
		public add(name: string): ParagraphStyle;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Get the first element in the collection with the provided name.
		 * @return {ParagraphStyle}
		 * @param {string} name - 
		 */
		public getByName(name: string): ParagraphStyle;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Number of elements in the collection.
		 */
		public length: number;
	}

	/**
	 * A collection of custom spot colors.
	 */
	class Spots {
	[index: number]: Spot;
		

		/**
		 * Create a spot color.
		 * @return {Spot}
		 */
		public static add(): Spot;
		

		/**
		 * Create a spot color.
		 * @return {Spot}
		 */
		public add(): Spot;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Get the first element in the collection with the provided name.
		 * @return {Spot}
		 * @param {string} name - 
		 */
		public getByName(name: string): Spot;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Number of elements in the collection.
		 */
		public length: number;
	}

	/**
	 * A collection of swatches.
	 */
	class Swatches {
	[index: number]: Swatch;
		

		/**
		 * Create a swatch.
		 * @return {Swatch}
		 */
		public static add(): Swatch;
		

		/**
		 * Create a swatch.
		 * @return {Swatch}
		 */
		public add(): Swatch;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Get the first element in the collection with the provided name.
		 * @return {Swatch}
		 * @param {string} name - 
		 */
		public getByName(name: string): Swatch;
		

		/**
		 * Get selected swatches in the document.
		 * @return {Swatch[]}
		 */
		public getSelected(): Swatch[];
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Number of elements in the collection.
		 */
		public length: number;
	}

	/**
	 * A collection of Swatch groups.
	 */
	class SwatchGroups {
	[index: number]: SwatchGroup;
		

		/**
		 * Create a Swatch group.
		 * @return {SwatchGroup}
		 */
		public static add(): SwatchGroup;
		

		/**
		 * Create a Swatch group.
		 * @return {SwatchGroup}
		 */
		public add(): SwatchGroup;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Get the first element in the collection with the provided name.
		 * @return {SwatchGroup}
		 * @param {string} name - 
		 */
		public getByName(name: string): SwatchGroup;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Number of elements in the collection.
		 */
		public length: number;
	}

	/**
	 * A collection of gradients.
	 */
	class Gradients {
	[index: number]: Gradient;
		

		/**
		 * Create a gradient.
		 * @return {Gradient}
		 */
		public static add(): Gradient;
		

		/**
		 * Create a gradient.
		 * @return {Gradient}
		 */
		public add(): Gradient;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Get the first element in the collection with the provided name.
		 * @return {Gradient}
		 * @param {string} name - 
		 */
		public getByName(name: string): Gradient;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Number of elements in the collection.
		 */
		public length: number;
	}

	/**
	 * A collection of gradient stops.
	 */
	class GradientStops {
	[index: number]: GradientStop;
		

		/**
		 * Create a gradient stop.
		 * @return {GradientStop}
		 */
		public static add(): GradientStop;
		

		/**
		 * Create a gradient stop.
		 * @return {GradientStop}
		 */
		public add(): GradientStop;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Get the first element in the collection with the provided name.
		 * @return {GradientStop}
		 * @param {string} name - 
		 */
		public getByName(name: string): GradientStop;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Number of elements in the collection.
		 */
		public length: number;
	}

	/**
	 * A collection of patterns.
	 */
	class Patterns {
	[index: number]: Pattern;
		

		/**
		 * Create a pattern.
		 * @return {Pattern}
		 */
		public static add(): Pattern;
		

		/**
		 * Create a pattern.
		 * @return {Pattern}
		 */
		public add(): Pattern;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Get the first element in the collection with the provided name.
		 * @return {Pattern}
		 * @param {string} name - 
		 */
		public getByName(name: string): Pattern;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Number of elements in the collection.
		 */
		public length: number;
	}

	/**
	 * A collection of symbols.
	 */
	class Symbols {
	[index: number]: Symbol;
		

		/**
		 * Create a symbol.
		 * @return {Symbol}
		 * @param {PageItem} sourceArt - The art item from which to make this symbol.
		 * @param {SymbolRegistrationPoint} registrationPoint - The symbol registration point., optional default: SymbolRegistrationPoint.SYMBOLCENTERPOINT  @default [SymbolRegistrationPoint.SYMBOLCENTERPOINT]
		 */
		public static add(sourceArt: PageItem, registrationPoint?: SymbolRegistrationPoint): Symbol;
		

		/**
		 * Create a symbol.
		 * @return {Symbol}
		 * @param {PageItem} sourceArt - The art item from which to make this symbol.
		 * @param {SymbolRegistrationPoint} registrationPoint - The symbol registration point., optional default: SymbolRegistrationPoint.SYMBOLCENTERPOINT  @default [SymbolRegistrationPoint.SYMBOLCENTERPOINT]
		 */
		public add(sourceArt: PageItem, registrationPoint?: SymbolRegistrationPoint): Symbol;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Get the first element in the collection with the provided name.
		 * @return {Symbol}
		 * @param {string} name - 
		 */
		public getByName(name: string): Symbol;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Number of elements in the collection.
		 */
		public length: number;
	}

	/**
	 * A collection of symbol items.
	 */
	class SymbolItems {
	[index: number]: SymbolItem;
		

		/**
		 * An instance of a symbol item.
		 * @return {SymbolItem}
		 * @param {Symbol} symbol - The symbol to make an instance of.
		 */
		public static add(symbol: Symbol): SymbolItem;
		

		/**
		 * An instance of a symbol item.
		 * @return {SymbolItem}
		 * @param {Symbol} symbol - The symbol to make an instance of.
		 */
		public add(symbol: Symbol): SymbolItem;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Get the first element in the collection with the provided name.
		 * @return {SymbolItem}
		 * @param {string} name - 
		 */
		public getByName(name: string): SymbolItem;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Number of elements in the collection.
		 */
		public length: number;
	}

	/**
	 * A collection of brushes.
	 */
	class Brushes {
	[index: number]: Brush;
		

		/**
		 * Create a brush.
		 * @return {Brush}
		 * @param {javascript.File} brushDefinition - The brush definition from which the brush would be created.
		 * @param {string} brushName - The name of the brush.
		 */
		public static add(brushDefinition: javascript.File, brushName?: string): Brush;
		

		/**
		 * Create a brush.
		 * @return {Brush}
		 * @param {javascript.File} brushDefinition - The brush definition from which the brush would be created.
		 * @param {string} brushName - The name of the brush.
		 */
		public add(brushDefinition: javascript.File, brushName?: string): Brush;
		

		/**
		 * Create a brush, select the brush tool and load the created brush in the brush tool.
		 * @return {Brush}
		 * @param {javascript.File} brushDefinition - The brush definition from which the brush would be created.
		 */
		public static addAndLoad(brushDefinition: javascript.File): Brush;
		

		/**
		 * Create a brush, select the brush tool and load the created brush in the brush tool.
		 * @return {Brush}
		 * @param {javascript.File} brushDefinition - The brush definition from which the brush would be created.
		 */
		public addAndLoad(brushDefinition: javascript.File): Brush;
		

		/**
		 * Get the first element in the collection with the provided name.
		 * @return {Brush}
		 * @param {string} name - 
		 */
		public getByName(name: string): Brush;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Number of elements in the collection.
		 */
		public length: number;
	}

	/**
	 * A collection of art styles.
	 */
	class ArtStyles {
	[index: number]: ArtStyle;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Get the first element in the collection with the provided name.
		 * @return {ArtStyle}
		 * @param {string} name - 
		 */
		public getByName(name: string): ArtStyle;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Number of elements in the collection.
		 */
		public length: number;
	}

	/**
	 * A collection of fonts.
	 */
	class TextFonts {
	[index: number]: TextFont;
		

		/**
		 * Get the first element in the collection with the provided name.
		 * @return {TextFont}
		 * @param {string} name - 
		 */
		public getByName(name: string): TextFont;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Number of elements in the collection.
		 */
		public length: number;
	}

	/**
	 * The collection of tags associated with a page item.
	 */
	class Tags {
		

		/**
		 * Create a tag.
		 * @return {Tag}
		 */
		public static add(): Tag;
		

		/**
		 * Create a tag.
		 * @return {Tag}
		 */
		public add(): Tag;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Get the first element in the collection with the provided name.
		 * @return {Tag}
		 * @param {string} name - 
		 */
		public getByName(name: string): Tag;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Number of elements in the collection.
		 */
		public length: number;
	}

	/**
	 */
	class RasterItems {
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Get the first element in the collection with the provided name.
		 * @return {RasterItem}
		 * @param {string} name - 
		 */
		public getByName(name: string): RasterItem;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Number of elements in the collection.
		 */
		public length: number;
	}

	/**
	 */
	class PlacedItems {
		

		/**
		 * Create a placed item.
		 * @return {PlacedItem}
		 */
		public static add(): PlacedItem;
		

		/**
		 * Create a placed item.
		 * @return {PlacedItem}
		 */
		public add(): PlacedItem;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Get the first element in the collection with the provided name.
		 * @return {PlacedItem}
		 * @param {string} name - 
		 */
		public getByName(name: string): PlacedItem;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Number of elements in the collection.
		 */
		public length: number;
	}

	/**
	 * EmbeddedItems Collection.
	 */
	class EmbeddedItems {
		

		/**
		 * Create an embedded item.
		 * @return {EmbedItem}
		 */
		public static add(): EmbedItem;
		

		/**
		 * Create an embedded item.
		 * @return {EmbedItem}
		 */
		public add(): EmbedItem;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Get the first element in the collection with the provided name.
		 * @return {EmbedItem}
		 * @param {string} name - 
		 */
		public getByName(name: string): EmbedItem;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Number of elements in the collection.
		 */
		public length: number;
	}

	/**
	 */
	class MeshItems {
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Get the first element in the collection with the provided name.
		 * @return {MeshItem}
		 * @param {string} name - 
		 */
		public getByName(name: string): MeshItem;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Number of elements in the collection.
		 */
		public length: number;
	}

	/**
	 */
	class GraphItems {
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Get the first element in the collection with the provided name.
		 * @return {GraphItem}
		 * @param {string} name - 
		 */
		public getByName(name: string): GraphItem;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Number of elements in the collection.
		 */
		public length: number;
	}

	/**
	 */
	class PluginItems {
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Get the first element in the collection with the provided name.
		 * @return {PluginItem}
		 * @param {string} name - 
		 */
		public getByName(name: string): PluginItem;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Number of elements in the collection.
		 */
		public length: number;
	}

	/**
	 */
	class NonNativeItems {
		

		/**
		 * Get the first element in the collection with the provided name.
		 * @return {NonNativeItem}
		 * @param {string} name - 
		 */
		public getByName(name: string): NonNativeItem;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Number of elements in the collection.
		 */
		public length: number;
	}

	/**
	 * A collection of views.
	 */
	class Views {
	[index: number]: View;
		

		/**
		 * Get the first element in the collection with the provided name.
		 * @return {View}
		 * @param {string} name - 
		 */
		public getByName(name: string): View;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Number of elements in the collection.
		 */
		public length: number;
	}

	/**
	 * A collection of variables.
	 */
	class Variables {
	[index: number]: Variable;
		

		/**
		 * Create a variable.
		 * @return {Variable}
		 */
		public static add(): Variable;
		

		/**
		 * Create a variable.
		 * @return {Variable}
		 */
		public add(): Variable;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Get the first element in the collection with the provided name.
		 * @return {Variable}
		 * @param {string} name - 
		 */
		public getByName(name: string): Variable;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Number of elements in the collection.
		 */
		public length: number;
	}

	/**
	 * A collection of datasets.
	 */
	class DataSets {
	[index: number]: DataSet;
		

		/**
		 * Create a data set.
		 * @return {DataSet}
		 */
		public static add(): DataSet;
		

		/**
		 * Create a data set.
		 * @return {DataSet}
		 */
		public add(): DataSet;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Get the first element in the collection with the provided name.
		 * @return {DataSet}
		 * @param {string} name - 
		 */
		public getByName(name: string): DataSet;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Number of elements in the collection.
		 */
		public length: number;
	}

	/**
	 * Options which may be supplied when opening a file.
	 */
	class OpenOptions {
		

		/**
		 * Choose to update all text objects for documents saved with legacy texts (pre-Illustrator 11)
		 */
		public static updateLegacyText: boolean;
		

		/**
		 * Choose to update all text objects for documents saved with legacy texts (pre-Illustrator 11)
		 */
		public updateLegacyText: boolean;
		

		/**
		 * Choose to preserve the spot colors in the gradient mesh objects for legacy documents (pre-Illustrator CS3)
		 */
		public static updateLegacyGradientMesh: boolean;
		

		/**
		 * Choose to preserve the spot colors in the gradient mesh objects for legacy documents (pre-Illustrator CS3)
		 */
		public updateLegacyGradientMesh: boolean;
		

		/**
		 * Open the file as library.
		 */
		public static openAs: LibraryType;
		

		/**
		 * Open the file as library.
		 */
		public openAs: LibraryType;
		

		/**
		 * Preserve Legacy Artboard (pre-Illustrator CS4) when opening in CS4 or later.
		 */
		public static preserveLegacyArtboard: boolean;
		

		/**
		 * Preserve Legacy Artboard (pre-Illustrator CS4) when opening in CS4 or later.
		 */
		public preserveLegacyArtboard: boolean;
		

		/**
		 * Convert crop area to Artboard when opening legacy document (pre-Illustrator CS4) in CS4 or later. If false then crop areas are discarded.
		 */
		public static convertCropAreaToArtboard: boolean;
		

		/**
		 * Convert crop area to Artboard when opening legacy document (pre-Illustrator CS4) in CS4 or later. If false then crop areas are discarded.
		 */
		public convertCropAreaToArtboard: boolean;
		

		/**
		 * Create Artboard with dimentions of artwork bounding box when opening legacy document (pre-Illustrator CS4) in CS4 or later.
		 */
		public static createArtboardWithArtworkBoundingBox: boolean;
		

		/**
		 * Create Artboard with dimentions of artwork bounding box when opening legacy document (pre-Illustrator CS4) in CS4 or later.
		 */
		public createArtboardWithArtworkBoundingBox: boolean;
		

		/**
		 * Convert print tiles to Artboard when opening legacy document (pre-Illustrator CS4) in CS4 or later.
		 */
		public static convertTilesToArtboard: boolean;
		

		/**
		 * Convert print tiles to Artboard when opening legacy document (pre-Illustrator CS4) in CS4 or later.
		 */
		public convertTilesToArtboard: boolean;
		

		/**
		 * Add this file to the list of recently opened files.
		 */
		public static addToRecentFiles: boolean;
		

		/**
		 * Add this file to the list of recently opened files.
		 */
		public addToRecentFiles: boolean;
	}

	/**
	 * Options which may be supplied when saving a document as an FXG file.
	 */
	class FXGSaveOptions {
		

		/**
		 * All the artboards or range of the artboards will be saved.
		 */
		public static saveMultipleArtboards: boolean;
		

		/**
		 * All the artboards or range of the artboards will be saved.
		 */
		public saveMultipleArtboards: boolean;
		

		/**
		 * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.
		 */
		public static artboardRange: string;
		

		/**
		 * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.
		 */
		public artboardRange: string;
		

		/**
		 * The version of the FXG file format to create.
		 */
		public static version: FXGVersion;
		

		/**
		 * The version of the FXG file format to create.
		 */
		public version: FXGVersion;
		

		/**
		 * Choose to preserve the editing capabilities of FXG.
		 */
		public static preserveEditingCapabilities: boolean;
		

		/**
		 * Choose to preserve the editing capabilities of FXG.
		 */
		public preserveEditingCapabilities: boolean;
		

		/**
		 * Choose to include unused symbols.
		 */
		public static includeUnusedSymbols: boolean;
		

		/**
		 * Choose to include unused symbols.
		 */
		public includeUnusedSymbols: boolean;
		

		/**
		 * Choose to downsample the linked images(72ppi)
		 */
		public static downsampleLinkedImages: boolean;
		

		/**
		 * Choose to downsample the linked images(72ppi)
		 */
		public downsampleLinkedImages: boolean;
		

		/**
		 * Choose to include metadata (XMP)
		 */
		public static includeMetadata: boolean;
		

		/**
		 * Choose to include metadata (XMP)
		 */
		public includeMetadata: boolean;
		

		/**
		 * The policy used by FXG to preserve filters.
		 */
		public static filtersPolicy: FiltersPreservePolicy;
		

		/**
		 * The policy used by FXG to preserve filters.
		 */
		public filtersPolicy: FiltersPreservePolicy;
		

		/**
		 * The policy used by FXG to preserve text.
		 */
		public static textPolicy: TextPreservePolicy;
		

		/**
		 * The policy used by FXG to preserve text.
		 */
		public textPolicy: TextPreservePolicy;
		

		/**
		 * The policy used by FXG to preserve gradients.
		 */
		public static gradientsPolicy: GradientsPreservePolicy;
		

		/**
		 * The policy used by FXG to preserve gradients.
		 */
		public gradientsPolicy: GradientsPreservePolicy;
		

		/**
		 * The policy used by FXG to expand blends.
		 */
		public static blendsPolicy: BlendsExpandPolicy;
		

		/**
		 * The policy used by FXG to expand blends.
		 */
		public blendsPolicy: BlendsExpandPolicy;
	}

	/**
	 * Options which may be supplied when saving a document as an Illustrator EPS file.
	 */
	class EPSSaveOptions {
		

		/**
		 * What Illustrator file format version to create.
		 */
		public static compatibility: Compatibility;
		

		/**
		 * What Illustrator file format version to create.
		 */
		public compatibility: Compatibility;
		

		/**
		 * EPS preview format.
		 */
		public static preview: EPSPreview;
		

		/**
		 * EPS preview format.
		 */
		public preview: EPSPreview;
		

		/**
		 * Are linked image files to be included in the saved document.
		 */
		public static embedLinkedFiles: boolean;
		

		/**
		 * Are linked image files to be included in the saved document.
		 */
		public embedLinkedFiles: boolean;
		

		/**
		 * Include thumbnail image of the EPS artwork.
		 */
		public static includeDocumentThumbnails: boolean;
		

		/**
		 * Include thumbnail image of the EPS artwork.
		 */
		public includeDocumentThumbnails: boolean;
		

		/**
		 * Embed all fonts used by the document in the saved file (version 7 or later)
		 */
		public static embedAllFonts: boolean;
		

		/**
		 * Embed all fonts used by the document in the saved file (version 7 or later)
		 */
		public embedAllFonts: boolean;
		

		/**
		 * Use CMYK PostScript.
		 */
		public static cmykPostScript: boolean;
		

		/**
		 * Use CMYK PostScript.
		 */
		public cmykPostScript: boolean;
		

		/**
		 * PostScript level to use (level 1 valid for file format version 8 or older)
		 */
		public static postScript: EPSPostScriptLevelEnum;
		

		/**
		 * PostScript level to use (level 1 valid for file format version 8 or older)
		 */
		public postScript: EPSPostScriptLevelEnum;
		

		/**
		 * How should transparency be flattened for older file format versions (pre-version 9)
		 */
		public static flattenOutput: OutputFlattening;
		

		/**
		 * How should transparency be flattened for older file format versions (pre-version 9)
		 */
		public flattenOutput: OutputFlattening;
		

		/**
		 * Create a raster item of the gradient or gradient mesh so that PostScript Level 2 printers can print the object.
		 */
		public static compatibleGradientPrinting: boolean;
		

		/**
		 * Create a raster item of the gradient or gradient mesh so that PostScript Level 2 printers can print the object.
		 */
		public compatibleGradientPrinting: boolean;
		

		/**
		 */
		public static overprint: PDFOverprint;
		

		/**
		 */
		public overprint: PDFOverprint;
		

		/**
		 * All the artboards or range of the artboards will be saved.
		 */
		public static saveMultipleArtboards: boolean;
		

		/**
		 * All the artboards or range of the artboards will be saved.
		 */
		public saveMultipleArtboards: boolean;
		

		/**
		 * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.
		 */
		public static artboardRange: string;
		

		/**
		 * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.
		 */
		public artboardRange: string;
	}

	/**
	 * Options which may be supplied when saving a document as a PDF file.
	 */
	class PDFSaveOptions {
		

		/**
		 * The max string length is 255 bytes. Name of PDF preset to use.
		 */
		public static pDFPreset: string;
		

		/**
		 * The max string length is 255 bytes. Name of PDF preset to use.
		 */
		public pDFPreset: string;
		

		/**
		 * The version of the Acrobat file format to create.
		 */
		public static compatibility: PDFCompatibility;
		

		/**
		 * The version of the Acrobat file format to create.
		 */
		public compatibility: PDFCompatibility;
		

		/**
		 * This control includes the None option for when the user is not complying with any PDF standard.
		 */
		public static pDFXStandard: PDFXStandard;
		

		/**
		 * This control includes the None option for when the user is not complying with any PDF standard.
		 */
		public pDFXStandard: PDFXStandard;
		

		/**
		 * This displays the description from the selected preset.
		 */
		public static pDFXStandardDescription: string;
		

		/**
		 * This displays the description from the selected preset.
		 */
		public pDFXStandardDescription: string;
		

		/**
		 * Preserve Illustrator editing capabilities when saving the document.
		 */
		public static preserveEditability: boolean;
		

		/**
		 * Preserve Illustrator editing capabilities when saving the document.
		 */
		public preserveEditability: boolean;
		

		/**
		 * Generate thumbnails for the saved document.
		 */
		public static generateThumbnails: boolean;
		

		/**
		 * Generate thumbnails for the saved document.
		 */
		public generateThumbnails: boolean;
		

		/**
		 * Should the PDF document be optimized for fast web viewing.
		 */
		public static optimization: boolean;
		

		/**
		 * Should the PDF document be optimized for fast web viewing.
		 */
		public optimization: boolean;
		

		/**
		 * View PDF after saving.
		 */
		public static viewAfterSaving: boolean;
		

		/**
		 * View PDF after saving.
		 */
		public viewAfterSaving: boolean;
		

		/**
		 * How should color bitmap images be compressed.
		 */
		public static colorCompression: CompressionQuality;
		

		/**
		 * How should color bitmap images be compressed.
		 */
		public colorCompression: CompressionQuality;
		

		/**
		 * Tile size when compressing with JPEG2000.
		 */
		public static colorTileSize: number;
		

		/**
		 * Tile size when compressing with JPEG2000.
		 */
		public colorTileSize: number;
		

		/**
		 * How should color bitmap images be resampled.
		 */
		public static colorDownsamplingMethod: DownsampleMethod;
		

		/**
		 * How should color bitmap images be resampled.
		 */
		public colorDownsamplingMethod: DownsampleMethod;
		

		/**
		 * If zero, no downsampling, otherwise, the resolution to downsample color bitmap images to.
		 */
		public static colorDownsampling: number;
		

		/**
		 * If zero, no downsampling, otherwise, the resolution to downsample color bitmap images to.
		 */
		public colorDownsampling: number;
		

		/**
		 * Downsample if the image's resolution is above this value.
		 */
		public static colorDownsamplingImageThreshold: number;
		

		/**
		 * Downsample if the image's resolution is above this value.
		 */
		public colorDownsamplingImageThreshold: number;
		

		/**
		 * How should grayscale bitmap images be compressed.
		 */
		public static grayscaleCompression: CompressionQuality;
		

		/**
		 * How should grayscale bitmap images be compressed.
		 */
		public grayscaleCompression: CompressionQuality;
		

		/**
		 * Tile size when compressing with JPEG2000.
		 */
		public static grayscaleTileSize: number;
		

		/**
		 * Tile size when compressing with JPEG2000.
		 */
		public grayscaleTileSize: number;
		

		/**
		 * How should grayscale bitmap images be resampled.
		 */
		public static grayscaleDownsamplingMethod: DownsampleMethod;
		

		/**
		 * How should grayscale bitmap images be resampled.
		 */
		public grayscaleDownsamplingMethod: DownsampleMethod;
		

		/**
		 * If zero, no downsampling, otherwise, the resolution to downsample grayscale images to.
		 */
		public static grayscaleDownsampling: number;
		

		/**
		 * If zero, no downsampling, otherwise, the resolution to downsample grayscale images to.
		 */
		public grayscaleDownsampling: number;
		

		/**
		 * Downsample if the image's resolution is above this value.
		 */
		public static grayscaleDownsamplingImageThreshold: number;
		

		/**
		 * Downsample if the image's resolution is above this value.
		 */
		public grayscaleDownsamplingImageThreshold: number;
		

		/**
		 * How should monochrome bitmap images be compressed.
		 */
		public static monochromeCompression: MonochromeCompression;
		

		/**
		 * How should monochrome bitmap images be compressed.
		 */
		public monochromeCompression: MonochromeCompression;
		

		/**
		 * How should monochrome bitmap images be resampled.
		 */
		public static monochromeDownsamplingMethod: DownsampleMethod;
		

		/**
		 * How should monochrome bitmap images be resampled.
		 */
		public monochromeDownsamplingMethod: DownsampleMethod;
		

		/**
		 * If zero, no downsampling, otherwise, the resolution to downsample images to.
		 */
		public static monochromeDownsampling: number;
		

		/**
		 * If zero, no downsampling, otherwise, the resolution to downsample images to.
		 */
		public monochromeDownsampling: number;
		

		/**
		 * Downsample if the image's resolution is above this value.
		 */
		public static monochromeDownsamplingImageThreshold: number;
		

		/**
		 * Downsample if the image's resolution is above this value.
		 */
		public monochromeDownsamplingImageThreshold: number;
		

		/**
		 * Should line art and text be compressed?
		 */
		public static compressArt: boolean;
		

		/**
		 * Should line art and text be compressed?
		 */
		public compressArt: boolean;
		

		/**
		 * Draw trim marks.
		 */
		public static trimMarks: boolean;
		

		/**
		 * Draw trim marks.
		 */
		public trimMarks: boolean;
		

		/**
		 * Draw registration marks.
		 */
		public static registrationMarks: boolean;
		

		/**
		 * Draw registration marks.
		 */
		public registrationMarks: boolean;
		

		/**
		 * Draw color bars.
		 */
		public static colorBars: boolean;
		

		/**
		 * Draw color bars.
		 */
		public colorBars: boolean;
		

		/**
		 * Draw page information.
		 */
		public static pageInformation: boolean;
		

		/**
		 * Draw page information.
		 */
		public pageInformation: boolean;
		

		/**
		 * The page marks style.
		 */
		public static pageMarksType: PageMarksTypes;
		

		/**
		 * The page marks style.
		 */
		public pageMarksType: PageMarksTypes;
		

		/**
		 * Trim mark weight.
		 */
		public static trimMarkWeight: PDFTrimMarkWeight;
		

		/**
		 * Trim mark weight.
		 */
		public trimMarkWeight: PDFTrimMarkWeight;
		

		/**
		 * Custom offset (in points) for using the custom paper.
		 */
		public static offset: number;
		

		/**
		 * Custom offset (in points) for using the custom paper.
		 */
		public offset: number;
		

		/**
		 * The bleed offset rect.
		 */
		public static bleedOffsetRect: number[];
		

		/**
		 * The bleed offset rect.
		 */
		public bleedOffsetRect: number[];
		

		/**
		 * Link 4 bleed values.
		 */
		public static bleedLink: boolean;
		

		/**
		 * Link 4 bleed values.
		 */
		public bleedLink: boolean;
		

		/**
		 * PDF color conversion policy. Three choices are available: (1)No Color Conversion (2) Repurpose (3) Convert to Destination.
		 */
		public static colorConversionID: ColorConversion;
		

		/**
		 * PDF color conversion policy. Three choices are available: (1)No Color Conversion (2) Repurpose (3) Convert to Destination.
		 */
		public colorConversionID: ColorConversion;
		

		/**
		 * When NoColorConversion is specified for Color Conversion, NoColorDestination is set.
		 */
		public static colorDestinationID: ColorDestination;
		

		/**
		 * When NoColorConversion is specified for Color Conversion, NoColorDestination is set.
		 */
		public colorDestinationID: ColorDestination;
		

		/**
		 * If CMS is off, Don't Include Profiles is set.
		 */
		public static colorProfileID: ColorProfile;
		

		/**
		 * If CMS is off, Don't Include Profiles is set.
		 */
		public colorProfileID: ColorProfile;
		

		/**
		 * When CMS is on, the output intent profile is the same profile selected for Destination in the Color group box.
		 */
		public static outputIntentProfile: string;
		

		/**
		 * When CMS is on, the output intent profile is the same profile selected for Destination in the Color group box.
		 */
		public outputIntentProfile: string;
		

		/**
		 * This is an optional comment which, if present, is added to the PDF file and describes the intended printing condition.
		 */
		public static outputCondition: string;
		

		/**
		 * This is an optional comment which, if present, is added to the PDF file and describes the intended printing condition.
		 */
		public outputCondition: string;
		

		/**
		 * If selected for Output Intent Profile Name, you can set the name of a registered printing condition.
		 */
		public static outputConditionID: string;
		

		/**
		 * If selected for Output Intent Profile Name, you can set the name of a registered printing condition.
		 */
		public outputConditionID: string;
		

		/**
		 * URL to the site where the specified output condition is registered. No validation is performed on the URL.
		 */
		public static registryName: string;
		

		/**
		 * URL to the site where the specified output condition is registered. No validation is performed on the URL.
		 */
		public registryName: string;
		

		/**
		 * This indicates if manual trapping has been prepared in the document.
		 */
		public static trapped: boolean;
		

		/**
		 * This indicates if manual trapping has been prepared in the document.
		 */
		public trapped: boolean;
		

		/**
		 * Include a subset of fonts when less than this percentage of characters are used.
		 */
		public static fontSubsetThreshold: number;
		

		/**
		 * Include a subset of fonts when less than this percentage of characters are used.
		 */
		public fontSubsetThreshold: number;
		

		/**
		 * The transparency flattener preset name.
		 */
		public static flattenerPreset: string;
		

		/**
		 * The transparency flattener preset name.
		 */
		public flattenerPreset: string;
		

		/**
		 * The printing flattener options.
		 */
		public static flattenerOptions: PrintFlattenerOptions;
		

		/**
		 * The printing flattener options.
		 */
		public flattenerOptions: PrintFlattenerOptions;
		

		/**
		 * Flattening printer resolution.
		 */
		public static printerResolution: number;
		

		/**
		 * Flattening printer resolution.
		 */
		public printerResolution: number;
		

		/**
		 * Create acrobat layers from top-level layers - acrobat 6 only option.
		 */
		public static acrobatLayers: boolean;
		

		/**
		 * Create acrobat layers from top-level layers - acrobat 6 only option.
		 */
		public acrobatLayers: boolean;
		

		/**
		 * Require a password to open the document.
		 */
		public static requireDocumentPassword: boolean;
		

		/**
		 * Require a password to open the document.
		 */
		public requireDocumentPassword: boolean;
		

		/**
		 * A password string to open the document.
		 */
		public static documentPassword: string;
		

		/**
		 * A password string to open the document.
		 */
		public documentPassword: string;
		

		/**
		 * Use a password to restrict editing security settings.
		 */
		public static requirePermissionPassword: boolean;
		

		/**
		 * Use a password to restrict editing security settings.
		 */
		public requirePermissionPassword: boolean;
		

		/**
		 * A password string to restrict editing security settings.
		 */
		public static permissionPassword: string;
		

		/**
		 * A password string to restrict editing security settings.
		 */
		public permissionPassword: string;
		

		/**
		 * PDF security printing permission.
		 */
		public static pDFAllowPrinting: PDFPrintAllowedEnum;
		

		/**
		 * PDF security printing permission.
		 */
		public pDFAllowPrinting: PDFPrintAllowedEnum;
		

		/**
		 * PDF security changes allowed.
		 */
		public static pDFChangesAllowed: PDFChangesAllowedEnum;
		

		/**
		 * PDF security changes allowed.
		 */
		public pDFChangesAllowed: PDFChangesAllowedEnum;
		

		/**
		 * Enable copying of text 128-bit.
		 */
		public static enableCopy: boolean;
		

		/**
		 * Enable copying of text 128-bit.
		 */
		public enableCopy: boolean;
		

		/**
		 * Enable accessing 128-bit.
		 */
		public static enableAccess: boolean;
		

		/**
		 * Enable accessing 128-bit.
		 */
		public enableAccess: boolean;
		

		/**
		 * Enable plaintext metadata 128-bit - available only for acrobat 6.
		 */
		public static enablePlainText: boolean;
		

		/**
		 * Enable plaintext metadata 128-bit - available only for acrobat 6.
		 */
		public enablePlainText: boolean;
		

		/**
		 * Enable copying and accessing 40-bit.
		 */
		public static enableCopyAccess: boolean;
		

		/**
		 * Enable copying and accessing 40-bit.
		 */
		public enableCopyAccess: boolean;
		

		/**
		 * Considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.
		 */
		public static artboardRange: string;
		

		/**
		 * Considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.
		 */
		public artboardRange: string;
	}

	/**
	 * Options which may be supplied when saving a document as an Illustrator file.
	 */
	class IllustratorSaveOptions {
		

		/**
		 * What Illustrator file format version to create.
		 */
		public static compatibility: Compatibility;
		

		/**
		 * What Illustrator file format version to create.
		 */
		public compatibility: Compatibility;
		

		/**
		 * Include a subset of fonts when less than this percentage of characters are used (version 9 or later)
		 */
		public static fontSubsetThreshold: number;
		

		/**
		 * Include a subset of fonts when less than this percentage of characters are used (version 9 or later)
		 */
		public fontSubsetThreshold: number;
		

		/**
		 * Embed the document's ICC profile in the saved file (version 9 or later)
		 */
		public static embedICCProfile: boolean;
		

		/**
		 * Embed the document's ICC profile in the saved file (version 9 or later)
		 */
		public embedICCProfile: boolean;
		

		/**
		 * Are linked image files to be included in the saved document (versions 7 or later)
		 */
		public static embedLinkedFiles: boolean;
		

		/**
		 * Are linked image files to be included in the saved document (versions 7 or later)
		 */
		public embedLinkedFiles: boolean;
		

		/**
		 * How should transparency be flattened for older file format versions (pre-version 9)
		 */
		public static flattenOutput: OutputFlattening;
		

		/**
		 * How should transparency be flattened for older file format versions (pre-version 9)
		 */
		public flattenOutput: OutputFlattening;
		

		/**
		 * Save as a PDF compatible file (version 10 or later)
		 */
		public static pdfCompatible: boolean;
		

		/**
		 * Save as a PDF compatible file (version 10 or later)
		 */
		public pdfCompatible: boolean;
		

		/**
		 * Should the saved file be compressed (version 10 or later)
		 */
		public static compressed: boolean;
		

		/**
		 * Should the saved file be compressed (version 10 or later)
		 */
		public compressed: boolean;
		

		/**
		 * All the artboards or range of the artboards will be saved.
		 */
		public static saveMultipleArtboards: boolean;
		

		/**
		 * All the artboards or range of the artboards will be saved.
		 */
		public saveMultipleArtboards: boolean;
		

		/**
		 * If SaveMultipleArtboards is true ,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.
		 */
		public static artboardRange: string;
		

		/**
		 * If SaveMultipleArtboards is true ,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.
		 */
		public artboardRange: string;
	}

	/**
	 */
	class Matrix {
		

		/**
		 */
		public static mValueA: number;
		

		/**
		 */
		public mValueA: number;
		

		/**
		 */
		public static mValueB: number;
		

		/**
		 */
		public mValueB: number;
		

		/**
		 */
		public static mValueC: number;
		

		/**
		 */
		public mValueC: number;
		

		/**
		 */
		public static mValueD: number;
		

		/**
		 */
		public mValueD: number;
		

		/**
		 */
		public static mValueTX: number;
		

		/**
		 */
		public mValueTX: number;
		

		/**
		 */
		public static mValueTY: number;
		

		/**
		 */
		public mValueTY: number;
	}

	/**
	 * Options which may be supplied when exporting a document as a JPEG file.
	 */
	class ExportOptionsJPEG {
		

		/**
		 * Quality of resulting image.
		 */
		public static qualitySetting: number;
		

		/**
		 * Quality of resulting image.
		 */
		public qualitySetting: number;
		

		/**
		 * Should the image be optimized for web viewing.
		 */
		public static optimization: boolean;
		

		/**
		 * Should the image be optimized for web viewing.
		 */
		public optimization: boolean;
		

		/**
		 * Blur the resulting image this much.
		 */
		public static blurAmount: number;
		

		/**
		 * Blur the resulting image this much.
		 */
		public blurAmount: number;
		

		/**
		 * Should the artboard be matted with a color.
		 */
		public static matte: boolean;
		

		/**
		 * Should the artboard be matted with a color.
		 */
		public matte: boolean;
		

		/**
		 * The color to use when matting the artboard (default: white)
		 */
		public static matteColor: RGBColor;
		

		/**
		 * The color to use when matting the artboard (default: white)
		 */
		public matteColor: RGBColor;
		

		/**
		 * Horizontal scaling factor.
		 */
		public static horizontalScale: number;
		

		/**
		 * Horizontal scaling factor.
		 */
		public horizontalScale: number;
		

		/**
		 * Vertical scaling factor.
		 */
		public static verticalScale: number;
		

		/**
		 * Vertical scaling factor.
		 */
		public verticalScale: number;
		

		/**
		 * Should the resulting image be antialiased.
		 */
		public static antiAliasing: boolean;
		

		/**
		 * Should the resulting image be antialiased.
		 */
		public antiAliasing: boolean;
		

		/**
		 * Should the resulting image be clipped to the artboard.
		 */
		public static artBoardClipping: boolean;
		

		/**
		 * Should the resulting image be clipped to the artboard.
		 */
		public artBoardClipping: boolean;
		

		/**
		 * Should the resulting image be saved as HTML.
		 */
		public static saveAsHTML: boolean;
		

		/**
		 * Should the resulting image be saved as HTML.
		 */
		public saveAsHTML: boolean;
	}

	/**
	 * Options which may be supplied when exporting a document as an 8 bit PNG file.
	 */
	class ExportOptionsPNG8 {
		

		/**
		 * Number of colors in exported color table.
		 */
		public static colorCount: number;
		

		/**
		 * Number of colors in exported color table.
		 */
		public colorCount: number;
		

		/**
		 * Method used to reduce the number of colors.
		 */
		public static colorReduction: ColorReductionMethod;
		

		/**
		 * Method used to reduce the number of colors.
		 */
		public colorReduction: ColorReductionMethod;
		

		/**
		 * Method used to dither colors.
		 */
		public static colorDither: ColorDitherMethod;
		

		/**
		 * Method used to dither colors.
		 */
		public colorDither: ColorDitherMethod;
		

		/**
		 * How much should the colors be dithered.
		 */
		public static ditherPercent: number;
		

		/**
		 * How much should the colors be dithered.
		 */
		public ditherPercent: number;
		

		/**
		 * How much should the color table be changed to match the web palette.
		 */
		public static webSnap: number;
		

		/**
		 * How much should the color table be changed to match the web palette.
		 */
		public webSnap: number;
		

		/**
		 * Should the resulting image use transparency.
		 */
		public static transparency: boolean;
		

		/**
		 * Should the resulting image use transparency.
		 */
		public transparency: boolean;
		

		/**
		 * Should the resulting image be interlaced.
		 */
		public static interlaced: boolean;
		

		/**
		 * Should the resulting image be interlaced.
		 */
		public interlaced: boolean;
		

		/**
		 * Should the artboard be matted with a color.
		 */
		public static matte: boolean;
		

		/**
		 * Should the artboard be matted with a color.
		 */
		public matte: boolean;
		

		/**
		 * The color to use when matting the artboard (default: white)
		 */
		public static matteColor: RGBColor;
		

		/**
		 * The color to use when matting the artboard (default: white)
		 */
		public matteColor: RGBColor;
		

		/**
		 * Horizontal scaling factor.
		 */
		public static horizontalScale: number;
		

		/**
		 * Horizontal scaling factor.
		 */
		public horizontalScale: number;
		

		/**
		 * Vertical scaling factor.
		 */
		public static verticalScale: number;
		

		/**
		 * Vertical scaling factor.
		 */
		public verticalScale: number;
		

		/**
		 * Should the resulting image be antialiased.
		 */
		public static antiAliasing: boolean;
		

		/**
		 * Should the resulting image be antialiased.
		 */
		public antiAliasing: boolean;
		

		/**
		 * Should the resulting image be clipped to the artboard.
		 */
		public static artBoardClipping: boolean;
		

		/**
		 * Should the resulting image be clipped to the artboard.
		 */
		public artBoardClipping: boolean;
		

		/**
		 * Should the resulting image be saved as HTML.
		 */
		public static saveAsHTML: boolean;
		

		/**
		 * Should the resulting image be saved as HTML.
		 */
		public saveAsHTML: boolean;
	}

	/**
	 * Options which may be supplied when exporting a document as an 24 bit PNG file.
	 */
	class ExportOptionsPNG24 {
		

		/**
		 * Should the resulting image use transparency.
		 */
		public static transparency: boolean;
		

		/**
		 * Should the resulting image use transparency.
		 */
		public transparency: boolean;
		

		/**
		 * Should the artboard be matted with a color.
		 */
		public static matte: boolean;
		

		/**
		 * Should the artboard be matted with a color.
		 */
		public matte: boolean;
		

		/**
		 * The color to use when matting the artboard (default: white)
		 */
		public static matteColor: RGBColor;
		

		/**
		 * The color to use when matting the artboard (default: white)
		 */
		public matteColor: RGBColor;
		

		/**
		 * Horizontal scaling factor.
		 */
		public static horizontalScale: number;
		

		/**
		 * Horizontal scaling factor.
		 */
		public horizontalScale: number;
		

		/**
		 * Vertical scaling factor.
		 */
		public static verticalScale: number;
		

		/**
		 * Vertical scaling factor.
		 */
		public verticalScale: number;
		

		/**
		 * Should the resulting image be antialiased.
		 */
		public static antiAliasing: boolean;
		

		/**
		 * Should the resulting image be antialiased.
		 */
		public antiAliasing: boolean;
		

		/**
		 * Should the resulting image be clipped to the artboard.
		 */
		public static artBoardClipping: boolean;
		

		/**
		 * Should the resulting image be clipped to the artboard.
		 */
		public artBoardClipping: boolean;
		

		/**
		 * Should the resulting image be saved as HTML.
		 */
		public static saveAsHTML: boolean;
		

		/**
		 * Should the resulting image be saved as HTML.
		 */
		public saveAsHTML: boolean;
		

		/**
		 * Dimensions in which to contain the resulting raster.
		 */
		public static dimensions: Dimensions;
		

		/**
		 * Dimensions in which to contain the resulting raster.
		 */
		public dimensions: Dimensions;
	}

	/**
	 * Options which may be supplied when exporting a document as a GIF file.
	 */
	class ExportOptionsGIF {
		

		/**
		 * Number of colors in exported color table.
		 */
		public static colorCount: number;
		

		/**
		 * Number of colors in exported color table.
		 */
		public colorCount: number;
		

		/**
		 * Method used to reduce the number of colors.
		 */
		public static colorReduction: ColorReductionMethod;
		

		/**
		 * Method used to reduce the number of colors.
		 */
		public colorReduction: ColorReductionMethod;
		

		/**
		 * Level of information loss during compression.
		 */
		public static infoLossPercent: number;
		

		/**
		 * Level of information loss during compression.
		 */
		public infoLossPercent: number;
		

		/**
		 * Method used to dither colors.
		 */
		public static colorDither: ColorDitherMethod;
		

		/**
		 * Method used to dither colors.
		 */
		public colorDither: ColorDitherMethod;
		

		/**
		 * How much should the colors be dithered.
		 */
		public static ditherPercent: number;
		

		/**
		 * How much should the colors be dithered.
		 */
		public ditherPercent: number;
		

		/**
		 * How much should the color table be changed to match the web pallet.
		 */
		public static webSnap: number;
		

		/**
		 * How much should the color table be changed to match the web pallet.
		 */
		public webSnap: number;
		

		/**
		 * Should the resulting image use transparency.
		 */
		public static transparency: boolean;
		

		/**
		 * Should the resulting image use transparency.
		 */
		public transparency: boolean;
		

		/**
		 * Should the resulting image be interlaced.
		 */
		public static interlaced: boolean;
		

		/**
		 * Should the resulting image be interlaced.
		 */
		public interlaced: boolean;
		

		/**
		 * Should the artboard be matted with a color.
		 */
		public static matte: boolean;
		

		/**
		 * Should the artboard be matted with a color.
		 */
		public matte: boolean;
		

		/**
		 * The color to use when matting the artboard (default: white)
		 */
		public static matteColor: RGBColor;
		

		/**
		 * The color to use when matting the artboard (default: white)
		 */
		public matteColor: RGBColor;
		

		/**
		 * Horizontal scaling factor.
		 */
		public static horizontalScale: number;
		

		/**
		 * Horizontal scaling factor.
		 */
		public horizontalScale: number;
		

		/**
		 * Vertical scaling factor.
		 */
		public static verticalScale: number;
		

		/**
		 * Vertical scaling factor.
		 */
		public verticalScale: number;
		

		/**
		 * Should the resulting image be antialiased.
		 */
		public static antiAliasing: boolean;
		

		/**
		 * Should the resulting image be antialiased.
		 */
		public antiAliasing: boolean;
		

		/**
		 * Should the resulting image be clipped to the artboard.
		 */
		public static artBoardClipping: boolean;
		

		/**
		 * Should the resulting image be clipped to the artboard.
		 */
		public artBoardClipping: boolean;
		

		/**
		 * Should the resulting image be saved as HTML.
		 */
		public static saveAsHTML: boolean;
		

		/**
		 * Should the resulting image be saved as HTML.
		 */
		public saveAsHTML: boolean;
	}

	/**
	 * Options which may be supplied when exporting a document as a Photoshop file.
	 */
	class ExportOptionsPhotoshop {
		

		/**
		 * The color space of the exported file.
		 */
		public static imageColorSpace: ImageColorSpace;
		

		/**
		 * The color space of the exported file.
		 */
		public imageColorSpace: ImageColorSpace;
		

		/**
		 * The resolution of the exported file.
		 */
		public static resolution: number;
		

		/**
		 * The resolution of the exported file.
		 */
		public resolution: number;
		

		/**
		 * Should the resulting image be antialiased.
		 */
		public static antiAliasing: boolean;
		

		/**
		 * Should the resulting image be antialiased.
		 */
		public antiAliasing: boolean;
		

		/**
		 * Preserve document layers when exporting.
		 */
		public static writeLayers: boolean;
		

		/**
		 * Preserve document layers when exporting.
		 */
		public writeLayers: boolean;
		

		/**
		 * Export text objects as editable text layers.
		 */
		public static editableText: boolean;
		

		/**
		 * Export text objects as editable text layers.
		 */
		public editableText: boolean;
		

		/**
		 * Embed an ICC profile when exporting.
		 */
		public static embedICCProfile: boolean;
		

		/**
		 * Embed an ICC profile when exporting.
		 */
		public embedICCProfile: boolean;
		

		/**
		 * Should a warning dialog be displayed because of conflicts in the export settings.
		 */
		public static warnings: boolean;
		

		/**
		 * Should a warning dialog be displayed because of conflicts in the export settings.
		 */
		public warnings: boolean;
		

		/**
		 * Preserve as much of the original document's structure as possible when exporting.
		 */
		public static maximumEditability: boolean;
		

		/**
		 * Preserve as much of the original document's structure as possible when exporting.
		 */
		public maximumEditability: boolean;
		

		/**
		 * All the artboards or range of the artboards will be exported.
		 */
		public static saveMultipleArtboards: boolean;
		

		/**
		 * All the artboards or range of the artboards will be exported.
		 */
		public saveMultipleArtboards: boolean;
		

		/**
		 * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.
		 */
		public static artboardRange: string;
		

		/**
		 * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.
		 */
		public artboardRange: string;
	}

	/**
	 * Options which may be supplied when exporting a document as an SVG file.
	 */
	class ExportOptionsSVG {
		

		/**
		 * The version of DTD that the exported file should be conforming to.
		 */
		public static DTD: SVGDTDVersion;
		

		/**
		 * The version of DTD that the exported file should be conforming to.
		 */
		public DTD: SVGDTDVersion;
		

		/**
		 * The type of font that should be included in the exported file.
		 */
		public static fontType: SVGFontType;
		

		/**
		 * The type of font that should be included in the exported file.
		 */
		public fontType: SVGFontType;
		

		/**
		 * What font glyphs should be included in the exported file.
		 */
		public static fontSubsetting: SVGFontSubsetting;
		

		/**
		 * What font glyphs should be included in the exported file.
		 */
		public fontSubsetting: SVGFontSubsetting;
		

		/**
		 * Should the raster images in the exported file be included.
		 */
		public static embedRasterImages: boolean;
		

		/**
		 * Should the raster images in the exported file be included.
		 */
		public embedRasterImages: boolean;
		

		/**
		 * Decimal precision for element coordinate values.
		 */
		public static coordinatePrecision: number;
		

		/**
		 * Decimal precision for element coordinate values.
		 */
		public coordinatePrecision: number;
		

		/**
		 * How should the text in the document be encoded.
		 */
		public static documentEncoding: SVGDocumentEncoding;
		

		/**
		 * How should the text in the document be encoded.
		 */
		public documentEncoding: SVGDocumentEncoding;
		

		/**
		 * How should the CSS properties of the document be included in the document.
		 */
		public static cssProperties: SVGCSSPropertyLocation;
		

		/**
		 * How should the CSS properties of the document be included in the document.
		 */
		public cssProperties: SVGCSSPropertyLocation;
		

		/**
		 * Should the exported file be compressed.
		 */
		public static compressed: boolean;
		

		/**
		 * Should the exported file be compressed.
		 */
		public compressed: boolean;
		

		/**
		 */
		public static optimizeForSVGViewer: boolean;
		

		/**
		 */
		public optimizeForSVGViewer: boolean;
		

		/**
		 */
		public static includeVariablesAndDatasets: boolean;
		

		/**
		 */
		public includeVariablesAndDatasets: boolean;
		

		/**
		 */
		public static includeFileInfo: boolean;
		

		/**
		 */
		public includeFileInfo: boolean;
		

		/**
		 */
		public static includeUnusedStyles: boolean;
		

		/**
		 */
		public includeUnusedStyles: boolean;
		

		/**
		 * Preserve slice data in exported document.
		 */
		public static slices: boolean;
		

		/**
		 * Preserve slice data in exported document.
		 */
		public slices: boolean;
		

		/**
		 * Preserve Illustrator editing capabilities when exporting the document.
		 */
		public static preserveEditability: boolean;
		

		/**
		 * Preserve Illustrator editing capabilities when exporting the document.
		 */
		public preserveEditability: boolean;
		

		/**
		 * Is SVG auto kerning allowed?
		 */
		public static sVGAutoKerning: boolean;
		

		/**
		 * Is SVG auto kerning allowed?
		 */
		public sVGAutoKerning: boolean;
		

		/**
		 * Is SVG text-on-path construct allowed?
		 */
		public static sVGTextOnPath: boolean;
		

		/**
		 * Is SVG text-on-path construct allowed?
		 */
		public sVGTextOnPath: boolean;
		

		/**
		 * All the artboards or range of the artboards will be saved.
		 */
		public static saveMultipleArtboards: boolean;
		

		/**
		 * All the artboards or range of the artboards will be saved.
		 */
		public saveMultipleArtboards: boolean;
		

		/**
		 * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.
		 */
		public static artboardRange: string;
		

		/**
		 * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.
		 */
		public artboardRange: string;
	}

	/**
	 * Options which may be supplied when exporting a document as a Web optimized SVG file.
	 */
	class ExportOptionsWebOptimizedSVG {
		

		/**
		 * The type of font that should be included in the exported file.
		 */
		public static fontType: SVGFontType;
		

		/**
		 * The type of font that should be included in the exported file.
		 */
		public fontType: SVGFontType;
		

		/**
		 * Decimal precision for element coordinate values.
		 */
		public static coordinatePrecision: number;
		

		/**
		 * Decimal precision for element coordinate values.
		 */
		public coordinatePrecision: number;
		

		/**
		 * How should the CSS properties of the document be included in the document.
		 */
		public static cssProperties: SVGCSSPropertyLocation;
		

		/**
		 * How should the CSS properties of the document be included in the document.
		 */
		public cssProperties: SVGCSSPropertyLocation;
		

		/**
		 * How object names (IDs) are generated in exported SVG.
		 */
		public static svgId: SVGIdType;
		

		/**
		 * How object names (IDs) are generated in exported SVG.
		 */
		public svgId: SVGIdType;
		

		/**
		 * Reduces the size of the svg.
		 */
		public static svgMinify: boolean;
		

		/**
		 * Reduces the size of the svg.
		 */
		public svgMinify: boolean;
		

		/**
		 * Makes the SVG Responsive.
		 */
		public static svgResponsive: boolean;
		

		/**
		 * Makes the SVG Responsive.
		 */
		public svgResponsive: boolean;
		

		/**
		 * Should the raster images in the exported file be included.
		 */
		public static rasterImageLocation: RasterImageLocation;
		

		/**
		 * Should the raster images in the exported file be included.
		 */
		public rasterImageLocation: RasterImageLocation;
		

		/**
		 * All the artboards or range of the artboards will be saved.
		 */
		public static saveMultipleArtboards: boolean;
		

		/**
		 * All the artboards or range of the artboards will be saved.
		 */
		public saveMultipleArtboards: boolean;
		

		/**
		 * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.
		 */
		public static artboardRange: string;
		

		/**
		 * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.
		 */
		public artboardRange: string;
	}

	/**
	 * Options which may be supplied when exporting a document as an Flash (.SWF) file.
	 */
	class ExportOptionsFlash {
		

		/**
		 * How should the Flash file be created.
		 */
		public static exportStyle: FlashExportStyle;
		

		/**
		 * How should the Flash file be created.
		 */
		public exportStyle: FlashExportStyle;
		

		/**
		 * Which version of SWF to export.
		 */
		public static exportVersion: FlashExportVersion;
		

		/**
		 * Which version of SWF to export.
		 */
		public exportVersion: FlashExportVersion;
		

		/**
		 * When exporting layers to Flash frames.
		 */
		public static frameRate: number;
		

		/**
		 * When exporting layers to Flash frames.
		 */
		public frameRate: number;
		

		/**
		 * Should the Flash file be set to loop when run.
		 */
		public static looping: boolean;
		

		/**
		 * Should the Flash file be set to loop when run.
		 */
		public looping: boolean;
		

		/**
		 * Prevent the exported file from being imported by other applications.
		 */
		public static readOnly: boolean;
		

		/**
		 * Prevent the exported file from being imported by other applications.
		 */
		public readOnly: boolean;
		

		/**
		 * How should the arts be clipped during the output.
		 */
		public static artClipping: ArtClippingOption;
		

		/**
		 * How should the arts be clipped during the output.
		 */
		public artClipping: ArtClippingOption;
		

		/**
		 * How much curve information should be preserved.
		 */
		public static curveQuality: number;
		

		/**
		 * How much curve information should be preserved.
		 */
		public curveQuality: number;
		

		/**
		 * How should the images in the exported Flash file be compressed.
		 */
		public static imageFormat: FlashImageFormat;
		

		/**
		 * How should the images in the exported Flash file be compressed.
		 */
		public imageFormat: FlashImageFormat;
		

		/**
		 * Level of compression.
		 */
		public static jpegQuality: number;
		

		/**
		 * Level of compression.
		 */
		public jpegQuality: number;
		

		/**
		 * What method to use.
		 */
		public static jpegMethod: FlashJPEGMethod;
		

		/**
		 * What method to use.
		 */
		public jpegMethod: FlashJPEGMethod;
		

		/**
		 * What access should the SWF file have - local or network access.
		 */
		public static playbackAccess: FlashPlaybackSecurity;
		

		/**
		 * What access should the SWF file have - local or network access.
		 */
		public playbackAccess: FlashPlaybackSecurity;
		

		/**
		 * Pixels per inch.
		 */
		public static resolution: number;
		

		/**
		 * Pixels per inch.
		 */
		public resolution: number;
		

		/**
		 * If a file with the same name already exists, should it be replaced?
		 */
		public static replacing: SaveOptions;
		

		/**
		 * If a file with the same name already exists, should it be replaced?
		 */
		public replacing: SaveOptions;
		

		/**
		 * Should all text be converted to outlines.
		 */
		public static convertTextToOutlines: boolean;
		

		/**
		 * Should all text be converted to outlines.
		 */
		public convertTextToOutlines: boolean;
		

		/**
		 * Should the exported file be compressed.
		 */
		public static compressed: boolean;
		

		/**
		 * Should the exported file be compressed.
		 */
		public compressed: boolean;
		

		/**
		 * The background color.
		 */
		public static backgroundColor: RGBColor;
		

		/**
		 * The background color.
		 */
		public backgroundColor: RGBColor;
		

		/**
		 * A list of layers to be included as the static background in all exported Flash frames.
		 */
		public static backgroundLayers: Layer[];
		

		/**
		 * A list of layers to be included as the static background in all exported Flash frames.
		 */
		public backgroundLayers: Layer[];
		

		/**
		 * The order in which the layers will be exported to Flash frames.
		 */
		public static layerOrder: LayerOrderType;
		

		/**
		 * The order in which the layers will be exported to Flash frames.
		 */
		public layerOrder: LayerOrderType;
		

		/**
		 * Controls how the blend art objects are animated when export to Flash frames.
		 */
		public static blendAnimation: BlendAnimationType;
		

		/**
		 * Controls how the blend art objects are animated when export to Flash frames.
		 */
		public blendAnimation: BlendAnimationType;
		

		/**
		 * Should the kerning information for text objects be ignored.
		 */
		public static ignoreTextKerning: boolean;
		

		/**
		 * Should the kerning information for text objects be ignored.
		 */
		public ignoreTextKerning: boolean;
		

		/**
		 * Should all symbol definitions in the palette be exported to the SWF File.
		 */
		public static exportAllSymbols: boolean;
		

		/**
		 * Should all symbol definitions in the palette be exported to the SWF File.
		 */
		public exportAllSymbols: boolean;
		

		/**
		 * Choose whether to preserve artwork appearance or editability (default) during export.
		 */
		public static preserveAppearance: boolean;
		

		/**
		 * Choose whether to preserve artwork appearance or editability (default) during export.
		 */
		public preserveAppearance: boolean;
		

		/**
		 * If true, include minimal XMP metadata in the exported file.
		 */
		public static includeMetadata: boolean;
		

		/**
		 * If true, include minimal XMP metadata in the exported file.
		 */
		public includeMetadata: boolean;
		

		/**
		 * All the artboards or range of the artboards will be exported.
		 */
		public static saveMultipleArtboards: boolean;
		

		/**
		 * All the artboards or range of the artboards will be exported.
		 */
		public saveMultipleArtboards: boolean;
		

		/**
		 * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.
		 */
		public static artboardRange: string;
		

		/**
		 * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.
		 */
		public artboardRange: string;
	}

	/**
	 * Options which may be supplied when exporting a document to AutoCAD formats (.dwg or .dxf)
	 */
	class ExportOptionsAutoCAD {
		

		/**
		 * Which format to export the file as.
		 */
		public static exportFileFormat: AutoCADExportFileFormat;
		

		/**
		 * Which format to export the file as.
		 */
		public exportFileFormat: AutoCADExportFileFormat;
		

		/**
		 * Release of AutoCAD to export to.
		 */
		public static version: AutoCADCompatibility;
		

		/**
		 * Release of AutoCAD to export to.
		 */
		public version: AutoCADCompatibility;
		

		/**
		 * Ratio by which to scale the output.
		 */
		public static unitScaleRatio: number;
		

		/**
		 * Ratio by which to scale the output.
		 */
		public unitScaleRatio: number;
		

		/**
		 * Units from which to map.
		 */
		public static unit: AutoCADUnit;
		

		/**
		 * Units from which to map.
		 */
		public unit: AutoCADUnit;
		

		/**
		 * Number of colors to export into the AutoCAD file.
		 */
		public static colors: AutoCADColors;
		

		/**
		 * Number of colors to export into the AutoCAD file.
		 */
		public colors: AutoCADColors;
		

		/**
		 * Raster format in which to export raster art.
		 */
		public static rasterFormat: AutoCADRasterFormat;
		

		/**
		 * Raster format in which to export raster art.
		 */
		public rasterFormat: AutoCADRasterFormat;
		

		/**
		 * Whether to preserve appearance or editability during export.
		 */
		public static exportOption: AutoCADExportOption;
		

		/**
		 * Whether to preserve appearance or editability during export.
		 */
		public exportOption: AutoCADExportOption;
		

		/**
		 * Export selected art only.
		 */
		public static exportSelectedArtOnly: boolean;
		

		/**
		 * Export selected art only.
		 */
		public exportSelectedArtOnly: boolean;
		

		/**
		 * Alter paths for appearance.
		 */
		public static alterPathsForAppearance: boolean;
		

		/**
		 * Alter paths for appearance.
		 */
		public alterPathsForAppearance: boolean;
		

		/**
		 * Whether to convert text to outlines.
		 */
		public static convertTextToOutlines: boolean;
		

		/**
		 * Whether to convert text to outlines.
		 */
		public convertTextToOutlines: boolean;
		

		/**
		 * Whether to scale lineweights by the same amount as rest of the drawing.
		 */
		public static scaleLineweights: boolean;
		

		/**
		 * Whether to scale lineweights by the same amount as rest of the drawing.
		 */
		public scaleLineweights: boolean;
	}

	/**
	 * Options which may be supplied when exporting a document as a TIFF file.
	 */
	class ExportOptionsTIFF {
		

		/**
		 * The color space of the exported file.
		 */
		public static imageColorSpace: ImageColorSpace;
		

		/**
		 * The color space of the exported file.
		 */
		public imageColorSpace: ImageColorSpace;
		

		/**
		 * The resolution of the exported file.
		 */
		public static resolution: number;
		

		/**
		 * The resolution of the exported file.
		 */
		public resolution: number;
		

		/**
		 * Should the resulting image be antialiased.
		 */
		public static antiAliasing: AntiAliasingMethod;
		

		/**
		 * Should the resulting image be antialiased.
		 */
		public antiAliasing: AntiAliasingMethod;
		

		/**
		 * Compress TIFF file with LZW Compression when exporting.
		 */
		public static lZWCompression: boolean;
		

		/**
		 * Compress TIFF file with LZW Compression when exporting.
		 */
		public lZWCompression: boolean;
		

		/**
		 * Mac or PC byte order when exporting.
		 */
		public static byteOrder: TIFFByteOrder;
		

		/**
		 * Mac or PC byte order when exporting.
		 */
		public byteOrder: TIFFByteOrder;
		

		/**
		 * Embed an ICC profile when exporting.
		 */
		public static embedICCProfile: boolean;
		

		/**
		 * Embed an ICC profile when exporting.
		 */
		public embedICCProfile: boolean;
		

		/**
		 * All the artboards or range of the artboards will be exported.
		 */
		public static saveMultipleArtboards: boolean;
		

		/**
		 * All the artboards or range of the artboards will be exported.
		 */
		public saveMultipleArtboards: boolean;
		

		/**
		 * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.
		 */
		public static artboardRange: string;
		

		/**
		 * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.
		 */
		public artboardRange: string;
	}

	/**
	 * The parent class for all color values used in Illustrator. See the specific color classes for more information.
	 */
	class Color {
	}

	/**
	 * An Lab color specification.
	 */
	class LabColor extends Color {
		

		/**
		 * The L color value (between 0.0 and 100.0)
		 */
		public static l: number;
		

		/**
		 * The L color value (between 0.0 and 100.0)
		 */
		public l: number;
		

		/**
		 * The a color value (between -128.0 and 127.0)
		 */
		public static a: number;
		

		/**
		 * The a color value (between -128.0 and 127.0)
		 */
		public a: number;
		

		/**
		 * The b color value (between -128.0 and 127.0)
		 */
		public static b: number;
		

		/**
		 * The b color value (between -128.0 and 127.0)
		 */
		public b: number;
	}

	/**
	 * Dimensions (height and width)
	 */
	class Dimensions {
		

		/**
		 * The Width parameter.
		 */
		public static width: number;
		

		/**
		 * The Width parameter.
		 */
		public width: number;
		

		/**
		 * The Height parameter.
		 */
		public static height: number;
		

		/**
		 * The Height parameter.
		 */
		public height: number;
	}

	/**
	 * An RGB color specification.
	 */
	class RGBColor extends Color {
		

		/**
		 * The red color value (between 0.0 and 255.0)
		 */
		public static red: number;
		

		/**
		 * The red color value (between 0.0 and 255.0)
		 */
		public red: number;
		

		/**
		 * The green color value (between 0.0 and 255.0)
		 */
		public static green: number;
		

		/**
		 * The green color value (between 0.0 and 255.0)
		 */
		public green: number;
		

		/**
		 * The blue color value (between 0.0 and 255.0)
		 */
		public static blue: number;
		

		/**
		 * The blue color value (between 0.0 and 255.0)
		 */
		public blue: number;
	}

	/**
	 * A CMYK color specification.
	 */
	class CMYKColor extends Color {
		

		/**
		 * The cyan color value (between 0.0 and 100.0)
		 */
		public static cyan: number;
		

		/**
		 * The cyan color value (between 0.0 and 100.0)
		 */
		public cyan: number;
		

		/**
		 * The magenta color value (between 0.0 and 100.0)
		 */
		public static magenta: number;
		

		/**
		 * The magenta color value (between 0.0 and 100.0)
		 */
		public magenta: number;
		

		/**
		 * The yellow color value (between 0.0 and 100.0)
		 */
		public static yellow: number;
		

		/**
		 * The yellow color value (between 0.0 and 100.0)
		 */
		public yellow: number;
		

		/**
		 * The black color value (between 0.0 and 100.0)
		 */
		public static black: number;
		

		/**
		 * The black color value (between 0.0 and 100.0)
		 */
		public black: number;
	}

	/**
	 * A gray color specification.
	 */
	class GrayColor extends Color {
		

		/**
		 * The gray value (between 0.0 and 100.0)
		 */
		public static gray: number;
		

		/**
		 * The gray value (between 0.0 and 100.0)
		 */
		public gray: number;
	}

	/**
	 * Represents the 'none' color.
	 */
	class NoColor extends Color {
	}

	/**
	 * Information about the spot color.
	 */
	class SpotColor extends Color {
		

		/**
		 * Percentage level of tint to be applied to the spot color.
		 */
		public static tint: number;
		

		/**
		 * Percentage level of tint to be applied to the spot color.
		 */
		public tint: number;
		

		/**
		 */
		public static spot: Spot;
		

		/**
		 */
		public spot: Spot;
	}

	/**
	 * A Pattern color specification.
	 */
	class PatternColor extends Color {
		

		/**
		 * The distance to translate the (unscaled) prototype before filling.
		 */
		public static shiftDistance: number;
		

		/**
		 * The distance to translate the (unscaled) prototype before filling.
		 */
		public shiftDistance: number;
		

		/**
		 * The angle to translate the (unscaled) prototype before filling.
		 */
		public static shiftAngle: number;
		

		/**
		 * The angle to translate the (unscaled) prototype before filling.
		 */
		public shiftAngle: number;
		

		/**
		 * The fraction to scale the prototype before filling.
		 */
		public static scaleFactor: number[];
		

		/**
		 * The fraction to scale the prototype before filling.
		 */
		public scaleFactor: number[];
		

		/**
		 * The angle to rotate the before filling.
		 */
		public static rotation: number;
		

		/**
		 * The angle to rotate the before filling.
		 */
		public rotation: number;
		

		/**
		 * Whether or not the prototype is reflected before filling.
		 */
		public static reflect: boolean;
		

		/**
		 * Whether or not the prototype is reflected before filling.
		 */
		public reflect: boolean;
		

		/**
		 * The axis around which to reflect.
		 */
		public static reflectAngle: number;
		

		/**
		 * The axis around which to reflect.
		 */
		public reflectAngle: number;
		

		/**
		 * The angle to slant the shear by.
		 */
		public static shearAngle: number;
		

		/**
		 * The angle to slant the shear by.
		 */
		public shearAngle: number;
		

		/**
		 * The axis to shear with respect to.
		 */
		public static shearAxis: number;
		

		/**
		 * The axis to shear with respect to.
		 */
		public shearAxis: number;
		

		/**
		 * Additional transformation arising from manipulating the path.
		 */
		public static matrix: Matrix;
		

		/**
		 * Additional transformation arising from manipulating the path.
		 */
		public matrix: Matrix;
		

		/**
		 */
		public static pattern: Pattern;
		

		/**
		 */
		public pattern: Pattern;
	}

	/**
	 * A Gradient color specification.
	 */
	class GradientColor extends Color {
		

		/**
		 * The gradient vector origin.
		 */
		public static origin: number[];
		

		/**
		 * The gradient vector origin.
		 */
		public origin: number[];
		

		/**
		 * The gradient vector angle.
		 */
		public static angle: number;
		

		/**
		 * The gradient vector angle.
		 */
		public angle: number;
		

		/**
		 * The gradient vector length.
		 */
		public static length: number;
		

		/**
		 * The gradient vector length.
		 */
		public length: number;
		

		/**
		 * The gradient hilite vector angle.
		 */
		public static hiliteAngle: number;
		

		/**
		 * The gradient hilite vector angle.
		 */
		public hiliteAngle: number;
		

		/**
		 * The gradient hilite vector length.
		 */
		public static hiliteLength: number;
		

		/**
		 * The gradient hilite vector length.
		 */
		public hiliteLength: number;
		

		/**
		 * Additional transformation arising from manipulating the path.
		 */
		public static matrix: Matrix;
		

		/**
		 * Additional transformation arising from manipulating the path.
		 */
		public matrix: Matrix;
		

		/**
		 * Reference to the object defining the gradient.
		 */
		public static gradient: Gradient;
		

		/**
		 * Reference to the object defining the gradient.
		 */
		public gradient: Gradient;
	}

	/**
	 * Tab stop information (returned by tab stops from a paragraph object)
	 */
	class TabStopInfo {
		

		/**
		 * The alignment of the tab stop.
		 */
		public static alignment: TabStopAlignment;
		

		/**
		 * The alignment of the tab stop.
		 */
		public alignment: TabStopAlignment;
		

		/**
		 * The character used for decimal tab stops.
		 */
		public static decimalCharacter: string;
		

		/**
		 * The character used for decimal tab stops.
		 */
		public decimalCharacter: string;
		

		/**
		 * The position of the tab stop expressed in points.
		 */
		public static position: number;
		

		/**
		 * The position of the tab stop expressed in points.
		 */
		public position: number;
		

		/**
		 * The leader dot.
		 */
		public static leader: string;
		

		/**
		 * The leader dot.
		 */
		public leader: string;
	}

	/**
	 * An installed printer.
	 */
	class Printer {
		

		/**
		 * The printer name.
		 */
		public static name: string;
		

		/**
		 * The printer name.
		 */
		public name: string;
		

		/**
		 * The printer information.
		 */
		public static printerInfo: PrinterInfo;
		

		/**
		 * The printer information.
		 */
		public printerInfo: PrinterInfo;
	}

	/**
	 * Printer information.
	 */
	class PrinterInfo {
		

		/**
		 * The printer type.
		 */
		public static printerType: PrinterTypeEnum;
		

		/**
		 * The printer type.
		 */
		public printerType: PrinterTypeEnum;
		

		/**
		 * The PostScript level.
		 */
		public static postScriptLevel: PrinterPostScriptLevelEnum;
		

		/**
		 * The PostScript level.
		 */
		public postScriptLevel: PrinterPostScriptLevelEnum;
		

		/**
		 * The printer color capability.
		 */
		public static colorSupport: PrinterColorMode;
		

		/**
		 * The printer color capability.
		 */
		public colorSupport: PrinterColorMode;
		

		/**
		 * The printer default resolution.
		 */
		public static deviceResolution: number;
		

		/**
		 * The printer default resolution.
		 */
		public deviceResolution: number;
		

		/**
		 * The printer maximum device resolution.
		 */
		public static maxDeviceResolution: number;
		

		/**
		 * The printer maximum device resolution.
		 */
		public maxDeviceResolution: number;
		

		/**
		 * Does the printer support InRIP color separation?
		 */
		public static inRIPSeparationSupport: boolean;
		

		/**
		 * Does the printer support InRIP color separation?
		 */
		public inRIPSeparationSupport: boolean;
		

		/**
		 * Does the printer support binary printing?
		 */
		public static binaryPrintingSupport: boolean;
		

		/**
		 * Does the printer support binary printing?
		 */
		public binaryPrintingSupport: boolean;
		

		/**
		 * The list of supported paper sizes.
		 */
		public static paperSizes: Paper[];
		

		/**
		 * The list of supported paper sizes.
		 */
		public paperSizes: Paper[];
		

		/**
		 * Does the printer support custom paper size?
		 */
		public static customPaperSupport: boolean;
		

		/**
		 * Does the printer support custom paper size?
		 */
		public customPaperSupport: boolean;
		

		/**
		 * Does the printer support custom paper transverse?
		 */
		public static customPaperTransverseSupport: boolean;
		

		/**
		 * Does the printer support custom paper transverse?
		 */
		public customPaperTransverseSupport: boolean;
		

		/**
		 * Custom paper's minimum width.
		 */
		public static minPaperWidth: number;
		

		/**
		 * Custom paper's minimum width.
		 */
		public minPaperWidth: number;
		

		/**
		 * Custom paper's maximum width.
		 */
		public static maxPaperWidth: number;
		

		/**
		 * Custom paper's maximum width.
		 */
		public maxPaperWidth: number;
		

		/**
		 * Custom paper's minimum height.
		 */
		public static minPaperHeight: number;
		

		/**
		 * Custom paper's minimum height.
		 */
		public minPaperHeight: number;
		

		/**
		 * Custom paper's maximum height.
		 */
		public static maxPaperHeight: number;
		

		/**
		 * Custom paper's maximum height.
		 */
		public maxPaperHeight: number;
		

		/**
		 * Custom paper's minimum height offset.
		 */
		public static minPaperHeightOffset: number;
		

		/**
		 * Custom paper's minimum height offset.
		 */
		public minPaperHeightOffset: number;
		

		/**
		 * Custom paper's maximum height offset.
		 */
		public static maxPaperHeightOffset: number;
		

		/**
		 * Custom paper's maximum height offset.
		 */
		public maxPaperHeightOffset: number;
		

		/**
		 * Custom paper's minimum width offset.
		 */
		public static minPaperWidthOffset: number;
		

		/**
		 * Custom paper's minimum width offset.
		 */
		public minPaperWidthOffset: number;
		

		/**
		 * Custom paper's maximum width offset.
		 */
		public static maxPaperWidthOffset: number;
		

		/**
		 * Custom paper's maximum width offset.
		 */
		public maxPaperWidthOffset: number;
	}

	/**
	 * A PPD file.
	 */
	class PPDFile {
		

		/**
		 * The PPD model name.
		 */
		public static name: string;
		

		/**
		 * The PPD model name.
		 */
		public name: string;
		

		/**
		 * The PPD file information.
		 */
		public static PPDInfo: PPDFileInfo;
		

		/**
		 * The PPD file information.
		 */
		public PPDInfo: PPDFileInfo;
	}

	/**
	 * PPD file information.
	 */
	class PPDFileInfo {
		

		/**
		 * The PostScript language level.
		 */
		public static languageLevel: string;
		

		/**
		 * The PostScript language level.
		 */
		public languageLevel: string;
		

		/**
		 * Path specification for the PPD file.
		 */
		public static PPDFilePath: javascript.File;
		

		/**
		 * Path specification for the PPD file.
		 */
		public PPDFilePath: javascript.File;
		

		/**
		 * List of color separation screens.
		 */
		public static screenList: Screen[];
		

		/**
		 * List of color separation screens.
		 */
		public screenList: Screen[];
		

		/**
		 * List of color separation screen spot functions.
		 */
		public static screenSpotFunctionList: ScreenSpotFunction[];
		

		/**
		 * List of color separation screen spot functions.
		 */
		public screenSpotFunctionList: ScreenSpotFunction[];
	}

	/**
	 * Paper size.
	 */
	class Paper {
		

		/**
		 * The paper name.
		 */
		public static name: string;
		

		/**
		 * The paper name.
		 */
		public name: string;
		

		/**
		 * The paper information.
		 */
		public static paperInfo: PaperInfo;
		

		/**
		 * The paper information.
		 */
		public paperInfo: PaperInfo;
	}

	/**
	 * Paper information.
	 */
	class PaperInfo {
		

		/**
		 * The paper's width (in points)
		 */
		public static width: number;
		

		/**
		 * The paper's width (in points)
		 */
		public width: number;
		

		/**
		 * The paper's height (in points)
		 */
		public static height: number;
		

		/**
		 * The paper's height (in points)
		 */
		public height: number;
		

		/**
		 * The imageable area.
		 */
		public static imageableArea: number[];
		

		/**
		 * The imageable area.
		 */
		public imageableArea: number[];
		

		/**
		 * Is it a custom paper?
		 */
		public static customPaper: boolean;
		

		/**
		 * Is it a custom paper?
		 */
		public customPaper: boolean;
	}

	/**
	 * Color separation screen.
	 */
	class Screen {
		

		/**
		 * The color separation screen name.
		 */
		public static name: string;
		

		/**
		 * The color separation screen name.
		 */
		public name: string;
		

		/**
		 * The color separation screen information.
		 */
		public static screenInfo: ScreenInfo;
		

		/**
		 * The color separation screen information.
		 */
		public screenInfo: ScreenInfo;
	}

	/**
	 * Screen information.
	 */
	class ScreenInfo {
		

		/**
		 * Is it the default screen?
		 */
		public static defaultScreen: boolean;
		

		/**
		 * Is it the default screen?
		 */
		public defaultScreen: boolean;
		

		/**
		 * The screen's frequency.
		 */
		public static frequency: number;
		

		/**
		 * The screen's frequency.
		 */
		public frequency: number;
		

		/**
		 * The screen's angle (in degrees)
		 */
		public static angle: number;
		

		/**
		 * The screen's angle (in degrees)
		 */
		public angle: number;
	}

	/**
	 * Color separation screen spot function.
	 */
	class ScreenSpotFunction {
		

		/**
		 * The color separation screen spot function name.
		 */
		public static name: string;
		

		/**
		 * The color separation screen spot function name.
		 */
		public name: string;
		

		/**
		 * The spot function in terms of the PostScript commands.
		 */
		public static spotFunction: string;
		

		/**
		 * The spot function in terms of the PostScript commands.
		 */
		public spotFunction: string;
	}

	/**
	 * Printer's ink.
	 */
	class Ink {
		

		/**
		 * The ink's name.
		 */
		public static name: string;
		

		/**
		 * The ink's name.
		 */
		public name: string;
		

		/**
		 * The ink information.
		 */
		public static inkInfo: InkInfo;
		

		/**
		 * The ink information.
		 */
		public inkInfo: InkInfo;
	}

	/**
	 * Ink information.
	 */
	class InkInfo {
		

		/**
		 * The ink printing status.
		 */
		public static printingStatus: InkPrintStatus;
		

		/**
		 * The ink printing status.
		 */
		public printingStatus: InkPrintStatus;
		

		/**
		 * The ink type.
		 */
		public static kind: InkType;
		

		/**
		 * The ink type.
		 */
		public kind: InkType;
		

		/**
		 * The trapping type.
		 */
		public static trapping: TrappingType;
		

		/**
		 * The trapping type.
		 */
		public trapping: TrappingType;
		

		/**
		 * The order of trapping for the ink.
		 */
		public static trappingOrder: number;
		

		/**
		 * The order of trapping for the ink.
		 */
		public trappingOrder: number;
		

		/**
		 * The neutral density.
		 */
		public static density: number;
		

		/**
		 * The neutral density.
		 */
		public density: number;
		

		/**
		 * The ink's frequency.
		 */
		public static frequency: number;
		

		/**
		 * The ink's frequency.
		 */
		public frequency: number;
		

		/**
		 * The ink's screen angle (in degrees)
		 */
		public static angle: number;
		

		/**
		 * The ink's screen angle (in degrees)
		 */
		public angle: number;
		

		/**
		 * The color of the custom ink.
		 */
		public static customColor: Color;
		

		/**
		 * The color of the custom ink.
		 */
		public customColor: Color;
		

		/**
		 * The dot shape name.
		 */
		public static dotShape: string;
		

		/**
		 * The dot shape name.
		 */
		public dotShape: string;
	}

	/**
	 * The new document preset to use for creating a new document.
	 */
	class DocumentPreset {
		

		/**
		 * The title for the new document.
		 */
		public static title: string;
		

		/**
		 * The title for the new document.
		 */
		public title: string;
		

		/**
		 * The width for the new document.
		 */
		public static width: number;
		

		/**
		 * The width for the new document.
		 */
		public width: number;
		

		/**
		 * The height for the new document.
		 */
		public static height: number;
		

		/**
		 * The height for the new document.
		 */
		public height: number;
		

		/**
		 * Number of artboards for new document.Range (1:100).
		 */
		public static numArtboards: number;
		

		/**
		 * Number of artboards for new document.Range (1:100).
		 */
		public numArtboards: number;
		

		/**
		 * Layout for artboards.
		 */
		public static artboardLayout: DocumentArtboardLayout;
		

		/**
		 * Layout for artboards.
		 */
		public artboardLayout: DocumentArtboardLayout;
		

		/**
		 * Spacing between artboards.
		 */
		public static artboardSpacing: number;
		

		/**
		 * Spacing between artboards.
		 */
		public artboardSpacing: number;
		

		/**
		 * Number of rows (for rows layout) OR column(for column layouts)of artboards.Range is 1 to (docNumArtboards - 1) or 1 for single row or column layouts.
		 */
		public static artboardRowsOrCols: number;
		

		/**
		 * Number of rows (for rows layout) OR column(for column layouts)of artboards.Range is 1 to (docNumArtboards - 1) or 1 for single row or column layouts.
		 */
		public artboardRowsOrCols: number;
		

		/**
		 * The color mode for the new document.
		 */
		public static colorMode: DocumentColorSpace;
		

		/**
		 * The color mode for the new document.
		 */
		public colorMode: DocumentColorSpace;
		

		/**
		 * The units for the new document.
		 */
		public static units: RulerUnits;
		

		/**
		 * The units for the new document.
		 */
		public units: RulerUnits;
		

		/**
		 * The preview mode for the new document.
		 */
		public static previewMode: DocumentPreviewMode;
		

		/**
		 * The preview mode for the new document.
		 */
		public previewMode: DocumentPreviewMode;
		

		/**
		 * The raster resolution for the new document.
		 */
		public static rasterResolution: DocumentRasterResolution;
		

		/**
		 * The raster resolution for the new document.
		 */
		public rasterResolution: DocumentRasterResolution;
		

		/**
		 * The transparency grid for the new document.
		 */
		public static transparencyGrid: DocumentTransparencyGrid;
		

		/**
		 * The transparency grid for the new document.
		 */
		public transparencyGrid: DocumentTransparencyGrid;
	}

	/**
	 * The print options.
	 */
	class PrintOptions {
		

		/**
		 * The name of the printer to print to.
		 */
		public static printerName: string;
		

		/**
		 * The name of the printer to print to.
		 */
		public printerName: string;
		

		/**
		 * The name of the PPD to use.
		 */
		public static PPDName: string;
		

		/**
		 * The name of the PPD to use.
		 */
		public PPDName: string;
		

		/**
		 * The name of a print preset to use.
		 */
		public static printPreset: string;
		

		/**
		 * The name of a print preset to use.
		 */
		public printPreset: string;
		

		/**
		 * The transparency flattener preset name.
		 */
		public static flattenerPreset: string;
		

		/**
		 * The transparency flattener preset name.
		 */
		public flattenerPreset: string;
		

		/**
		 * The paper options.
		 */
		public static paperOptions: PrintPaperOptions;
		

		/**
		 * The paper options.
		 */
		public paperOptions: PrintPaperOptions;
		

		/**
		 * The printing job options.
		 */
		public static jobOptions: PrintJobOptions;
		

		/**
		 * The printing job options.
		 */
		public jobOptions: PrintJobOptions;
		

		/**
		 * The printing color separation options.
		 */
		public static colorSeparationOptions: PrintColorSeparationOptions;
		

		/**
		 * The printing color separation options.
		 */
		public colorSeparationOptions: PrintColorSeparationOptions;
		

		/**
		 * The printing coordinate options.
		 */
		public static coordinateOptions: PrintCoordinateOptions;
		

		/**
		 * The printing coordinate options.
		 */
		public coordinateOptions: PrintCoordinateOptions;
		

		/**
		 * The printing page marks options.
		 */
		public static pageMarksOptions: PrintPageMarksOptions;
		

		/**
		 * The printing page marks options.
		 */
		public pageMarksOptions: PrintPageMarksOptions;
		

		/**
		 * The printing font options.
		 */
		public static fontOptions: PrintFontOptions;
		

		/**
		 * The printing font options.
		 */
		public fontOptions: PrintFontOptions;
		

		/**
		 * The printing PostScript options.
		 */
		public static postScriptOptions: PrintPostScriptOptions;
		

		/**
		 * The printing PostScript options.
		 */
		public postScriptOptions: PrintPostScriptOptions;
		

		/**
		 * The printing color management options.
		 */
		public static colorManagementOptions: PrintColorManagementOptions;
		

		/**
		 * The printing color management options.
		 */
		public colorManagementOptions: PrintColorManagementOptions;
		

		/**
		 * The printing flattener options.
		 */
		public static flattenerOptions: PrintFlattenerOptions;
		

		/**
		 * The printing flattener options.
		 */
		public flattenerOptions: PrintFlattenerOptions;
	}

	/**
	 * The paper options.
	 */
	class PrintPaperOptions {
		

		/**
		 * The paper's name.
		 */
		public static name: string;
		

		/**
		 * The paper's name.
		 */
		public name: string;
		

		/**
		 * The custom width (in points) for using the custom paper.
		 */
		public static width: number;
		

		/**
		 * The custom width (in points) for using the custom paper.
		 */
		public width: number;
		

		/**
		 * The custom height (in points) for using the custom paper.
		 */
		public static height: number;
		

		/**
		 * The custom height (in points) for using the custom paper.
		 */
		public height: number;
		

		/**
		 * Custom offset (in points) for using the custom paper.
		 */
		public static offset: number;
		

		/**
		 * Custom offset (in points) for using the custom paper.
		 */
		public offset: number;
		

		/**
		 * Whether to transverse the artwork (rotate 90 degrees) on the custom paper.
		 */
		public static transverse: boolean;
		

		/**
		 * Whether to transverse the artwork (rotate 90 degrees) on the custom paper.
		 */
		public transverse: boolean;
	}

	/**
	 * The print job options.
	 */
	class PrintJobOptions {
		

		/**
		 * The layers/objects to be printed.
		 */
		public static designation: PrintArtworkDesignation;
		

		/**
		 * The layers/objects to be printed.
		 */
		public designation: PrintArtworkDesignation;
		

		/**
		 * The printing bounds.
		 */
		public static printArea: PrintingBounds;
		

		/**
		 * The printing bounds.
		 */
		public printArea: PrintingBounds;
		

		/**
		 * The number of copies to print.
		 */
		public static copies: number;
		

		/**
		 * The number of copies to print.
		 */
		public copies: number;
		

		/**
		 * Print pages in reverse order.
		 */
		public static reversePages: boolean;
		

		/**
		 * Print pages in reverse order.
		 */
		public reversePages: boolean;
		

		/**
		 * Whether to collate print pages.
		 */
		public static collate: boolean;
		

		/**
		 * Whether to collate print pages.
		 */
		public collate: boolean;
		

		/**
		 * The file to be printed to.
		 */
		public static file: javascript.File;
		

		/**
		 * The file to be printed to.
		 */
		public file: javascript.File;
		

		/**
		 * Whether to print as bitmap.
		 */
		public static printAsBitmap: boolean;
		

		/**
		 * Whether to print as bitmap.
		 */
		public printAsBitmap: boolean;
		

		/**
		 * The bitmap resolution.
		 */
		public static bitmapResolution: number;
		

		/**
		 * The bitmap resolution.
		 */
		public bitmapResolution: number;
		

		/**
		 * The print job name.
		 */
		public static name: string;
		

		/**
		 * The print job name.
		 */
		public name: string;
		

		/**
		 * Whether to print all artboards.
		 */
		public static printAllArtboards: boolean;
		

		/**
		 * Whether to print all artboards.
		 */
		public printAllArtboards: boolean;
		

		/**
		 * Artboard Range to be printed if PrintAllArtboards is false.
		 */
		public static artboardRange: string;
		

		/**
		 * Artboard Range to be printed if PrintAllArtboards is false.
		 */
		public artboardRange: string;
	}

	/**
	 * Print color separation options.
	 */
	class PrintColorSeparationOptions {
		

		/**
		 * The color separation type.
		 */
		public static colorSeparationMode: PrintColorSeparationMode;
		

		/**
		 * The color separation type.
		 */
		public colorSeparationMode: PrintColorSeparationMode;
		

		/**
		 * Whether to convert all spot colors to process colors.
		 */
		public static convertSpotColors: boolean;
		

		/**
		 * Whether to convert all spot colors to process colors.
		 */
		public convertSpotColors: boolean;
		

		/**
		 * Whether to overprint in black.
		 */
		public static overPrintBlack: boolean;
		

		/**
		 * Whether to overprint in black.
		 */
		public overPrintBlack: boolean;
		

		/**
		 * The list of inks for color separation.
		 */
		public static inkList: Ink[];
		

		/**
		 * The list of inks for color separation.
		 */
		public inkList: Ink[];
	}

	/**
	 * The print coordinate options.
	 */
	class PrintCoordinateOptions {
		

		/**
		 * The artwork orientation.
		 */
		public static orientation: PrintOrientation;
		

		/**
		 * The artwork orientation.
		 */
		public orientation: PrintOrientation;
		

		/**
		 * Whether to flip artwork horizontally.
		 */
		public static emulsion: boolean;
		

		/**
		 * Whether to flip artwork horizontally.
		 */
		public emulsion: boolean;
		

		/**
		 * The artwork position on media.
		 */
		public static position: PrintPosition;
		

		/**
		 * The artwork position on media.
		 */
		public position: PrintPosition;
		

		/**
		 * Whether to proportionally scale the artwork to fit on the page.
		 */
		public static fitToPage: boolean;
		

		/**
		 * Whether to proportionally scale the artwork to fit on the page.
		 */
		public fitToPage: boolean;
		

		/**
		 * The horizontal scaling factor expressed as a percentage (100 = 100%)
		 */
		public static horizontalScale: number;
		

		/**
		 * The horizontal scaling factor expressed as a percentage (100 = 100%)
		 */
		public horizontalScale: number;
		

		/**
		 * The vertical scaling factor expressed as a percentage (100 = 100%)
		 */
		public static verticalScale: number;
		

		/**
		 * The vertical scaling factor expressed as a percentage (100 = 100%)
		 */
		public verticalScale: number;
		

		/**
		 * The page tiling mode.
		 */
		public static tiling: PrintTiling;
		

		/**
		 * The page tiling mode.
		 */
		public tiling: PrintTiling;
	}

	/**
	 * The page marks options.
	 */
	class PrintPageMarksOptions {
		

		/**
		 * The page marks style.
		 */
		public static pageMarksType: PageMarksTypes;
		

		/**
		 * The page marks style.
		 */
		public pageMarksType: PageMarksTypes;
		

		/**
		 * Stroke weight of trim marks.
		 */
		public static trimMarksWeight: number;
		

		/**
		 * Stroke weight of trim marks.
		 */
		public trimMarksWeight: number;
		

		/**
		 * Whether to enable trim marks printing.
		 */
		public static trimMarks: boolean;
		

		/**
		 * Whether to enable trim marks printing.
		 */
		public trimMarks: boolean;
		

		/**
		 * Whether to enable registration marks printing.
		 */
		public static registrationMarks: boolean;
		

		/**
		 * Whether to enable registration marks printing.
		 */
		public registrationMarks: boolean;
		

		/**
		 * Whether to enable color bars printing.
		 */
		public static colorBars: boolean;
		

		/**
		 * Whether to enable color bars printing.
		 */
		public colorBars: boolean;
		

		/**
		 * Whether to enable page info marks printing.
		 */
		public static pageInfoMarks: boolean;
		

		/**
		 * Whether to enable page info marks printing.
		 */
		public pageInfoMarks: boolean;
		

		/**
		 * The bleed offset rect.
		 */
		public static bleedOffsetRect: number[];
		

		/**
		 * The bleed offset rect.
		 */
		public bleedOffsetRect: number[];
		

		/**
		 * The page marks offset rect.
		 */
		public static marksOffsetRect: number[];
		

		/**
		 * The page marks offset rect.
		 */
		public marksOffsetRect: number[];
	}

	/**
	 * The font options for printing.
	 */
	class PrintFontOptions {
		

		/**
		 * The font download mode.
		 */
		public static downloadFonts: PrintFontDownloadMode;
		

		/**
		 * The font download mode.
		 */
		public downloadFonts: PrintFontDownloadMode;
		

		/**
		 * The font substitution policy.
		 */
		public static fontSubstitution: FontSubstitutionPolicy;
		

		/**
		 * The font substitution policy.
		 */
		public fontSubstitution: FontSubstitutionPolicy;
	}

	/**
	 * The PostScript options.
	 */
	class PrintPostScriptOptions {
		

		/**
		 * The PostScript language level.
		 */
		public static postScriptLevel: PrinterPostScriptLevelEnum;
		

		/**
		 * The PostScript language level.
		 */
		public postScriptLevel: PrinterPostScriptLevelEnum;
		

		/**
		 * Whether to print in binary mode.
		 */
		public static binaryPrinting: boolean;
		

		/**
		 * Whether to print in binary mode.
		 */
		public binaryPrinting: boolean;
		

		/**
		 * Whether to print in negative mode.
		 */
		public static negativePrinting: boolean;
		

		/**
		 * Whether to print in negative mode.
		 */
		public negativePrinting: boolean;
		

		/**
		 * The image compression type.
		 */
		public static imageCompression: PostScriptImageCompressionType;
		

		/**
		 * The image compression type.
		 */
		public imageCompression: PostScriptImageCompressionType;
		

		/**
		 * Whether to force continuous tone.
		 */
		public static forceContinuousTone: boolean;
		

		/**
		 * Whether to force continuous tone.
		 */
		public forceContinuousTone: boolean;
		

		/**
		 * Use PostScript level 1 compatible gradient and gradient mesh printing.
		 */
		public static compatibleShading: boolean;
		

		/**
		 * Use PostScript level 1 compatible gradient and gradient mesh printing.
		 */
		public compatibleShading: boolean;
		

		/**
		 * The shading resolution.
		 */
		public static shadingResolution: number;
		

		/**
		 * The shading resolution.
		 */
		public shadingResolution: number;
	}

	/**
	 * The color management options.
	 */
	class PrintColorManagementOptions {
		

		/**
		 * The color management profile mode.
		 */
		public static colorProfileMode: PrintColorProfile;
		

		/**
		 * The color management profile mode.
		 */
		public colorProfileMode: PrintColorProfile;
		

		/**
		 * The color management intent type.
		 */
		public static intent: PrintColorIntent;
		

		/**
		 * The color management intent type.
		 */
		public intent: PrintColorIntent;
		

		/**
		 * The color management profile name.
		 */
		public static name: string;
		

		/**
		 * The color management profile name.
		 */
		public name: string;
	}

	/**
	 * The transparency flattening options.
	 */
	class PrintFlattenerOptions {
		

		/**
		 * The flattening balance.
		 */
		public static flatteningBalance: number;
		

		/**
		 * The flattening balance.
		 */
		public flatteningBalance: number;
		

		/**
		 * The rasterization resolution.
		 */
		public static rasterizationResolution: number;
		

		/**
		 * The rasterization resolution.
		 */
		public rasterizationResolution: number;
		

		/**
		 * The gradient resolution.
		 */
		public static gradientResolution: number;
		

		/**
		 * The gradient resolution.
		 */
		public gradientResolution: number;
		

		/**
		 * Whether to convert all text to outlines.
		 */
		public static convertTextToOutlines: boolean;
		

		/**
		 * Whether to convert all text to outlines.
		 */
		public convertTextToOutlines: boolean;
		

		/**
		 * Whether to convert all strokes to outlines.
		 */
		public static convertStrokesToOutlines: boolean;
		

		/**
		 * Whether to convert all strokes to outlines.
		 */
		public convertStrokesToOutlines: boolean;
		

		/**
		 * Whether to clip complex regions.
		 */
		public static clipComplexRegions: boolean;
		

		/**
		 * Whether to clip complex regions.
		 */
		public clipComplexRegions: boolean;
		

		/**
		 * Overprint.
		 */
		public static overprint: PDFOverprint;
		

		/**
		 * Overprint.
		 */
		public overprint: PDFOverprint;
	}

	/**
	 * Options which may be supplied when capturing a portion of the artwork as an 24 bit PNG file.
	 */
	class ImageCaptureOptions {
		

		/**
		 * The resolution of the captured image file.
		 */
		public static resolution: number;
		

		/**
		 * The resolution of the captured image file.
		 */
		public resolution: number;
		

		/**
		 * Should the resulting image use transparency.
		 */
		public static transparency: boolean;
		

		/**
		 * Should the resulting image use transparency.
		 */
		public transparency: boolean;
		

		/**
		 * Should the artboard be matted with a color.
		 */
		public static matte: boolean;
		

		/**
		 * Should the artboard be matted with a color.
		 */
		public matte: boolean;
		

		/**
		 * The color to use when matting the artboard (default: white)
		 */
		public static matteColor: RGBColor;
		

		/**
		 * The color to use when matting the artboard (default: white)
		 */
		public matteColor: RGBColor;
		

		/**
		 * Should the resulting image be antialiased.
		 */
		public static antiAliasing: boolean;
		

		/**
		 * Should the resulting image be antialiased.
		 */
		public antiAliasing: boolean;
	}

	/**
	 * The document raster effects settings.
	 */
	class RasterEffectOptions {
		

		/**
		 * The color model for the rasterization.
		 */
		public static colorModel: RasterizationColorModel;
		

		/**
		 * The color model for the rasterization.
		 */
		public colorModel: RasterizationColorModel;
		

		/**
		 * The rasterization resolution in dots-per-inch (dpi)
		 */
		public static resolution: number;
		

		/**
		 * The rasterization resolution in dots-per-inch (dpi)
		 */
		public resolution: number;
		

		/**
		 * Should the resulting image use transparency.
		 */
		public static transparency: boolean;
		

		/**
		 * Should the resulting image use transparency.
		 */
		public transparency: boolean;
		

		/**
		 * Should the resulting image be antialiased.
		 */
		public static antiAliasing: boolean;
		

		/**
		 * Should the resulting image be antialiased.
		 */
		public antiAliasing: boolean;
		

		/**
		 * Should a clipping mask be created for the resulting image.
		 */
		public static clippingMask: boolean;
		

		/**
		 * Should a clipping mask be created for the resulting image.
		 */
		public clippingMask: boolean;
		

		/**
		 * Whether to convert all spot colors to process colors in the resulting image.
		 */
		public static convertSpotColors: boolean;
		

		/**
		 * Whether to convert all spot colors to process colors in the resulting image.
		 */
		public convertSpotColors: boolean;
		

		/**
		 * The amount of white space (in points) to be added around the object during rasterization.
		 */
		public static padding: number;
		

		/**
		 * The amount of white space (in points) to be added around the object during rasterization.
		 */
		public padding: number;
	}

	/**
	 * Options which may be supplied when rasterizing the artwork.
	 */
	class RasterizeOptions {
		

		/**
		 * The color model for the rasterization.
		 */
		public static colorModel: RasterizationColorModel;
		

		/**
		 * The color model for the rasterization.
		 */
		public colorModel: RasterizationColorModel;
		

		/**
		 * The rasterization resolution in dots-per-inch (dpi)
		 */
		public static resolution: number;
		

		/**
		 * The rasterization resolution in dots-per-inch (dpi)
		 */
		public resolution: number;
		

		/**
		 * Should the resulting image use transparency.
		 */
		public static transparency: boolean;
		

		/**
		 * Should the resulting image use transparency.
		 */
		public transparency: boolean;
		

		/**
		 * The type of antialiasing method.
		 */
		public static antiAliasingMethod: AntiAliasingMethod;
		

		/**
		 * The type of antialiasing method.
		 */
		public antiAliasingMethod: AntiAliasingMethod;
		

		/**
		 * Should a clipping mask be created for the resulting image.
		 */
		public static clippingMask: boolean;
		

		/**
		 * Should a clipping mask be created for the resulting image.
		 */
		public clippingMask: boolean;
		

		/**
		 * Whether to convert all spot colors to process colors in the resulting image.
		 */
		public static convertSpotColors: boolean;
		

		/**
		 * Whether to convert all spot colors to process colors in the resulting image.
		 */
		public convertSpotColors: boolean;
		

		/**
		 * Should all text be converted to outlines before rasterization.
		 */
		public static convertTextToOutlines: boolean;
		

		/**
		 * Should all text be converted to outlines before rasterization.
		 */
		public convertTextToOutlines: boolean;
		

		/**
		 * Should the resulting image incorporates the layer attributes (such as opacity and blend mode)
		 */
		public static includeLayers: boolean;
		

		/**
		 * Should the resulting image incorporates the layer attributes (such as opacity and blend mode)
		 */
		public includeLayers: boolean;
		

		/**
		 * Should rasterize against a black background instead of white.
		 */
		public static backgroundBlack: boolean;
		

		/**
		 * Should rasterize against a black background instead of white.
		 */
		public backgroundBlack: boolean;
		

		/**
		 * The amount of white space (in points) to be added around the object during rasterization.
		 */
		public static padding: number;
		

		/**
		 * The amount of white space (in points) to be added around the object during rasterization.
		 */
		public padding: number;
	}

	/**
	 * The Adobe Illustrator application.
	 */
	class Application {
		

		/**
		 * Returns the JSON Data required by Hello.
		 * @return {string}
		 */
		public getHelloJSONData(): string;
		

		/**
		 * Launch cep Extension given its ID.
		 * @return {number}
		 * @param {string} extensionID - Arguments for Launching Extension - ID of extension in manifest.xml of corresponding extension.
		 */
		public launchExtension(extensionID: string): number;
		

		/**
		 * Runs API Tests from the TestAPI Plug-in.
		 * @return {void}
		 * @param {string} testName - Arguments for Running Tests - eg. Name of Test/Suite.
		 */
		public runAPITest(testName: string): void;
		

		/**
		 * Loads the aat model to the editor.
		 * @return {string}
		 */
		public aATLoadModel(): string;
		

		/**
		 * Loads a UI description as an extension to the editor.
		 * @return {string}
		 */
		public aATLoadUIExtension(): string;
		

		/**
		 * Loads a session file as an extension to the editor.
		 * @return {string}
		 */
		public aATLoadLibExtension(): string;
		

		/**
		 * Executes the active session in the sequencer.
		 * @return {void}
		 */
		public aATExecuteSession(): void;
		

		/**
		 * Executes the active session in the sequencer.
		 * @return {void}
		 * @param {javascript.File} file - Execute a session file.
		 */
		public aATExecuteSessionFromFile(file: javascript.File): void;
		

		/**
		 * Retrieves a file path to the AAT editor swf.
		 * @return {javascript.File}
		 */
		public aATGetEditorDialogFile(): javascript.File;
		

		/**
		 * Retrieves a string representing the AAT version.
		 * @return {string}
		 */
		public getVersionString(): string;
		

		/**
		 * Retrieves a file path to the AAT error dialog swf.
		 * @return {javascript.File}
		 */
		public aATGetErrorDialogFile(): javascript.File;
		

		/**
		 * Retrieves a boolean indicating the presence of errors in the last script to execute.
		 * @return {boolean}
		 */
		public aATErrorsExist(): boolean;
		

		/**
		 * Retrieves a string containing the results of the last script to execute.
		 * @return {string}
		 */
		public getExecutionOutput(): string;
		

		/**
		 * Clear the sequencer.
		 * @return {string}
		 */
		public aATClear(): string;
		

		/**
		 * Get the active session for the sequncer.
		 * @return {string}
		 */
		public aATGetSession(): string;
		

		/**
		 * Saves the active session in the sequencer to a file.
		 * @return {string}
		 */
		public aATSaveSession(): string;
		

		/**
		 * Saves the active session in the sequencer to a new file.
		 * @return {string}
		 */
		public aATSaveAsSession(): string;
		

		/**
		 * Loads a session into the sequencer.
		 * @return {string}
		 */
		public aATLoadSessionFile(): string;
		

		/**
		 * Add the specified to the sequencer.
		 * @return {string}
		 * @param {number} sessionIndex - The index in the session of the top-most sequence for the item to add.
		 * @param {number} destinationSequenceID - The UID for the owning sequence.
		 * @param {number} destinationIndex - The item UID where to insert.
		 * @param {string} srcItemIDData - The item ID of the item to construct.
		 * @param {string} type - The source of the item to construct.
		 */
		public aATAddItem(sessionIndex: number, destinationSequenceID: number, destinationIndex: number, srcItemIDData: string, type: string): string;
		

		/**
		 * Moves the specified in the sequencer.
		 * @return {string}
		 * @param {number} sessionIndex - The index in the session of the top-most sequence for the item to move.
		 * @param {string} moveThisID - The UID of the item to replace.
		 * @param {number} newSessionIndex - The index in the session of the destination top-most sequence.
		 * @param {string} destinationSequenceID - The UID for the owning sequence.
		 * @param {number} destinationIndex - The index where to insert.
		 */
		public aATMoveItem(sessionIndex: number, moveThisID: string, newSessionIndex: number, destinationSequenceID: string, destinationIndex: number): string;
		

		/**
		 * Replaces the specified to the sequencer.
		 * @return {string}
		 * @param {number} sessionIndex - The index in the session of the top-most sequence for the item to add.
		 * @param {number} replaceThisID - The UID of the item to replace.
		 * @param {string} srcItemIDData - The item ID of the item to construct.
		 * @param {string} type - The source of the item to construct.
		 */
		public aATReplaceItem(sessionIndex: number, replaceThisID: number, srcItemIDData: string, type: string): string;
		

		/**
		 * Removes the specified item from the sequencer.
		 * @return {string}
		 * @param {number} sessionIndex - The index in the session of the top-most sequence for the item to add.
		 * @param {string} item - The item UID.
		 */
		public aATRemoveItem(sessionIndex: number, item: string): string;
		

		/**
		 * Duplicates the specified item(s) from the sequencer.
		 * @return {string}
		 * @param {number} sessionIndex - The index in the session of the top-most sequence for the item to add.
		 * @param {string} item - The item UID(s)
		 */
		public aATDuplicateItem(sessionIndex: number, item: string): string;
		

		/**
		 * Opens the specified item from the sequencer in the item editor.
		 * @return {string}
		 * @param {number} sessionIndex - The index in the session of the top-most sequence for the item to add.
		 * @param {string} item - The item UID.
		 */
		public aATEditItem(sessionIndex: number, item: string): string;
		

		/**
		 * Applies the data used in the item editor to the item.
		 * @return {string}
		 * @param {number} sessionIndex - The index in the session of the top-most sequence for the item to edit.
		 * @param {string} item - The item UID.
		 * @param {string} data - The data to apply in XML format.
		 */
		public applyDataToItem(sessionIndex: number, item: string, data: string): string;
		

		/**
		 * Applies data to the specified item from the sequencer in the item editor.
		 * @return {boolean}
		 * @param {number} sessionIndex - The index in the session of the top-most sequence for the item to add.
		 * @param {string} item - The item UID.
		 * @param {string} dataID - The data to apply in XML format.
		 * @param {string} data - The data to apply in XML format.
		 */
		public applySingleDataPointToItem(sessionIndex: number, item: string, dataID: string, data: string): boolean;
		

		/**
		 * Returns a string translated from the key and source data passed in.
		 * @return {string}
		 * @param {string} key - The string to translate.
		 * @param {string} source - The plugin name from the source of the key.
		 */
		public translateString(key: string, source: string): string;
		

		/**
		 * Prompts the user to save a file or choose a file or directory and returns a relative path string to the file.
		 * @return {string}
		 * @param {string} path - The path relative to the folder specified by Relative.
		 * @param {string} relative - The current relative path token.
		 * @param {string} type - The type of dialog to show in string format.
		 */
		public aATFileSaveDialog(path: string, relative: string, type: string): string;
		

		/**
		 * Switches a files relative token and path.
		 * @return {string}
		 * @param {string} path - The path relative to the folder specified by Relative.
		 * @param {string} relative - The current relative path token.
		 * @param {string} newRelative - The new relative path token.
		 */
		public aATFileRelativeChanged(path: string, relative: string, newRelative: string): string;
		

		/**
		 * Gets an XML string listing the relative paths and the UI strings to display them.
		 * @return {string}
		 */
		public aATGetListOfRelativePaths(): string;
		

		/**
		 * Starts the automation tests for the Sync Settings feature.
		 * @return {boolean}
		 */
		public beginSyncSettingsAutomationTest(): boolean;
		

		/**
		 * Starts the automation tests for the Typekit Font feature.
		 * @return {boolean}
		 */
		public beginTypekitFontAutomationTest(): boolean;
		

		/**
		 * Cut current selection to the clipboard.
		 * @return {void}
		 */
		public cut(): void;
		

		/**
		 * Copy current selection to the clipboard.
		 * @return {void}
		 */
		public copy(): void;
		

		/**
		 * Paste clipboard into the current document.
		 * @return {void}
		 */
		public paste(): void;
		

		/**
		 * Checks if fill is active or not.
		 * @return {boolean}
		 */
		public isFillActive(): boolean;
		

		/**
		 * Checks if stroke is active or not.
		 * @return {boolean}
		 */
		public isStrokeActive(): boolean;
		

		/**
		 * Invokes application's color picker.
		 * @return {Color}
		 * @param {Color} color - The color to load in the color picker initially.
		 */
		public showColorPicker(color: Color): Color;
		

		/**
		 * For Internal Use.
		 * @return {Document}
		 * @param {javascript.File} assetURL - For Internal use.
		 * @param {javascript.File} thumbnailURL - For Internal use.
		 * @param {any} options - For internal use.
		 */
		public openCloudLibraryAssetForEditing(assetURL: javascript.File, thumbnailURL: javascript.File, options?: any): Document;
		

		/**
		 * For Internal Use.
		 * @return {void}
		 * @param {any} options - Options for the PNG24 export.
		 */
		public setThumbnailOptionsForCloudLibrary(options: any): void;
		

		/**
		 * Undo the last transaction.
		 * @return {void}
		 */
		public undo(): void;
		

		/**
		 * Redo the last transaction.
		 * @return {void}
		 */
		public redo(): void;
		

		/**
		 * Play an action from the Actions Palette.
		 * @return {void}
		 * @param {string} action - The name of the action to play (note that the case of letters in the Action name is important and must match the case of the name in the Actions palette)
		 * @param {string} from - The name of the action set containing the action being played (note that the case of letters in the Action Set name is important and must match the case of the name in the Actions palette)
		 * @param {boolean} dialogs - Are dialog boxes associated with the action to be presented?, optional default: true  @default [true]
		 */
		public doScript(action: string, from: string, dialogs?: boolean): void;
		

		/**
		 * Executes a menu command using the menu shortcut string.
		 * @return {void}
		 * @param {string} menuCommandString - Menu command shortcut.
		 */
		public executeMenuCommand(menuCommandString: string): void;
		

		/**
		 * Given a preset type, returns the full path to the application's default document profile for the type.
		 * @return {javascript.File}
		 * @param {DocumentPresetType} presetType - The preset type.
		 */
		public getPresetFileOfType(presetType: DocumentPresetType): javascript.File;
		

		/**
		 * Load an action into action palette.
		 * @return {void}
		 * @param {javascript.File} actionFilePath - The path on the system of the action file to be loaded.
		 */
		public loadAction(actionFilePath: javascript.File): void;
		

		/**
		 * Unloads an action into action palette.
		 * @return {void}
		 * @param {string} setName - Name of the set to be unloaded.
		 * @param {string} actionName - Name of the action to be unloaded.
		 */
		public unloadAction(setName: string, actionName: string): void;
		

		/**
		 * Sends the script message to the required plugin.
		 * @return {string}
		 * @param {string} pluginName - Plugin to which message needs to be sent.
		 * @param {string} messageSelector - Functionality that is to be executed.
		 * @param {string} inputString - Pass any data encoded in a string.
		 */
		public sendScriptMessage(pluginName: string, messageSelector: string, inputString: string): string;
		

		/**
		 * Given a preset name, tries and retrieves the settings from the preset template.
		 * @return {DocumentPreset}
		 * @param {string} preset - The name of the preset.
		 */
		public getPresetSettings(preset: string): DocumentPreset;
		

		/**
		 * Force Illustrator to redraw its window(s)
		 * @return {void}
		 */
		public redraw(): void;
		

		/**
		 * Invert a matrix.
		 * @return {Matrix}
		 * @param {Matrix} matrix - The matrix to invert.
		 */
		public invertMatrix(matrix: Matrix): Matrix;
		

		/**
		 * Tests if a matrix is singular (cannot be inverted)
		 * @return {boolean}
		 * @param {Matrix} matrix - The matrix to check.
		 */
		public isSingularMatrix(matrix: Matrix): boolean;
		

		/**
		 * Concatenate a translation to a transformation matrix.
		 * @return {Matrix}
		 * @param {Matrix} matrix - The matrix that is to be added to.
		 * @param {number} deltaX - Horizontal transformation., optional default: 0.0  @default [0.0]
		 * @param {number} deltaY - Vertical transformation., optional default: 0.0  @default [0.0]
		 */
		public concatenateTranslationMatrix(matrix: Matrix, deltaX?: number, deltaY?: number): Matrix;
		

		/**
		 * Concatenate a scale matrix to a transformation matrix.
		 * @return {Matrix}
		 * @param {Matrix} matrix - The matrix that is to be added to.
		 * @param {number} scaleX - Horizontal scaling factor expressed as a percentage (100 = 100%), optional default: 100.0  @default [100.0]
		 * @param {number} scaleY - Vertical scaling factor expressed as a percentage (100 = 100%), optional default: 100.0  @default [100.0]
		 */
		public concatenateScaleMatrix(matrix: Matrix, scaleX?: number, scaleY?: number): Matrix;
		

		/**
		 * Concatenate a rotation matrix to a transformation matrix.
		 * @return {Matrix}
		 * @param {Matrix} matrix - The matrix that is to be added to.
		 * @param {number} angle - Angle of rotation (in degrees)
		 */
		public concatenateRotationMatrix(matrix: Matrix, angle: number): Matrix;
		

		/**
		 * Concatenate two transformation matrices.
		 * @return {Matrix}
		 * @param {Matrix} matrix - The matrix that is to be added to.
		 * @param {Matrix} secondMatrix - Second transformation matrix.
		 */
		public concatenateMatrix(matrix: Matrix, secondMatrix: Matrix): Matrix;
		

		/**
		 * Compares two matrices for equality.
		 * @return {boolean}
		 * @param {Matrix} matrix - First transformation matrix to compare.
		 * @param {Matrix} secondMatrix - Second transformation matrix.
		 */
		public isEqualMatrix(matrix: Matrix, secondMatrix: Matrix): boolean;
		

		/**
		 * Returns an identity matrix.
		 * @return {Matrix}
		 */
		public getIdentityMatrix(): Matrix;
		

		/**
		 * Returns a rotation transformation matrix.
		 * @return {Matrix}
		 * @param {number} angle - Angle of rotation (in degrees), optional default: 0.0  @default [0.0]
		 */
		public getRotationMatrix(angle?: number): Matrix;
		

		/**
		 * Returns a scale transformation matrix.
		 * @return {Matrix}
		 * @param {number} scaleX - Horizontal scaling factor expressed as a percentage (100 = 100%), optional default: 100.0  @default [100.0]
		 * @param {number} scaleY - Vertical scaling factor expressed as a percentage (100 = 100%), optional default: 100.0  @default [100.0]
		 */
		public getScaleMatrix(scaleX?: number, scaleY?: number): Matrix;
		

		/**
		 * Returns a translation matrix.
		 * @return {Matrix}
		 * @param {number} deltaX - Horizontal transformation., optional default: 0.0  @default [0.0]
		 * @param {number} deltaY - Vertical transformation., optional default: 0.0  @default [0.0]
		 */
		public getTranslationMatrix(deltaX?: number, deltaY?: number): Matrix;
		

		/**
		 * Open the specified document file.
		 * @return {Document}
		 * @param {javascript.File} file - The file to be opened.
		 * @param {DocumentColorSpace} documentColorSpace - Choose color space only for documents saved with multiple color models (pre-Illustrator 9)
		 * @param {any} options - Options for opening a particular type of file.
		 */
		public open(file: javascript.File, documentColorSpace?: DocumentColorSpace, options?: any): Document;
		

		/**
		 * Dump the PGF portion of ai file to txt file.
		 * @return {boolean}
		 * @param {javascript.File} file - The AI file to be opened.
		 * @param {DocumentColorSpace} documentColorSpace - Choose color space only for documents saved with multiple color models (pre-Illustrator 9)
		 * @param {javascript.File} pGFFile - Folder to save the output PGF file.
		 */
		public dumpPGFFile(file: javascript.File, documentColorSpace: DocumentColorSpace, pGFFile: javascript.File): boolean;
		

		/**
		 * Quit the application.
		 * @return {void}
		 */
		public quit(): void;
		

		/**
		 * @return {void}
		 */
		public beep(): void;
		

		/**
		 * Translate the placeholder text to regular text. A method to enter unicode points in hex values.
		 * @return {string}
		 * @param {string} text - The placeholder text to be translated.
		 */
		public translatePlaceholderText(text: string): string;
		

		/**
		 * Get presets from the file.
		 * @return {string[]}
		 * @param {javascript.File} fileSpec - File spec to import from.
		 */
		public showPresets(fileSpec: javascript.File): string[];
		

		/**
		 * Load the color settings from the file. If the file is an empty file spec, the color management will be turned off.
		 * @return {void}
		 * @param {javascript.File} fileSpec - File spec for the color settings.
		 */
		public loadColorSettings(fileSpec: javascript.File): void;
		

		/**
		 * Get detailed info from the specified PPD file.
		 * @return {PPDFileInfo}
		 * @param {string} name - The model name of the PPD file.
		 */
		public getPPDFileInfo(name: string): PPDFileInfo;
		

		/**
		 * Get the scriptable help group object that represents the search widget in the app bar.
		 * @return {any}
		 */
		public getScriptableHelpGroup(): any;
		

		/**
		 * Converts a sample-component color from one color space to another.
		 * @return {number[]}
		 * @param {ImageColorSpace} sourceColorSpace - The source color space.
		 * @param {number[]} sourceColor - The color to convert, an array of color components. First location of the array should contain alpha if source-has-alpha is true.
		 * @param {ImageColorSpace} destColorSpace - The destination color space.
		 * @param {ColorConvertPurpose} colorConvertPurpose - The parameter which passes the purpose of conversion.
		 * @param {boolean} sourceHasAlpha - True if alpha channel is present in source color., optional default: false  @default [false]
		 * @param {boolean} destHasAlpha - True if alpha channel is present in destination color., optional default: false  @default [false]
		 */
		public convertSampleColor(sourceColorSpace: ImageColorSpace, sourceColor: number[], destColorSpace: ImageColorSpace, colorConvertPurpose: ColorConvertPurpose, sourceHasAlpha?: boolean, destHasAlpha?: boolean): number[];
		

		/**
		 * Generate Creative Suite ActionScript Wrappers in specified directory.
		 * @return {void}
		 * @param {javascript.File} outputFolder - Location for the output files.
		 */
		public reflectCSAW(outputFolder: javascript.File): void;
		

		/**
		 * Switches between workspaces.
		 * @return {boolean}
		 * @param {string} workspaceName - Workspace Name.
		 */
		public switchWorkspace(workspaceName: string): boolean;
		

		/**
		 * Deletes an existing workspace.
		 * @return {boolean}
		 * @param {string} workspaceName - Workspace Name.
		 */
		public deleteWorkspace(workspaceName: string): boolean;
		

		/**
		 * Saves a new workspace.
		 * @return {boolean}
		 * @param {string} workspaceName - Workspace Name.
		 */
		public saveWorkspace(workspaceName: string): boolean;
		

		/**
		 * Resets the current workspace.
		 * @return {boolean}
		 */
		public resetWorkspace(): boolean;
		

		/**
		 * Is In Touch Workspace.
		 * @return {boolean}
		 */
		public isTouchWorkspace(): boolean;
		

		/**
		 * Is user sharing the application usage data.
		 * @return {boolean}
		 */
		public isUserSharingAppUsageData(): boolean;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * The application's name.
		 */
		public name: string;
		

		/**
		 * @readonly
		 * Path specification for the application.
		 */
		public path: javascript.File;
		

		/**
		 * The active document.
		 */
		public activeDocument: Document;
		

		/**
		 * @readonly
		 * The current users adobe id.
		 */
		public userAdobeID: string;
		

		/**
		 * @readonly
		 * The current user's GUID.
		 */
		public userGUID: string;
		

		/**
		 * @readonly
		 * The version of the Adobe Illustrator application.
		 */
		public version: string;
		

		/**
		 * @readonly
		 * The build number of the Adobe Illustrator application.
		 */
		public buildNumber: string;
		

		/**
		 * @readonly
		 * The Locale of the Adobe Illustrator application.
		 */
		public locale: string;
		

		/**
		 * @readonly
		 * The version of the Scripting plugin.
		 */
		public scriptingVersion: string;
		

		/**
		 * @readonly
		 * The amount of unused memory within the Adobe Illustrator partition.
		 */
		public freeMemory: number;
		

		/**
		 * @readonly
		 * Is a web browser available?
		 */
		public browserAvailable: boolean;
		

		/**
		 * The selection visible to the user.
		 */
		public selection: any;
		

		/**
		 * @readonly
		 * Is the application visible.
		 */
		public visible: boolean;
		

		/**
		 * What level of interaction with the user should be allowed when handling script commands.
		 */
		public userInteractionLevel: UserInteractionLevel;
		

		/**
		 * Coordinate System used by script.
		 */
		public coordinateSystem: CoordinateSystem;
		

		/**
		 * @readonly
		 * Preferences for Illustrator.
		 */
		public preferences: Preferences;
		

		/**
		 * @readonly
		 * The list of installed printers.
		 */
		public printerList: Printer[];
		

		/**
		 * @readonly
		 * The list of PPD files currently available for use. For performance reasons, the PPDFile entry only contains the model name and file spec of each PPD file.
		 */
		public PPDFileList: PPDFile[];
		

		/**
		 * @readonly
		 * The list of print preset names currently available for use.
		 */
		public printPresetsList: string[];
		

		/**
		 * @readonly
		 * The list of presets available for creating a new document.
		 */
		public startupPresetsList: string[];
		

		/**
		 * @readonly
		 * The list of PDF preset names currently available for use.
		 */
		public PDFPresetsList: string[];
		

		/**
		 * @readonly
		 * The list of flattener style names currently available for use.
		 */
		public flattenerPresetsList: string[];
		

		/**
		 * @readonly
		 * The list of tracing preset names currently available for use.
		 */
		public tracingPresetsList: string[];
		

		/**
		 * @readonly
		 * The list of color settings files currently available for use.
		 */
		public colorSettingsList: javascript.File;
		

		/**
		 * @readonly
		 * The default color settings file for the current application locale.
		 */
		public defaultColorSettings: javascript.File;
		

		/**
		 * Does paste operation remember layers structure?
		 */
		public pasteRemembersLayers: boolean;
		

		/**
		 * @readonly
		 * The open documents.
		 */
		public documents: Documents;
		

		/**
		 * @readonly
		 * Installed fonts.
		 */
		public textFonts: TextFonts;
	}

	/**
	 * A document.
	 */
	class Document {
		

		/**
		 * Close the specified document(s)
		 * @return {void}
		 * @param {SaveOptions} saving - Specifies whether changes should be saved before closing.
		 */
		public close(saving?: SaveOptions): void;
		

		/**
		 * Save the document.
		 * @return {void}
		 */
		public save(): void;
		

		/**
		 * Save the document with specific save options.
		 * @return {void}
		 * @param {javascript.File} saveIn - The file to save the document in.
		 * @param {any} options - Options for the file type specified.
		 */
		public saveAs(saveIn: javascript.File, options?: any): void;
		

		/**
		 * Print the document.
		 * @return {void}
		 * @param {PrintOptions} options - Print options.
		 */
		public print(options?: PrintOptions): void;
		

		/**
		 * Export the specified document(s)
		 * @return {void}
		 * @param {javascript.File} exportFile - The file to export the document to.
		 * @param {ExportType} exportFormat - The file type to export the document as.
		 * @param {any} options - Options for the file type specified.
		 */
		public exportFile(exportFile: javascript.File, exportFormat: ExportType, options?: any): void;
		

		/**
		 * Export the selection as PNG file.
		 * @return {void}
		 * @param {javascript.File} exportFile - The file to export the selection to.
		 * @param {any} options - Options for the PNG24 export.
		 */
		public exportSelectionAsPNG(exportFile: javascript.File, options?: any): void;
		

		/**
		 * Export the selection as Ai file.
		 * @return {void}
		 * @param {javascript.File} exportFile - The file to export the selection to.
		 */
		public exportSelectionAsAi(exportFile: javascript.File): void;
		

		/**
		 * Import the file into current Ai document.
		 * @return {void}
		 * @param {javascript.File} importFile - The file to import in the current document.
		 */
		public importFile(importFile: javascript.File): void;
		

		/**
		 * Activate the first window associated with the document.
		 * @return {void}
		 */
		public activate(): void;
		

		/**
		 * Import a library containing datasets, variables and their associated dynamic data. Importing variables will overwrite existing variables and datasets.
		 * @return {void}
		 * @param {javascript.File} fileSpec - File spec to import from.
		 */
		public importVariables(fileSpec: javascript.File): void;
		

		/**
		 * Save datasets into an XML library. The datasets contain variables and their associated dynamic data.
		 * @return {void}
		 * @param {javascript.File} file - File spec to export to.
		 */
		public exportVariables(file: javascript.File): void;
		

		/**
		 * Load the character styles from the Illustrator file.
		 * @return {void}
		 * @param {javascript.File} fileSpec - File spec to import from.
		 */
		public importCharacterStyles(fileSpec: javascript.File): void;
		

		/**
		 * Load the paragraph styles from the Illustrator file.
		 * @return {void}
		 * @param {javascript.File} fileSpec - File spec to import from.
		 */
		public importParagraphStyles(fileSpec: javascript.File): void;
		

		/**
		 * Apply the named print preset from the file to the current print setting.
		 * @return {void}
		 * @param {string} printPreset - The name of a print preset to import.
		 * @param {javascript.File} fileSpec - File to import from.
		 */
		public importPrintPreset(printPreset: string, fileSpec: javascript.File): void;
		

		/**
		 * Export the current print setting to the preset file.
		 * @return {void}
		 * @param {javascript.File} file - File to export to.
		 */
		public exportPrintPreset(file: javascript.File): void;
		

		/**
		 * Load all PDF presets from a file.
		 * @return {void}
		 * @param {javascript.File} fileSpec - File to import from.
		 * @param {boolean} replacingPreset - Should existing editable presets be replaced?, optional default: false  @default [false]
		 */
		public importPDFPreset(fileSpec: javascript.File, replacingPreset?: boolean): void;
		

		/**
		 * Save all PDF presets to a file.
		 * @return {void}
		 * @param {javascript.File} file - File to export to.
		 */
		public exportPDFPreset(file: javascript.File): void;
		

		/**
		 * Loads mentioned perspective grid preset, if preset name is specified, else loads all(if no preset name is specified) presets, from the specified file.
		 * @return {void}
		 * @param {javascript.File} fileSpec - File to import from.
		 * @param {string} perspectivePreset - Name of perspective grid preset.
		 */
		public importPerspectiveGridPreset(fileSpec: javascript.File, perspectivePreset?: string): void;
		

		/**
		 * Saves all perspective grid presets to a file.
		 * @return {void}
		 * @param {javascript.File} file - File to export to.
		 */
		public exportPerspectiveGridPreset(file: javascript.File): void;
		

		/**
		 * Capture the artwork content inside the clip bound as raster image, and write out the captured image data into the target image file.
		 * @return {void}
		 * @param {javascript.File} imageFile - The file to which the captured image should be written.
		 * @param {number[]} clipBounds - The rectangular region of the artwork for image capture. If the parameter is omitted, the entire artwork bound is captured.
		 * @param {ImageCaptureOptions} options - Describes the image capture options.
		 */
		public imageCapture(imageFile: javascript.File, clipBounds?: number[], options?: ImageCaptureOptions): void;
		

		/**
		 * Capture the current document window to the target TIFF image file.
		 * @return {void}
		 * @param {javascript.File} imageFile - The TIFF file to which the captured image should be written.
		 * @param {number[]} windowSize - The size to make the window before capture.
		 */
		public windowCapture(imageFile: javascript.File, windowSize: number[]): void;
		

		/**
		 * Rasterize the source art(s) within the specified clip bounds. The source art(s) are disposed as a result of the rasterization.
		 * @return {PageItem}
		 * @param {any} sourceArt - The page item(s) to be rasterized.
		 * @param {number[]} clipBounds - The rectangular region of the artwork for the rasterization. If the parameter is omitted, the bounds of the source art(s) is used instead.
		 * @param {RasterizeOptions} options - Describes the rasterization options.
		 */
		public rasterize(sourceArt: any, clipBounds?: number[], options?: RasterizeOptions): PageItem;
		

		/**
		 * Rearrange Artboards in the document.
		 * @return {boolean}
		 * @param {DocumentArtboardLayout} artboardLayout - Layout of artboards for rearrangement., optional default: DocumentArtboardLayout.GridByRow  @default [DocumentArtboardLayout.GridByRow]
		 * @param {number} artboardRowsOrCols - Number of rows (for rows layout) OR column(for column layouts)of artboards.Range is 1 to (docNumArtboards - 1) or 1 for single row or column layouts., optional default: 1  @default [1]
		 * @param {number} artboardSpacing - Spacing between artboards., optional default: 20.0  @default [20.0]
		 * @param {boolean} artboardMoveArtwork - Whether to move artwork with artboards., optional default: true  @default [true]
		 */
		public rearrangeArtboards(artboardLayout?: DocumentArtboardLayout, artboardRowsOrCols?: number, artboardSpacing?: number, artboardMoveArtwork?: boolean): boolean;
		

		/**
		 * Select art objects in active artboard.
		 * @return {boolean}
		 */
		public selectObjectsOnActiveArtboard(): boolean;
		

		/**
		 * Change the artboard to selected art bounds.
		 * @return {boolean}
		 * @param {number} index - The index of the artboard to update.
		 */
		public fitArtboardToSelectedArt(index?: number): boolean;
		

		/**
		 * Converts the coordinate system of a single point from one coordinate system to another.
		 * @return {number[]}
		 * @param {number[]} coordinate - The Coordinate to convert.
		 * @param {CoordinateSystem} source - The source coordinate system.
		 * @param {CoordinateSystem} destination - The destination coordinate system.
		 */
		public convertCoordinate(coordinate: number[], source: CoordinateSystem, destination: CoordinateSystem): number[];
		

		/**
		 * Selects a predefined preset to define grid for the current document.
		 * @return {boolean}
		 * @param {string} perspectivePreset - Name of perspective grid preset.
		 */
		public selectPerspectivePreset(perspectivePreset: string): boolean;
		

		/**
		 * Shows the current active perspective grid for the document, if no active perspective grid then shows the default perspective grid for the document.
		 * @return {boolean}
		 */
		public showPerspectiveGrid(): boolean;
		

		/**
		 * Hides the current active perspective grid for the document, if there is visible perspective grid.
		 * @return {boolean}
		 */
		public hidePerspectiveGrid(): boolean;
		

		/**
		 * Gets the active plane of the active perspective grid of the document.
		 * @return {PerspectiveGridPlaneType}
		 */
		public getPerspectiveActivePlane(): PerspectiveGridPlaneType;
		

		/**
		 * Sets the active perspective plane for the active grid of the document.
		 * @return {boolean}
		 * @param {PerspectiveGridPlaneType} perspectiveGridPlane - Type of perspective grid plane.
		 */
		public setPerspectiveActivePlane(perspectiveGridPlane: PerspectiveGridPlaneType): boolean;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Is the file a stationery file?
		 */
		public stationery: boolean;
		

		/**
		 * @readonly
		 * The file associated with the document.
		 */
		public fullName: javascript.File;
		

		/**
		 * The active layer.
		 */
		public activeLayer: Layer;
		

		/**
		 * @readonly
		 * The document's current view.
		 */
		public activeView: View;
		

		/**
		 * @readonly
		 * The bounds of the illustration excluding stroke width.
		 */
		public geometricBounds: number[];
		

		/**
		 * @readonly
		 * The visible bounds of the illustration including stroke width.
		 */
		public visibleBounds: number[];
		

		/**
		 */
		public rulerOrigin: number[];
		

		/**
		 * @readonly
		 */
		public rulerUnits: RulerUnits;
		

		/**
		 */
		public pageOrigin: number[];
		

		/**
		 */
		public cropBox: number[];
		

		/**
		 */
		public cropStyle: CropOptions;
		

		/**
		 * @readonly
		 */
		public width: number;
		

		/**
		 * @readonly
		 */
		public height: number;
		

		/**
		 * @readonly
		 */
		public showPlacedImages: boolean;
		

		/**
		 * @readonly
		 */
		public outputResolution: number;
		

		/**
		 * @readonly
		 */
		public printTiles: boolean;
		

		/**
		 * The selection within the document.
		 */
		public selection: any;
		

		/**
		 * @readonly
		 */
		public splitLongPaths: boolean;
		

		/**
		 * @readonly
		 */
		public tileFullPages: boolean;
		

		/**
		 * @readonly
		 */
		public useDefaultScreen: boolean;
		

		/**
		 * @readonly
		 * The color space used for the document.
		 */
		public documentColorSpace: DocumentColorSpace;
		

		/**
		 * @readonly
		 * The document's name.
		 */
		public name: string;
		

		/**
		 * @readonly
		 * Path specification for the document.
		 */
		public path: javascript.File;
		

		/**
		 * Has the document been saved?
		 */
		public saved: boolean;
		

		/**
		 * Should a new path be filled?
		 */
		public defaultFilled: boolean;
		

		/**
		 * Default fill color.
		 */
		public defaultFillColor: Color;
		

		/**
		 * Will art beneath a filled object be overprinted by default?
		 */
		public defaultFillOverprint: boolean;
		

		/**
		 * Should a new path be stroked?
		 */
		public defaultStroked: boolean;
		

		/**
		 * Default stroke color.
		 */
		public defaultStrokeColor: Color;
		

		/**
		 * Will art beneath a stroked object be overprinted by default?
		 */
		public defaultStrokeOverprint: boolean;
		

		/**
		 * Default width of stroke.
		 */
		public defaultStrokeWidth: number;
		

		/**
		 * Default dash lengths (set to {} for a solid line)
		 */
		public defaultStrokeDashes: number[];
		

		/**
		 * The default distance into the dash pattern at which the pattern should be started.
		 */
		public defaultStrokeDashOffset: number;
		

		/**
		 * Default type of line capping.
		 */
		public defaultStrokeCap: StrokeCap;
		

		/**
		 * Default type of joints.
		 */
		public defaultStrokeJoin: StrokeJoin;
		

		/**
		 * Specifies whether a join is mitered (pointed) or beveled (squared-off) by default.
		 */
		public defaultStrokeMiterLimit: number;
		

		/**
		 * The active data set.
		 */
		public activeDataSet: DataSet;
		

		/**
		 * The locked variables.
		 */
		public variablesLocked: boolean;
		

		/**
		 * The XMP packet string associated with the document.
		 */
		public XMPString: string;
		

		/**
		 * The document raster effects settings.
		 */
		public rasterEffectSettings: RasterEffectOptions;
		

		/**
		 * @readonly
		 * The name of the color profile of the document.
		 */
		public colorProfileName: string;
		

		/**
		 * @readonly
		 * All artboards in the document.
		 */
		public artboards: Artboards;
		

		/**
		 * @readonly
		 * The compound path artwork in this collection.
		 */
		public compoundPathItems: CompoundPathItems;
		

		/**
		 * @readonly
		 * The layers in this document.
		 */
		public layers: Layers;
		

		/**
		 * @readonly
		 * All the artwork in this document.
		 */
		public pageItems: PageItems;
		

		/**
		 * @readonly
		 * The path artwork in this document.
		 */
		public pathItems: PathItems;
		

		/**
		 * @readonly
		 * The tags in this document.
		 */
		public tags: Tags;
		

		/**
		 * @readonly
		 * The views in this document.
		 */
		public views: Views;
		

		/**
		 * @readonly
		 * The raster art items in this document.
		 */
		public rasterItems: RasterItems;
		

		/**
		 * @readonly
		 * The placed art items in this document.
		 */
		public placedItems: PlacedItems;
		

		/**
		 * @readonly
		 * The embedded art items in this layer.
		 */
		public embeddedItems: EmbeddedItems;
		

		/**
		 * @readonly
		 * The mesh art items in this document.
		 */
		public meshItems: MeshItems;
		

		/**
		 * @readonly
		 * The plugin art items in this document.
		 */
		public pluginItems: PluginItems;
		

		/**
		 * @readonly
		 * The graph art items in this document.
		 */
		public graphItems: GraphItems;
		

		/**
		 * @readonly
		 * The non-native art items in this document.
		 */
		public nonNativeItems: NonNativeItems;
		

		/**
		 * @readonly
		 * The group items in this document.
		 */
		public groupItems: GroupItems;
		

		/**
		 * @readonly
		 * The text frame items in this document.
		 */
		public textFrames: TextFrameItems;
		

		/**
		 * @readonly
		 * The story items in this document.
		 */
		public stories: Stories;
		

		/**
		 * @readonly
		 * The list of character styles in this document.
		 */
		public characterStyles: CharacterStyles;
		

		/**
		 * @readonly
		 * The list of paragraph styles in this document.
		 */
		public paragraphStyles: ParagraphStyles;
		

		/**
		 * @readonly
		 * The Kinsoku set.
		 */
		public kinsokuSet: string[];
		

		/**
		 * @readonly
		 * The Mojikumi set.
		 */
		public mojikumiSet: string[];
		

		/**
		 * @readonly
		 * The swatches in this document.
		 */
		public swatches: Swatches;
		

		/**
		 * @readonly
		 * The Swatch Groups in this document.
		 */
		public swatchGroups: SwatchGroups;
		

		/**
		 * @readonly
		 * The gradients available in this document.
		 */
		public gradients: Gradients;
		

		/**
		 * @readonly
		 * The patterns available in this document.
		 */
		public patterns: Patterns;
		

		/**
		 * @readonly
		 * The custom spot colors available in this document.
		 */
		public spots: Spots;
		

		/**
		 * @readonly
		 * The symbols defined in this document.
		 */
		public symbols: Symbols;
		

		/**
		 * @readonly
		 * The symbol items in this document.
		 */
		public symbolItems: SymbolItems;
		

		/**
		 * @readonly
		 * The brushes defined in this document.
		 */
		public brushes: Brushes;
		

		/**
		 * @readonly
		 * The graphic styles defined in this document.
		 */
		public graphicStyles: ArtStyles;
		

		/**
		 * @readonly
		 * The variables defined in this document.
		 */
		public variables: Variables;
		

		/**
		 * @readonly
		 * The list of inks in this document.
		 */
		public inkList: Ink[];
		

		/**
		 * @readonly
		 * The data sets defined in this document.
		 */
		public dataSets: DataSets;
		

		/**
		 * @readonly
		 * The text frame items in this story.
		 */
		public legacyTextItems: LegacyTextItems;
	}

	/**
	 * A layer.
	 */
	class Layer {
		

		/**
		 * Move the object.
		 * @return {Layer}
		 * @param {any} relativeObject - 
		 * @param {number[]} insertionLocation - 
		 */
		public move(relativeObject: any, insertionLocation: number[]): Layer;
		

		/**
		 * Deletes this object.
		 * @return {void}
		 */
		public remove(): void;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Arranges the layer relative to other layers.
		 * @return {void}
		 * @param {ZOrderMethod} zOrderCmd - How to arrange the layer.
		 */
		public zOrder(zOrderCmd: ZOrderMethod): void;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * Is the layer visible?
		 */
		public visible: boolean;
		

		/**
		 * Is the layer editable?
		 */
		public locked: boolean;
		

		/**
		 * Is the layer printable?
		 */
		public printable: boolean;
		

		/**
		 * Is any artwork in this layer selected? Setting this property to false deselects all artwork in the layer.
		 */
		public hasSelectedArtwork: boolean;
		

		/**
		 * Is the layer rendered in preview mode?
		 */
		public preview: boolean;
		

		/**
		 * Is rendered as dimmed in this layer?
		 */
		public dimPlacedImages: boolean;
		

		/**
		 * Color used when outlining artwork in this layer.
		 */
		public color: RGBColor;
		

		/**
		 * The layer's name.
		 */
		public name: string;
		

		/**
		 * The layer's opacity (between 0.0 and 100.0)
		 */
		public opacity: number;
		

		/**
		 * @readonly
		 * The drawing order of the layer.
		 */
		public zOrderPosition: number;
		

		/**
		 * @readonly
		 * The absolute drawing order of the layer.
		 */
		public absoluteZOrderPosition: number;
		

		/**
		 * Is the layer sliced (default: false)
		 */
		public sliced: boolean;
		

		/**
		 * The mode used when compositing an object.
		 */
		public blendingMode: BlendModes;
		

		/**
		 * Is the artwork isolated.
		 */
		public isIsolated: boolean;
		

		/**
		 * Is the artwork used to create a knockout.
		 */
		public artworkKnockout: KnockoutState;
		

		/**
		 * @readonly
		 * The compound path artwork in this layer.
		 */
		public compoundPathItems: CompoundPathItems;
		

		/**
		 * @readonly
		 * All the artwork in this layer.
		 */
		public pageItems: PageItems;
		

		/**
		 * @readonly
		 * The path artwork in this layer.
		 */
		public pathItems: PathItems;
		

		/**
		 * @readonly
		 * The raster art items in this layer.
		 */
		public rasterItems: RasterItems;
		

		/**
		 * @readonly
		 * The placed art items in this layer.
		 */
		public placedItems: PlacedItems;
		

		/**
		 * @readonly
		 * The mesh art items in this layer.
		 */
		public meshItems: MeshItems;
		

		/**
		 * @readonly
		 * The plugin art items in this layer.
		 */
		public pluginItems: PluginItems;
		

		/**
		 * @readonly
		 * The graph art items in this layer.
		 */
		public graphItems: GraphItems;
		

		/**
		 * @readonly
		 * The non-native art items in this layer.
		 */
		public nonNativeItems: NonNativeItems;
		

		/**
		 * @readonly
		 * The group items in this layer.
		 */
		public groupItems: GroupItems;
		

		/**
		 * @readonly
		 * The text frame items in this layer.
		 */
		public textFrames: TextFrameItems;
		

		/**
		 * @readonly
		 * Nested layers.
		 */
		public layers: Layers;
		

		/**
		 * @readonly
		 * The symbol items in this layer.
		 */
		public symbolItems: SymbolItems;
		

		/**
		 * @readonly
		 * The text frame items in this story.
		 */
		public legacyTextItems: LegacyTextItems;
	}

	/**
	 * A view.
	 */
	class View {
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * The bounding rectangle of this view.
		 */
		public bounds: number[];
		

		/**
		 * The center point of this view.
		 */
		public centerPoint: number[];
		

		/**
		 * The zoom factor of this view.
		 */
		public zoom: number;
		

		/**
		 * The mode of display.
		 */
		public screenMode: ScreenMode;
	}

	/**
	 * A gradient.
	 */
	class Gradient {
		

		/**
		 * Deletes this object.
		 * @return {void}
		 */
		public remove(): void;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * The gradient type.
		 */
		public type: GradientType;
		

		/**
		 * The gradient's name.
		 */
		public name: string;
		

		/**
		 * @readonly
		 * The stops in this gradient.
		 */
		public gradientStops: GradientStops;
	}

	/**
	 * A gradient stop.
	 */
	class GradientStop {
		

		/**
		 * Deletes this object.
		 * @return {void}
		 */
		public remove(): void;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * Midpoint key value in percent.
		 */
		public midPoint: number;
		

		/**
		 * Location of color in the blend (in percent)
		 */
		public rampPoint: number;
		

		/**
		 * The color linked to this gradient stop.
		 */
		public color: Color;
		

		/**
		 * The opacity (between 0.0 and 100.0) value for the gradient stop.
		 */
		public opacity: number;
	}

	/**
	 * Preferences for Illustrator.
	 */
	class Preferences {
		

		/**
		 * Retrieve the value of the application preference key as boolean.
		 * @return {boolean}
		 * @param {string} key - The preference key.
		 */
		public getBooleanPreference(key: string): boolean;
		

		/**
		 * Set the value of the application preference key as boolean.
		 * @return {void}
		 * @param {string} key - The preference key.
		 * @param {boolean} value - The boolean value of the preference key.
		 */
		public setBooleanPreference(key: string, value: boolean): void;
		

		/**
		 * Retrieve the value of the application preference key as integer.
		 * @return {number}
		 * @param {string} key - The preference key.
		 */
		public getIntegerPreference(key: string): number;
		

		/**
		 * Set the value of the application preference key as integer.
		 * @return {void}
		 * @param {string} key - The preference key.
		 * @param {number} value - The boolean value of the preference key.
		 */
		public setIntegerPreference(key: string, value: number): void;
		

		/**
		 * Retrieve the value of the application preference key as real number.
		 * @return {number}
		 * @param {string} key - The preference key.
		 */
		public getRealPreference(key: string): number;
		

		/**
		 * Set the value of the application preference key as real number.
		 * @return {void}
		 * @param {string} key - The preference key.
		 * @param {number} value - The real value of the preference key.
		 */
		public setRealPreference(key: string, value: number): void;
		

		/**
		 * Retrieve the value of the application preference key as string type.
		 * @return {string}
		 * @param {string} key - The preference key.
		 */
		public getStringPreference(key: string): string;
		

		/**
		 * Set the value of the application preference key as string type.
		 * @return {void}
		 * @param {string} key - The preference key.
		 * @param {string} value - The string value of the preference key.
		 */
		public setStringPreference(key: string, value: string): void;
		

		/**
		 * Delete the application preference key.
		 * @return {void}
		 * @param {string} key - The preference key.
		 */
		public removePreference(key: string): void;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Options to use when opening or placing a Photoshop file.
		 */
		public photoshopFileOptions: OpenOptionsPhotoshop;
		

		/**
		 * @readonly
		 * Options to use when opening or placing a PDF file.
		 */
		public PDFFileOptions: OpenOptionsPDF;
		

		/**
		 * @readonly
		 * Options to use when opening or placing a AutoCAD file.
		 */
		public AutoCADFileOptions: OpenOptionsAutoCAD;
	}

	/**
	 * A custom color.
	 */
	class Spot {
		

		/**
		 * Deletes this object.
		 * @return {void}
		 */
		public remove(): void;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Gets the internal color of a spot.
		 * @return {number[]}
		 */
		public getInternalColor(): number[];
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * The custom color's name.
		 */
		public name: string;
		

		/**
		 */
		public color: Color;
		

		/**
		 * Type of the custom color.
		 */
		public colorType: ColorModel;
		

		/**
		 * @readonly
		 * Kind of the spot color (i.e. RGB, CMYK or LAB), it is the name of color kind contained in spot.
		 */
		public spotKind: SpotColorKind;
	}

	/**
	 * Dynamic object used to create data-driven graphics.
	 */
	class Variable {
		

		/**
		 * Deletes this object.
		 * @return {void}
		 */
		public remove(): void;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * The variable's type.
		 */
		public kind: VariableKind;
		

		/**
		 * The name of this variable.
		 */
		public name: string;
		

		/**
		 * @readonly
		 * All the artwork in this document.
		 */
		public pageItems: PageItems;
	}

	/**
	 * A set of variables and their associated dynamic data which will be used for dynamic publishing.
	 */
	class DataSet {
		

		/**
		 * Deletes this object.
		 * @return {void}
		 */
		public remove(): void;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Displays the dynamic data that has been captured in the dataset.
		 * @return {void}
		 */
		public display(): void;
		

		/**
		 * Re-apply the dynamic data of the active dataset to the artboard.
		 * @return {void}
		 */
		public update(): void;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * The name of this dataset.
		 */
		public name: string;
	}

	/**
	 * A color swatch.
	 */
	class Swatch {
		

		/**
		 * Deletes this object.
		 * @return {void}
		 */
		public remove(): void;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * The swatch's name.
		 */
		public name: string;
		

		/**
		 * The color information of the swatch.
		 */
		public color: Color;
	}

	/**
	 * A Swatch group.
	 */
	class SwatchGroup {
		

		/**
		 * Deletes this object.
		 * @return {void}
		 */
		public remove(): void;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Add a swatch to the group.
		 * @return {void}
		 * @param {Swatch} swatch - The swatch to be added to the group.
		 */
		public addSwatch(swatch: Swatch): void;
		

		/**
		 * Get all swatches in the swatch group.
		 * @return {Swatch[]}
		 */
		public getAllSwatches(): Swatch[];
		

		/**
		 * Add a spot swatch to the group.
		 * @return {void}
		 * @param {Spot} spot - The spot swatch to be added to the group.
		 */
		public addSpot(spot: Spot): void;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * Name of the swatch group.
		 */
		public name: string;
	}

	/**
	 * A pattern.
	 */
	class Pattern {
		

		/**
		 * Deletes this object.
		 * @return {void}
		 */
		public remove(): void;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * The pattern's name.
		 */
		public name: string;
	}

	/**
	 * A symbol.
	 */
	class Symbol {
		

		/**
		 * Duplicate this object.
		 * @return {Symbol}
		 * @param {any} relativeObject - 
		 * @param {number[]} insertionLocation - 
		 */
		public duplicate(relativeObject: any, insertionLocation: number[]): Symbol;
		

		/**
		 * Deletes this object.
		 * @return {void}
		 */
		public remove(): void;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * The symbol's name.
		 */
		public name: string;
	}

	/**
	 * A brush.
	 */
	class Brush {
		

		/**
		 * Apply a brush or art style to object(s)
		 * @return {void}
		 * @param {any} artItem - The page item(s) to apply to.
		 */
		public applyTo(artItem: any): void;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * The brush's name.
		 */
		public name: string;
	}

	/**
	 * An art style.
	 */
	class ArtStyle {
		

		/**
		 * Deletes this object.
		 * @return {void}
		 */
		public remove(): void;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Apply a brush or art style to object(s)
		 * @return {void}
		 * @param {any} artItem - The page item(s) to apply to.
		 */
		public applyTo(artItem: any): void;
		

		/**
		 * Merge an art style to object(s) current style(s)
		 * @return {void}
		 * @param {any} artItem - The page item(s) to merge to.
		 */
		public mergeTo(artItem: any): void;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * The art style's name.
		 */
		public name: string;
	}

	/**
	 * An installed font.
	 */
	class TextFont {
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * The font's full name.
		 */
		public name: string;
		

		/**
		 * @readonly
		 * The font's family name.
		 */
		public family: string;
		

		/**
		 * @readonly
		 * The font's style name.
		 */
		public style: string;
	}

	/**
	 * A page item object.
	 */
	class PageItem {
		

		/**
		 * Move the object.
		 * @return {PageItem}
		 * @param {any} relativeObject - 
		 * @param {number[]} insertionLocation - 
		 */
		public move(relativeObject: any, insertionLocation: number[]): PageItem;
		

		/**
		 * Duplicate this object.
		 * @return {PageItem}
		 * @param {any} relativeObject - 
		 * @param {number[]} insertionLocation - 
		 */
		public duplicate(relativeObject: any, insertionLocation: number[]): PageItem;
		

		/**
		 * Deletes this object.
		 * @return {void}
		 */
		public remove(): void;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Reposition art object(s)
		 * @return {void}
		 * @param {number} deltaX - Horizontal transformation., optional default: 0.0  @default [0.0]
		 * @param {number} deltaY - Vertical transformation., optional default: 0.0  @default [0.0]
		 * @param {boolean} transformObjects - Are art object positions and orientations affected?, optional default: true  @default [true]
		 * @param {boolean} transformFillPatterns - Are the fill patterns assigned to paths to be transformed?, optional default: true  @default [true]
		 * @param {boolean} transformFillGradients - Are the fill gradients assigned to paths to be transformed?, optional default: true  @default [true]
		 * @param {boolean} transformStrokePattern - Are the stroke patterns assigned to paths to be transformed?, optional default: true  @default [true]
		 */
		public translate(deltaX?: number, deltaY?: number, transformObjects?: boolean, transformFillPatterns?: boolean, transformFillGradients?: boolean, transformStrokePattern?: boolean): void;
		

		/**
		 * Scale art object(s)
		 * @return {void}
		 * @param {number} scaleX - Horizontal scaling factor expressed as a percentage (100 = 100%)
		 * @param {number} scaleY - Vertical scaling factor expressed as a percentage (100 = 100%)
		 * @param {boolean} changePositions - Are art object positions and orientations effected?, optional default: true  @default [true]
		 * @param {boolean} changeFillPatterns - Are the fill patterns assigned to paths to be transformed?, optional default: true  @default [true]
		 * @param {boolean} changeFillGradients - Are the fill gradients assigned to paths to be transformed?, optional default: true  @default [true]
		 * @param {boolean} changeStrokePattern - Are the stroke patterns assigned to paths to be transformed?, optional default: true  @default [true]
		 * @param {number} changeLineWidths - The amount line widths are to be scaled (expressed as a percentage), optional default: 100.0  @default [100.0]
		 * @param {Transformation} scaleAbout - The point on the art item's bounding box to which the scale is applied., optional default: Transformation.CENTER  @default [Transformation.CENTER]
		 */
		public resize(scaleX: number, scaleY: number, changePositions?: boolean, changeFillPatterns?: boolean, changeFillGradients?: boolean, changeStrokePattern?: boolean, changeLineWidths?: number, scaleAbout?: Transformation): void;
		

		/**
		 * Rotate art object(s)
		 * @return {void}
		 * @param {number} angle - Angle of rotation (in degrees). Rotation is performed counter-clock wise.
		 * @param {boolean} changePositions - Are art object positions and orientations effected?, optional default: true  @default [true]
		 * @param {boolean} changeFillPatterns - Are the fill patterns assigned to paths to be transformed?, optional default: true  @default [true]
		 * @param {boolean} changeFillGradients - Are the fill gradients assigned to paths to be transformed?, optional default: true  @default [true]
		 * @param {boolean} changeStrokePattern - Are the stroke patterns assigned to paths to be transformed?, optional default: true  @default [true]
		 * @param {Transformation} rotateAbout - The point on the art item's bounding box to which the rotation is applied., optional default: Transformation.CENTER  @default [Transformation.CENTER]
		 */
		public rotate(angle: number, changePositions?: boolean, changeFillPatterns?: boolean, changeFillGradients?: boolean, changeStrokePattern?: boolean, rotateAbout?: Transformation): void;
		

		/**
		 * Transform art object(s) using a transformation matrix.
		 * @return {void}
		 * @param {Matrix} transformationMatrix - The transformation matrix to be applied to the objects.
		 * @param {boolean} changePositions - Are art object positions and orientations effected?, optional default: true  @default [true]
		 * @param {boolean} changeFillPatterns - Are the fill patterns assigned to paths to be transformed?, optional default: true  @default [true]
		 * @param {boolean} changeFillGradients - Are the fill gradients assigned to paths to be transformed?, optional default: true  @default [true]
		 * @param {boolean} changeStrokePattern - Are the stroke patterns assigned to paths to be transformed?, optional default: true  @default [true]
		 * @param {number} changeLineWidths - The amount line widths are to be scaled (expressed as a percentage), optional default: 100.0  @default [100.0]
		 * @param {Transformation} transformAbout - The point on the art item's bounding box to which scale and rotation operations apply., optional default: Transformation.CENTER  @default [Transformation.CENTER]
		 */
		public transform(transformationMatrix: Matrix, changePositions?: boolean, changeFillPatterns?: boolean, changeFillGradients?: boolean, changeStrokePattern?: boolean, changeLineWidths?: number, transformAbout?: Transformation): void;
		

		/**
		 * Place art object(s)in perspective grid at spedified perspective plane and coordinate.
		 * @return {void}
		 * @param {number} positionX - Position towards X direction of specified or active perspective grid plane.
		 * @param {number} positionY - Position towards Y direction of specified or active perspective grid plane.
		 * @param {PerspectiveGridPlaneType} perspectiveGridPlane - Type of perspective grid plane.
		 */
		public bringInPerspective(positionX: number, positionY: number, perspectiveGridPlane: PerspectiveGridPlaneType): void;
		

		/**
		 * Arranges the art relative to other art in the group or layer.
		 * @return {void}
		 * @param {ZOrderMethod} zOrderCmd - How to arrange the art.
		 */
		public zOrder(zOrderCmd: ZOrderMethod): void;
		

		/**
		 * Apply effect to selected artItem.
		 * @return {void}
		 * @param {string} liveEffectXML - 
		 */
		public applyEffect(liveEffectXML: string): void;
		

		/**
		 * Sends the script message to the required plugin.
		 * @return {string}
		 * @param {string} pluginName - Plugin to which message needs to be sent.
		 * @param {string} messageSelector - Functionality that is to be executed.
		 * @param {string} inputString - Pass any data encoded in a string.
		 */
		public sendScriptMessage(pluginName: string, messageSelector: string, inputString: string): string;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * The value of the Adobe URL tag assigned to this artwork item.
		 */
		public URL: string;
		

		/**
		 * The note assigned to this artwork item.
		 */
		public note: string;
		

		/**
		 * @readonly
		 * The layer to which this artwork belongs.
		 */
		public layer: Layer;
		

		/**
		 * Is this artwork item locked?
		 */
		public locked: boolean;
		

		/**
		 * Is this artwork item hidden?
		 */
		public hidden: boolean;
		

		/**
		 * Is this artwork item selected?
		 */
		public selected: boolean;
		

		/**
		 * The position of the top left corner of the art item.
		 */
		public position: number[];
		

		/**
		 * The width of the art item.
		 */
		public width: number;
		

		/**
		 * The height of the art item.
		 */
		public height: number;
		

		/**
		 * @readonly
		 * The bounds of the artwork excluding stroke width.
		 */
		public geometricBounds: number[];
		

		/**
		 * @readonly
		 * The visible bounds of the artwork including stroke width.
		 */
		public visibleBounds: number[];
		

		/**
		 * @readonly
		 * The bounds of the artwork including stroke width and controls.
		 */
		public controlBounds: number[];
		

		/**
		 * The item's name.
		 */
		public name: string;
		

		/**
		 * The mode used when compositing an object.
		 */
		public blendingMode: BlendModes;
		

		/**
		 * The object's opacity (between 0.0 and 100.0)
		 */
		public opacity: number;
		

		/**
		 * Is the artwork isolated.
		 */
		public isIsolated: boolean;
		

		/**
		 * Is the artwork used to create a knockout.
		 */
		public artworkKnockout: KnockoutState;
		

		/**
		 * @readonly
		 * The drawing order of the art within it's group or layer.
		 */
		public zOrderPosition: number;
		

		/**
		 * @readonly
		 * The absolute drawing order of the layer.
		 */
		public absoluteZOrderPosition: number;
		

		/**
		 * @readonly
		 * Can the art item be modified.
		 */
		public editable: boolean;
		

		/**
		 * Is the art item sliced (default: false)
		 */
		public sliced: boolean;
		

		/**
		 * The top position of the art item.
		 */
		public top: number;
		

		/**
		 * The left position of the art item.
		 */
		public left: number;
		

		/**
		 * The visibility variable bound to this page item.
		 */
		public visibilityVariable: any;
		

		/**
		 * @readonly
		 * The collection of tags associated with this page item.
		 */
		public tags: Tags;
		

		/**
		 * Is this artwork item aligned to Pixel Grid?
		 */
		public pixelAligned: boolean;
		

		/**
		 * Wrap text frame objects around this object (text frame must be above the object)
		 */
		public wrapped: boolean;
		

		/**
		 * Use this offset when wrapping text around this object.
		 */
		public wrapOffset: number;
		

		/**
		 * Should the text frame object be wrapped inside this object?
		 */
		public wrapInside: boolean;
	}

	/**
	 * Compound path artwork item.
	 */
	class CompoundPathItem extends PageItem {
		

		/**
		 * Move the object.
		 * @return {CompoundPathItem}
		 * @param {any} relativeObject - 
		 * @param {number[]} insertionLocation - 
		 */
		public move(relativeObject: any, insertionLocation: number[]): CompoundPathItem;
		

		/**
		 * Duplicate this object.
		 * @return {CompoundPathItem}
		 * @param {any} relativeObject - 
		 * @param {number[]} insertionLocation - 
		 */
		public duplicate(relativeObject: any, insertionLocation: number[]): CompoundPathItem;
		

		/**
		 * Deletes this object.
		 * @return {void}
		 */
		public remove(): void;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * The path artwork in this compound path.
		 */
		public pathItems: PathItems;
	}

	/**
	 * A tag associated with a piece of artwork.
	 */
	class Tag {
		

		/**
		 * Deletes this object.
		 * @return {void}
		 */
		public remove(): void;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * The tag's name.
		 */
		public name: string;
		

		/**
		 * The data stored in this tag.
		 */
		public value: string;
	}

	/**
	 * An artwork path item.
	 */
	class PathItem extends PageItem {
		

		/**
		 * Move the object.
		 * @return {PathItem}
		 * @param {any} relativeObject - 
		 * @param {number[]} insertionLocation - 
		 */
		public move(relativeObject: any, insertionLocation: number[]): PathItem;
		

		/**
		 * Duplicate this object.
		 * @return {PathItem}
		 * @param {any} relativeObject - 
		 * @param {number[]} insertionLocation - 
		 */
		public duplicate(relativeObject: any, insertionLocation: number[]): PathItem;
		

		/**
		 * Deletes this object.
		 * @return {void}
		 */
		public remove(): void;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Set the path using the provided array of path point (x, y) coordinate pairs.
		 * @return {void}
		 * @param {any[]} pathPoints - Array of (x, y) coordinate pairs for the path points.
		 */
		public setEntirePath(pathPoints: any[]): void;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * Is this path closed?
		 */
		public closed: boolean;
		

		/**
		 * @readonly
		 * The area of this path in square points.
		 */
		public area: number;
		

		/**
		 * @readonly
		 * The length of this path in points.
		 */
		public length: number;
		

		/**
		 * Is this path a guide object?
		 */
		public guides: boolean;
		

		/**
		 * Should the path be filled?
		 */
		public filled: boolean;
		

		/**
		 * Fill color.
		 */
		public fillColor: Color;
		

		/**
		 * Will art beneath a filled object be overprinted?
		 */
		public fillOverprint: boolean;
		

		/**
		 * Should the path be stroked?
		 */
		public stroked: boolean;
		

		/**
		 * Stroke color.
		 */
		public strokeColor: Color;
		

		/**
		 * Will art beneath a stroked object be overprinted?
		 */
		public strokeOverprint: boolean;
		

		/**
		 * Width of stroke.
		 */
		public strokeWidth: number;
		

		/**
		 * Dash lengths (set to {} for a solid line)
		 */
		public strokeDashes: number[];
		

		/**
		 * The default distance into the dash pattern at which the pattern should be started.
		 */
		public strokeDashOffset: number;
		

		/**
		 * Type of line capping.
		 */
		public strokeCap: StrokeCap;
		

		/**
		 * Type of joints.
		 */
		public strokeJoin: StrokeJoin;
		

		/**
		 * Whether a join is mitered (pointed) or beveled (squared-off)
		 */
		public strokeMiterLimit: number;
		

		/**
		 * Should this be used as a clipping path?
		 */
		public clipping: boolean;
		

		/**
		 * Should the even-odd rule be used to determine insideness?
		 */
		public evenodd: boolean;
		

		/**
		 * The resolution of the path.
		 */
		public resolution: number;
		

		/**
		 * @readonly
		 * All the selected points in the path.
		 */
		public selectedPathPoints: any[];
		

		/**
		 * The polarity the path.
		 */
		public polarity: PolarityValues;
		

		/**
		 * @readonly
		 */
		public pathPoints: PathPoints;
	}

	/**
	 * A point on a path.
	 */
	class PathPoint {
		

		/**
		 * Deletes this object.
		 * @return {void}
		 */
		public remove(): void;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * The position (coordinates) of the anchor point.
		 */
		public anchor: number[];
		

		/**
		 * Location of the left direction point (in position)
		 */
		public leftDirection: number[];
		

		/**
		 * Location of the right direction point (out position)
		 */
		public rightDirection: number[];
		

		/**
		 * The type of point: smooth/corner.
		 */
		public pointType: PointType;
		

		/**
		 * The path point selected state.
		 */
		public selected: PathPointSelection;
	}

	/**
	 * Raster artwork item.
	 */
	class RasterItem extends PageItem {
		

		/**
		 * Move the object.
		 * @return {RasterItem}
		 * @param {any} relativeObject - 
		 * @param {number[]} insertionLocation - 
		 */
		public move(relativeObject: any, insertionLocation: number[]): RasterItem;
		

		/**
		 * Duplicate this object.
		 * @return {RasterItem}
		 * @param {any} relativeObject - 
		 * @param {number[]} insertionLocation - 
		 */
		public duplicate(relativeObject: any, insertionLocation: number[]): RasterItem;
		

		/**
		 * Deletes this object.
		 * @return {void}
		 */
		public remove(): void;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Colorize the RasterItem with a CMYK or RGB Color.
		 * @return {void}
		 * @param {Color} rasterColor - The color to use for coloring the TIFF image.
		 */
		public colorize(rasterColor: Color): void;
		

		/**
		 * Trace this raster object using default options. Reorders this raster to the source art.
		 * @return {PluginItem}
		 */
		public trace(): PluginItem;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * The file containing the raster artwork.
		 */
		public file: javascript.File;
		

		/**
		 * The transformation matrix of the raster art object.
		 */
		public matrix: Matrix;
		

		/**
		 * Dimensions of raster art object regardless of transformations.
		 */
		public boundingBox: number[];
		

		/**
		 * @readonly
		 * The color space of the raster image.
		 */
		public imageColorSpace: ImageColorSpace;
		

		/**
		 * Is the raster art embedded within the illustration?
		 */
		public embedded: boolean;
		

		/**
		 * Is the raster art overprinting?
		 */
		public overprint: boolean;
		

		/**
		 * @readonly
		 * Is the raster art a colorized grayscale image?
		 */
		public colorizedGrayscale: boolean;
		

		/**
		 * @readonly
		 * Is the raster art transparent?
		 */
		public transparent: boolean;
		

		/**
		 * @readonly
		 * The number of image channels.
		 */
		public channels: number;
		

		/**
		 * @readonly
		 * The number of bits per channel.
		 */
		public bitsPerChannel: number;
		

		/**
		 * @readonly
		 * List of colorant names.
		 */
		public colorants: string[];
		

		/**
		 * @readonly
		 * Status of the linked image.
		 */
		public status: RasterLinkState;
		

		/**
		 * The content variable bound to this raster art object.
		 */
		public contentVariable: any;
	}

	/**
	 * Placed artwork item.
	 */
	class PlacedItem extends PageItem {
		

		/**
		 * Move the object.
		 * @return {PlacedItem}
		 * @param {any} relativeObject - 
		 * @param {number[]} insertionLocation - 
		 */
		public move(relativeObject: any, insertionLocation: number[]): PlacedItem;
		

		/**
		 * Duplicate this object.
		 * @return {PlacedItem}
		 * @param {any} relativeObject - 
		 * @param {number[]} insertionLocation - 
		 */
		public duplicate(relativeObject: any, insertionLocation: number[]): PlacedItem;
		

		/**
		 * Deletes this object.
		 * @return {void}
		 */
		public remove(): void;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Embed the placed art within the illustration.
		 * @return {void}
		 */
		public embed(): void;
		

		/**
		 * Trace this raster object using default options. Reorders this placed to the source art.
		 * @return {PluginItem}
		 */
		public trace(): PluginItem;
		

		/**
		 * Relink the placed art with supplied art from file.
		 * @return {void}
		 * @param {javascript.File} fileSpec - File spec to relink from.
		 */
		public relink(fileSpec: javascript.File): void;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * The file containing the placed artwork.
		 */
		public file: javascript.File;
		

		/**
		 * The transformation matrix of the placed art object.
		 */
		public matrix: Matrix;
		

		/**
		 * @readonly
		 * Dimensions of placed art object, regardless of transformations.
		 */
		public boundingBox: number[];
		

		/**
		 * The content variable bound to this placed art object.
		 */
		public contentVariable: any;
	}

	/**
	 * Embedded artwork item.
	 */
	class EmbedItem extends PageItem {
		

		/**
		 * Move the object.
		 * @return {EmbedItem}
		 * @param {any} relativeObject - 
		 * @param {number[]} insertionLocation - 
		 */
		public move(relativeObject: any, insertionLocation: number[]): EmbedItem;
		

		/**
		 * Duplicate this object.
		 * @return {EmbedItem}
		 * @param {any} relativeObject - 
		 * @param {number[]} insertionLocation - 
		 */
		public duplicate(relativeObject: any, insertionLocation: number[]): EmbedItem;
		

		/**
		 * Deletes this object.
		 * @return {void}
		 */
		public remove(): void;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * The file containing the placed artwork.
		 */
		public file: javascript.File;
	}

	/**
	 * Graph artwork item.
	 */
	class GraphItem extends PageItem {
		

		/**
		 * Move the object.
		 * @return {GraphItem}
		 * @param {any} relativeObject - 
		 * @param {number[]} insertionLocation - 
		 */
		public move(relativeObject: any, insertionLocation: number[]): GraphItem;
		

		/**
		 * Duplicate this object.
		 * @return {GraphItem}
		 * @param {any} relativeObject - 
		 * @param {number[]} insertionLocation - 
		 */
		public duplicate(relativeObject: any, insertionLocation: number[]): GraphItem;
		

		/**
		 * Deletes this object.
		 * @return {void}
		 */
		public remove(): void;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * The content variable bound to this graph.
		 */
		public contentVariable: any;
	}

	/**
	 * Non-native artwork item.
	 */
	class NonNativeItem extends PageItem {
		

		/**
		 * Move the object.
		 * @return {NonNativeItem}
		 * @param {any} relativeObject - 
		 * @param {number[]} insertionLocation - 
		 */
		public move(relativeObject: any, insertionLocation: number[]): NonNativeItem;
		

		/**
		 * Duplicate this object.
		 * @return {NonNativeItem}
		 * @param {any} relativeObject - 
		 * @param {number[]} insertionLocation - 
		 */
		public duplicate(relativeObject: any, insertionLocation: number[]): NonNativeItem;
		

		/**
		 * Deletes this object.
		 * @return {void}
		 */
		public remove(): void;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
	}

	/**
	 * Mesh artwork item.
	 */
	class MeshItem extends PageItem {
		

		/**
		 * Move the object.
		 * @return {MeshItem}
		 * @param {any} relativeObject - 
		 * @param {number[]} insertionLocation - 
		 */
		public move(relativeObject: any, insertionLocation: number[]): MeshItem;
		

		/**
		 * Duplicate this object.
		 * @return {MeshItem}
		 * @param {any} relativeObject - 
		 * @param {number[]} insertionLocation - 
		 */
		public duplicate(relativeObject: any, insertionLocation: number[]): MeshItem;
		

		/**
		 * Deletes this object.
		 * @return {void}
		 */
		public remove(): void;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
	}

	/**
	 * Plugin artwork item.
	 */
	class PluginItem extends PageItem {
		

		/**
		 * Move the object.
		 * @return {PluginItem}
		 * @param {any} relativeObject - 
		 * @param {number[]} insertionLocation - 
		 */
		public move(relativeObject: any, insertionLocation: number[]): PluginItem;
		

		/**
		 * Duplicate this object.
		 * @return {PluginItem}
		 * @param {any} relativeObject - 
		 * @param {number[]} insertionLocation - 
		 */
		public duplicate(relativeObject: any, insertionLocation: number[]): PluginItem;
		

		/**
		 * Deletes this object.
		 * @return {void}
		 */
		public remove(): void;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Is the plugin group a tracing?
		 */
		public isTracing: boolean;
		

		/**
		 * @readonly
		 * The tracing object associated with this plugin item.
		 */
		public tracing: TracingObject;
	}

	/**
	 * An artwork group item.
	 */
	class GroupItem extends PageItem {
		

		/**
		 * Move the object.
		 * @return {GroupItem}
		 * @param {any} relativeObject - 
		 * @param {number[]} insertionLocation - 
		 */
		public move(relativeObject: any, insertionLocation: number[]): GroupItem;
		

		/**
		 * Duplicate this object.
		 * @return {GroupItem}
		 * @param {any} relativeObject - 
		 * @param {number[]} insertionLocation - 
		 */
		public duplicate(relativeObject: any, insertionLocation: number[]): GroupItem;
		

		/**
		 * Deletes this object.
		 * @return {void}
		 */
		public remove(): void;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * Are the group elements clipped to the clipping path?
		 */
		public clipped: boolean;
		

		/**
		 * @readonly
		 * The group items in this group.
		 */
		public groupItems: GroupItems;
		

		/**
		 * @readonly
		 * All the artwork in this group.
		 */
		public pageItems: PageItems;
		

		/**
		 * @readonly
		 * The compound path artwork in this group.
		 */
		public compoundPathItems: CompoundPathItems;
		

		/**
		 * @readonly
		 * The path artwork in this group.
		 */
		public pathItems: PathItems;
		

		/**
		 * @readonly
		 * The raster art items in this group.
		 */
		public rasterItems: RasterItems;
		

		/**
		 * @readonly
		 * The placed art items in this group.
		 */
		public placedItems: PlacedItems;
		

		/**
		 * @readonly
		 * The mesh art items in this group.
		 */
		public meshItems: MeshItems;
		

		/**
		 * @readonly
		 * The plugin art items in this group.
		 */
		public pluginItems: PluginItems;
		

		/**
		 * @readonly
		 * The graph art items in this group.
		 */
		public graphItems: GraphItems;
		

		/**
		 * @readonly
		 * The non-native art items in this group.
		 */
		public nonNativeItems: NonNativeItems;
		

		/**
		 * @readonly
		 * The text frame items in this group.
		 */
		public textFrames: TextFrameItems;
		

		/**
		 * @readonly
		 * The symbol items in this group.
		 */
		public symbolItems: SymbolItems;
		

		/**
		 * @readonly
		 * The text frame items in this story.
		 */
		public legacyTextItems: LegacyTextItems;
	}

	/**
	 * An instance of a Symbol.
	 */
	class SymbolItem extends PageItem {
		

		/**
		 * Move the object.
		 * @return {SymbolItem}
		 * @param {any} relativeObject - 
		 * @param {number[]} insertionLocation - 
		 */
		public move(relativeObject: any, insertionLocation: number[]): SymbolItem;
		

		/**
		 * Duplicate this object.
		 * @return {SymbolItem}
		 * @param {any} relativeObject - 
		 * @param {number[]} insertionLocation - 
		 */
		public duplicate(relativeObject: any, insertionLocation: number[]): SymbolItem;
		

		/**
		 * Deletes this object.
		 * @return {void}
		 */
		public remove(): void;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Break link to the symbol.
		 * @return {void}
		 */
		public breakLink(): void;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * The symbol that was used to create this symbol item.
		 */
		public symbol: Symbol;
	}

	/**
	 * A text path item.
	 */
	class TextPath {
		

		/**
		 * Set the path using the provided array of anchor points.
		 * @return {void}
		 * @param {any[]} pathPoints - Array of anchor values for the path points.
		 */
		public setEntirePath(pathPoints: any[]): void;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * The position of the top left corner of the text path.
		 */
		public position: number[];
		

		/**
		 * The width of the text path.
		 */
		public width: number;
		

		/**
		 * The height of the text path.
		 */
		public height: number;
		

		/**
		 * The mode used when compositing an object.
		 */
		public blendingMode: BlendModes;
		

		/**
		 * The object's opacity (between 0.0 and 100.0)
		 */
		public opacity: number;
		

		/**
		 * @readonly
		 * Can the text path be modified.
		 */
		public editable: boolean;
		

		/**
		 * The top position of the text path.
		 */
		public top: number;
		

		/**
		 * The left position of the text path.
		 */
		public left: number;
		

		/**
		 * Is this path closed?
		 */
		public closed: boolean;
		

		/**
		 * @readonly
		 * The area of this path in square points.
		 */
		public area: number;
		

		/**
		 * Is this path a guide object?
		 */
		public guides: boolean;
		

		/**
		 * Should the path be filled?
		 */
		public filled: boolean;
		

		/**
		 * Fill color.
		 */
		public fillColor: Color;
		

		/**
		 * Will art beneath a filled object be overprinted?
		 */
		public fillOverprint: boolean;
		

		/**
		 * Should the path be stroked?
		 */
		public stroked: boolean;
		

		/**
		 * Stroke color.
		 */
		public strokeColor: Color;
		

		/**
		 * Will art beneath a stroked object be overprinted?
		 */
		public strokeOverprint: boolean;
		

		/**
		 * Width of stroke.
		 */
		public strokeWidth: number;
		

		/**
		 * Dash lengths (set to {} for a solid line)
		 */
		public strokeDashes: number[];
		

		/**
		 * The default distance into the dash pattern at which the pattern should be started.
		 */
		public strokeDashOffset: number;
		

		/**
		 * Type of line capping.
		 */
		public strokeCap: StrokeCap;
		

		/**
		 * Type of joints.
		 */
		public strokeJoin: StrokeJoin;
		

		/**
		 * Whether a join is mitered (pointed) or beveled (squared-off)
		 */
		public strokeMiterLimit: number;
		

		/**
		 * Should this be used as a clipping path?
		 */
		public clipping: boolean;
		

		/**
		 * Should the even-odd rule be used to determine insideness?
		 */
		public evenodd: boolean;
		

		/**
		 * The resolution of the path.
		 */
		public resolution: number;
		

		/**
		 * Note assigned to the path.
		 */
		public note: string;
		

		/**
		 * @readonly
		 * All the selected points in the path.
		 */
		public selectedPathPoints: any[];
		

		/**
		 * The polarity the path.
		 */
		public polarity: PolarityValues;
		

		/**
		 * @readonly
		 */
		public pathPoints: PathPoints;
	}

	/**
	 * A contiguous block of text.
	 */
	class Story {
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * The text range of the story.
		 */
		public textRange: TextRange;
		

		/**
		 * @readonly
		 * The text frame items in this story.
		 */
		public textFrames: TextFrameItems;
		

		/**
		 * @readonly
		 * The selected text (ranges) in the story.
		 */
		public textSelection: TextRange[];
		

		/**
		 * @readonly
		 * All the characters in this text range.
		 */
		public characters: Characters;
		

		/**
		 * @readonly
		 * All the words in this text range.
		 */
		public words: Words;
		

		/**
		 * @readonly
		 * All the lines in this text range.
		 */
		public lines: Lines;
		

		/**
		 * @readonly
		 * All the paragraphs in this text range.
		 */
		public paragraphs: Paragraphs;
		

		/**
		 * @readonly
		 * All the text in this text range.
		 */
		public textRanges: TextRanges;
		

		/**
		 * @readonly
		 * All the insertion points in this text range.
		 */
		public insertionPoints: InsertionPoints;
		

		/**
		 * @readonly
		 * The number of characters in the story.
		 */
		public length: number;
	}

	/**
	 * Text frame item.
	 */
	class TextFrameItem extends PageItem {
		

		/**
		 * Move the object.
		 * @return {TextFrameItem}
		 * @param {any} relativeObject - 
		 * @param {number[]} insertionLocation - 
		 */
		public move(relativeObject: any, insertionLocation: number[]): TextFrameItem;
		

		/**
		 * Duplicate this object.
		 * @return {TextFrameItem}
		 * @param {any} relativeObject - 
		 * @param {number[]} insertionLocation - 
		 */
		public duplicate(relativeObject: any, insertionLocation: number[]): TextFrameItem;
		

		/**
		 * Deletes this object.
		 * @return {void}
		 */
		public remove(): void;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Convert text item to path items.
		 * @return {GroupItem}
		 */
		public createOutline(): GroupItem;
		

		/**
		 * Convert Area Type Text Object To Point Type Object.
		 * @return {TextFrameItem}
		 */
		public convertAreaObjectToPointObject(): TextFrameItem;
		

		/**
		 * Convert Point Type Text Object To Area Type Object.
		 * @return {TextFrameItem}
		 */
		public convertPointObjectToAreaObject(): TextFrameItem;
		

		/**
		 * Generates the thumbnail with the properties of first character in the text frame.
		 * @return {void}
		 * @param {string} textString - The text string which is to be used in the thumbnail generation.
		 * @param {number} fontSize - The size in points of the text string.
		 * @param {Color} textColor - The color of the text string.
		 * @param {javascript.File} destinationPath - The location at which the thumbnail is to be stored.
		 */
		public generateThumbnailWithTextFrameProperties(textString: string, fontSize: number, textColor: Color, destinationPath: javascript.File): void;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * The story of the text frame.
		 */
		public story: Story;
		

		/**
		 * The text contents of this text frame.
		 */
		public contents: string;
		

		/**
		 * @readonly
		 * The text range of the text frame.
		 */
		public textRange: TextRange;
		

		/**
		 * @readonly
		 * The selected text (ranges) in the story.
		 */
		public textSelection: TextRange[];
		

		/**
		 * The row count in the text frame (area text only)
		 */
		public rowCount: number;
		

		/**
		 * The column count in the text frame (area text only)
		 */
		public columnCount: number;
		

		/**
		 * The row gutter in the text frame (area text only)
		 */
		public rowGutter: number;
		

		/**
		 * The column gutter in the text frame (area text only)
		 */
		public columnGutter: number;
		

		/**
		 * Flow text between linked frame horizontally first. (area text only)
		 */
		public flowLinksHorizontally: boolean;
		

		/**
		 * The amount of spacing (path text only)
		 */
		public spacing: number;
		

		/**
		 * Is the optical alignment active?
		 */
		public opticalAlignment: boolean;
		

		/**
		 * @readonly
		 * The type of a text frame item.
		 */
		public kind: TextType;
		

		/**
		 * The content variable bound to this text art item.
		 */
		public contentVariable: any;
		

		/**
		 * The orientation of the text in the frame.
		 */
		public orientation: TextOrientation;
		

		/**
		 * @readonly
		 * The path for the text frame (area and path text)
		 */
		public textPath: TextPath;
		

		/**
		 * The position of the anchor point (start of base line for point text)
		 */
		public anchor: number[];
		

		/**
		 * The start position of text along a path, as a value relative to the path's segments (path text only)
		 */
		public startTValue: number;
		

		/**
		 * The end position of text along a path, as a value relative to the path's segments (path text only)
		 */
		public endTValue: number;
		

		/**
		 * The linked text frame preceding this one.
		 */
		public previousFrame: TextFrameItem;
		

		/**
		 * The linked text frame following this one.
		 */
		public nextFrame: TextFrameItem;
		

		/**
		 * @readonly
		 * The transformation matrix of the text frame object.
		 */
		public matrix: Matrix;
		

		/**
		 * The type of a text anti-aliasing on text frame item.
		 */
		public antialias: TextAntialias;
		

		/**
		 * The first baseline offset type for text frame item (for Area Text only)
		 */
		public firstBaseline: FirstBaselineType;
		

		/**
		 * The first baseline offset minimum value for text frame item (for Area Text only)
		 */
		public firstBaselineMin: number;
		

		/**
		 * @readonly
		 * All the characters in this text range.
		 */
		public characters: Characters;
		

		/**
		 * @readonly
		 * All the words in this text range.
		 */
		public words: Words;
		

		/**
		 * @readonly
		 * All the lines in this text range.
		 */
		public lines: Lines;
		

		/**
		 * @readonly
		 * All the paragraphs in this text range.
		 */
		public paragraphs: Paragraphs;
		

		/**
		 * @readonly
		 * All the text in this text range.
		 */
		public textRanges: TextRanges;
		

		/**
		 * @readonly
		 * All the insertion points in this text range.
		 */
		public insertionPoints: InsertionPoints;
	}

	/**
	 * Unconverted legacy text items from documents in pre-version 11 formats.
	 */
	class LegacyTextItem extends PageItem {
		

		/**
		 * Move the object.
		 * @return {LegacyTextItem}
		 * @param {any} relativeObject - 
		 * @param {number[]} insertionLocation - 
		 */
		public move(relativeObject: any, insertionLocation: number[]): LegacyTextItem;
		

		/**
		 * Deletes this object.
		 * @return {void}
		 */
		public remove(): void;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Create a native text frame from a legacy text item. The original legacy text item is deleted.
		 * @return {GroupItem}
		 */
		public convertToNative(): GroupItem;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * Has the legacy text item been updated to a native text frame item?
		 */
		public converted: boolean;
	}

	/**
	 * A range of characters from a text item.
	 */
	class TextRange {
		

		/**
		 * Move the object.
		 * @return {TextRange}
		 * @param {any} relativeObject - 
		 * @param {number[]} insertionLocation - 
		 */
		public move(relativeObject: any, insertionLocation: number[]): TextRange;
		

		/**
		 * Duplicate this object.
		 * @return {TextRange}
		 * @param {any} relativeObject - 
		 * @param {number[]} insertionLocation - 
		 */
		public duplicate(relativeObject: any, insertionLocation: number[]): TextRange;
		

		/**
		 * Deletes this object.
		 * @return {void}
		 */
		public remove(): void;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Select the text range.
		 * @return {void}
		 * @param {boolean} addToDocument - Whether to add the text range to the document text selection., optional default: false  @default [false]
		 */
		public select(addToDocument?: boolean): void;
		

		/**
		 * Deselect the text range.
		 * @return {void}
		 */
		public deSelect(): void;
		

		/**
		 * Change the capitalization of text.
		 * @return {void}
		 * @param {CaseChangeType} type - The type of case.
		 */
		public changeCaseTo(type: CaseChangeType): void;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * Offset of the first character of the range from the beginning of the story, in characters.
		 */
		public characterOffset: number;
		

		/**
		 * Length of text range.
		 */
		public length: number;
		

		/**
		 * The text string.
		 */
		public contents: string;
		

		/**
		 * Controls the spacing between two characters (in milli-ems)
		 */
		public kerning: number;
		

		/**
		 * @readonly
		 * The story of the text range.
		 */
		public story: Story;
		

		/**
		 * @readonly
		 * The selected text (ranges) in the text range.
		 */
		public textSelection: TextRange[];
		

		/**
		 * @readonly
		 * All the characters in this text range.
		 */
		public characters: Characters;
		

		/**
		 * @readonly
		 * All the words in this text range.
		 */
		public words: Words;
		

		/**
		 * @readonly
		 * All the lines in this text range.
		 */
		public lines: Lines;
		

		/**
		 * @readonly
		 * All the paragraphs in this text range.
		 */
		public paragraphs: Paragraphs;
		

		/**
		 * @readonly
		 * All the text in this text range.
		 */
		public textRanges: TextRanges;
		

		/**
		 * @readonly
		 * All the insertion points in this text range.
		 */
		public insertionPoints: InsertionPoints;
		

		/**
		 * @readonly
		 * List of referenced character styles in the text range.
		 */
		public characterStyles: CharacterStyles;
		

		/**
		 * @readonly
		 * List of referenced paragraph styles in the text range.
		 */
		public paragraphStyles: ParagraphStyles;
		

		/**
		 * @readonly
		 * The character properties for the text range.
		 */
		public characterAttributes: CharacterAttributes;
		

		/**
		 * @readonly
		 * The paragraph properties for the text range.
		 */
		public paragraphAttributes: ParagraphAttributes;
	}

	/**
	 * A location between characters, used to insert new text objects.
	 */
	class InsertionPoint {
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * The story of the text range.
		 */
		public story: Story;
		

		/**
		 * @readonly
		 * All the characters in this text range.
		 */
		public characters: Characters;
		

		/**
		 * @readonly
		 * All the words in this text range.
		 */
		public words: Words;
		

		/**
		 * @readonly
		 * All the lines in this text range.
		 */
		public lines: Lines;
		

		/**
		 * @readonly
		 * All the paragraphs in this text range.
		 */
		public paragraphs: Paragraphs;
		

		/**
		 * @readonly
		 * All the text in this text range.
		 */
		public textRanges: TextRanges;
	}

	/**
	 * A named style that remembers character attributes.
	 */
	class CharacterStyle {
		

		/**
		 * Adds an element.
		 * @return {CharacterStyle}
		 */
		public add(): CharacterStyle;
		

		/**
		 * Deletes this object.
		 * @return {void}
		 */
		public remove(): void;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Apply the character style to text object(s)
		 * @return {void}
		 * @param {any} textItem - The text object(s) to apply the style to.
		 * @param {boolean} clearingOverrides - Whether to clear any text attributes before apply the style., optional default: false  @default [false]
		 */
		public applyTo(textItem: any, clearingOverrides?: boolean): void;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * The character style's name.
		 */
		public name: string;
		

		/**
		 * @readonly
		 * The character properties for the text range.
		 */
		public characterAttributes: CharacterAttributes;
	}

	/**
	 * A named style that remembers paragraph attributes.
	 */
	class ParagraphStyle {
		

		/**
		 * Adds an element.
		 * @return {ParagraphStyle}
		 */
		public add(): ParagraphStyle;
		

		/**
		 * Deletes this object.
		 * @return {void}
		 */
		public remove(): void;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * Apply the paragraph style to text object(s)
		 * @return {void}
		 * @param {any} textItem - The text object(s) to apply the style to.
		 * @param {boolean} clearingOverrides - Whether to clear any text attributes before apply the style., optional default: false  @default [false]
		 */
		public applyTo(textItem: any, clearingOverrides?: boolean): void;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * The paragraph style's name.
		 */
		public name: string;
		

		/**
		 * @readonly
		 * The character properties for the text range.
		 */
		public characterAttributes: CharacterAttributes;
		

		/**
		 * @readonly
		 * The paragraph properties for the text range.
		 */
		public paragraphAttributes: ParagraphAttributes;
	}

	/**
	 * Properties of a character.
	 */
	class CharacterAttributes {
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * The text font.
		 */
		public textFont: TextFont;
		

		/**
		 * Font size in points.
		 */
		public size: number;
		

		/**
		 * Character horizontal scaling factor expressed as a percentage (100 = 100%)
		 */
		public horizontalScale: number;
		

		/**
		 * Character vertical scaling factor expressed as a percentage (100 = 100%)
		 */
		public verticalScale: number;
		

		/**
		 * Whether to use automatic leading.
		 */
		public autoLeading: boolean;
		

		/**
		 * The amount of space between two lines of text (in points)
		 */
		public leading: number;
		

		/**
		 * The tracking or range kerning amount in thousands of an em.
		 */
		public tracking: number;
		

		/**
		 * The amount of shift (in points) of the text baseline.
		 */
		public baselineShift: number;
		

		/**
		 * The character rotation angle (in degrees)
		 */
		public rotation: number;
		

		/**
		 * The automatic kerning method to use.
		 */
		public kerningMethod: AutoKernType;
		

		/**
		 * The case of text.
		 */
		public capitalization: FontCapsOption;
		

		/**
		 * The baseline position of text.
		 */
		public baselinePosition: FontBaselineOption;
		

		/**
		 * The OpenType baseline position.
		 */
		public openTypePosition: FontOpenTypePositionOption;
		

		/**
		 * Whether the ligature should be used.
		 */
		public ligature: boolean;
		

		/**
		 * Whether the discretionary ligature should be used.
		 */
		public discretionaryLigature: boolean;
		

		/**
		 * Whether the contextual ligature should be used.
		 */
		public contextualLigature: boolean;
		

		/**
		 * Whether the OpenType fractions should be used.
		 */
		public fractions: boolean;
		

		/**
		 * Whether the OpenType ordinals should be used.
		 */
		public ordinals: boolean;
		

		/**
		 * Whether the OpenType swash should be used.
		 */
		public swash: boolean;
		

		/**
		 * Whether the OpenType titling alternates should be used.
		 */
		public titling: boolean;
		

		/**
		 * Whether the OpenType connection forms should be used.
		 */
		public connectionForms: boolean;
		

		/**
		 * Whether the OpenType stylistic alternates should be used.
		 */
		public stylisticAlternates: boolean;
		

		/**
		 * Whether the OpenType ornaments should be used.
		 */
		public ornaments: boolean;
		

		/**
		 * Which figure style to use in OpenType font.
		 */
		public figureStyle: FigureStyleType;
		

		/**
		 * Does the Japanese OpenType support proportional font?
		 */
		public proportionalMetrics: boolean;
		

		/**
		 * Does the Japanese OpenType support italics?
		 */
		public italics: boolean;
		

		/**
		 * The Japanese text baseline direction.
		 */
		public baselineDirection: BaselineDirectionType;
		

		/**
		 * The language of text.
		 */
		public language: LanguageType;
		

		/**
		 * The alternate glyphs form.
		 */
		public alternateGlyphs: AlternateGlyphsForm;
		

		/**
		 * The percentage of space reduction around a Japanese character (100 = 100%)
		 */
		public Tsume: number;
		

		/**
		 * The character alignment type.
		 */
		public alignment: StyleRunAlignmentType;
		

		/**
		 * Whether WariChu is enabled.
		 */
		public wariChuEnabled: boolean;
		

		/**
		 * The number of Wari-Chu (multiple text lines fit into a space meant for one) lines.
		 */
		public wariChuLines: number;
		

		/**
		 * The Wari-Chu line gap.
		 */
		public wariChuLineGap: number;
		

		/**
		 * The Wari-Chu scale.
		 */
		public wariChuScale: number;
		

		/**
		 */
		public wariChuCharactersBeforeBreak: number;
		

		/**
		 */
		public wariChuCharactersAfterBreak: number;
		

		/**
		 */
		public wariChuJustification: WariChuJustificationType;
		

		/**
		 * The Tate-Chu-Yoko vertical adjustment in points.
		 */
		public tateChuYokoVertical: number;
		

		/**
		 * The Tate-Chu-Yoko horizontal adjustment in points.
		 */
		public tateChuYokoHorizontal: number;
		

		/**
		 * The em amount of left aki.
		 */
		public akiLeft: number;
		

		/**
		 * The em amount of right aki amount.
		 */
		public akiRight: number;
		

		/**
		 * Whether line breaks are allowed.
		 */
		public noBreak: boolean;
		

		/**
		 * The color of the text fill.
		 */
		public fillColor: Color;
		

		/**
		 * The color of the text stroke.
		 */
		public strokeColor: Color;
		

		/**
		 * Whether to overprint the stroke of the text.
		 */
		public overprintStroke: boolean;
		

		/**
		 * Whether to overprint the fill of the text.
		 */
		public overprintFill: boolean;
		

		/**
		 * Line width of stroke.
		 */
		public strokeWeight: number;
		

		/**
		 * Whether to underline the text.
		 */
		public underline: boolean;
		

		/**
		 * Whether to draw a strike through line over the text.
		 */
		public strikeThrough: boolean;
	}

	/**
	 * Properties of a paragraph.
	 */
	class ParagraphAttributes {
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * Paragraph justification.
		 */
		public justification: Justification;
		

		/**
		 * First line left indent expressed in points.
		 */
		public firstLineIndent: number;
		

		/**
		 * Left indent of margin expressed in points.
		 */
		public leftIndent: number;
		

		/**
		 * Right indent of margin expressed in points.
		 */
		public rightIndent: number;
		

		/**
		 * Spacing before paragraph in points.
		 */
		public spaceBefore: number;
		

		/**
		 * Spacing after paragraph in points.
		 */
		public spaceAfter: number;
		

		/**
		 * Is hyphenation enabled for the paragraph?
		 */
		public hyphenation: boolean;
		

		/**
		 * Minimum hyphenated word size.
		 */
		public minimumHyphenatedWordSize: number;
		

		/**
		 * Minimum number of characters before a hyphen.
		 */
		public minimumBeforeHyphen: number;
		

		/**
		 * Minimum number of characters after a hyphen.
		 */
		public minimumAfterHyphen: number;
		

		/**
		 * Maximum number of consecutive hypenated lines.
		 */
		public maximumConsecutiveHyphens: number;
		

		/**
		 * Size of the hyphenation zone.
		 */
		public hyphenationZone: number;
		

		/**
		 * Is hyphenation enabled for the capitalized words?
		 */
		public hyphenateCapitalizedWords: boolean;
		

		/**
		 * Hyphenation preference scale for better spacing (0) or fewer hyphens (1)
		 */
		public hyphenationPreference: number;
		

		/**
		 * Desired word spacing expressed as a percentage.
		 */
		public desiredWordSpacing: number;
		

		/**
		 * Maximum word spacing expressed as a percentage.
		 */
		public maximumWordSpacing: number;
		

		/**
		 * Minimum word spacing expressed as a percentage.
		 */
		public minimumWordSpacing: number;
		

		/**
		 * Desired letter spacing expressed as a percentage.
		 */
		public desiredLetterSpacing: number;
		

		/**
		 * Maximum letter spacing expressed as a percentage.
		 */
		public maximumLetterSpacing: number;
		

		/**
		 * Minimum letter spacing expressed as a percentage.
		 */
		public minimumLetterSpacing: number;
		

		/**
		 * Desired glyph scaling expressed as a percentage.
		 */
		public desiredGlyphScaling: number;
		

		/**
		 * Maximum glyph scaling expressed as a percentage.
		 */
		public maximumGlyphScaling: number;
		

		/**
		 * Minimum glyph scaling expressed as a percentage.
		 */
		public minimumGlyphScaling: number;
		

		/**
		 * Single word justification.
		 */
		public singleWordJustification: Justification;
		

		/**
		 * Auto leading amount (in percentage)
		 */
		public autoLeadingAmount: number;
		

		/**
		 * Auto leading type.
		 */
		public leadingType: AutoLeadingType;
		

		/**
		 * Tab stop settings.
		 */
		public tabStops: TabStopInfo[];
		

		/**
		 * Is Roman hanging punctuation enabled?
		 */
		public romanHanging: boolean;
		

		/**
		 * Is BunriKinshi enabled?
		 */
		public bunriKinshi: boolean;
		

		/**
		 * The Burasagari type.
		 */
		public burasagariType: BurasagariTypeEnum;
		

		/**
		 * The preferred Kinsoku order.
		 */
		public kinsokuOrder: KinsokuOrderEnum;
		

		/**
		 * Is KurikaeshiMojiShori enabled?
		 */
		public kurikaeshiMojiShori: boolean;
		

		/**
		 * The Kinsoku Shori name.
		 */
		public kinsoku: string;
		

		/**
		 * The Mojikumi name.
		 */
		public mojikumi: string;
		

		/**
		 * Whether to enable every line composer (as opposed to single line composer)?
		 */
		public everyLineComposer: boolean;
	}

	/**
	 * Options which are applied when opening or placing a Photoshop file.
	 */
	class OpenOptionsPhotoshop {
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * Should layers be Preserve when the document is converted (default: true)
		 */
		public preserveLayers: boolean;
		

		/**
		 * Should image maps be preserved when the document is converted (default: true)
		 */
		public preserveImageMaps: boolean;
		

		/**
		 * Should slices be preserved when the document is converted (default: true)
		 */
		public preserveSlices: boolean;
		

		/**
		 * Should hidden layers be preserved when the document is converted (default: false)
		 */
		public preserveHiddenLayers: boolean;
		

		/**
		 * Should use the specified LayerComp.
		 */
		public layerComp: string;
	}

	/**
	 * Options which may be supplied when opening a PDF file.
	 */
	class OpenOptionsPDF {
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * What page should be used when opening a multipage document (default: 1)
		 */
		public pageToOpen: number;
		

		/**
		 * What box should be used when placing a multipage document (default: PDF media box)
		 */
		public pDFCropToBox: PDFBoxType;
	}

	/**
	 * Options which may be supplied when opening a AutoCAD file.
	 */
	class OpenOptionsAutoCAD {
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * How to scale the AutoCAD drawing on import (default: Fit Artboard)
		 */
		public globalScaleOption: AutoCADGlobalScaleOption;
		

		/**
		 * Percentage scaling to apply globally on the AutoCAD drawing (default: 1.0)
		 */
		public globalScalePercent: number;
		

		/**
		 * Ratio by which to scale while mapping the units (default: 1.0)
		 */
		public unitScaleRatio: number;
		

		/**
		 * Units to which to map (default: Millimeters)
		 */
		public unit: AutoCADUnit;
		

		/**
		 * Name of layout in the AutoCAD drawing to import.
		 */
		public selectedLayoutName: string;
		

		/**
		 * To center the created artwork on the artboard (default: true)
		 */
		public centerArtwork: boolean;
		

		/**
		 * To merge the layers of the artwork (default: false)
		 */
		public mergeLayers: boolean;
		

		/**
		 * To scale lineweights by the same amount as rest of the drawing (default: false)
		 */
		public scaleLineweights: boolean;
	}

	/**
	 * Tracing options that guide the tracing process.
	 */
	class TracingOptions {
		

		/**
		 * Load options from preset.
		 * @return {boolean}
		 * @param {string} presetName - The name of the preset.
		 */
		public loadFromPreset(presetName: string): boolean;
		

		/**
		 * Store options to a preset kAiVectorizeSuite. Will overwrite an existing (unlocked) preset if names match.
		 * @return {boolean}
		 * @param {string} presetName - The name of the preset.
		 */
		public storeToPreset(presetName: string): boolean;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * The name of the preset in use. Read-only.
		 */
		public preset: string;
		

		/**
		 * The visualization mode.
		 */
		public viewMode: ViewType;
		

		/**
		 * The tracing mode: color, gray, black and white.
		 */
		public tracingMode: TracingModeType;
		

		/**
		 * Color Type used for tracing, TracingLimitedColor or TracingFullColor .
		 */
		public tracingColorTypeValue: TracingColorType;
		

		/**
		 * The color palette (Library) name used for tracing. Use 'Document Library' or any other imported library name.
		 */
		public palette: string;
		

		/**
		 * The color group name used for tracing. Use 'All' or any color group name available in color Palette (library).
		 */
		public colorGroup: string;
		

		/**
		 * Maximum number of colors allowed for tracing when TracingColorTypeValue is TracingLimitedColor.
		 */
		public tracingColors: number;
		

		/**
		 * ColorFidelity when TracingColorTypeValue is TracingFullColor.
		 */
		public colorFidelity: number;
		

		/**
		 * The threshold value for a black and white mode tracing.
		 */
		public threshold: number;
		

		/**
		 * The gray levels for a grayscale mode tracing..
		 */
		public grayLevels: number;
		

		/**
		 * Path fidelity for tracing.
		 */
		public pathFidelity: number;
		

		/**
		 * Corner fidelity for tracing.
		 */
		public cornerFidelity: number;
		

		/**
		 * Specifies minimum area of pixels to be vectorized.
		 */
		public noiseFidelity: number;
		

		/**
		 * Method for tracing, either abutting or adjoining paths.
		 */
		public tracingMethod: TracingMethodType;
		

		/**
		 * Tracing with fills. Fills, Strokes or both must be on.
		 */
		public fills: boolean;
		

		/**
		 * Tracing with strokes. Fills, Strokes or both must be on.
		 */
		public strokes: boolean;
		

		/**
		 * Maximum stroke weight (stroke only).
		 */
		public maxStrokeWeight: number;
		

		/**
		 * Controls whether to snap curve to lines.
		 */
		public snapCurveToLines: boolean;
		

		/**
		 * Controls whether to ignore white fill color. Works only if TracingMethod is TracingMethodAbutting and mode is Black and white.
		 */
		public ignoreWhite: boolean;
	}

	/**
	 * A tracing object.
	 */
	class TracingObject {
		

		/**
		 * Release the source artwork for the tracing object. Deletes this tracing object.
		 * @return {PageItem}
		 */
		public releaseTracing(): PageItem;
		

		/**
		 * Expand the tracing to paths. Deletes this tracing object.
		 * @return {GroupItem}
		 * @param {boolean} viewed - Expand as viewed with the raster and vector view modes., optional default: false  @default [false]
		 */
		public expandTracing(viewed?: boolean): GroupItem;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * @readonly
		 * The source art used when creating a new tracing object.
		 */
		public sourceArt: PageItem;
		

		/**
		 * @readonly
		 * The options used when tracing the artwork.
		 */
		public tracingOptions: TracingOptions;
		

		/**
		 * @readonly
		 * The number of paths in the tracing result.
		 */
		public pathCount: number;
		

		/**
		 * @readonly
		 * The number of anchors in the tracing result.
		 */
		public anchorCount: number;
		

		/**
		 * @readonly
		 * The number of colors used in the tracing result.
		 */
		public usedColorCount: number;
	}

	/**
	 * An artboard object.
	 */
	class Artboard {
		

		/**
		 * Deletes this object.
		 * @return {void}
		 */
		public remove(): void;
		

		/**
		 * Deletes all elements.
		 * @return {void}
		 */
		public removeAll(): void;
		

		/**
		 * @readonly
		 * The object's container.
		 */
		public parent: any;
		

		/**
		 * @readonly
		 * The class name of the object.
		 */
		public typename: string;
		

		/**
		 * Size and position of artboard.
		 */
		public artboardRect: number[];
		

		/**
		 * Pixel aspect ratio, used in ruler visualization if the units are pixels.
		 */
		public rulerPAR: number;
		

		/**
		 * Show center mark.
		 */
		public showCenter: boolean;
		

		/**
		 * Show cross hairs.
		 */
		public showCrossHairs: boolean;
		

		/**
		 * Show title and action safe areas (for video)
		 */
		public showSafeAreas: boolean;
		

		/**
		 * Ruler origin of artboard.It is relative to left-bottom corner of the Artboard.
		 */
		public rulerOrigin: number[];
		

		/**
		 * The name of the artboard.
		 */
		public name: string;
	}

	/**
	 * Describes a point. This class is also a two-element collection.
	 */
	class Point {
		

		/**
		 * The left coordinate.
		 */
		public x: number;
		

		/**
		 * The top coordinate.
		 */
		public y: number;
		

		/**
		 * The left coordinate.
		 */
		public left: number;
		

		/**
		 * The top coordinate.
		 */
		public top: number;
		

		/**
		 * @readonly
		 * The array length.
		 */
		public length: number;
	}

	/**
	 * Describes a rectangle. This class is also a four-element collection.
	 */
	class Rectangle {
		

		/**
		 * The left coordinate.
		 */
		public x: number;
		

		/**
		 * The top coordinate.
		 */
		public y: number;
		

		/**
		 * The width.
		 */
		public width: number;
		

		/**
		 * The height.
		 */
		public height: number;
		

		/**
		 * The left coordinate.
		 */
		public left: number;
		

		/**
		 * The right coordinate.
		 */
		public right: number;
		

		/**
		 * The top coordinate.
		 */
		public top: number;
		

		/**
		 * The bottom coordinate.
		 */
		public bottom: number;
		

		/**
		 * @readonly
		 * The array length.
		 */
		public length: number;
	}
}

import $ = javascript.$;
import Folder = javascript.Folder;
import ScriptUI = scriptui.ScriptUI;
import LayoutManager = scriptui.LayoutManager;
import ScriptUIPen = scriptui.ScriptUIPen;
import ScriptUIBrush = scriptui.ScriptUIBrush;
import ScriptUIPath = scriptui.ScriptUIPath;
import ScriptUIGraphics = scriptui.ScriptUIGraphics;
import DrawState = scriptui.DrawState;
import ScriptUIFont = scriptui.ScriptUIFont;
import ScriptUIImage = scriptui.ScriptUIImage;
import StaticText = scriptui.StaticText;
import Button = scriptui.Button;
import IconButton = scriptui.IconButton;
import EditText = scriptui.EditText;
import ListBox = scriptui.ListBox;
import DropDownList = scriptui.DropDownList;
import ListItem = scriptui.ListItem;
import Checkbox = scriptui.Checkbox;
import Scrollbar = scriptui.Scrollbar;
import RadioButton = scriptui.RadioButton;
import Slider = scriptui.Slider;
import Progressbar = scriptui.Progressbar;
import TreeView = scriptui.TreeView;
import FlashPlayer = scriptui.FlashPlayer;
import Group = scriptui.Group;
import Panel = scriptui.Panel;
import Point = scriptui.Point;
import Dimension = scriptui.Dimension;
import Bounds = scriptui.Bounds;
import Environment = scriptui.Environment;
import Events = scriptui.Events;
import KeyboardState = scriptui.KeyboardState;
import ScreenMode = omv.ScreenMode;
import ColorType = omv.ColorType;
import DocumentColorSpace = omv.DocumentColorSpace;
import DocumentPresetType = omv.DocumentPresetType;
import DocumentRasterResolution = omv.DocumentRasterResolution;
import DocumentTransparencyGrid = omv.DocumentTransparencyGrid;
import DocumentPreviewMode = omv.DocumentPreviewMode;
import DocumentArtboardLayout = omv.DocumentArtboardLayout;
import ImageColorSpace = omv.ImageColorSpace;
import StrokeCap = omv.StrokeCap;
import StrokeJoin = omv.StrokeJoin;
import PathPointSelection = omv.PathPointSelection;
import PointType = omv.PointType;
import TextType = omv.TextType;
import TextAntialias = omv.TextAntialias;
import GradientType = omv.GradientType;
import TextOrientation = omv.TextOrientation;
import CropOptions = omv.CropOptions;
import RasterLinkState = omv.RasterLinkState;
import TabStopAlignment = omv.TabStopAlignment;
import Justification = omv.Justification;
import Transformation = omv.Transformation;
import LibraryType = omv.LibraryType;
import ExportType = omv.ExportType;
import ColorReductionMethod = omv.ColorReductionMethod;
import ColorDitherMethod = omv.ColorDitherMethod;
import Compatibility = omv.Compatibility;
import PDFXStandard = omv.PDFXStandard;
import PDFCompatibility = omv.PDFCompatibility;
import PhotoshopCompatibility = omv.PhotoshopCompatibility;
import CompressionQuality = omv.CompressionQuality;
import ColorConversion = omv.ColorConversion;
import ColorDestination = omv.ColorDestination;
import ColorProfile = omv.ColorProfile;
import MonochromeCompression = omv.MonochromeCompression;
import PDFTrimMarkWeight = omv.PDFTrimMarkWeight;
import PDFOverprint = omv.PDFOverprint;
import PDFPrintAllowedEnum = omv.PDFPrintAllowedEnum;
import PDFChangesAllowedEnum = omv.PDFChangesAllowedEnum;
import DownsampleMethod = omv.DownsampleMethod;
import EPSPreview = omv.EPSPreview;
import EPSPostScriptLevelEnum = omv.EPSPostScriptLevelEnum;
import PrinterPostScriptLevelEnum = omv.PrinterPostScriptLevelEnum;
import SaveOptions = omv.SaveOptions;
import RulerUnits = omv.RulerUnits;
import BlendModes = omv.BlendModes;
import KnockoutState = omv.KnockoutState;
import ZOrderMethod = omv.ZOrderMethod;
import SVGDTDVersion = omv.SVGDTDVersion;
import SVGFontType = omv.SVGFontType;
import SVGFontSubsetting = omv.SVGFontSubsetting;
import SVGDocumentEncoding = omv.SVGDocumentEncoding;
import SVGCSSPropertyLocation = omv.SVGCSSPropertyLocation;
import SVGIdType = omv.SVGIdType;
import RasterImageLocation = omv.RasterImageLocation;
import OutputFlattening = omv.OutputFlattening;
import ColorModel = omv.ColorModel;
import SpotColorKind = omv.SpotColorKind;
import FlashExportStyle = omv.FlashExportStyle;
import ArtClippingOption = omv.ArtClippingOption;
import FlashExportVersion = omv.FlashExportVersion;
import FlashImageFormat = omv.FlashImageFormat;
import LayerOrderType = omv.LayerOrderType;
import BlendAnimationType = omv.BlendAnimationType;
import FlashJPEGMethod = omv.FlashJPEGMethod;
import FlashPlaybackSecurity = omv.FlashPlaybackSecurity;
import VariableKind = omv.VariableKind;
import AutoCADExportFileFormat = omv.AutoCADExportFileFormat;
import AutoCADCompatibility = omv.AutoCADCompatibility;
import AutoCADUnit = omv.AutoCADUnit;
import AutoCADColors = omv.AutoCADColors;
import AutoCADRasterFormat = omv.AutoCADRasterFormat;
import AutoCADExportOption = omv.AutoCADExportOption;
import AutoCADGlobalScaleOption = omv.AutoCADGlobalScaleOption;
import TIFFByteOrder = omv.TIFFByteOrder;
import UserInteractionLevel = omv.UserInteractionLevel;
import PolarityValues = omv.PolarityValues;
import JavaScriptExecutionMode = omv.JavaScriptExecutionMode;
import PrintArtworkDesignation = omv.PrintArtworkDesignation;
import PrintingBounds = omv.PrintingBounds;
import PrintColorSeparationMode = omv.PrintColorSeparationMode;
import PrintOrientation = omv.PrintOrientation;
import PrintPosition = omv.PrintPosition;
import PrintTiling = omv.PrintTiling;
import PageMarksTypes = omv.PageMarksTypes;
import PrintFontDownloadMode = omv.PrintFontDownloadMode;
import FontSubstitutionPolicy = omv.FontSubstitutionPolicy;
import PostScriptImageCompressionType = omv.PostScriptImageCompressionType;
import PrintColorProfile = omv.PrintColorProfile;
import PrintColorIntent = omv.PrintColorIntent;
import PrinterTypeEnum = omv.PrinterTypeEnum;
import PrinterColorMode = omv.PrinterColorMode;
import InkPrintStatus = omv.InkPrintStatus;
import InkType = omv.InkType;
import TrappingType = omv.TrappingType;
import AutoKernType = omv.AutoKernType;
import AutoLeadingType = omv.AutoLeadingType;
import CaseChangeType = omv.CaseChangeType;
import FontCapsOption = omv.FontCapsOption;
import FontBaselineOption = omv.FontBaselineOption;
import FontOpenTypePositionOption = omv.FontOpenTypePositionOption;
import FigureStyleType = omv.FigureStyleType;
import BaselineDirectionType = omv.BaselineDirectionType;
import LanguageType = omv.LanguageType;
import AlternateGlyphsForm = omv.AlternateGlyphsForm;
import StyleRunAlignmentType = omv.StyleRunAlignmentType;
import WariChuJustificationType = omv.WariChuJustificationType;
import BurasagariTypeEnum = omv.BurasagariTypeEnum;
import KinsokuOrderEnum = omv.KinsokuOrderEnum;
import PDFBoxType = omv.PDFBoxType;
import TracingMethodType = omv.TracingMethodType;
import TracingModeType = omv.TracingModeType;
import TracingColorType = omv.TracingColorType;
import ViewType = omv.ViewType;
import RasterizationColorModel = omv.RasterizationColorModel;
import AntiAliasingMethod = omv.AntiAliasingMethod;
import ColorConvertPurpose = omv.ColorConvertPurpose;
import FXGVersion = omv.FXGVersion;
import FiltersPreservePolicy = omv.FiltersPreservePolicy;
import TextPreservePolicy = omv.TextPreservePolicy;
import GradientsPreservePolicy = omv.GradientsPreservePolicy;
import BlendsExpandPolicy = omv.BlendsExpandPolicy;
import CoordinateSystem = omv.CoordinateSystem;
import SymbolRegistrationPoint = omv.SymbolRegistrationPoint;
import PerspectiveGridPlaneType = omv.PerspectiveGridPlaneType;
import FirstBaselineType = omv.FirstBaselineType;
import DocumentLayoutStyle = omv.DocumentLayoutStyle;
import Artboards = omv.Artboards;
import Documents = omv.Documents;
import Layers = omv.Layers;
import GroupItems = omv.GroupItems;
import PageItems = omv.PageItems;
import PathItems = omv.PathItems;
import PathPoints = omv.PathPoints;
import CompoundPathItems = omv.CompoundPathItems;
import Stories = omv.Stories;
import TextFrameItems = omv.TextFrameItems;
import LegacyTextItems = omv.LegacyTextItems;
import TextRanges = omv.TextRanges;
import InsertionPoints = omv.InsertionPoints;
import Characters = omv.Characters;
import Words = omv.Words;
import Lines = omv.Lines;
import Paragraphs = omv.Paragraphs;
import CharacterStyles = omv.CharacterStyles;
import ParagraphStyles = omv.ParagraphStyles;
import Spots = omv.Spots;
import Swatches = omv.Swatches;
import SwatchGroups = omv.SwatchGroups;
import Gradients = omv.Gradients;
import GradientStops = omv.GradientStops;
import Patterns = omv.Patterns;
import Symbols = omv.Symbols;
import SymbolItems = omv.SymbolItems;
import Brushes = omv.Brushes;
import ArtStyles = omv.ArtStyles;
import TextFonts = omv.TextFonts;
import Tags = omv.Tags;
import RasterItems = omv.RasterItems;
import PlacedItems = omv.PlacedItems;
import EmbeddedItems = omv.EmbeddedItems;
import MeshItems = omv.MeshItems;
import GraphItems = omv.GraphItems;
import PluginItems = omv.PluginItems;
import NonNativeItems = omv.NonNativeItems;
import Views = omv.Views;
import Variables = omv.Variables;
import DataSets = omv.DataSets;
import OpenOptions = omv.OpenOptions;
import FXGSaveOptions = omv.FXGSaveOptions;
import EPSSaveOptions = omv.EPSSaveOptions;
import PDFSaveOptions = omv.PDFSaveOptions;
import IllustratorSaveOptions = omv.IllustratorSaveOptions;
import Matrix = omv.Matrix;
import ExportOptionsJPEG = omv.ExportOptionsJPEG;
import ExportOptionsPNG8 = omv.ExportOptionsPNG8;
import ExportOptionsPNG24 = omv.ExportOptionsPNG24;
import ExportOptionsGIF = omv.ExportOptionsGIF;
import ExportOptionsPhotoshop = omv.ExportOptionsPhotoshop;
import ExportOptionsSVG = omv.ExportOptionsSVG;
import ExportOptionsWebOptimizedSVG = omv.ExportOptionsWebOptimizedSVG;
import ExportOptionsFlash = omv.ExportOptionsFlash;
import ExportOptionsAutoCAD = omv.ExportOptionsAutoCAD;
import ExportOptionsTIFF = omv.ExportOptionsTIFF;
import Color = omv.Color;
import LabColor = omv.LabColor;
import Dimensions = omv.Dimensions;
import RGBColor = omv.RGBColor;
import CMYKColor = omv.CMYKColor;
import GrayColor = omv.GrayColor;
import NoColor = omv.NoColor;
import SpotColor = omv.SpotColor;
import PatternColor = omv.PatternColor;
import GradientColor = omv.GradientColor;
import TabStopInfo = omv.TabStopInfo;
import Printer = omv.Printer;
import PrinterInfo = omv.PrinterInfo;
import PPDFile = omv.PPDFile;
import PPDFileInfo = omv.PPDFileInfo;
import Paper = omv.Paper;
import PaperInfo = omv.PaperInfo;
import ScreenInfo = omv.ScreenInfo;
import ScreenSpotFunction = omv.ScreenSpotFunction;
import Ink = omv.Ink;
import InkInfo = omv.InkInfo;
import DocumentPreset = omv.DocumentPreset;
import PrintOptions = omv.PrintOptions;
import PrintPaperOptions = omv.PrintPaperOptions;
import PrintJobOptions = omv.PrintJobOptions;
import PrintColorSeparationOptions = omv.PrintColorSeparationOptions;
import PrintCoordinateOptions = omv.PrintCoordinateOptions;
import PrintPageMarksOptions = omv.PrintPageMarksOptions;
import PrintFontOptions = omv.PrintFontOptions;
import PrintPostScriptOptions = omv.PrintPostScriptOptions;
import PrintColorManagementOptions = omv.PrintColorManagementOptions;
import PrintFlattenerOptions = omv.PrintFlattenerOptions;
import ImageCaptureOptions = omv.ImageCaptureOptions;
import RasterEffectOptions = omv.RasterEffectOptions;
import RasterizeOptions = omv.RasterizeOptions;
import Application = omv.Application;
import Layer = omv.Layer;
import View = omv.View;
import Gradient = omv.Gradient;
import GradientStop = omv.GradientStop;
import Preferences = omv.Preferences;
import Spot = omv.Spot;
import Variable = omv.Variable;
import DataSet = omv.DataSet;
import Swatch = omv.Swatch;
import SwatchGroup = omv.SwatchGroup;
import Pattern = omv.Pattern;
import Brush = omv.Brush;
import ArtStyle = omv.ArtStyle;
import TextFont = omv.TextFont;
import PageItem = omv.PageItem;
import CompoundPathItem = omv.CompoundPathItem;
import Tag = omv.Tag;
import PathItem = omv.PathItem;
import PathPoint = omv.PathPoint;
import RasterItem = omv.RasterItem;
import PlacedItem = omv.PlacedItem;
import EmbedItem = omv.EmbedItem;
import GraphItem = omv.GraphItem;
import NonNativeItem = omv.NonNativeItem;
import MeshItem = omv.MeshItem;
import PluginItem = omv.PluginItem;
import GroupItem = omv.GroupItem;
import SymbolItem = omv.SymbolItem;
import TextPath = omv.TextPath;
import Story = omv.Story;
import TextFrameItem = omv.TextFrameItem;
import LegacyTextItem = omv.LegacyTextItem;
import InsertionPoint = omv.InsertionPoint;
import CharacterStyle = omv.CharacterStyle;
import ParagraphStyle = omv.ParagraphStyle;
import CharacterAttributes = omv.CharacterAttributes;
import ParagraphAttributes = omv.ParagraphAttributes;
import OpenOptionsPhotoshop = omv.OpenOptionsPhotoshop;
import OpenOptionsPDF = omv.OpenOptionsPDF;
import OpenOptionsAutoCAD = omv.OpenOptionsAutoCAD;
import TracingOptions = omv.TracingOptions;
import TracingObject = omv.TracingObject;
import Artboard = omv.Artboard;
import Rectangle = omv.Rectangle;
declare const app: omv.Application;
declare const args: any;
declare let __return: any;
	
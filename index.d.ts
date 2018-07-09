/**
 * Represents a list of errors in a string array.
 */
declare class IDetailsErrorObject {
    /**
     * List of errors.
     */
    _: string[];
}

/**
 * Represents available options for objects.
 */
declare interface IObjectOptions {
    /**
     * Flag as true to require all input values to be defined by the format in order to be valid. Defalt: true
     */
    strict?: boolean;
    /**
     * Flag as true on a property to make that property not required (if the input has the property the format for that property is applied)
     */
    optional?: boolean;
}

/**
 * Represents available options for strings.
 */
declare interface IStringOptions {
    /**
     * Set a string to whitelist the input string.
     */
    allowed?: string;
    /**
     * Set a string to blacklist the input string.
     */
    banned?: string;
    /**
     * Flag as true to required the string be a valid email.
     */
    email?: string;
    /**
     * Flag as true to required the string be lowercase.
     */
    lowercase?: boolean;
    /**
     * Set the minimum required length of the string. Default: 1
     */
    minLength?: number;
    /**
     * Set the maximum required length of the string.
     */
    maxLength?: number;
    /**
     * Set the exact required length of the string.
     */
    length?: number;
    /**
     * Set a regular expression to test the input string.
     */
    regex?: RegExp;
    /**
     * Flag as true to required the string be uppercase.
     */
    uppercase?: boolean;
    /**
     * Set a string to blacklist the input string.
     */
    whitespace?: boolean;
}

/**
 * Represents available options for numbers.
 */
declare interface INumberOptions {
    /**
     * Flag as true to allow NaN. Default: false
     */
    allowNaN?: boolean;
    /**
     * Flag as false to allow Infinity. Default: true
     */
    finite?: boolean;
    /**
     * Set the minimum value of the input
     */
    min?: number;
    /**
     * Set the maximum value of the input
     */
    max?: number;
    /**
     * Flag as true to require even numbers.
     */
    even?: number;
    /**
     * Flag as true to require odd numbers.
     */
    odd?: number;
}

/**
 * Represents available options for booleans.
 */
declare interface IBooleanOptions {
    /**
     * Checks if boolean is equal to this value.
     */
    equalTo?: boolean;
}


declare interface IParameterizedOptionsBase {
    _: ParameterTypes;
}

declare interface IParamaterizedStringOptions extends INumberOptions, IParameterizedOptionsBase {}

declare interface IParamaterizedNumberOptions extends INumberOptions, IParameterizedOptionsBase {}

declare interface IParamaterizedBooleanOptions extends IBooleanOptions, IParameterizedOptionsBase {}

declare interface IParameterizedObjectOptions extends IObjectOptions, IParameterizedOptionsBase {}

declare type ParameterTypes = IObjectOptions | INumberOptions | IStringOptions | IBooleanOptions;
declare type ParameterizedOptions = IParamaterizedBooleanOptions | IParamaterizedNumberOptions | IParameterizedObjectOptions | IParamaterizedStringOptions;
declare type VariableType = StringConstructor | BooleanConstructor | NumberConstructor | ObjectConstructor | undefined | null;

/**
 * Contains core features of sandhands.
 */
declare interface Sandhands {
    /**
     * Returns a array/object representing where and what the errors are dependant upon the format.
     * @param value Value to get details for.
     * @param type Type to get details for.
     * @param options Options to get details with.
     */
    details: (value: any,
        type: VariableType | ParameterizedOptions, options?: ParameterTypes) => string[] | IDetailsErrorObject;
    /**
     * Throws the first error found in the input.
     * @param value Value to sanitize.
     * @param type Type to check for.
     * @param options Options to sanitize with.
     */
    sanitize: (value: any,
        type: VariableType | ParameterizedOptions, options?: ParameterTypes) => void;
    /**
     * Returns a boolean repesenting whether or not the input matched the format.
     * @param value Value to valid.
     * @param type Type to check for.
     * @param options Options to valid with.
     */
    valid: (value: any,
        type: VariableType | ParameterizedOptions,
        options?: ParameterTypes) => boolean;
}

declare var sandhands: Sandhands;
export = sandhands;

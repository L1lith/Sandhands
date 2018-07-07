declare namespace Sandhands {

    /**
     * Represents a list of errors in a string array.
     */
    class IDetailsErrorObject {
        /**
         * List of errors.
         */
        _: string[];
    }

    /**
     * Represents available options for objects.
     */
    interface IObjectOptions {
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
    interface IStringOptions {
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
    interface INumberOptions {
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
    interface IBooleanOptions {
        /**
         * Checks if boolean is equal to this value.
         */
        equalTo?: boolean;
    }


    interface IParameterizedOptionsBase {
        _: ParameterTypes;
    }

    interface IParamaterizedStringOptions extends INumberOptions, IParameterizedOptionsBase { }

    interface IParamaterizedNumberOptions extends INumberOptions, IParameterizedOptionsBase { }

    interface IParamaterizedBooleanOptions extends IBooleanOptions, IParameterizedOptionsBase { }

    interface IParameterizedObjectOptions extends IObjectOptions, IParameterizedOptionsBase { }
    
    type ParameterTypes = IObjectOptions | INumberOptions | IStringOptions | IBooleanOptions;
    type ParameterizedOptions = IParamaterizedBooleanOptions | IParamaterizedNumberOptions | IParameterizedObjectOptions | IParamaterizedStringOptions;
    type VariableType = String | Boolean | Number | Object | undefined | null;

}

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
        type: Sandhands.VariableType | Sandhands.ParameterizedOptions, options?: Sandhands.ParameterTypes) => string[] | Sandhands.IDetailsErrorObject;
    /**
     * Throws the first error found in the input.
     * @param value Value to sanitize.
     * @param type Type to check for.
     * @param options Options to sanitize with.
     */
    sanitize: (value: any,
        type: Sandhands.VariableType | Sandhands.ParameterizedOptions, options?: Sandhands.ParameterTypes) => void;
    /**
     * Returns a boolean repesenting whether or not the input matched the format.
     * @param value Value to valid.
     * @param type Type to check for.
     * @param options Options to valid with.
     */
    valid: (value: any,
        type: Sandhands.VariableType | Sandhands.ParameterizedOptions,
        options?: Sandhands.ParameterTypes) => boolean;
}

declare var sandhands: Sandhands;
export = sandhands;

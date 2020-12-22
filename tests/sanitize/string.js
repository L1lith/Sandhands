const testValid = require('../functions/testValid')

const expected = [
    {
        input: 'words',
        format: String,
        valid: true,
        description: 'by default for a string longer than 1'
    },
    {
        input: '',
        format: String,
        valid: false,
        description: 'by default for empty strings'
    },
    {
        input: [-1, 0, 1, 12],
        format: String,
        valid: false,
        description: 'numbers as strings'
    },
    {
        input: true,
        format: String,
        valid: false,
        description: 'booleans as strings'
    },
    {
        input: undefined,
        format: String,
        valid: false,
        description: 'undefined as a string'
    },
    {
        input: null,
        format: String,
        valid: false,
        description: 'null as a string'
    },
    {
        input: {},
        format: String,
        valid: false,
        description: 'objects as strings'
    },
    {
        input: [],
        format: String,
        valid: false,
        description: 'arrays as strings',
        options: {
            spreadArray: false
        }
    },
    {
        input: 'words',
        format: {
            _: String,
            lowercase: true
        },
        valid: true,
        description: 'lowercase strings with the lowercase flag'
    },
    {
        input: 'SANDWICH',
        format: {
            _: String,
            lowercase: true
        },
        valid: false,
        description: 'uppercase strings for the uppercase flag'
    },
    {
        input: 'SALMON',
        format: {
            _: String,
            uppercase: true
        },
        valid: true,
        description: 'uppercase strings with the uppercase flag'
    },
    {
        input: 'tuna',
        format: {
            _: String,
            uppercase: true
        },
        valid: false,
        description: 'lowercase strings for the uppercase flag'
    },
    {
        input: 'tricky',
        format: {
            _: String,
            whitespace: false
        },
        valid: true,
        description: 'strings without whitespace for whitespace false'
    },
    {
        input: 'tr cky',
        format: {
            _: String,
            whitespace: false
        },
        valid: false,
        description: 'strings with whitespace for whitespace false'
    },
    {
        input: 'fish face',
        format: {
            _: String,
            whitespace: true
        },
        valid: true,
        description: 'strings with whitespace for whitespace true'
    },
    {
        input: 'goku@gmail.com',
        format: {
            _: String,
            email: true
        },
        valid: true,
        description: 'email strings flagged as emails'
    },
    {
        input: 'basdfwawfe',
        format: {
            _: String,
            email: true
        },
        valid: false,
        description: 'random strings as emails'
    },
    {
        input: '',
        format: {
            _: String,
            email: true,
            minLength: 0
        },
        valid: false,
        description: 'empty strings as emails'
    },
    {
        input: 'banana boat',
        format: {
            _: String,
            allowed: 'abnot '
        },
        valid: true,
        description: 'a string contained in the allow flag'
    },
    {
        input: 'horse radish',
        format: {
            _: String,
            allowed: 'abnot '
        },
        valid: false,
        description: 'a string not contained in the allow flag'
    },
    {
        input: 'biggie smalls',
        format: {
            _: String,
            banned: 'xyz'
        },
        valid: true,
        description: 'string that don"t contain characters flagged as banned'
    },
    {
        input: 'Extremely Snazzy Xylophone',
        format: {
            _: String,
            banned: 'xyz'
        },
        valid: false,
        description: 'rejects strings that contain characters flagged as banned'
    },
    {
        input: 'Once upon a time...',
        format: {
            _: String,
            regex: /upon/
        },
        valid: true,
        description: 'a basic regex search with a matching string'
    },
    {
        input: '...In a land far far away',
        format: {
            _: String,
            regex: /upon/
        },
        valid: false,
        description: 'a basic regex search with a non-matching string'
    },
    {
        input: 'v a p o r w a v e',
        format: {
            _: String,
            minLength: 5
        },
        valid: true,
        description: 'a long enough string string for the minLength flag'
    },
    {
        input: 'meep',
        format: {
            _: String,
            minLength: 5
        },
        valid: false,
        description: 'a too short string string for the minLength flag'
    },
    {
        input: 'Soup',
        format: {
            _: String,
            maxLength: 10
        },
        valid: true,
        description: 'a short enough string for the maxLength flag'
    },
    {
        input: 'Soup & Salad',
        format: {
            _: String,
            maxLength: 10
        },
        valid: false,
        description: 'a too long string for the maxLength flag'
    },
    {
        input: 'Rainbow',
        format: {
            _: String,
            length: 7
        },
        valid: true,
        description: 'a correct length string for the length flag'
    },
    {
        input: 'Rainbows',
        format: {
            _: String,
            length: 7
        },
        valid: false,
        description: 'a incorrect length string for the length flag'
    },
    {
        input: 'hello there',
        format: {
            _: String,
            equalTo: "it's a small world"
        },
        valid: false,
        description: 'a non-equal string to the equalTo flag'
    },
    {
        input: "it's a small world",
        format: {
            _: String,
            equalTo: "it's a small world"
        },
        valid: true,
        description: 'an equal number to the equalTo flag'
    }
]

describe('String Matching', () => {
    testValid(expected)
})

_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{WGu9:function(e,s,l){"use strict";l.r(s);var i=l("1OyB"),a=l("vuIU"),r=l("Ji7U"),n=l("md7G"),m=l("foSv"),u=l("q1tI"),t=l.n(u),o=l("xj1T"),c=l.n(o),N=(l("8UQz"),"/Users/lilith/projects/sandhands/docs-source/pages/format.js"),_=t.a.createElement;function f(e){var s=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var l,i=Object(m.a)(e);if(s){var a=Object(m.a)(this).constructor;l=Reflect.construct(i,arguments,a)}else l=i.apply(this,arguments);return Object(n.a)(this,l)}}var b=function(e){Object(r.a)(l,e);var s=f(l);function l(){return Object(i.a)(this,l),s.apply(this,arguments)}return Object(a.a)(l,[{key:"render",value:function(){return _("div",{className:"format",__self:this,__source:{fileName:N,lineNumber:9,columnNumber:7}},_("h1",{className:"pagetitle",__self:this,__source:{fileName:N,lineNumber:10,columnNumber:9}},"Format"),_("p",{className:"description",__self:this,__source:{fileName:N,lineNumber:11,columnNumber:9}},"This section describes the format (the sanitation schema) we give to Sandhands to define how it should sanitize the input."),_("div",{id:"primitives",className:"primitives section",__self:this,__source:{fileName:N,lineNumber:15,columnNumber:9}},_("h2",{className:"name",__self:this,__source:{fileName:N,lineNumber:16,columnNumber:11}},"Primitives Basics"),_("p",{className:"description",__self:this,__source:{fileName:N,lineNumber:17,columnNumber:11}},"Null and undefined can be passed in as is, and it will expect strict equality."),_(c.a,{className:"javascript",__self:this,__source:{fileName:N,lineNumber:20,columnNumber:11}},"const {valid} = require('sandhands')\n\nvalid('', null) // false\nvalid(undefined, null) // false\nvalid(null, null) // true\n\nvalid('', undefined) // false\nvalid(null, undefined) // false\nvalid(undefined, undefined) // true"),_("p",{className:"description",__self:this,__source:{fileName:N,lineNumber:29,columnNumber:11}},"Numbers, Strings, and Booleans can be passed in by using their class names."),_(c.a,{className:"javascript",__self:this,__source:{fileName:N,lineNumber:32,columnNumber:11}},"const {valid} = require('sandhands')\n\nvalid(12, String) // false\nvalid(String, String) // false\nvalid('hello world', String) // true\n\nvalid('ganondorf', Number) // false\nvalid(Number, Number) // false\nvalid(42, Number) // true")),_("div",{id:"options",className:"options section",__self:this,__source:{fileName:N,lineNumber:42,columnNumber:9}},_("h2",{className:"name",__self:this,__source:{fileName:N,lineNumber:43,columnNumber:11}},"Options"),_("p",{className:"description",__self:this,__source:{fileName:N,lineNumber:44,columnNumber:11}},"All data types have a set of default options which accompany them. We can override the defaults with our own arguments two different ways",_("br",{__self:this,__source:{fileName:N,lineNumber:47,columnNumber:13}}),"The first way is we can pass the options as the third argument after the format to the method."),_(c.a,{className:"javascript",__self:this,__source:{fileName:N,lineNumber:51,columnNumber:11}},"const {valid} = require('sandhands')\n\nconsole.log(valid('hello', String, {minLength: 8})) // false\nconsole.log(valid('hello world', String, {minLength: 8})) // true"),_("p",{className:"description",__self:this,__source:{fileName:N,lineNumber:55,columnNumber:11}},"The second way to pass options is inside the format itself. We use a special object syntax to designate this:"),_(c.a,{className:"javascript",__self:this,__source:{fileName:N,lineNumber:59,columnNumber:11}},'const {valid} = require(\'sandhands\')\n\nconsole.log(valid("Lily", {_: String, lowercase: true})) // false\nconsole.log(valid("lily", {_: String, lowercase: true})) // true')),_("div",{id:"strings",className:"strings section",__self:this,__source:{fileName:N,lineNumber:64,columnNumber:9}},_("h2",{className:"name",__self:this,__source:{fileName:N,lineNumber:65,columnNumber:11}},"Strings"),_("p",{className:"description",__self:this,__source:{fileName:N,lineNumber:66,columnNumber:11}},"The following options are available for strings:"),_("div",{className:"option",__self:this,__source:{fileName:N,lineNumber:67,columnNumber:11}},_("h3",{className:"name",__self:this,__source:{fileName:N,lineNumber:68,columnNumber:13}},"email"),_("p",{className:"description",__self:this,__source:{fileName:N,lineNumber:69,columnNumber:13}},"Flag as true to required the string be a valid email.")),_("div",{className:"option",__self:this,__source:{fileName:N,lineNumber:71,columnNumber:11}},_("h3",{className:"name",__self:this,__source:{fileName:N,lineNumber:72,columnNumber:13}},"lowercase"),_("p",{className:"description",__self:this,__source:{fileName:N,lineNumber:73,columnNumber:13}},"Flag as true to required the string be lowercase.")),_("div",{className:"option",__self:this,__source:{fileName:N,lineNumber:75,columnNumber:11}},_("h3",{className:"name",__self:this,__source:{fileName:N,lineNumber:76,columnNumber:13}},"uppercase"),_("p",{className:"description",__self:this,__source:{fileName:N,lineNumber:77,columnNumber:13}},"Flag as true to required the string be uppercase.")),_("div",{className:"option",__self:this,__source:{fileName:N,lineNumber:79,columnNumber:11}},_("h3",{className:"name",__self:this,__source:{fileName:N,lineNumber:80,columnNumber:13}},"minLength"),_("p",{className:"description",__self:this,__source:{fileName:N,lineNumber:81,columnNumber:13}},"Set the minimum required length of the string. Default: 1")),_("div",{className:"option",__self:this,__source:{fileName:N,lineNumber:83,columnNumber:11}},_("h3",{className:"name",__self:this,__source:{fileName:N,lineNumber:84,columnNumber:13}},"maxLength"),_("p",{className:"description",__self:this,__source:{fileName:N,lineNumber:85,columnNumber:13}},"Set the maximum required length of the string.")),_("div",{className:"option",__self:this,__source:{fileName:N,lineNumber:87,columnNumber:11}},_("h3",{className:"name",__self:this,__source:{fileName:N,lineNumber:88,columnNumber:13}},"length"),_("p",{className:"description",__self:this,__source:{fileName:N,lineNumber:89,columnNumber:13}},"Set the exact required length of the string.")),_("div",{className:"option",__self:this,__source:{fileName:N,lineNumber:91,columnNumber:11}},_("h3",{className:"name",__self:this,__source:{fileName:N,lineNumber:92,columnNumber:13}},"allowed"),_("p",{className:"description",__self:this,__source:{fileName:N,lineNumber:93,columnNumber:13}},"Set a string to whitelist the input string.")),_("div",{className:"option",__self:this,__source:{fileName:N,lineNumber:95,columnNumber:11}},_("h3",{className:"name",__self:this,__source:{fileName:N,lineNumber:96,columnNumber:13}},"banned"),_("p",{className:"description",__self:this,__source:{fileName:N,lineNumber:97,columnNumber:13}},"Set a string to blacklist the input string.")),_("div",{className:"option",__self:this,__source:{fileName:N,lineNumber:99,columnNumber:11}},_("h3",{className:"name",__self:this,__source:{fileName:N,lineNumber:100,columnNumber:13}},"whitespace"),_("p",{className:"description",__self:this,__source:{fileName:N,lineNumber:101,columnNumber:13}},"Flag as false to require the string to contain no whitespaces.")),_("div",{className:"option",__self:this,__source:{fileName:N,lineNumber:105,columnNumber:11}},_("h3",{className:"name",__self:this,__source:{fileName:N,lineNumber:106,columnNumber:13}},"regex"),_("p",{className:"description",__self:this,__source:{fileName:N,lineNumber:107,columnNumber:13}},"Set a regular expression to test the input string.")),_("div",{className:"option",__self:this,__source:{fileName:N,lineNumber:109,columnNumber:11}},_("h3",{className:"name",__self:this,__source:{fileName:N,lineNumber:110,columnNumber:13}},"trimmed"),_("p",{className:"description",__self:this,__source:{fileName:N,lineNumber:111,columnNumber:13}},"Flag as true to require the string to not begin or end with whitespace."))),_("div",{id:"numbers",className:"numbers section",__self:this,__source:{fileName:N,lineNumber:116,columnNumber:9}},_("h2",{className:"name",__self:this,__source:{fileName:N,lineNumber:117,columnNumber:11}},"Numbers"),_("div",{className:"option",__self:this,__source:{fileName:N,lineNumber:118,columnNumber:11}},_("h3",{className:"name",__self:this,__source:{fileName:N,lineNumber:119,columnNumber:13}},"integer"),_("p",{className:"description",__self:this,__source:{fileName:N,lineNumber:120,columnNumber:13}},"Flag as true to require whole numbers. Default: false")),_("div",{className:"option",__self:this,__source:{fileName:N,lineNumber:122,columnNumber:11}},_("h3",{className:"name",__self:this,__source:{fileName:N,lineNumber:123,columnNumber:13}},"allowNaN"),_("p",{className:"description",__self:this,__source:{fileName:N,lineNumber:124,columnNumber:13}},"Flag as true to allow NaN. Default: false")),_("div",{className:"option",__self:this,__source:{fileName:N,lineNumber:126,columnNumber:11}},_("h3",{className:"name",__self:this,__source:{fileName:N,lineNumber:127,columnNumber:13}},"finite"),_("p",{className:"description",__self:this,__source:{fileName:N,lineNumber:128,columnNumber:13}},"Flag as false to allow Infinity. Default: true")),_("div",{className:"option",__self:this,__source:{fileName:N,lineNumber:130,columnNumber:11}},_("h3",{className:"name",__self:this,__source:{fileName:N,lineNumber:131,columnNumber:13}},"min"),_("p",{className:"description",__self:this,__source:{fileName:N,lineNumber:132,columnNumber:13}},"Set the minimum value of the input")),_("div",{className:"option",__self:this,__source:{fileName:N,lineNumber:134,columnNumber:11}},_("h3",{className:"name",__self:this,__source:{fileName:N,lineNumber:135,columnNumber:13}},"max"),_("p",{className:"description",__self:this,__source:{fileName:N,lineNumber:136,columnNumber:13}},"Set the maximum value of the input")),_("div",{className:"option",__self:this,__source:{fileName:N,lineNumber:138,columnNumber:11}},_("h3",{className:"name",__self:this,__source:{fileName:N,lineNumber:139,columnNumber:13}},"even"),_("p",{className:"description",__self:this,__source:{fileName:N,lineNumber:140,columnNumber:13}},"Flag as true to require even numbers.")),_("div",{className:"option",__self:this,__source:{fileName:N,lineNumber:142,columnNumber:11}},_("h3",{className:"name",__self:this,__source:{fileName:N,lineNumber:143,columnNumber:13}},"odd"),_("p",{className:"description",__self:this,__source:{fileName:N,lineNumber:144,columnNumber:13}},"Flag as true to require odd numbers."))),_("div",{id:"objects",className:"object section",__self:this,__source:{fileName:N,lineNumber:147,columnNumber:9}},_("h2",{className:"name",__self:this,__source:{fileName:N,lineNumber:148,columnNumber:11}},"Objects"),_("p",{className:"description",__self:this,__source:{fileName:N,lineNumber:149,columnNumber:11}},"We can sanitize objects by creating our own object representing how we expect the input to be formatted."),_("div",{className:"option",__self:this,__source:{fileName:N,lineNumber:153,columnNumber:11}},_("h3",{className:"name",__self:this,__source:{fileName:N,lineNumber:154,columnNumber:13}},"strict"),_("p",{className:"description",__self:this,__source:{fileName:N,lineNumber:155,columnNumber:13}},"Flag as true to require all input values to be defined by the format in order to be valid (unless flagged as optional). This also prevents the user from providing their own additional properties. Default: true")),_("div",{className:"option",__self:this,__source:{fileName:N,lineNumber:161,columnNumber:11}},_("h3",{className:"name",__self:this,__source:{fileName:N,lineNumber:162,columnNumber:13}},"allOptional"),_("p",{className:"description",__self:this,__source:{fileName:N,lineNumber:163,columnNumber:13}},"Flag as true to make all of the properties optional")),_("div",{className:"option",__self:this,__source:{fileName:N,lineNumber:165,columnNumber:11}},_("h3",{className:"name",__self:this,__source:{fileName:N,lineNumber:166,columnNumber:13}},"bannedProps"),_("p",{className:"description",__self:this,__source:{fileName:N,lineNumber:167,columnNumber:13}},"Provide an array of property names (strings) to designate which properties are not allowed to be provided.")),_("div",{className:"option",__self:this,__source:{fileName:N,lineNumber:172,columnNumber:11}},_("h3",{className:"name",__self:this,__source:{fileName:N,lineNumber:173,columnNumber:13}},"optionalProps"),_("p",{className:"description",__self:this,__source:{fileName:N,lineNumber:174,columnNumber:13}},"Provide an array of property names (strings) to designate which properties are optional.")),_(c.a,{className:"javascript",__self:this,__source:{fileName:N,lineNumber:179,columnNumber:11}},"const {valid} = require('sandhands')\n\nconsole.log(valid({}, {})) // true\nconsole.log(valid({}, {a: String})) // false\nconsole.log(valid({a: 'hello world'}, {a: String})) // true\nconsole.log(valid({}, {_: {a: String}, optionalProps: [\"a\"]})) // true\nconsole.log(valid({b: 12}, {})) // false\nconsole.log(valid({b: 12}, {}, {strict: false})) // true")),_("div",{id:"arrays",className:"array section",__self:this,__source:{fileName:N,lineNumber:188,columnNumber:9}},_("h2",{className:"name",__self:this,__source:{fileName:N,lineNumber:189,columnNumber:11}},"Arrays"),_("p",{className:"description",__self:this,__source:{fileName:N,lineNumber:190,columnNumber:11}},"We can sanitize arrays by creating our own array representing how we expect the input to be formatted. The default array behavior might seem confusing at first, however once you understand it in practice it is simple and expressive."),_("div",{className:"option",__self:this,__source:{fileName:N,lineNumber:195,columnNumber:11}},_("h3",{className:"name",__self:this,__source:{fileName:N,lineNumber:196,columnNumber:13}},"standard"),_("p",{className:"description",__self:this,__source:{fileName:N,lineNumber:197,columnNumber:13}},"Manually set the standard to use for all array values")),_("div",{className:"option",__self:this,__source:{fileName:N,lineNumber:199,columnNumber:11}},_("h3",{className:"name",__self:this,__source:{fileName:N,lineNumber:200,columnNumber:13}},"firstAsStandard"),_("p",{className:"description",__self:this,__source:{fileName:N,lineNumber:201,columnNumber:13}},"Flag as true to splice the first element of the format array and use it to validate all values of the input array that are not explicitly defined by the format array. The values of all of the format array are all shifted to the left by one index. Default: true if the array length is equal to 1")),_("div",{className:"option",__self:this,__source:{fileName:N,lineNumber:208,columnNumber:11}},_("h3",{className:"name",__self:this,__source:{fileName:N,lineNumber:209,columnNumber:13}},"strict"),_("p",{className:"description",__self:this,__source:{fileName:N,lineNumber:210,columnNumber:13}},"Flag as true to require all array indexs to be defined by the format in order to be valid. Default: true if the format length is at least 1")),_("div",{className:"option",__self:this,__source:{fileName:N,lineNumber:215,columnNumber:11}},_("h3",{className:"name",__self:this,__source:{fileName:N,lineNumber:216,columnNumber:13}},"minLength"),_("p",{className:"description",__self:this,__source:{fileName:N,lineNumber:217,columnNumber:13}},"Set the minimum required length of the array. Default: 1 unless the format array is empty and there is no standard.")),_("div",{className:"option",__self:this,__source:{fileName:N,lineNumber:222,columnNumber:11}},_("h3",{className:"name",__self:this,__source:{fileName:N,lineNumber:223,columnNumber:13}},"maxLength"),_("p",{className:"description",__self:this,__source:{fileName:N,lineNumber:224,columnNumber:13}},"Set the maximum length of the array.")),_("div",{className:"option",__self:this,__source:{fileName:N,lineNumber:226,columnNumber:11}},_("h3",{className:"name",__self:this,__source:{fileName:N,lineNumber:227,columnNumber:13}},"length"),_("p",{className:"description",__self:this,__source:{fileName:N,lineNumber:228,columnNumber:13}},"Set the exact required length of the array.")),_(c.a,{className:"javascript",__self:this,__source:{fileName:N,lineNumber:230,columnNumber:11}},"const {valid} = require('sandhands')\n\nconsole.log(valid([], [])) // true\nconsole.log(valid([], [Number])) // true - Because the format array is only one element long the first value is set as the firstAsStandard format, and strict is not assumed to be true.\nconsole.log(valid([12], [Number])) // true\nconsole.log(valid([54, 25], [Number])) // true - As you can see\nconsole.log(valid([12, 12], [Number, Number])) // true - Because the format array is longer than one element firstAsStandard is not assumed and strict is set to true.\n\nconsole.log(valid([52, 63, 14], [Number, Number])) // false - Because strict is assumed extra array elements will cause validation to fail.\n\nconsole.log(valid(['a', 15, 25], {_:[Number, String], firstAsStandard: true})) // true - We can also use firstAsStandard alongside with specific formats for certain array indexes by setting it explicitly in the inline options. The first index (Number) will be the standard format for all indexes, and the second index will now become the beginning of the array of custom formats for specific indexes, meaning the first array index will be expected to be a string, and all following indexes will be expected to be numbers.")),_("div",{id:"functions",className:"function section",__self:this,__source:{fileName:N,lineNumber:242,columnNumber:9}},_("h2",{className:"name",__self:this,__source:{fileName:N,lineNumber:243,columnNumber:11}},"Functions"),_("p",{className:"description",__self:this,__source:{fileName:N,lineNumber:244,columnNumber:11}},"Functions automatically support all of the object options because functions are effectively also objects.")),_("div",{id:"universal",className:"universal section",__self:this,__source:{fileName:N,lineNumber:249,columnNumber:9}},_("h2",{className:"name",__self:this,__source:{fileName:N,lineNumber:250,columnNumber:11}},"Universal Options"),_("div",{className:"option",__self:this,__source:{fileName:N,lineNumber:251,columnNumber:11}},_("h3",{className:"name",__self:this,__source:{fileName:N,lineNumber:252,columnNumber:13}},"validate"),_("p",{className:"description",__self:this,__source:{fileName:N,lineNumber:253,columnNumber:13}},"Expects a function or array of functions to compare the input with. If any don't return true, reject the input.")),_("div",{className:"option",__self:this,__source:{fileName:N,lineNumber:258,columnNumber:11}},_("h3",{className:"name",__self:this,__source:{fileName:N,lineNumber:259,columnNumber:13}},"equalTo"),_("p",{className:"description",__self:this,__source:{fileName:N,lineNumber:260,columnNumber:13}},"Expects the input to be strictly equal (using the === operator) to the value of the equalTo option.")),_("div",{className:"option",__self:this,__source:{fileName:N,lineNumber:265,columnNumber:11}},_("h3",{className:"name",__self:this,__source:{fileName:N,lineNumber:266,columnNumber:13}},"nullable"),_("p",{className:"description",__self:this,__source:{fileName:N,lineNumber:267,columnNumber:13}},'Flag as true in order to accept null instead of the provided format, hence making the input "nullable".'))),_("div",{className:"numbers section",__self:this,__source:{fileName:N,lineNumber:273,columnNumber:9}},_("h2",{className:"name",__self:this,__source:{fileName:N,lineNumber:274,columnNumber:11}},"All"),_("p",{className:"description",__self:this,__source:{fileName:N,lineNumber:275,columnNumber:11}},"The All format is a special class we can import that acts as a wildcard. Please be careful with this as any kind of dangerous input could be passed. Please only use this if you know what you are doing."),_(c.a,{className:"javascript",__self:this,__source:{fileName:N,lineNumber:280,columnNumber:11}},"const {valid, All} = require('sandhands')\n\nconsole.log(valid(\"Hello :)\", All)) // true\nconsole.log(valid(Infinity, All)) // true\nconsole.log(valid({a: 'hello world', b: 12}, {a: String, b: All})) // true")))}}]),l}(u.Component);s.default=b},aNxC:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/format",function(){return l("WGu9")}])}},[["aNxC",0,1,2,4]]]);
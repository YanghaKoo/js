/*var url = require('url');
var querystring = require('querystring');

var parsedObject = url.parse('http:/www.hanb.co.kr/book/look.html?isbn=978-89-7914-874-9');

console.log(querystring.parse(parsedObject.query));
console.log(typeof(querystring.parse(parsedObject.query)));
console.log(parsedObject.query);
console.log(typeof(parsedObject.query))
*/

var querystring = require('querystring');
var param = querystring.parse('qquery=steve+jobs&wher=m&sm=mtp_hty');

console.log(param.sm);
console.log(querystring.stringify(param));

// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (Array.isArray(obj)) {
    let stringifiedElements = [];
    for (var i = 0; i < obj.length; i++) {
      stringifiedElements.push(stringifyJSON(obj[i]));
    }
    return '[' + stringifiedElements.join(',') + ']';
  } else if (typeof obj === 'object' && obj) {
    let stringifiedKeyValues = [];
    for (var key in obj) {
      if (typeof obj[key] === 'function' || obj[key] === undefined) {
        return '{}';
      }
      stringifiedKeyValues.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    return '{' + stringifiedKeyValues.join(',') + '}';
  }
  return '' + obj;

};

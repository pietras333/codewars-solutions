// Finish the namespace function so that it sets or gets the value at the path specified. The first argument should be the root object that the path belongs to. The 2nd argument is the path itself and the 3rd optional argument is the value to set at the path.

// If a value is provided then the path will be set to that value. Any objects not present within the path will be created automatically in order for the path to be successfully set.

// let stuff = {}
// namespace(stuff, 'moreStuff.name', 'the stuff')
// // results in {moreStuff: {name: 'the stuff'}}
// If no value is provided the the function will return the value at the path given. If the path is not valid/present then undefined will be returned.

// namespace(stuff, 'moreStuff.name') // returns 'the stuff'
// namesace(stuff, 'otherStuff.id') // returns undefined

function namespace(root, path, value) {
  //   root =  {foo: "hello"}
  //   path = root.foo.bar
  //   value = "world"
  //   result = root.foo.bar = "world"
  const keys = path.split('.');
  let current = root;
  if (value === undefined) {
    for (const key of keys) {
      if (!current || typeof current !== 'object' || !(key in current)) {
        return undefined;
      }
        current = current[key];
      }
      return current;
    } else {
      let obj = root;
      for (let i = 0; i < keys.length - 1; i++) {
          const key = keys[i];
          obj[key] = obj[key] || {};
          obj = obj[key];
      }
      obj[keys[keys.length - 1]] = value;
    }
}

// When working with color values it can sometimes be useful to extract the individual red, green, and blue (RGB) component values for a color. Implement a function that meets these requirements:

// Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
// Returns a Map<String, int> with the structure {r: 255, g: 153, b: 51} where r, g, and b range from 0 through 255
// Note: your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF")

// Example
// "#FF9933" --> {r: 255, g: 153, b: 51}

function hexStringToRGB(hexString) {
  const r = hexString.slice(1,3);
  const g = hexString.slice(3,5);
  const b = hexString.slice(5,7);
  return {r:parseInt(r,16), g:parseInt(g,16), b:parseInt(b,16)}
}

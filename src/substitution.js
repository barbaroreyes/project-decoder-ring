const substitution =(input, alphabet, encode = true) => {
    let str = '';
    let abc = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ];
    let result = input.toLowerCase().split('');
    alphabet = alphabet.split('');
    if(alphabet.length !=26)return false ;

    if (encode) {
        for (let i = 0; i < result.length; i++) {
        if (alphabet.includes(result[i])) {
          let newLetter = abc.indexOf(result[i])
          str += alphabet[newLetter];
         
        } else {
        
          str += result[i];
        }
      }
    } else {
      for (let j = 0; j < result.length; j++) {
        if (abc.includes(result[j])) {
          str += alphabet[alphabet.indexOf(j)];
        } else {
          str += result[j];
        }
      }
    }
    return str;
  }
  console.log(substitution("You are an excellent spy", "xoyqmcgrukswaflndjpzibev"))
module.exports = substitution;


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
 if(alphabet.includes('!@#$%^&*')||alphabet.length !=26||!alphabet)return false ;

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
    for (let i = 0; i < result.length; i++) {
      if (abc.includes(result[i])) {
        let newLetter = alphabet.indexOf(result[i])
        str += abc[newLetter];
        
      } else {
        str += result[i];
      }
    }
  }
  return str;

}

module.exports = substitution;

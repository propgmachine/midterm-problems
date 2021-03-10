function isEvenlyDivisible() {
}
//--------------------------------------------------------------------------
function halfSquare() {
}
//--------------------------------------------------------------------------
function isLong() {
}
//--------------------------------------------------------------------------
function exclaim(str) {

  let numExclamationMarks = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(i, str[i]);
    if (str[i] === '!') {
      numExclamationMarks++;
    } else {
      break;
    }
  }

  let exclamationlessStr = '';
  for (let i = 0; i < str.length - 1 - 
  numExclamationMarks; i++) {
    exclamationlessStr += str[i];
  }

  return exclamationlessStr + '!';
}

console.log.exclaim('hello'));
console.log.exclaim('hello!'));
console.log.exclaim('hello!!'));
console.log.exclaim('hello!!!'));


//--------------------------------------------------------------------------
function countWords() {
}
//--------------------------------------------------------------------------
function containsDigit(str) {
  let doesContainDigits = false;

  //const validDigits = '0123456789';
    //validDigits.includes(char)
  
  for (const char of str) {
    if (
      char === '0' ||
      char === '1' ||
      char === '2' ||
      char === '3' ||
      char === '4' ||
      char === '5' ||
      char === '6' ||
      char === '7' ||
      char === '8' ||
      char === '9' 
    ) {
      doesContainDigits = true;
    }
  }


  return doesContainDigits;
}
//--------------------------------------------------------------------------
function containsLowerCase(str) {
  let doesContainLowerCase = false;

  const lowerCaseDigits = 'abcdefghijklmnopqrstuvwxyz';

  for (const char of str) {
    if (lowerCaseDigits.includes(char)) {
      lowerCaseDigits = true;

    }
  }

  return doesContainLowerCase;
}
//--------------------------------------------------------------------------
function containsUpperCase(str) {
  let doesContainLowerCase = false;

  const lowerCaseDigits = 'ABCDEFGHIJKLMONPQRSTUVWXYZ';

  for (const char of str) {
    if (lowerCaseDigits.includes(char)) {
      lowerCaseDigits = true;
    }
  }

  return doesContainLowerCase;
}
//--------------------------------------------------------------------------
function containsNonAlphanumeric() {
  let doesContainNonAlphanumeric = false;

  for (const char of str) {
  const isDigit = containsDigit(char);
  const isUpperCaseLetter = containsUpperCase(char);
  const isLowerCaseLetter = containsUpperCase(char);
  const isAlphanumeric = (
    isDigit ||
    isUpperCaseLetter ||
    isLowerCaseLetter
  );
  if (!isAlphanumeric) {
    doesContainNonAlphanumeric = true;
  }
}

  return doesContainNonAlphanumeric;
}
//--------------------------------------------------------------------------
function containsSpace(str) {
  let doesContainSpace = false;
  for (const char of str) {
    if (char === ' ') {
      doesContainSpace = true;
    }
  }

  return doesContainSpace;
}




//--------------------------------------------------------------------------
function digits() {
}
//--------------------------------------------------------------------------
function truncate(str) {
  if (str.length < 15) {
    return str;
  }
  else {
    let output = '';
    for (let i = 0; i < 8; i++) {
      output += str[i];
    }
    output += '...';
    return output;
  }
}



//--------------------------------------------------------------------------
function isValidPassword(str) {
  const doesContainUpperCase = containsUpperCase(str);
  const doesContainLowerCase = containsLowerCase(str);
  const doesContainDigit = containsDigit(str);
  const doesContainNonAlphanumeric = containsNonAlphanumeric(str);
  const doesContainSpace = containsSpace(str);

  const isValid = (
    doesContainUpperCase &&
    doesContainLowerCase &&
    doesContainDigit &&
    doesContainNonAlphanumeric &&
    !doesContainSpace
  );
  
  return isValid;
}
//--------------------------------------------------------------------------
function onlyPunchy(titles) {

  let exclaimedTitles = [];
  for (const title of titles) {
    const exclaimedTitle = exclaim(title);
    exclaimedTitles.push(exclaimedTitle);
  }

  let punchyTitles = [];
  for (const title of exclaimedTitles) {
    if (title.length < 15) {
      punchyTitles.push(title);
    }
  }

  return punchyTitles;
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}
const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased(){
  const tostring = tutorials.toString();
  const splitt = tostring.split(",")
 const beforeFinal = splitt.map(el => el[0].toUpperCase() + el.substring(1)) 
 const tostringFinal = beforeFinal.toString();
 const splittFinal = tostringFinal.split(" ")
 return splittFinal.map(el => el[0].toUpperCase() + el.substring(1)).join(" ").split(',')
  }
console.log(titleCased())
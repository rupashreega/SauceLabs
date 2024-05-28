var regexvariable = "find my legs"


var position = regexvariable.search(/[my]/)
console.log(position)



const personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

const regexpNames =
  /First_Name: (?<firstname>\w+), Last_Name: (?<lastname>\w+)/gm;
for (const match of personList.matchAll(regexpNames)) {
  console.log(`Hello ${match.groups.firstname} ${match.groups.lastname}`);
}


var firstname = 'Rupashree'
var lastname = 'Shankar'

console.log(firstname + lastname)

const check = firstname.endsWith('e')
console.log(check)

const checkincludes = firstname.includes('e')
console.log(checkincludes)

console.log(firstname.repeat(2))
var slicevar = firstname.slice(-1)
console.log(slicevar)


//const reversedLastLine = lines.slice(0, -1) 1-lastbutoneline
//.concat(lines.slice(-1)[0]
//.split(' ')
//.reverse()
//.join(' '));

//reverse the string

var reversedname = firstname.split("").reverse().join("")
console.log(reversedname)

var stringitem = "Hi my name is rupashree"

var reversedstring = stringitem.split(/\s/).reverse().join(" ")
console.log(reversedstring)



var items  = stringitem.split(/\s/)
var reversedstring1

for (var i of items){
      i= i.split("").reverse().join("")
      console.log(i)
      reversedstring1 += `${i} `
}
console.log(reversedstring1)

regex = 'e'
const editedname =firstname.replaceAll(regex, "")
console.log(editedname)

regexword = '/[my]/'

const removedstring = stringitem.replaceAll("my","")
console.log(removedstring)


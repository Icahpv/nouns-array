
const nouns = [
  "bush",
  "shovel",
  "cave",
  "mouth",
  "shell",
  "tear",
  "razor",
  "nest",
  "pad",
  "fear",
  "prize",
  "power",
  "pocket",
  "cane",
  "pump",
  "mask",
  "junk",
  "kiss",
  "photo",
  "shower",
  "slide",
  "freedom"
];

let output = ''
const list = document.querySelector('p')

// 1. Create a function `handleItem()` that accepts the (JS-created) array `item` (the noun) as a parameter.

const handleItem = function(item) {

// 2. Inside `handleItem()`, use `.innerHTML` and the addition assignment operator (`+=`) (or another method of your choice) to create a comma-separated of nouns so that:
     
 
  //    - the first character of each noun is capitalized;
    output += `${item[0].toUpperCase() + item.slice(1)}`
  
  
    if (item === nouns[nouns.length - 1]) {
    output += '.'
    
    } else if (item === nouns[nouns.length - 2]) {
  //    - each noun is separated by a comma;
    output += ' and '
    
    } else  {
  //    - the last noun is separated by the word `and`.
    output += ', '  
    }
       
   


}

//console.log(handleItem)

nouns.forEach(handleItem)
list.innerHTML = `<strong>List of nouns:</strong> ${output} `

// 3. Finally, using `Array.forEach()`: invoke `handleItem()` for each item in the noun array to create your comma-separated list.
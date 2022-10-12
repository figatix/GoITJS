// console.log(2 + 2)

// const clients = ["Mango", "Poly", "Ajax"];

// // Зазначаючи в дужках індекс елемента, ми отримуємо його значення
// console.log(clients[0]); // Mango
// console.log(clients[1]); // Poly
// console.log(clients[2]); // Ajax

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message= "Клієнт з таким ім'ям відсутній в базі даних!";

// for (const client of clients) {
//     switch (client) {
//         case clientNameToFind:
//             message = "Клієнт з таким ім'ям є в базі даних!";
//             break;
//  }
// }
// console.log(message); // "Клієнт з таким ім'ям є в базі даних!"


// for (const client of clients) {
  
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }

//   message = "Клієнт з таким ім'ям відсутній в базі даних!";
// }

// console.log(message); // "Клієнт з таким ім'ям є в базі даних!"

//

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (const number of numbers) {
//   if (number < threshold) {
//     continue;
//   }

//   console.log(`Число більше за ${threshold}: ${number}`); // 18, 29, 34
// }

///

// const numbers = [];

// numbers.push(1);
// console.log(numbers); // [1]

// numbers.push(2);
// console.log(numbers); // [1, 2]

// numbers.push(3);
// console.log(numbers); // [1, 2, 3]

// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]

// numbers.push(5);
// console.log(numbers); // [1, 2, 3, 4, 5]

// numbers.unshift(22);
// console.log(numbers);

// numbers.shift();
// console.log(numbers);

// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]

// console.log(numbers.pop()); //  4
// console.log(numbers); // [1, 2, 3]

// console.log(numbers.pop()); //  3
// console.log(numbers); // [1, 2]

// console.log(numbers.pop()); //  2
// console.log(numbers); // [1]

// console.log(numbers.pop()); //  1
// console.log(numbers); // []

// const colors = ["red", "green", "blue"];

// colors.splice(3, 0, "purple", 'grey', 'orange','pink');
// console.log(colors); // ["red", "green", "purple", "blue"]


// function fn() {
//   // Змінна args буде містити повноцінний масив
//     const args = Array.from(arguments);
//     return args;
// }
// const arr = fn(1, 23, 45, 32, 1, 12);
// console.log(arr)

// function withdraw(amount, balance) {
//   if (amount === 0) {
//     console.log("Для проведення операції введіть суму більшу за нуль");
//   } else if (amount > balance) {
//     console.log("Недостатньо коштів на рахунку");
//   } else {
//     console.log("Операція зняття коштів проведена успішно");
//   }
// }

// function withdraw2(amount, balance) {
//   if (amount === 0) {
//     console.log("Для проведення операції введіть суму більшу за нуль");
//     return;
//   }
//   if (amount > balance) {
//     console.log("Недостатньо коштів на рахунку");
//     return;
//   }
//   console.log("Операція зняття коштів проведена");
// }


// function calculateTotal(number) {
//   // Change code below this line
//   let sum = 0;
//   for (let i = 0; i <= number; i += 1) {
//     sum+=i
//     console.log(i);
//   }
//   console.log(`k==${sum}`);
//   }
 
// calculateTotal(6);

///////////////////////////////////////////
// function findLongestWord(string) {
 
//   const array = string.split(' ');
//   const resultArray = [];
//   let wordLength = 0;

//   for (let i of array) {
//     if (i.length > wordLength) {
//       resultArray.splice(0, 1, i);
//       wordLength = i.length
//     }
//   }
//   return resultArray;
// }

// console.log(findLongestWord('Hello worlds abs sdsfsfsfsfs'))

/////////////////////////////////////////////////
// WITH IF:

// function getCommonElements(array1, array2) {
//   const resultArray=[];
//   for (let i of array1){
//     for (let k of array2){
//       if (i===k){
//         resultArray.push(k);
//       }
//     }
//   }
//   return resultArray;
// }

//////////////////////////////////////////////////
// the same but with SWITCH:

// function getCommonElements(array1, array2) {
//   const resultArray=[];
//   for (let i of array1){
//     for (let k of array2){
//       switch (i) {
//         case k:
//           resultArray.push(k);
//           break;
//       }
//     }
//   }
//   return resultArray;
// }

// //////////////////////////////////
// // THE SAME BUT WITH TERNAR:

// function getCommonElements(array1, array2) {
//   const resultArray = [];
//   let f = 0;
//   for (let i of array1){
//     for (let k of array2){
//       (i == k) ? resultArray.push(k) : f+=1 ;
//     }
//   }
//   return resultArray;
// }

//////// TRY WITH .INCLUDES() ////////////

// function getCommonElements(array1, array2) {
//   const resultArray = [];
//   for (let i of array1){
//     if (array2.includes(i)) {
//       resultArray.push(i)
//     }

//   }
//   return resultArray;
// }



// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]))
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

///////////////////////////

// function getEvenNumbers(start, end) {
//    // Change code below this line
//   const pairArray=[];
//   for (let i=start; i<=end; i+=1){
//     switch(i%2){
//       case (0):
//       pairArray.push(i);
//     }
//   }
//   return pairArray;
//    // Change code above this line
// }

// console.log(getEvenNumbers(3, 11));

// console.log(false - true);


// console.log('сум');

//////////////////////////////////

function reverseString(string) {
    const reverseArray = [];
    let resultString = '';

    for (let i = 0; i < string.length; i += 1){
        reverseArray.push(string[string.length - 1 - i]);
        resultString = reverseArray.join('');
    }
    return resultString;
}
//////////////////////////

function reverseString2(string) {
    const reverseArray = [];
    let resultString = '';

    for (let i = 0; i < string.length; i += 1){
        
        reverseArray.unshift(string[i]);
        resultString = reverseArray.join('');
    }
    return resultString;
}


////////////////////
// const str = 'What are you doing?';
// const string2 = [];
// let result = '';

// for (let i = 0; i < str.length; i +=1) {
   
//     // console.log(str[i]);
//     // console.log(str[str.length - 1 - i]);
//     string2.push(str[str.length - 1 - i]);
//     result = string2.join('');
//     // string2.push(str[str.lendth-i]);

// }


// console.log(string2.length-1)
// console.log(result);

// console.log(reverseString(str));

// console.log(reverseString2("Figatix"));
//////////////////////////////////////////

// const exArray = [1, 2, 3];

// function reverseArrayFn(array) {
//     const resultArray = [];

//     for (let i of array) {
//         resultArray.unshift(i);
//     }
//     return resultArray;
// }

// reverseArrayFn(exArray);
// console.log(`output  - `,reverseArrayFn(exArray))

//////////////////////

function polindrom(string) {
    const normalizeString = string.toLowerCase().trim();
    let newString = [];

    for (let i = 0; i < string.length; i += 1){
        
        if (normalizeString[i] === normalizeString[normalizeString.length - i - 1]) {
            
            // console.log(normalizeString[normalizeString.length - i - 1]);
            newString.push(string[string.length - i - 1]);
        }
        else {

            return false;
        }
        


        // switch (normalizeString[i]) {
        //     case normalizeString[string.length - i - 1]:
        //         newString.push(string[string.length - i - 1]);
        //         break;
        //     default:
        //         return false;
        // }
        
        

    }
    newString.join('')
    return newString.join('');

}

// console.log(polindrom('   Anna   '));

// console.log(polindrom('fiGatix   '));


///////////////////////// BINARY SEARCH FOR NUMBERS /////////////////
// let min = 0;
// let max = 100;
// const target = 34;


function binary(min, max, target) {
    
    if (target < min || target > max) {
        return false;
    }
    for (let i = min; i < max; i += 1) {
        
        let guess = Math.floor(min + (max - min) / 2);
        console.log(`guess`, guess)
        
        if (guess === target) {
            console.log('ss')
            return i+1;
        }
        else if (guess > target) {
            max = guess;
        }
        else if (guess < target) {
            min = guess;
        }
    }
    return false;
}

// binary(min, max, target);
// console.log(binary(min, max, target))














































// Напишите функцию JavaScript, 
// которая принимает строку в качестве входных данных
//  и возвращает новую строку, в которой все вхождения символов a и A заменены символом #. Функция должна быть нечувствительна к регистру.Максимальная длинна строки -15 символов .


// Examples:


// input: "apple" output: "#pple"


// input: "Hi, how are you?" output: "Hi, how #re you?"


// input: "javascript" output: "j#v#script"

function replaceA(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i].toLowerCase() === "a") {
        newStr += "#";
      } else {
        newStr += str[i];
      }
    }
    return newStr;
  }
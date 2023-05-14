// Напишите функцию JavaScript, которая принимает строку в качестве входных данных и возвращает новую строку, в которой первая буква каждого слова заглавная.Максимальная длинна строки -15 символов .


// Examples:


// input: "hello world" output: "Hello World"


// input: "hi, how are you?" output: "Hi, How Are You?"


// input: "javascript is fun" output: "Javascript Is Fun"


function capitalizeFirstLetter(str) {
    let words = str.split(" ");
    let result = "";
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      result += word.charAt(0).toUpperCase() + word.slice(1) + " ";
    }
    return result.trim();
  }

  console.log(capitalizeFirstLetter("hello world")); 
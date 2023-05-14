// Напишите функцию JavaScript, которая принимает строку в качестве входных данных и возвращает количество гласных в строке. Для целей этого задания считайте гласными «а», «е», «и», «о» и «у». Функция должна быть нечувствительна к регистру. Максимальная длинна строки -15 символов .
// Examples:


// input: "hello" output: 2


// input: "Hi, how are you?" output: 6


// input: "javascript" output: 3

function countVowels(str) {
    let vowelsCount = 0;
    const vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i].toLowerCase())) {
        vowelsCount++;
      }
    }
    return vowelsCount;
  }
  
  console.log(countVowels("hello")); 
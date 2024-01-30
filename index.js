
const text = "Коуч контролирует процесс прохождения сессии, мотивирует и направляет клиента с помощью правильно подобранных вопросов";

// Разбиваем текст на слова
const words = text.split(/\s+/);

// Массив для хранения слов, начинающихся с буквы "К" или "к"
const wordsStartingWithK = [];

// Проходим по каждому слову и проверяем его на начало с буквы "К" или "к"
words.forEach(word => {
    if (/^[Кк]/.test(word)) {
        wordsStartingWithK.push(word);
    }
});

// Выводим результаты
if (wordsStartingWithK.length > 0) {
    console.log("Слова, начинающиеся с 'К' или 'к':");
    console.log(wordsStartingWithK.join(', '));
} else {
    console.log('Слова, начинающиеся с "К" или "к", не найдены.');
}


// ---------------------------------------------------------------


function checkDateFormat() {
    // Получаем значение из поля ввода
    const dateString = document.getElementById('dateInput').value;
  
    // Создаем регулярное выражение для проверки формата даты дд-мм-гг
    const regex = /^(?:(?:0[1-9]|[1-2][0-9]|3[0-1])-(?:0[1-9]|1[0-2])-(?:19|20)\d\d)$/;
  
    // Проверяем соответствие строки регулярному выражению
    if (regex.test(dateString)) {
      document.getElementById('resultMessage').innerText = 'Строка является датой в формате дд-мм-гг';
    } else {
      document.getElementById('resultMessage').innerText = 'Строка не соответствует формату дд-мм-гг или неверные значения месяца/дня';
    }
}

// ---------------------------------------------------------------


const text_2 = "Это текст с некоторыми латинскими словами, такими как: hello, world, and apple.";
const regex_2 = /[А-Яа-я]+/g;
const matches_2 = text_2.match(regex_2);
console.log(matches_2);


// --------------------------------------------------------------------

function containsOnlyDigits(str) {
    // Создаем регулярное выражение для поиска любого символа, кроме цифр
    const regex = /\D/;

    // Проверяем, содержит ли строка только цифры
    return !regex.test(str);
}

// Пример использования функции
const str1 = "12345"; // Содержит только цифры
const str2 = "abc123"; // Содержит символы помимо цифр

console.log(containsOnlyDigits(str1)); // Выведет: true
console.log(containsOnlyDigits(str2)); // Выведет: false

// --------------------------------------------------------------------

function isPalindrome(str) {
    // Приводим строку к нижнему регистру и удаляем все символы, кроме букв и цифр
    const cleanStr = str.toLowerCase().replace(/[\W_]/g, '');

    // Создаем строку, перевернутую задом наперед
    const reversedStr = cleanStr.split('').reverse().join('');

    // Сравниваем исходную строку с перевернутой
    return cleanStr === reversedStr;
}

// Пример использования функции
const str3 = "A man, a plan, a canal, Panama"; // Палиндром
const str4 = "Hello, world!"; // Не палиндром

console.log(isPalindrome(str3)); // Выведет: true
console.log(isPalindrome(str4)); // Выведет: false



// ---------------------------------------------------------

const text_3 = "Это действующие специалисты, которые помогут влиться в новую сферу — профессиональные, энергичные и общительные";
// Разделяем текст на слова
const words_4 = text_3.split(/\s+/);
// Массив для хранения слов, оканчивающихся на букву "е"
const wordsEndingWithM = [];
// Проходим по каждому слову и проверяем его на окончание буквой "е"
words_4.forEach(word => {
    if (word.endsWith('е')) {
        wordsEndingWithM.push(word);
    }
});
// Выводим результаты
if (wordsEndingWithM.length > 0) {
    console.log("Слова, оканчивающиеся на 'е':");
    console.log(wordsEndingWithM.join(', '));
} else {
    console.log('Слова, оканчивающиеся на "е", не найдены.');
}

// ---------------------------------------------------------

function containsUpperCase(str) {
    // Создаем регулярное выражение, которое ищет любой символ, не являющийся буквой верхнего регистра
    const regex = /[^A-Z]/;

    // Проверяем, содержит ли строка только буквы верхнего регистра
    return !regex.test(str);
}

// Пример использования функции
const str5 = "HELLO";
const str6 = "Hello123";

console.log(containsUpperCase(str5)); // Выведет true, так как строка содержит только буквы верхнего регистра
console.log(containsUpperCase(str6)); // Выведет false, так как строка содержит не только буквы верхнего регистра
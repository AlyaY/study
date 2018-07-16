// Допишите код используя Promise
// А) Функция должна вывести ‘hi’ через 2 секунды
function delay(duration) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
       }, duration);
    });
}
function logHi() {
    console.log('hi');
}
delay(2000).then(logHi);


// Б) Одна из особенностей Promise, в том что они могут бесконечно
// вызывать.then()
new Promise(function (resolve, reject) {
  
    setTimeout(() => {
      
        resolve(10);
     }, 3000);
  
}).then((result) => {
  return new Promise(function(resolve, reject) {
    
      setTimeout(function() {
        console.log(result); // 10
        
        resolve(result + 2);
      }, 0);
    
    });
}).then((result) => {
  return new Promise(function(resolve, reject) {
    
      setTimeout(function() {
        console.log(result); // 12
        
        resolve(result + 2);
      }, 2000);
    
    });
}).then((result) => {
  
    console.log(result); // 14
});


// В) Написать Promise который выводит console.log в случае если время
// выполнения не превысило 2 секунд, и console.error в случае если
// превысило.Время должно определяться случайным образом,
// использовать внутренний обработчик ошибок для Promise
var time = Math.round(Math.random() * 4000);
var promise = new Promise(function (resolve, reject) {
    (time < 2000) ? resolve() : reject(new Error());
});

promise.then(() => { console.log('Ok') }, () => { console.error('Error') });


// Г) Программа должна генерировать от 1 до 10 асинхронных функций,
// которые должны вывести в консоль номер функции и через сколько
// времени(так же определяется случайно от 1 до 10) сработал в ней
// console.log.Все эти функции должны работать параллельно.После
// окончания работы этих функций должен вывестись console.log
// поздравляющий вас с окончанием работы и отображающий сколько
// времени понадобилось на выполнение(максимальное значение 10
// конечно)
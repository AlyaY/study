(function () {
    /** 
     * Допишите код используя Promise
     * А) Функция должна вывести ‘hi’ через 2 секунды
     */
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
}());


(function () {
    /** 
     * Б) Одна из особенностей Promise, в том что они могут бесконечно
     * вызывать.then()
     * 
     * new Promise(function (resolve, reject) {
     *   должно через 3 секунды передать дальше значение - 10
     * }).then((result) => {
     *   должно вывести в console значение полученное и передать дальше увеличенное на 2
     * }).then((result) => {
     *   должно вывести в console значение полученное и передать дальше увеличенное на 2 через 2 секунды
     * }).then((result) => {
     *   должно вывести конечный результат
     * });
     */
    const delayPromise = (duration, value) => (
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(value);
            }, duration);
        })
    )

    delayPromise(3000, 10)
        .then((result) => {
            console.log(result, );

            return result + 2;
        })
        .then((result) => {
            console.log(result);

            return delayPromise(2000, result);
        })
        .then((result) => console.log(result));
}());


(function () {
    /** 
     * В) Написать Promise который выводит console.log в случае если время выполнения не превысило 2 секунд, 
     * и console.error в случае если превысило.
     * Время должно определяться случайным образом, использовать внутренний обработчик ошибок для Promise
     */
    const time = Math.round(Math.random() * 4000);
    const promise = new Promise((resolve, reject) => {
        (time < 2000) ? resolve('Ok') : reject(new Error());
    });

    promise
        .then((res) => { console.log(res) })
        .catch((err) => { console.error('Error', err) });
}());


(function () {
    /** 
     * Г) Программа должна генерировать от 1 до 10 асинхронных функций,
     * которые должны вывести в консоль номер функции и через сколькоv времени 
     * (так же определяется случайно от 1 до 10) сработал в ней console.log.
     * Все эти функции должны работать параллельно.После
     * окончания работы этих функций должен вывестись console.log
     * поздравляющий вас с окончанием работы и отображающий сколько
     * времени понадобилось на выполнение(максимальное значение 10 конечно)
     */
  
    const startDate = Date.now();
    

    const randomNumber = (min, max) => (Math.round(Math.random() * (max - min)) + min);
    const generateFunction = (index, min, max) => new Promise((resolve, reject) => {

        let time = randomNumber(min, max);

        setTimeout(() => {
            console.log('function ' + index + ' : time ' + time);

            resolve('Ok')
        }, time);

    });
  
    const generateArrayOfFunctions = (n, min, max) => {
        const arrayAsyncFunctions = [];

        for (let i = 0; i < n; i++) {
             arrayAsyncFunctions.push(generateFunction(i, min, max));
        }

        return arrayAsyncFunctions;
    }
     
    Promise.all(generateArrayOfFunctions(10, 1, 10)).then(results => {
        console.log('Eeeee all finished: ' + (Date.now() - startDate));
    });
}());
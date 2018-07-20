(function () {
  const button1 = document.querySelector('.button-1');
  const button2 = document.querySelector('.button-2');
  const button3 = document.querySelector('.button-3');
  const input4 = document.querySelector('.input-4');


  (function (button) {
    /** 
     * А) Создать кнопку по нажатию на которую в консоль выведет фразу ‘Hello
     * World’ с задержкой в 5 секунд, при повторном нажатии в течении 5 секунд
     * время должно пойти заново
     */
    let timer;

    button.addEventListener('click', () => {
      timer && clearTimeout(timer);

      timer = setTimeout(() => console.log("Hello World"), 5000);
    });
  }(button1));
  
  
  (function (button) {
    /**
     * Б) Создать кнопку по нажатию на которую будет выводить в консоль ‘You
     * are welcome! ’ каждые 3 секунды, пока не нажмем на кнопку еще раз
     */
    let  inrerval;

    button.addEventListener('click', () => {
      if (inrerval) {
        clearInterval(inrerval);

        inrerval = null;
      } else {
        inrerval = setInterval(() => console.log("You are welcome!"), 3000);
      }
    });
  }(button2));


  (function (button) {
      /**
     * В) Создать кнопку по нажатию на которую будет выводить фразу seconds
     * +‘ seconds’, где seconds – это количество секунд через которое появится
     * фраза. Это значение должно быть случайно выбрано от 1 до 4 секунд.
     * Сообщения должны прерваться по повторному нажатию
     */
    
    let  randomTimer;
    
    const getRandomValue = (min, max) => Math.round(Math.random() * (max - min)) + min;

    const createRandomTimeout = (seconds) => {
      console.log(`You will wait ${seconds} seconds`);

      randomTimer = setTimeout(function () {
        console.log('---');

        clearTimeout(randomTimer);
        createRandomTimeout(getRandomValue(1, 4));
      }, seconds * 1000);
    }

    button.addEventListener('click', () => {
      if (randomTimer) {
        clearTimeout(randomTimer);

        randomTimer = null;
      } else {
        createRandomTimeout(getRandomValue(1, 4));
      }
    });
  }(button3));


  (function (input) {
    /**
     * Г) Создать поле для ввода текста которое будет выводить в консоль
     * введённый текст, через 1 секунду после того как пользователь перестал
     * печатать
     */
    let timer;
    input.addEventListener('keypress', (event) => {
      timer && clearTimeout(timer);

      timer = setTimeout(() => {
        console.log(event.target.value);
      }, 1000);
    });
  }(input4));
  
}());

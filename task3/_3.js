(function () {
  let timer, inrerval, randomValue, randomTimer;

  const button1 = document.querySelector('.button-1');
  const button2 = document.querySelector('.button-2');
  const button3 = document.querySelector('.button-3');
  const input4 = document.querySelector('.input-4');


  /** 
   * А) Создать кнопку по нажатию на которую в консоль выведет фразу ‘Hello
   * World’ с задержкой в 5 секунд, при повторном нажатии в течении 5 секунд
   * время должно пойти заново
   */
  button1.addEventListener('click', () => {
    timer && clearTimeout(timer);

    timer = setTimeout(() => console.log("Hello World"), 5000);
  });


  /**
   * Б) Создать кнопку по нажатию на которую будет выводить в консоль ‘You
   * are welcome! ’ каждые 3 секунды, пока не нажмем на кнопку еще раз
   */
  button2.addEventListener('click', () => {
    if (inrerval) {
      clearInterval(inrerval);

      inrerval = null;
    } else {
      inrerval = setInterval(() => console.log("You are welcome!"), 3000);
    }
  });


  /**
   * В) Создать кнопку по нажатию на которую будет выводить фразу seconds
   * +‘ seconds’, где seconds – это количество секунд через которое появится
   * фраза. Это значение должно быть случайно выбрано от 1 до 4 секунд.
   * Сообщения должны прерваться по повторному нажатию
   */
  const getRandomValue = (min, max) => Math.round(Math.random() * (max - min)) + min;

  const createRandomTimeout = (seconds) => {
    randomTimer = setTimeout(function () {
      console.log("seconds " + seconds);

      createRandomTimeout(getRandomValue(1, 4));
    }, seconds * 1000);
  }

  button3.addEventListener('click', () => {
    if (randomTimer) {
      clearTimeout(randomTimer);

      randomTimer = null;
    } else {
      createRandomTimeout(getRandomValue(1, 4));
    }
  });


  /**
   * Г) Создать поле для ввода текста которое будет выводить в консоль
   * введённый текст, через 1 секунду после того как пользователь перестал
   * печатать
   */
  input4.addEventListener('blur', (event) => {
    setTimeout(() => console.log(event.target.value), 1000);
  });
}());
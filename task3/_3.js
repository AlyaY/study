var timer, inrerval, randomValue, randomTimer;
var button1 = document.querySelector('.button-1'),
    button2 = document.querySelector('.button-2'),
    button3 = document.querySelector('.button-3'),
    input4 = document.querySelector('.input-4');


// А) Создать кнопку по нажатию на которую в консоль выведет фразу ‘Hello
// World’ с задержкой в 5 секунд, при повторном нажатии в течении 5 секунд
// время должно пойти заново
button1.addEventListener('click', function(){
  timer && clearTimeout(timer);
  
  timer = setTimeout(function(){
    console.log("Hello World");
  }, 5000);
});


// Б) Создать кнопку по нажатию на которую будет выводить в консоль ‘You
// are welcome! ’ каждые 3 секунды, пока не нажмем на кнопку еще раз
button2.addEventListener('click', function(){
  if(inrerval) {
    clearInterval(inrerval);
    
    inrerval = null;
  } else {
    inrerval = setInterval(function(){
      console.log("You are welcome!");
    }, 3000);
  }
});


// В) Создать кнопку по нажатию на которую будет выводить фразу seconds
// +‘ seconds’, где seconds – это количество секунд через которое появится
// фраза. Это значение должно быть случайно выбрано от 1 до 4 секунд.
// Сообщения должны прерваться по повторному нажатию
function getRandomValue(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

function createRandomTimeout(seconds) {
  randomTimer = setTimeout(function(){
      console.log("seconds " + seconds);
    
      createRandomTimeout(getRandomValue(1, 4));
    
   }, seconds*1000);
}

button3.addEventListener('click', function(){  
  if(randomTimer) {
    clearTimeout(randomTimer);
    
    randomTimer = null;
  } else {
    createRandomTimeout(getRandomValue(1, 4));
  }
});


// Г) Создать поле для ввода текста которое будет выводить в консоль
// введённый текст, через 1 секунду после того как пользователь перестал
// печатать
input4.addEventListener('blur', function(event){
  setTimeout(function(){
    console.log(event.target.value);
  }, 1000);
});
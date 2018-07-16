
// a) Создать свою реализацию функции map для массивов
Array.prototype.map = function (cb) {
    var newArray = [];

    for (var i = 0; i < this.length; i++) {
        newArray.push(cb(this[i], i, this));
    }

    return newArray;
};

console.log(JSON.stringify([1, 2, 3].map(function (x) { return x + 1; })) === '[2,3,4]');


// б) Переделайте массив так, чтобы объекты были следующего вида { id: …, title: … }.
// Использовать функцию map
var newReleases = [{
    "id": 70111470,
    "title": "Die Hard",
    "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [4.0],
    "bookmark": []
}, {
    "id": 654356453,
    "title": "Bad Boys",
    "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [5.0],
    "bookmark": [{ id: 432534, time: 65876586 }]
}, {
    "id": 65432445,
    "title": "The Chamber",
    "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [4.0],
    "bookmark": []
}, {
    "id": 675465,
    "title": "Fracture",
    "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [5.0],
    "bookmark": [{ id: 432534, time: 65876586 }]
}];

console.log(newReleases.map(function (value) {
    return { id: value.id, title: value.title };
}));


// в) Создать свою реализацию функции filter для массивов
Array.prototype.filter = function (cb) {
    var newArray = [];

    for (var i = 0; i < this.length; i++) {
        cb(this[i], i, this) && newArray.push(this[i]);
    }

    return newArray;
};

console.log(JSON.stringify([1, 2, 3].filter(function (x) { return x > 2 })) === "[3]");


// г) Выведите массив ids для видео у которых рейтинг 5.0. В качестве входных данных
// используйте newReleases из предыдущих заданий.
console.log(
    newReleases
        .filter(function (value) { return value.id > 5; })
        .map(function (value) { return value.id; })
);


// д) Создать свою реализацию функции reduce для массивов
Array.prototype.reduce = function (combiner, initialValue) {
    var accumulator = initialValue || this.shift();

    for (var i = 0; i < this.length; i++) {
        accumulator = combiner(accumulator, this[i], i, this);
    }

    return accumulator;
}

console.log([1, 2, 3].reduce(function (memo, item) { return memo + item; }) === 6);
console.log([1, 2, 3].reduce(function (memo, item) { return memo + item; }, 10) === 16);


// е) С помощью функции reduce получить максимальное значение в массиве
var ratings = [2, 3, 1, 4, 5];

console.log(ratings.reduce(function (max, current) {
    return max > current ? max : current;
}));


// ж) С помощью функций map, reduce, вывести url у которого самая большая площадь
var boxarts = [{
    width: 200,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
}, {
    width: 150,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
}, {
    width: 300,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
}, {
    width: 425,
    height: 150,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"
}];

console.log(
    boxarts
        .map(function (boxart) { return { ...boxart, suqare: (boxart.width * boxart.height) } })
        .reduce(function (max, current) {
            return (max.suqare > current.suqare) ? max : current;
        }).url
);


// з) Преобразуйте массив в объект используя функцию reduce. Используйте начальное значение (второй параметр)
var videos = [{
    "id": 65432445,
    "title": "The Chamber"
}, {
    "id": 675465,
    "title": "Fracture"
}, {
    "id": 70111470,
    "title": "Die Hard"
}, {
    "id": 654356453,
    "title": "Bad Boys"
}];

console.log(videos.reduce(function (result, { id, title }) {
    return { ...result, [id]: title }
}, {}));


  // д)

  var movieLists = [{
    name: "Instant Queue",
    videos: [{
        "id": 70111470,
        "title": "Die Hard",
        "boxarts": [{
            width: 150,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
        }, {
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg"
        }],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    }, {
        "id": 654356453,
        "title": "Bad Boys",
        "boxarts": [{
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg"
        }, {
            width: 150,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg"
        }],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
    }]
}, {
    name: "New Releases",
    videos: [{
        "id": 65432445,
        "title": "The Chamber",
        "boxarts": [{
            width: 150,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg"
        }, {
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg"
        }],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    }, {
        "id": 675465,
        "title": "Fracture",
        "boxarts": [{
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
        }, {
            width: 150,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
        }, {
            width: 300,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
        }],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
    }]
}];

console.log(
  movieLists
  .map(function(value) { 
      return (value.videos.map(function(video){
        var url = video.boxarts.filter(function(boxart){
          return boxart.width === 150 && boxart.height;
        })[0].url;
      
        return {id: video.id, title: video.title, boxarts: url};
      }));
  })
);
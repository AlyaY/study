(function () {
    // a) Создать свою реализацию функции map для массивов

    Array.prototype.map = function (projectionFunction) {
        const newArray = [];

        for (let i = 0; i < this.length; i++) {
            newArray.push(projectionFunction(this[i], i, this));
        }

        return newArray;
    };

    const array = [1, 2, 3].map(x => x + 1);

    console.log(JSON.stringify(array) === '[2,3,4]');
}());


(function () {
    // б) Переделайте массив так, чтобы объекты были следующего вида { id: …, title: … }.
    // Использовать функцию map

    const newReleases = [
        {
            "id": 70111470,
            "title": "Die Hard",
            "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": [4.0],
            "bookmark": []
        },
        {
            "id": 654356453,
            "title": "Bad Boys",
            "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": [5.0],
            "bookmark": [{ id: 432534, time: 65876586 }]
        },
        {
            "id": 65432445,
            "title": "The Chamber",
            "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": [4.0],
            "bookmark": []
        },
        {
            "id": 675465,
            "title": "Fracture",
            "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": [5.0],
            "bookmark": [{ id: 432534, time: 65876586 }]
        }
    ];
    const releaseDetails = newReleases.map(({ id, title }) => ({ id, title }));

    console.log(releaseDetails);
}());


(function () {
    // в) Создать свою реализацию функции filter для массивов

    Array.prototype.filter = function (predicateFunction) {
        const newArray = [];

        for (let i = 0; i < this.length; i++) {
            predicateFunction(this[i], i, this) && newArray.push(this[i]);
        }

        return newArray;
    };

    const filteredArray = [1, 2, 3].filter(x => x > 2);

    console.log(JSON.stringify(filteredArray) === "[3]");
}());


(function () {
    // г) Выведите массив ids для видео у которых рейтинг 5.0. В качестве входных данных
    // используйте newReleases из предыдущих заданий.

    const newReleases = [
        {
            "id": 70111470,
            "title": "Die Hard",
            "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": [4.0],
            "bookmark": []
        },
        {
            "id": 654356453,
            "title": "Bad Boys",
            "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": [5.0],
            "bookmark": [{ id: 432534, time: 65876586 }]
        },
        {
            "id": 65432445,
            "title": "The Chamber",
            "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": [4.0],
            "bookmark": []
        },
        {
            "id": 675465,
            "title": "Fracture",
            "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": [5.0],
            "bookmark": [{ id: 432534, time: 65876586 }]
        }
    ];

    const bestVideos = newReleases
        .filter(({ rating }) =>
            rating.every(val => val === 5)
        )
        .map(({ id }) => id);

    console.log(bestVideos);
}());


const taskD = (function () {
    /** 
     * д) Привести данные к указанному виду, boxarts преобразовать в boxart где значение
     * это ссылка на видео размером 150х200. Используйте следующие функции filter, map, concat.

     * ожидаемый результат
     * [
     * {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com / images / 2891 / DieHard150.jpg" }
     * {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com / images / 2891 / BadBoys150.jpg" },
     * {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com / images / 2891 / TheChamber150.jpg" },
     * {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com / images / 2891 / Fracture150.jpg" },
     * ];
     */
    const movieLists = [
        {
            name: "Instant Queue",
            videos: [{
                "id": 70111470,
                "title": "Die Hard",
                "boxarts": [
                    {
                        width: 150,
                        height: 200,
                        url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
                    },
                    {
                        width: 200,
                        height: 200,
                        url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg"
                    }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxarts": [
                    {
                        width: 200,
                        height: 200,
                        url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg"
                    },
                    {
                        width: 150,
                        height: 200,
                        url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg"
                    }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }]
        },
        {
            name: "New Releases",
            videos: [{
                "id": 65432445,
                "title": "The Chamber",
                "boxarts": [
                    {
                        width: 150,
                        height: 200,
                        url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg"
                    },
                    {
                        width: 200,
                        height: 200,
                        url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg"
                    }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxarts": [
                    {
                        width: 200,
                        height: 200,
                        url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
                    },
                    {
                        width: 150,
                        height: 200,
                        url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
                    },
                    {
                        width: 300,
                        height: 200,
                        url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
                    }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }]
        }
    ];

    const updateList = (list = movieLists) => (
        list
            .reduce((result, { videos }) => result.concat(videos), [])
            .map(({ boxarts, id, title }) => {
                var url = boxarts.find(({ width, height }) => width === 150 && height).url;

                return { id, title, boxarts: url };
            })
    )

    return updateList;
}());

console.log(taskD());


(function () {
    // д) Создать свою реализацию функции reduce для массивов

    Array.prototype.reduce = function (combiner, initialValue) {
        var accumulator = initialValue || this.shift();

        for (let i = 0; i < this.length; i++) {
            accumulator = combiner(accumulator, this[i], i, this);
        }

        return accumulator;
    }

    const sum1 = [1, 2, 3].reduce((memo, item) => memo + item);
    const sum2 = [1, 2, 3].reduce((memo, item) => memo + item, 10);

    console.log(sum1 === 6);
    console.log(sum2 === 16);
}());


(function () {
    // е) С помощью функции reduce получить максимальное значение в массиве

    const ratings = [2, 3, 1, 4, 5];
    const maxRatings = ratings.reduce((max, current) => max > current ? max : current);

    console.log(maxRatings);
}());


const taskJ = (function () {
    // ж) С помощью функций map, reduce, вывести url у которого самая большая площадь

    const boxarts = [
        {
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
        },
        {
            width: 150,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
        },
        {
            width: 300,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
        },
        {
            width: 425,
            height: 150,
            url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"
        }
    ];

    const getUrl = (list = boxarts) => (
        list
            .map(boxart => ({ ...boxart, suqare: (boxart.width * boxart.height) }))
            .reduce((max, current) => max.suqare > current.suqare ? max : current)
            .url
    );

    return getUrl;
}());

console.log(taskJ());


(function () {
    // з) Преобразуйте массив в объект используя функцию reduce.
    // Используйте начальное значение (второй параметр)

    const videos = [
        {
            "id": 65432445,
            "title": "The Chamber"
        },
        {
            "id": 675465,
            "title": "Fracture"
        },
        {
            "id": 70111470,
            "title": "Die Hard"
        },
        {
            "id": 654356453,
            "title": "Bad Boys"
        }
    ];

    const newVideos = videos.reduce((result, { id, title }) => ({ ...result, [id]: title }), {});

    console.log(newVideos);
}());
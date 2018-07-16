Задание 5

// Что не так с этим кодом ? Предложить исправленную версию.
// 1)
loadVideosAsync().then(function (videos) {
    loadMetaAsync().then(function (meta) {
        DoSomething(videos, meta);
    });
});

// 2) 
function anAsyncCall() {
    var promise = doSomethingAsync();
    promise.then(function () {
        somethingComplicated();
    });
    return promise;
};

// 3) 
db.getAllDocs().then(function (result) {
    result.rows.forEach(function (row) {
        db.remove(row.doc);
    });
}).then(function () {
    // All docs must be removed!
});

// 4) 
doAsync().then(function () {
    throw new Error('nope');
}, function (err) {
    // I didn't catch your error! :(
});
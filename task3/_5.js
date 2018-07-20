// Что не так с этим кодом ? Предложить исправленную версию.

(function () {
    /** 
     * 1)
     * loadVideosAsync().then(function (videos) {
     *     loadMetaAsync().then(function (meta) {
     *         DoSomething(videos, meta);
     *     });
     * });
     */
    Promise.all([loadVideosAsync(), loadMetaAsync()])
        .then(function ([videos, meta]) {
            DoSomething(videos, meta);
        });
}());


(function () {
    /** 
     * 2) 
     * function anAsyncCall() {
     *     var promise = doSomethingAsync();
     *     promise.then(function () {
     *         somethingComplicated();
     *     });
     *     return promise;
     * };
     */
    

    function anAsyncCall() {
        
      return doSomethingAsync().then((res) => {
            somethingComplicated();
            return res;
        });
    };
}());


(function () {
    /** 
     * 3) 
     * db.getAllDocs().then(function (result) {
     *     result.rows.forEach(function (row) {
     *         db.remove(row.doc);
     *     });
     * }).then(function () {
     *     // All docs must be removed!
     * });
     */
    db.getAllDocs().then(function (result) {
        
        return Promise.all(result.rows.map(function (row) {
        
            return db.remove(row.doc);
        }));
    })
    .then(function () {
        // All docs are removed!
    });
}());


(function () {
    /** 
     * 4) 
     * doAsync().then(function () {
     *     throw new Error('nope');
     * }, function (err) {
     *      // I didn't catch your error! :(
     * });
     */
    function doAsync() {
        
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                resolve('result');
            }, 1000);
        });
    }

    doAsync()
        .then(function () { throw new Error('nope'); })
        .catch(function (err) { console.log(err); });
}());    
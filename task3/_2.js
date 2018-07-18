(function () {
    var Robot = function (name) {
        this.name = name;
    }

    function add(op1, op2) {
        this.name = this.name || "Human";
        return this.name + " can count to " + (op1 + op2);
    }

    var voltron = new Robot("Voltron");

    // #1 Выведите результат сложения 0 и 1
    // > Human can count to 1

    var name = add(0, 1);
    console.log(name);


    // #2 Выведи результат сложения Voltron 1 и 2 используя call
    // > Voltron can count 3

    var nameCall = add.call(voltron, 1, 2);
    console.log(nameCall);


    // #3 Выведи результат сложения Voltron 20 и 30 используя apply
    // > Voltron can count 50

    var nameApply = add.apply(voltron, [20, 30]);
    console.log(nameApply);


    // #4 Выведи результат сложения Voltron «drinking» и «beer» используя bind
    // > Voltron can count drinkingbeer

    var addVoltron = add.bind(voltron);

    function showName() {
        setTimeout(function () {
            console.log(addVoltron('drinking', 'beer'));
        }, 1000);
    }

    showName();
}());


(function () {
    // #5 Написанный вами код должен вывести console.log имени которое лежит в
    // this.name пятью разными способами
    function Robot(name) {
        this.firstName = name;

        this.sayName = function (method) {
            alert(this.firstName + ' -- ' + method);
        }
    }

    var superman = new Robot("Superman");

    //1
    setTimeout(superman.sayName.bind(superman, 'bind'), 0);

    //2
    setTimeout(superman.sayName.call(superman, 'call'), 0);

    //3
    setTimeout(superman.sayName.apply(superman, ['apply']), 0);

    //4 
    setTimeout(() => {
        superman.sayName('Hack 1')
    }, 0);

    //5 
    function Robot2(name) {
        var that = this; // Save this

        that.firstName = name;

        that.sayName = function (method) {
            alert(that.firstName + ' -- ' + method);
        }
    }

    var superman2 = new Robot2("Superman");

    setTimeout(function () {
        superman2.sayName('Save this')
    }, 0);

}());
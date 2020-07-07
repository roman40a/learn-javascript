describe("multiplyNumeric", function () {

    it("умножает все числовые свойства объекта на 2", function () {
        let menu = {
            width: 200,
            height: 300,
            title: "My menu"
        };

        let result = multiplyNumeric(menu);

        assert.equal(menu.width, 400);
        assert.equal(menu.height, 600);
        assert.equal(menu.title, "My menu");
    });



});
(function () {
    function NoteListDouble() {
        this.addCallCount = 0;
    }
    NoteListDouble.prototype.add = function (string) {
        console.log('add called');
        this.addCallCount++;
    };
    NoteListDouble.prototype.getCount = function () {
        return this.addCallCount;
    };
    NoteListDouble.prototype.view = function () {
        return "";
    };

    function DocumentDouble() {
        this.innerHTML = "";
    }

    let element = new DocumentDouble();
    let notedouble = new NoteListDouble();

    let controller = new NoteController(notedouble);
    assert.isTrue("The NoteController calls the doubles add function once", notedouble.getCount() === 1);
    controller.update(element);
    assert.isTrue("The NoteController can update the page", element.innerHTML !== "");
})();

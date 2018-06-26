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

    let notedouble = new NoteListDouble();

    new NoteController(notedouble);
    assert.isTrue("The NoteController calls the doubles add function once", notedouble.getCount() === 1);
})();
(function (exports) {
    function SingleNoteView(note){
        this._note = note;
    }
    exports.SingleNoteView = SingleNoteView;
})(this);

SingleNoteView.prototype.text = function () {
    return "<div>" + this._note.text() + "</div>";
};
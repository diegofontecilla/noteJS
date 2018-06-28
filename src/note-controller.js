'use strict';
(function (exports) {
    function NoteController(noteListModel){
        // this._view = new NoteListView(noteListModel);
        this.notelistmodel = noteListModel;
    }
    exports.NoteController = NoteController;
})(this);

NoteController.prototype.update = function (element) {
    this._view = new NoteListView(this.notelistmodel);
    element.innerHTML = this._view.text();
};
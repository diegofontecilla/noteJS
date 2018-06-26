'use strict';
(function (exports) {
    function NoteController(noteListModel){
        noteListModel.add('Favourite drink: seltzer');
        this._view = new NoteListView(noteListModel);
    }
    exports.NoteController = NoteController;
})(this);

NoteController.prototype.update = function () {
    const app = document.getElementById("app");
    app.innerHTML = this._view.text();
};
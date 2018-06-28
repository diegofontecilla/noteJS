'use strict';
(function (exports) {
    function NoteController(noteListModel){
        this.notelistmodel = noteListModel;
    }

    function listenForChange(notelist){
        window.addEventListener("hashchange", function(){
            showNote(notelist);
        });
    }

    function showNote(notelist){
        let noteID = getNoteID(window.location);
        let note = notelist.view()[noteID-1];
        let noteview = new SingleNoteView(note);
        document.getElementById("app").innerHTML = noteview.text();
    }

    function getNoteID(location){
        return location.hash.split('#')[1];
    }

    NoteController.prototype.update = function (element) {
        this._view = new NoteListView(this.notelistmodel);
        element.innerHTML = this._view.text();
        listenForChange(this.notelistmodel);
    };

    exports.NoteController = NoteController;
})(this);




'use strict';
(function (exports) {
   function NoteListView(noteList){
      this._html = "<ul>";

      for(let i in noteList.view()){
         this._html = this._html + "<li><div>" + noteList.view()[i].text() + "</div></li>";
      }

      this._html = this._html + "</ul>";
   }
   exports.NoteListView = NoteListView;
})(this);

NoteListView.prototype.text = function () {
    return this._html;
};
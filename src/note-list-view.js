'use strict';
(function (exports) {

    function reduceLength(text) {

        console.log(text);
        return text.substr(0, 20);
    }

    function NoteListView(noteList){
        this._html = "<ul>";

        for(let i in noteList.view()){
            if(noteList.view().length === 0) {
                break;
            }

            this._html = this._html + "<li><a href = '#" + String(Number(i)+1) + "'>" + reduceLength(noteList.view()[i].text()) + "</a></li>";
        }

        this._html = this._html + "</ul>";
    }
    exports.NoteListView = NoteListView;
})(this);

NoteListView.prototype.text = function () {
    return this._html;
};
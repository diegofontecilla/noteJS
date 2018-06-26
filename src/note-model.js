'use strict';
(function (exports) {
    function NoteModel(text) {
        this._text = text;
    }
    exports.NoteModel = NoteModel;
})(this);

NoteModel.prototype.text = function () {
    return this._text;
};




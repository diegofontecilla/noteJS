(function () {
   let notelist = new NoteListModel();
   notelist.add('test note 1');
   notelist.add('test note 2');
   let notelistview = new NoteListView(notelist);

   let expectedText = "<ul><li><div>test note 1</div></li><li><div>test note 2</div></li></ul>";
   assert.isTrue('NoteListView returns html given notes inputted', notelistview.text() === expectedText);
})();
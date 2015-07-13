Template.adminJournalConfig.helpers({

  collection: function () {
    return Jrnl.collections.JournalEntries;
  },

  selectedEntry: function () {
    var selectedEntryId = Jrnl.session.get('selectedEntryId'), entry;
    if (selectedEntryId) {
      entry = Jrnl.collections.JournalEntries.findOne({ _id: selectedEntryId });
    }
    return entry;
  },

  formType: function () {
    var formType = 'insert';
    if (Jrnl.session.get('selectedEntryId')) {
      formType = 'update';
    }
    return formType;
  },

  previewContent: function () {
    if (Jrnl.session.get('previewContent')) {
      return Jrnl.session.get('previewContent');
    }
  }

});

Template.adminJournalConfig.events({

  'keyup textarea': function (e) {
    var content = $(e.currentTarget).val();
    Jrnl.session.set('previewContent', content);
  }

})

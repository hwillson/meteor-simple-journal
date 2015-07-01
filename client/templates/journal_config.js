Template.journalConfig.onRendered(function () {
  $('.jc').hide();
});

Template.journalConfig.helpers({

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
  }

})

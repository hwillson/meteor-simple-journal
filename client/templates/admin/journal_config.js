Template.adminJournalConfig.onCreated(function () {
  if (Jrnl.session.get('selectedEntryId')) {
    this.subscribe('journal_entry', Jrnl.session.get('selectedEntryId'));
  }
});

Template.adminJournalConfig.onRendered(function () {
  refreshPreview();
});

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

  previewTitle: function () {
    if (Jrnl.session.get('previewTitle')) {
      return Jrnl.session.get('previewTitle');
    }
  },

  previewContent: function () {
    if (Jrnl.session.get('previewContent')) {
      return Jrnl.session.get('previewContent');
    }
  }

});

Template.adminJournalConfig.events({

  'keyup input': function (e) {
    var title = $(e.currentTarget).val();
    Jrnl.session.set('previewTitle', title);
  },

  'keyup textarea': function (e) {
    var content = $(e.currentTarget).val();
    Jrnl.session.set('previewContent', content);
  }

});

var refreshPreview = function () {
  Jrnl.session.set('previewTitle', $('input').val());
  Jrnl.session.set('previewContent', $('textarea').val());
};

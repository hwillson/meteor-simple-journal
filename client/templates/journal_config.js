Template.journalConfig.onRendered(function () {
  $('.jc').hide();
});

Template.journalConfig.helpers({

  collection: function () {
    return Jrnl.collections.JournalEntries;
  }

})

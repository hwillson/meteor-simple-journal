Template.journalEntries.helpers({

  isReady: function (sub) {
    if (sub) {
      return FlowRouter.subsReady(sub);
    } else {
      return FlowRouter.subsReady();
    }
  },

  entriesExist: function () {
    return Jrnl.collections.JournalEntries.find().count();
  },

  entries: function () {
    return Jrnl.collections.JournalEntries.find();
  }

});

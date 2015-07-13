Template.publicJournalEntries.onCreated(function () {
  this.subscribe('journalEntries');
});

Template.publicJournalEntries.helpers({

  // isReady: function (sub) {
  //   if (sub) {
  //     return FlowRouter.subsReady(sub);
  //   } else {
  //     return FlowRouter.subsReady();
  //   }
  // },

  entriesExist: function () {
    return Jrnl.collections.JournalEntries.find().count();
  },

  entries: function () {
    return Jrnl.collections.JournalEntries.find({}, {
      sort: {
        createdAt: -1
      }
    });
  }

});

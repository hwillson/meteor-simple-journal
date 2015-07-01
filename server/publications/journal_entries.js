Meteor.publish('journalEntries', function () {
  return Jrnl.collections.JournalEntries.find({}, {
    sort: {
      createdAt: -1
    }
  });
});

Meteor.publish('journalEntries', function () {
  return Jrnl.collections.JournalEntries.find();
});

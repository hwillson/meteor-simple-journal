Meteor.publish('journal_entry', function (id) {
  return Jrnl.collections.JournalEntries.find({ _id: id});
});

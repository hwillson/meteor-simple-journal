Jrnl.collections.JournalEntries = new Mongo.Collection('journal_entries');

Jrnl.collections.JournalEntries.allow({
  insert: function (userId) {
    return userId;
  },
  update: function (userId) {
    return userId;
  },
  remove: function (userId) {
    return userId;
  }
});

Jrnl.collections.JournalEntries.attachBehaviour('timestampable');

Jrnl.schemas = {
  JournalEntrySchema: new SimpleSchema({
    title: {
      type: 'String'
    },
    body: {
      type: 'String',
      autoform: {
        afFieldInput: {
          type: 'textarea'
        }
      }
    }
  })
};

Jrnl.collections.JournalEntries.attachSchema(Jrnl.schemas.JournalEntrySchema);

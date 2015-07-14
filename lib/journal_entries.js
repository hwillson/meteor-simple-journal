Jrnl.collections.JournalEntries = new Mongo.Collection('journal_entries');


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

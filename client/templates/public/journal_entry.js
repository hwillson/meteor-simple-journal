Template.publicJournalEntry.helpers({

  createdDate: function () {
    return moment(this.createdAt).format('YYYY-MM-DD hh:mm:ss A');
  }

});

Template.publicJournalEntry.events({

  'click .je-remove-btn': function () {
    if (window.confirm('Really?')) {
      Jrnl.collections.JournalEntries.remove({ _id: this._id });
    }
  },

  'click .je-edit-btn': function () {
    var $jc = $('.jc');
    Jrnl.session.set('selectedEntryId', this._id);
    if ($jc.is(':hidden')) {
      $jc.show();
    }
  }

});

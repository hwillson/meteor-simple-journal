Template.publicJournalEntry.helpers({

  createdDate: function () {
    return moment(this.createdAt).format('YYYY-MM-DD');
  }

});

Template.publicJournalEntry.events({

  'click .date': function (event) {
    $(event.currentTarget).parent().find('.admin-buttons').toggle();
  },

  'click .je-remove': function () {
    if (window.confirm('Really?')) {
      Jrnl.collections.JournalEntries.remove({ _id: this._id });
    }
  },

  'click .je-edit': function () {
    FlowRouter.go('/admin/' + this._id);
  }

});

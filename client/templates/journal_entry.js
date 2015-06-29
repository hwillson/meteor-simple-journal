Template.journalEntry.helpers({
  createdDate: function () {
    return moment(this.createdAt).format('YYYY-MM-DD hh:mm:ss A');
  }
});

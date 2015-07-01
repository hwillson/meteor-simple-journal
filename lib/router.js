FlowRouter.route('/', {
  subscriptions: function (params, queryParams) {
    this.register('journalEntries', Meteor.subscribe('journalEntries'));
  },
  action: function (params, queryParams) {
    FlowLayout.render('layout', {
      config: 'journalConfig',
      body: 'journalEntries'
    });
  }
});

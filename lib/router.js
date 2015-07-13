FlowRouter.route('/', {
  action: function (params, queryParams) {
    FlowLayout.render('commonLayout', {
      body: 'publicJournalEntries'
    });
  }
});

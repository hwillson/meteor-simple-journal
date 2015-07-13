FlowRouter.route('/', {
  action: function (params, queryParams) {
    FlowLayout.render('commonLayout', {
      body: 'publicJournalEntries'
    });
  }
});

FlowRouter.route('/admin', {

  triggersEnter: [
    function (context, redirect) {
      if (!Meteor.userId()) {
        redirect('/login');
      }
    }
  ],

  action: function (params, queryParams) {
    FlowLayout.render('commonLayout', {
      body: 'adminJournalConfig'
    });
  }

});

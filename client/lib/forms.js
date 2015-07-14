AutoForm.hooks({
  journalEntryForm: {
    onSuccess: function (formType, result) {
      sAlert.success('Published!');
      if (formType === 'insert') {
        Jrnl.session.set('previewTitle', null);
        Jrnl.session.set('previewContent', null);
      }
    }
  }
});

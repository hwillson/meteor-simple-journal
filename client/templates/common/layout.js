Template.commonLayout.events({

  'click a.config': function () {
    var $jc = $('.jc');
    Jrnl.session.set('selectedEntryId', null);
    if ($jc.is(':hidden')) {
      $jc.show();
    } else {
      $jc.hide();
    }
  }

})

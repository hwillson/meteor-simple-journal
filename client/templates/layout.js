Template.layout.events({

  'click a.config': function () {
    var $jc = $('.jc');
    if ($jc.is(':hidden')) {
      $jc.show();
    } else {
      $jc.hide();
    }
  }

})

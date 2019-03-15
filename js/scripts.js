var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();

$('select').change(function(){
  var me = $(this),
      val = me.val(),
      target = me.parents('tr').find('span');
  target.text(val);
})

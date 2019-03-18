/**
* Click handler for _/includes/component-demo.html
*/
function toggleDemoMode(e, mode) {
  // remove instances of 'sr-only' and 'active'
  $('.uwds-demo .active').removeClass('active');
  $('.uwds-demo > div:not(".sr-only")').addClass('sr-only');

  // add 'sr-only' and 'active' to the specified mode/button
  $('.uwds-demo__' + mode).removeClass('sr-only');
  $(e.target).addClass('active');
}

/*-------------------------------------------
  @author: @_LinuxJSaholic
  @year: 2016
  @name: app.js
---------------------------------------------*/

$(document).ready(function () {
  $('body').on('click', '[data-d3-action]', function (e) {
    e.preventDefault();

    // var $this = $(this);
    var action = $(this).data('d3-action');

    switch (action) {
      /*-------------------------------------------
        Say Hello
      ---------------------------------------------*/
      case 'say-hello':
        console.log('Hi');
        break;
    }
  });
});

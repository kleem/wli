// Generated by CoffeeScript 1.3.3
(function() {

  $(function() {
    var _this = this;
    $('body').append(new fk.TextInput({
      id: 'search_box',
      input_id: 'search',
      submit_btn: new fk.Button({
        label: 'Identify'
      })
    }));
    return $('#search_box').bind('submit', function(event, text) {
      return console.log(text);
    });
  });

}).call(this);
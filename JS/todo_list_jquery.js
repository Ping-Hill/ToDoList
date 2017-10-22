$(function() {
$('form').submit(function (event){
  event.preventDefault();
  if ($('#newTodo').val().trim()) {
    if ($('#emptyList')) {
      $('#emptyList').remove()
    }
    var todoArray = $('#newTodo').val().trim().split(",");
    todoArray.forEach(function (task) {
      var todo = $('<li><label><input type="checkbox"><span>' + task.trim() +'</span></label></li>');

        todo.appendTo($('#todoList'));
    })
  $('#newTodo').val("");
  }



})



});

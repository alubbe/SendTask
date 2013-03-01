$(document).ready(function(){
  //Generate new task 
  $("form").submit(function() {
    var x=$("#taskinput");
    if (x.val() != x.attr('placeholder') && x.val()!="") {
      $("#taskcontainer").append(
        '<div class="task">'
        +x.val()+
        '</div><a class="taskcancel" href="#"><img src="cancel.png" /></a>'
        );
      x.val('').focus();
      
      $(".task").click(function(){
        $(this).attr("contentEditable",true).removeClass("divunedit").addClass("divedit").focus();
      }).blur(function(){
        $(this).attr("contentEditable",false).removeClass("divedit").addClass("divunedit");
      });

      $(".taskcancel").click(function(){
        $(this).prev().remove();
        $(this).remove();
      });
    }
    return false; //prevent the form from being submitted
  });

  //Placeholder browser intercompatibility
  $('[placeholder]').focus(function() {
    var input = $(this);
    if (input.val() == input.attr('placeholder')) {
      input.val('');
      input.removeClass('placeholder');
    }
  }).blur(function() {
    var input = $(this);
    if (input.val() == '' || input.val() == input.attr('placeholder')) {
      input.addClass('placeholder');
      input.val(input.attr('placeholder'));
    }
  }).blur();
  $('[placeholder]').parents('form').submit(function() {
    $(this).find('[placeholder]').each(function() {
      var input = $(this);
      if (input.val() == input.attr('placeholder')) {
        input.val('');
      }
    })
  });

  //Start view with task input filed focussed
  $("#taskinput").focus();
})
$("#sendForm").on("click", function(){

 var name = $("#name").val();
 var email = $("#email").val();
 var service = $("#service").val();
 var message = $("#message").val();

 if(name == "") {
  $("#name-error").text("Name");
  return false;
 } else if(email == ""){
  $(".name-error").text("Email");
  return false;
  } else if(message == ""){
  $(".name-error").text("Message");
  return false;
  } 

$("#name-error").text("");

 $.ajax({
    url: 'ajax/mail.php',
    type: 'POST',
    cache: false,
    data: { 'name': name, 'email': email, 'service': service, 'message': message },
    dataType: 'html',
    beforeSend: function(){
      $("#sendForm").prop("disabled", true);
    },
    success: function(data) {
      if (!data){
        alert("There were errors, the message was not sent!");
        $("#name-error").text("");
      }
      else{
        $("#mailform").trigger("reset");
        $("#name-error").text("");
      }

      $("#sendForm").prop("disabled", false);
    }
    });

});
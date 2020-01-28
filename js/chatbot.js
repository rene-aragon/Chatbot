var firstMessage = true;

$("#showhide").click(function()
{
    var taskbar = document.getElementById("window");
    $("#chatbox-area").slideToggle();

    if(taskbar.className == "fa fa-chevron-down")
      taskbar.className = "fa fa-chevron-up";
    else
      taskbar.className = "fa fa-chevron-down";
});

$("#sendButton").click(function(){sendMessage()});

function sendMessage()
{
  var textbox = document.getElementById("chatTextarea");
  if(textbox.value == "")
    return;

  var conversation = document.getElementById("conversation");

  if(firstMessage)
  {
    conversation.innerHTML += "<div style='width:100%; height:15px; float:right;'></div>";
    firstMessage = false;
  }

  conversation.innerHTML += "<div class='chat-message-group writer-user'><div class='chat-messages'><div class='message'>"+ textbox.value +"</div></div></div>";
  textbox.value = "";
}

function isEnter(key)
{
  if (key.keyCode === 13 && !key.shiftKey)
  {
      key.preventDefault();
      sendMessage();
  }
}

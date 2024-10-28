let mainTextInput = document.getElementsByTagName( "textarea" )[0];

document.addEventListener( "keydown", event =>
{
  if ( document.activeElement !== mainTextInput )
  {
    switch ( event.code )
    {
      case "Slash":
        mainTextInput.focus();
        event.preventDefault();
        break;
      case "Backspace":
        mainTextInput.value = "";
        mainTextInput.focus();
        event.preventDefault();
        break;
    }
  }
} );
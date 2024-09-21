document.addEventListener( "keypress", event =>
{
  if ( event.key == "/" && document.activeElement !== document.getElementsByTagName( "textarea" )[0] )
  {
    document.getElementsByTagName( "textarea" )[0].focus();
    event.preventDefault();
  }
} );
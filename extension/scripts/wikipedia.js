document.addEventListener( "keypress", event =>
{
    if ( event.key == "/" && document.activeElement !== document.getElementById( "searchInput" ) )
    {
      document.getElementById( "searchInput" ).focus();
      event.preventDefault();
    }
} );
let mainTextInput = document.getElementsByTagName( "textarea" )[0];
let clearButton = document.querySelector( "button.GA2I6e" );

document.addEventListener( "keydown", event =>
{
    if ( event.repeat ) return;
    switch ( event.code )
    {
        case "Slash":
            if ( document.activeElement == mainTextInput ) return;
            mainTextInput.focus();
            event.preventDefault();
            break;
        case "Backspace":
            if ( document.activeElement == mainTextInput ) return;
            //mainTextInput.value = "";
            clearButton.click();
            mainTextInput.focus();
            event.preventDefault();
            break;
        case "Escape":
            console.log( "iasdfh" );
            clearButton.focus();
            event.preventDefault();
    }
} );
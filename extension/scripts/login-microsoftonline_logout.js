let innerDiv = document.getElementsByClassName( "inner" )[0];


let signInButton = document.createElement( "button" );
signInButton.innerText = "Back to sign-in";
signInButton.className = "button primary";
signInButton.onclick = function () { window.location = "https://outlook.office.com"; }

innerDiv.appendChild( signInButton );

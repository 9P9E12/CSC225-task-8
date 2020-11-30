jQuery(document).ready(function($){
    $( '.converter' ).click(function( event ) {
        var input = document.getElementById('inputText');
        var textInput = input.value;
        if(textInput && textInput.trim()){
            $('.tasks').prepend('<p>' + input.value + '</p>');
        }
    });
});
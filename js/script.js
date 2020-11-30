jQuery(document).ready(function($){
    $( '.converter' ).click(function( event ) {
        var input = document.getElementById('inputText');
        $('.tasks').prepend('<p>' + input + '<p>');
        console.log('button was hit');
    });
});
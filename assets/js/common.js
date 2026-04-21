$(document).ready(function() {
    $('a.abstract').click(function(event) {
        event.preventDefault();
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function(event) {
        event.preventDefault();
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
    $('a').removeClass('waves-effect waves-light');
});

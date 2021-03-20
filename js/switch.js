var $content = $('.menu-content');

function showContent(type) {
    // this assumes that you really must select
    // the content using a class and not an ID (which you've 
    // referenced in the href)
    $content.hide().filter('.' + type).show();
}

$('.menu').on('click', '.menu-btn', function (e) {
    // get the type to pass to showContent by grabbing
    // the hash from the anchor href and removing the first
    // character (the #)
    showContent(e.currentTarget.hash.slice(1));
    e.preventDefault();
}); 
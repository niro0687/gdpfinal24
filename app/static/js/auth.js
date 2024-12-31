

$(window).on('load', function(e) {
    let height = window.innerHeight;
    $("#container-auth").css('height', height);
})

$(window).on('resize', function(e) {
    let height = window.innerHeight;
    $("#container-auth").css('height', height);
});
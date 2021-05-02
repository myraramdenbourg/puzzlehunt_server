$(function() {
    var p_height = 400,
        p_width = 300,
        l_height = 300,
        l_width = 400;
    var paintings = [
        {
            'url': '/static/huntserver/bg/lisa-lisa.webp',
            'h': p_height,
            'w': p_width
        },
        {
            'url': '/static/huntserver/bg/picasso.png',
            'h': l_height,
            'w': l_width
        },
        {
            'url': '/static/huntserver/bg/scary.png',
            'h': l_height,
            'w': l_width
        },
        {
            'url': '/static/huntserver/bg/spanish-inquisition.png',
            'h': l_height,
            'w': l_width
        },
        {
            'url': '/static/huntserver/bg/starry-night.png',
            'h': l_height,
            'w': l_width
        },
        {
            'url': '/static/huntserver/bg/time.png',
            'h': l_height,
            'w': l_width
        },
        {
            'url': '/static/huntserver/bg/van-gogh.png',
            'h': p_height,
            'w': p_width
        },
        {
            'url': '/static/huntserver/bg/last-sup.png',
            'h': l_height,
            'w': 400
        },
        {
            'url': '/static/huntserver/bg/doggo.png',
            'h': l_height,
            'w': l_width
        },
        {
            'url': '/static/huntserver/bg/couple.png',
            'h': p_height,
            'w': p_width
        },
        {
            'url': '/static/huntserver/bg/appleman.png',
            'h': p_height,
            'w': p_width
        },
        {
            'url': '/static/huntserver/bg/wave.png',
            'h': l_height,
            'w': l_width
        },
        {
            'url': '/static/huntserver/bg/vermeer.png',
            'h': p_height,
            'w': p_width
        }
    ]
    var output = "";
    for (var i = 0; i < paintings.length; i++) {
        output += '<div class="item" style="' +
            'background: url(' + paintings[i].url + ');' +
            'height: ' + paintings[i].h + 'px;' +
            'width: ' + paintings[i].w + 'px;' +
            '"></div>';
    }
    $("#painting-wrapper").append(output);

    var wall = new Freewall("#painting-wrapper");
    wall.fitWidth();
});
$(document).ready(function() {
    $('#toggle').click(function() {
        if ($('#lista').css('display') === 'none') {
            $('#lista').show(400)
            $('#centro').css('marginLeft', '3%')
            $('#centro').css('transition', 'all .4s')
            $('#principal').animate({ backgroundPositionX: '-100%' })
            $('#principal').css('transition', 'all .1s');
        } else {
            $('#lista').hide(400)
            $('#centro').show(400)
            $('#principal').animate({ backgroundPositionX: '-20%' })
            $('#centro').css('marginLeft', '20%')
        }
    });

    $('.a_portafolio').click(function(e) {
        e.preventDefault();
        if ($('#portafolio').css('display') === 'none' || $('#contacto').css('display') === 'flex' || $('#sobre-mi').css('display') === 'flex') {
            $('#contacto').hide(400)
            $('#sobre-mi').hide(400)
            $('#portafolio').show(400)
        }
    })
    $('.a_contacto').click(function(e) {
        e.preventDefault();
        if ($('#contacto').css('display') === 'none' || ($('#portafolio').css('display') === 'flex' || $('#sobre-mi').css('display') === 'flex')) {
            $('#portafolio').hide(400)
            $('#sobre-mi').hide(400)
            $('#contacto').show(400)

        }
    })
    $('.a_sobre').click(function(e) {
        e.preventDefault();
        if ($('#sobre-mi').css('display') === 'none' || $('#contacto').css('display') === 'flex' || $('#portafolio').css('display') === 'flex') {
            $('#portafolio').hide(400)
            $('#contacto').hide(400)
            $('#sobre-mi').show(400)

        }
    })

    $('.gmail').mouseenter(function() {
        $('#principal').css('background-color', '#f44336')
        $('.contact-data a').css('color', '#fff')
    })
    $('.gmail').mouseleave(function() {
        $('#principal').css('background-color', '#e5e6e6')
        $('.contact-data a').css('color', '#00150f')

    })
    $('.linkedin').mouseenter(function() {
        $('#principal').css('background-color', '#0077b7')
        $('.contact-data a').css('color', '#fff')

    })
    $('.linkedin').mouseleave(function() {
        $('#principal').css('background-color', '#e5e6e6')
        $('.contact-data a').css('color', '#00150f')

    })
    $('.whatsapp').mouseenter(function() {
        $('#principal').css('background-color', '#64b161')
        $('.contact-data a').css('color', '#fff')

    })
    $('.whatsapp').mouseleave(function() {
        $('#principal').css('background-color', '#e5e6e6')
        $('.contact-data a').css('color', '#00150f')

    })
})
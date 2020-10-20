$(function fadeInOut() {
    $('.slide figure img').not(':first').hide();
    var idx = 0;
    var loop;

    //img change
    function fade(p) {
        $('.slide figure img').eq(idx).fadeOut(1500);
        (p == 'next' || p == undefined) ? idx++ : idx--;
        update();
        $('.slide figure img').eq(idx).fadeIn(1500);
    }
    //idx setting
    function update() {
        var len = $('.slide figure img').length;
        if (idx >= len) idx = 0;
        if (idx == -1) idx = len - 1;
        $('code').text('idx = ' + idx);
    }
    //auto clear
    function clearFun() {
        clearInterval(loop);
    }
    //auto fade
    function interFun() {
        loop = setInterval(fade, 3000);
    }
    //prev next
    function btn() {
        if ($(this).index() == 0) {
            fade('prev');
        } else {
            fade('next');
        }
    }

    //mouse over out (auto start, auto stop)
    $('.fade div, span').on({
        mouseenter: clearFun,
        mouseleave: interFun
    });

    //prev,next click event
    $('span').on('click', btn);

    interFun();
});
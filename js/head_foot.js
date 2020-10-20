$(function () {
    //start    
    $('header').load('/inc_head_foot.html header .header', header);
    $('footer').load('/inc_head_foot.html footer');

    function header() {
        const head = document.querySelector('.header');
        const nav = document.querySelector('nav');
        const gnb = document.querySelector('.gnb');

        head.addEventListener('click', function () {
            head.classList.toggle('active');
            nav.classList.toggle('active');
            gnb.classList.toggle('active');
        });
    }

    $('.header nav a').on('click', function (e) {
        e.preventDefault();
        var type = $(this).attr('href');

        $('.hailli nav a').removeClass('active');
        $(this).addClass('active');
    });

    $('.header .gnb a').on('click', function (e) {
        e.preventDefault();
        var type = $(this).attr('href');

        $('.header .gnb a').removeClass('active');
        $(this).addClass('active');
    });
    //end 
});

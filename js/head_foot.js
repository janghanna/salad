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


        $('.header nav a').on('click', function (e) {
            e.preventDefault();
            location.href = e.target.getAttribute('href')

            $('.hailli nav a').removeClass('active');
            $(this).addClass('active');
        });

        $('.header .gnb a').on('click', function (e) {
            e.preventDefault();
            location.href = e.target.getAttribute('href')

            $('.header .gnb a').removeClass('active');
            $(this).addClass('active');
        });

        //end 

        //메뉴보여주기
        //$(document) = 해당 페이지 중에서 
        //$('') = 이 대상중에서
        $(document).on('mouseenter', 'nav', function () {
            $('.sub').stop().slideDown(100);
        });
        //stop넣으면 오르락내리락X / mouseover보다 enter, leave

        $(document).on('mouseleave', 'nav', function () {
            $('.sub').stop().slideUp(100);
        });

        $('nav li').on('click', function (e) {
            e.preventDefault();
            localStorage.page = $(this).index() //클릭하는 li에게 순번

            console.log(e.target.nodeName == 'A');
            //if(조건){실행문}else{실행문}
            if (e.target.nodeName == 'A') {
                location.href = e.target.getAttribute('href')
                // 클릭한 li의 href를 가져와
                console.log(e.target)
            } else {
                localStorage.removeClass('href');
            }
        });

        $('.logo a').on('click', function () {
            //index페이지를 숫자말고 다른거로 바꾸기 
            localStorage.page = 'main';
            //''빈공간 말고 다른값넣어주면 못읽음 -> active빠짐
        });

        var page = localStorage.page; //클릭한 li
        $('nav li').eq(page).find('a').addClass('active'); //클릭한 nav li의 a를 찾아 active를 넣어줄꺼야
        $('nav li .sub a').removeClass('active'); //sub에는 ㄴㄴ

        //메뉴 active 색상넣기

        // var color = $('nav ul li');
        // color.find('nav ul li').click(function () {
        //     color.removeClass('active');
        //     $(this).parent().addClass('active');
        // });

        // $('nav a').click(function(){
        //     toggleClass(".active-color");
        // });  
    }

});

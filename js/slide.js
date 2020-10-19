window.addEventListener('DOMContentLoaded', function () {
    //변수
    var s = document.querySelector('.slide figure');
    var img = document.querySelectorAll('.slide img');
//    var btn = document.querySelectorAll('.swiper button');
    var idx = 0;
    var loop;


    function prev() {
        if (idx != 0) idx--;
        s.style = "left:" + (-idx * 100) + "%";
    }

    function next() {
        if (idx != img.length) idx++;
        s.style = "left:" + (-idx * 100) + "%";
       
        if (idx == 3) {
            idx=0;
             s.style = "transition:"+"0s", "left:" + (-idx * 100) + "%";
        }
    }
   
//    function btn(){
//        if ((this).index() == 0){
//            prev('prev');
//        }else{
//            next('next');
//        }
//    }

    function clearFun() {
        clearInterval(loop);
    }

    function innerHeight() {
        loop = setInterval(next, 3000);
    }

//    btn[0].addEventListener('click', prev);
//    btn[1].addEventListener('click', next);

    innerHeight();


    console.log();
});
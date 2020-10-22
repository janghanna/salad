window.addEventListener('DOMContentLoaded', function () {

    var nameCheck = /^[가-힣]{2,6}$/;
    var phoneNumberCheck = /^01[0179][0-9]{7,8}$/;
    var emailCheck = /^[A-Za-z0-9_\.\-]/;

    //유효성검사
    $('input[type=submit]').on('click', funCheck);
    function funCheck(e) {
        e.preventDefault();

        var name = $('input[name=name]').val();        
        var email = $('input[name=email]').val();
        var phone = $('input[name=phone]').val();

        if (!nameCheck.test(name)) { feedback('이름을 확인해주세요 :-)', 'name'); return; }        
        if(!emailCheck.test(email)) {feedback('이메일을 확인해주세요 :-)','eamil'); return;}
        if (!phoneNumberCheck.test(phone)) { feedback('번호를 확인해주세요 :-)', 'phone'); return; }

        function feedback(msg, el) {
            alert(msg);
            $('input[name=' + el + ']').val('');
            $('input[name=' + el + ']').focus();
            //focus를 써서 잘못쓴 곳에 커서
        }

        send.action = "http://naver.com";
        // send.submit();
    }
});
//var pw1 = $('pw1').val();
//var pw2 = $('pw2').val();
//
//if(pw1 == pw2){같으면 실행}
//if(pw1 != pw2){같지않으면 실행}

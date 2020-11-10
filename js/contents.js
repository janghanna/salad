window.addEventListener('DOMContentLoaded', function () {

    var nameCheck = /^[가-힣]{2,6}$/;
    var phoneNumberCheck = /^01[0179][0-9]{7,8}$/;
    var emailCheck = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);

    //유효성검사
    $('input[name=send]').on('click', funCheck);
    function funCheck(e) {
        e.preventDefault();

        
            if (!$("#ck").prop("checked")) {
               //안체크 gg
                alert("필수약관에 동의하셔야합니다.");

                console.log("gg");
                return;
            }
       

        var name = $('input[name=name]').val();
        var email = $('input[name=email]').val() + "@" + $('input[name=email2]').val();
        var phone = $('input[name=phone]').val();

        if (!nameCheck.test(name)) { feedback('이름을 확인해주세요 :-)', 'name'); return; }
        if (!emailCheck.test(email)) { feedback('이메일을 확인해주세요 :-)', 'email'); return; }
        if (!phoneNumberCheck.test(phone)) { feedback('번호를 확인해주세요 :-)', 'phone'); return; }

        function feedback(msg, el) {
            alert(msg);
            $('input[name=' + el + ']').val('');
            $('input[name=' + el + ']').focus();

            //focus를 써서 잘못쓴 곳에 커서
        }
        alert("제출되었습니다. 감사합니다 ^^*")

        myform.action = "http://nana625.dothome.co.kr/togosalad";
        myform.submit();
    }
});
//var pw1 = $('pw1').val();
//var pw2 = $('pw2').val();
//
//if(pw1 == pw2){같으면 실행}
//if(pw1 != pw2){같지않으면 실행}

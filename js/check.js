$(function () {
    $("#ck").click(function () { //갠정보동의체크박스
        if ($("#ck").prop("checked")) {
            //갠정보 동의
            $("#ck").prop("checked", true); 
            //체크 hi
            console.log('hi');
        } else { //아니면ㅎㅎ
            $("input[name=choice]").prop("checked", false);
            console.log('gg');
        }
    
        if($("#ck"==true)){
            alert("개인정보처리에 동의하셨습니다.");
        }
        else{
            alert("개인정보동의를 눌러주세요.");
        }
    });
});

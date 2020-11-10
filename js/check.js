$(function () { 
    $("#select_E").change(function(){
        if($("#select_E").val()=="1"){
            $("#email2").attr("1",false);
            $("#email2").val("");
            $("#email2").focus();
        }else{
            $("#email2").val($("#select_E").val());
        }
    });
});

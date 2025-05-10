
let q = {
    1: {"title" : "문제1", "type" : "EI", "A" : "E","B":"I"},
    2: {"title" : "문제2", "type" : "EI", "A" : "E","B":"I"},
    3: {"title" : "문제3", "type" : "EI", "A" : "E","B":"I"},
    4: {"title" : "문제4", "type" : "SN", "A" : "S","B":"N"},
    5: {"title" : "문제5", "type" : "SN", "A" : "S","B":"N"},
    6: {"title" : "문제6", "type" : "SN", "A" : "S","B":"N"},
    7: {"title" : "문제7", "type" : "TF", "A" : "T","B":"F"},
    8: {"title" : "문제8", "type" : "TF", "A" : "T","B":"F"},
    9: {"title" : "문제9", "type" : "TF", "A" : "T","B":"F"},
    10: {"title" : "문제10", "type" : "JP", "A" : "J","B":"P"},
    11: {"title" : "문제11", "type" : "JP", "A" : "J","B":"P"},
    12: {"title" : "문제12", "type" : "JP", "A" : "J","B":"P"}
}


let result = {
    "ISTJ" : {"test" : "ISTJ","explain" : "연고","img" : "assets/images/kittten01.jpg"},
    "ISFJ" : {"test" : "ISFJ","explain" : "연고","img" : "assets/images/kittten02.jpg"},
    "INFJ" : {"test" : "INFJ","explain" : "연고","img" : "assets/images/kittten03.jpg"},
    "INTJ" : {"test" : "INTJ","explain" : "연고","img" : "assets/images/kittten04.jpg"},
    "ISTP" : {"test" : "ISTP","explain" : "연고","img" : "assets/images/kittten05.jpg"},
    "ISFP" : {"test" : "ISFP","explain" : "연고","img" : "assets/images/kittten06.jpg"},
    "INFP" : {"test" : "INFP","explain" : "연고","img" : "assets/images/kittten07.jpg"},
    "INTP" : {"test" : "INTP","explain" : "연고","img" : "assets/images/kittten08.jpg"},
    "ESTJ" : {"test" : "ESTJ","explain" : "연고","img" : "assets/images/kittten09.jpg"},
    "ESFJ" : {"test" : "ESFJ","explain" : "연고","img" : "assets/images/kittten10.jpg"},
    "ENFJ" : {"test" : "ENFJ","explain" : "연고","img" : "assets/images/kittten11.jpg"},
    "ENTJ" : {"test" : "ENTJ","explain" : "연고","img" : "assets/images/kittten12.jpg"},
    "ESTP" : {"test" : "ESTP","explain" : "연고","img" : "assets/images/kittten13.jpg"},
    "ESFP" : {"test" : "ESFP","explain" : "연고","img" : "assets/images/kittten14.jpg"},
    "ENFP" : {"test" : "ENFP","explain" : "연고","img" : "assets/images/kittten15.jpg"},
    "ENTP" : {"test" : "ENTP","explain" : "연고","img" : "assets/images/kittten16.jpg"}
}

function start(){
    $('.start').hide();
    $('.question').show();
    next();
}

let num=1;

$('#A').click(function(){
    let type = $("#type").val();
    let preValue =$("#"+type).val();
    $("#"+type).val(parseInt(preValue)+1);

    next();
})
$('#B').click(function(){
    let type = $("#type").val();
    next();
})

function next(){
    if(num==13){
        $(".question").hide();
        $('.result').show();

        let mbti = "";
        mbti += $("#EI").val() >2 ? "E" : "I";
        mbti += $("#SN").val() >2 ? "S" : "N";
        mbti += $("#TF").val() >2 ? "T" : "F";
        mbti += $("#JP").val() >2 ? "J" : "P";


        $("#result_img").attr("src", result[mbti]["img"]);
        $("#resultTitle").html(result[mbti]["resultTitle"]);
        $("#explain").html(result[mbti]["explain"]);

    } else{
        $(".progress-bar").attr('style', 'width: calc(100/12*' + num + '%)');
        $("#title").html(q[num]["title"]);
        $("#type").val(q[num]["type"]);
        console.log("EI:", $("#EI").val());
        console.log("SN:", $("#SN").val());
        console.log("TF:", $("#TF").val());
        console.log("JP:", $("#JP").val());
        $("#a").html(q[num]["A"]);
        $("#b").html(q[num]["B"]);


        num++;
    }
}
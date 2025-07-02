
let q = {
    1: {"title" : "퇴근하자마자 친구들이 즉석 맥주 파티 소집!", "type" : "EI",
         "A" : "A. 콜! 맥주 얼음팩에 바로 꽂고, 안주는 내가 챙길게!" ,
         "B" : "B.음… 오늘은 그냥 집콕하고 싶어. 냉장고에 맥주랑 과자나 꺼내야겠다."},
    2: {"title" : "처음 만난 사람과 대화할 때 나는?", "type" : "EI",
         "A" : "A. 어색해도 일단 말 걸어봐야지","B":"B. 눈치 보고 반응을 살핀다"},
    3: {"title" : "혼자 있는 주말, 더 끌리는 건?", "type" : "EI", 
         "A" : "A. 주말에 혼자 있을 순 없지! 당장 약속 잡아!","B":"B. 안락한 집에서 넷플릭스+배달로 집콕이 좋아"},

    4: {"title" : "맥주를 고를 때 나는?", "type" : "SN",
         "A" : "A. 익숙한 라거가 최고지","B":"B. 신상이잖아? 도전고고!"},
    5: {"title" : "여행 가면 주로 어떤 스타일?", "type" : "SN",
         "A" : "A. 무조건 유명한 곳이지!","B":"B. 발굴하는 느낌으로, 숨은 명소로 가야지"},
    6: {"title" : "메뉴를 고를 때 나는?", "type" : "SN",
         "A" : "A. 아는맛이 안전해, 아는맛으로 하자", "B":"B. 뭔가 새롭고 특이한 거 없나?"},

    7: {"title" : "친구가 실수했을 때 나는?", "type" : "TF",
         "A" : "A. 이 부분이 잘못됐네, 여기서부터 다시 고쳐야겠다 ","B":"B. 에이, 그런거 실수할 수도 있지! 다음에 잘하면 돼!"},
    8: {"title" : "회식 장소가 별로일 때 나는?", "type" : "TF",
         "A" : "A. (아 여긴 진짜 돈 아까운데?)말없이 먹는다","B":"B. 분위기 망칠까봐 눈치살피면서 리액션 함"},
    9: {"title" : "친구가 고민 상담할 때 나는?", "type" : "TF",
         "A" : "A. 일단 해결책부터 찾아보고 생각해보자","B":"B. 정말? 그랬었구나ㅠㅜ많이 힘들었겠다"},

    10: {"title" : "맥주 마시기로 한 날, 약속 시간은?", "type" : "JP",
         "A" : "A. 7시까지니까, 5분전까지 도착하자!","B":"B. 7시쯤? 7시 살짝 넘어도 괜찮겠지?"},
    11: {"title" : "술집 메뉴판 볼 때 나는?", "type" : "JP",
         "A" : "A. 내가 미리 리뷰봤는데, 베스트로 먹자!","B":"B. (여유롭게 둘러보면서)뭐가 좋으려나~"},
    12: {"title" : "계획 없는 하루는?", "type" : "JP",
         "A" : "A. 불안하고 뭔가 불편함","B":"B. 오히려 신나고 자유롭다"}
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
        $("#A").html(q[num]["A"]);
        $("#B").html(q[num]["B"]);


        num++;
    }
}
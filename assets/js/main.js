// 1) 질문 데이터
let q = {
  1: { title: "퇴근하자마자 친구들이 즉석 맥주 파티 소집!", type: "EI",
       A: "A. 콜! 맥주 얼음팩에 바로 꽂고, 안주는 내가 챙길게!",
       B: "B. 음… 오늘은 그냥 집콕하고 싶어. 냉장고에 맥주랑 과자나 꺼내야겠다." },
  2: { title: "처음 만난 사람과 대화할 때 나는?", type: "EI",
       A: "A. 어색해도 일단 말 걸어봐야지",
       B: "B. 눈치 보고 반응을 살핀다" },
  3: { title: "혼자 있는 주말, 더 끌리는 건?", type: "EI",
       A: "A. 주말에 혼자 있을 순 없지! 당장 약속 잡아!",
       B: "B. 안락한 집에서 넷플릭스+배달로 집콕이 좋아" },

  4: { title: "맥주를 고를 때 나는?", type: "SN",
       A: "A. 익숙한 라거가 최고지",
       B: "B. 신상이잖아? 도전고고!" },
  5: { title: "여행 가면 주로 어떤 스타일?", type: "SN",
       A: "A. 무조건 유명한 곳이지!",
       B: "B. 발굴하는 느낌으로, 숨은 명소로 가야지" },
  6: { title: "메뉴를 고를 때 나는?", type: "SN",
       A: "A. 아는맛이 안전해, 아는맛으로 하자",
       B: "B. 뭔가 새롭고 특이한 거 없나?" },

  7: { title: "친구가 실수했을 때 나는?", type: "TF",
       A: "A. 이 부분이 잘못됐네, 여기서부터 다시 고쳐야겠다",
       B: "B. 에이, 그런거 실수할 수도 있지! 다음에 잘하면 돼!" },
  8: { title: "회식 장소가 별로일 때 나는?", type: "TF",
       A: "A. (아 여긴 진짜 돈 아까운데?) 말없이 먹는다",
       B: "B. 분위기 망칠까봐 눈치 살피면서 리액션 함" },
  9: { title: "친구가 고민 상담할 때 나는?", type: "TF",
       A: "A. 일단 해결책부터 찾아보고 생각해보자",
       B: "B. 정말? 그랬었구나ㅠㅜ 많이 힘들었겠다" },

 10: { title: "맥주 마시기로 한 날, 약속 시간은?", type: "JP",
       A: "A. 7시까지니까, 5분 전까지 도착하자!",
       B: "B. 7시쯤? 늦어도 괜찮겠지?" },
 11: { title: "술집 메뉴판 볼 때 나는?", type: "JP",
       A: "A. 내가 미리 리뷰 봤는데, 베스트로 먹자!",
       B: "B. (여유롭게 둘러보면서) 뭐가 좋으려나~" },
 12: { title: "계획 없는 하루는?", type: "JP",
       A: "A. 불안하고 뭔가 불편함",
       B: "B. 오히려 신나고 자유롭다" }
};

// 2) 결과 데이터
let result = {
  "ESTJ": {
    img:      "assets/images/chicken.jpg",
    subtitle: "묵묵하고 든든한 당신",
    test:     "클래식 후라이드 치킨",
    desc:     "정해진 방침대로 분위기를 이끌며, 누구보다 책임감 있게 파티를 주도하는 타입.",
    beer:     "시원한 라거"
  },
  "ESTP": {
    img:      "assets/images/gambas.jpg",
    subtitle: "불같이 뜨거운 당신",
    test:     "감바스 알 아히요",
    desc:     "불이 활활 타오르듯, 파티 현장에 에너지를 불어넣는 타입.",
    beer:     "홉의 쌉싸름함이 살아있는 IPA"
  },
  "ESFJ": {
    img:      "assets/images/pretzel.jpg",
    subtitle: "포근하고 다정한 당신",
    test:     "짭짤한 프레첼 스틱",
    desc:     "주변을 살뜰히 챙기며, 작지만 확실한 행복을 전하는 타입.",
    beer:     "부드러운 밀맥주(바이젠)"
  },
  "ESFP": {
    img:      "assets/images/nacho.jpg",
    subtitle: "화려하게 빛나는 당신",
    test:     "나쵸 & 살사",
    desc:     "다채로운 색깔과 톡톡 튀는 대화를 즐기며, 파티의 중심이 되는 타입.",
    beer:     "상큼한 과일 라들러"
  },
  "ENTJ": {
    img:      "assets/images/chicken_wings.jpg",
    subtitle: "강렬하고 카리스마 넘치는 당신",
    test:     "매콤한 치킨 윙",
    desc:     "한입 물 때마다 퍼지는 강렬함처럼, 어디서든 주도권을 놓지 않는 타입.",
    beer:     "묵직한 스타우트"
  },
  "ENTP": {
    img:      "assets/images/mini_pizza.jpg",
    subtitle: "기발하고 도전적인 당신",
    test:     "크래프트 미니 피자",
    desc:     "새로운 조합을 시도하며, 언제나 대화를 활기차게 전환시키는 타입.",
    beer:     "균형 잡힌 페일 에일"
  },
  "ENFJ": {
    img:      "assets/images/margarita.jpg",
    subtitle: "따뜻하고 조화로운 당신",
    test:     "마르게리타 피자 슬라이스",
    desc:     "모두가 즐길 수 있는 균형 잡힌 선택으로 분위기를 이끄는 타입.",
    beer:     "라이트 페일 에일"
  },
  "ENFP": {
    img:      "assets/images/seafood_fry.jpg",
    subtitle: "상상력이 풍부한 당신",
    test:     "해산물 튀김 모둠",
    desc:     "새로운 맛에 기꺼이 뛰어들며, 대화에 신선함을 더하는 타입.",
    beer:     "전통 세종"
  },
  "ISTJ": {
    img:      "assets/images/potato_chips.jpg",
    subtitle: "차분하고 철저한 당신",
    test:     "바삭한 감자 칩",
    desc:     "언제나 예측 가능한 완벽함을 추구하며, 작은 디테일까지 놓치지 않는 타입.",
    beer:     "깔끔한 필스너"
  },
  "ISTP": {
    img:      "assets/images/sausage.jpg",
    subtitle: "실용적이고 냉정한 당신",
    test:     "구운 소시지 & 머스타드",
    desc:     "필요한 순간에 정확히 문제를 해결하며, 맛에서도 절제된 깊이를 즐기는 타입.",
    beer:     "다크 라거(둔켈)"
  },
  "ISFJ": {
    img:      "assets/images/honey_butter_toast.jpg",
    subtitle: "다정하고 헌신적인 당신",
    test:     "허니 버터 토스트",
    desc:     "달콤한 배려로 주변을 따뜻하게 만드는 타입.",
    beer:     "부드러운 위트비어"
  },
  "ISFP": {
    img:      "assets/images/bruschetta.jpg",
    subtitle: "감성적이고 여유로운 당신",
    test:     "브루스케타 토스트",
    desc:     "작은 순간에도 예술을 느끼며, 소박하지만 깊이 있는 취향을 가진 타입.",
    beer:     "라이트 세종"
  },
  "INTJ": {
    img:      "assets/images/truffle_fries.jpg",
    subtitle: "독창적이고 심오한 당신",
    test:     "트러플 오일 감자튀김",
    desc:     "남들이 미처 생각지 못한 고급스러운 조합을 창조하는 타입.",
    beer:     "깊고 묵직한 포터"
  },
  "INTP": {
    img:      "assets/images/quinoa_salad.jpg",
    subtitle: "논리적이고 호기심 많은 당신",
    test:     "퀴노아 야채 샐러드",
    desc:     "가벼움 속에서도 세심한 디테일을 즐기며, 균형을 중시하는 타입.",
    beer:     "깔끔한 세션 IPA"
  },
  "INFJ": {
    img:      "assets/images/caprese.jpg",
    subtitle: "이상적이고 통찰력 있는 당신",
    test:     "카프레제 샐러드",
    desc:     "심플하지만 조화로운 맛으로 깊은 공감을 전하는 타입.",
    beer:     "부드러운 라들러"
  },
  "INFP": {
    img:      "assets/images/cheese_plate.jpg",
    subtitle: "몽환적이고 독보적인 당신",
    test:     "절제의 치즈 플레이트",
    desc:     "정돈된 치즈처럼 조용히 분위기를 꽉 잡는 타입. 누구보다 단단한 기준이 있지만, 그걸 티 내지 않아 더 멋져요.",
    beer:     "필스너, 페일라거"
  }
};

// 3) 시작 함수
function start(){
  $(".start").hide();
  $(".question").show();
  num = 1;
  next();
}

// 4) 변수 초기화
let num = 1;

// 5) 선택지 A 클릭
$("#A").click(function(){
  let type = $("#type").val();
  let pre   = +$("#"+type).val();
  $("#"+type).val(pre + 1);
  next();
});

// 6) 선택지 B 클릭
$("#B").click(function(){
  next();
});

// 7) 다음 질문 또는 결과 출력
function next(){
  if(num === 13){
    $(".question").hide();
    $(".result").show();

    // MBTI 지수 계산
    let mbti = "";
    mbti += +$("#EI").val() > 2 ? "E" : "I";
    mbti += +$("#SN").val() > 2 ? "S" : "N";
    mbti += +$("#TF").val() > 2 ? "T" : "F";
    mbti += +$("#JP").val() > 2 ? "J" : "P";

    // 해당 결과 객체 가져오기
    const cur = result[mbti];

    // 화면에 뿌리기
    $("#result_img").attr("src",   cur.img);
    $("#result_subtitle").text(    cur.subtitle);
    $("#result_title").text(       cur.test);
    $("#result_desc").text(        cur.desc);
    $("#result_beer").html(`🍺 어울리는 맥주: ${cur.beer}`);

  } else {
    // 진행바
    $(".progress-bar").css("width", `calc(100/12*${num}%)`);
    // 질문 세팅
    $("#title").text(q[num].title);
    $("#type").val(q[num].type);
    $("#A").text(q[num].A);
    $("#B").text(q[num].B);
    num++;
  }
}

// 8) 리셋 함수 (페이지 새로고침)
function reset(){
  location.reload();
}

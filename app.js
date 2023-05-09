// 文字列表示
// let hello='Hello World';
// alert(hello);

// 整数表示
// let int1 = 1;
// alert(int1);

// 負数表示
// let int2 = -10;
// alert(int2);

// 少数表示
// let float1 = 3.14;
// alert(float1);

// 文字列表示
// let str1 = 'JavaScriptを覚えよう';
// alert(str1);

// 文字列表示
// let str1='Hello';
// let str2=' ';
// let str3='World!!';
// alert(str1+str2+str3);

// みかんとりんごの値段比較（条件分岐）
// let orange = 100;
// let apple = 100;

// if(orange < apple){
  // alert('みかんの値段がりんごより安い');
// } else if(orange == apple){
  // alert('みかんとりんごが同じ値段');
// } else{
  // alert('みかんの値段がりんごより高い');
// }

// 繰り返し処理（while文）
// let max = 100;
// let num = 1;
// let count = 0;

// while(num < max){
  // num = num*5;
  // count = count+1;
// }

// alert('5をかけ続けて'+ max +'を越えるのに必要だった回数は'+ count +'回です');

// 繰り返し処理（for文）
// let i;
// let num = 0;

// for(i = 1;i < 11;i++){
  // num = num + i;
// }

// alert('1から１０まで足し算した結果は'+ num +'です');

// 入力ダイアログ
// let promptStr = prompt('何か好きな文字を入力してください。');
// alert(promptStr);

// 関数呼び出し
// let alertString;
// alertString = addString("WebCamp");
// alert(alertString);
// 関数
// function addString(strA){
  // let addStr = "Hello"+ strA;
  // return addStr;
// }

// じゃんけん
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
while((user_hand!="グー")&&(user_hand!="チョキ")&&(user_hand!="パー")&&(user_hand!=null)){
  alert('グー・チョキ・パーのいずれかを入力してください');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
}
let js_hand = getJShand();
let judge = winLose(user_hand,js_hand);

if(user_hand!=null){
  alert('あなたの選んだ手は'+ user_hand +'です。\nJavaScriptの選んだ手は'+ js_hand +'です。\n結果は'+ judge +'です。');
}else{
  alert("またチャレンジしてね")
}

function getJShand(){
  let js_hand_num = Math.floor(Math.random()*3);
  let hand;
  if(js_hand_num == 0){
    hand = "グー";
  }else if(js_hand_num == 1){
    hand = "チョキ";
  }else if(js_hand_num == 2){
    hand = "パー";
  }
  return hand;
}

// ユーザーの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user,js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    }else if(js == "チョキ"){
      winLoseStr = "勝ち";
    }else if(js == "パー"){
      winLoseStr = "負け";
    }
  }else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    }else if(js == "チョキ"){
      winLoseStr = "あいこ";
    }else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  }else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    }else if(js == "チョキ"){
      winLoseStr = "負け";
    }else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }
  return winLoseStr;
}
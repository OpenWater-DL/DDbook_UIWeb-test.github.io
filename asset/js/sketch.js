let slider, slider2;
let sel, sel2;
let myButton;
let checkbox;

let button;

var count = 0;

function setup() {
//   var myCanvas = createCanvas(windowWidth, windowHeight);

//   myCanvas.parent("canvas");
  setupSlider();
  textAlign(CENTER);
  setupSelect_checkinDate();
  setupSelect_peopleNum();

  ceateCheckboxes();
}

function btnEvent() {
  console.log(button.x);
}

let chekboxArr = [];
const checkStrs = [
  "ミステリーバス",
  "ホワイトアウト",
  "アルキタイヒルズ",
  "創作ダイニングやぼぬ亭",
  "ゼンブリセット",
  "サッカク砂漠",
  "七変化温泉",
  "パレイドりアの森",
  "トキシラズ宫殿",
  "服ノ袖トンネル",
  "二次元銀座商店街",
  "顔なし族の村",
  "カイケイの壁",
  "カクテルバーDANBO",
];
function ceateCheckboxes() {
  for (let i = 0; i < checkStrs.length; i++) {
    // checkbox.changed(myCheckedEvent);
    let checkbox;

    checkbox = createCheckbox(checkStrs[i], false);
    checkbox.addClass("place-checkbox");
    checkbox.parent("place-checkbox-container");
    chekboxArr.push(checkbox);
  }
}

function myCheckedEvent() {
  if (checkbox.checked()) {
    console.log("Checking!");
  } else {
    console.log("Unchecking!");
  }
}

function setupSlider() {
  slider = createSlider(0, 100, 20, 1); //(min, max, [value], [step])
  // slider2 = createSlider(0, 100, 20, 0.1); //(min, max, [value], [step])

  const sliderW = 300;
  const w_str = `${sliderW}px`;
  slider.style("width", w_str);
  // slider2.style("width", w_str);

  slider.parent("slider1-pos");
  // slider2.parent("slider2-pos");
}

let sel_y,sel_m,sel_d,sel_wd;

function setupSelect_checkinDate() {
  sel_y = createSelect();
  sel_m = createSelect();
  sel_d = createSelect();
  sel_wd = createSelect();


  for(let i=2100;i>2020;i--){
  sel_y.option(i)
  }

  for(let i=1;i<13;i++){
    sel_m.option(i)
    }

    for(let i=1;i<31;i++){
      sel_d.option(i)
      }

      const week = ['月','火','水','木','金','土','日']

      for(let i=0,l=week.length; i<l ; i++){
        sel_wd.option(week[i]);
        }
        sel_y.parent("y");
        sel_m.parent("m");
        sel_d.parent("d");
        sel_wd.parent("wd");
}


function setupSelect_peopleNum() {
  sel2 = createSelect();
  sel2.option("大人1人　子供1人");
  sel2.option("大人2人　子供3人");
  sel2.option("大人2人　子供1人");
  sel2.option("大人0人　子供2人");
  sel2.option("大人2人　子供0人");
  sel2.option("大人1人　子供2人");
  sel2.option("大人2人　子供2人");
  sel2.option("大人1人　子供0人");
  sel2.option("大人1人　子供3人");
  sel2.option("大人0人　子供1人");
  sel2.option("大人0人　子供3人");
  sel2.option("大人3人　子供1人");
  // sel.disable('milk');
  sel2.parent("num-select2");
}

function draw() {
  background(255);
  //   myButton.style('default',{background:'grey'})
//   myButton.draw();

  let val = slider.value();
  // let val2 = slider2.value();

  let date = floor(map(val, 0, 100, 1, 45));
  let m_data = sel_m.value();
  // let date_confirm = nf(map(val2, 0, 100, 1, 45), 2, 1);
  let str = `${m_data}月${date}日`;
  // let str2 = `2月${date_confirm}日`;

  // let slider2_text = document.querySelector("#slider2-text");
  // slider2_text.innerText = str2;

  let slider1_text = document.querySelector("#slider1-text");
  slider1_text.innerText = str;
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

let clickCount = 0;
function btnClickFn() {



  clickCount += 1;
  const btn = document.getElementById("page-3-arrow-btn");

  btn.classList.add('move-to-right');
  btn.addEventListener("transitionend", function() {
    btn.classList.remove('move-to-right')
  });

  // let str;
  // if (clickCount == 1) {
  //   str = 100;
  // } else if (clickCount == 2) {
  //   str = 30;
  // } else if (clickCount == 3) {
  //   str = 50;
  // }

  // btn.style.transform = `translateX(${str}%)`;
  // if (clickCount >= 3) {

  //   const checkBox = document.getElementById('not-agree-check')
  //   if (checkBox.checked){
  //       //同意しない
  //       document.getElementById('agree-checkbox-info').style.display='block'

  //   }else{
  //       //同意する
  //       btn.dataset.targetPageId = 4;
  //   }
  // }
}

// Page buttons events
let navBtns = document
  .querySelector("#nav-btn-container")
  .querySelectorAll("button");
navBtns.forEach((item) => {
  item.addEventListener("click", () => {
    changePage(item);
  });
});


let canChangePage = true;
let nowPage ;
//Short cut function
function changePage(btnItem) {
  const nextPageID = btnItem.dataset.targetPageId;

  if(canChangePage){

  // change btns
  clearClass(".nav-btn", "btn-show");
  let targetBtnEl = document.querySelector("#btn-page" + nextPageID);
  targetBtnEl.classList.add("btn-show");


  //change page contents
  clearClass(".page", "page-active");
  let targetPageEl = document.querySelector("#page-" + nextPageID);
  targetPageEl.classList.add("page-active");
  nowPage = nextPageID;

  }

  if(nowPage == 3) canChangePage = false;
  const posNav= document.querySelector('#pos-nav');
  if(nowPage ==4 ){
    posNav.style.display = 'none'
  }else{
    posNav.style.display = 'flex'
  }

}


function page3_backBtn(){

  nextPageID = 2;
    // change btns
    clearClass(".nav-btn", "btn-show");
    let targetBtnEl = document.querySelector("#btn-page" + nextPageID);
    targetBtnEl.classList.add("btn-show");
  
  
    //change page contents
    clearClass(".page", "page-active");
    let targetPageEl = document.querySelector("#page-" + nextPageID);
    targetPageEl.classList.add("page-active");
    nowPage = nextPageID;
    canChangePage = true;
  

}




function clearClass(selector, targetClassName) {
  document.querySelectorAll(selector).forEach((dot) => {
    dot.classList.remove(targetClassName);
  });
}

const hiddenLink = document.querySelector("#hidden-link");
hiddenLink.addEventListener("click", () => {

  document.querySelector('#page0-dialog').style.display='none';

  const nextPageID = 1;

  // change btns
  clearClass(".nav-btn", "btn-show");
  let targetBtnEl = document.querySelector("#btn-page" + nextPageID);
  targetBtnEl.classList.add("btn-show");

  // change dots
  clearClass(".nav-dot", "dot-active");
  let targetDotEl = document.querySelector("#dot-" + nextPageID);
  if (targetDotEl) {
    targetDotEl.classList.add("dot-active");
  }

  //change page contents
  clearClass(".page", "page-active");
  let targetPageEl = document.querySelector("#page-" + nextPageID);
  targetPageEl.classList.add("page-active");
});

function checkAgree_x() {
  let scrollLeft = document.getElementById("agree-text").scrollLeft;
  let scrollWidth = document.getElementById("agree-text").scrollWidth;
  let textAreaWidth = document.getElementById("agree-text").clientWidth;
  console.log(scrollLeft, scrollWidth);
  if (scrollLeft + textAreaWidth >= scrollWidth) {
    document
      .querySelector("#agree-checkbox-label")
      .classList.add("agree-scroll-ok");
    document.querySelector("#not-agree-check").disabled = false;
  } else {
    document
      .querySelector("#agree-checkbox-label")
      .classList.remove("agree-scroll-ok");
    document.querySelector("#not-agree-check").disabled = true;
  }
}

function checkAgree_y() {
  let scrollTop = document.getElementById("agree-text").scrollTop;
  let scrollHeight = document.getElementById("agree-text").scrollHeight;
  let textAreaHeight = document.getElementById("agree-text").clientHeight;
  console.log(scrollTop, scrollHeight);
  if (scrollTop + textAreaHeight >= scrollHeight) {
    document
      .querySelector("#agree-checkbox-label")
      .classList.add("agree-scroll-ok");
    document.querySelector("#not-agree-check").disabled = false;
  } else {
    document
      .querySelector("#agree-checkbox-label")
      .classList.remove("agree-scroll-ok");
    document.querySelector("#not-agree-check").disabled = true;
  }
}

const extensions = [".jpg", ".png", ".com", ".rpg", ".mp3", ".org", ".exe"];
let mail_btn2_contentID = 0;
function changeExtensionName() {
  mail_btn2_contentID = click_changeContents(
    "mail-change-btn2",
    extensions,
    mail_btn2_contentID
  );
}

const domains = ["wifi", "gmail", "jappan", "amazon", "office", "playground"];
let mail_btn1_contentID = 0;
function changeDomain() {
  mail_btn1_contentID = click_changeContents(
    "mail-change-btn1",
    domains,
    mail_btn1_contentID
  );
}

function click_changeContents(elementId, contentsArr, useCount) {
  let extensionName = contentsArr[useCount];
  document.getElementById(elementId).innerText = extensionName;
  useCount += 1;
  if (useCount == contentsArr.length) {
    return (useCount = 0);
  } else {
    return useCount;
  }
}

//change color by dots
changeColor_byDots();
function changeColor_byDots() {
  const dots = document.querySelectorAll(".bg-dot");
  dots.forEach((item, id) => {
    item.addEventListener("click", (e) => {
      //clear other dots
      dots.forEach((el) => {
        el.style.backgroundColor = "white";
      });

      //set dot color
      let tgtColor = e.target.dataset.color;
      e.target.style.backgroundColor = tgtColor;

      if (id == 0) {
        resetColor();
        //change button color
        const els = document.querySelectorAll(".nav-btn");
        els.forEach((item) => {
          item.querySelectorAll("button").forEach((btn) => {
            btn.style.backgroundColor = tgtColor;
          });
        });
      } else if (id == 1) {
        resetColor();
        //change body color
        document.querySelector("body").style.backgroundColor = tgtColor;
      } else if (id == 2) {
        resetColor();
        //chang text color   
        document.querySelectorAll("div").forEach((div)=>{
        div.style.color=tgtColor;
    })
      } else if (id == 3) {
        resetColor();
        // change panel bg color
        document.querySelectorAll('section').forEach((s)=>{
s.style.backgroundColor= tgtColor;
        })
      }
    });
  });

  function resetColor() {
    //body bg
    document.querySelector("body").style.backgroundColor = "#e4e4e4";

    //btn bg
    const btns = document.querySelectorAll(".nav-btn");
    btns.forEach((item) => {
      item.querySelectorAll("button").forEach((btn) => {
        btn.style.backgroundColor = "#4d4d51";
      });
    });

    //text color
    document.querySelectorAll("div").forEach((div)=>{
        div.style.color= 'black';
                })
    //section color
    document.querySelectorAll('section').forEach((s)=>{
        s.style.backgroundColor= 'white';
                })
  }
}


let modal = document.getElementById("week-modal");
let modal_open_btn = document.getElementById('week-modal-open-btn')
let modal_close_btn = document.querySelector('.close')
modal_open_btn.onclick = function(){
    modal.style.display = "block";

}
modal_close_btn.onclick = function(){
    modal.style.display = "none";
}

function page0_fakeBtn(){

    // document.querySelector('#fake-btn-info').classList.add('active');

 document.querySelector('#page0-dialog').style.display = 'block';
}


//page-0-dialog

page0_dialog();

let dialog_rotateDeg = 0
function page0_dialog(){

  const btnRoate = document.querySelector('#page0-dialog-rotate-btn');
  const parentDialog =   document.querySelector('#page0-dialog')
  btnRoate.addEventListener('click',()=>{
    dialog_rotateDeg +=30;
    if (dialog_rotateDeg % 120 == 0 ) dialog_rotateDeg += 240;
    parentDialog.style.transform = ` translate(-50%,-50%)  rotate( ${dialog_rotateDeg}deg)`;
    
  })

  const btnClose = document.querySelector('#page0-dialog-close').querySelector('p')
  console.log("🚀 ~ file: sketch.js:388 ~ page0_dialog ~ btnClose:", btnClose)

  btnClose.addEventListener('click',()=>{
    parentDialog.style.display = 'none';
  })

  const btnOk = document.querySelector('#page0-dialog-ok')
  btnOk.addEventListener('click', ()=>{

    parentDialog.querySelector('p').textContent = '一番下の「ページ」を押してください'

  })
  
}


page2_phoneNumInput();
function page2_phoneNumInput(){

  let phoneNumInput_html =``; 

  for(let i =0;i<11;i++){
phoneNumInput_html += ` <input class="phone-num-input" type="text" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');" />`

  }

  let newDiv = document.createElement("div");
  newDiv.id ='phone-num';
  newDiv.innerHTML = phoneNumInput_html;
document.querySelector('#page-2-phone-num-section').appendChild(newDiv)

}


confiremTest();
function confiremTest(){

  const confiremTestUl = document.querySelector('#confirm-test-ul')
  const lis = confiremTestUl.children
  
  lis.forEach( (item)=>{

    item.addEventListener('click',()=>{

      item.classList.toggle('selected');

    })

  });


}

page2_confirmBtn_dialog();

function page2_confirmBtn_dialog(){

  const thisDialog = document.querySelector('#page-3-confirm-dialog');
  const thisPageConfirmBtn  =   document.querySelector('#confirm-btn');
  thisPageConfirmBtn.addEventListener('click',()=>{
    thisDialog.style.display = 'block';
  })

  thisDialog.querySelector('#btn-cancel').addEventListener('click',()=>{
    thisDialog.style.display = 'none';
  })
  thisDialog.querySelector('#btn-accept').addEventListener('click',()=>{
    changeToPage4();
  })

  thisDialog.querySelector('#btn-ok').addEventListener('click',()=>{
    changeToPage4();
  })

  function changeToPage4(){

    if(document.querySelector("#not-agree-check").disabled ){

      document.querySelector('#agree-checkbox-info').style.display = 'block'
 document.querySelector('#page-3-confirm-dialog').style.display = 'none';
  

    }else{
      thisDialog.style.display = 'none';
      canChangePage = true;    
      changePage(thisPageConfirmBtn)   

    }
  
  }

}




active_for_test();
function active_for_test() {
  activeID = 2;
  nowPage = activeID;

  document.querySelector("#page-" + activeID).classList.add("page-active");
  document.querySelector("#btn-page" + activeID).classList.add("btn-show");
}
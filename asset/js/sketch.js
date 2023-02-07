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
  setupSelector();

//   myButton = new Button({
//     x: 0,
//     y: 100,
//     width: 100,
//     height: 50,
//     align_x: 0,
//     align_y: 0,
//     content: "確認",
//     on_press() {
//       count++;

//       let rdmRange = 40; //randomRange
//       myButton.place(
//         random(70, 400),
//         random(10, rdmRange),
//         random(30, 200),
//         random(10, 70)
//       );
//     },
//   });
//   console.log("🚀 ~ file: sketch.js:17 ~ setup ~ myButton", myButton);

  // button = createButton('click me');
  // button.parent('btnconfirm')

  // button.mousePressed(btnEvent);

  ceateCheckboxes();
}

function btnEvent() {
  console.log(button.x);
  // button.position(0, 0);
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
  slider = createSlider(0, 100, 20, 7); //(min, max, [value], [step])
  slider2 = createSlider(0, 100, 20, 0.1); //(min, max, [value], [step])

  const sliderW = 300;
  const w_str = `${sliderW}px`;
  slider.style("width", w_str);
  slider2.style("width", w_str);
  console.log("🚀 ~ file: sketch.js:86 ~ setupSlider ~ slider2", slider2);

  slider.parent("slider1-pos");
  slider2.parent("slider2-pos");
}

function setupSelector() {
  //   sel = createSelect();
  //   sel.option("大人EV　子|#O^");
  //   sel.option("木人1人　子供0△");
  //   sel.option("人参4人　子供6K");
  //   sel.option("大根Z人　子供７人");
  //   sel.parent("num-select1");

  sel2 = createSelect();
  sel2.option("大人2人　子供０人");
  sel2.option("大人1人　子供1人");
  sel2.option("大人4人　子供3人");
  sel2.option("大人1人　子供０人");
  sel2.option("大人3人　子供2人");
  // sel.disable('milk');
  sel2.parent("num-select2");
}

function draw() {
  background(255);
  //   myButton.style('default',{background:'grey'})
//   myButton.draw();

  let val = slider.value();
  let val2 = slider2.value();

  let date = floor(map(val, 0, 100, 1, 45));
  let date_confirm = nf(map(val2, 0, 100, 1, 45), 2, 1);
  let str = `2月${date}日`;
  let str2 = `2月${date_confirm}日`;

  let slider2_text = document.querySelector("#slider2-text");
  slider2_text.innerText = str2;

  let slider1_text = document.querySelector("#slider1-text");
  slider1_text.innerText = str;
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

let clickCount = 0;
function btnClickFn() {
  clickCount += 1;
  const btn = document.getElementById("confirm-btn");
  let str;
  if (clickCount == 1) {
    str = 100;
  } else if (clickCount == 2) {
    str = 30;
  } else if (clickCount == 3) {
    str = 50;
  }

  btn.style.transform = `translateX(${str}%)`;
  if (clickCount >= 3) {

    const checkBox = document.getElementById('not-agree-check')
    if (checkBox.checked){
        //同意しない
        document.getElementById('agree-checkbox-info').style.display='block'

    }else{
        //同意する
        btn.dataset.targetPageId = 4;
    }
  }
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

//Short cut function
function changePage(btnItem) {
  const nextPageID = btnItem.dataset.targetPageId;

  // change btns
  clearClass(".nav-btn", "btn-show");
  let targetBtnEl = document.querySelector("#btn-page" + nextPageID);
  targetBtnEl.classList.add("btn-show");

  // change dots
  // clearClass(".nav-dot", "dot-active");
  // let targetDotEl = document.querySelector( "#dot-" + nextPageID);
  //   if(targetDotEl){

  //     targetDotEl.classList.add("dot-active");
  // }

  //change page contents
  clearClass(".page", "page-active");
  let targetPageEl = document.querySelector("#page-" + nextPageID);
  targetPageEl.classList.add("page-active");
}

function clearClass(selector, targetClassName) {
  document.querySelectorAll(selector).forEach((dot) => {
    dot.classList.remove(targetClassName);
  });
}

const hiddenLink = document.querySelector("#hidden-link");
hiddenLink.addEventListener("click", () => {
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

function checkAgree() {
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

    document.querySelector('#fake-btn-info').classList.add('active');

}



active_for_test();
function active_for_test() {
  activeID = 0;

  document.querySelector("#page-" + activeID).classList.add("page-active");
  document.querySelector("#btn-page" + activeID).classList.add("btn-show");
}
let slider, slider2;
let sel, sel2;
let myButton;
let checkbox;

let button;

var count = 0;

function setup() {
  var myCanvas = createCanvas(windowWidth, windowHeight);

  myCanvas.parent("canvas");
  setupSlider();
  textAlign(CENTER);
  setupSelector();

  myButton = new Button({
    x: 0,
    y: 100,
    width: 100,
    height: 50,
    align_x: 0,
    align_y: 0,
    content: "確認",
    on_press() {
      count++;

      let rdmRange = 40; //randomRange
      myButton.place(
        random(70, 400),
        random(10, rdmRange),
        random(30, 200),
        random(10, 70)
      );
    },
  });
  console.log("🚀 ~ file: sketch.js:17 ~ setup ~ myButton", myButton);

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
    'ミステリーバス',
    'ホワイトアウト',
    'アルキタイヒルズ',
'創作ダイニングやぼぬ亭',
'ゼンブリセット','サッカク砂漠','七変化温泉','パレイドりアの森','トキシラズ宫殿','服ノ袖トンネル','二次元銀座商店街','顔なし族の村',
'カイケイの壁','カクテルバーDANBO']
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
  sel = createSelect();
  sel.option("大人EV　子|#O^");
  sel.option("木人1人　子供0△");
  sel.option("人参4人　子供6K");
  sel.option("大根Z人　子供７人");
  sel.parent("num-select1");

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
  myButton.draw();

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

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

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
  if (clickCount == 3) {
    clickCount = 0;
  }
}

// Page buttons events
let navBtns = document.querySelector('#nav-btn-container').querySelectorAll('button')
navBtns.forEach(item=>{
    item.addEventListener("click", () => {
        changePage(item);
  });
})

//Short cut function
function changePage(btnItem){
    const nextPageID = btnItem.dataset.targetPageId;

    // change btns
    clearClass(".nav-btn", "btn-show");
    let targetBtnEl =  document.querySelector("#btn-page"+nextPageID)
    targetBtnEl.classList.add("btn-show");

    // change dots
    clearClass(".nav-dot", "dot-active");
    let targetDotEl = document.querySelector( "#dot-" + nextPageID);
      if(targetDotEl){

        targetDotEl.classList.add("dot-active");
    }


    //change page contents
    clearClass('.page','page-active');
    let targetPageEl = document.querySelector('#page-'+nextPageID);
    targetPageEl.classList.add('page-active');

  
}

function clearClass(selector, targetClassName) {
  document.querySelectorAll(selector).forEach((dot) => {
    dot.classList.remove(targetClassName);
  });
}

const hiddenLink = document.querySelector('#hidden-link')
hiddenLink.addEventListener('click',()=>{

const nextPageID = 1;

    // change btns
    clearClass(".nav-btn", "btn-show");
    let targetBtnEl =  document.querySelector("#btn-page"+nextPageID)
    targetBtnEl.classList.add("btn-show");

    // change dots
    clearClass(".nav-dot", "dot-active");
    let targetDotEl = document.querySelector( "#dot-" + nextPageID);
    if(targetDotEl){

        targetDotEl.classList.add("dot-active");
    }

    //change page contents
    clearClass('.page','page-active');
    let targetPageEl = document.querySelector('#page-'+nextPageID);
    targetPageEl.classList.add('page-active');

})

function checkAgree(){
let scrollLeft = document.getElementById('agree-text').scrollLeft;
let scrollWidth = document.getElementById('agree-text').scrollWidth;
let textAreaWidth = document.getElementById('agree-text').clientWidth;
console.log(scrollLeft,scrollWidth)
if(scrollLeft+textAreaWidth== scrollWidth ){
document.querySelector('#agree-checkbox-label').classList.add('agree-scroll-ok')
document.querySelector('#not-agree-check').disabled = false;
}else{
    document.querySelector('#agree-checkbox-label').classList.remove('agree-scroll-ok')
    document.querySelector('#not-agree-check').disabled = true;

}

}
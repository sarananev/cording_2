const navi = document.getElementById('nav');
const hamberger_menu = document.querySelector('.hamberger-menu');
const Menu_text = document.querySelector('.menu');
const mask = document.getElementById('mask');

hamberger_menu.addEventListener('click', () => {
  hamberger_menu.classList.toggle('active');
  navi.classList.toggle('active');
  mask.classList.toggle('active'); 
  Menu_text.classList.toggle('active'); 
});


// maskエリアをクリックした時にメニューを閉じる
mask.addEventListener('click', () => {
  hamberger_menu.classList.toggle('active');
  navi.classList.toggle('active');
});

navi.addEventListener('click', () => {
  hamberger_menu.classList.toggle('active');
  navi.classList.toggle('active');
  mask.classList.toggle('active'); 
})

// radioボタンのチェックを外す
let num = 0; // 最初は0に
function deleteChecked(obj, currentNum) {
  if (num == currentNum) {
    // numと第二引数の数字が同じとき
    obj.checked = false; // チェックが外れる
    num = 0; // 初期状態に
  } else {
    // クリックしたらチェックが入り、numが第二引数の数字になる
    num = currentNum;
  }
}


// logoの色変更
window.addEventListener('DOMContentLoaded', () => {
  const Logo = document.querySelector('.logo');
  const Intersect = document.querySelector('.topconsept-wrapper');
  
  const doWhenIntersect = entries => {
    Logo.setAttribute('black', String(!entries[0].isIntersecting));
  }
  const observer = new IntersectionObserver(doWhenIntersect, {});
  observer.observe(Intersect);
});

// .hamberger-menuの色変更
window.addEventListener('DOMContentLoaded', () => {
  const Hamberger_menu = document.querySelector('.hamberger-menu');
  const Menu_text = document.querySelector('.menu-text');
  // const Menu = document.querySelector('.menu');
  const Intersect = document.querySelector('.topconsept-wrapper');


  
  const doWhenIntersect = entries => {
    Hamberger_menu.setAttribute('black', String(!entries[0].isIntersecting));
    Menu_text.setAttribute('black', String(!entries[0].isIntersecting));
    // Menu.setAttribute('black', String(!entries[0].isIntersecting));
  }
  const observer = new IntersectionObserver(doWhenIntersect, {});
  observer.observe(Intersect);
});


// // header scroll
// window.addEventListener('DOMContentLoaded', () => {
//   const Header = document.getElementById('header');
//   const Intersect = document.querySelector('.topconsept-wrapper');

//   const doWhenIntersect = entries => {
//     Header.setAttribute('fixed', String(!entries[0].isIntersecting));
//   }
//   const observer = new IntersectionObserver(doWhenIntersect, {});
//   observer.observe(Intersect);
// });



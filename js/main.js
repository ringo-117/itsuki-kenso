// JavaScript Document

'use strict';

// ハンバーガーメニューとスクロール制御
// {
//   const btn = document.querySelector('.btn');
//   if (btn) {
//     const container = document.querySelector('.container');
//     const header   = document.querySelector('.header');
//     const logo     = document.querySelector('.logo-box');

//     btn.addEventListener('click', () => {
//       btn.classList.toggle('active');
//       container?.classList.toggle('active');
//       header?.classList.toggle('active');
//       logo?.classList.toggle('active');

//       // ボディのスクロール制御
//       const bodyStyle = document.body.style;
//       if (bodyStyle.overflow === 'hidden') {
//         bodyStyle.overflow = '';
//         bodyStyle.height   = '';
//       } else {
//         bodyStyle.overflow = 'hidden';
//         bodyStyle.height   = '100%';
//       }
//     });

//     // メニューリンクをクリックしたらメニューを閉じる（jQuery）
//     $('#nav_list a[href]').on('click', () => {
//       $('.btn').trigger('click');
//     });
//   }
// }

// document.getElementById('btn').addEventListener('click', function () {
//   this.classList.toggle('active');
//   document.querySelector('.header .logo-box').classList.toggle('fadeout');
// });


// ===================================================
// ヘッダー（ハンバーガー）
// ===================================================
{
  const btn = document.querySelector('.btn');
  if (btn) {
    const container = document.querySelector('.container');
    const header   = document.querySelector('.header');
    const logo     = document.querySelector('.header .logo-box'); // ← 明示

    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      container?.classList.toggle('active');
      header?.classList.toggle('active');
      logo?.classList.toggle('active'); // ← これで透明にできる

      // ボディのスクロール制御
      const bodyStyle = document.body.style;
      if (bodyStyle.overflow === 'hidden') {
        bodyStyle.overflow = '';
        bodyStyle.height   = '';
      } else {
        bodyStyle.overflow = 'hidden';
        bodyStyle.height   = '100%';
      }
    });

    // メニューリンクをクリックしたらメニューを閉じる（修正済み）
    document.querySelectorAll('#nav-list a[href]').forEach(link => {
      link.addEventListener('click', () => {
        btn.click();
      });
    });
  }
}

// ===================================================
// ヘッダースクロール（スタイル変化）
// ===================================================
// document.addEventListener('DOMContentLoaded', function () {
  // const header = document.querySelector('.tb-nav .header');
  // const trigger = document.querySelector('.trigger-header');

//   const headerObserver = new IntersectionObserver(
//     function (entries) {
//       if (entries[0].isIntersecting) {
//         header.classList.remove('scrolled');
//       } else {
//         header.classList.add('scrolled');
//       }
//     },
//     { threshold: 0 }
//   );

//   if (trigger) {
//     headerObserver.observe(trigger);
//   }


//   // 初回強制チェック（レンダリング後に一度だけ）
//   setTimeout(() => {
//     const rect = trigger.getBoundingClientRect();
//     const isInView = rect.top < window.innerHeight && rect.bottom >= 0;

//     if (isInView) {
//       header.classList.remove('scrolled');
//     } else {
//       header.classList.add('scrolled');
//     }
//   }, 100); // 100msほど待つことでレイアウト確定を待つ
// });






// const hero = document.querySelector('.sec-top');
// const options = { rootMargin: '-50px 0px 0px 0px' }; // ヒーロー終わりに微調整

// const observer = new IntersectionObserver(entries => {
//   if (entries[0].isIntersecting) {
//     header.classList.add('scrolled');
//   } else {
//     header.classList.remove('scrolled');
//   }
// }, options);

// observer.observe(hero);






// =================================
// ヘッダースクロール（スタイル変化）SP版
// =================================
// document.addEventListener('DOMContentLoaded', () => {
//   const header = document.querySelector('.sp-nav .header');
//   const hero = document.querySelector('.trigger-header');
//   if (!header || !hero) return;

//   const headerObserver = new IntersectionObserver(entries => {
//     const entry = entries[0];
//     if (entry.isIntersecting) {
//       header.classList.remove('scrolled');
//     } else {
//       header.classList.add('scrolled');
//     }
//   }, {
//     rootMargin: '-50px 0px 0px 0px'
//   });

//   headerObserver.observe(hero);

//   // 📌 初期強制チェック
//   setTimeout(() => {
//     const rect = hero.getBoundingClientRect();
//     const isAbove = rect.bottom <= 50;
//     if (isAbove) {
//       header.classList.add('scrolled');
//     } else {
//       header.classList.remove('scrolled');
//     }
//   }, 100);
// });

// =================================
// ヘッダースクロール（スタイル変化）TB版
// =================================
// document.addEventListener('DOMContentLoaded', () => {
//   const header = document.querySelector('.tb-nav .header');
//   const hero = document.querySelector('.trigger-header');
//   if (!header || !hero) return;

//   const headerObserver = new IntersectionObserver(entries => {
//     const entry = entries[0];
//     if (entry.isIntersecting) {
//       header.classList.remove('scrolled');
//     } else {
//       header.classList.add('scrolled');
//     }
//   }, {
//     rootMargin: '-50px 0px 0px 0px'
//   });

//   headerObserver.observe(hero);

//   // 📌 初期強制チェック
//   setTimeout(() => {
//     const rect = hero.getBoundingClientRect();
//     const isAbove = rect.bottom <= 50;
//     if (isAbove) {
//       header.classList.add('scrolled');
//     } else {
//       header.classList.remove('scrolled');
//     }
//   }, 100);
// });

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScrollObserver('.sp-nav'); // SP用
  initHeaderScrollObserver('.tb-nav'); // TB用
});


function initHeaderScrollObserver(navSelector) {
  const header = document.querySelector(`${navSelector} .header`);
  const hero = document.querySelector('.trigger-header');
  if (!header || !hero) return;

  const headerObserver = new IntersectionObserver(entries => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      header.classList.remove('scrolled');
    } else {
      header.classList.add('scrolled');
    }
  }, {
    rootMargin: '-50px 0px 0px 0px',
    threshold: 0
  });

  headerObserver.observe(hero);

  // 📌 スクロールで一番上に戻ったときにscrolledを外す
  window.addEventListener('scroll', () => {
    if (window.scrollY <= 0) {
      header.classList.remove('scrolled');
    }
  });

  // 📌 初期チェック
  setTimeout(() => {
    const rect = hero.getBoundingClientRect();
    const isAbove = rect.top <= -50; // ←ここをtopに変更して正確に判定
    if (isAbove) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, 100);
}





// ===================================================
// LINE
// ===================================================
const lineBox = document.getElementById('lineBox');
const endTarget = document.querySelector('.end-target');

let endVisible = false;

// 画面サイズごとのスクロール開始位置（px）
function getShowStart() {
	const width = window.innerWidth;

	if (width <= 640) {
		return 20; // スマホ
	} else if (width <= 1024) {
		return 150; // タブレット
	} else {
		return 300; // PC
	}
}

function handleScroll() {
	const scrollY = window.scrollY || window.pageYOffset;
	const showStart = getShowStart(); // サイズに応じて取得

	if (scrollY > showStart && !endVisible) {
		lineBox.classList.add('show');
	} else {
		lineBox.classList.remove('show');
	}
}

// IntersectionObserver：目印が見えたら非表示
const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		endVisible = entry.isIntersecting;
		handleScroll(); // 状態が変わったら再判定
	});
});

if (endTarget) {
	observer.observe(endTarget);
}

// スクロールで常にチェック
window.addEventListener('scroll', handleScroll);

// リサイズされたときにもチェック（スマホ←→PC切替対応）
window.addEventListener('resize', handleScroll);

// 初回実行
handleScroll();


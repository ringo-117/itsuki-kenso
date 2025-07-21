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
document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.tb-nav .header');
  const trigger = document.querySelector('.trigger-header');

  const headerObserver = new IntersectionObserver(
    function (entries) {
      if (entries[0].isIntersecting) {
        header.classList.remove('scrolled');
      } else {
        header.classList.add('scrolled');
      }
    },
    { threshold: 0 }
  );

  if (trigger) {
    headerObserver.observe(trigger);
  }
});


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


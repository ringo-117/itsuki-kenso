// JavaScript Document

'use strict';

// ===================================================
// ヘッダー（ハンバーガー）
// ===================================================
{
  const btn = document.querySelector('.btn');
  if (btn) {
    const container = document.querySelector('.container');
    const header    = document.querySelector('.header');
    const cover     = document.querySelector('.cover');
    const logo      = document.querySelector('.header .logo-box');
    const telBox = document.getElementById('telBox');

    function toggleMenu(forceClose = false) {
      const isOpen = btn.classList.contains('active');

      if (forceClose || isOpen) {
        // 閉じる処理
        btn.classList.remove('active');
        container?.classList.remove('active');
        header?.classList.remove('active');
        logo?.classList.remove('active');

        // ふわっと非表示開始
        cover?.classList.remove('active');
        document.body.style.overflow = '';
        document.body.style.height = '';

        telBox?.classList.remove('hide');

        // アニメーション後に cover を display: none に
        if (cover) {
          setTimeout(() => {
            if (!cover.classList.contains('active')) {
              cover.style.display = 'none';
            }
          }, 500); // ← CSSと同じ秒数
        }

      } else {
        // 開く処理
        btn.classList.add('active');
        container?.classList.add('active');
        header?.classList.add('active');
        logo?.classList.add('active');

        telBox?.classList.add('hide');

        // 表示してからふわっと出す
        if (cover) {
          cover.style.display = 'block';
          setTimeout(() => {
            cover.classList.add('active');
          }, 10); // 少し遅らせるとtransitionが効く
        }

        document.body.style.overflow = 'hidden';
        document.body.style.height = '100%';
      }
    }


    btn.addEventListener('click', () => {
      toggleMenu();
    });

    cover?.addEventListener('click', () => {
      toggleMenu(true);
    });

    document.querySelectorAll('#nav-list a[href]').forEach(link => {
      link.addEventListener('click', () => {
        toggleMenu(true);
      });
    });
  }
}


// ===================================================
// ヘッダースクロール（スタイル変化）
// ===================================================
document.addEventListener('DOMContentLoaded', () => {
  initHeaderScrollObserver('.sp-nav'); // SP用
  initHeaderScrollObserver('.pc-nav'); // TB用
});


function initHeaderScrollObserver(navSelector) {
  const header = document.querySelector(`${navSelector} .header`);
  const trigger = document.querySelector('.trigger-header');
  if (!header || !trigger) return;

  const checkScroll = () => {
    const triggerTop = trigger.getBoundingClientRect().top + window.scrollY;
    const scrollPos = window.scrollY;

    if (scrollPos >= triggerTop) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  // スクロール時に常にチェック
  window.addEventListener('scroll', checkScroll);

  // 初期状態チェック
  window.addEventListener('load', checkScroll);
  document.addEventListener('DOMContentLoaded', checkScroll);
}

// =============================
// スクロール出現アニメーション
// =============================
// .fade-up  : 下からフェードアップ
// .img-wrap: 左から右に表示
// =============================
document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('.fade-up, .img-wrap');
  if (targets.length === 0) return; // 対象がなければ何もしない

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        obs.unobserve(entry.target); // 一度表示されたら監視終了
      }
    });
  }, {
    threshold: 0.2 // 20% 見えたら発火
  });

  targets.forEach(target => observer.observe(target));
});


// ===================================================
// LINE
// ===================================================
// const lineBox = document.getElementById('lineBox');
// const telBox = document.getElementById('telBox');
// const endTarget = document.querySelector('.end-target');

// function getShowStart() {
// 	const width = window.innerWidth;
// 	const pageSpValue = document.body.dataset.lineboxSp;
// 	if (width <= 640) {
// 		return pageSpValue ? parseInt(pageSpValue, 10) : 20;
// 	} else if (width <= 1024) {
// 		return 150;
// 	} else {
// 		return 300;
// 	}
// }

// function handleScroll() {
// 	const scrollY = window.scrollY || window.pageYOffset;
// 	const showStart = getShowStart();

// 	// endTarget の位置（ページ全体に対するtop座標）
// 	const endTargetTop = endTarget
// 		? endTarget.getBoundingClientRect().top + window.pageYOffset
// 		: Infinity;

// 	// lineBox を表示する条件：
// 	// ・発火位置より下
// 	// ・endTargetより上（＝まだ通過していない）
// 	if (scrollY > showStart && scrollY + window.innerHeight < endTargetTop) {
// 		lineBox.classList.add('show');
//     telBox.classList.add('show');
// 	} else {
// 		lineBox.classList.remove('show');
//     telBox.classList.remove('show');
// 	}
// }

// window.addEventListener('scroll', handleScroll);
// window.addEventListener('resize', handleScroll);
// handleScroll();




// ===================================================
// ABOUT（.about-bg）
// ===================================================
$(window).on('scroll', function(){

  var scrollTop = $(window).scrollTop();
  var bgPosition = scrollTop / 10; //スクロール後のポジションを指定（値を大きくすると移動距離が小さくなる）

  if(bgPosition){
    $('.about-bg').css('background-position', 'center top -'+ bgPosition + 'px');
  }
});
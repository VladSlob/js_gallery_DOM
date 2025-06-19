'use strict';

const thumbs = document.querySelector('#thumbs');


  const target = evt.target.closest('a');

  if (!target) {
    return;
  }
  largeImg.src = target.href;
});

/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 */

const copyToClipboard = element => {
  const text = element.dataset.text;
  const copy = element.querySelector('.copy');
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      const successEl = element.querySelector('.success');
      copy.style.display = 'none';
      successEl.style.display = 'inline-block';
      setTimeout(() => {
        copy.style.display = 'inline-block';
        successEl.style.display = 'none';
      }, 1200);
    }).catch(error => {
      const errorEl = element.querySelector('.error');
      copy.style.display = 'none';
      errorEl.style.display = 'inline-block';
      setTimeout(() => {
        copy.style.display = 'inline-block';
        errorEl.style.display = 'none';
      }, 1200);
      if (logger) {
        logger.log('Unable to copy to clipboard', {
          level: 'warning',
          data: {
            error: error
          }
        });
      }
    });
  } else {
    // for older browsers
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
  }
};
document.querySelectorAll('.wp-block-jhu-color-block .click-to-copy').forEach(function (elem) {
  elem.addEventListener('click', function (e) {
    e.preventDefault();
    copyToClipboard(this);
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map
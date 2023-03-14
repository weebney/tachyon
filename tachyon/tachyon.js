// tachyon.js 1.1.2 - @weebney - MIT License
const bodyDataValues = document.body.dataset;
const whitelistEnabled = 'tachyonWhitelist' in bodyDataValues;
const sameOriginOnly = 'tachyonSameOrigin' in bodyDataValues;
const timerDuration = bodyDataValues.tachyonTimer || 50;
let lastTouchedAnchor = null;

function toggleLinkTag() {
  lastTouchedAnchor = lastTouchedAnchor ? null : this;
  const linkTagId = 'tachyon';
  const linkTag = document.getElementById(linkTagId);
  if (linkTag) {
    linkTag.remove()
  } else {
    setTimeout(() => {
      if (lastTouchedAnchor === this) {
        const newLinkElement = document.createElement('link');
        newLinkElement.id = linkTagId;
        newLinkElement.href = this.href;
        newLinkElement.rel = 'prerender';
        document.head.appendChild(newLinkElement);
      }
    }, timerDuration);
  }
}

function initializeListeners(node) {
  if ((node.tagName === 'A' && node.href) && ('tachyon' in node.dataset === whitelistEnabled) && (!sameOriginOnly || node.origin === window.location.origin)) {
    ['mouseover', 'mouseout', 'touchstart', 'touchend'].forEach((eventName) => node.addEventListener(eventName, toggleLinkTag, { passive: true }));
  }
}

const mutationObserver = new MutationObserver((mutationRecordArray) => {
  mutationRecordArray.forEach(record => record.forEach(initializeListeners))
});
mutationObserver.observe(document.body, { childList: true, subtree: true });

document.querySelectorAll('a').forEach(initializeListeners);
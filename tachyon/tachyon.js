// tachyon.js 1.0.0 - @weebney - MIT License
const bodyDataValues = document.body.dataset;
const whitelistEnabled = 'tachyonWhitelist' in bodyDataValues;
const sameOriginOnly = 'tachyonSameOrigin' in bodyDataValues;
const timerDuration = bodyDataValues.tachyonTimer || 50;
let lastTouchedAnchor = null;

function togglePrefetch() {
  const linkTagId = 'tachyon';
  lastTouchedAnchor = lastTouchedAnchor ? null : this;

  try {
    document.head.removeChild(document.getElementById(linkTagId));
  } catch {
    setTimeout(() => {
      if (lastTouchedAnchor === this) {
        const newLinkElement = document.createElement('link');
        newLinkElement.id = linkTagId;
        newLinkElement.href = this.href;
        newLinkElement.rel = 'prefetch';
        document.head.appendChild(newLinkElement);
      }
    }, timerDuration);
  }
}

function initializeListeners(element) {
  if ((element.tagName !== 'A' || !element.href) || (sameOriginOnly && element.origin !== window.location.origin)) {
    return;
  }

  function addListenersToElement() {
    const listeners = ['mouseover', 'mouseout', 'touchstart', 'touchend'];
    listeners.forEach((event) => element.addEventListener(event, togglePrefetch.bind(element)));
  }

  const onList = 'tachyon' in element.dataset;
  if (!whitelistEnabled && !onList) {
    addListenersToElement();
  } else if (whitelistEnabled && onList) {
    addListenersToElement();
  }
}

document.querySelectorAll('a').forEach(initializeListeners);

const mutationObserver = new MutationObserver((mutationRecordArray) => mutationRecordArray
  .forEach((mutationRecord) => mutationRecord.addedNodes.forEach(initializeListeners)));

mutationObserver.observe(document.body, { childList: true, subtree: true });

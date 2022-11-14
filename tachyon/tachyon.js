// tachyon.js 0.3.1 - @weebney - MIT License
const scriptTagDataset = document.querySelector('script[data-tachyon]').dataset;
const whitelistEnabled = scriptTagDataset.whitelist === '' || false;
const timerDuration = scriptTagDataset.timer || 50;
const usingTouchDevice = !!window.TouchEvent;
let mouseTouchingAnchor = false;

function prefetchToggle() {
  const { href } = this;
  const tagId = `tachyon:${href}`;
  mouseTouchingAnchor = !mouseTouchingAnchor;

  try {
    document.head.removeChild(document.getElementById(tagId));
  } catch {
    setTimeout(() => {
      if (mouseTouchingAnchor) {
        const newLinkElement = document.createElement('link');
        newLinkElement.id = tagId;
        newLinkElement.href = href;
        newLinkElement.rel = 'prefetch';
        document.head.appendChild(newLinkElement);
      }
    }, timerDuration);
  }
}

function initializeListeners(element) {
  if (!element.href) {
    return;
  }

  function listenForEvents(eventArray) {
    eventArray.forEach((event) => element.addEventListener(event, prefetchToggle.bind(element)));
  }

  function addListenersToElement() {
    listenForEvents(['mouseover', 'mouseout']);
    if (usingTouchDevice) {
      listenForEvents(['touchstart', 'touchend']);
    }
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

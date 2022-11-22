// Sidebar Toggle
const sidebar = document.querySelector('aside.sidebar');
const menuTrigger = document.querySelector('button.menu-trigger');
const menuTriggerClose = document.querySelector('button.menu-trigger-close');
const menuOpacity = document.querySelector('div.menu-overlay');

const toggleSidebar = () => {
  if (sidebar.classList.contains('!translate-x-0')) {
    sidebar.classList.remove('!translate-x-0')
    menuOpacity.classList.add('hidden')
  } else {
    sidebar.classList.add('!translate-x-0')
    menuOpacity.classList.remove('hidden')
  }
}

menuTrigger.addEventListener('click', toggleSidebar)
menuTriggerClose.addEventListener('click', toggleSidebar)
menuOpacity.addEventListener('click', toggleSidebar)

// Blog Page Scroll restoration
const scrollElement = document.querySelector('.scroll-area');
const scrollElementStateKey = "ScrollElementPosition";
window.onbeforeunload = function () {
  if (!scrollElement) return;
  const scrollPos = scrollElement.scrollTop;
  if (scrollPos) {
    localStorage.setItem(scrollElementStateKey, scrollPos)
  }
}
window.onload = function () {
  const scrollPos = localStorage.getItem(scrollElementStateKey)
  localStorage.removeItem(scrollElementStateKey);
  if (scrollElement) {
    scrollElement.scrollTop = scrollPos
  }
}

// Dark mode
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const darkModeStateKey = "DarkMode";
const isDark = JSON.parse(localStorage.getItem(darkModeStateKey) || 'false')
if (isDark) {
  document.documentElement.classList.add('dark');
}
darkModeToggle.addEventListener('click', () => {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem(darkModeStateKey, false)
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem(darkModeStateKey, true)

  }
})

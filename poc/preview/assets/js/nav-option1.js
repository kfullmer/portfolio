const trigger = document.getElementById("js_navigation-collapse-trigger");
const navigationContainer = document.getElementById("js_navigation-container");
const navigationModifierClass = "navigation-container--collapsed";

const animationDuration = 400;
let navigationIsCollapsed = false;
let navClicked = false;
let navLocked = false;
let screenSize = window.innerWidth;

const widthChange = anime.timeline({
  autoplay: false,
  easing: "easeInOutBack",
  begin: function(anim) {

    if (screenSize <= 1200) {
      navLocked = true;
      navigationIsCollapsed = true;
      widthChange.direction = "reverse"
    }
  },

});

widthChange
  .add({
    targets: navigationContainer,
    width: 80,
    duration: animationDuration,
  })
  .add(
    {
      targets: ".js_navigation-item-name",
      opacity: [1, 0],
      duration: animationDuration / 2,
    },
    `-=${animationDuration}`
  );

const changeNavWidth = () => {
  if (widthChange.began) {
    widthChange.reverse();
    if (widthChange.progress === 100 && widthChange.direction === "reverse") {
      widthChange.completed = false;
    }
  }

  if (widthChange.paused) {
    widthChange.play();
  }
}

trigger.addEventListener("click", function () {
  navigationIsCollapsed = !navigationIsCollapsed;

  if (navigationIsCollapsed) {
    navigationContainer.classList.add(navigationModifierClass);
  } else {
    navigationContainer.classList.remove(navigationModifierClass);
  }

  changeNavWidth()
});


let isResizing;

const setNavWidth = (e) => {
  screenSize = e.target.innerWidth

  if (e.target.innerWidth <= 1200 && !navLocked && !navigationIsCollapsed) {
    document.body.classList.remove('navigation-mobile-open');
    navigationContainer.classList.add(navigationModifierClass);
    widthChange.direction = 'normal'
    widthChange.play()
  }
}
let throttledResize;
let onResizeEnd;

const handleResize = (e) => {
  isResizing = true;

  // timeout to optimize resize event
  clearTimeout(throttledResize);
  throttledResize = setTimeout(() => {
    
    setNavWidth(e)
  }, 100);

  // timeout for code to run after resize ends
  clearTimeout(onResizeEnd);
    onResizeEnd = setTimeout(() => {

    if (e.target.innerWidth > 1200 && navLocked && navigationIsCollapsed) {
      trigger.click()
      navLocked = false
      navigationIsCollapsed = false
    }
  }, 400);
}

(function() {
  window.addEventListener('resize', handleResize);
})()
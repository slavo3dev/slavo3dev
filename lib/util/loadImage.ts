export function loadImage(id, targetId) {
  console.log("ID: ", id);
  console.log("targetID: ", targetId);
  // Either an <img>, or an element with a "data-image" attribute
  let el: any = document.getElementById(id);

  // Either the same element as above, or the targetId element
  let targetEl = targetId ? document.getElementById(targetId) : el;
  console.log("Target EL: ", targetEl);

  // Either the loaded <img>, or the path specified by the "data-image" attribute
  let imageToLoad;

  if (el.dataset.image) {
    console.log("el.dataset.image ", el.dataset.image);
    imageToLoad = el.dataset.image;
  } else if (typeof el.currentSrc === "undefined") {
    console.log("typeof el.currentSrc ", typeof el.currentSrc);
    imageToLoad = el.src;
  } else {
    console.log("Image to Load: ", imageToLoad);
    imageToLoad = el.currentSrc;
  }

  if (imageToLoad) {
    let img = new Image();
    img.src = imageToLoad;
    console.log("Image Loaded: ", img);
    img.onload = function () {
      targetEl.classList.add("is-loaded");
    };
  }
}

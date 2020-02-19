export const getParameterByName = (name, url) => {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};

export const convertToUrl = text => {
  return (
    text
      .toLowerCase()
      // .replace(/ +/g, "-")
      .replace(/[^a-z0-9+]+/gi, "-")
      .substring(0, 50)
  );
};

export const showSnackBar = (text, className = "nothing") => {
  var x = document.getElementById("snackbar");
  if (x.className.indexOf("show") === -1) {
    x.innerHTML = text;
    x.classList.add(className);
    x.classList.add("show");
    setTimeout(function() {
      x.className = "";
      x.innerHTML = "";
    }, 2900);
  }
};

export const loadingModal = message => {
  let loadingModal = document.querySelector("#loading-modal");
  let loadingModalMessage = document.querySelector("#loading-modal-message");
  if (message) {
    loadingModal.classList.remove("display-none");
    loadingModalMessage.innerHTML = message;
  } else {
    loadingModal.classList.add("display-none");
  }
};

export const hide = selector => {
  // If the element is a modal
  if (selector.match(/mdl/)) {
    document.querySelector(selector).style.display = "none";
  } else {
    document.querySelector(selector).classList.add("display-none");
  }
};

export const show = selector => {
  // If the element is a modal
  if (selector.match(/mdl/)) {
    document.querySelector(selector).style.display = "block";
  } else {
    document.querySelector(selector).classList.remove("display-none");
  }
};

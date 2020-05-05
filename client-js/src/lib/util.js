export const getParameterByName = (name, url) => {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};

export const convertToUrl = (text) => {
  return (
    text
      .toLowerCase()
      // .replace(/ +/g, "-")
      .replace(/[^a-z0-9+]+/gi, "-")
      .substring(0, 50)
  );
};

// @TODO: make this function work as expected
export const showSnackBar = (text, status, time = 2000) => {
  const snackbar = document.getElementById("snackbar");

  const hide = () => {
    snackbar.classList.add("display-none");
    snackbar.classList.remove("hide");
    snackbar.classList.remove("show");
    snackbar.classList.remove("success");
    snackbar.classList.remove("error");
  };

  const show = () => {
    if (status === "success") snackbar.classList.add("success");
    if (status === "error") snackbar.classList.add("error");
    snackbar.classList.remove("display-none");
    snackbar.classList.add("show");
    snackbar.innerHTML = text;

    setTimeout(() => {
      snackbar.classList.add("hide");
      setTimeout(() => {
        hide();
      }, 300);
    }, time);
  };

  if (snackbar.className.indexOf("show") > -1) {
    snackbar.classList.add("hide");
    setTimeout(() => {
      hide();
      show();
    }, 300);
  } else {
    show();
  }
};

export const loadingModal = (message) => {
  let loadingModal = document.querySelector("#loading-modal");
  let loadingModalMessage = document.querySelector("#loading-modal-message");
  if (message) {
    loadingModal.classList.remove("display-none");
    loadingModalMessage.innerHTML = message;
  } else {
    loadingModal.classList.add("display-none");
  }
};

export const hide = (selector) => {
  // If the element is a modal
  if (selector.match(/mdl/)) {
    document.querySelector(selector).style.display = "none";
  } else {
    document.querySelector(selector).classList.add("display-none");
  }
};

export const show = (selector) => {
  // If the element is a modal
  if (selector.match(/mdl/)) {
    document.querySelector(selector).style.display = "block";
  } else {
    document.querySelector(selector).classList.remove("display-none");
  }
};

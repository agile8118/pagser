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
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-")
    .substring(0, 50);
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

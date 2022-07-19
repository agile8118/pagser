export const getParameterByName = (name: string, url: string) => {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};

export const convertToUrl = (text: string) => {
  return (
    text
      .toLowerCase()
      // .replace(/ +/g, "-")
      .replace(/[^a-z0-9+]+/gi, "-")
      .substring(0, 50)
  );
};

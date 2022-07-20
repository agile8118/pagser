interface IUtil {
  getParameterByName: (name: string, url?: string) => string | null;
  convertToUrl: (string: string) => string;
}

const util: any = {};

util.getParameterByName = (name: string, url?: string) => {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};

util.convertToUrl = (string: string) => {
  return (
    string
      .toLowerCase()
      // .replace(/ +/g, "-")
      .replace(/[^a-z0-9+]+/gi, "-")
      .substring(0, 50)
  );
};

export default util as IUtil;

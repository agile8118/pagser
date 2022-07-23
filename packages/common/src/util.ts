interface IUtil {
  getParameterByName: (name: string, url?: string) => string | null;
  convertToUrl: (string: string) => string;
  randomText: (length: number) => string;
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

util.randomText = (length: number) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;

  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export default util as IUtil;

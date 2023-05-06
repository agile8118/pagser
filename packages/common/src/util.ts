interface IUtil {
  getParameterByName: (name: string, url?: string) => string | null;
  convertToUrl: (string: string) => string;
  randomText: (length: number) => string;
  isBottom: (el: HTMLElement) => boolean;
  pageUrl: (
    url: string,
    username: string,
    type: "public" | "private"
  ) => string;
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

// Converts a string to a url (mostly used for creating public page urls)
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

util.isBottom = (el: HTMLElement) => {
  return el.getBoundingClientRect().bottom <= window.innerHeight;
};

util.pageUrl = (url: string, username: string, type: "public" | "private") => {
  if (type === "public") return `/public-pages/${url}`;
  return `/${username}/${url}`;
};

export default util as IUtil;

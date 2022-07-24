import axios from "axios";

import alert from "./alert";
import { domain } from "./keys";

interface optionsLayout {
  auth?: boolean;
  contentType?: string;
  alert?: boolean;
}

class Request {
  // Show user the correct error message upon unsuccessful requests
  handleError(e: any, alertMsg = true) {
    if (e.response && e.response.data && e.response.data.message) {
      if (alertMsg) {
        let message =
          typeof e.response.data.message === "string"
            ? e.response.data.message
            : e.response.data.message[0];

        alert(message, "error");
      }
    } else {
      if (alertMsg) alert("Sorry, an unexpected error has happened.", "error");
    }
  }

  post(url: string, params: any, options?: optionsLayout) {
    return new Promise<{ data: {} }>((resolve, reject) => {
      const config: any = {};

      if (options?.auth) {
        config.headers = {
          authorization: localStorage.getItem("token"),
        };
      }

      if (options?.contentType) {
        config.headers["Content-Type"] = options.contentType;
      }

      axios
        .post(`${domain}${url}`, params, config)
        .then((response) => {
          resolve(response.data);
        })
        .catch((e) => {
          this.handleError(e, options?.alert);

          const errObj = {
            status: 0,
            message: "",
          };

          errObj.status = e.response.status;
          errObj.message = e.response.data;

          reject(errObj);
        });
    });
  }

  get(url: string, options?: optionsLayout) {
    return new Promise<{ data: {} }>((resolve, reject) => {
      const config: any = {};

      if (options && options.auth) {
        config.headers = {
          authorization: localStorage.getItem("token"),
        };
      }

      axios
        .get(`${domain}${url}`, config)
        .then((response) => {
          resolve(response.data);
        })
        .catch((e) => {
          this.handleError(e, options?.alert);

          const errObj = {
            status: 0,
            message: "",
          };

          errObj.status = e.response.status;
          errObj.message = e.response.data;

          reject(errObj);
        });
    });
  }

  put(url: string, params: any, options?: optionsLayout) {
    return new Promise<{ data: {} }>((resolve, reject) => {
      const config: any = {};

      if (options?.auth) {
        config.headers = {
          authorization: localStorage.getItem("token"),
        };
      }

      if (options?.contentType) {
        config.headers["Content-Type"] = options.contentType;
      }

      axios
        .put(`${domain}${url}`, params, config)
        .then((response) => {
          resolve(response.data);
        })
        .catch((e) => {
          this.handleError(e, options?.alert);

          const errObj = {
            status: 0,
            message: "",
          };

          errObj.status = e.response.status;
          errObj.message = e.response.data;

          reject(errObj);
        });
    });
  }

  patch(url: string, params: any, options?: optionsLayout) {
    return new Promise<{ data: {} }>((resolve, reject) => {
      const config: any = {};

      if (options?.auth) {
        config.headers = {
          authorization: localStorage.getItem("token"),
        };
      }

      if (options?.contentType) {
        config.headers["Content-Type"] = options.contentType;
      }

      axios
        .patch(`${domain}${url}`, params, config)
        .then((response) => {
          resolve(response.data);
        })
        .catch((e) => {
          this.handleError(e, options?.alert);

          const errObj = {
            status: 0,
            message: "",
          };

          errObj.status = e.response.status;
          errObj.message = e.response.data;

          reject(errObj);
        });
    });
  }

  delete(url: string, options?: optionsLayout) {
    return new Promise<{ data: {} }>((resolve, reject) => {
      const config: any = {};

      if (options && options.auth) {
        config.headers = {
          authorization: localStorage.getItem("token"),
        };
      }

      axios
        .delete(`${domain}${url}`, config)
        .then((response) => {
          resolve(response.data);
        })
        .catch((e) => {
          this.handleError(e, options?.alert);

          const errObj = {
            status: 0,
            message: "",
          };

          errObj.status = e.response.status;
          errObj.message = e.response.data;

          reject(errObj);
        });
    });
  }
}

export default new Request();

import axios from "axios";

import alert from "./alert";
import redirectToLogin from "./redirectToLogin";

const domain = "/api";

interface optionsLayout {
  auth?: boolean;
  data?: any;
  contentType?: string;
  alert?: boolean;
}

class Request {
  // Show user the correct error message upon unsuccessful requests.
  // Accepts either a raw axios error (e.response.data) or a rejected errObj (e.message).
  // When alertMsg is false (alert: false was passed), 401 is also suppressed so the
  // caller can handle it silently (e.g. show NotFound instead of redirecting).
  handleError(e: any, alertMsg = true) {
    const status = e.response?.status ?? e.status;
    if (status === 401) {
      if (alertMsg) redirectToLogin("You need to be logged in to proceed.");
      return;
    }
    if (!alertMsg) return;
    const data = e.response?.data ?? e.message;
    const message = data?.message;
    if (message) {
      alert(typeof message === "string" ? message : message[0], "error");
    } else {
      alert("An unexpected error occurred.", "error");
    }
  }

  post<T = unknown>(url: string, params: any, options?: optionsLayout): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const config: any = {};

      if (options?.contentType) {
        config.headers = { "Content-Type": options.contentType };
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

  get<T = unknown>(url: string, options?: optionsLayout): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      axios
        .get(`${domain}${url}`)
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

  put<T = unknown>(url: string, params: any, options?: optionsLayout): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const config: any = {};

      if (options?.contentType) {
        config.headers = { "Content-Type": options.contentType };
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

  patch<T = unknown>(url: string, params: any, options?: optionsLayout): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const config: any = {};

      if (options?.contentType) {
        config.headers = { "Content-Type": options.contentType };
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

  delete<T = unknown>(url: string, options?: optionsLayout): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const config: any = {};

      if (options && options.data) {
        config.data = options.data;
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

const alert = (message: string, type = "default") => {
  const alert = document.querySelector("#js--alert");

  if (!alert) {
    // create the stack message elements
    const ElAlert = document.createElement("div");
    const ELAlertP = document.createElement("p");
    const ELAlertButton = document.createElement("button");
    const ELAlertButtonSpan = document.createElement("span");

    ElAlert.setAttribute("class", "alert-snackbar alert-snackbar--close");
    ElAlert.setAttribute("id", "js--alert");
    ELAlertButton.setAttribute("type", "button");
    ELAlertButtonSpan.innerHTML = "&#10005";

    ELAlertButton.appendChild(ELAlertButtonSpan);
    ElAlert.appendChild(ELAlertP);
    ElAlert.appendChild(ELAlertButton);

    document.querySelector("body")?.appendChild(ElAlert);
  }

  const alertText = document.querySelector("#js--alert p");
  const alertButton = document.querySelector("#js--alert button");

  alert?.classList.remove("alert-snackbar--error");
  alert?.classList.remove("alert-snackbar--success");
  alert?.classList.remove("alert-snackbar--open");
  alert?.classList.remove("alert-snackbar--close");

  alert?.classList.add("alert-snackbar--open");

  if (type === "success") {
    alert?.classList.add("alert-snackbar--success");
  }

  if (type === "error") {
    alert?.classList.add("alert-snackbar--error");
  }

  if (alertText) alertText.innerHTML = message;

  setTimeout(() => {
    alert?.classList.add("alert-snackbar--close");
    alert?.classList.remove("alert-snackbar--error");
    alert?.classList.remove("alert-snackbar--success");
    alert?.classList.remove("alert-snackbar--open");
  }, 5000);

  alertButton?.addEventListener("click", () => {
    alert?.classList.add("alert-snackbar--close");
    alert?.classList.remove("alert-snackbar--error");
    alert?.classList.remove("alert-snackbar--success");
    alert?.classList.remove("alert-snackbar--open");
  });
};

export default alert;

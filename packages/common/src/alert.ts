const alert = (message: string, type = "default") => {
  const alert = document.querySelector("#js--alert");

  if (!alert) {
    // create the stack message elements
    const ElAlert = document.createElement("div");
    const ELAlertP = document.createElement("p");
    const ELAlertButton = document.createElement("button");
    const ELAlertButtonSpan = document.createElement("span");

    ElAlert.setAttribute("class", "alert alert--close");
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

  alert?.classList.remove("alert--error");
  alert?.classList.remove("alert--success");
  alert?.classList.remove("alert--open");
  alert?.classList.remove("alert--close");

  alert?.classList.add("alert--open");

  if (type === "success") {
    alert?.classList.add("alert--success");
  }

  if (type === "error") {
    alert?.classList.add("alert--error");
  }

  if (alertText) alertText.innerHTML = message;

  setTimeout(() => {
    alert?.classList.add("alert--close");
    alert?.classList.remove("alert--error");
    alert?.classList.remove("alert--success");
    alert?.classList.remove("alert--open");
  }, 5000);

  alertButton?.addEventListener("click", () => {
    alert?.classList.add("alert--close");
    alert?.classList.remove("alert--error");
    alert?.classList.remove("alert--success");
    alert?.classList.remove("alert--open");
  });
};

export default alert;

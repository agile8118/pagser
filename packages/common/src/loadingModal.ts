const loadingModal = (message?: string) => {
  let loadingModal = document.querySelector("#loading-modal") as HTMLElement;
  let loadingModalMessage = document.querySelector(
    "#loading-modal-message"
  ) as HTMLElement;
  if (message) {
    loadingModal.classList.remove("display-none");
    loadingModalMessage.innerHTML = message;
  } else {
    loadingModal.classList.add("display-none");
  }
};

export default loadingModal;

const redirectToLogin = (message: string) => {
  sessionStorage.setItem("loginMessage", message);
  window.location.href = "/login";
};

export default redirectToLogin;
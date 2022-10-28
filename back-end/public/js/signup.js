import axios from "axios";
import { showAlert } from "./message";

export const userSignup = async ({
  name,
  email,
  password,
  passwordConfirm,
}) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/user/signup",
      data: {
        name: name,
        email: email,
        password: password,
        passwordConfirm: passwordConfirm,
        passwordChangedAt: Date.now(),
      },
    });
    if (res.data.status === "success") {
      showAlert(
        "success",
        "Registered",
        "Congratulations, your account has been successfully created.👋 "
      );
      window.setTimeout(() => {
        location.assign("/");
      }, 500);
    }
  } catch (err) {
    showAlert("error", "HATA", err.response.data.message);
  }
};
export const logout = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: "/logout",
    });
    if (res.data.status === "success") {
      window.setTimeout(() => {
        location.assign("/");
      }, 300);
    }
  } catch (err) {
    showAlert("error", "Error logging out! Try again.");
  }
};

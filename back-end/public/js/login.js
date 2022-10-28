import axios from "axios";
import { showAlert } from "./message";

export const userLogin = async ({ email, password }) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/user/login",
      data: {
        email: email,
        password: password,
      },
    });
    if (res.data.status === "success") {
      showAlert("success", "Success", "Logged in successfully");
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

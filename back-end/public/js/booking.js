import axios from "axios";
import { showAlert } from "./message";

export const createBooking = async ({ name,phone,guests,date,time,email }) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/booking",
      data: {
          name:name,
          phone:phone,
          guests:guests,
          date:date,
          time:time,
          email:email,
      },
    });
    if (res.data.status === "success") {
      showAlert("success", "Success", "Booking created successfully!");
    }
  } catch (err) {
    showAlert("error", "HATA", err.response.data.message);
  }
};


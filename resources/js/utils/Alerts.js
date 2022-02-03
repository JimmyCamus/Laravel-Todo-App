import Swal from "sweetalert2";

export const successAlert = (title, text, confirmButtonText) => {
  Swal.fire({
    title: title,
    text: text,
    confirmButtonText: confirmButtonText,
    icon: "success",
  });
};

export const errorAlert = (title, text, confirmButtonText) => {
  Swal.fire({
    title: title,
    text: text,
    confirmButtonText: confirmButtonText,
    icon: "error",
  });
};

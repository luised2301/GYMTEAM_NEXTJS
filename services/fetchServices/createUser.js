import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_SECRET_ENDPOINT;

const USER_URL = `${API_ENDPOINT}/users/`;

export const createUser = async (userData) => {
  console.log("entraste a crear usuario", userData);
  const MySwal = withReactContent(Swal);
  console.log(USER_URL);
  const token = localStorage.getItem("token");
  let userId = "";
  if (token) {
    const payload = token.split(".")[1];
    userId = JSON.parse(atob(payload)).id;
  }
  userData = { ...userData, userId };
  const response = await fetch(`${USER_URL}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  const data = await response.json();
  if (data.success === true) {
    // MySwal.fire({
    //   title: <strong>Session creada con exito! </strong>,
    //   icon: `success`,
    // });
    console.log("creado con exito");
    return data;
  }
  if (data.success !== true) {
    // MySwal.fire({
    //   title: <strong>La session no pudo ser creada! </strong>,
    //   icon: `error`,
    // });
    console.log("creado sin exito");
    return data;
  }

  return data;
};

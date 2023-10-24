import Axios from "axios";

// const baseURL = "http://localhost:5000";
const baseURL = "https://giant-gray-lovebird.cyclic.app";

const POST = async (route, formData, header = {}) => {
  const result = await Axios({
    method: "POST",
    headers: header,
    url: baseURL + route,
    data: formData,
  });

  return result.data;
};

const GET = async (route) => {
  const result = await Axios({
    method: "GET",
    url: baseURL + route,
  });
  return result.data;
};

const DELETE = async (route, formData, header) => {
  const result = await Axios({
    method: "Delete",
    headers: header,
    url: baseURL + route,
    data: formData,
  });
  return result.data;
};

const PUT = async (route, formData, header) => {
  const result = await Axios({
    method: "PUT",
    headers: header,
    url: baseURL + route,
    data: formData,
  });
  return result.data;
};

const GETID = async (route, formData, header = {}) => {
  const result = await Axios({
    method: "get",
    headers: header,
    url: baseURL + route,
    data: formData,
  });
  return result.data;
};

export { POST, GET, DELETE, PUT, GETID };

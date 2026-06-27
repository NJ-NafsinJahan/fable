import { baseURL } from "./baseUrl";

// for update, delete,add
export const serverMutation = async (path, method, data) => {
  //   console.log(data, "from server mutation");
  //   console.log(baseURL, path, "from server mutation");

  const res = await fetch(`${baseURL}${path}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

// for get
export const serverFetch = async (path) => {
  const res = await fetch(`${baseURL}${path}`);
  return res.json();
};

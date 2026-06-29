import { serverFetch } from "../server";

export const myEbooks = async (email) => {
  const result = await serverFetch(`/api/ebooks/my/${email}`);
  console.log(result, "myEbooks");
  return result;
};

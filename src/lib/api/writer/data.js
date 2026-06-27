import { serverFetch } from "../server";

export const myWriterProfile = async (email) => {
  const result = await serverFetch(`/api/writer-profile/${email}`);
  console.log(result, "myWriterProfile");
  return result;
};

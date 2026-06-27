"use client";

import { serverMutation } from "../server";

// for add organization
export const addWriter = async (data) => {
  const resData = await serverMutation("/api/writer-profile", "POST", data);
  return resData;
};

// for update writer profile data
export const updateWriter = async (data, id) => {
  console.log(data, id, "data and id from action.js");
  const resData = await serverMutation(
    `/api/writer-profile/${id}`,
    "PATCH",
    data,
  );
  return resData;
};

// bookMark add kra jbe

"use client";

import { serverMutation } from "../server";

// for add organization
export const addEbook = async (data) => {
  const resData = await serverMutation("/api/ebooks", "POST", data);
  return resData;
};

// for update writer profile data
export const updateEbook = async (data, id) => {
  console.log(data, id, "data and id from action.js ");
  const resData = await serverMutation(`/api/ebooks/${id}`, "PATCH", data);
  return resData;
};

// bookMark add kra jbe

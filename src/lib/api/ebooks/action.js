"use client";

import { deleteMutation, serverMutation } from "../server";

// for add organization
export const addEbook = async (data) => {
  const resData = await serverMutation("/api/ebooks", "POST", data);
  return resData;
};

// for update ebook
export const updateEbook = async (data, id) => {
  console.log(data, id, "data and id from action.js ");
  const resData = await serverMutation(`/api/ebooks/${id}`, "PATCH", data);
  return resData;
};

// for delete ebook
export const deleteEbook = async (id) => {
  console.log(id, "data and id from action.js ");
  const resData = await deleteMutation(`/api/ebooks/${id}`);
  return resData;
};

// bookMark add kra jbe

"use client";
import React, { useEffect, useState } from "react";

import { Card, CardHeader, Input, TextArea, Button, Form } from "@heroui/react";
import DashboardHeader from "@/components/DashboardHeader";
import { useForm } from "react-hook-form";
import { uploadImage } from "@/app/utils/uploadImage";
import { useSession } from "@/lib/auth-client";
import { addWriter } from "@/lib/api/writer/action";
import { updateWriter } from "@/lib/api/writer/action";
import toast from "react-hot-toast";
import { myWriterProfile } from "@/lib/api/writer/data";

const WriterProfile = () => {
  const { data: session } = useSession();
  //   console.log(session, "from writer profile");
  const [myProfile, setMyProfile] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const setWriterData = async () => {
      const writer = await myWriterProfile(session?.user?.email);
      setMyProfile(writer);
    };
    setWriterData();
  }, [session]);
  console.log(myProfile, "myProfile");

  //   onsubmit
  const onSubmit = async (data) => {
    console.log(data, "data from writer profile pg");

    // Upload image to imgBB
    const imageFile = data.image[0];
    // console.log(imageFile, "image file");

    const imageUrl = await uploadImage(imageFile); //reUsable uploadImage function call
    console.log(imageUrl, "Image Url");

    //   for api call
    const writerData = {
      writerName: data?.writerName,
      image: imageUrl,
      website: data?.website,
      bio: data?.bio,
      writerEmail: session?.user?.email,
      // createdAt: new Date(),
      // status: "active",
    };
    // console.log(writerData, "writerData");

    if (!myProfile) {
      const resData = await addWriter(writerData); //mongodb te data send kra
      console.log(resData, "resData");

      if (resData?.success || resData?.result?.insertedId) {
        toast.success("Profile added successfully...!");
      }
    } else {
      const updatedResData = await updateWriter(writerData, myProfile._id);
      if (
        updatedResData?.success ||
        updatedResData?.result?.modifiedCount > 0
      ) {
        toast.success("Profile Data Updated successfully...!");
      }
    }
  };

  const [formData, setFormData] = useState({
    writerName: "",
    writerEmail: "",
    image: "",
    website: "",
    bio: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="p-1">
      {/* HEADER SECTION */}
      <DashboardHeader
        title="Writer Profile"
        description="Manage your creator identity, bio, and social connections."
        badge="Creator Mode"
      />

      {/* FORM SECTION */}
      <div className="mt-6 space-y-6 max-w-3xl w-full mx-auto">
        <Card
          className="border border-white/5 bg-slate-900/40 backdrop-blur-xl shadow-2xl rounded-2xl"
          radius="lg"
        >
          <CardHeader className="flex flex-col gap-1 pb-4 border-b border-white/5 p-6">
            <h3 className="text-xl font-bold text-white">
              Writer Profile Details
            </h3>
            <p className="text-slate-400 text-xs">
              Set up your public creator identity and bio.
            </p>
          </CardHeader>

          {/* Form section */}

          <div className="p-6">
            <Form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5 w-full"
            >
              {/* Writer Name */}

              <div className="w-full space-y-2">
                <label
                  htmlFor="writerName"
                  className="text-sm font-medium text-slate-300 block"
                >
                  Name <span className="text-rose-500">*</span>
                </label>

                <Input
                  defaultValue={myProfile?.writerName}
                  {...register("writerName", {
                    required: "Writer Name is Required",
                  })}
                  id="writerName"
                  placeholder="e.g. Jane Doe"
                  required
                  //   value={formData.writerName}
                  onChange={handleChange}
                  className="w-full text-white bg-slate-900/50 border-white/10 hover:border-cyan-500/50 focus-within:border-cyan-500!"
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>

              {/* Writer Email */}
              <div className="w-full space-y-2">
                <label
                  htmlFor="writerEmail"
                  className="text-sm font-medium text-slate-300 block"
                >
                  Email <span className="text-rose-500">*</span>
                </label>

                <Input
                  defaultValue={myProfile?.writerEmail}
                  {...register("writerEmail", {
                    required: "Email is Required",
                  })}
                  id="writerEmail"
                  type="email"
                  label="Writer Email"
                  placeholder="e.g. jane@example.com"
                  required
                  //   value={formData.writerEmail}
                  onChange={handleChange}
                  className="w-full text-white bg-slate-900/50 border-white/10 hover:border-cyan-500/50 focus-within:border-cyan-500!"
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Profile Image URL */}
              {/* <Input
                id="image"
                label="Profile Image URL"
                placeholder="https://images.unsplash.com/... or avatar link"
                required
                value={formData.image}
                onChange={handleChange}
                className="w-full bg-slate-900/50 border-white/10 hover:border-cyan-500/50 focus-within:border-cyan-500!"
              /> */}

              <div className="w-full space-y-2">
                <label
                  htmlFor="image"
                  className="text-sm font-medium text-slate-300 block"
                >
                  Image <span className="text-rose-500">*</span>
                </label>

                <Input
                  {...register("image", { required: "Image is Required" })}
                  type="file"
                  accept="image/*"
                  id="image"
                  placeholder="https://example.com/avatar.jpg"
                  className="w-full bg-slate-900/50 border-white/10 hover:border-cyan-500 text-white"
                />
                {errors.image && (
                  <p className="text-red-500">{errors.image.message}</p>
                )}
              </div>

              {/* Website */}
              <div className="w-full space-y-2">
                <label
                  htmlFor="website"
                  className="text-sm font-medium text-slate-300 block"
                >
                  Portfolio Website <span className="text-rose-500">*</span>
                </label>

                <Input
                  defaultValue={myProfile?.website}
                  {...register("website", { required: "Website is Required" })}
                  id="website"
                  label="Website / Portfolio"
                  placeholder="e.g. writer.com"
                  required
                  //   value={formData.website}
                  onChange={handleChange}
                  className="w-full text-white bg-slate-900/50 border-white/10 hover:border-cyan-500/50 focus-within:border-cyan-500!"
                />
                {errors.website && (
                  <p className="text-red-500">{errors.website.message}</p>
                )}
              </div>

              {/* Bio */}
              <div className="w-full space-y-2">
                <label
                  htmlFor="bio"
                  className="text-sm font-medium text-slate-300 block"
                >
                  Biography <span className="text-rose-500">*</span>
                </label>
                <TextArea
                  defaultValue={myProfile?.bio}
                  {...register("bio", { required: "Bio is Required" })}
                  id="bio"
                  label="Biography"
                  placeholder="Tell your readers about yourself and your writing style..."
                  required
                  //   value={formData.bio}
                  onChange={handleChange}
                  className="w-full  bg-slate-900/50 border border-white/10 rounded-xl focus:outline-none text-white"
                />
                {errors.bio && (
                  <p className="text-red-500">{errors.bio.message}</p>
                )}
              </div>

              {/* Action Button */}
              <div className="flex gap-4 pt-2">
                <Button
                  type="submit"
                  className="bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold h-11 px-6 shadow-lg shadow-cyan-600/10 cursor-pointer"
                  radius="lg"
                >
                  Create Profile
                </Button>
              </div>
            </Form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default WriterProfile;

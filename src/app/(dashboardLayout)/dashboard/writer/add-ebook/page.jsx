"use client";
import React from "react";
import DashboardHeader from "@/components/DashboardHeader";
import { useSession } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import { uploadImage } from "@/app/utils/uploadImage";
import { Card, CardHeader, Input, Button, Form } from "@heroui/react";
import { addEbook } from "@/lib/api/ebooks/action";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

// { writerSession }
const addEbookPage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const CATEGORIES = [
    "Fiction",
    "Sci-Fi",
    "Mystery",
    "Biography",
    "Poetry",
    "Business",
    "Self-Help",
    "Other",
  ];
  const STATUS_OPTIONS = ["Available", "Sold"];

  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // form submit function
  const onSubmit = async (data) => {
    console.log(data, "form data");

    // Upload image to imgBB
    const imageFile = data.coverImage[0];
    // console.log(imageFile, "image file");

    const imageUrl = await uploadImage(imageFile); //reUsable uploadImage function call
    console.log(data?.coverImage, "Image Url from add book");

    // FOR UPDATE DATE
    delete data?.coverImage;
    const updateData = {
      ...data,
      coverImage: imageUrl,
      writerEmail: session?.user?.email,
    };

    // api call
    const result = await addEbook(updateData);
    console.log(result, "add ebook");

    // if (result.insertedId) {
    //   toast.success("Ebook added Successfully..!");
    //   router.push("/ebooks");
    // }
    if (
      result &&
      (result.insertedId || result.acknowledged || result.success || result._id)
    ) {
      toast.success("Ebook added Successfully..!", { duration: 2000 });

      router.push("/ebooks");
    } else {
      console.log("Condition didn't match!");
      toast.error("Something went wrong or response mismatch!", {
        duration: 3000,
      });
    }
  };
  return (
    <div>
      {/* HEADER SECTION */}
      <DashboardHeader
        title="Publish New Ebook"
        description="Bring your next masterpiece to life. Fill in the details, upload your manuscript, and share it with the world."
        badge="New Creation"
      />

      {/* FOR FORM DATA */}
      <div className="mt-6 max-w-3xl mx-auto">
        <Card
          className="border border-white/5 bg-slate-900/40 backdrop-blur-xl shadow-2xl rounded-2xl"
          radius="lg"
        >
          <CardHeader className="flex flex-col gap-1 pb-4 border-b border-white/5 p-6">
            <h3 className="text-xl font-bold text-white">
              Publish a New Ebook
            </h3>
            <p className="text-slate-400 text-xs">
              Complete the form by providing a book cover image and the required
              information.
            </p>
          </CardHeader>

          <div className="p-6">
            <Form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 w-full"
            >
              {/* form body */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {/* book title */}
                <div className="w-full">
                  <label
                    htmlFor="title"
                    className="text-sm font-medium text-slate-300 block"
                  >
                    Book Title <span className="text-rose-500">*</span>
                  </label>
                  <Input
                    {...register("title", {
                      required: "Book Name is Required !",
                    })}
                    label="Ebook Title"
                    placeholder="e.g. The Art of Fable"
                    className="w-full text-white bg-slate-900/50 border-white/10"
                  />
                  {errors.title && (
                    <span className="text-rose-500 text-xs mt-1 block">
                      {errors.title.message}
                    </span>
                  )}
                </div>

                {/* writer name */}
                <div className="w-full">
                  <label
                    htmlFor="writerName"
                    className="text-sm font-medium text-slate-300 block"
                  >
                    Writer Name <span className="text-rose-500">*</span>
                  </label>
                  <Input
                    {...register("name", {
                      required: "Name is Required !",
                    })}
                    label="Writer Name"
                    placeholder="e.g. Mr. Writer"
                    className="w-full text-white bg-slate-900/50 border-white/10"
                  />
                  {errors.name && (
                    <span className="text-rose-500 text-xs mt-1 block">
                      {errors.name.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {/* category */}
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-sm font-medium text-slate-300">
                    Category
                  </label>
                  <select
                    {...register("category", {
                      required: "Category is Required",
                    })}
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-3 h-11 text-white text-sm outline-none cursor-pointer focus:border-cyan-500"
                  >
                    <option value="" className="bg-slate-950 text-slate-400">
                      Select Category
                    </option>
                    {CATEGORIES.map((cat) => (
                      <option
                        key={cat}
                        value={cat}
                        className="bg-slate-950 text-white"
                      >
                        {cat}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <span className="text-rose-500 text-xs block">
                      {errors.category.message}
                    </span>
                  )}
                </div>

                {/* status */}
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-sm font-medium text-slate-300">
                    Status
                  </label>
                  <select
                    {...register("status", {
                      required: "Status is Required",
                    })}
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-3 h-11 text-white text-sm outline-none cursor-pointer focus:border-cyan-500"
                  >
                    {STATUS_OPTIONS.map((status) => (
                      <option
                        key={status}
                        value={status}
                        className="bg-slate-950 text-white"
                      >
                        {status}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* price */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <div className="w-full">
                  <label
                    htmlFor="price"
                    className="text-sm font-medium text-slate-300 block"
                  >
                    Price <span className="text-rose-500">*</span>
                  </label>
                  <Input
                    {...register("price", {
                      required: "Price is Required",
                      min: { value: 0, message: "Price can not be minus" },
                    })}
                    type="number"
                    step="any"
                    label="Price ($)"
                    placeholder="0.00"
                    className="w-full text-white bg-slate-900/50 border-white/10"
                  />
                  {errors.price && (
                    <span className="text-rose-500 text-xs mt-1 block">
                      {errors.price.message}
                    </span>
                  )}
                </div>

                {/* date */}
                <div className="w-full">
                  <label
                    htmlFor="date"
                    className="text-sm font-medium text-slate-300 block"
                  >
                    Date <span className="text-rose-500">*</span>
                  </label>
                  <Input
                    {...register("uploadedDate", {
                      required: "Date is Required",
                    })}
                    type="date"
                    label="Uploaded Date"
                    onClick={(e) => e.target.showPicker()}
                    className="w-full  bg-slate-900/50 border-white/10 text-white [&::-webkit-calendar-picker-indicator]:invert"
                  />

                  {errors.uploadedDate && (
                    <span className="text-rose-500 text-xs mt-1 block">
                      {errors.uploadedDate.message}
                    </span>
                  )}
                </div>
              </div>
              {/* Book Image */}

              <div className="w-full flex flex-col gap-1.5">
                <label htmlFor="coverImage" className="text-sm text-slate-300">
                  High-Resolution Cover Image
                </label>
                <input
                  {...register("coverImage", {
                    required: "Image is Required",
                  })}
                  id="coverImage"
                  type="file"
                  accept="image/*"
                  className="w-full text-sm text-slate-400 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-slate-800 file:text-cyan-400 cursor-pointer bg-slate-900/50 border border-white/10 rounded-xl h-11 flex items-center pr-2"
                />
                {errors.coverImage && (
                  <span className="text-rose-500 text-xs block">
                    {errors.coverImage.message}
                  </span>
                )}
              </div>

              {/* Description*/}
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="description" className="text-sm text-slate-300">
                  Description (Preview of Content)
                </label>
                <textarea
                  {...register("description", {
                    required: "Description is Required",
                  })}
                  id="description"
                  placeholder="Write a beautiful summary of the book..."
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl p-3 focus:outline-none focus:border-cyan-500 min-h-30 text-white text-sm"
                />
                {errors.description && (
                  <span className="text-rose-500 text-xs block">
                    {errors.description.message}
                  </span>
                )}
              </div>

              {/* Button */}
              <Button
                type="submit"
                className="bg-linear-to-r from-cyan-500 to-indigo-600 text-white font-bold h-11 px-6 shadow-lg w-full md:w-auto"
                radius="lg"
              >
                Upload Ebook
              </Button>
            </Form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default addEbookPage;

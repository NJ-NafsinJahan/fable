import React from "react";

import {
  Button,
  Card,
  Form,
  Input,
  Modal,
  TextArea,
  CardHeader,
} from "@heroui/react";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaImage } from "react-icons/fa";
import { uploadImage } from "@/app/utils/uploadImage";

const EditEbookModal = ({ isModalOpen, setIsModalOpen, editingEbook }) => {
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
    // const imageFile = data.coverImage[0];
    // console.log(imageFile, "image file");

    // const imageUrl = await uploadImage(imageFile); //reUsable uploadImage function call
    console.log(data?.coverImage, "Image Url from add book");

    // FOR UPDATE DATE
    delete data?.coverImage;
    const updateData = {
      ...data,
      //   coverImage: imageUrl,
      //   writerEmail: session?.user?.email,
    };

    if (data?.coverImage) {
      const imageFile = data.coverImage[0];
      const imageUrl = await uploadImage(imageFile); //reUsable uploadImage function call
    }

    // api call
    const result = await addEbook(updateData);
    console.log(result, "add ebook");

    if (result.insertedId) {
      toast.success("Ebook added Successfully..!");
      //   router.push("/ebooks");
    }
  };

  return (
    <div>
      {" "}
      <Modal isOpen={isModalOpen} onOpenChange={setIsModalOpen}>
        <Modal.Backdrop>
          <Modal.Container>
            {/* ******** */}
            <Modal.Dialog className="dark text-white bg-slate-950 border border-white/10 p-2 rounded-2xl w-full max-w-lg mx-auto">
              <Card
                className="border border-white/5 bg-slate-900/40 backdrop-blur-xl shadow-2xl rounded-2xl flex flex-col max-h-[85vh]"
                radius="lg"
              >
                <CardHeader className="flex flex-col gap-1 pb-4 border-b border-white/5 p-6">
                  <h3 className="text-xl font-bold text-white">
                    Publish a New Ebook
                  </h3>
                  <p className="text-slate-400 text-xs">
                    Complete the form by providing a book cover image and the
                    required information.
                  </p>
                </CardHeader>

                <div className="p-6 overflow-y-auto h-[50vh] md:h-[60vh] pr-4 space-y-4">
                  <Form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4 w-full"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                      {/* Title input */}
                      <div className="w-full">
                        <label className="text-sm font-medium text-slate-300 block">
                          Book Title *
                        </label>
                        <Input
                          {...register("title", {
                            required: "Book Name is Required !",
                          })}
                          label="Ebook Title"
                          className="w-full text-white"
                        />
                      </div>
                      {/* Writer input */}
                      <div className="w-full">
                        <label className="text-sm font-medium text-slate-300 block">
                          Writer Name *
                        </label>
                        <Input
                          {...register("name", {
                            required: "Name is Required !",
                          })}
                          label="Writer Name"
                          className="w-full text-white"
                        />
                      </div>
                    </div>

                    {/* Category & Status */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                      <div className="flex flex-col gap-2 w-full">
                        <label className="text-sm font-medium text-slate-300">
                          Category
                        </label>
                        <select
                          {...register("category")}
                          className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-3 h-11 text-white text-sm"
                        >
                          <option value="">Select Category</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-2 w-full">
                        <label className="text-sm font-medium text-slate-300">
                          Status
                        </label>
                        <select
                          {...register("status")}
                          className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-3 h-11 text-white text-sm"
                        >
                          <option>Active</option>
                        </select>
                      </div>
                    </div>

                    {/* Price & Date */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                      <div>
                        <label className="text-sm font-medium text-slate-300 block">
                          Price *
                        </label>
                        <Input
                          {...register("price")}
                          type="number"
                          label="Price ($)"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-slate-300 block">
                          Date *
                        </label>
                        <Input
                          {...register("uploadedDate")}
                          type="date"
                          label="Uploaded Date"
                          className="w-full"
                        />
                      </div>
                    </div>

                    {/* Cover Image */}
                    <div className="w-full flex flex-col gap-1.5">
                      <label className="text-sm text-slate-300">
                        High-Resolution Cover Image
                      </label>
                      <input
                        {...register("coverImage")}
                        type="file"
                        className="w-full bg-slate-900/50 border border-white/10 rounded-xl"
                      />
                    </div>

                    {/* Description */}
                    <div className="flex flex-col gap-2 w-full">
                      <label className="text-sm text-slate-300">
                        Description
                      </label>
                      <textarea
                        {...register("description")}
                        className="w-full bg-slate-900/50 border border-white/10 rounded-xl p-3 min-h-24 text-white"
                      />
                    </div>

                    {/* Button */}
                    <Button
                      type="submit"
                      className="bg-linear-to-r from-cyan-500 to-indigo-600 text-white w-full"
                    >
                      Upload Ebook
                    </Button>
                  </Form>
                </div>
              </Card>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default EditEbookModal;

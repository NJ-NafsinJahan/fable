"use client";

import Link from "next/link";
import { motion } from "motion/react";

import {
  Card,
  CardHeader,
  CardContent as CardBody,
  Input,
  Button,
  Label,
  Form,
} from "@heroui/react";
import { FaGoogle } from "react-icons/fa";
import { PiNotebookBold } from "react-icons/pi";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { uploadImage } from "../utils/uploadImage";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // for onSubmit
  const onSubmit = async (data) => {
    console.log(data.image, "data from register pg");
    // return;
    // *****
    // Upload image to imgBB
    const imageFile = data.image[0];
    // console.log(imageFile, "image file");

    const imageUrl = await uploadImage(imageFile); //reUsable uploadImage function call
    // console.log(imageUrl, "Image Url");
    // return;

    const { data: signUpData, error: signUpError } =
      await authClient.signUp.email({
        // ...data,
        email: data.email,
        name: data.name,
        password: data.password,
        image: imageUrl,
        role: data.role,
      });

    // console.log(signUpData, signUpError, "signUp data");

    if (signUpError) {
      toast.error("Registration not succeed...");
    } else {
      toast.success("Registration is Successful !");
      //   redirect("/");
      router.push("/");
    }
  };

  return (
    <div className="bg-[#030712] min-h-screen w-full flex items-center justify-center pt-32 pb-16 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <Card className="w-full max-w-lg border border-white/5 bg-slate-950/70 backdrop-blur-xl shadow-2xl p-4 sm:p-6 z-10">
        <CardHeader className="flex flex-col gap-1 items-center pb-6 text-center">
          {/* LOGO SECTION */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-linear-to-r from-cyan-400 via-blue-600 to-indigo-700 rounded-lg flex items-center justify-center font-bold text-lg shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <PiNotebookBold size="20px" color="white" />
            </div>
            <motion.span
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [0.92, 1.05, 0.92],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="font-semibold text-2xl tracking-wider select-none text-white"
            >
              Fable
            </motion.span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-linear-to-r from-cyan-400 via-blue-600 to-indigo-700  bg-clip-text text-transparent mt-3">
            Create an Account
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xs sm:max-w-none italic">
            Join Fable to read premium ebooks or manage your own creations.
          </p>
        </CardHeader>

        <CardBody className="gap-4 p-0 sm:p-2">
          {/* Form */}
          <Form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
            {/* name */}
            <div>
              <Label
                htmlFor="name"
                className="text-xs font-semibold text-slate-300 block mb-1.5"
              >
                Full Name
              </Label>
              <Input
                {...register("name", { required: "Name is Required" })}
                id="name"
                placeholder="John Doe"
                className="w-full bg-slate-900/50 border-white/10 hover:border-cyan-500  text-white"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>

            {/* email address */}
            <div>
              <Label
                htmlFor="email"
                className="text-xs font-semibold text-slate-300 block mb-1.5"
              >
                Email Address
              </Label>
              <Input
                {...register("email", { required: "Email is Required" })}
                id="email"
                placeholder="john@example.com"
                type="email"
                className="w-full bg-slate-900/50 border-white/10 hover:border-cyan-500 text-white"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* image */}
            <div>
              <Label
                htmlFor="image"
                className="text-xs font-semibold text-slate-300 block mb-1.5"
              >
                Profile Image URL
              </Label>
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

            {/* password */}
            <div>
              <Label
                htmlFor="password"
                className="text-xs font-semibold text-slate-300 block mb-1.5"
              >
                Password
              </Label>
              <Input
                {...register("password", {
                  required: "Password is Required ",
                  maxLength: 12,
                  minLength: 6,
                })}
                id="password"
                placeholder="••••••••"
                type="password"
                className="w-full bg-slate-900/50 border-white/10 hover:border-cyan-500  text-white"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>

            {/* role select */}
            <div className="w-full flex flex-col gap-1.5">
              <Label
                htmlFor="role"
                className="text-xs font-semibold text-slate-300 block"
              >
                Select Role
              </Label>

              <div className="relative w-full block">
                <select
                  id="role"
                  {...register("role", { required: "Role is required" })}
                  className="block w-full max-w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 h-12 text-white text-sm outline-none transition-all hover:border-cyan-500/50 focus:border-cyan-500 appearance-none cursor-pointer pr-10"
                >
                  <option value="reader" className="bg-slate-950 text-white">
                    Reader (Read Books)
                  </option>
                  <option value="writer" className="bg-slate-950 text-white">
                    Writer (Publish Ebooks)
                  </option>
                  <option value="admin" className="bg-slate-950 text-white">
                    Admin
                  </option>
                </select>

                {/* arrow icon */}
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-400">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              {errors.role && (
                <p className="text-red-500 text-xs mt-0.5 pl-1">
                  {errors.role.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-linear-to-r from-cyan-400 via-blue-600 to-indigo-700  text-white font-bold h-12 shadow-lg shadow-pink-500/10 hover:shadow-pink-500/20 rounded-xl transition-transform active:scale-95 cursor-pointer mt-2"
            >
              Create Account
            </Button>
          </Form>

          <div className="flex items-center my-4">
            <div className="grow border-t border-white/5" />
            <span className="mx-4 text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider whitespace-nowrap">
              Or Sign Up With
            </span>
            <div className="grow border-t border-white/5" />
          </div>

          <Button
            variant="bordered"
            className="w-full border-white/10 hover:bg-white/5 hover:border-white/20 text-white font-semibold h-11 rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-colors"
          >
            Google Account <FaGoogle className="text-cyan-500" />
          </Button>

          <p className="text-center text-xs sm:text-sm text-slate-400 mt-6">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-cyan-500 hover:text-cyan-400 font-semibold hover:underline"
            >
              Log In
            </Link>
          </p>
        </CardBody>
      </Card>
    </div>
  );
}

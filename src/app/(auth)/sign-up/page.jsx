"use client";

import { signUp } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import { signUpEmail } from "better-auth/api";
import { Bounce, toast } from "react-toastify";

const page = () => {
     const onSubmit = async(e) => {
      
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};
    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    const { data: resdata, error } = await signUp.email({
    name: data.name, // required, The name of the user.
    email: data.email, // required, The email address of the user.
    password: data.password, // required, The password of the user. It should be at least 8 characters long and max 128 by default.
   
    callbackURL: "/", // An optional URL to redirect to after the user signs up.
});

console.log(resdata , error);


    
 toast.success('ACCOUNT CREATE SUCCESFULLY', {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
  };

    return (
        <div className="max-w-5xl mx-auto mt-7">
        
<Form
  className="w-full max-w-90 rounded-2xl border border-[#e2eae3] bg-[#fafcf9] p-5 shadow-sm"
  onSubmit={onSubmit}
>
  <Fieldset className="border-0 p-0">
    <div className="mb-4 text-center">
      <Fieldset.Legend className="mb-1 w-full text-center text-xl font-bold text-[#253329]">
        অ্যাকাউন্ট তৈরি করুন
      </Fieldset.Legend>

      <Description className="text-xs text-[#7b847c]">
        বিনা খরচে সাইন আপ করে সব ফিচার ব্যবহার শুরু করুন
      </Description>
    </div>

    <FieldGroup className="gap-3">
      <TextField isRequired name="name">
        <Label className="mb-1 block text-xs font-medium text-[#303b32]">
          নাম
        </Label>
        <Input
          placeholder="যেমন: রহিম উদ্দিন"
          className="h-8 w-full rounded-lg border border-[#e1e9e1] bg-[#fafcf9] px-3 text-xs text-[#263329] outline-none placeholder:text-[#8b938b] focus:border-[#078b43] focus:ring-1 focus:ring-[#078b43]"
        />
        <FieldError className="text-xs text-red-500" />
      </TextField>

      <TextField isRequired name="email" type="email">
        <Label className="mb-1 block text-xs font-medium text-[#303b32]">
          ইমেইল
        </Label>
        <Input
          placeholder="you@example.com"
          className="h-8 w-full rounded-lg border border-[#e1e9e1] bg-[#fafcf9] px-3 text-xs text-[#263329] outline-none placeholder:text-[#8b938b] focus:border-[#078b43] focus:ring-1 focus:ring-[#078b43]"
        />
        <FieldError className="text-xs text-red-500" />
      </TextField>

      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে";
          }
          if (!/[A-Z]/.test(value)) {
            return "কমপক্ষে একটি বড় হাতের ইংরেজি অক্ষর দিন";
          }
          if (!/[0-9]/.test(value)) {
            return "কমপক্ষে একটি সংখ্যা দিন";
          }
          return null;
        }}
      >
        <Label className="mb-1 block text-xs font-medium text-[#303b32]">
          পাসওয়ার্ড
        </Label>
        <Input
          placeholder="কষ্টসাধ্য ও অক্ষর"
          className="h-8 w-full rounded-lg border border-[#e1e9e1] bg-[#fafcf9] px-3 text-xs text-[#263329] outline-none placeholder:text-[#8b938b] focus:border-[#078b43] focus:ring-1 focus:ring-[#078b43]"
        />
        <FieldError className="text-xs text-red-500" />
      </TextField>

      <TextField
        isRequired
        name="confirmPassword"
        type="password"
      >
        <Label className="mb-1 block text-xs font-medium text-[#303b32]">
          পাসওয়ার্ড নিশ্চিত করুন
        </Label>
        <Input
          placeholder="আবার লিখুন"
          className="h-8 w-full rounded-lg border border-[#e1e9e1] bg-[#fafcf9] px-3 text-xs text-[#263329] outline-none placeholder:text-[#8b938b] focus:border-[#078b43] focus:ring-1 focus:ring-[#078b43]"
        />
        <FieldError className="text-xs text-red-500" />
      </TextField>
    </FieldGroup>

    <Fieldset.Actions className="mt-3 flex flex-col gap-2">
      <Button
        type="submit"
        className="h-9 w-full rounded-lg bg-[#078b43] text-xs font-semibold text-white shadow-sm transition hover:bg-[#067638]"
      >
        অ্যাকাউন্ট তৈরি করুন
      </Button>
    </Fieldset.Actions>
  </Fieldset>

  {/* Divider */}
  <div className="my-3 flex items-center gap-3">
    <div className="h-px flex-1 bg-[#dfe6df]" />
    <span className="text-[11px] text-[#727b73]">অথবা</span>
    <div className="h-px flex-1 bg-[#dfe6df]" />
  </div>

  {/* Social Signup */}
  <div className="grid grid-cols-2 gap-2">
    <Button
      type="button"
      variant="secondary"
      className="flex h-8 items-center justify-center gap-1 rounded-lg border border-[#e1e9e1] bg-white px-2 text-[10px] font-medium text-[#303b32] hover:bg-[#f2f6f2]"
      onPress={() => {}}
    >
      <span className="font-bold text-[#4285F4]">G</span>
      Google দিয়ে চালিয়ে যান
    </Button>

    <Button
      type="button"
      variant="secondary"
      className="flex h-8 items-center justify-center gap-1 rounded-lg border border-[#e1e9e1] bg-white px-2 text-[10px] font-medium text-[#303b32] hover:bg-[#f2f6f2]"
      onPress={() => {}}
    >
      <span className="text-sm">◉</span>
      GitHub দিয়ে চালিয়ে যান
    </Button>
  </div>

  {/* Login Link */}
  <p className="mt-3 text-center text-[11px] text-[#727b73]">
    অ্যাকাউন্ট আছে?{" "}
    <a
      href="/login"
      className="font-medium text-[#078b43] hover:underline"
    >
      লগ ইন করুন
    </a>
  </p>
</Form>


        </div>
    );
};

export default page;
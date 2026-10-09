"use client";

import { signUp, updateUser } from "@/lib/auth-client";
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

   await updateUser({
    
    name: data.name,
})




    
 toast.success('Name Change SUCCESFULLY', {
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
  className="w-full  rounded-2xl border border-[#e2eae3] bg-[#fafcf9] p-5 shadow-sm"
  onSubmit={onSubmit}
>
  <Fieldset className="border-0 p-0">
    <div className="mb-4 text-center">
      <Fieldset.Legend className="mb-1 w-full text-center text-xl font-bold text-[#253329]">
       আমার প্রোফাইল
      </Fieldset.Legend>

      <Description className="text-xs text-[#7b847c]">
     আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
      </Description>
    </div>

    <FieldGroup className="gap-3">
      <TextField isRequired name="name">
        <Label className="mb-1 block text-xs font-medium text-[#303b32]">
          নাম
        </Label>
        <Input
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
       আপডেট
      </Button>
    </Fieldset.Actions>
  </Fieldset>

  

  

  
</Form>


        </div>
    );
};

export default page;
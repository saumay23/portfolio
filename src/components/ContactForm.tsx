import React from "react";
import { useForm } from "react-hook-form";
import { BsFillTelephoneFill, BsEnvelope } from "react-icons/bs";
type Props = {};
type InputForm = {
  firstname: string;
  lastname: string;
  subject: string;
  message: string;
};
const ContactForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputForm>();
  const SubmitForm = (data: InputForm) => {
    window.location.href = `mailto:sk10882@nyu.edu?subject=${data?.subject}&body=Hi, my name is ${data?.firstname} ${data?.lastname}. ${data?.message}`;
  };
  return (
    <div className="relative flex h-screen overflow-hidden flex-col text-left space-y-10  max-w-full mx-auto px-10 justify-end pb-10   items-center">
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Let's Talk</span>
        </h4>
      </div>
      <div className="space-y-10">
        <div className="flex items-center justify-center space-x-5">
          <BsFillTelephoneFill className="fill-[#F7AB0A] w-6 h-6" />
          <p>+1-(516)-968-1066</p>
        </div>
        <div className="flex items-center justify-center space-x-5">
          <BsEnvelope className="fill-[#F7AB0A] w-6 h-6" />
          <p>sk10882@nyu.edu</p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(SubmitForm)}
        className="flex flex-col space-y-2 w-fit mx-auto"
      >
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
          <input
            className="contactInput"
            type="text"
            placeholder="First Name"
            {...register("firstname")}
          />
          <input
            className="contactInput"
            type="text"
            placeholder="Last Name"
            {...register("lastname")}
          />
        </div>
        <input
          className="contactInput"
          placeholder="Subject"
          {...register("subject")}
        />
        <textarea
          className="contactInput resize-none"
          placeholder="Message"
          {...register("message")}
        />
        <button
          type="submit"
          className="bg-[#F7AB0A] py-4 px-10 rounded-md text-black font-bold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

"use client";
import React, {
  useState,
} from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

const Contact =
  () => {
    const schema =
      yup
        .object()
        .shape(
          {
            firstname:
              yup
                .string()
                .required(
                  "First Name is Required"
                ),
            lastname:
              yup.string(),
            email:
              yup
                .string()
                .email(
                  "Invalid email address"
                )
                .required(
                  "Email is required"
                ),
            phone:
              yup
                .string()
                .test(
                  "is-valid-phone",
                  "Phone number must be 12 digits with a leading +",
                  (
                    value
                  ) => {
                    if (
                      !value
                    )
                      return true;
                    return (
                      /^\+?\d{12}$/.test(
                        value
                      ) &&
                      value.startsWith(
                        "+"
                      ) &&
                      value.length ===
                        13
                    );
                  }
                ),
            message:
              yup
                .string()
                .required(
                  "Message is required"
                ),
          }
        );
    const {
      register,
      handleSubmit,
      formState:
        {
          errors,
        },
    } = useForm(
      {
        resolver:
          yupResolver(
            schema
          ),
        mode: "all",
      }
    );
    const [
      msg,
      setMsg,
    ] =
      useState<boolean>(
        false
      );
    const [
      isOpen,
      setIsOpen,
    ] =
      useState<boolean>(
        false
      );
    const sendMail =
      async (
        data: any
      ) => {
        const endpoint =
          "/api/send-email";
        try {
          await axios.post(
            endpoint,
            data
          );
          setMsg(
            true
          );
          setIsOpen(
            true
          );
        } catch (error) {
          setMsg(
            false
          );
          setIsOpen(
            true
          );
        }
      };
    return (
      <>
        <motion.section
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition:
              {
                delay: 2,
                duration: 0.4,
                ease: "easeIn",
              },
          }}
          className="py-6"
        >
          <div className="container mx-auto relative">
            <div className="xl:h-[54%] ">
              <form className="flex flex-col items-center gap-6 p-10 rounded-xl text-center border shadow-2xl">
                <h3 className="text-xl lg:text-2xl text-center capitalize">
                  I
                  have
                  got
                  just
                  what
                  you
                  need.
                  <span className="text-3xl lg:text-4xl text-accent/70 underline">
                    Let's
                    Talk
                  </span>
                </h3>
                <p className="text-sm leading-10 lg:text-[14px] ">
                  I'd
                  love
                  to
                  hear
                  from
                  you!
                  Whether
                  you
                  have
                  questions,
                  need
                  more
                  information,
                  or
                  just
                  want
                  to
                  chat,
                  fill
                  out
                  the
                  form
                  below,
                  and
                  I'll
                  get
                  back
                  to
                  you
                  as
                  soon
                  as
                  possible.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-1/2 w-full">
                  <div className="flex flex-col gap-2 ">
                    <Input
                      type="firstname"
                      placeholder="Firstname"
                      {...register(
                        "firstname"
                      )}
                    />
                    {errors.firstname && (
                      <p className="text-sm text-red-400 text-left">
                        {
                          errors
                            .firstname
                            .message
                        }
                      </p>
                    )}
                  </div>
                  <Input
                    type="lastname"
                    placeholder="Lastname"
                    {...register(
                      "lastname"
                    )}
                  />
                  <div className="flex flex-col gap-2">
                    <Input
                      type="email"
                      placeholder="Email Address"
                      {...register(
                        "email"
                      )}
                    />
                    {errors.email && (
                      <p className="text-sm text-left text-red-400">
                        {
                          errors
                            .email
                            .message
                        }
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Input
                      type="phone"
                      placeholder="Phone Number"
                      {...register(
                        "phone"
                      )}
                    />
                    {errors.phone && (
                      <p className="text-sm text-left text-red-400">
                        {
                          errors
                            .phone
                            .message
                        }
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-full  items-center">
                  <Textarea
                    className="h-[150px] md:w-1/2"
                    placeholder="Type your message here."
                    {...register(
                      "message"
                    )}
                  />
                  {errors.message && (
                    <p className="text-sm text-left text-red-400">
                      {
                        errors
                          .message
                          .message
                      }
                    </p>
                  )}
                </div>
                <Button
                  onClick={handleSubmit(
                    sendMail
                  )}
                  size="lg"
                  className="max-w-40 bg-accent"
                >
                  Send
                  Message
                </Button>
              </form>
            </div>
          </div>
          <Dialog
            open={
              isOpen
            }
            onClose={
              setIsOpen
            }
            className="relative z-10"
          >
            <DialogBackdrop
              transition
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center  ">
                <DialogPanel
                  transition
                  className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                >
                  <div className="bg-white px-4 py-4 min-h-[200px] text-center items-center flex pt-5 sm:p-6 sm:pb-4">
                    {" "}
                    <p className="text-sm ">
                      {msg
                        ? "Thank you,for reaching out! The message has been received successfully and I would get back to you as soon as possible."
                        : `I'm sorry, but there was an issue sending the message. Please try again later or contact sk10882@nyu.edu directly.`}
                    </p>
                  </div>
                </DialogPanel>
              </div>
            </div>
          </Dialog>
        </motion.section>
      </>
    );
  };

export default Contact;

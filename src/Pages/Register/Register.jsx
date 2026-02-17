import React from "react";
import FormInput from "../../Components/FormInput/FormInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useStore } from "../../Components/Data/StoreData";
import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent";
import { FaPlus } from "react-icons/fa6";
import { MdSupervisorAccount } from "react-icons/md";
import "./Register.css";
export default function Register() {
  const { storeUsers } = useStore();
  console.log(localStorage);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match", {
        duration: 4000,
        position: "top-center",
        removeDelay: 1000,
        toasterId: "default",
        className: "toaster",
      });
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.some((u) => u.email === form.email);
    if (exists) {
      toast.error("This account is already created", {
        duration: 4000,
        position: "top-center",
        removeDelay: 1000,
        toasterId: "default",
        className: "toaster",
      });
      return;
    }

    const newUser = {
      id: Date.now(),
      name: form.name,
      email: form.email.trim(),
      password: form.password.trim(),
      address: "",
      photo: "",
      status1: "active",
      role: "user",
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    toast.success("Account created successfully", {
      duration: 4000,
      position: "top-center",
      removeDelay: 1000,
      toasterId: "default",
      className: "toaster",
    });

    storeUsers(newUser);
    navigate("/login");
  };
  console.log(localStorage);
  return (
    <section className="register-sec flex flex-col justify-center items-center py-40 px-10 w-full  ">
      <form
        className="register-form flex flex-col justify-center items-center py-20 px-5 text-white rounded-lg  gap-4 gold-border w-full md:w-100"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-10">Sign Up Account</h2>
        <FormInput
          placeholder="Full Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <FormInput
          type="email"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <FormInput
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <FormInput
          type="password"
          placeholder="Confirm Password"
          onChange={(e) =>
            setForm({ ...form, confirmPassword: e.target.value })
          }
        />
        <ButtonComponent
          text="Create Account"
          typeclass="btn-1"
          padding=" px-[10%] py-4 md:px-27"
          icon={MdSupervisorAccount}
        />
      </form>
    </section>
  );
}

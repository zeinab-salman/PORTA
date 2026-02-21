import React, { useState } from "react";
import FormInput from "../../Components/FormInput/FormInput";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useStore } from "../../Components/Data/StoreData";
import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent";
import { MdSupervisorAccount } from "react-icons/md";
import "./Register.css";

export default function Register() {
  const { storeUsers } = useStore();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ التحقق من الحقول الفارغة
    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.password.trim() ||
      !form.confirmPassword.trim()
    ) {
      toast.error("All fields are required", {
        position: "top-center",
        className: "toaster",
      });
      return;
    }

    // ✅ التحقق من تطابق كلمة المرور
    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match", {
        position: "top-center",
        className: "toaster",
      });
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    // ✅ التحقق من وجود الحساب
    const exists = users.some(
      (u) => u.email === form.email.trim()
    );

    if (exists) {
      toast.error("This account is already created", {
        position: "top-center",
        className: "toaster",
      });
      return;
    }

    // ✅ إنشاء المستخدم
    const newUser = {
      id: Date.now(),
      name: form.name.trim(),
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
      position: "top-center",
      className: "toaster",
    });

    storeUsers(newUser);
    navigate("/login");
  };

  return (
    <section className="register-sec flex flex-col justify-center items-center py-40 px-10 w-full">
      <form
        className="register-form flex flex-col justify-center items-center py-20 px-5 text-white rounded-lg gap-4 gold-border w-full md:w-100"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-10 text-center">Sign Up Account</h2>

        <FormInput
          placeholder="Full Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <FormInput
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <FormInput
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <FormInput
          type="password"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={(e) =>
            setForm({
              ...form,
              confirmPassword: e.target.value,
            })
          }
        />

        <ButtonComponent
          text="Create Account"
          typeclass="btn-1"
          padding="px-[10%] py-4 md:px-27"
          icon={MdSupervisorAccount}
        />
      </form>
    </section>
  );
}
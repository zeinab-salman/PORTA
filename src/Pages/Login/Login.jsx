import "./Login.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import FormInput from "../../Components/FormInput/FormInput";
import { useAuth } from "../../Pages/Register/AuthProvider";
import { toast } from "react-hot-toast";
import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent";
import { MdSupervisorAccount } from "react-icons/md";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      toast.error("Please fill in all fields", {
        duration: 4000,
        position: "top-center",
        removeDelay: 1000,
        toasterId: "default",
        className: "toaster",
      });
      return; 
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    console.log("Users in LocalStorage:", users);

    const user = users.find(
      (u) => u.email === email.trim() && u.password === password.trim()
    );
    console.log("Found User:", user);

    if (!user) {
      toast.error("There is no account", {
        duration: 4000,
        position: "top-center",
        removeDelay: 1000,
        toasterId: "default",
        className: "toaster",
      });
      return;
    }

    login("dummy-token", user);
    navigate("/");
  };

  return (
    <section className="login-sec register-sec flex flex-col justify-center items-center py-40 px-10 w-full">
      <form
        className="login-form flex flex-col justify-center items-center py-20 px-5 text-white rounded-lg w-full gap-4 gold-border md:w-100"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center">Login</h2>

        <FormInput
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormInput
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <ButtonComponent
          text="Login"
          typeclass="btn-1"
          padding="px-[10%] py-4 md:px-36"
          icon={MdSupervisorAccount}
        />

        <p>
          Don’t have an account?{" "}
          <Link to="/Register" className="text-yellow-500">
            Register
          </Link>
        </p>
      </form>
    </section>
  );
}
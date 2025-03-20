import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignupForm() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
     
      return;
    }

    const signupData = { phone, password };

    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", signupData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Signup successful:", response.data);
      localStorage.setItem("token", "demo-token");
      navigate("/home");
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="max-w-[411px]">
      <section className="flex flex-col px-10 pt-6 pb-3.5 w-full bg-slate-50 rounded-[40px] shadow-[0px_25px_40px_rgba(0,0,0,0.1)]">
        <header>
          <h1 className="self-start text-2xl font-bold text-zinc-800">
            Begin your social life
          </h1>
          <p className="self-start mt-2.5 text-sm text-neutral-600">
            Choose one of the option to go
          </p>
        </header>

        <form className="flex flex-col">
          <input
            type="tel"
            placeholder="9988776655"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="px-7 py-5 mt-9 max-w-full text-xs font-medium bg-white rounded-lg border border-blue-300 text-neutral-950 w-[324px]"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-7 py-5 mt-3 max-w-full text-xs bg-white rounded-lg border border-neutral-200 text-neutral-600 w-[324px]"
          />

          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="px-7 py-5 mt-3 max-w-full text-xs bg-white rounded-lg border border-neutral-200 text-neutral-600 w-[324px]"
          />
        </form>

        <p className="self-start mt-12 ml-3 text-xs text-neutral-600">
          Or continue with
        </p>

        <div className="flex gap-3.5 mt-4">
          <button className="flex flex-col flex-1 justify-center items-center self-start px-5 py-2 rounded bg-neutral-100">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfcafbe513bd878d756538068b5730b6d1bf2f93dd48636fb88af698905f7da5"
              className="object-contain aspect-square w-[34px]"
              alt="Social login option 1"
            />
          </button>
          <button className="flex flex-col flex-1 justify-center px-5 py-2.5 rounded bg-neutral-100">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fde46424eb28b8a9a7cf93ccd5ebcc81b531d12ec9b4c0caa3e928ded2528556"
              className="object-contain aspect-[1.3] w-[43px]"
              alt="Social login option 2"
            />
          </button>
          <button className="flex flex-col flex-1 justify-center items-center px-5 py-2.5 rounded bg-neutral-100">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f694e3695627d6f353277878e7fd3a0a950233b86bf9a04bc1f23122a8eb59a9"
              className="object-contain aspect-square w-[35px]"
              alt="Social login option 3"
            />
          </button>
        </div>

        <div className="flex justify-center mt-4">
          <button
            onClick={handleSignup}
            className="gap-2.5 px-20 py-3.5 mt-8 max-w-full text-base font-semibold text-white bg-blue-500 rounded-3xl min-h-[46px] w-[231px]"
          >
            Signup
          </button>
        </div>
      </section>
    </div>
  );
}

export default SignupForm;

import React from "react";

const LoginForm = () => {
  const handleLogin = () => {
    // Login functionality would be implemented here
    console.log("Login button clicked");
  };

  return (
    <div className="max-w-[408px]">
      <div className="flex flex-col px-11 pt-7 pb-3 w-full bg-slate-50 rounded-[40px] shadow-[0px_25px_40px_rgba(0,0,0,0.1)]">
        <h1 className="self-start text-2xl font-bold text-zinc-800">
          Back to your social life
        </h1>

        <p className="self-start mt-2 text-sm text-neutral-600">
          Choose one of the option to go
        </p>

      
        <input
          type="text"
          value="9988776655"
          className="px-7 py-5 mt-9 text-xs font-medium whitespace-nowrap bg-white rounded-lg border border-blue-300 border-solid text-neutral-950"
          readOnly
        />

        
        <input
          type="password"
          placeholder="Password"
          className="px-7 py-5 mt-3 text-xs whitespace-nowrap bg-white rounded-lg border border-solid border-neutral-200 text-neutral-600"
        />

       
        <div className="flex gap-1.5 mt-9 text-xs text-neutral-600 items-center">
          <p>Or continue with</p>
          <div className="shrink-0 my-auto w-56 h-0 border-t border-neutral-200" />
        </div>

       
        <div className="flex gap-3.5 mt-6">
          
          <button className="flex flex-col flex-1 justify-center items-center self-start px-5 py-2.5 rounded bg-neutral-100">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a47dbbc760326c3cfa73862b1853108853a8d87c0d581fa250aa1cddc62d5b25?placeholderIfAbsent=true&apiKey=78edfb5432bb454ba45341ffa54eb21f"
              alt="Social login option 1"
              className="object-contain aspect-[1.03] w-[34px]"
            />
          </button>

          
          <button className="flex flex-col flex-1 justify-center px-5 py-3 rounded bg-neutral-100 items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/37a638339d2b5f5ac3be2940367b877d3bcae384207c1b3e7a1126e24b79ead2?placeholderIfAbsent=true&apiKey=78edfb5432bb454ba45341ffa54eb21f"
              alt="Social login option 2"
              className="object-contain w-11 aspect-[1.38]"
            />
          </button>

          {/* Third social button */}
          <button className="flex flex-col flex-1 justify-center items-center px-5 py-2.5 rounded bg-neutral-100">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7fe0ae0619f979b32ae2995f17c0c48fdc80e2686e3aa2730d9cd74a408c7194?placeholderIfAbsent=true&apiKey=78edfb5432bb454ba45341ffa54eb21f"
              alt="Social login option 3"
              className="object-contain aspect-[0.97] w-[35px]"
            />
          </button>
        </div>

        {/* Login button */}
        <div className="flex justify-center mt-9">
          <button
            onClick={handleLogin}
            className="px-20 py-3.5 text-base font-semibold text-white bg-blue-500 rounded-3xl min-h-[46px] w-[231px]"
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

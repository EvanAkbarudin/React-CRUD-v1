import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

const registerFormSchema = z.object({
  username: z.string().min(3, "Bang minimal 3 huruf yak").max(20, "Username maksimal 20 huruf"),
  password: z.string().min(6, "Password minimal 6 karakter").max(20, "Password maksimal 20 karakter"),
});

type RegisterFormScema = z.infer<typeof registerFormSchema>;

const ReactHookFormPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<RegisterFormScema>({
    resolver: zodResolver(registerFormSchema),
  });

  const handleRegisterUser = (value: RegisterFormScema) => {
    alert("User registered successfully!");
    console.log(value);
  };

  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8  bg-gray-900">
      <h1 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">React Hook Form Page</h1>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={form.handleSubmit(handleRegisterUser)} className="form flex flex-col gap-4">
          <div>
            <label className="block text-sm/6 font-medium text-gray-100">
              Username:
              <input
                type="text"
                {...form.register("username")}
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </label>
            <span className="text-sm text-red-500">{form.formState.errors.username?.message}</span>
          </div>

          <div>
            <label className="block text-sm/6 font-medium text-gray-100">
              Password:
              <input
                type={showPassword ? "text" : "password"}
                {...form.register("password")}
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </label>
            <span className="text-sm text-red-500">{form.formState.errors.password?.message}</span>
            <span className="text-white">
              <input type="checkbox" onChange={(event) => setShowPassword(event.target.checked)} className="mr-2" />
              Show Password
            </span>
          </div>

          <div className="flex justify-center">
            <button
              disabled={form.formState.isSubmitting}
              className="rounded-md bg-indigo-500 px-3 py-1.5 text-base font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              <Link to="/home">Register</Link>
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-400">
          Not a member?
          <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </div>
  );
};

export default ReactHookFormPage;

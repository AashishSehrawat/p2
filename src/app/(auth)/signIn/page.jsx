'use client'

import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/logo.png";
import login from "../../../assets/login.webp";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { signInSchema } from "@/schemas/signInSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


const SignIn = () => {

  const router = useRouter();

  // zod implematation
  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    }
  })

  const onSubmit = async () => {

  }

  return (
    <div className="w-full bg-blue-50 flex items-center justify-center h-screen">
      <div className="w-[75%] flex h-[80%] shadow-xl rounded-3xl">
        <div className="flex flex-col gap-8 p-10 w-1/2 bg-white rounded-tl-3xl rounded-bl-3xl">
          <div className="">
            <Link href="/">
              <Image src={logo} alt="" width={200} />
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-4xl">Welcome back!</h3>

            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
                 <Button type="submit" className="bg-[var(--blue)] text-[1.05rem] w-44 transition duration-300 cursor-pointer">
                    Signin
                  </Button>
            </form>
          </Form>

            {/* <form action="" method="post">
              <div className="loginEmail">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
              <div className="loginPassword">
                <label>Password</label>
                <div>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                  />
                  <span
                    className="loginPasswordWrapper"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FiEye /> : <LuEyeClosed />}
                  </span>
                </div>
              </div>
              <button className="loginButton">Sign In</button>
            </form> */}
            <p className="text-center">
              Don't have an account? <Link className="text-[var(--blue)]" href="/signUp">Sign Up</Link>
            </p>
          </div>
        </div>
        <div className="w-1/2 relative overflow-hidden">
          <Image
            className="absolute h-full w-full object-cover rounded-tr-3xl rounded-br-3xl"
            src={login}
            alt="Login"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;

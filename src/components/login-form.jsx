import { cn } from "@/lib/utils";
import react, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import signup_video from "../media/signup_video.mp4";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
export function LoginForm({ className, ...props }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function login() {
    event.preventDefault();
    console.log(email);
  }
  function loginGoogle(res) {
    const data = jwtDecode(res.credential);
    console.log(data);
  }
  return (
    <div
      className={cn(
        "flex flex-col gap-6 w-full max-w-[890px] h-auto md:h-[800px] justify-center px-4",
        className
      )}
      {...props}
    >
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Welcome back</h1>
                <p className="text-muted-foreground text-balance p-2">
                  Enter your credentials to continue
                </p>
              </div>

              {/* for email */}
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  focus={"1"}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              {/* for password */}
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-2 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <Button type="submit" className="w-full" onClick={login}>
                Login
              </Button>
              <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-card text-muted-foreground relative z-10 px-2">
                  Or continue with
                </span>
              </div>

              <GoogleLogin
                onSuccess={(res) => loginGoogle(res)}
                variant="outline"
                type="button"
                className="w-full"
              />
            </div>
          </form>
          <div className="bg-muted relative hidden md:block">
            <img
              src="src/media/web_logo.jpg"
              alt="Website Logo"
              className="absolute inset-0 h-[530px] w-[600px] object-cover dark:brightness-[0.2] dark:grayscale"
            />
            {/* <video autoPlay playsInline muted loop className='h-[800px] w-full object-cover'><source src={signup_video} type='video/mp4' /></video> */}
          </div>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}

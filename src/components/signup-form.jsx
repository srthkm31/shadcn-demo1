import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import signup_video from "../media/signup_video.mp4";
import { Checkbox } from "@/components/ui/checkbox";


export function SignupForm({ className, ...props }) {
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef(null);
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  useEffect(() => {
    const handleLoadedData = () => setVideoReady(true);
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("loadeddata", handleLoadedData);
      return () => videoElement.removeEventListener("loadeddata", handleLoadedData);
    }
  }, []);

  return (
    <div
      className={cn(
        "flex flex-col gap-6 w-full max-w-[890px] h-auto md:h-[800px] justify-center px-4", className,
        videoReady ? "opacity-100 transition-opacity duration-500" : "opacity-0"
      )}
      {...props}
    >
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Create your account</h1>
                <p className="text-muted-foreground text-balance p-2">
                  Enter your credentials to continue
                </p>
              </div>

              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" className="peer" required />
                <label htmlFor="terms" className="text-md font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Accept terms and conditions
                </label>
              </div>

              <Button type="submit" className="w-full">
                Sign up
              </Button>
              
              
              
              <div className="text-center text-sm">
                Already have an account? <a href="/login" className="underline underline-offset-4">Log in</a>
              </div>
            </div>
          </form>
          <div className="bg-muted relative hidden md:block">
            <video ref={videoRef} autoPlay playsInline muted loop className="h-[560px] w-[600px] object-cover">
              <source src={signup_video} type="video/mp4" />
            </video>
          </div>
        </CardContent>
      </Card>
      <div className="text-muted-foreground text-center text-xs text-balance">
        By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}

import { Label } from "@radix-ui/react-label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function Login() {
  return (
    <div className="h-screen max-w-lg mx-auto flex justify-center items-center">
        <Card className="">
            <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>Enter your email below to login to your account</CardDescription>
                <CardContent className={cn("p-0")}>
                    <form className="">
                        <div className="flex flex-col py-3">
                            <Label htmlFor="email">Email<span className="text-red-500 pl-1">*</span></Label>
                            <Input id="email" type="email" placeholder="type here" required/>
                        </div>
                        <div className="flex flex-col py-3">
                            <div className="flex justify-between">
                                <Label htmlFor="password">Password<span className="text-red-500 pl-1">*</span></Label>
                                <a href="/forgot">Forgot your password?</a>
                            </div>
                            <Input id="password" type="password" placeholder="type here" required/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Button>Login</Button>
                            <Button variant={'outline'}>Login with Google</Button>
                            <p className="text-center">I dont't have account! <span><a href="/signup">Signup</a></span></p>
                        </div>
                    </form>
                </CardContent>
            </CardHeader>
        </Card>
    </div>
  )
}

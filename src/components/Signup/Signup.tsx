import { Label } from "@radix-ui/react-label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function Signup() {
    return (
        <div className="h-screen max-w-lg mx-auto flex justify-center items-center">
            <Card className="">
                <CardHeader>
                    <CardTitle className="text-2xl">Signup</CardTitle>
                    <CardDescription>Enter your details below to signup your account</CardDescription>
                    <CardContent className={cn("p-0")}>
                        <form className="">
                            <div className="flex flex-col py-3">
                                <Label htmlFor="name">Name<span className="text-red-500 pl-1">*</span></Label>
                                <Input id="name" type="text" placeholder="type here" required />
                            </div>
                            <div className="flex flex-col py-3">
                                <Label htmlFor="email">Email<span className="text-red-500 pl-1">*</span></Label>
                                <Input id="email" type="email" placeholder="type here" required />
                            </div>
                            <div className="flex flex-col py-3">
                                <Label htmlFor="password">Password<span className="text-red-500 pl-1">*</span></Label>
                                <Input id="password" type="password" placeholder="type here" required />
                            </div>
                            <div className="flex flex-col py-3">
                                <Label htmlFor="conformpassword">Conform Password<span className="text-red-500 pl-1">*</span></Label>
                                <Input id="conformpassword" type="password" placeholder="type here" required />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Button>Signup</Button>
                                <p className="text-center">Already have an account? <span><a href="/login">Login</a></span></p>
                            </div>
                        </form>
                    </CardContent>
                </CardHeader>
            </Card>
        </div>
    )
}

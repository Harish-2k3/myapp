import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

export default function Forgot() {
    const [step, setStep] = useState<1 | 2>(1);

    const handelSubmit = (e: any) => {
        e.preventDefault();
        setStep(2)
    }

    return (
        <div className="h-screen max-w-lg mx-auto flex justify-center items-center">
            <Card className="relative">
                <CardHeader>
                    <div className="flex justify-between">
                        <div className={`flex items-center cursor-pointer bg-black py-2 px-1 rounded-full text-white ${step == 1 ? "hidden":"absolute top-2 left-2"}`} onClick={()=>setStep(1)}>
                            <ArrowLeft className="h-4"/>
                        </div>
                        <CardTitle className={`text-2xl ${step == 1 ? "mt-0": "mt-6"}`}>{step == 1 ? "Forgot Password" : "Reset Password"}</CardTitle>
                    </div>
                    <CardDescription>{step == 1 ? "Enter your email below to verify your account" : "Set your new password below"}</CardDescription>
                    <CardContent className={cn("p-0")}>
                        <form onSubmit={handelSubmit}>
                            {step == 1 ? (
                                <div>
                                    <div className="flex flex-col py-3">
                                        <Label htmlFor="email">Email<span className="text-red-500 pl-1">*</span></Label>
                                        <Input id="email" type="email" placeholder="type here" required />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <Button>Verify</Button>
                                        <p className="text-center">Back to login! <span><a href="/login">Login</a></span></p>
                                    </div>
                                </div>
                            ) :
                                <div>
                                    <div className="flex flex-col py-3">
                                        <Label htmlFor="password">New Password<span className="text-red-500 pl-1">*</span></Label>
                                        <Input id="password" type="password" placeholder="type here" required />
                                    </div>

                                    <div className="flex flex-col py-3">
                                        <Label htmlFor="conformpassword">Conform Password<span className="text-red-500 pl-1">*</span></Label>
                                        <Input id="conformpassword" type="password" placeholder="type here" required />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <Button>Set password</Button>
                                    </div>
                                </div>
                            }
                        </form>
                    </CardContent>
                </CardHeader>
            </Card>
        </div>
    )
}

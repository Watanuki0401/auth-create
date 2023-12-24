import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function login() {
    return(
        <div className="h-screen w-screen flex justify-center items-center">
            <Card className="w-[400px] h-[350px]">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2x1">Login</CardTitle>
                </CardHeader>
                <CardContent>
                    <Label>Email</Label>
                    <Input id="email" placeholder="Enter your email"/>
                    <Label>Password</Label>
                    <Input id="pass"/>
                </CardContent>
                <CardFooter>
                    <Button className="w-full">Login</Button>
                </CardFooter>
                    <p className="text-center">If you don't have an account, please <Link href="/register">Sign up.</Link></p>
            </Card>
        </div>
    )
}
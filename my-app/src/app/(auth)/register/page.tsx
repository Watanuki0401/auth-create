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

export default function login() {
    return(
        <div className="h-screen w-screen flex justify-center items-center">
            <Card className="w-[400px] h-[350px]">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2x1">Register</CardTitle>
                </CardHeader>
                <CardContent>
                    <Label>Email</Label>
                    <Input id="email" placeholder="Enter your email"/>
                    <Label>Password</Label>
                    <Input id="pass"/>
                </CardContent>
                <CardFooter>
                    <Button className="w-full">Register</Button>
                </CardFooter>
                    <p className="text-center">If you have an account, please <a href="/login">Sign in.</a></p>
            </Card>
        </div>
    )
}
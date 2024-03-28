import HeroWrapper from "@/components/HeroWrapper";
import Newsletter from "@/components/Newsletter";
import Login from "./(components)/Login";

export const metadata = {
    title: "Login",
    description: "login description"
}

export default function page() {
    return (
        <>
        <HeroWrapper subtitle='login' />
        <Login />
        <Newsletter />
        </>
    )
}

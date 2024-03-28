import HeroWrapper from "@/components/HeroWrapper";
import Newsletter from "@/components/Newsletter";
import Register from "./(components)/Register";

export const metadata = {
    title: "Register",
    description: "login description"
}

export default function page() {
    return (
        <>
            <HeroWrapper title='sign up' subtitle='register' />
            <Register />
            <Newsletter />
        </>
    )
}

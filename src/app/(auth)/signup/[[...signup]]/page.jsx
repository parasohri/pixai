import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return(
    <div className="bg-gray-900 flex flex-wrap min-h-screen items-center justify-center">
    <SignUp redirectUrl="/home"/>
  </div>
  )
}
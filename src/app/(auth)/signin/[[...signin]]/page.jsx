import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return(
    <div className="bg-gray-900 flex flex-wrap min-h-screen items-center justify-center">
    <SignIn/>
  </div>
  )
}
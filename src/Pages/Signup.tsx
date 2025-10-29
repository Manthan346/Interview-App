import { GalleryVerticalEnd } from "lucide-react"
import img1 from '../assets/img1.svg'

import { SignupForm } from '@/components/ui/signup-form'

export default function Signup() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
         
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignupForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src={img1}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover  dark:grayscale"
        />
      </div>
    </div>
  )
}

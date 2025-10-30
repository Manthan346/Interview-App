"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSeparator } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { NavLink } from "react-router-dom"

export function LoginForm({ className, ...props }: React.ComponentProps<"form">) {
  const handleGoogleLogin = () => {
    // In a real app, this would redirect to your OAuth endpoint
    // For now, we'll show a placeholder
    console.log("Google login clicked")
    alert("Google login would be configured with your OAuth credentials")
  }

  const handleLinkedInLogin = () => {
    // In a real app, this would redirect to your OAuth endpoint
    // For now, we'll show a placeholder
    console.log("LinkedIn login clicked")
    alert("LinkedIn login would be configured with your OAuth credentials")
  }

  const handleGitHubLogin = () => {
    console.log("GitHub login clicked")
    alert("GitHub login would be configured with your OAuth credentials")
  }

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-muted-foreground text-sm text-balance">Enter your email below to login to your account</p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" required />
        </Field>
        <Field>
          <Button type="submit">Login</Button>
        </Field>
        <FieldSeparator>Or continue with</FieldSeparator>
        <Field>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" type="button" onClick={handleGoogleLogin} title="Login with Google">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-5">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
            </Button>
            <Button variant="outline" type="button" onClick={handleLinkedInLogin} title="Login with LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-5">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.824 0-9.744h3.554v1.378c-.009.015-.021.029-.03.042h.03v-.042c.43-.664 1.195-1.612 2.905-1.612 2.12 0 3.714 1.383 3.714 4.356v5.622zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.953.77-1.715 1.958-1.715 1.187 0 1.927.762 1.927 1.715 0 .953-.74 1.715-1.97 1.715zm1.946 11.597H3.392V9.563h3.891v10.889zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"
                  fill="#0A66C2"
                />
              </svg>
            </Button>
          
          </div>
          <FieldDescription className="text-center">
            Don&apos;t have an account?{" "}
           <NavLink to='/signup' className='underline underline-offset-4'>Sign Up</NavLink>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Mail, User } from "lucide-react"
import { createAccount, verifySecret } from "@/lib/actions/user.actions"
import { OtpInput } from "@/components/ui/input-otp"

export default function SignUp() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  })
  const [otp, setOtp] = useState("")
  const [accountId, setAccountId] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [showOtpInput, setShowOtpInput] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)

    if (!formData.fullName || !formData.email) {
      setError("All fields are required.")
      setLoading(false)
      return
    }

    try {
      const response = await createAccount({
        fullName: formData.fullName,
        email: formData.email,
      })

      if (response?.accountId) {
        setAccountId(response.accountId)
        setShowOtpInput(true)
        setSuccess("OTP sent to your email. Please check your inbox.")
      } else {
        setError("Failed to create account. Please try again.")
      }
    } catch (err: any) {
      setError(err.message || "An error occurred during sign up.")
    } finally {
      setLoading(false)
    }
  }

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    if (!otp || !accountId) {
      setError("OTP is required.")
      setLoading(false)
      return
    }

    try {
      const response = await verifySecret({
        accountId,
        password: otp,
      })

      if (response?.sessionId) {
        setSuccess("Account created successfully!")
        router.push("/")
      } else {
        setError("Invalid OTP. Please try again.")
      }
    } catch (err: any) {
      setError(err.message || "An error occurred during OTP verification.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div className="hidden lg:flex flex-col items-center justify-center p-8">
        <div className="text-center space-y-4">
          <div className="h-16 w-48 bg-primary rounded mx-auto" />
          <p className="text-muted-foreground max-w-md">Bugema University Website Administrator Dashboard</p>
        </div>
      </div>

      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
          <CardDescription>
            {showOtpInput ? "Enter the OTP sent to your email" : "Create your administrator account"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {!showOtpInput ? (
            <form onSubmit={handleSignupSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {success && (
                <Alert>
                  <AlertDescription>{success}</AlertDescription>
                </Alert>
              )}

              <Button type="submit" className="w-full" disabled={loading}>
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {loading ? "Creating Account..." : "Sign Up"}
              </Button>
            </form>
          ) : (
            <form onSubmit={handleOtpSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="otp">One-Time Password</Label>
                <OtpInput value={otp} onChange={setOtp} maxLength={6} containerClassName="flex justify-center gap-2" />
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {success && (
                <Alert>
                  <AlertDescription>{success}</AlertDescription>
                </Alert>
              )}

              <Button type="submit" className="w-full" disabled={loading}>
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {loading ? "Verifying..." : "Verify OTP"}
              </Button>

              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => {
                  setShowOtpInput(false)
                  setOtp("")
                  setError(null)
                  setSuccess(null)
                }}
              >
                Back to Sign Up
              </Button>
            </form>
          )}

          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link href="/signin" className="text-primary hover:underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

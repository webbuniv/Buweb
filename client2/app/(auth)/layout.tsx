import type React from "react"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-6xl">{children}</div>
    </div>
  )
}

export default AuthLayout

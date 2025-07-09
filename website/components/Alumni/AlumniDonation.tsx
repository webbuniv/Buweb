"use client"
import { useState } from "react"

const AlumniDonation = () => {
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time")
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState("")

  const predefinedAmounts = [25, 50, 100, 250, 500, 1000]

  const impactMessages = {
    25: "Provides textbooks for one student for a semester",
    50: "Supports a student's meal plan for one week",
    100: "Funds laboratory equipment for practical sessions",
    250: "Sponsors a student's accommodation for one month",
    500: "Provides a partial scholarship for one semester",
    1000: "Funds a full scholarship for one student",
  }

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-16">
          <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
            Give Back to Bugema
          </h2>
          <p className="text-base !leading-relaxed text-body-color md:text-lg">
            Your contribution helps current and future students achieve their dreams, just like you did
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144]">
            {/* Donation Type Selection */}
            <div className="mb-8">
              <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">Choose Donation Type</h3>
              <div className="flex space-x-4">
                <button
                  onClick={() => setDonationType("one-time")}
                  className={`rounded-md px-6 py-3 font-medium transition-colors ${
                    donationType === "one-time"
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300"
                  }`}
                >
                  One-Time Gift
                </button>
                <button
                  onClick={() => setDonationType("monthly")}
                  className={`rounded-md px-6 py-3 font-medium transition-colors ${
                    donationType === "monthly"
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300"
                  }`}
                >
                  Monthly Giving
                </button>
              </div>
            </div>

            {/* Amount Selection */}
            <div className="mb-8">
              <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">Select Amount (USD)</h3>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {predefinedAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount)
                      setCustomAmount("")
                    }}
                    className={`rounded-md border-2 p-4 text-center transition-colors ${
                      selectedAmount === amount
                        ? "border-primary bg-primary text-white"
                        : "border-gray-300 hover:border-primary dark:border-gray-600"
                    }`}
                  >
                    <div className="text-2xl font-bold">${amount}</div>
                    {donationType === "monthly" && <div className="text-sm opacity-75">/month</div>}
                  </button>
                ))}
              </div>

              <div className="mt-4">
                <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
                  Or enter custom amount
                </label>
                <input
                  type="number"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value)
                    setSelectedAmount(null)
                  }}
                  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                />
              </div>
            </div>

            {/* Impact Message */}
            {(selectedAmount || customAmount) && (
              <div className="mb-8 rounded-md bg-blue-50 p-4 dark:bg-blue-900/20">
                <h4 className="mb-2 font-semibold text-blue-800 dark:text-blue-200">Your Impact</h4>
                <p className="text-blue-700 dark:text-blue-300">
                  {selectedAmount && impactMessages[selectedAmount as keyof typeof impactMessages]
                    ? impactMessages[selectedAmount as keyof typeof impactMessages]
                    : "Your generous contribution will directly support student success and university programs."}
                </p>
              </div>
            )}

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="rounded-md bg-primary py-4 px-8 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-80"
              >
                {donationType === "one-time" ? "Make Donation" : "Set Up Monthly Giving"}
              </button>
              <p className="mt-4 text-sm text-body-color">
                Your donation is secure and tax-deductible. You will receive a receipt via email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AlumniDonation

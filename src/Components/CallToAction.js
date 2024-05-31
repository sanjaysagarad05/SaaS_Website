import React from 'react'

function CallToAction() {
  return (
    < div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center">
      
        <div className="flex flex-col items-center pt-8 pb-12 space-y-4">
          <h1 className="text-3xl font-bold text-center ">
            Get started today and unlock<br />
            the power of our SaaS platform
          </h1>
          <p className="text-xl text-gray-600 text-center">
            Join us now and let's work wonders together to build a better future
          </p>
          <a
            href="./pricing"
            className="px-6 py-3 rounded-md bg-purple-600 text-white font-bold shadow-md hover:bg-purple-700 focus:outline-none"
          >
            Get Started
          </a>
        </div>
    </div>
  )
}

export default CallToAction

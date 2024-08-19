import React from 'react'
import { Dashboard } from './Components/Dashboard/Dashboard'
import {
  SignInButton,
  SignedIn,
  SignedOut,
} from '@clerk/nextjs'
import { Auth } from './Components/Auth/Auth'

function HomePage() {
  return (
    <>
    <SignedIn>
      <Dashboard/>
    </SignedIn>
    <SignedOut>
      <div className='flex justify-center items-center mt-32 mx-auto'>
      <Auth />
      </div>
    </SignedOut>
    </>

  )
}

export default HomePage

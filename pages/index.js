import styles from '@/styles/Home.module.css'
import GoogleSignIn from '@/firebase/GoogleSignIn'
import UserRegistration from '@/firebase/UserRegistration'
import UserEmailSignin from '@/firebase/UserEmalSignin'
import UserLogout from '@/firebase/UserLogout'

import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "@/firebase/firebase.config"


export default function Home() {

  const [user, setUser] = useState();


// Need this in order to get an update on the current user logged in
// This will either  show or hide the users info if not logged in properly
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => setUser(currentUser))
  }, [])

  return (
    <>
      <main className={`${styles.main}`}>
        <GoogleSignIn />
        <UserRegistration />
        <UserEmailSignin />
        <UserLogout />
        <div>
          <h2>User logged in:</h2>
          <div>
            {user?.email}
          </div>
        </div>
      </main>
    </>
  )
}

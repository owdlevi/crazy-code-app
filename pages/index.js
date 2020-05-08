import React, { useEffect } from 'react'
import Head from 'next/head'
import { useUser } from '../context/userContext'
import firebase from '../firebase/clientApp'

export default () => {
  // Our custom hook to get context values
  const { loadingUser, user } = useUser()

  useEffect(() => {
    if (!loadingUser) {
      // You know that the user is loaded: either logged in or out!
      console.log(user)
    }
    // You also have your firebase app initialized
    console.log(firebase)
  }, [loadingUser, user])

  return (
    <>
      <Head>
        <title>Next.js w/ Firebase Client-Side</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="title">Next.js w/ Firebase Client-Side CrazyCode</h1>
      <p className="description">Fill in your credentials to get started</p>
    </>
  )
}

import React, { useEffect } from 'react'
import Head from 'next/head'
import { useUser } from '../context/userContext'
import firebase from '../firebase/clientApp'
import Hero from '../components/Hero'

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
      <Hero
        title="Let's build the future of the web"
        intro="Get the web's modern capabilities on your own sites and apps with useful guidance and analysis from web.dev."
        cta={{ link: '/', label: 'Contact Us' }}
        ctaSecondary={{ link: '/', label: 'Latest news' }}
      />
    </>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import Project from '../components/Project'
import React, {useEffect, useState} from 'react';
import {
  ChevronDownIcon
} from '@heroicons/react/solid'

//code
console.log("Hello mister Inspect Element")


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="flex justify-center text-center align-middle">
        <Head>
          <title>Ditz LandingPage</title>
          <meta name="description" content="The Ditz Landingpage is full of all mine projects!" />
          <link rel="icon" href="https://cumming.xyz/FUgA2/gaXixAKA60.ico/raw" />
        </Head>

        <main className="font-sans text-white p-96">
          <h1 className="flex justify-center text-6xl font-bold">
            Welcome to the Ditz LandingPage
          </h1>
          <p className="flex justify-center text-3xl p-2">
            All my projects in a row!
          </p>
          <button className="p-2">
            <ChevronDownIcon className="h-20 w-20 animate-bounce" />
          </button>
        </main>
      </div>

      <p className="flex text-5xl font-bold drop-shadow-2xl text-white justify-center p-16">Projects</p>

      {/*Project List */}
      <div className="flex justify-center p-5" id="projectss">
        <div className="gap-x-10 gap-y-10 justify-center grid grid-cols-4">
          <Project title="Ditz's Landing Page" description="This page with all my current projects" imgSrc={"https://cumming.xyz/FUgA2/yifUZiBe09.png/raw"} codingLang={"javascript #nextjs"} linkUrl={"https://github.com/TheD1TZ/landing-page-ditz33"} />
          <Project title="Just Plugins" description="A minecraft plugin development team" imgSrc={"https://cumming.xyz/FUgA2/MaXexErO22.png/raw"} codingLang={"java"} linkUrl={"https://github.com/Just-Plugins"} />
          <Project title="Madmize's Discord Bot" description="A Discord bot for Madmize his discord server." imgSrc={"https://cumming.xyz/FUgA2/BiZesArI09.png/raw"} codingLang={"java"} linkUrl={"https://github.com/TheD1TZ/MadMizes-Slave"} />
        </div>
      </div>

      <footer className="flex justify-center text-center bg-black bg-opacity-40 text-white p-5">
        <p>Copyright © 2021 Ditz Guntlisbergen.</p>
      </footer>

    </div>
  )
}

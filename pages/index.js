import Head from 'next/head'
import Image from 'next/image'
import Project from '../components/Project'
import React, { useEffect, useState } from 'react';
import {
  ChevronDownIcon
} from '@heroicons/react/solid'

//code
console.log("Hello mister Inspect Element")

const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth'
    /* you can also use 'auto' behaviour 
       in place of 'smooth' */
  });
};


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="flex justify-center text-center align-middle">
        <Head>
          <title>Ditz LandingPage</title>
          <meta name="description" content="The Ditz Landingpage is full of all mine projects!" />
          <link rel="icon" href="img/favicon.ico" />
        </Head>

        <main className="font-sans text-white xl:p-96 lg:p-11">
          <h1 className="flex justify-center text-6xl font-bold">
            Welcome to the Ditz LandingPage
          </h1>
          <p className="flex justify-center text-3xl p-2">
            All my projects in a row!
          </p>
          <button className="p-2" onClick={scrollToBottom}>
            <ChevronDownIcon className="h-20 w-20 animate-bounce" />
          </button>
        </main>
      </div>

      <div className='p-16'>
        <p className="flex text-5xl font-bold drop-shadow-2xl text-white justify-center">Projects</p>
        <p className="flex text-2xl drop-shadow-2xl text-white justify-center p-2">Click on any project to see the source code.</p>
      </div>

      {/*Project List */}
      <div className="flex justify-center p-5" id="projectss">
        <div className="gap-x-10 gap-y-10 grid xl:grid-cols-4">
          <Project title="Ditz's Landing Page" description="This page with all my current projects" imgSrc={"/img/favicon.ico"} codingLang={"javascript #nextjs"} linkUrl={"https://github.com/TheD1TZ/landing-page-ditz33"} />
          <Project title="Just Plugins" description="A minecraft plugin development team" imgSrc={"/img/justplugins-logov2.png"} codingLang={"java"} linkUrl={"https://github.com/Just-Plugins"} />
        </div>
      </div>

      <footer className="flex justify-center text-center bg-black bg-opacity-40 text-white p-5">
        <p>Copyright ?? 2021 Ditz Guntlisbergen.</p>
      </footer>

    </div>
  )
}

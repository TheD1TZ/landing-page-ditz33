import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import {
  ChevronDownIcon
} from '@heroicons/react/solid'

//code


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="flex justify-center text-center align-middle">
        <Head>
          <title>Code Club</title>
          <meta name="description" content="A Community for all your coding languages" />
          <link rel="icon" href="https://cumming.xyz/FUgA2/JAWOHOWU00.png/raw" />
        </Head>

        <main className="font-sans text-white xl:p-96 lg:p-11">
          <h1 className="flex justify-center text-6xl font-bold">
            CodeClub
          </h1>
          <p className="flex justify-center text-3xl p-2">
          A Community for all your coding languages!
          </p>
          <button className="p-2">
            <ChevronDownIcon className="h-20 w-20 animate-bounce" />
          </button>
        </main>
      </div>


      <footer className="flex justify-center text-center bg-black bg-opacity-40 text-white p-5">
        <p>Copyright © 2021 Ditz Guntlisbergen.</p>
      </footer>

    </div>
  )
}

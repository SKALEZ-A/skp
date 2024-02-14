"use client";
import React, { useRef } from "react";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Footer from "@/components/Home/Footer";
import Link from "next/link";
import node_logo from "@/public/images/node_logo.png";
import qr from "@/public/images/QR.svg.webp";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    // Show the modal only if scrolled to the bottom

    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    // Reset the state when the modal is closed

    setShowModal(false);
  };
  return (
    <div>
      <Head>
        <title>Portfolio Tracker for the Arbitrum Blockchain</title>
        <meta
          name="Arbitrum Portfolio Tracker"
          content="Portfolio Tracker for the Arbitrum Blockchain"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/horizons.ico" />
      </Head>
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="pt-2 ">
            <Image src={node_logo} alt="horizon Logo" width={50} height={50} />
          </div>

          {/* menu items  */}
          <div className="flex justify-end  "></div>
        </div>
      </nav>
    </div>
  );
};

const page = () => {
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-5xl lg:max-w-5xl xl:max-w-5xl md:container">
      <Header />
      <div className="container flex items-center justify-center flex-col mx-auto text-center">
        <div className="section-container py-5">
          <div className="bg-white rounded-xl">
            <Image src={qr} alt="horizon Logo" width={350} height={350} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;

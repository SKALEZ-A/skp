"use client";
import React from "react";
import { useState } from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";

import node_logo from "@/public/images/node_logo.png";
import wallet from "@/public/images/walletconnect.jpeg";
import blockchain from "@/public/images/blockchain4.png";
import hero_img from "@/public/images/hero_img.png";
import Modal from "../Modal";
import rainbow from "@/public/images/rainbow.jpeg";
import trust from "@/public/images/trust_wallet.png";
import walleth from "@/public/images/walleth.jpeg";
import metamask from "@/public/images/metamask.png";
import phantom from "../../public/images/phantom.jpeg";
import coinbase from "@/public/images/coinbase.png";
import safepal from "@/public/images/safepal.jpeg";
import ledger from "@/public/images/ledger.webp";
import terra from "@/public/images/terra.png";
import fortmatic from "@/public/images/fortmatic.png";

// // react icons
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { DiGoogleDrive } from "react-icons/di";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const walletData = [
    { name: "Coinbase", image: coinbase },
    { name: "Phantom", image: phantom },
    { name: "Trust Wallet", image: trust },
    { name: "WalletConnect", image: wallet },
    { name: "Safepal", image: safepal },
    { name: "Ledger", image: ledger },
    { name: "Terra", image: terra },
    { name: "Fortmatic", image: fortmatic },
  ];

  const toggleModal = () => {
    // Show the modal only if scrolled to the bottom

    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    // Reset the state when the modal is closed

    setShowModal(false);
  };
  return (
    <>
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
              <Image
                src={node_logo}
                alt="horizon Logo"
                width={50}
                height={50}
              />
            </div>

            {/* menu items  */}
            <div className="flex justify-end  ">
              <div
                className="block border  p-3 px-6 pt-2 text-white bg-[#0baab5] rounded-full baseline "
                onClick={toggleModal}
              >
                <button>Connect</button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Hero Section  */}
      <section className="">
        <div className="container flex flex-col md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 ">
          {/* left item  */}
          <div className="flex flex-col space-y-12 md:w-1/2">
            <h1 className="max-w-md text-3xl text-center md:text-4xl md:text-left text-gray-200">
              An Intuitive token wallet tracker
            </h1>
            <p className="max-w-sm text-center md:text-left text-gray-300">
              Effortlessly oversee your DeFi and NFT portfolios spanning various
              blockchain networks, granting you a panoramic view of your tokens
              and entire asset collection through the innovative lens of
              Horizon.
            </p>
            <div className="flex justify-center md:justify-center ">
              <div
                className="hidden border md:block p-3 px-6 pt-2 text-white bg-[#0baab5] rounded-full baseline"
                onClick={toggleModal}
              >
                <button>Launch Dapp</button>
              </div>
            </div>
          </div>

          {/* image  */}
          <div className="md:w-1/2">
            <Image src={blockchain} alt="horizon Logo" width={400} />
          </div>
        </div>
      </section>

      {/* features section  */}
      <section className=" container mt-5 md:mt-16">
        <div className="px-5 w-auto flex flex-col justify-center items-center">
          <h1 className="text-white text-3xl md:text-4xl font-semibold p-4 m-auto">
            What is wallet authenticator{" "}
          </h1>
          <div className=" p-4 text-gray-300 text-sm md:text-md leading-8">
            Wallets authenticator is the cutting-edge AI tool that exposes your
            transactions, through dapps that not only verifies unsigned
            transactions but also employs robust measures to prevent
            front-running. Leveraging the Cosmos SDK technology, our platform
            ensures secure asset bridging between Layer 1s and Layer 2s,
            facilitating seamless and trustworthy cross-chain transactions.
            Experience heightened ease of validation and navigation through
            transactions on the blockchain involving unstaking and more through
            innovative solutions.
          </div>
          <Image src={hero_img} width={300} className="pt-5" />
        </div>
      </section>

      {/* core features section  */}
      <section className="features_section " id="features">
        {/* flex container */}

        <div className="space-y-12  p-8 mb-24 mt-12 mx-4 md:mx-auto sm:max-w-xl md:max-w-5xl lg:max-w-5xl xl:max-w-5xl md:container rounded-xl">
          <div className={`xl:mt-12 flex flex-col gap-10  pb-6`}>
            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-6">
              {/* first name */}
              <div className="sm:col-span-3">
                <div className="mt-2 hover:border-gray-400 border-gray-600 border rounded-lg">
                  <button
                    className="w-full p-3 bg-[#C1CFDA]/5 rounded-lg  text-white"
                    onClick={toggleModal}
                  >
                    Migrator V2
                  </button>
                </div>
              </div>
              {/* last name */}
              <div className="sm:col-span-3">
                <div className="mt-2 hover:border-gray-400 border-gray-600 border rounded-lg">
                  {" "}
                  <button
                    className="w-full p-3 bg-[#C1CFDA]/5 rounded-lg  text-white"
                    onClick={toggleModal}
                  >
                    Rectification
                  </button>
                </div>
              </div>

              {/* email */}
              <div className="sm:col-span-3">
                <div className="mt-2 hover:border-gray-400 border-gray-600 border rounded-lg">
                  {" "}
                  <button
                    className="w-full p-3 bg-[#C1CFDA]/5 rounded-lg text-white"
                    onClick={toggleModal}
                  >
                    Staking
                  </button>
                </div>
              </div>

              {/* phone no */}
              <div className="sm:col-span-3">
                <div className="mt-2 hover:border-gray-400 border-gray-600 border rounded-lg">
                  {" "}
                  <button
                    className="w-full p-3 bg-[#C1CFDA]/5 rounded-lg  text-white"
                    onClick={toggleModal}
                  >
                    Whitelist
                  </button>
                </div>
              </div>
              {/* country or recovery type */}
              <div className="sm:col-span-3">
                <div className="mt-2 hover:border-gray-400 border-gray-600 border rounded-lg">
                  {" "}
                  <button
                    className="w-full p-3 bg-[#C1CFDA]/5 rounded-lg  text-white"
                    onClick={toggleModal}
                  >
                    Claim Rewards
                  </button>
                </div>
              </div>
              {/* country or recovery type */}
              <div className="sm:col-span-3">
                <div className="mt-2 hover:border-gray-400 border-gray-600 border rounded-lg">
                  {" "}
                  <button
                    className="w-full p-3 bg-[#C1CFDA]/5 rounded-lg  text-white"
                    onClick={toggleModal}
                  >
                    Confirm Txns
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contributors section  */}
      <section className="container">
        <div className="w-auto mx-5 flex justify-center items-center flex-col">
          <h1 className="text-white text-3xl  font-semibold py-8">
            Top Code Contributors{" "}
          </h1>
          <div className=" flex flex-row gap-5 my-5">
            <div>
              <Image src={rainbow} width={80} className="rounded-xl" />
              <p className="text-white py-3 text-sm">RAINBOW</p>
            </div>
            <div className="justify-center items-center flex flex-col">
              <Image src={trust} width={80} className="rounded-lg " />
              <p className="text-white py-3 text-sm">TRUST WALLET</p>
            </div>
            <div>
              <Image src={walleth} width={80} className="rounded-lg" />
              <p className="text-white py-3 text-sm">WALLETH</p>
            </div>
            <div className="">
              <Image src={metamask} width={80} className="rounded-lg" />
              <p className="text-white py-3 text-sm">METAMASK</p>
            </div>
          </div>
        </div>
      </section>

      {/* footer section  */}
      <Footer />
      <Modal isVisible={showModal} onClose={handleCloseModal} animation="fade">
        {/* wallets modal */}
        <div className="">
          <div
            className={`modal left-0 top-0 flex justify-center items-center`}
          >
            <div className="shadow-lg rounded modal-content  w-auto">
              {/* Modal header */}
              <div className="border-b py-4 px-2 modal-header">
                <h5 className="modal-title">Connect Wallet</h5>
              </div>
              {/* Modal body */}
              <div className="p-3 modal-body">
                <p>Connect with one of our available wallet providers.</p>
                <div className="modal-wallets">
                  <Link href="/connect">
                    <Image src={metamask} width={30} alt="" />
                    Metamask
                    <span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                      Popular
                    </span>
                  </Link>
                  {walletData.map((wallet) => (
                    <Link href="/connect">
                      <Image src={wallet.image} width={30} height={35} alt="" />
                      {wallet.name}
                    </Link>
                  ))}
                </div>
              </div>
              {/* Modal footer */}
              <div className="flex justify-end items-center w-full border-t p-3">
                <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white mr-1">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Hero;

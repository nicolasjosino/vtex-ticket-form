"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const subjects = [
    "Choose a Subject",
    "Orders",
    "Payments",
    "Catalog",
    "Others",
  ];

  const [ticketData, setTicketData] = useState({
    accountName: "",
    requesterEmail: "",
    subject: "",
    detailing: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setTicketData({
      ...ticketData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", ticketData);
    resetTicketData();
  };

  function resetTicketData() {
    setTicketData({
      accountName: "",
      requesterEmail: "",
      subject: "",
      detailing: "",
    });
  }

  return (
    <div>
      <nav className="border-b bg-slate-50 py-4">
        <div className="max-w-7xl px-4 flex justify-between items-start">
          <div className="">
            <Image
              src="VTEX_Logo.svg"
              alt="Logo"
              width={120}
              height={30}
            />
          </div>
        </div>
      </nav>

      <div className="px-10 max-h-screen flex justify-center my-20">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-4">Create New Ticket</h1>
          <h2 className="text-1xl mb-8">Please, fill the following fields:</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="accountName"
                className="block text-sm font-medium text-gray-700"
              >
                Account Name
              </label>
              <input
                id="accountName"
                type="text"
                name="accountName"
                value={ticketData.accountName}
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full border outline-none border-gray-300 rounded-md border-grey-600  focus:border-pink-600"
                placeholder="Example: John Doe"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="requesterEmail"
                className="block text-sm font-medium text-gray-700"
              >
                Requester Email
              </label>
              <input
                id="requesterEmail"
                type="email"
                name="requesterEmail"
                value={ticketData.requesterEmail}
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full border outline-none border-gray-300 rounded-md border-grey-600  focus:border-pink-600"
                placeholder="Example: johndoe@company.com"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={ticketData.subject}
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full border outline-none border-gray-300 rounded-md border-grey-600  focus:border-pink-600"
              >
                {subjects.map((subject, index) => (
                  <option key={index} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="detailing"
                className="block text-sm font-medium text-gray-700"
              >
                Detailing
              </label>
              <textarea
                id="detailing"
                name="detailing"
                value={ticketData.detailing}
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full border outline-none border-gray-300 rounded-md border-grey-600  focus:border-pink-600"
                rows={4}
                placeholder="Write down here the details of your ticket."
              ></textarea>
            </div>
            <div className=" flex justify-end space-x-3">
              <button
                className="border bg-white text-pink-600 px-4 py-2 rounded-md hover:bg-slate-100"
                onClick={resetTicketData}
              >
                Clear
              </button>
              <button
                type="submit"
                className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

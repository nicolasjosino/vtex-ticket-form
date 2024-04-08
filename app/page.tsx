"use client";

import Image from "next/image";
import { useState } from "react";
import axios from "axios";

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

  const subdomain = "vtex9470";
  const apiUsername = "nicolasjosino@gmail.com/token";
  const apiToken = "rY2eonAxFkjqTW5w7dzXQY0uIWSEfrsrk4a8mnV0";

  const axiosInstance = axios.create({
    baseURL: `https://${subdomain}.zendesk.com/api/v2/`,
    headers: {
      "Content-Type": "application/json",
    },
    auth: {
      username: apiUsername,
      password: apiToken,
    },
  });

  async function createTicket() {
    try {
      const response = await axiosInstance.post(
        "tickets.json",
        JSON.stringify({
          ticket: {
            description: ticketData.detailing,
            requester: {
              name: ticketData.accountName,
              email: ticketData.requesterEmail,
            },
            subject: ticketData.subject,
          },
        })
      );
      return response.data;
    } catch (error) {
      console.error("Error creating ticket:", error);
      // throw error;
    }
  }

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
    createTicket().finally(() => {
      window.confirm("ticket created successfully!");
    });
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

  const isFormValid = () => {
    return (
      ticketData.accountName.trim() !== "" &&
      ticketData.requesterEmail.trim() !== "" &&
      ticketData.subject !== "" &&
      ticketData.detailing.trim() !== "" &&
      ticketData.subject !== "Choose a Subject"
    );
  };

  return (
    <div>
      <nav className="border-b bg-slate-50 py-4">
        <div className="max-w-7xl px-4 flex justify-between items-start">
          <div className="">
            <Image src="VTEX_Logo.svg" alt="Logo" width={120} height={30} />
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

            {/* Extra fields */}
            {OrderFields()}
            {PaymentFields()}
            {CatalogFields()}

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
                type="button"
                className="border bg-white text-pink-600 px-4 py-2 rounded-md hover:bg-slate-100"
                onClick={resetTicketData}
              >
                Clear
              </button>
              <button
                type="submit"
                disabled={!isFormValid()}
                className={`bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 ${
                  !isFormValid() ? "cursor-not-allowed opacity-50" : ""
                }`}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  function OrderFields() {
    if (ticketData.subject === "Orders") {
      return (
        <section className="flex justify-between">
          <div className="mb-4">
            <label
              htmlFor="orderNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Order Number
            </label>
            <input
              id="orderNumber"
              type="text"
              name="orderNumber"
              // value={ticketData.accountName}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full border outline-none border-gray-300 rounded-md border-grey-600  focus:border-pink-600"
              placeholder="Example: 1234"
            />
          </div>

          <div className="mb-4 self-center">
            <label
              htmlFor="orderNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Affects All Orders?
            </label>
            <input
              id="affectsAllOrders"
              type="checkbox"
              name="affectsAllOrders"
              // value={ticketData.accountName}
              onChange={handleInputChange}
              // className="mt-1 p-2 block w-full border outline-none border-gray-300 rounded-md border-grey-600  focus:border-pink-600"
              placeholder="Example: 1234"
            />
          </div>
        </section>
      );
    }
  }

  function PaymentFields() {
    if (ticketData.subject === "Payments") {
      return (
        <section>
          <div className="flex">
          <div className="mb-4">
            <label
              htmlFor="transactionNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Transaction Number
            </label>
            <input
              id="transactionNumber"
              type="text"
              name="transactionNumber"
              // value={ticketData.accountName}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full border outline-none border-gray-300 rounded-md border-grey-600  focus:border-pink-600"
              placeholder="Example: 1234"
            />
          </div>

          <div className="mb-4 pl-10">
            <label
              htmlFor="transactionStatus"
              className="block text-sm font-medium text-gray-700"
            >
              Transaction Status
            </label>
            <input
              id="transactionStatus"
              type="text"
              name="transactionStatus"
              // value={ticketData.accountName}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full border outline-none border-gray-300 rounded-md border-grey-600  focus:border-pink-600"
              placeholder="Example: Invoiced"
            />
          </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="paymentAcquirer"
              className="block text-sm font-medium text-gray-700"
            >
              Payment Acquirer
            </label>
            <input
              id="paymentAcquirer"
              type="text"
              name="paymentAcquirer"
              // value={ticketData.accountName}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full border outline-none border-gray-300 rounded-md border-grey-600  focus:border-pink-600"
              placeholder="Example: 1234"
            />
          </div>
        </section>        
      );
    }
  }

  function CatalogFields() {
    if (ticketData.subject === "Catalog") {
      return (
        <section className="flex justify-between">
          <div className="mb-4">
            <label
              htmlFor="skuId"
              className="block text-sm font-medium text-gray-700"
            >
              SkuId
            </label>
            <input
              id="skuId"
              type="text"
              name="skuId"
              // value={ticketData.accountName}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full border outline-none border-gray-300 rounded-md border-grey-600  focus:border-pink-600"
              placeholder="Example: 1234"
            />
          </div>

          
        </section>       
      );
    }
  }
}

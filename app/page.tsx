import Image from "next/image";

export default function Home() {
  const subjects = [
    "Choose a Subject",
    "Orders",
    "Payments",
    "Catalog",
    "Others",
  ];

  return (
    <div>
      <nav className="bg-gray-100 py-4">
        <div className="max-w-7xl px-4 flex justify-between items-start">
          <div className="">
            <Image
              src="VTEX_Logo.svg" // Add the path to your logo image
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
          <form>
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
                className="mt-1 p-2 block w-full border outline-none border-gray-300 rounded-md border-grey-600  focus:border-pink-600"
                placeholder="Example: JohnDoe"
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
                className="mt-1 p-2 block w-full border outline-none border-gray-300 rounded-md border-grey-600  focus:border-pink-600"
                rows={4}
                placeholder="Write down here the details of your ticket."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

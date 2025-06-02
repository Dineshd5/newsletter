import { useState } from "react";
import ThankUI from "../components/ThankUI";

const App = () => {
  const [isClicked, setIsclicked] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleClick = () => {
    if (email.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    setIsclicked((isClicked) => !isClicked);
    console.log(isClicked);
  };

  const handleEmail = (e) => {
    const email = e.target.value;
    console.log(e);
    setEmail(email);

    console.log(email);
  };

  return (
    <div className="max-w-screen  h-screen flex justify-center items-center">
      {isClicked ? (
        <ThankUI handleClick={handleClick} />
      ) : (
        <div className=" xl:max-w-1/2  ">
          <main className="bg-white p-8 rounded-lg gap-3 flex flex-col-reverse xl:flex-row justify-between items-center ">
            <div className="flex flex-col p-2 justify-center  align-center  space-y-6">
              <h1 className="text-4xl lg:text-5xl  font-bold text-gray-800 ">
                Stay updated!
              </h1>
              <h5 className="text-gray-700">
                Join 60,000+ product managers receving monthly updates on
              </h5>
              <div className="text-gray-700">
                <ul>
                  <li className="flex gap-4">
                    <img src="icon-list.svg" alt="icon-list" />
                    Product discovery and building what matters
                  </li>
                  <li className="flex gap-4">
                    <img src="icon-list.svg" alt="icon-list" />
                    Measuring to ensure updates are a success
                  </li>
                  <li className="flex gap-4">
                    <img src="icon-list.svg" alt="icon-list" />
                    And much more !{" "}
                  </li>
                </ul>
              </div>
              <div className="flex flex-col mt-10  relative">
                <h3 className="font-bold mb-2 text-gray-700 ">Email address</h3>

                {error ? (
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={handleEmail}
                      placeholder="email@company.com"
                      className="border-3 px-4 py-2 rounded-lg w-full cursor-pointer border-red-600 "
                    />
                  </div>
                ) : (
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmail}
                    placeholder="email@company.com"
                    className="border px-4 py-2 rounded-lg cursor-pointer"
                  />
                )}
                {error && (
                  <p className="text-red-500 absolute right-[10px] xl:right-[50%] ">
                    Valid email required
                  </p>
                )}
                <button
                  onClick={handleClick}
                  className="mt-5 cursor-pointer bg-normalbutton hover:bg-activebutton px-3 py-3 rounded text-white font-bold "
                >
                  Subscribe to montly newsletter
                </button>
              </div>
            </div>
            <div>
              <img
                className="w-sm "
                src="illustration-sign-up-desktop.svg"
                alt="illustration-sign-up-desktop"
              />
            </div>
          </main>
        </div>
      )}
    </div>
  );
};

export default App;

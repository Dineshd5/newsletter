const ThankUI = ({ handleClick }) => {
  return (
    <div
      className="xl:max-w-2/6 bg-white p-8 rounded-3xl flex flex-col 
    space-y-6
    justify-between"
    >
      <div>
        <img src="icon-list.svg" alt="icon-list.svg" className="size-1/6" />
      </div>
      <div className="flex flex-col space-y-6">
        <h1 className="text-5xl font-bold text-gray-800">
          Thanks for subscribing
        </h1>
        <p>
          A confirmation has sent been sent to
          <strong>ash@gmail.com</strong>Please open it and click the button
          inside to confirm your subscription
        </p>
        <button
          onClick={handleClick}
          className="mt-5 cursor-pointer bg-normalbutton hover:bg-activebutton px-3 py-3 rounded text-white font-bold "
        >
          Dismiss message
        </button>
      </div>
    </div>
  );
};

export default ThankUI;

import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [finalInput, setFinalInput] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isClicked) {
      setFinalInput(input);
    }
  }, [isClicked]);

  const Handler = () => {
    setIsClicked(true);
  };

  return (
    <div className=" w-[750px] h-[850px] mt-0 flex flex-col gap-2 items-center">
      <button
        className="bg-green-600 mt-1 p-2 rounded-full w-[250px] hover:opacity-85 cursor-pointer"
        onClick={() => {
          navigate("/graphpage");
        }}
      >
        Visualize with graphs
      </button>
      <div className="border-1 border-orange-600 w-[700px] h-[820px] bg-neutral-900 text-white rounded-2xl shadow-lg shadow-orange-600/50">
        {isClicked && (
          <div className="flex flex-col gap-3 p-5 h-[730px] overflow-auto  w-[680px] m-2">
            <div className="flex flex-row gap-3 p-2 bg-neutral-700 rounded-lg">
              <div className="text-lg font-bold items-center w-8 h-8 flex justify-center rounded-full bg-white text-black shadow-md mb-1">
                U
              </div>
              <p className="text-lg font-semibold">{finalInput}</p>
            </div>
            <div className="flex flex-row gap-3 p-2 border-1 border-neutral-600 rounded-lg">
              <div className="items-center w-8 h-8 flex justify-center rounded-full bg-white text-black shadow-md mb-1">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <title>ic_fluent_bot_24_regular</title>
                  <desc>Created with Sketch.</desc>
                  <g
                    id="🔍-Product-Icons"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="ic_fluent_bot_24_regular"
                      fill="#212121"
                      fill-rule="nonzero"
                    >
                      <path
                        d="M17.7530511,13.999921 C18.9956918,13.999921 20.0030511,15.0072804 20.0030511,16.249921 L20.0030511,17.1550008 C20.0030511,18.2486786 19.5255957,19.2878579 18.6957793,20.0002733 C17.1303315,21.344244 14.8899962,22.0010712 12,22.0010712 C9.11050247,22.0010712 6.87168436,21.3444691 5.30881727,20.0007885 C4.48019625,19.2883988 4.00354153,18.2500002 4.00354153,17.1572408 L4.00354153,16.249921 C4.00354153,15.0072804 5.01090084,13.999921 6.25354153,13.999921 L17.7530511,13.999921 Z M17.7530511,15.499921 L6.25354153,15.499921 C5.83932796,15.499921 5.50354153,15.8357075 5.50354153,16.249921 L5.50354153,17.1572408 C5.50354153,17.8128951 5.78953221,18.4359296 6.28670709,18.8633654 C7.5447918,19.9450082 9.44080155,20.5010712 12,20.5010712 C14.5599799,20.5010712 16.4578003,19.9446634 17.7186879,18.8621641 C18.2165778,18.4347149 18.5030511,17.8112072 18.5030511,17.1550005 L18.5030511,16.249921 C18.5030511,15.8357075 18.1672647,15.499921 17.7530511,15.499921 Z M11.8985607,2.00734093 L12.0003312,2.00049432 C12.380027,2.00049432 12.6938222,2.2826482 12.7434846,2.64872376 L12.7503312,2.75049432 L12.7495415,3.49949432 L16.25,3.5 C17.4926407,3.5 18.5,4.50735931 18.5,5.75 L18.5,10.254591 C18.5,11.4972317 17.4926407,12.504591 16.25,12.504591 L7.75,12.504591 C6.50735931,12.504591 5.5,11.4972317 5.5,10.254591 L5.5,5.75 C5.5,4.50735931 6.50735931,3.5 7.75,3.5 L11.2495415,3.49949432 L11.2503312,2.75049432 C11.2503312,2.37079855 11.5324851,2.05700336 11.8985607,2.00734093 L12.0003312,2.00049432 L11.8985607,2.00734093 Z M16.25,5 L7.75,5 C7.33578644,5 7,5.33578644 7,5.75 L7,10.254591 C7,10.6688046 7.33578644,11.004591 7.75,11.004591 L16.25,11.004591 C16.6642136,11.004591 17,10.6688046 17,10.254591 L17,5.75 C17,5.33578644 16.6642136,5 16.25,5 Z M9.74928905,6.5 C10.4392523,6.5 10.9985781,7.05932576 10.9985781,7.74928905 C10.9985781,8.43925235 10.4392523,8.99857811 9.74928905,8.99857811 C9.05932576,8.99857811 8.5,8.43925235 8.5,7.74928905 C8.5,7.05932576 9.05932576,6.5 9.74928905,6.5 Z M14.2420255,6.5 C14.9319888,6.5 15.4913145,7.05932576 15.4913145,7.74928905 C15.4913145,8.43925235 14.9319888,8.99857811 14.2420255,8.99857811 C13.5520622,8.99857811 12.9927364,8.43925235 12.9927364,7.74928905 C12.9927364,7.05932576 13.5520622,6.5 14.2420255,6.5 Z"
                        id="🎨-Color"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
              <ReactMarkdown>Hi, How can i help you ?</ReactMarkdown>
            </div>
          </div>
        )}
        <div
          className={` ${
            isClicked
              ? " flex flex-row items-center gap-5 justify-center "
              : "flex flex-col items-center pt-[350px] gap-3"
          }`}
        >
          <p className="font-bold text-2xl">ChatBot</p>
          <div className="flex flex-row gap-2 items-center justify-center">
            <input
              className="rounded-full pl-5 pr-3 pt-2 pb-2 w-[400px] bg-white/90 text-black font-semibold shadow-sm shadow-white inset-ring-2 inset-ring-blue-500/60"
              placeholder="Search Here"
              id="userSearch"
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            {input && (
              <button
                className="rounded-full bg-black p-2 items-center"
                onClick={Handler}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;

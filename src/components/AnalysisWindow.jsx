import React from "react";
import ReactMarkdown from "react-markdown";

const AnalysisWindow = () => {
  return (
    <div className="flex flex-col justify-between items-center w-full gap-3 pl-1 pr-1 ">
      <p className="pt-2 font-bold text-xl">Analysis</p>
      <div
        className=" w-full h-[800px]  border-1 border-black-500 bg-neutral-900  shadow-white shadow-lg/20  overflow-x-hidden text-wrap  rounded-2xl overflow-y-auto text text-justify break-normal font-semibold pl-5 pt-3 pb-3 tracking-wide leading-8"
        // style={{
        //   boxShadow:
        //     "-5px -5px 20px rgba(255,255,255,0.5), -5px -5px 40px rgba(255,255,255,0.1), 0 0 20px rgb(140,69,255)",
        // }}
      >
        <ReactMarkdown></ReactMarkdown>
      </div>
    </div>
  );
};

export default AnalysisWindow;

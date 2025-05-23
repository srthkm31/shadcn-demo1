import React from "react";
import AnalysisWindow from "../components/AnalysisWindow";
import TopBar from "../components/top-bar";
import Chatbot from "../components/Chatbot";

const AnalysedPage = () => {
  return (
    <div>
      <TopBar></TopBar>
      <div className="flex flex-row gap-3 items-center">
        <AnalysisWindow></AnalysisWindow>
        <Chatbot></Chatbot>
      </div>
    </div>
  );
};

export default AnalysedPage;

import React from "react";
import { useDropzone } from "react-dropzone";

const DragDrop = () => {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone();
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section
      className="w-[90vw] sm:w-[500px] md:w-[600px] lg:w-[700px] min-h-[250px] border rounded-md text-center border-orange-500 flex justify-center items-center flex-col bg-neutral-900 p-4 m-4"
      style={{
        boxShadow:
          "-5px -5px 20px rgba(255,255,255,0.5), -5px -5px 40px rgba(255,255,255,0.1), 0 0 20px rgb(140,69,255)",
      }}
    >
      <div
        {...getRootProps({
          className: "dropzone w-full flex flex-col items-center",
        })}
      >
        <p className="font-semibold text-base sm:text-lg m-1">
          Drag and Drop files here, Or
        </p>
        <p className="border border-neutral-500 rounded-md p-2 w-[90%] max-w-[250px] m-3 text-center font-semibold text-base sm:text-lg cursor-pointer">
          Click to select a file
        </p>
        <input {...getInputProps()} />
      </div>
      <div className="w-full px-2 mt-2">
        <p className="text-base sm:text-lg font-medium">Selected Files</p>
        <ul className="list-disc text-left ml-5 mt-1 text-sm sm:text-base">
          {files}
        </ul>
      </div>
    </section>
  );
};

export default DragDrop;

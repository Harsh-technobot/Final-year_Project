import React, { useState } from "react";
import uploadicon from "../../../assets/IconFrame.svg";

const GrievanceForm = () => {
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size <= 25 * 1024 * 1024) {
      setFile(selectedFile);
    } else {
      alert("File size must be less than 25MB");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ category, location, description, file });
    alert("Grievance submitted successfully!");
  };

  return (
    <div className="max-w-mx-auto lg:p-8 p-3 bg-white rounded-3xl shadow-sm">
      <h2 className="text-2xl font-semibold mb-4 text-black/80">
        Register New Grievance
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4 flex justify-center items-center">
          <label
            className="flex justify-center border-dashed border-black/40 border-[1.5px] my-3 rounded-2xl py-8 w-full lg:w-1/2 "
            htmlFor="file-upload"
          >
            <div className="flex flex-col items-center gap-3 relative">
              <div className="flex w-12 h-12 items-center justify-center gap-2.5 relative bg-neutral-100 rounded-[50px]">
                <img src={uploadicon} alt="" />
              </div>
              <div className="flex flex-col items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-start justify-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="[font-family:'Hind-Medium',Helvetica] font-medium text-[#a020f0] relative w-fit mt-[-1.00px] text-sm tracking-[0] leading-[normal]">
                    Click to Upload
                  </div>
                  <div className="[font-family:'Hind-Regular',Helvetica] font-normal text-[#353535] relative w-fit mt-[-1.00px] text-sm tracking-[0] leading-[normal]">
                    or drag and drop
                  </div>
                </div>
                <p className="relative self-stretch [font-family:'Hind-Regular',Helvetica] font-normal text-[#353535] text-xs text-center tracking-[0] leading-[normal]">
                  (Max. File size: 25 MB)
                </p>
              </div>
            </div>
          </label>
          <input
            id="file-upload"
            type="file"
            onChange={handleFileChange}
            className="hidden"
            accept="image/*,application/pdf"
          />
          {file && (
            <p className="text-gray-700 font-medium mt-2">
              Selected file: {file.name}
            </p>
          )}
        </div>
        <div className="lg:flex w-full gap-2">
          <div className="space-y-2 w-full">
            <label className="block text-gray-700 font-medium">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-xl focus:bg-[#EFEFEF]/40"
              required
            />
          </div>
          <div className="space-y-2 w-full">
            <label className="block text-gray-700 font-medium ">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-xl focus:bg-[#EFEFEF]/40"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-gray-700 font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-xl focus:bg-[#EFEFEF]/40 h-24 resize-vertical"
            required
          />
        </div>
        <div className="w-full flex justify-center">
        <button
          type="submit"
          className="all-[unset] box-border relative w-[184px] h-12 bg-[#2e91e2] rounded-lg border-0 border-none"
        >
          <div className="absolute w-[150px] top-3.5 left-6 [font-family:'Inter-Medium',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-[normal]">
            Submit Grievance
          </div>
        </button>
        </div>
       
      </form>
    </div>
  );
};

export default GrievanceForm;

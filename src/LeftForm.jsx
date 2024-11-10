import { html2pdf } from "html2pdf.js";
import { FaGithub } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { useState } from "react";

function LeftForm({ handleData, handleImage, download }) {
  const [general, setGeneral] = useState(false);
  const [education, setEducation] = useState(false);
  const [experience, setExperience] = useState(false);

  function toggleGeneral() {
    setGeneral(!general);
  }

  function toggleEducation() {
    setEducation(!education);
  }

  function toggleExperience() {
    setExperience(!experience);
  }

  return (
    <div>
      <form
        action=""
        className="flex flex-col gap-5 p-10 my-1 rounded-lg w-80 bg-[#6ea1bc] text-center text-gray-700"
      >
        <div
          className="bg-sky-100 p-4 cursor-pointer rounded-lg text-xl "
          onClick={toggleGeneral}
        >
          <h1>General Info</h1>
        </div>
        {general && (
          <>
            <input
              type="text"
              onChange={handleData}
              name="Name"
              placeholder="Name"
            />

            <input
              type="email"
              name="Email"
              onChange={handleData}
              placeholder="Email"
            />

            <input
              type="number"
              name="Phone"
              onChange={handleData}
              placeholder="Phone Number"
            />

            <input
              type="text"
              name="Location"
              onChange={handleData}
              placeholder="Location"
            />
            <input
              type="file"
              name=""
              id="File"
              accept="image/*"
              onChange={handleImage}
            />
          </>
        )}
        <div
          className="bg-sky-100 p-4 cursor-pointer rounded-lg text-xl text-center"
          onClick={toggleEducation}
        >
          <h1>Education</h1>
        </div>
        {education && (
          <>
            <input
              type="text"
              onChange={handleData}
              name="Institute"
              placeholder="Institute / School"
            />

            <div className="date flex flex-col ">
              <label htmlFor="Start">From</label>
              <input
                type="date"
                name="Start"
                id="Start"
                onChange={handleData}
              />
            </div>

            <div className="date flex flex-col ">
              <label htmlFor="End">To</label>
              <input type="date" name="End" id="End" onChange={handleData} />
            </div>
          </>
        )}
        <div
          className="bg-sky-100 p-4 cursor-pointer rounded-lg text-xl text-center"
          onClick={toggleExperience}
        >
          <h1>Experience</h1>
        </div>
        {experience && (
          <>
            <input
              type="text"
              onChange={handleData}
              name="PreviousComp"
              placeholder="Previous Company"
            />

            <input
              type="text"
              name="Role"
              onChange={handleData}
              placeholder="Role"
            />

            <input
              type="number"
              name="Experience"
              onChange={handleData}
              placeholder="Experience ( Years )"
            />
          </>
        )}
      </form>
      <button
        onClick={download}
        className="py-2 px-32 rounded-md my-5 bg-[#6ea1bc] hover:bg-[#95d2f3] my-8 text-gray-700"
      >
        Download
      </button>

      <div className="text-xl flex gap-3 items-center mt-6 text-gray-700 justify-center">
        <h1>Created By Imad Uddin</h1>
        <a href="https://www.instagram.com/imaduddin_101/" target="blank">
          <CiInstagram />
        </a>
        <a href="https://github.com/imad-101" target="blank">
          <FaGithub />
        </a>
      </div>
    </div>
  );
}

export default LeftForm;

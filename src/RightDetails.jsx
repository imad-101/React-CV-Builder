import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
function RightDetails({ details, imgUrl }) {
  return (
    <div
      className="h-[40rem] w-[35rem] bg-white shadow-2xl px-14 py-5 "
      id="Download"
    >
      <div className="flex gap-7">
        <div className="content my-3 text-gray-500">
          <h1 className="py-5 text-4xl font-bold text-gray-700">
            {details.Name}
          </h1>

          <div className="info flex flex-col ">
            <div className="email flex items-center my-4 mx-1 gap-2">
              {details.Email && <CiMail />}
              <h1>{details.Email}</h1>
            </div>

            <div className="phone flex items-center my-4 mx-1 gap-2">
              {details.Phone && <CiPhone></CiPhone>}
              <h1>{details.Phone}</h1>
            </div>

            <div className="location flex items-center my-4 mx-1 gap-2">
              {details.Location && <CiLocationOn></CiLocationOn>}
              <h1>{details.Location}</h1>
            </div>
          </div>
        </div>

        <div className="image">
          {imgUrl && (
            <img
              src={imgUrl}
              alt="Insert Your Image"
              className="w-60 mr-12 m-8 rounded-xl"
            />
          )}
        </div>
      </div>
      <div className="Education">
        <h1 className="text-4xl text-center font-bold text-gray-700 mt-8 underline">
          {details.Institute}
        </h1>
        <div className="flex gap-6 justify-center mt-6">
          <h2 className="text-xl text-gray-700">
            <span className="text-gray-700 text-2xl font-bold">
              {details.Start && "From :"}
            </span>
            {details.Start}
          </h2>
          <h2 className="text-xl text-gray-700">
            <span className="text-gray-700 text-2xl font-bold">
              {details.End && " To : "}
            </span>
            {details.End}
          </h2>
        </div>
      </div>
      <div className="Experience">
        <h1 className="text-4xl text-center font-bold text-gray-700 mt-12 underline">
          {details.PreviousComp}
        </h1>
        <div className="flex gap-6 justify-center mt-6">
          <h2 className="text-xl text-gray-700">
            <span className="text-gray-700 text-2xl font-bold">
              {details.Role && "Role : "}
            </span>
            {details.Role}
          </h2>
          <h2 className="text-xl text-gray-700">
            <span className="text-gray-700 text-2xl font-bold">
              {details.Experience && "Experience (Years) : "}
            </span>
            {details.Experience}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default RightDetails;

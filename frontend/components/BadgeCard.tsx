import { Briefcase, MapPin, IndianRupee } from "lucide-react";
import axios from 'axios'
import { useEffect, useState } from "react";

const BadgeCard = () => {

  const [JobData, SetJobData] = useState<any[]>([]);

  const GetJobs = async () => {
    return await axios.get("http://127.0.0.1:8000/job/jobs")
  }
  async function fetchData() {
    const res = await GetJobs()
    const jdata = res.data.payload
    SetJobData(jdata)
  }

  useEffect(() => {
    fetchData()
  }, [])
  console.log(JobData)

  console.log(JobData)
  return (
    <div className="flex flex-wrap gap-5 justify-around pt-28">

      {
        JobData?.map((data) => {
          return (
            <div key={data.Job_Id} className="flex flex-col justify-between p-10 h-[400px] w-[330px] rounded-2xl shadow-md bg-white ">
              <div className="flex justify-between items-center mb-2">
                <img
                  src="https://job-webap.vercel.app/assets/image%2077.png"
                  alt="Amazon Logo"
                  className="w-[70px] h-[70px] p-2  bg-gray-100 rounded-[40%] shadow-lg  shadow-[#f4f4f4]"
                />
                <span className="text-sm bg-[#acd8ff] px-2 py-1 rounded-md">24h Ago</span>
              </div>
              <h2 className="text-2xl font-semibold ">{data.Job_Title}</h2>
              <div className="flex items-center text-gray-600 text-lg space-x-3 my-2 ">
                <span className="flex items-center gap-1">
                  <Briefcase size={14} /> {data.Job_Type}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} /> {data.Location}
                </span>
                <span className="flex items-center gap-1">
                  <IndianRupee size={14} /> {data.Salary_End}
                </span>
              </div>
              <div className="h-auto text-gray-500  text-md font-semibold list-disc pl-5 mb-4  overflow-auto">
                  <p>{data.Job_Desc}</p>
              </div>
              <button className="w-full bg-[#00aaff] text-white py-2 rounded-md  hover:scale-105 transition-transform duration-75 ">
                Apply Now
              </button>
            </div>
          )
        })
      }


    </div>
  );
};

export default BadgeCard;

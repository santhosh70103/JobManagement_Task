import { Briefcase, MapPin, IndianRupee } from "lucide-react";
import axios from 'axios'
import { useEffect, useState } from "react";

const BadgeCard = () => {

const [JobData, SetJobData] = useState<any[]>([]);

const GetJobs=async()=>
  {
  return await axios.get("http://127.0.0.1:8000/job/jobs")
  }   
  async function fetchData() {
    const res = await GetJobs()
    const jdata=res.data.payload
    SetJobData(jdata)
  }

useEffect(()=>{
  fetchData()
},[])
console.log(JobData)

console.log(JobData)
  return (
    <div className="flex flex-wrap space-x-10  justify-center ">
      
      {
        JobData?.map((data)=>{
          return(
            <div key={data.Job_Id} className="w-[350px] h-[250px] p-4 rounded-2xl shadow-lg bg-white mt-[100px] ">
      <div className="flex justify-between items-center mb-2">
        <img
          src="https://job-webap.vercel.app/assets/image%2077.png"
          alt="Amazon Logo"
          className="w-10 h-10"
        />
        <span className="text-sm bg-gray-200 px-2 py-1 rounded-md">24h Ago</span>
      </div>
      <h2 className="text-lg font-semibold">{data.Job_Title}</h2>
      <div className="flex items-center text-gray-600 text-sm space-x-3 my-2">
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
      <ul className="text-gray-500 text-sm list-disc pl-5 mb-4 h-[50px] overflow-auto scroll-m-56">
        <li>{data.Job_Desc}</li>
      </ul>
      <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
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

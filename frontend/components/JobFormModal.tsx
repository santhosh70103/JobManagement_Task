import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

type JobFormData = {
    jobTitle: string;
    companyName: string;
    location: string;
    jobType: string;
    salaryMin: number;
    salaryMax: number;
    applicationDeadline: string;
    jobDescription: string;
};

export default function JobFormModal({ isOpen, closeModal }: { isOpen: boolean; closeModal: () => void }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<JobFormData>();
    
    const end_point_url = process.env.NEXT_PUBLIC_HOST
    
    if (!isOpen) return null; // Hide modal if not open

    const onSubmit = async (data: JobFormData) => {
        const requestData = {
            jobTitle: data.jobTitle,
            companyName: data.companyName,
            location: data.location,
            jobType: data.jobType,
            salaryStart: data.salaryMin,
            salaryEnd: data.salaryMax,
            applicationDeadline: new Date(data.applicationDeadline).toISOString(), // Convert to ISO format
            jobDesc: data.jobDescription,
            jobStatus: "live", // Default status
        };

        try {
            const response = await axios.post(`${end_point_url}/job/create`, requestData);
            toast.success("🎉 Job Created Successfully!", { position: "top-right", autoClose: 3000 });
            reset(); // Clear form after successful submission
            closeModal(); // Close modal
        } catch (error) {
            console.error("Error creating job:", error);
            alert("Failed to create job. Please try again.");
        }
    };

    return (
        <div className="fixed inset-0 flex justify-center backdrop-blur-sm items-center">
            <div className="w-[700px] h-[550px] p-6 rounded-lg shadow-lg relative bg-white border">
                {/* Close Button */}
               <div className="">
               <button className="absolute top-3 right-3 text-gray-700" onClick={closeModal}>
                    ✖
                </button>

                <h2 className="text-xl font-semibold text-center mb-4 text-gray-900">Create Job Opening</h2> 
               </div>

                {/* Form Fields */}
                <form onSubmit={handleSubmit(onSubmit)} className="text-gray-800 ">
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <label className="block text-sm font-medium">Job Title</label>
                            <input {...register("jobTitle", { required: "Job title is required" })} type="text" className="w-full p-2 pr-[75px] border rounded-md mb-4 bg-white/40 border-gray-300" placeholder="Enter job title" />
                            {errors.jobTitle && <span className="text-red-500 text-sm">{errors.jobTitle.message}</span>}
                        </div>

                        <div className="flex flex-col">
                            <label className="block text-sm font-medium">Company Name</label>
                            <input {...register("companyName", { required: "Company name is required" })} type="text" className="w-full p-2 pr-[75px] border rounded-md mb-4 bg-white/40 border-gray-300" placeholder="Enter company name" />
                            {errors.companyName && <span className="text-red-500 text-sm">{errors.companyName.message}</span>}
                        </div>
                    </div>

                    <div className="flex space-x-10">
                        <div>
                            <label className="block text-sm font-medium">Location</label>
                            <select {...register("location", { required: "Location is required" })} className="focus:outline-none border mb-4 border-gray-200 font-light p-2 rounded-sm">
                                <option value="">Select a City</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Hyderabad">Hyderabad</option>
                            </select>
                            {errors.location && <span className="text-red-500 text-sm">{errors.location.message}</span>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Job Type</label>
                            <select {...register("jobType", { required: "Job type is required" })} className="focus:outline-none border border-gray-200 mb-4 font-light p-2 rounded-sm">
                                <option value="">Select Job Type</option>
                                <option value="FullTime">Full-Time</option>
                                <option value="Internship">Internship</option>
                                <option value="PartTime">Part-Time</option>
                                <option value="Contract">Contract</option>
                            </select>
                            {errors.jobType && <span className="text-red-500 text-sm">{errors.jobType.message}</span>}
                        </div>
                    </div>

                    <div className="mb-3 flex space-x-10">
                        <div className="flex flex-col pr-5">
                            <label htmlFor="Salary">Salary Range</label>
                            <div className="flex space-x-2">
                                <input {...register("salaryMin", { required: "Minimum salary is required", valueAsNumber: true })} type="number" placeholder="₹ 0" className="w-[120px] p-2 border border-gray-200 rounded-sm" />
                                <input {...register("salaryMax", { required: "Maximum salary is required", valueAsNumber: true })} type="number" placeholder="₹ 12,00,000" className="w-[120px] p-2 border border-gray-200 rounded-sm" />
                            </div>
                            {errors.salaryMin && <span className="text-red-500 text-sm">{errors.salaryMin.message}</span>}
                            {errors.salaryMax && <span className="text-red-500 text-sm">{errors.salaryMax.message}</span>}
                        </div>
                        <div className="flex flex-col">
                            <label>Application Deadline</label>
                            <input {...register("applicationDeadline", { required: "Deadline is required" })} type="date" className="p-2 pl-[150px] border border-gray-200 rounded-sm" />
                            {errors.applicationDeadline && <span className="text-red-500 text-sm">{errors.applicationDeadline.message}</span>}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Job Description</label>
                        <textarea {...register("jobDescription", { required: "Job description is required" })} className="w-full p-2 border rounded-md mb-4 bg-white/40 border-gray-300" rows={3} placeholder="Enter job details"></textarea>
                        {errors.jobDescription && <span className="text-red-500 text-sm">{errors.jobDescription.message}</span>}
                    </div>
                    <div className="flex justify-between mt-4">
                        <button type="button" className="px-4 py-2 border rounded-md text-gray-800 bg-white/50 border-gray-300">Save Draft ⏷</button>
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Publish ➤</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

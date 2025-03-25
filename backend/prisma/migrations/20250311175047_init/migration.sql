-- CreateEnum
CREATE TYPE "JobStatus" AS ENUM ('draft', 'live', 'expired');

-- CreateEnum
CREATE TYPE "JobType" AS ENUM ('Internship', 'FullTime', 'PartTime', 'Contract');

-- CreateTable
CREATE TABLE "JobDetails" (
    "Job_Id" TEXT NOT NULL,
    "Job_Title" TEXT NOT NULL,
    "Company_Name" TEXT NOT NULL,
    "Location" TEXT NOT NULL,
    "Job_Type" "JobType" NOT NULL,
    "Salary_Start" INTEGER NOT NULL,
    "Salary_End" INTEGER NOT NULL,
    "Application_DeadLine" TIMESTAMP(3) NOT NULL,
    "Job_Desc" TEXT NOT NULL,
    "Job_Status" "JobStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JobDetails_pkey" PRIMARY KEY ("Job_Id")
);

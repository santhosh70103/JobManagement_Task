import { JobType, JobStatus } from "@prisma/client";

export class CreateJob {
    readonly jobTitle: string;
    readonly companyName: string;
    readonly location: string;
    readonly jobType: JobType;
    readonly salaryStart: number;
    readonly salaryEnd: number;
    readonly applicationDeadline: string;
    readonly jobDesc: string;
    readonly jobStatus: JobStatus;
}
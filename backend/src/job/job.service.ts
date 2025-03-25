import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma.service';
import { Prisma, JobDetails } from '@prisma/client';

import { CreateJob } from './dto/create-job.dto';

@Injectable()
export class JobService {
    constructor(private readonly prisma: PrismaService) {}

    async jobs(params:{
        skip?: number,
        take?: number,
        where?: Prisma.JobDetailsWhereInput,
        orderBy?: Prisma.JobDetailsOrderByWithRelationInput
    }):Promise<JobDetails[]> {
        const { skip, take, where, orderBy} = params;
        return this.prisma.jobDetails.findMany({
            skip,
            take,
            where,
            orderBy
        });
    }

    async createJob(data: CreateJob): Promise<JobDetails> {
        return this.prisma.jobDetails.create({
            data: {
                Job_Title: data.jobTitle,
                Company_Name: data.companyName,
                Location: data.location,
                Job_Type: data.jobType,
                Salary_Start: data.salaryStart,
                Salary_End: data.salaryEnd,
                Application_DeadLine: data.applicationDeadline,
                Job_Desc: data.jobDesc,
                Job_Status: data.jobStatus
            }
        });
    }
}

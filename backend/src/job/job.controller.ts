import {
    Controller,
    Res,
    Get,
    Post,
    Body,
    HttpStatus,
    HttpException
} from '@nestjs/common';
import { Response } from 'express';

import { JobService } from './job.service';
import { CreateJob } from './dto/create-job.dto';

@Controller('job')
export class JobController {
    constructor(private readonly jobService: JobService) { }

    @Get('jobs')
    async getPublishedJobs(@Res() res: Response){
        try {
            const jobs = await this.jobService.jobs({});
            res.status(HttpStatus.OK).json({
                "message": "Jobs fetched successfully",
                "payload": jobs
            });
        }catch(error) {
            console.error(error);
            throw new HttpException({
                statusCode: HttpStatus.BAD_REQUEST,
                message: "Failed to fetch the Job",
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        
    }

    @Post('create')
    async create(@Res() res: Response, @Body() createJob: CreateJob) {
        try {
            await this.jobService.createJob(createJob);
            res.status(HttpStatus.CREATED).json({
                "message": "Job created successfully"
            });
        } catch (error) {
            console.error(error);
            throw new HttpException({
                statusCode: HttpStatus.BAD_REQUEST,
                message: "Job creation failed",
            }, HttpStatus.BAD_REQUEST);
        }
    }
}

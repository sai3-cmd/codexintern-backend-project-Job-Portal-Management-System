import HandleError from "../utils/HandleError.js"
import HandleResponse from "../utils/HandleResponse.js"
import Job from "../models/jobs.model.js"

const createJob = async (req, res) => {
    /*
    1. take all required fields
    2. sanitize them properly
    3. create a job post by creating a new document for that job
    4. return response along with the job post
    */
}

const listAllJobs = async (req, res) => {
    /*
    1. list all jobs
    2. return response along with all jobs
    */
}

const getJobById = async (req, res) => {
    /*
    1. get job by ID
    2. return response along with the job
    */
}

const updateJobById = async (req, res) => {
    /*
    1. take all necessary parameters
    2. sanitize them properly
    3. fetch job document by its _id
    4. make changes 
    5. save the changes
    6. return response along with the job post
    */
}

const deleteJobById = async (req, res) => {
    /*
    1. delete job by its _id
    2. return response with a success message
    */
}

export {
    
}
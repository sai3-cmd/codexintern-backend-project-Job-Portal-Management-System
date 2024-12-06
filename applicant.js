import HandleError from "../utils/HandleError.js";
import HandleResponse from "../utils/HandleResponse.js";
import Applicant from "../models/applicants.model.js";


const applyToJob = async (req, res) => {
    /*
    1. take all necessary parameters
    2. sanitize them properly
    3. check applicant_id is present or not in the database
    4. If present, just throw an error
    5. If not, create a new job application
    6. Save the application in the database
    7. Return a response with success message
    */
}

const deleteJobApplication = async (req, res) => {
    /*
    1. take application_id from the request parameters
    2. check if the application exists in the database
    3. If not, throw an error
    4. Delete the application from the database
    5. Return a response with success message
    */
}

const getAllApplicationsByApplicantId = async (req, res) => {
    /*
    1. take applicant_id from the request parameters
    2. find all applications for this applicant in the database
    3. Return a response with the list of applications
    */
}

const getApplicationById = async (req, res) => {
    /*
    1. take application_id from the request parameters
    2. find the application in the database by id
    3. Return a response with the application details
    */
}

export {
    
}
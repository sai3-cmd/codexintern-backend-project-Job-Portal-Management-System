import HandleError from "../utils/HandleError.js"
import HandleResponse from "../utils/HandleResponse.js"
import JobSeeker from "../models/jobSeeker.model.js"
import uploadOnCloudinary from "../utils/cloudinary.js"


const signup = async (req, res) => {
    const {
        name,
        email,
        phone_no,
        gender,
        education,
        experience,
        location,
        password
    } = req.body

    if (
        !name ||
        !email ||
        !phone_no ||
        !gender ||
        !education ||
        !experience ||
        !location ||
        !password
    ) {
        return res
        .status(200)
        .json(
            new HandleError(400, "All fields are required!")
        )
    }

    /*
      Task ---> Complete this portion by yourself
    */

    const resume = req.file

    console.log(resume)

    // if (!resume) {
    //     return res
    //     .status(400)
    //     .json(
    //         new HandleError(400, "Resume is required!!")
    //     )
    // }

    const response = await uploadOnCloudinary(resume.path)

    console.log(response)

    if (!response) {
        return res
        .status(500)
        .json(
            new HandleError(500, "Something went wrong while uploading resume!")
        )
    }

    const isExistedJobSeeker = await JobSeeker.findOne({ $or: [ { email }, { phone_no } ] })

    if (isExistedJobSeeker) {
        return res
        .status(400)
        .json(
            new HandleError(400, "Jobseeker is already existed!")
        )
    }

    const jobseeker = await JobSeeker.create({
        name: name,
        email: email,
        phone_no: Number(phone_no),
        gender: gender,
        education: education,
        experience: experience,
        location: location,
        password: password,
        resume: response.secure_url
    })

    const isCreated = await JobSeeker.findById(jobseeker?._id).select("-password")

    if (!isCreated) {
        return res
        .status(500)
        .json(
            new HandleError(500, "Something went wrong while creating account!")
        )
    }

    return res
    .status(201)
    .json(
        new HandleResponse(200, isCreated, "Profile created successfully!")
    )
}

const login = async (req, res) => {
    // 1. take credentials from the front-end
    // 2. sanitize all data
    // 3. check document is present inside the database or not.
    // 4. if not, just throw an error
    // 5. otherwise perform login operation
    // 6. generate accessToken
    // 7. store token into cookies
    // 8. return response
}

const logout = async (req, res) => {
    /*
    1. take _id from authentication
    2. remove accessToken from cookies
    3. return response
    */
}

const updateName = async (req, res) => {
    /*
    1. take new name from the frontend
    2. take _id from authentication
    3. update the name in the database
    4. return response
    */
}

const updateEmail = async (req, res) => {
    /*
    1. take new email from the frontend
    2. take _id from authentication
    3. update the email in the database
    4. return response
    */
}

const updatePhoneNo = async (req, res) => {
    /*
    1. take new phone_no from the frontend
    2. take _id from authentication
    3. update the phone_no in the database
    4. return response
    */
}

const updateResume = async (req, res) => {
    /*
    1. take new resume from the frontend
    2. take _id from authentication
    3. update the resume in the database
    4. return response
    */
}

const updateEducation = async (req, res) => {
    /*
    1. take new education from the frontend
    2. take _id from authentication
    3. update the education in the database
    4. return response
    */
}

const updateExperience = async (req, res) => {
    /*
    1. take new experience from the frontend
    2. take _id from authentication
    3. update the experience in the database
    4. return response
    */
}

const updateLocation = async (req, res) => {
    /*
    1. take new location from the frontend
    2. take _id from authentication
    3. update the location in the database
    4. return response
    */
}

const updateSkills = async (req, res) => {
    /*
    1. take new skills from the frontend
    2. take _id from authentication
    3. update the skills in the database
    4. return response
    */
}

const updatePassword = async (req, res) => {
    /*
    1. take new password from the frontend
    2. take _id from authentication
    3. update the password in the database
    4. return response
    */
}

const currentJobSeeker = async (req, res) => {
    /*
    1. take _id from authentication
    2. fetch document using _id
    3. return response
    */
}

const deleteAccount = async (req, res) => {
    /*
    1. take _id from authentication
    2. delete document from the database
    4. return response
    */
}

export {
    signup
}
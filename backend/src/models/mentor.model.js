import mongoose from 'mongoose';




const mentorSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required."],
        trim: true,
        minlength: [3, "Name must be at least 3 characters"],
        maxlength: [50, "Name cannot exceed 50 characters"]
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: [true, "Email is required."],
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email"]

    },
    password: {
        type: String,
        required: [true, "Password is required,"],
        minlength: [8, "Password must be at least 8 characters"]
    },
    phone: {
        type: String, 
        required: [true, "Phone is required."],
        match: [/^\+?[1-9]\d{1,14}(?:[\s.-]\d{1,14})*$/, "Enter a valid phone number"]
    },
    qualification: {
        type: String,
        required: [true, "Qualification is required."],
        trim: true,
        enum: {
            values: [
                '10th',
                '12th',
                'Diploma',
                'Graduation',
                'Post Graduation',
                'phD',
                'Other'
            ],
            message: "Please select a valid qualification."
        }
    },
    chooseSkills: {
        type: String,
        required: [true, "Choose Skills You Want to teach."],
        trim: true
    },
    experience: {
        type: Number,
        required: [true, "Experience is required"],
        trim: true,
        min: [0, "Experience cannot be negative"],
        max: [60, "Experience cannot exceed 60 years"]
    },
    description: {
        type: String,
        required: [true, "Description is required."],
        trim: true,
        minlength: [10, "Description must be at least 10 characters"],
        maxlength: [100, "Description cannot exceed 1000 characters"]
    },
    github: {
        type: String,
        trim: true,
        match: [/^https:\/\/(www\.)?github\.com\/[A-Za-z0-9-]+\/?$/, "Enter a valid GitHub profile URL."]
    },
    linkedin: {
        type: String,
        trim: true,
        match: [/^https:\/\/(www\.)?linkedin\.com\/in\/[A-Za-z0-9_-]+\/?$/ , "Enter a valid LinkedIn profile URL."]
    },
    projectLink: {
        type: String,
        trim: true,
        match: [/^https?:\/\/.+\..+/, "Enter a valid project URL."]
    }
})




const mentorModel = mongoose.model('mentor', mentorSchema);

export default mentorModel;
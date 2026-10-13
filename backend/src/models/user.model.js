import mongoose from 'mongoose';




const userSchema = mongoose.Schema({
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
    goal: {
        type: String,
        required: [true, "Goal is required."],
        trim: true,
        enum: {
            values: [
                'Web Developer',
                'Full Stack Developer',
                'Software Developer',
                'App Developer',
                'Data Analyst',
                'Data Scientist',
                'AI/ML Developer',
                'UI/UX Developer',
                'Cybersecurity',
                'Other'
            ],
            message: "Please select a valid option."
        }
    },
    chooseSkills: {
        type: String,
        required: [true, "Choose Skills You Want to Learn"],
        trim: true
    },
    github: {
        type: String,
        trim: true,
        match: [/^https:\/\/(www\.)?github\.com\/[A-Za-z0-9-]+\/?$/, "Enter a valid GitHub profile URL"]
    },
    linkedin: {
        type: String,
        trim: true,
        match: [/^https:\/\/(www\.)?linkedin\.com\/in\/[A-Za-z0-9_-]+\/?$/ , "Enter a valid LinkedIn profile URL"]
    },
    projectLink: {
        type: String,
        trim: true,
        match: [/^https?:\/\/.+\..+/, "Enter a valid project URL"]
    }
})




const userModel = mongoose.model('user', userSchema);

export default userModel;
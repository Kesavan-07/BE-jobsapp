const recruiterController = {
    createJob: async (req, res) => {
        try {
            // get the job details from the request body
            const { title, description } = req.body;
            //create a new job
            const newJob = await Job.create({
                title,
                description,
                postedby: req.userId,
                company : req.companyId
            });
            //return success response
            return res.status(201).json({ message: "Job created successfully", newJob });


            
            } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    ViewJobs: async (req, res) => {
        try {
            
            } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    UpdateJob: async (req, res) => {
        try {
            
            } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    DeleteJob: async (req, res) => {
        try {
            
            } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    ViewApplicants: async (req, res) => {
        try {
            
            } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    ViewCandidateProfile: async (req, res) => {
        try {
            
            } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
};

module.exports = recruiterController;
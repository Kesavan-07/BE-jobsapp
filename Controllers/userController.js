const User = require('../models/User');
const userController = {
    getProfile: async (req, res) => {
        try { // get the user profile
            const userId = req.userId;
            // get the user profile from the database
            const userprofile = await User.findById(userId);
            // send the user profile in the response
            res.status(200).json(userprofile);

        }
        catch (error) {
            res.status(500).json({ message: error.message }); 
        }
    },
    updateProfile: async (req, res) => {
        try {
            const userId = req.userId;

            const { name, email } = req.body;
            // update the user profile in the database
            const userprofile = await User.findByIdAndUpdate(userId, { name, email }, { new: true });
            // send the updated user profile in the response
            res.status(200).json({ message: "Profile updated successfully", updateprofile });

        }
        catch (error) {
            res.status(500).json({ message: error.message }); 
        }
    },
    deleteProfile: async (req, res) => {
        try {
            const userId = req.userId;
            // delete the user profile from the database
            await User.findByIdAndDelete(userId);
            // send the response
            res.status(200).json({ message: "Profile deleted successfully" });
            //logout the user
            res.clearCookie('token');

        }
        catch (error) {
            res.status(500).json({ message: error.message }); 
        }
    },
    applyJob: async (req, res) => {
        try {

        }
        catch (error) {
            res.status(500).json({ message: error.message }); 
        }
    },
    myApplications: async (req, res) => {
        try {

        }
        catch (error) {
            res.status(500).json({ message: error.message }); 
        }
    },



}
module.exports = userController;
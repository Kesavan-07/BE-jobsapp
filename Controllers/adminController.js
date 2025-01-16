const User = require("../models/user");
const Recruiter = require("../models/recruiter");
const Company = require("../models/company");
const Job = require("../models/job");


const { res } = require("express");

const adminController = {

    createRecruiter: async (req, res) => {
        try {

            
        } catch (error) {
            res.status(500).json({ message: error.message });

        }
    },
    updateRecruiter: async (req, res) => {
        try {

            
        } catch (error) {
            res.status(500).json({ message: error.message });

        }
    },
    deleteRecruiter: async (req, res) => {
        try {

            
        } catch (error) {
            res.status(500).json({ message: error.message });

        }
    },
    createCompany : async (req, res) => {
        try {

            
        } catch (error) {
            res.status(500).json({ message: error.message });

        }
    },
    updateCompany : async (req, res) => {
        try {

            
        } catch (error) {
            res.status(500).json({ message: error.message });

        }
    },
    deleteCompany : async (req, res) => {
        try {

            
        } catch (error) {
            res.status(500).json({ message: error.message });

        }
    },
    assignRecruiter : async (req, res) => {
        try {

            
        } catch (error) {
            res.status(500).json({ message: error.message });

        }
    },
    removeRecruiter: async (req, res) => {
        try {

            
        } catch (error) {
            res.status(500).json({ message: error.message });

        }
    },
    viewAllJobs: async (req, res) => {
        try {

            
        } catch (error) {
            res.status(500).json({ message: error.message });

        }
    },
    deleteJob: async (req, res) => {
        try {

            
        } catch (error) {
            res.status(500).json({ message: error.message });

        }
    },
    updateJob: async (req, res) => {
        try {

            
        } catch (error) {
            res.status(500).json({ message: error.message });

        }
    },
    viewAllUsers: async (req, res) => {
        try {

            
        } catch (error) {
            res.status(500).json({ message: error.message });

        }
    },
    updateUser: async (req, res) => {    
        try {

            
        } catch (error) {
            res.status(500).json({ message: error.message });

        }
    },
    deleteUser: async (req, res) => {    
        try {

            
        } catch (error) {
            res.status(500).json({ message: error.message });

        }
    }
}

module.exports = adminController;
const User = require("../models/user");
const Recruiter = require("../models/recruiter.js");
const Company = require("../models/company");
// const Job = require("../models/job");
const bcrypt = require("bcrypt");

const adminController = {
  createRecruiter: async (req, res) => {
    try {
      //get the details from recruiter from the request body
      const { email, password, role, name } = req.body;
      // get the id from the request params
      //check if the user already exists
      const recruiter = await User.findOne({ email });
      //if the user exists, return an error message
      if (recruiter)
        return res.status(400).json({ message: "User already exists" });
      //hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
      //create a new recruiter
      const newRecruiter = new User({
        email,
        password: hashedPassword,
        role,
        name,
      });

      //save the recruiter
      await newRecruiter.save();
      //return a success message
      res.status(201).json({ message: "Recruiter created successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  updateRecruiter: async (req, res) => {
    try {
      // get the details of the recruiter from the request body
      const { email, password, name } = req.body;
      const { id } = req.params;
      //check if the recruiter exists
      const recruiter = await User.findById(id);
      // if the recruiter does not exist, return an error message
      if (!recruiter)
        return res.status(400).json({ message: "Recruiter does not exist" });
      // hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
      // update the recruiter
      await User.findByIdAndUpdate(id, {
        email,
        password: hashedPassword,
        name,
      });
      // return a success message
      res.status(200).json({ message: "Recruiter updated successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  deleteRecruiter: async (req, res) => {
    try {
      // get the id from the request params
      const { id } = req.params;
      // check if the recruiter exists
      const recruiter = await User.findById(id);
      // if the recruiter does not exist, return an error message
      if (!recruiter)
        return res.status(400).json({ message: "Recruiter does not exist" });
      // delete the recruiter
      await User.findByIdAndDelete(id);
      // return a success message
      res.status(200).json({ message: "Recruiter deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  createCompany: async (req, res) => {
    try {
      // get the details of the company from the request body
      const { name, location, description } = req.body;
      // check if the company already exists
      const company = await Company.findOne({ name });
      // if the company exists, return an error message
      if (company)
        return res.status(400).json({ message: "Company already exists" });
      // create a new company
      const newCompany = new Company({ name, location, description });
      // save the company
      await newCompany.save();
      // return a success message
      res.status(201).json({ message: "Company created successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  updateCompany: async (req, res) => {
    try {
      // get the details of the company from the request body
      const { name, location } = req.body;
      const { id } = req.params;
      // check if the company exists
      const company = await Company.findById(id);
      // if the company does not exist, return an error message
      if (!company)
        return res.status(400).json({ message: "Company does not exist" });
      // update the company
      await Company.findByIdAndUpdate(id, { name, location });
      // return a success message
      res.status(200).json({ message: "Company updated successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  deleteCompany: async (req, res) => {
    try {
      // get the id from the request params
      const { id } = req.params;
      // check if the company exists
      const company = await Company.findById(id);
      // if the company does not exist, return an error message
      if (!company)
        return res.status(400).json({ message: "Company does not exist" });
      // delete the company
      await Company.findByIdAndDelete(id);
      // return a success message
      res.status(200).json({ message: "Company deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  assignRecruiter: async (req, res) => {
    try {
      // Get the IDs of the company and recruiter from the request params
      const { companyId, recruiterId } = req.params;

      // Check if the company exists
      const company = await Company.findById(companyId);
      if (!company) {
        return res.status(400).json({ message: "Company does not exist" });
      }

      // Check if the recruiter exists
      const recruiter = await User.findById(recruiterId);
      if (!recruiter) {
        return res.status(400).json({ message: "Recruiter does not exist" });
      }

      // Assign the recruiter to the company
      company.recruiters.push(recruiterId);
      await company.save();

      // Return a success message
      res.status(200).json({ message: "Recruiter assigned successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  removeRecruiter: async (req, res) => {
    try {
      // Get the IDs of the company and recruiter from the request params
      const { companyId, recruiterId } = req.params;

      // Check if the company exists
      const company = await Company.findById(companyId);
      if (!company) {
        return res.status(400).json({ message: "Company does not exist" });
      }

      // Check if the recruiter exists in the company's recruiters array
      const recruiterIndex = company.recruiters.indexOf(recruiterId);
      if (recruiterIndex === -1) {
        return res
          .status(400)
          .json({ message: "Recruiter is not assigned to this company" });
      }

      // Remove the recruiter from the company's recruiters array
      company.recruiters.splice(recruiterIndex, 1);
      await company.save();

      // Return a success message
      res.status(200).json({ message: "Recruiter removed successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createJob: async (req, res) => {
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
  },
};

module.exports = adminController;

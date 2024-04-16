import studentsModel from "../models/studentsModel.js";

/**
 * REQ: INPUT
 * RES: OUTPUT
 * METHOD: POST
 * PATH: /create stduent
 */

export const createStudent = async(req, res) => {
    try{
        const { 
                StudentNo, 
                StudentName, 
                StudentDep,
                StudentYear,
                StudentPhone 
            } = req.body;

        /** create new student data  */
        const newStudent = new studentsModel({
            StudentNo,
            StudentName,
            StudentDep,
            StudentYear,
            StudentPhone
        })
        await newStudent.save()
            return res.status(200).json({
                message: "Students data created succussfully...",
                data: newStudent
            });
    }
    catch(error){
        return res.status(500).json({
            message: "Internal Server Error!!!",
            error: error.message
        });
    }
}

/**
 * REQ: INPUT
 * RES: OUTPUT
 * METHOD: GET
 * PATH: /getAllStudents 
 */

export const getAllStudents = async(req, res) => {
    try{
        const getAllData = await studentsModel.find();
        if(getAllData){
            return res.status(200).json({
                message: "Atlas, Data fetched successfully",
                data: getAllData
            });
        }
        else{
            return res.status(200).json({
                message: "Couldn't fetch the data",
                data: getAllData
            });
        }
    }
    catch(error){
        return res.status(500).json({
            message: "Internal server Error",
            error: error.message
        });
    }
}

/**
 * REQ: INPUT
 * RES: OUTPUT
 * METHOD: GET
 * PATH: /geByIdStudents
 */
export const getByIdStudent = async(req, res) => {
    try{
        const {id} = req.params;
        const getById = await studentsModel.findById(id);
        if(getById){
            return res.status(200).json({
                message: "Atlas data fetched successfully",
                data: getById
            });
        }
        else{
            return res.status(400).json({
                message: "Atlas, Couldn't find the data!!!"
            });
        }
    }
    catch(error){
        return res.status(500).json({
            message: "Internal server Error!!"
        });
    }
}

/**
 * REQ: INPUT
 * RES: OUTPUT
 * METHOD: PUT
 * PATH: /updateByIdStudent 
 */

export const updateStudents = async(req, res) => {
    try{
        const {id} = req.params;
        const updateByIdEmp = await studentsModel.findByIdAndUpdate(id,req.body,{new : true});
        if(updateByIdEmp){
            return res.status(200).json({
                message: "Atlas, data updated successfully",
                data: updateByIdEmp 
            });
        }
        else{
            return res.status(404).json({
                message: "Atlas, couldn't find the data",
                data: updateByIdEmp
            });
        }
    }
    catch(error){
        return res.status(500).json({
            message: "Internal server Error!!!",
            error: error.message
        });
    }
}

/**
 * REQ: INPUT
 * RES: OUTPUT
 * METHOD: DELETE
 * PATH: /deleteStudent 
 */

export const deleteStudents = async(req, res) => {
    try{
        const {id} = req.params;
        const deleteByIdEmp = await studentsModel.findByIdAndDelete(id);
        if(deleteByIdEmp){
            return res.status(200).json({
                message: "Atlas, Data deleted successfully!!",
                data: deleteByIdEmp
            });
        }
        else{
            return res.status(404).json({
                message: "Atlas, couldn't find the data!!!",
                data: deleteByIdEmp
            });
        }
    }
    catch(error){
        return res.status(500).json({
            message: "Internal server Error!!",
            error: error.message
        });
    }
}


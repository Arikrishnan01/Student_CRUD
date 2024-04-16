import  mongoose  from "mongoose";

const StudentsSchema = new mongoose.Schema({
  
    StudentNo:{
        type: String,
        required: true
    },
    StudentName:{
        type: String,
        required: true
    },
    StudentDep:{
        type: String,
        required: true
    },
    StudentYear:{
        type: String,
        required: true
    },
    StudentPhone:{
        type: String,
        required: true
    },
});

export default mongoose.model('Students', StudentsSchema);
import axios from "axios";

export const GLOBAL_URL = "http://localhost:5000";

/** auth api */
export async function userSignUp(data){
    return axios.post(`${GLOBAL_URL}/users/register`, data)
}
export async function userSignIn(data){
    return axios.post(`${GLOBAL_URL}/users/login`, data)
}

/**get students data */
export async function getAllData() {
    return axios.get(`${GLOBAL_URL}/students/getAllStudents`);
}

/** create new student */
export async function createStu(data){
    return axios.post(`${GLOBAL_URL}/students/create`,data);
}
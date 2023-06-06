const api =  process.env.NODE_ENV === "development" ? "/api" : "https://46-maktab-api.vercel.app/api";
export const authUrl = `${api}/auth/`;
export const imageUrl = `${api}/image/`;
export const userUrl = `${api}/user/`;
export const employeeUrl = `${api}/employee/`;
export const studentUrl = `${api}/student/`;
export const postUrl = `${api}/post/`;
export const appealUrl = `${api}/appeal/`;


export const token = localStorage.getItem("admin_token")

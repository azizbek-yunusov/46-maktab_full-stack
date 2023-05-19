const api =  process.env.NODE_ENV === "development" ? "/api" : "https://xurmo-api.vercel.app/api";
export const authUrl = `${api}/auth/`;
export const imageUrl = `${api}/image/`;
export const userUrl = `${api}/image/`;
export const employeeUrl = `${api}/employee/`;
export const studentUrl = `${api}/student/`;
export const postUrl = `${api}/post/`;


export const token = localStorage.getItem("admin_token")

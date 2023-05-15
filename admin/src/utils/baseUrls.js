const api =  process.env.NODE_ENV === "development" ? "/api" : "https://xurmo-api.vercel.app/api";
export const authUrl = `${api}/auth/`;
export const imageUrl = `${api}/image/`;
export const userUrl = `${api}/image/`;


export const token = localStorage.getItem("admin_token")

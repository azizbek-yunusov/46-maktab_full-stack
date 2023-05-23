const api =
  process.env.NODE_ENV === "development"
    ? "/api"
    : "https://xurmo-api.vercel.app/api";
export const authUrl = `${api}/auth/`;
export const userUrl = `${api}/user/`;
export const imageUrl = `${api}/image/`;
export const postUrl = `${api}/post/`;
export const appealUrl = `${api}/appeal/`;

export const token = localStorage.getItem("refresh_token") || false;

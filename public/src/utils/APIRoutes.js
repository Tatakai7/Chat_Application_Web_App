// Use `REACT_APP_API_URL` in production (set in Netlify or hosting provider).
// Fallback to localhost for local development.
// Require explicit backend URL in production to avoid accidental localhost usage.
const envUrl = process.env.REACT_APP_API_URL;
if (process.env.NODE_ENV === "production" && !envUrl) {
	throw new Error(
		"REACT_APP_API_URL must be set in production and point to your backend base URL (e.g. https://api.example.com)"
	);
}

// Development fallback (local dev) uses localhost. In production `envUrl` is required.
export const host = envUrl || (process.env.NODE_ENV === "development" ? "http://localhost:5000" : (typeof window !== "undefined" ? window.location.origin : ""));
export const loginRoute = `${host}/api/auth/login`;
export const registerRoute = `${host}/api/auth/register`;
export const logoutRoute = `${host}/api/auth/logout`;
export const allUsersRoute = `${host}/api/auth/allusers`;
export const sendMessageRoute = `${host}/api/messages/addmsg`;
export const recieveMessageRoute = `${host}/api/messages/getmsg`;
export const setAvatarRoute = `${host}/api/auth/setavatar`;

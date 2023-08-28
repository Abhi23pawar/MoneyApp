// authUtils.js
export function isUserLoggedIn() {
    // Checking if the user is logged in using localStorage method
    const user = localStorage.getItem("user");
    return user !== null;
  }
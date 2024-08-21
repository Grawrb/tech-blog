// Login page logout button event listener
const logout = async (event) => {
    event.preventDefault();
    // Fetch request to logout the user using the POST method
    const response = await fetch("/api/users/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    // If response is okay, redirect to login page
    if (response.ok) {
      document.location.replace("/login");
    } else {
      alert(response.statusText);
    }
  };
  
  // Add event listener to logout button. Call logout function when button clicked
  document.querySelector("#logout").addEventListener("click", logout);
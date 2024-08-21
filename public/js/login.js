// Select the login-form element.
document
  .querySelector("#login-form")
  .addEventListener("submit", async (event) => {
    // Prevent default form submission action
    event.preventDefault();
  
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();
    // Check if email and password variables have values
    if (email && password) {
      try {
        const response = await fetch("/api/users/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
  
        if (response.ok) {
          document.location.replace("/dashboard");
        } else {
          alert("Failed to sign up");
        }
      } catch (err) {s
        console.error(err);
      }
    }
  });
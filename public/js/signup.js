// Select the signup-form element.
document
  .querySelector("#signup-form")
  .addEventListener("submit", async (event) => {
    // Prevent default form submission
    event.preventDefault();

    const email = document.querySelector("#email").value.trim();
    const users_name = document.querySelector("#users_name").value.trim();
    const password = document.querySelector("#password").value.trim();
    // Checks if email, users_name, and password variables have values
    if (email && users_name && password) {
      try {
        const response = await fetch("/api/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, users_name, password }),
        });
        if (response.ok) {
          document.location.replace("/dashboard");
        } else {
          alert("Failed to sign up");
        }
      } catch (err) {
        console.error(err);
      }
    }
  });
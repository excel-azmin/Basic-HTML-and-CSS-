const listItem = document.getElementById("list-item");
listItem.style = "display: none;"; 
const loginSection = document.getElementById("login-section");

const [correctEmail, correctPassword] = [ "excel.azmin@gmail.com", "password123" ];

let userEmail, userPassword;

function handleLogin() {
    console.log("Login button clicked");
    const userEmail = document.getElementById("email").value;
    if (!userEmail) {
        const alertContainer = document.getElementById("alert-container");
        // const alertHtml = document.createElement("div");
        alertContainer.innerHTML = `
        <div role="alert" class="alert alert-error transition duration-2000 ease-in-out w-1/4 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Error! Failed to login.</span>
        </div>
        `

        setTimeout( () => {
            alertContainer.innerHTML = ""; // Clear the alert after 1 second
        },2000);
    }
    const userPassword = document.getElementById("password").value;
    // if (!password) {
    //     console.log("Password is required");
    //     alert("Password is required");
    //     return;
    // }   
    // Simulate a login process
    
    if (userEmail && userPassword) {

        console.log("Email:", correctEmail, "Password:", correctPassword);
        if (userEmail === correctEmail && userPassword === correctPassword) {

        const progressContainer = document.getElementById("alert-container");
        const progressBar = document.createElement("div");
        progressBar.className = "skeleton h-32 w-32 mx-auto";
        progressContainer.appendChild(progressBar);

        // Show login success message
        const alertContainer = document.getElementById("alert-container");
        alertContainer.innerHTML = `
        <div role="alert" class="alert alert-success transition duration-2000 ease-in-out w-1/4 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Login successful!</span>
        </div>
        `;  

        // Redirect to the dashboard or another page
        setTimeout(() => {
            progressBar.remove();
            alertContainer.innerHTML = ""; // Clear the alert after 1 second
            loginSection.style = "display: none;";         
            listItem.style = "display: block;"; 
        }, 2000);
     }else {
        const alertContainer = document.getElementById("alert-container");
        alertContainer.innerHTML = `
        <div role="alert" class="alert alert-error transition duration-2000 ease-in-out w-1/4 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Error! Invalid email or password.</span>
        </div>
        `

        setTimeout( () => {
            alertContainer.innerHTML = ""; // Clear the alert after 1 second
        },2000);
     }
        
        
    } 
    else {
        console.log("Please enter both email and password.");
        // alert("Please enter both email and password.");
    }   
}









user = document.getElementById("user");
user.addEventListener("click", function() {
    console.log("Users link clicked");
    menu = document.getElementById("menu");
    // Create a new div element
    const newDiv = document.createElement("div");
    
    // Set the content of the new div
    newDiv.innerHTML = "<h1 class='text-2xl font-bold'>Users</h1><p class='mt-4'>This is the users page.</p>";
    
    // Append the new div to the body or a specific section
    document.body.appendChild(newDiv);
    menu.appendChild(newDiv);
});


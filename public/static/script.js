const navbar = document.querySelector("#nav-bar");
const navclose = document.querySelector("#nav-close");
const navToggleLinks = document.querySelector(".nav-toggle-links");
const toggleLinks = document.querySelectorAll(".toggle-links li a");

navbar.addEventListener('click', ()=> {
    navbar.style.display = "none";
    navclose.style.display = "block";
    navToggleLinks.style.display = "flex";
})

navclose.addEventListener('click', ()=> {
    navbar.style.display = "block";
    navclose.style.display = "none";
    navToggleLinks.style.display = "none";
});

toggleLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.style.display = "block";
        navclose.style.display = "none";
        navToggleLinks.style.display = "none";
    });
});

function opentab(tabname) {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    for (let tablink of tablinks) {  
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {  
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function sendEmail() {
    const userEmail = document.getElementById("email").value; 
    
    console.log("Attempting to send email...");
    
    Email.send({
        SecureToken: "ea4e9e0c-97b9-4894-9440-8acf477a4e5d",
        To: "21bca049@sxca.edu.in", 
        From: userEmail, 
        Subject: "New Contact Form Enquiry",
        Body: "Name: " + document.getElementById("name").value 
            + "<br>Email: " + userEmail 
            + "<br>Phone: " + document.getElementById("phone").value 
            + "<br>Message: " + document.getElementById("msg").value
    }).then(
        message => {
            console.log("Email sent successfully: ", message);
            alert("Message sent successfully");
        }
    ).catch(
        error => {
            console.error("Failed to send message: ", error);
            alert("Failed to send message: " + error);
            console.error("Error details:", error);
        }
    );
}

//  smtp password : 29059BBC506D1C09CD616AA6737164DEF93E 
// security token :  ea4e9e0c-97b9-4894-9440-8acf477a4e5d
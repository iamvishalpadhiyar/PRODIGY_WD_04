require('dotenv').config();

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
    Email.send({
        SecureToken : process.env.SMTP_TOKEN,
        To : "21bca049@sxca.edu.in",
        From : "your-verified-email@example.com", 
        Subject : "New Contact Form Enquiry",
        Body : "Name : " + document.getElementById("name").value 
            + "<br> Email : " + document.getElementById("email").value 
            + "<br> Phone : " + document.getElementById("phone").value 
            + "<br> Message : " + document.getElementById("msg").value
    }).then(
        message => alert("Message sent successfully")
    ).catch(
        error => alert("Failed to send message: " + error)
    );
}

//  smtp password : 29059BBC506D1C09CD616AA6737164DEF93E 
// security token :  ea4e9e0c-97b9-4894-9440-8acf477a4e5d
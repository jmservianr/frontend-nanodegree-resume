/*
This is empty on purpose! Your code to build the resume will go here.
 */

 //$("#main").append ("Jose Maria");

var awesomeThoughts;

awesomeThoughts="I am Jose and I am AWESOME";

var funThoughts=awesomeThoughts.replace("AWESOME","FUN");
$("#main").append (funThoughts);



//esto es un comentaris

var skills = ["Perseverante","Curioso"];

// creando un objeto

var bio = {
    "name":"Jose Maria",
    "role":"Ingeniero Telecomunicaciones",
    "contactInfo":"Calle de las Americas",
    "pictureURL":"images/miPicture.jpg",
    "welcomeMessage":"Encantado de que estes conmigo.",
    "skills":skills
};

var formattedName, formattedRole, formattedContact, formattedSkills, formattedWelcome;

formattedName=HTMLheaderName.replace("%data%",bio.name);
formattedRole=HTMLheaderRole.replace("%data%",bio.role);
formattedContact=HTMLcontactGeneric.replace("%contact%","Contacto:").replace("%data%",bio.contactInfo);
formattedSkills=HTMLskills.replace("%data%",bio.skills.toString());
formattedWelcome=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

$("#header").append(formattedName);
$("#header").append(formattedRole);

$("#header").append(formattedWelcome);

$("#header").append(formattedContact);
$("#header").append(HTMLskillsStart);
$("#header").append(formattedSkills);


//$("#header").append(formattedRole);





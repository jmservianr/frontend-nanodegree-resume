/*
This is empty on purpose! Your code to build the resume will go here.
 */

 //$("#main").append ("Jose Maria");

var awesomeThoughts;

awesomeThoughts="I am Jose and I am AWESOME";

var funThoughts=awesomeThoughts.replace("AWESOME","FUN");
$("#main").append (funThoughts);

var formattedName, formattedRole;

formattedName=HTMLheaderName.replace("%data%","Jose Maria");
formattedRole=HTMLheaderRole.replace("%data%","Ingeniero Telecomunicaciones");


//$("#header").append(formattedRole);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
console.log("hola");
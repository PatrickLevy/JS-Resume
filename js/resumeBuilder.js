//Bio Contacts Object
var bio = {
	"name" : "Patrick Levy",
	"role" : "Science Educator and Student - Computer Science",
	"contacts" : {
		"mobile": "612-501-7491",
		"email" : "mrpatricklevy@gmail.com",
		"github" : "cecil1896",
		"twitter" : "N/A",
		"location" : "Minneapolis"
	},
	"welcomeMsg" : "Welcome!  I have been teaching chemistry and physics in Saint Paul for several years.  I am currently working on a computer science degree through Oregon State University.  When I graduate I plan to work as a software developer for an educational technology company.  I am currently seeking an internship for summer 2015.",
	"skills" : ["Science Education", "Programming", "C/C++", "Javascript", "HTML", "CSS", "Java"],
	"bioPic" : "images/me.jpg"
};


//JSON Work Object:
var work = {
	"jobs": [
	{
		"employer": "Saint Paul Public Schools",
		"title": "High School Science Teacher",
		"dates": "September 2003 - Present",
		"location": "Saint Paul, MN",
		"description": "9-12 Chemistry and Physics Teacher, FIRST Robotics Coach"
	},
	{
		"employer": "Osmonics",
		"title": "Analytical Chemist",
		"dates": "September 1999 - May 2002",
		"location": "Minnetonka, MN",
		"description": "Provide analytical chemistry support to research, manufacturing, and sales using HPLC, GC, FTIR, UV/Vis and wet chem methods."
	},
	//{
	//	"employer": "Pace Analytical",
	//	"title": "Laboratory Technician",
	//	"dates": "September 1998 - May 1999",
	//	"location": "Minneapolis, MN",
	//	"description": "Perform air, water, and soil sample analysis using GC and GC/MS"
	//},
	{
		"employer": "University of Minnesota",
		"title": "Laboratory Teaching Assistant and Undergraduate Researcher.",
		"dates": "1997 - 1998",
		"location": "Minneapolis, MN",
		"description": "Teach and supervise the laboratory component of a General Chemistry course.  Perform research on the synthesis of novel organic molecules."	
	}
	//{
	//	"employer": "University of Minnesota",
	//	"title": "Undergraduate Researcher",
	//	"dates": "1997 - 1998",
	//	"location": "Minneapolis, MN",
	//	"description": "Synthesize and characterize novel organic molecules that are anticipated to have anti tumor and anti HIV activity"
	//}
	]
}

//JSON Education Object:
var education = {
	"schools": [
	{
		"name": "Oregon State University - School of Electrical Engineering and Computer Science",
		"location": "Corvallis, Oregon",
		"dates": "2014 - 2016 (anticipated)",
		"degree": "BS",
		"major": "Computer Science"
	},
	{
		"name": "University of Minnesota - College of Education and Human Development",
		"location":  "Minneapolis, Minnesota",
		"dates": "2002 - 2013",
		"degree": "M.Ed",
		"major": "Physical Science Education"
	},
	{
		"name": "University of Minnesota - College of Science and Engineering",
		"location": "Minneapolis, Minnesota",
		"dates": "1995 - 1999",
		"degree": "BS",
		"major": "Chemistry"
	}
	
	
  ]}

//JSON Online Courses Object
var onlineCourses = {
	"courses": [
	{
		"title": "Javascript Basics",
		"school": "Udacity",
		"dates": "2014",
		"url": " "
	},
	{
		"title": "HTML and CSS",
		"school": "Udacity",
		"dates": "2014",
		"url": " "
	},
	{
		"title": "Introduction to Java",
		"school": "Udacity",
		"dates": "2014",
		"url": " "
	}
	]
};

//Projects Object
var projects = {
	
	"programming": [
	{
		"title": "StartupEDU",
		"dates": "May 2014",
		"description": "I worked on a team led by Julia Winter to develop an idea for a chemistry video game. The concept behind Cyclo6 is to teach reaction mechanisms by allowing students to manipulate molecular interactions using a touchscreen.  Students 'play' with molecules to discover which parts are reactive with eachother.    Our team took second place after judging!  I provided feedback to the programmer on our team on how the interface should look.  I also assisted in producing a presentation that outlined the rationale behind the game.  Julia Winter has gone on to found the educational technology company OChemPrep.",
		"image": "images/cyclo6.jpg" 
	},
	{
		"title": "Website Design",
		"dates": "January 2015",
		"description": "I am developing a website for a community acupuncturist.  The website will integrate with Zenn Planner to allow patients to view appointment availability and schedule new appointments.  I will also be providing support to the owner of the website to allow her to make updates on her own.",
		"image": "images/lisaWeb.jpg"
	},
	{
		"title": "Ionic Bonding Practice Site",
		"dates": "January 2015",
		"description": "I am working on a simple site to allow chemistry students to practice writing chemical formulas for ionic compounds.  The site will randomly select positive and negative ions and require the student to determine the proper subscripts for the correct chemical formula.",
		"image": "images/ionicBondCap.jpg"
	}

	]
};


projects.display = function() {
	for (project in projects.programming){
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.programming[project].title);
		var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.programming[project].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.programming[project].description);
		var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.programming[project].image);
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDate);
		$(".project-entry:last").append(formattedProjectDescription);
		$(".project-entry:last").append(formattedProjectImage);
		
	}
}


//Function to Display schools from education object
function displayEducation(){
	for (school in education.schools){
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolNameAndDegree = formattedSchoolName + formattedSchoolDegree;
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(formattedSchoolNameAndDegree);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolMajor);
	}
}


//Function to display on line courses
function displayOnlineCourses(){
	$("#education").append(HTMLonlineClasses);
	$("#education").append(HTMLonlineStart);
	for (course in onlineCourses.courses){
		var titleAndSchool = onlineCourses.courses[course].title + " - " + onlineCourses.courses[course].school;
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", titleAndSchool);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourses.courses[course].dates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", onlineCourses.courses[course].url);

		$(".online-entry:last").append(formattedOnlineTitle);
		$(".online-entry:last").append(formattedOnlineDates);
		$(".online-entry:last").append(formattedOnlineURL);
	}
}



//Definition of displayWork() function
function displayWork(){
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedWorkDates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedWorkLocation);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedWorkDescription);
	}
}



//Display Name and Contact Info
function displayNameAndContacts(){
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
//$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGithub);
//$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedLocation);
}

//Function Declaration to display skills
function displaySkills(){
if (bio.skills.length != 0){
	$("#header").append(HTMLskillsStart);
	for (skill in bio.skills){
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkills);
	}
}
}


//Call function to display Name and Contacts
displayNameAndContacts();

//call display projects function
projects.display();

//Call function to display education
displayEducation();

//Call function to display skills
displaySkills();

//Call function to display online courses
displayOnlineCourses();

//Call function displayWork()
displayWork();

//Internationalize Button
$("#main").prepend(internationalizeButton);

//Function for Internationalize Button
function inName(){
	 
	 var fullName = bio.name;
	 console.log(fullName);
	 var splitName = fullName.split(" ");
	 console.log(splitName[0]);
	 splitName[1] =  splitName[1].toUpperCase();
	 console.log(splitName[1]);
	 fullName = splitName[0] + " " + splitName[1];
	 return fullName;
};

//display map
$("#mapDiv").append(googleMap);



//Test code for logging button clicks (not used for anything)
$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});


//*****************************************************************************
//alert("All done!");

//var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.employer);
//var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.title);
//var formattedWorkDates = HTMLworkDates.replace("%data%", work.dates);
//var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.location);
//var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.description);

//var work = {};
//work.employer = "Saint Paul Public Schools";
//work.title = "High School Science Teacher";
//work.dates = "September 2003 - Present";
//work.location = "Saint Paul, MN";
//work.description = "9-12 Chemistry and Physics Teacher, FIRST Robotics Coach";

//var education = {};
//education["schoolName"] = "Oregon State University - School of Electrical Engineering and Computer Science";
//education["schoolDegree"] = "Bachelor of Science";
//education["schoolDates"] = "June 2014 - August 2016";
//education["schoolLocation"] = "Corvallis, Oregon";
//education["schoolMajor"] = "Computer Science";

//$("#main").append(bio.name);
//$("#main").append(bio.role);
//$("#main").append(bio.contact);
//$("#main").append(bio.picture);
//$("#main").append(bio.welcome);
//$("#main").append(bio.skills);


//$("#workExperience").append(HTMLworkStart);
//$("#workExperience").append(formattedWorkTitle);
//$("#workExperience").append(formattedWorkEmployer);
//$("#workExperience").append(formattedWorkDescription);
//$("#workExperience").append(formattedWorkLocation);
//$("#workExperience").append(formattedWorkDates);



//This is stuff from early in the lessons:

//$("#main").append("Patrick Levy");

//var name = "Patrick Levy";
//var role = "Web Developer";

//var skills = ["awesomeness", "programming", "teaching", "js"];


//var awesomeThoughts = "I am Patrick and I am AWESOME!";
//console.log(awesomeThoughts);

//var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
//console.log(funThoughts);
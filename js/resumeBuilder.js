//Bio Contacts Object
var bio = {
	"name" : "Patrick Levy",
	"role" : "Science Educator and Student - Computer Science",
	"contacts" : {
		"mobile": "612-501-7491",
		"email" : "mrpatricklevy@gmail.com",
		"github" : "PatrickLevy",
		"twitter" : "N/A",
		"location" : "Minneapolis"
	},
	"welcomeMsg" : "Welcome!  I have been teaching chemistry and physics in Saint Paul for several years.  I am currently working on a computer science degree through Oregon State University.  Upon graduation I plan to work as a software developer and am especially interested in writing web applications.",
	"skills" : ["Science Education", "Programming", "JavaScript", "Meteor", "PHP", "MySQL", "HTML", "CSS", "C/C++", "Java"],
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
	
	{
		"employer": "University of Minnesota",
		"title": "Laboratory Teaching Assistant and Undergraduate Researcher.",
		"dates": "1997 - 1998",
		"location": "Minneapolis, MN",
		"description": "Teach and supervise the laboratory component of a General Chemistry course.  Perform research on the synthesis of novel organic molecules."	
	}
	
	
]};

//JSON Education Object:
var education = {
	"schools": [
	{
		"name": "Oregon State University - School of Electrical Engineering and Computer Science",
		"location": "Corvallis, Oregon",
		"dates": "2014 - 2016 (anticipated)",
		"degree": "BS (anticipated)",
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
		"major": "Chemistry, Minor: Physics"
	}
	
	]
};

// JSON Online Courses Object
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
		"title": "School Announcements App",
		"dates": "Spring 2015",
		"description": "I am developing a web app to assist with communcation between students, staff, and parents involved in extracurricular school activities.  Students can log in, subscribe to groups to view public announcements, and request membership to groups to view and write private announcements.  This was my first time writing an application using the Meteor.JS framework and I am very excited to continue working with Meteor! Log in with username: student, password: student to try it out!",
		"image": "images/announcementsCap.png",
		"url": "http://announcements.meteor.com",
		"github": "https://github.com/PatrickLevy/announcements"
	},
	{
		"title": "Multiple Choice Test Center",
		"dates": "Spring 2015",
		"description": "I have been working on a site for teachers to administor tests and quizzes.  The application allows a teacher to log in to generate assessements or view student results.  Students can log in to take assessments.  The tests are immediately graded and the student can see immediate feedback on their performance.  I would like to add the ability to incorporate numerical answers that are graded using a % based tolerance to allow for rounding differences.  The front end uses HTML, JavaScript, and CSS.  The backend was written in PHP with a MySQLi database.  Try logging in with username: student, password: student to try out a student account.  Try logging in with username: teacher, password: teacher to try out a teacher account.",
		"image": "images/testCenterCap.png",
		"url": "http://web.engr.oregonstate.edu/~levyp/cs290WebDev/finalProject/login.php",
		"github":  "https://github.com/PatrickLevy/finalProject"
	},
	{
		"title": "Ionic Bonding Practice App",
		"dates": "January 2015",
		"description": "I am working on a simple site to allow chemistry students to practice writing chemical formulas for ionic compounds.  The site will randomly select positive and negative ions and require the student to determine the proper subscripts for the correct chemical formula.",
		"image": "images/ionicBondCap.png",
		"url": "http://web.engr.oregonstate.edu/~levyp/ionicBonding/",
		"github": "https://github.com/PatrickLevy/IonicBonding"
	}

	
	]
};

//Affiliations object
var affiliations = {
	"groups": [
	{
		"title": "JavaScriptMN Meetup",
		"dates": "Winter 2015 - Present",
		"description": "Meets once per month to discuss current topics in web development.",
		"url": "http://www.meetup.com/JavaScriptMN/"
	},
	{
		"title": "Educelerate Meetup",
		"dates": "Spring 2014 - Present",
		"description": "Meets periodically to discuss the use of technology to enhance education.",
		"url": "http://www.meetup.com/EducelerateNorth/"
	},
	{
		"title": "StartupEDU",
		"dates": "Spring 2014",
		"description": "I worked on a team led by Julia Winter to develop an idea for a chemistry video game. The concept behind Cyclo6 is to teach chemical reaction mechanisms by allowing students to manipulate molecular interactions using a touchscreen. Our team took second place after judging! I provided feedback to the programmer on our team on how the interface should look as well as assisted in producing a presentation that outlined the rationale behind the game.  Julia Winter has gone on to found the educational technology company OChemPrep.",
		"url": "http://startupweekend.org/about/"
	}
	]

};


projects.display = function() {
	for (project in projects.programming){
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.programming[project].title);
		formattedProjectTitle = formattedProjectTitle.replace("%url%", projects.programming[project].url);
		var formattedProjectGitHub = HTMLprojectGitHub.replace("%data%", projects.programming[project].github);
		var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.programming[project].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.programming[project].description);
		var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.programming[project].image);
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDate);
		$(".project-entry:last").append(formattedProjectDescription);
		$(".project-entry:last").append(formattedProjectGitHub);
		$(".project-entry:last").append(formattedProjectImage);
		
	}
}

affiliations.display = function() {
	for (affiliation in affiliations.groups){
		var formattedAffiliationTitle = HTMLaffiliationTitle.replace("%data%", affiliations.groups[affiliation].title);
		formattedAffiliationTitle = formattedAffiliationTitle.replace("%url%", affiliations.groups[affiliation].url);
		var formattedAffiliationDate = HTMLaffiliationDates.replace("%data%", affiliations.groups[affiliation].dates);
		var formattedAffiliationDescription = HTMLaffiliationDescription.replace("%data%", affiliations.groups[affiliation].description);
		$("#affiliations").append(HTMLaffiliationStart);
		$(".affiliation-entry:last").append(formattedAffiliationTitle);
		$(".affiliation-entry:last").append(formattedAffiliationDate);
		$(".affiliation-entry:last").append(formattedAffiliationDescription);
		
		
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

//call to display affiliations function
affiliations.display();

//Call function to display education
displayEducation();

//Call function to display skills
displaySkills();

//Call function to display online courses
//displayOnlineCourses();

//Call function displayWork()
displayWork();


var bio = {
	"name": "Macy McGahee",
	"role": "Front-End Web Developer",
	"contacts": {
		"mobile": "(913) 982-****",
		"email": "mcgahee.macy@gmail.com",
		"github": "macymay",
		//"twitter": "none",
		"location": "Kansas City"
	},
	"welcomeMessage": "“The size of your success is measured by the strength of your desire, the size of your dream, and how you handle disappointment along the way.” —Robert Kiyosaki",
	"skills": [
		"HTML", " CSS", " JavaScript", " jQuery"
	],
	"biopic": "images/me.png"
};

var education = {
	"schools": [{
			"name": "Udacity",
			"location": "Online",
			"degree": "Front-End Web Development Nanodegree",
			"majors": ["major1", "major2"],
			"dates": "MAR 2017 - SEPT 2017",
			"url": "https://www.udacity.com/nanodegree"
		},
		{
			"name": "Johnson County Community College",
			"location": "Overland Park, KS",
			"degree": "AAS",
			"majors": "Fashion Merchandising",
			"dates": "JUN 2013 - DEC 2015",
			"url": "http://jccc.org"
		},
    ]
	/*
	"onlineCourses": [{
		"title": "Front End Web Development",
		"school": "Udacity",
		"dates": "2017",
		"url": "http://www.udacity.com/course/ud804"
	}]
	*/
};

var work = {
	"jobs": [{
			"employer": "Scoobie",
			"title": "Visual Merchandiser",
			"location": "Kansas City Area",
			"dates": "September 2016 - February 2017",
			"description": "Delivered and merchandised women's clothing and accessories for a both Leawood and Kansas City locations. Delivered merchandise to the customer's houses as well as took photos of new products for social media."
		},
		{
			"employer": "Altar'd State",
			"title": "Assistant Manager/Visual Merchandising Captain",
			"location": "Leawood, Kansas",
			"dates": "January 2016 - May 2016",
			"description": "Lead a Visual Merchandising Team of 5 girls. Created store merchandise layout for quarterly floor sets and daily window and store display up-keep."
		},
		{
			"employer": "The Buckle",
			"title": "Visual Merchandiser",
			"location": "Overland Park, Kansas",
			"dates": "March 2013 - December 2014",
			"description": "Strategically planned and presented women's, men's and children's accessories and apparel in a manner that would best show case each individual item as well as the display of items as a whole."
		}
	]
};

var projects = {
	"projects": [{
		"title": "Basic Porfolio Project",
		"dates": "2017",
		"description": "This was my first project.",
		"images": [
			"images/197x148.gif",
			"images/197x148.gif"
		]
	},
	{
		"title": "Resume Project",
		"dates": "2017",
		"description": "This is actually the project for the site you are visiting right now.",
		"images": [
			"images/197x148.gif",
			"images/197x148.gif"
		]
	},
	{
		"title": "Classic Arcade Game Project",
		"dates": "2017",
		"description": "This was my third project.",
		"images": [
			"images/197x148.gif",
			"images/197x148.gif"
		]
	},
	{
		"title": "Webpage Optimization Project",
		"dates": "2017",
		"description": "This was my fourth project.",
		"images": [
			"images/197x148.gif",
			"images/197x148.gif"
		]
	},
	{
		"title": "Neighborhood Map Project",
		"dates": "2017",
		"description": "This was my fifth project.",
		"images": [
			"images/197x148.gif",
			"images/197x148.gif"
		]
	},
	{
		"title": "Feedreader Testing Project",
		"dates": "2017",
		"description": "This was my last project.",
		"images": [
			"images/197x148.gif",
			"images/197x148.gif"
		]
	}
 ]
};

bio.display = function() {

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedHeader = formattedName + formattedRole;
	$("#header").prepend(formattedHeader);



	var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedPic);

	var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedMsg);

	var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var email = HTMLemail.replace("%data%", bio.contacts.email);
	//var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var github = HTMLgithub.replace("%data%", bio.contacts.github);
	//var blog = HTMLblog.replace("%data%", bio.contacts.blog);
	var location = HTMLlocation.replace("%data%", bio.contacts.location);
	var contactData = mobile + email /*+ twitter*/ + github /*+ blog*/ + location;

	$("#topContacts, #footerContacts").append(contactData);

	if(bio.skills.length > 0) {

		$("#header").append(HTMLskillsStart);

	}

	bio.skills.forEach(function(skill) {

		var formattedSkill = HTMLskills.replace("%data%", skill);
		$("#skills").append(formattedSkill);

	});
};

bio.display();

work.display = function(){

	work.jobs.forEach(function(job){

		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", job.dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
		$(".work-entry:last").append(formattedDescription);

	});

};

work.display();

education.display = function(){

	education.schools.forEach(function(school) {

		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", school.name);
		$(".education-entry:last").append(formattedName);
		var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
		$(".education-entry:last").append(formattedDegree);
		var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
		$(".education-entry:last").append(formattedLocation);
		var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
		$(".education-entry:last").append(formattedMajor);
	});

	/*
	education.onlineCourses.forEach(function(classes) {

		$("#education").append(HTMLonlineClasses);

		var formattedTitle = HTMLonlineTitle.replace("%data%", classes.title);
		$(".education-entry:last").append(formattedTitle);
		var formattedSchool = HTMLonlineSchool.replace("%data%", classes.school);
		$(".education-entry:last").append(formattedSchool);
		var formattedDates = HTMLonlineDates.replace("%data%", classes.dates);
		$(".education-entry:last").append(formattedDates);
		var formattedURL = HTMLonlineURL.replace("%data%", classes.url);
		$(".education-entry:last").append(formattedURL);

	});
	*/

};

education.display();

projects.display = function(){

	projects.projects.forEach(function(project){

		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
		$(".project-entry:last").append(formattedDescription);

		projects.projects.forEach(function(images) {
			var formattedImage = HTMLprojectImage.replace("%data%", projects.images);
			$(".project-entry:last").append(formattedImage);
		});

	});

 };

 projects.display();

 // keeps track of clicks made on the site
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

// creates a button for internationalized name
function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() +
		name[0].slice(1).toLowerCase();

	return name[0] +" "+name[1];
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

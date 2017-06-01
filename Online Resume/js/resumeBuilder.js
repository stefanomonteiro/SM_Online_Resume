/*
This is empty on purpose! Your code to build the resume will go here.
 */



// bio

    // bio Object
var bio = {
    "name" : "Stefano Monteiro",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "506-8459-5555",
        "email": "ste_bm@hotmail.com",
        "github": "stefanomonteiro",
        "twitter": "@ste_bm",
        "location": "Costa Rica"
    },
    "welcomeMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet ornare ante, nec viverra quam. Curabitur fermentum lacus lacus, vel aliquet felis sodales sit amet. Mauris rutrum, nulla in dapibus malesuada, augue felis pretium est, iaculis aliquam ipsum ante et nibh. Vivamus leo mauris, tempus ac egestas et, eleifend eu turpis. Nulla non purus nec erat porta elementum. Curabitur non felis sit amet mauris eleifend aliquam. Integer sed diam felis. Nulla dignissim blandit nisl, porttitor ultricies augue tempus sed. Aliquam leo tellus, viverra eu mi a, imperdiet facilisis magna. Vestibulum eget nisl ac metus scelerisque facilisis. Integer eget enim eget ex porta dignissim ac in purus. Proin sem turpis, iaculis malesuada risus at, volutpat suscipit quam. Phasellus faucibus laoreet augue in varius. Suspendisse quis blandit diam, sed consequat neque. Donec vestibulum ornare odio sit amet consequat.",
    "skills": [
        "Programing", "HTML", "CSS", "JavaScript"
    ],
    "bioPic": "images/headshot.jpg"
}

    // bio DOM manipulation


bio.display = function(){

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        // bio.contact
        var mobile = bio.contacts.mobile;
        var formattedMobile = HTMLmobile.replace("%data%", mobile);
        var email = bio.contacts.email;
        var formattedEmail = HTMLemail.replace("%data%", email);
        var github = bio.contacts.github;
        var formattedGithub = HTMLgithub.replace("%data%", github);
        var twitter = bio.contacts.twitter;
        var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
        var location = bio.contacts.location;
        var formattedLocation = HTMLlocation.replace("%data%", location);

        var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

        $("#header").prepend(formattedName, formattedRole);
        $("#header").append("<div id='pic-message'></div>");
        $("#pic-message").append(formattedBioPic, formattedMessage);
        $("#pic-message").css("margin-bottom", 25).css("margin-top", 20);
        $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);

            //Skils
            if (bio.skills.length > 0){
                $("#header").append(HTMLskillsStart);

            for (i = 0; i < bio.skills.length; i ++){

                  var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
                  $("#skills").append(formattedSkills);
                }
            }
}
bio.display();


        // Changing Skills Class - So it displays horizontally

        $("#skills").toggleClass("flex-box flex-column");


//Education


    //Education Object

var education = {
    "schools": [{
            "name": "University of Wales",
            "location": "London",
            "degree": "MBA",
            "major": "Marketing",
            "dates": "2009-2010",
            "url": "http://www.wales.ac.uk/"
        },
        {
           "name": "Mackenzie University",
            "location": "Sao Paulo",
            "degree": "BA",
            "major": "Business",
            "dates": "2001-2006",
            "url": "http://portal.mackenzie.br/"
        }
    ],
    "onlineCourses": [{
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "date": "May 2017",
            "link": "www.udacity.com"
        },
        {
            "title": "Front End Web Development Certification",
            "school": "FreeCodeCamp",
            "date": "May 2017",
            "link": "www.freecodecamp.com"
        }

    ]
}

    // Education DOM Manipulation

education.display = function(){
    for ( var i = 0; i < education.schools.length; i ++) {

            $("#education").append(HTMLschoolStart);


        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[i].major);
        var formattedUrl = HTMLschoolURL.replace("%data%", education.schools[i].url);


        $(".education-entry:last").append(formattedschoolName + formattedDegree);
        $(".education-entry:last").append(formattedLocation, formattedDates, formattedMajors, formattedUrl);
    };

            $("#education").append(HTMLonlineClasses);


    for ( var i = 0; i < education.onlineCourses.length; i ++) {

            $("#education").append(HTMLschoolStart);

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
        var formattedOnlineLink = HTMLonlineURL.replace("%data%", education.onlineCourses[i].link);

        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnlineDate, formattedOnlineLink);

    };

}
education.display();

//Work

    //Work Object

var work = {
        "jobs":[
        {
            "employer": "Trissie.com",
            "title": "E-Commerce Director",
            "location": "Sao Paulo, Brazil",
            "dates": "2012",
            "description": "- Responsible for planning the layout and the follow up whilst the website´s development, also responsible for operational and administrative planning as well as the branding strategies;"
        },
         {
            "employer": "Swimming Nature LTD",
            "title": "Managing Director",
            "location": "London, UK",
            "dates": "2009-2011",
            "description": "- Coordination, planning and control of all administrative activities, financial resources and marketing strategies; /n - Execution of promotional campaigns, negotiating space at medias and developing and acquiring the material to be used; /n -Responsible for contacting customers at the pre and post selling, explaining the product and solving problems, aiming to acquire and retain the customers;"
        }
    ]
}

    // Work DOM Manipulation

work.display = function(){
    for ( var i = 0; i < work.jobs.length; i ++ ) {

     // create a new element for each job

        $("#workExperience").append(HTMLworkStart);

            // format the data

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);


        $(".work-entry:last").append(formattedEmployer + formattedTitle);
        $(".work-entry:last").append(formattedLocation, formattedDates, formattedDescription);
    }
}
work.display();


//Projects

    //Projects Object

var projects = [{
    "title": "My Portfolio",
    "dates": "May 2017",
    "description": "Based on a mock up psd image create a structured HTML and style it using CSS, making sure it attend all the responsiveness requirements.",
    "images": "images/my-portfolio.jpg"
},
{
    "title": "Animal Card",
    "dates": "May 2017",
    "description": "Based on a mock up image, recreate an info card attending all the requisits.",
    "images": "images/animal-card.jpg"
}]


    //Projects DOM Manipulation

projects.display = function(){
    for ( var i = 0; i < projects.length; i ++) {

        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects[i].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects[i].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects[i].description);
        var formattedImages = HTMLprojectImage.replace("%data%", projects[i].images);

        $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription, formattedImages);
    }
}
projects.display();



// Google MAP

$("#mapDiv").append(googleMap);



// Internationalize Names


 function inName(name) {
  name = name.split(" ");
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];

}

    $("#main").append(internationalizeButton);


//Quiz: Collecting Click Locations

    $(document).click(function(loc) {
      // your code goes here
      var x = loc.pageX;
      var y = loc.pageY;

      logClicks(x,y);
    });



// My Custom Code

    // NavBar

            // NavBar Brand

        var formattedBrand = HTMLnavbarBrand.replace("%data%", bio.name).replace("#", "#main");

            // NavBar Items
            var navBar = {
                "One" : "Bio",
                "Two" : "Work",
                "Three" : "Projects",
                "Four" : "Education",
                "Five" : "Map",
                "Six" : "Contact Me"
            }

            var formattedNavbarBio = HTMLnavbarEachItem.replace("%data%", navBar.One).replace("#", "#name");
            var formattedNavbarWork = HTMLnavbarEachItem.replace("%data%", navBar.Two).replace("#", "#workExperience");
            var formattedNavbarProjects = HTMLnavbarEachItem.replace("%data%", navBar.Three).replace("#", "#projects");
            var formattedNavbarEducation = HTMLnavbarEachItem.replace("%data%", navBar.Four).replace("#", "#education");
            var formattedNavbarMap = HTMLnavbarEachItem.replace("%data%", navBar.Five).replace("#", "#mapDiv");
            var formattedcontactMe = HTMLnavbarEachItem.replace("%data%", navBar.Six).replace("#", "#lets-connect");

        $("#main").prepend(HTMLnavbarTags);
        $("nav").append(HTMLnavbarDiv);
        $("div.container").append(HTMLnavbarButton, formattedBrand, HTMLnavbarLScreen);
        $("#navbarNavAltMarkup").append(HTMLnavbarItems);
        $(".navbar-nav").append(formattedNavbarBio, formattedNavbarWork, formattedNavbarProjects, formattedNavbarEducation, formattedNavbarMap, formattedcontactMe);

            // Adjusting NavBar Positioning





    // Role
        $("#header").children("span").first().addClass("role");

    //<hr>

        $("hr").css("border-top", "1px solid #f5ae23");


    // Contacts


        // Adding glyphicon

        var glyphicon = {
            "mobile": "glyphicon glyphicon-phone",
            "email": "glyphicon glyphicon-send",
            "github": "glyphicon glyphicon-folder-open",
            "twitter": "glyphicon glyphicon-export",
            "location": "glyphicon glyphicon-map-marker"
        };

        glyphicon.display = function(){
            //    for (var i = 0; i < glyphicon.length; i++ ){

                 $("li.flex-item").prepend("<span aria-hidden=\"true\"></span>").children().addClass("glyphicon glyphicon-phone");
              //  }
            };

            glyphicon.display();


    // Adjusting Padding and Spacing Elements

        $("#workExperience, #education, #projects, #mapDiv").css("padding-top", "3%");
        $(".education-entry, .work-entry, .project-entry").css("padding", "2% 5%");
  /*      $("#header").css("padding", function(){
            if ($(window).width() <= 1200px){
               return "6%";
            }
        });

/*
        1200 6%
        900 8%
        650 10%
        550 12%
        450 14%
*/
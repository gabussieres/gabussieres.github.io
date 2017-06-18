$(function () {
    // Load Sections
    $("#biography-section").load("src/biography.html");
    $("#education-section").load("src/education.html");
    $("#projects-section").load("src/projects.html");
    $("#courses-section").load("src/courses.html");
    $("#skills-section").load("src/skills.html");
    $("#work-section").load("src/work.html");
    $("#volunteering-section").load("src/volunteering.html");
    $("#awards-section").load("src/awards.html");
    
    // Set Updated At
    var updatedAt = "June 18th, 2017";
    $("#sidebar-updated-at").text(updatedAt);
    $("#head-updated-at").attr("content", updatedAt);
});
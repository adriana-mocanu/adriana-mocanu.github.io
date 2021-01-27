function hide(id) {
    var el = document.getElementById(id); 
    el.style.display = 'none';
}


function showHomePage() {
    hide("skills");
    hide("languages");
    hide("projects")
    var page = document.getElementById('home'); 
    page.style.display = '';
    }

function showSkillsPage() {
    hide("home"); 
    hide("languages"); 
    hide("projects"); 
    
    var page = document.getElementById('skills'); 
    page.style.display = '';
    }

function showLanguagesPage() {
    hide("skills"); 
    hide("home"); 
    hide("projects"); 
    var page = document.getElementById('languages'); 
    page.style.display = '';
    }

function showProjectsPage() {
    hide("home"); 
    hide("skills"); 
    hide("languages"); 
    var page = document.getElementById('projects'); 
    page.style.display = '';
    }


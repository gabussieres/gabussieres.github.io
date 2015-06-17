var currentSection = 'bio';

/*-- Switches anything that needs to be displayed --*/
function changeSection(show){
    if (currentSection != show){
        document.getElementById(show).style.display='block';
        document.getElementById(currentSection).style.display='none';
        currentSection = show;
    }
}
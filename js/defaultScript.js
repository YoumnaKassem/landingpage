/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
/**
 * Define Global Variables
 * 
*/
let navMenu;
let sections;
let correspondingSection;
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

const scrollToTheSection=theSection=>{
	theSection.scrollIntoView({behavior: "smooth"});
};

const searchForCorrespondingSection=(evnt=>{
sections.forEach(section=>{
	if(section.getAttribute("data-nav")===evnt.target.textContent)
	{
		scrollToTheSection(section);
	}
});
});
// Scroll to section on link click
const respondToClick=(evnt=>{

searchForCorrespondingSection(evnt);

});
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Build navigation's menu
const buildNavLinks=()=>{
    navMenu=document.getElementById("navbar__list");
    sections= document.querySelectorAll("main section");
    sections.forEach(section=>{
    const menuSubLink=document.createElement("a");
    menuSubLink.className="menu__link";
    const dataNav=document.createTextNode(section.getAttribute("data-nav"));
    menuSubLink.appendChild(dataNav);
    const listItem=document.createElement("li");
    listItem.appendChild(menuSubLink);
    navMenu.appendChild(listItem);
}); 
};

window.onload=buildNavLinks();

//active the section, which is in the viewport upon scrolling
observer=new IntersectionObserver(entries=>{

   const navLinks=document.querySelectorAll("li a");
   for(let i=0;i<entries.length;i++){
      if(entries[i].intersectionRatio>0){
      	entries[i].target.classList.add('your-active-class');
      }
     else{
     	entries[i].target.classList.remove('your-active-class');
     }


   } 
});

sections.forEach(section=>{
	observer.observe(section);
});

navMenu.addEventListener("click",respondToClick);
/**
 * End Main Functions
 * 
*/
 
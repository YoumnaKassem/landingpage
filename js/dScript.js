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
//check to see if it is the section on the viewport
const isItTheSectionYouSee=section=>{
  let absoulteTopValue=(section.getBoundingClientRect().top)*-1;
  if(section.getBoundingClientRect().top<=50&&absoulteTopValue<section.getBoundingClientRect().height){
    return true;
  }
};

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



//active the section, which is in the viewport upon scrolling
const activeTheSectionInViewport=()=>{
 const navLinks=document.querySelectorAll(".menu__link");
 for(let i=0;i<sections.length;i++){
  if(isItTheSectionYouSee(sections[i])){
    sections[i].classList.add("your-active-class");
    navLinks[i].classList.add("active_link");
  }
  else{
    sections[i].classList.remove("your-active-class");
    navLinks[i].classList.remove("active_link");
  }
 }
};
 

window.onload=buildNavLinks();
window.addEventListener("scroll",activeTheSectionInViewport);
navMenu.addEventListener("click",respondToClick);
/**
 * End Main Functions
 * 
*/
 
const aboutMe = document.getElementById('about-me');
const project = document.getElementById('project');
const contact = document.getElementById('contact');

const aboutMeDisplay = () => {
    aboutMe.style.display = 'block';
    project.style.display = 'none';
    contact.style.display = 'none';
};

const projectDisplay = () => {
    aboutMe.style.display = 'none';
    project.style.display = 'block';
    contact.style.display = 'none';
};

const contactDisplay = () => {
    aboutMe.style.display = 'none';
    project.style.display = 'none';
    contact.style.display = 'block';
};


const projectFlexbox = document.getElementById('flexbox');
const projectTwo = document.getElementById('two');
const projectThree = document.getElementById('three');

const liFlexbox = document.querySelector('.project-flexbox');
const liTwo = document.querySelector('.project-2');
const liThree = document.querySelector('.project-3');



const flexboxDisplay = () => {
    projectFlexbox.style.display = 'block';
    projectTwo.style.display = 'none';
    projectThree.style.display = 'none';
};

const twoDisplay = () => {
    projectFlexbox.style.display = 'none';
    projectTwo.style.display = 'block';
    projectThree.style.display = 'none';
};

const threeDisplay = () => {
    projectFlexbox.style.display = 'none';
    projectTwo.style.display = 'none';
    projectThree.style.display = 'block';
};
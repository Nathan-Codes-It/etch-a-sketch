// your javascript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);


const paragraph = document.createElement('paragraph');
paragraph.classList.add('paragraph');
paragraph.textContent = 'part 2';
container.appendChild(paragraph);

const button = document.createElement("button");
button.innerHTML = "Enter";


 let body = document.getElementsByTagName("body")[0];
 body.appendChild(button);
 let choice;

 const output = document.createElement("div");
button.addEventListener("click", function() {
     choice = prompt("pick something");
     
     output.textContent= choice;
     body.appendChild(output);
});


const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ulEl = document.querySelector(".gallery");


const galleryList = images.map((image) => 
`<li><img src = "${image.url}" alt = "${image.alt}"  width = "250" class ="gallery__element"/></li>`).join("");

console.log(...galleryList);

ulEl.insertAdjacentHTML("afterbegin", galleryList); 

const listEl = ulEl.querySelectorAll("li");

listEl.forEach(element =>{
 element.style.listStyleType ="none";
 console.log(element);

 element.style.display ="flex";  
 element.style.marginBottom ="20px";

 element.style.justifyContent ="center"; 
 element.firstChild.style.border ="5px outset grey";
 })
 
 


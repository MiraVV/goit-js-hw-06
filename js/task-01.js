const listItemEl = document.querySelectorAll(".item");
console.log("Number of categories:", listItemEl.length);

listItemEl.forEach(element => {
    const categoryEl = element.firstElementChild;
    console.log ("Category:",categoryEl.textContent);
    
    const categoryLiEl = element.querySelectorAll("li");
    console.log ("Elements:",categoryLiEl.length); 
});

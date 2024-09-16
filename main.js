let link = "https://66e7e69cb17821a9d9da6ec1.mockapi.io/images";
let imgName = document.getElementById("imgName");
let imgLink = document.getElementById("imgLink");
let addBtn = document.getElementById("addBtn");
let container = document.getElementsByClassName("container")[0];
console.log(imgName.value);

addBtn.addEventListener("click", () => {
    if (imgLink.value != '' && imgName.value != '') {
        
        fetch(link, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
                name: imgName.value,
                link: imgLink.value,
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            console.log(data.id);

            let card = document.createElement("div");
            card.classList.add("card");
            let title = document.createElement("p");
            title.classList.add('title')
            
            let img = document.createElement("img");
            img.classList.add("img");
            let deleteBtn = document.createElement("button");
            deleteBtn.classList.add('deleteBtn')
            
            deleteBtn.textContent = "Delete image";
            deleteBtn.addEventListener("click",() => removeElement(data.id));
            
            title.textContent = data.name;
            img.src = data.link;
            card.appendChild(title);
            card.appendChild(img);
            card.appendChild(deleteBtn);
            container.appendChild(card);
        });
    }
});
// console.log("https://66e7e69cb17821a9d9da6ec1.mockapi.io/images" + "/" + id);

function getElements() {

    fetch(link).then(res => res.json()).then(data => {
        data.map(item => {
            console.log(item.id);
            let card = document.createElement("div");
            card.classList.add("card");
            let title = document.createElement("p");
            title.classList.add('title')
            let img = document.createElement("img");
            img.classList.add("img");
            let deleteBtn = document.createElement("button");
            deleteBtn.classList.add('deleteBtn')
            deleteBtn.textContent = "Delete image";
            deleteBtn.addEventListener("click", () => removeElement(item.id));
            title.textContent = item.name;
            img.src = item.link;
            card.appendChild(title);
            card.appendChild(img);
            card.appendChild(deleteBtn);
            container.appendChild(card);
        })
    })
    removeElement(item.id)
}
function removeElement(id) {
    // getElements()

  fetch(link + "/" + id, {
    method: "DELETE",

  })
   
}
getElements()


const form = document.getElementById("event-form");
const title = document.getElementById("title");
const date = document.getElementById("date");
const category = document.getElementById("category");
const description = document.getElementById("description");
const list = document.getElementById("events-list");
const clearBtn = document.getElementById("clear-btn");
const sampleBtn = document.getElementById("sample-btn");
const keyOutput = document.getElementById("key-output");

const sampleEvents = [
    {
        title: "Web Development",
        date: "2026-02-10",
        category: "Front-end-development",
        description: "Making Websites by Kashvi Kohli.",
    },
    {
        title: "Web Dev Meetup",
        date: "2026-02-09",
        category: "Meetup",
        description: "Networking and lightning talks.",
    },
];

function addEvent(eventData) {
    const card = document.createElement("div");
    card.className = "box";
    card.innerHTML = `
    <h3>${eventData.title}</h3>
    <p><strong>Date:</strong> ${eventData.date}</p>
    <p><strong>Category:</strong> ${eventData.category}</p>
    <p>${eventData.description || "No description"}</p>
    `;

    if (list.querySelector(".msg")) {
        list.innerHTML = "";
    }
    list.appendChild(card);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const eventData = {
        title: title.value,
        date: date.value,
        category: category.value,
        description: description.value
    };
    addEvent(eventData);
    form.reset();
});
sampleBtn.addEventListener("click", () => {
    list.innerHTML = "";
    sampleEvents.forEach(addEvent);
});

// clear all event
clearBtn.addEventListener("click",()=>{
    list.innerHTML=`<div class="empty-state">No events yet. Kashvi Add your first event!</div>`
})

// keyup event
document.addEventListener("keyup",(e)=>{
    keyOutput.textContent=`Last key pressed: ${e.key}`;
})

// delete event on click
list.addEventListener("click",(e)=>{
    if(e.target.classList.contains("box")){
        e.target.remove();
    }
})
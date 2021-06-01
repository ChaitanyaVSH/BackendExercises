const eventsEl = document.getElementById("events");
const loadingEl = document.getElementById("loader");

let loading = true;

const getEventsFromBackend = async () => {
    const response = await fetch("http://localhost:5000/events");
    const events = await response.json();

    loading = false;
    return events;
}

const addEventsToDom = async () => {
    const events = await getEventsFromBackend();

    if(!loading) {
        loadingEl.innerHTML = "";
    }

    events.map(event => {
        let div = document.createElement("div");
        div.classList.add("event");

        div.innerHTML = `
        <h2>${event.name}</h2>
        `

        eventsEl.appendChild(div);
    })
}

addEventsToDom();
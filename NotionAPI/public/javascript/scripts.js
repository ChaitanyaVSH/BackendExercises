const eventsEl = document.getElementById("events");
const loadingEl = document.getElementById("loader");

let loading = false;

const getEventsFromBackend = async () => {

    loading = true;

    const response = await fetch("http://localhost:5000/events");
    const events = await response.json();

    loading = false;

    return events;
}

const addEventsToDom = async () => {
    const events = await getEventsFromBackend();

    events.map((event, idx) => {
        let div = document.createElement("div");
        div.classList.add("event");

        div.innerHTML = `<h2>${event.name}</h2>`

        eventsEl.appendChild(div);
    })
}

addEventsToDom();
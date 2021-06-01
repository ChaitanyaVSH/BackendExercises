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

    console.log("Events: ", events);
}

addEventsToDom();
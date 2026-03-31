// Redirect to details page
function goToDetails() {
    window.location.href = "details.html";
}

// Save form data
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("eventForm");

    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            const eventData = {
                title: document.getElementById("title").value,
                date: document.getElementById("date").value,
                desc: document.getElementById("description").value,
                formLink: document.getElementById("formLink").value
            };

            localStorage.setItem("eventData", JSON.stringify(eventData));
            alert("Event Saved!");
        });
    }

    // Load event data
    const data = JSON.parse(localStorage.getItem("eventData"));

    if (data && document.getElementById("eventTitle")) {
        document.getElementById("eventTitle").innerText = data.title;
        document.getElementById("eventDate").innerText = "Date: " + data.date;
        document.getElementById("eventDesc").innerText = data.desc;
        document.getElementById("formBtn").href = data.formLink;
    }
});

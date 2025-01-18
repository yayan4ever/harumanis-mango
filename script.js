document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll for navigation links
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute("href").slice(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Feedback form submission
    const feedbackForm = document.getElementById("feedbackForm");
    feedbackForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = feedbackForm.querySelector("input[type='text']").value;
        const email = feedbackForm.querySelector("input[type='email']").value;
        const feedback = feedbackForm.querySelector("textarea").value;

        if (name && email && feedback) {
            alert(`Thank you, ${name}! Your feedback has been submitted.`);
            feedbackForm.reset();
        } else {
            alert("Please fill out all fields before submitting.");
        }
    });

    // Real-time clock in the footer
    const footer = document.querySelector("footer");
    const clockElement = document.createElement("p");
    footer.appendChild(clockElement);

    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        const dateString = now.toLocaleDateString();
        clockElement.textContent = `Today's date: ${dateString}, Current time: ${timeString}`;
    }

    setInterval(updateClock, 1000); // Update clock every second
    updateClock(); // Initialize clock immediately
});

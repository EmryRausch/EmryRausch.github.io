function startCountUp(startDate) {
    function updateTimer() {
        const start = new Date(startDate).getTime();
        const now = new Date().getTime();
        let elapsed = now - start;

        let days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
        let hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

        document.getElementById("countup").innerHTML = 
            `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`;
    }

    updateTimer(); // Initial call to prevent delay
    setInterval(updateTimer, 1000);
}

startCountUp("2024-01-01T00:00:00"); // Change to your desired start date

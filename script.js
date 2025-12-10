document.addEventListener("DOMContentLoaded", function() {
    // Countdown Timer
    // const targetDate = new Date("2025-05-11T13:00:00+02:00").getTime(); 
    const targetDate = new Date("2025-05-11T00:00:00+02:00").getTime(); 

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        if (days > 0) {
            
            let day_text;
            if (days==1) {
                above_text = `<span>Manca solo:</span>`;
                day_text = 'giorno';
            }
            else {
                above_text = `<span>Mancano solo:</span>`;
               day_text = 'giorni';
            }
            document.getElementById("timer-title").innerHTML = above_text;
            document.getElementById("timer").innerHTML = 
            // `<span>${days}d</span> <span>${hours}h</span> <span>${minutes}m</span> <span>${seconds}s</span>`;
            `<span>${days} ${day_text}</span> <span>${hours}h</span>`;
        } else if (days == 0 & timeLeft > 0) {
                document.getElementById("timer-title").innerHTML = "Il workshop è oggi!";
        }
        else {
            document.getElementById("timer-title").innerHTML = "---------";
        }
        
    }

    setInterval(updateCountdown, 1000);

    // Collapsible Section
    const collapsibles = document.querySelectorAll(".collapsible");

    collapsibles.forEach(button => {
        button.addEventListener("click", function() {
            const content = this.nextElementSibling;
            this.classList.toggle("active"); // Rotate arrow
            
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});
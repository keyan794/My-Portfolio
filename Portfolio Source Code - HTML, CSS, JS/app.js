(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");

            // Show Download CV button only on home page
            const cvBtn = document.getElementById('cvBtnFixed');
            if (button.dataset.id === 'home') {
                cvBtn.style.display = 'block';
            } else {
                cvBtn.style.display = 'none';
            }
        })
    });

    // On load, ensure Download CV button is visible only on home
    window.addEventListener('DOMContentLoaded', function() {
        const cvBtn = document.getElementById('cvBtnFixed');
        const homeSection = document.getElementById('home');
        if (homeSection && homeSection.classList.contains('active')) {
            cvBtn.style.display = 'block';
        } else {
            cvBtn.style.display = 'none';
        }
    });

    // Typing effect for tagline in center
    const typingText = document.getElementById('typing-text');
    const typingString = "Hi, I am Karthikeyan, Exploring AI and Data Science...";
    let i = 0;
    function typeChar() {
        if (i <= typingString.length) {
            typingText.textContent = typingString.slice(0, i);
            i++;
            setTimeout(typeChar, 38);
        }
    }
    typeChar();
})();

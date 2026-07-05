/**
 * Kawaii Interactive Storyboard Engine
 * Handles custom timed preloader sequences, touch card updates, and heart physics.
 */

document.addEventListener("DOMContentLoaded", () => {
    const loaderCurtain = document.getElementById('cute-loader');
    const bubbleDigit = document.getElementById('countdown-bubble');
    const appViewport = document.getElementById('cute-app-viewport');
    const slides = document.querySelectorAll('.cute-slide');
    const progressFill = document.getElementById('progress-fill');
    const navButtons = document.querySelectorAll('.next-slide-trigger');
    const blowCandleBtn = document.getElementById('blow-candle-trigger');

    let runningStep = 0;
    let countdownTime = 3;

    // --- 1. THE CUTE PRELOAD SEQUENCE TIMER ---
    const activeTimer = setInterval(() => {
        countdownTime--;

        if (countdownTime > 0) {
            bubbleDigit.textContent = countdownTime;
        } else if (countdownTime === 0) {
            // Apply fun text styling scaling on zero climax execution
            bubbleDigit.style.fontSize = "2.2rem";
            bubbleDigit.style.lineHeight = "1.2";
            bubbleDigit.innerHTML = "HAPPY BIRTHDAY<br>BABYYYYY! 💖🐾";
            
            triggerSweetHeartPopper();
        } else {
            clearInterval(activeTimer);
            
            // Slide and fade away the pastel loader curtain smoothly
            loaderCurtain.style.opacity = "0";
            loaderCurtain.style.transform = "scale(0.9) translateY(20px)";
            
            setTimeout(() => {
                loaderCurtain.style.display = 'none';
                
                // Mount and transition the Kawaii interactive app frame
                appViewport.style.opacity = "1";
                appViewport.style.transform = "scale(1)";
                
                // Set off gentle ambient floating candy/heart showers
                setInterval(triggerAmbientHeartDrift, 4500);
            }, 700);
        }
    }, 1200);

    // --- 2. STORYBOOK STEP STATE CORE NAVIGATION ---
    function advanceCuteSlide() {
        if (runningStep < slides.length - 1) {
            const currentCardNode = slides[runningStep];
            currentCardNode.classList.remove('active');
            currentCardNode.classList.add('passed');

            runningStep++;
            slides[runningStep].classList.add('active');
            
            // Adjust cloud progress fill bar percentage dynamically
            const completionPercentage = ((runningStep + 1) / slides.length) * 100;
            progressFill.style.width = `${completionPercentage}%`;
            
            // Tiny happy burst on page transition
            confetti({
                particleCount: 15,
                spread: 40,
                colors: ['#ff85a1', '#ff477e', '#ffffff'],
                origin: { y: 0.85 }
            });
        }
    }

    navButtons.forEach(buttonNode => {
        buttonNode.addEventListener('click', advanceCuteSlide);
    });

    // --- 3. DYNAMIC HEART PARTICLE PHYSICS ENGINE ---
    function triggerSweetHeartPopper() {
        const liveLimit = 3200;
        const processEnd = Date.now() + liveLimit;

        (function framingCycle() {
            // Left flank strawberry sparks
            confetti({
                particleCount: 6,
                angle: 60,
                spread: 50,
                origin: { x: 0, y: 0.85 },
                colors: ['#ff85a1', '#ff477e', '#fff9db', '#ffffff']
            });
            // Right flank strawberry sparks
            confetti({
                particleCount: 6,
                angle: 120,
                spread: 50,
                origin: { x: 1, y: 0.85 },
                colors: ['#ff85a1', '#ff477e', '#fff9db', '#ffffff']
            });

            if (Date.now() < processEnd) {
                requestAnimationFrame(framingCycle);
            }
        }());
    }

    function triggerAmbientHeartDrift() {
        confetti({
            particleCount: 12,
            spread: 75,
            scalar: 1.1,
            origin: { y: 0.55 },
            colors: ['#ff85a1', '#ff477e'],
            disableForReducedMotion: true
        });
    }

    // --- 4. INTERACTIVE CANDLE WISH LOGIC COMPLETION ---
    if (blowCandleBtn) {
        blowCandleBtn.addEventListener('click', () => {
            const cakeAvatar = document.getElementById('cake-avatar');
            const finalHeadline = document.getElementById('final-headline');
            const finalSubtext = document.getElementById('final-subtext');

            if (blowCandleBtn.textContent === "WISH GRANTED! 🥳🎈") return;

            // Mutate layout DOM variables seamlessly
            cakeAvatar.textContent = "🥳🍰🎈🎉";
            finalHeadline.innerHTML = "Your Wish is Safe with Dudu! 🐻";
            finalSubtext.innerHTML = "<strong>I love you more than all the honey and sweets in the world. Now let's celebrate your special day for real! ❤️</strong>";
            
            blowCandleBtn.textContent = "WISH GRANTED! 🥳🎈";
            blowCandleBtn.style.background = "#2a9d8f";
            blowCandleBtn.style.boxShadow = "none";

            // Deploy a giant screen-wide celebration pastel particle explosion
            confetti({
                particleCount: 160,
                scalar: 1.4,
                spread: 120,
                origin: { y: 0.65 },
                colors: ['#ff85a1', '#ff477e', '#fff9db', '#ffffff']
            });
        });
    }
});
            

let clickCount = 0;
function handleYesClick() {
    if (clickCount < 3) {
        switchPositions();
        enlargeYesButton();
        changeQuestionText();
        clickCount++;
    } else {
        document.getElementById('loveQuestion').style.display = 'none';
        document.getElementById('openButton').style.display = 'inline-block';
    }
}
function switchPositions() {
    let yesButton = document.getElementById('yesButton');
    let noButton = document.getElementById('noButton');
    let yesLeft = yesButton.style.left;
    let yesTop = yesButton.style.top;
    yesButton.style.left = noButton.style.left || '0px';
    yesButton.style.top = noButton.style.top || '0px';
    noButton.style.left = yesLeft || '0px';
    noButton.style.top = yesTop || '0px';
}
function enlargeYesButton() {
    let yesButton = document.getElementById('yesButton');
    let currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = (currentSize * (1.5) + 5 ) + 'px';
}
function changeQuestionText() {
    let messages = ["Why'd you press No? 😡", "Are you sure? 😢", "Think again! 😤"];
    if (clickCount < messages.length) {
        document.getElementById('questionText').innerText = messages[clickCount];
    }
}
function handleNoClick() {
    switchPositions();
    enlargeYesButton();
    changeQuestionText();
    clickCount++;
}
function openCard() {
    let music = document.getElementById('birthdayMusic');
    music.play();
    document.getElementById("mexcat-container").innerHTML = "<img src='mexican-cat.gif' width='32' height='32'>".repeat(12);
    document.getElementById('container').style.animation = 'fadeIn 2s ease-in-out';
    document.getElementById('card').style.display = 'block';
    document.getElementById('mexcat').style.display = 'block';
    document.getElementById('openButton').style.display = 'none';
    
    document.getElementById('yippeeButton').style.display = 'inline-block';
    startConfetti();
    setTimeout(() => {
        document.querySelector('.icon-bar').style.display = 'flex';
    }, 2000);
}
function startConfetti() {
    var duration = 30 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) {
            return clearInterval(interval);
        }
        var particleCount = 50 * (timeLeft / duration);
        confetti({ ...defaults, particleCount, origin: { x: Math.random() * 0.5, y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: 0.5 + Math.random() * 0.5, y: Math.random() - 0.2 } });
    }, 250);
}
function triggerYippeeConfetti() {
    let audio = document.getElementById('yippeeSound');
    audio.currentTime = 0.15; // Reset audio to the start
    audio.play();
    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }
    confetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        particleCount: randomInRange(50, 100),
        origin: { y: 0.6 }
    });
}
function playMusic() {
    document.getElementById('birthdayMusic').play();
}
function pauseMusic() {
    document.getElementById('birthdayMusic').pause();
}
function muteMusic() {
    let music = document.getElementById('birthdayMusic');
    music.muted = !music.muted;
}
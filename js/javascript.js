

window.addEventListener("scroll", () => {
    let header = document.querySelector("#header")
    header.classList.toggle('rolagem-baixo', window.scrollY > 1)
})

// ============================= DISCO ==================================

let currentAudio = null;
let isPlaying = false;

function toggleMusic() {
    const vinylIcon = document.querySelectorAll('vinyl-icon');
    console.log("entrou na funcção tuggle")

    vinylIcon.forEach(() => {
        if (!isPlaying) {
            console.log("entrou no if")
            isPlaying = true;
            vinylIcon.style.display = 'inline-block';
            startRotation();
        } else {
            isPlaying = false;
            stopRotation();
        }

        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        currentAudio = chooseNextAudio();

        if (isPlaying) {
            currentAudio.play();
        }
    })
}

function chooseNextAudio() {
    if (!currentAudio || currentAudio.id === 'audio4') {
        return document.getElementById('audio1');
    } else if (currentAudio.id === 'audio1') {
        return document.getElementById('audio2');
    } else if (currentAudio.id === 'audio2') {
        return document.getElementById('audio3');
    } else {
        return document.getElementById('audio4');
    }
}

function startRotation() {
    document.getElementById('vinyl-icon').style.animationPlayState = 'running';
}

function stopRotation() {
    document.getElementById('vinyl-icon').style.animationPlayState = 'paused';
}
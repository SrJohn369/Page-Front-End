

window.addEventListener("scroll", () => {
    let header = document.querySelector("#header")
    header.classList.toggle('rolagem-baixo', window.scrollY > 1)
})

// ============================= DISCO ==================================

let currentAudio = null;
let isPlaying = false;

function toggleMusic() {
    const vinylIcons = document.querySelectorAll('[id^="vinyl-icon-"]');
    console.log("entrou na funcção toggle");

    vinylIcons.forEach((vinylIcon) => {
        if (!isPlaying) {
            console.log("entrou no if");
            isPlaying = true;
            vinylIcon.style.display = 'inline-block';
            startRotation();
        } else {
            console.log("entrou else");
            isPlaying = false;
            stopRotation();
        }

        if (currentAudio) {
            console.log("audio atual");
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        currentAudio = chooseNextAudio();

        if (isPlaying) {
            console.log("se está rodando");
            currentAudio.play();
        }

        function startRotation() {
            console.log("inicia a rotação");
            document.getElementById(vinylIcon.id).style.animationPlayState = 'running';
        }

        function stopRotation() {
            console.log("para a rotação");
            document.getElementById(vinylIcon.id).style.animationPlayState = 'paused';
        }

    });
}

function chooseNextAudio() {
    console.log("verificações");
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


window.addEventListener("scroll", () => {
    let header = document.querySelector("#header")
    header.classList.toggle('rolagem-baixo', window.scrollY > 1)
})

// ============================= DISCO ==================================

let audio;

document.addEventListener('DOMContentLoaded', () => {
    var divs = document.querySelectorAll('.disco');

    divs.forEach(function (div) {
        div.addEventListener('click', function () {
            if (!audio) {
                var caminhoMusica = div.getAttribute('data-musica');
                audio = new Audio(caminhoMusica);

                audio.play();
                div.classList.add('animacao');

                // Adiciona um evento para garantir que a música pare quando o mouse sair da div
                div.addEventListener('mouseout', function () {
                    audio.pause();
                    div.classList.remove('animacao');
                });
            } else if(audio) {
                audio.remove()
            }
        });
    });
});

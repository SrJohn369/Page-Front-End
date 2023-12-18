
window.addEventListener("scroll", () => {
    let header = document.querySelector("#header")
    header.classList.toggle('rolagem-baixo', window.scrollY > 1)
})


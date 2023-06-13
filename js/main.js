function playVideo() {
    let aboutVideo = $(".about-video");
    let icon = aboutVideo.find("i");
    let thumb = aboutVideo.find("img");
    let video = aboutVideo.find("video")[0];
    icon.hide();
    thumb.hide();
    video.style.display = "block";
    video.play();
    video.addEventListener("ended", function () {
        stopVideo();
    })
}

function stopVideo() {
    let aboutVideo = $(".about-video");
    let icon = aboutVideo.find("i");
    let thumb = aboutVideo.find("img");
    let video = aboutVideo.find("video")[0];
    icon.show();
    thumb.show();
    video.currentTime = 0;
    video.style.display = "none";
} 

$(document).ready(() => {
    let accordionsHeader = $(".accordion");
    accordionsHeader.find(".accordion-header").on("click", (event) => {
        let accordionBody = event.currentTarget.nextElementSibling;
        let icon = $(event.currentTarget).find("i");
        
        if (icon.css("transform") == "matrix(-1, 0, 0, -1, 0, 0)") {
            icon.css("transform", "rotate(0)");
        } else {
            icon.css("transform", "rotate(180deg)");
        }
        
        $(accordionBody).slideToggle();
    })

    fillYear();

    let links = document.querySelectorAll('.scroll-link');
  
    // Adiciona um listener de clique em cada link
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        
        let target = document.querySelector(link.getAttribute('href')); // Obtém o elemento alvo
        
        // Rola para o elemento alvo suavemente
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        });
    });
})

function fillYear() {
    let yearElement = $("#year");
    let now = new Date();
    yearElement.html(now.getFullYear());
}
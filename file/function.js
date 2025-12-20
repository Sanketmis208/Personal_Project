// Generate floating hearts
function createFloatingHearts() {
    const heartsContainer = document.getElementById('heartsBackground');
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '💕';
            heart.style.position = 'absolute';
            heart.style.fontSize = Math.random() * 30 + 20 + 'px';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.bottom = '-50px';
            heart.style.opacity = Math.random() * 0.5 + 0.3;
            heart.style.animation = `floatUp ${Math.random() * 5 + 5}s linear infinite`;
            heart.style.animationDelay = Math.random() * 5 + 's';
            
            heartsContainer.appendChild(heart);
        }, i * 200);
    }
}

// Add float animation
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            bottom: -50px;
            transform: translateX(0) rotate(0deg);
        }
        50% {
            transform: translateX(${Math.random() * 100 - 50}px) rotate(180deg);
        }
        100% {
            bottom: 110%;
            transform: translateX(${Math.random() * 100 - 50}px) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// Initialize on page load
window.addEventListener('load', () => {
    createFloatingHearts();
});

// Smooth scroll function
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Lightbox functionality
let currentImageIndex = 0;
const images = ['photo1.JPG', 'photo2.JPG', 'photo3.JPG', 'photo4.JPG', 'photo5.JPG'];

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    
    lightbox.classList.add('active');
    lightboxImg.src = images[currentImageIndex];
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function changeLightboxImage(direction) {
    currentImageIndex += direction;
    
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    
    document.getElementById('lightboxImg').src = images[currentImageIndex];
}

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// Music player
let isPlaying = true;

function toggleMusic() {
    const audio = document.getElementById('myAudio');
    const icon = document.getElementById('musicIcon');
    
    if (isPlaying) {
        audio.pause();
        icon.textContent = '🔇';
        isPlaying = false;
    } else {
        audio.play();
        icon.textContent = '🎵';
        isPlaying = true;
    }
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'floatIn 1s ease-out forwards';
        }
    });
}, observerOptions);

// Observe sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.photo-gallery');
    sections.forEach(section => observer.observe(section));
});

// Original jQuery functions for tree animation
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function () {
  var newWidth = $win.width();
  var newHeight = $win.height();
  if (newWidth != clientWidth && newHeight != clientHeight) {
    location.replace(location);
  }
});

(function ($) {
  $.fn.typewriter = function () {
    this.each(function () {
      var $ele = $(this),
        str = $ele.html(),
        progress = 0;
      $ele.html("");
      var timer = setInterval(function () {
        var current = str.substr(progress, 1);
        if (current == "<") {
          progress = str.indexOf(">", progress) + 1;
        } else {
          progress++;
        }
        $ele.html(str.substring(0, progress) + (progress & 1 ? "_" : ""));
        if (progress >= str.length) {
          clearInterval(timer);
        }
      }, 75);
    });
    return this;
  };
})(jQuery);

function timeElapse(date) {
  var current = Date();
  var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
  var days = Math.floor(seconds / (3600 * 24));
  seconds = seconds % (3600 * 24);
  var hours = Math.floor(seconds / 3600);
  if (hours < 10) {
    hours = "0" + hours;
  }
  seconds = seconds % 3600;
  var minutes = Math.floor(seconds / 60);
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  seconds = seconds % 60;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  var result =
    'Days <span class="digit">' +
    days +
    '</span> Hours <span class="digit">' +
    hours +
    '</span> Minutes <span class="digit">' +
    minutes;
  $("#clock").html(result);

  var text = "THE WORLD JUST GOT LUCKIER SINCE ";
  $("#message-box").html(text);
}
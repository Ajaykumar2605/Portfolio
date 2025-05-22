//navbar
$(document).ready(function () {

    // Navbar toggle
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // Scroll spy and nav highlight
    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        // Show/hide scroll-to-top button
        if (window.scrollY > 60) {
            $('#scroll-top').addClass('active');
        } else {
            $('#scroll-top').removeClass('active');
        }

        // Efficient scroll spy
        let scrollPos = $(window).scrollTop();
        let foundActive = false;
        $('section[id]').each(function () {
            let sectionTop = $(this).offset().top - 220; // adjust for header
            let sectionHeight = $(this).outerHeight();
            let sectionId = $(this).attr('id');
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar ul li a[href="#' + sectionId + '"]').addClass('active');
                foundActive = true;
                return false; // break
            }
        });
        if (!foundActive) {
            $('.navbar ul li a').removeClass('active');
        }
    });

    // Highlight nav on click for instant feedback
    $('.navbar ul li a').on('click', function () {
        $('.navbar ul li a').removeClass('active');
        $(this).addClass('active');
    });

    // Smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        var target = $($(this).attr('href'));
        if (target.length) {
            e.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top,
            }, 400, 'swing');
        }
    });

    // Typed.js effect
    if (typeof Typed !== "undefined") {
        new Typed(".typing-text", {
            strings: ["Engineer", "Linux System Administrator", "YouTuber", "Programmer"],
            loop: true,
            typeSpeed: 25,
            backSpeed: 25,
            backDelay: 700,
        });
    }

    // Liquid bar animation
    function animateLiquidBars() {
        document.querySelectorAll('.skill-bar').forEach(function (bar) {
            const percent = bar.getAttribute('data-percent') || 0;
            const svg = bar.querySelector('.liquid-bar');
            if (!svg) return;
            const path = svg.querySelector('.liquid');
            if (!path) return;
            let wavePhase = 0;

            function drawWave() {
                const width = 100, height = 16;
                const fillWidth = width * (percent / 100);
                wavePhase += 0.12; // slightly faster for responsiveness
                let d = `M0,${height} `;
                for (let x = 0; x <= fillWidth; x++) {
                    const y = 2 + Math.sin((x / 12) + wavePhase) * 2;
                    d += `L${x},${y} `;
                }
                d += `L${fillWidth},${height} L0,${height} Z`;
                path.setAttribute('d', d);
                requestAnimationFrame(drawWave);
            }
            drawWave();
        });
    }

    // Bubbles animation
    function createBubbles() {
        document.querySelectorAll('.bubbles').forEach(function (container) {
            container.innerHTML = ''; // clear for responsiveness
            for (let i = 0; i < 8; i++) {
                const bubble = document.createElement('div');
                bubble.className = 'bubble';
                bubble.style.left = (Math.random() * 90) + '%';
                bubble.style.width = bubble.style.height = (Math.random() * 8 + 6) + 'px';
                bubble.style.animationDelay = (Math.random() * 2) + 's';
                bubble.style.animationDuration = (2 + Math.random() * 1.5) + 's';
                container.appendChild(bubble);
            }
        });
    }
    animateLiquidBars();
    createBubbles();

    // Pause/resume tech slider on hover
    const techSlider = document.getElementById('techSlider');
    if (techSlider) {
        techSlider.addEventListener('mouseenter', () => {
            techSlider.style.animationPlayState = 'paused';
        });
        techSlider.addEventListener('mouseleave', () => {
            techSlider.style.animationPlayState = 'running';
        });
    }

    // Project card 3D effect (responsive)
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * 10;
            const rotateY = ((x - centerX) / centerX) * 10;
            card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
        });
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.15s cubic-bezier(.03,.98,.52,.99)';
        });
    });

    // Favicon and title change on visibility
    document.addEventListener('visibilitychange', function () {
        var siteicon = document.getElementById("siteicon");
        var thanksicon = document.getElementById("thanksicon");
        if (document.visibilityState === "visible") {
            document.title = "AJAY KUMAR | Portfolio";
            if (siteicon) siteicon.setAttribute("href", "/assets/Hero/Ak_2.jpg");
            if (thanksicon) thanksicon.setAttribute("href", "/assets/Hero/Ak_2.jpg");
        } else {
            document.title = "Thanks for visit";
            if (siteicon) siteicon.setAttribute("href", "/assets/Hero/thanks.png");
            if (thanksicon) thanksicon.setAttribute("href", "/assets/Hero/thanks.png");
        }
    });

    // Art gallery tabs
    $('.tabs input[type="radio"]').on('change', function () {
        $('.tab-gallery').removeClass('active');
        if ($('#tab-upcoming').is(':checked')) {
            $('.tab-gallery-upcoming').addClass('active');
        } else if ($('#tab-development').is(':checked')) {
            $('.tab-gallery-development').addClass('active');
        } else if ($('#tab-completed').is(':checked')) {
            $('.tab-gallery-completed').addClass('active');
        }
    });
});

//art
// Liquid animation for the glider bar
function animateGliderLiquid() {
  const svg = document.querySelector('.glider-svg');
  if (!svg) return;
  const path = svg.querySelector('.liquid-bar-path');
  if (!path) return;
  let wavePhase = 0;
  function drawWave() {
    const width = 200, height = 54;
    wavePhase += 0.09;
    let d = `M0,${height} `;
    for (let x = 0; x <= width; x++) {
      const y = 16 + Math.sin((x / 18) + wavePhase) * 6;
      d += `L${x},${y} `;
    }
    d += `L${width},${height} L0,${height} Z`;
    path.setAttribute('d', d);
    requestAnimationFrame(drawWave);
  }
  drawWave();
}
animateGliderLiquid();

// Bubble effect and liquid animation for contact cards
function animateContactLiquid() {
  document.querySelectorAll('.contact-card').forEach(function(card) {
    const svg = card.querySelector('.contact-liquid-bg');
    if (!svg) return;
    const path = svg.querySelector('.liquid-contact-path');
    const bubblesGroup = svg.querySelector('.liquid-bubbles');
    if (!path || !bubblesGroup) return;
    let wavePhase = 0;
    let speed = 0.09;

    // Device motion support
    if (window.DeviceMotionEvent) {
      window.addEventListener('devicemotion', function(event) {
        let acc = Math.abs(event.acceleration.x || 0) + Math.abs(event.acceleration.y || 0);
        speed = 0.09 + Math.min(acc / 30, 0.25);
      });
    }

    // Bubble effect
    function createBubble() {
      const bubble = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      const r = Math.random() * 3 + 2;
      bubble.setAttribute("cx", Math.random() * 140 + 5);
      bubble.setAttribute("cy", 170);
      bubble.setAttribute("r", r);
      bubble.setAttribute("fill", "#fff8");
      bubblesGroup.appendChild(bubble);
      let cy = 170;
      let opacity = 1;
      function animate() {
        cy -= 2.2;
        opacity -= 0.025;
        bubble.setAttribute("cy", cy);
        bubble.setAttribute("opacity", opacity);
        if (cy > 20 && opacity > 0) {
          requestAnimationFrame(animate);
        } else {
          bubblesGroup.removeChild(bubble);
        }
      }
      animate();
    }

    let bubbleInterval = null;
    card.addEventListener('mouseenter', function() {
      bubbleInterval = setInterval(createBubble, 120);
    });
    card.addEventListener('mouseleave', function() {
      clearInterval(bubbleInterval);
    });

    function drawWave() {
      // Increased height for more liquid effect
      const width = 150, height = 180;
      wavePhase += speed;
      let d = `M0,${height} `;
      for (let x = 0; x <= width; x++) {
        const y = 110 + Math.sin((x / 18) + wavePhase) * 16;
        d += `L${x},${y} `;
      }
      d += `L${width},${height} L0,${height} Z`;
      path.setAttribute('d', d);
      requestAnimationFrame(drawWave);
    }
    drawWave();
  });
}
animateContactLiquid();


document.querySelectorAll('.contact-section .contact-card').forEach(function(card) {

  let bubbleInterval = null;
  const svg = card.querySelector('.contact-liquid-bg');
  function createBubble() {
    if (!svg) return;
    const bubble = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    const r = Math.random() * 2 + 1.5;
    bubble.setAttribute("cx", Math.random() * 130 + 10);
    bubble.setAttribute("cy", 140);
    bubble.setAttribute("r", r);
    bubble.setAttribute("fill", "#fff8");
    svg.appendChild(bubble);
    let cy = 140;
    let opacity = 1;
    function animate() {
      cy -= 2.8;
      opacity -= 0.035;
      bubble.setAttribute("cy", cy);
      bubble.setAttribute("opacity", opacity);
      if (cy > 10 && opacity > 0) {
        requestAnimationFrame(animate);
      } else {
        svg.removeChild(bubble);
      }
    }
    animate();
  }
  card.onmouseenter = function() {
    bubbleInterval = setInterval(createBubble, 100);
  };
  card.onmouseleave = function() {
    clearInterval(bubbleInterval);
  };
});

// Contact section animated day/night background with wind, grass, sun/moon, shooting stars, airplane, and flying leaves

(function() {
  const canvas = document.querySelector('.contact-bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h;
  let mode = "day"; // "day" or "night"
  let lastSwitch = Date.now();
  let grassBlades = [];
  let leaves = [];
  let stars = [];
  let shootingStars = [];
  let plane = null;
  let wind = 0;

  function resize() {
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
    createGrass();
    createLeaves();
    createStars();
  }
  window.addEventListener('resize', resize);
  resize();

  function switchMode() {
    mode = (mode === "day") ? "night" : "day";
    lastSwitch = Date.now();
    if (mode === "night") createStars();
    if (mode === "day") createLeaves();
  }

  function createGrass() {
    grassBlades = [];
    let bladeCount = Math.floor(w / 10);
    for (let i = 0; i < bladeCount; i++) {
      grassBlades.push({
        x: i * (w / bladeCount),
        y: h - 40,
        h: 30 + Math.random() * 18,
        sway: Math.random() * Math.PI * 2,
        swaySpeed: 0.01 + Math.random() * 0.02
      });
    }
  }

  function createLeaves() {
    leaves = [];
    for (let i = 0; i < 8; i++) {
      leaves.push({
        x: Math.random() * w,
        y: h - 60 - Math.random() * 40,
        r: 8 + Math.random() * 8,
        angle: Math.random() * Math.PI * 2,
        speed: 1.2 + Math.random() * 1.2,
        sway: Math.random() * Math.PI * 2,
        swaySpeed: 0.02 + Math.random() * 0.03,
        color: `hsl(${90 + Math.random()*40},70%,60%)`
      });
    }
  }

  function createStars() {
    stars = [];
    for (let i = 0; i < 80; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h * 0.5,
        r: Math.random() * 1.2 + 0.3,
        o: Math.random() * 0.5 + 0.5
      });
    }
    shootingStars = [];
  }

  function drawSun() {
    const sunX = w * 0.82, sunY = h * 0.18, sunR = Math.min(w, h) * 0.08;
    ctx.save();
    ctx.globalAlpha = 0.8;
    ctx.beginPath();
    ctx.arc(sunX, sunY, sunR + 10, 0, Math.PI * 2);
    ctx.fillStyle = "#fffde7";
    ctx.shadowColor = "#fffde7";
    ctx.shadowBlur = 30;
    ctx.fill();
    ctx.restore();
    ctx.save();
    ctx.beginPath();
    ctx.arc(sunX, sunY, sunR, 0, Math.PI * 2);
    ctx.fillStyle = "#ffe066";
    ctx.shadowColor = "#ffe066";
    ctx.shadowBlur = 20;
    ctx.fill();
    ctx.restore();
  }

  function drawMoon() {
    const moonX = w * 0.82, moonY = h * 0.18, moonR = Math.min(w, h) * 0.08;
    ctx.save();
    ctx.globalAlpha = 0.7;
    ctx.beginPath();
    ctx.arc(moonX, moonY, moonR + 8, 0, Math.PI * 2);
    ctx.fillStyle = "#fffde7";
    ctx.shadowColor = "#fffde7";
    ctx.shadowBlur = 18;
    ctx.fill();
    ctx.restore();
    ctx.save();
    ctx.beginPath();
    ctx.arc(moonX, moonY, moonR, 0, Math.PI * 2);
    ctx.fillStyle = "#fffde7";
    ctx.shadowColor = "#fffde7";
    ctx.shadowBlur = 10;
    ctx.fill();
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(moonX + moonR * 0.5, moonY - moonR * 0.1, moonR * 0.9, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
    ctx.restore();
  }

  function drawGrass() {
    for (let blade of grassBlades) {
      let sway = Math.sin(Date.now() * blade.swaySpeed + blade.sway + wind) * 12;
      ctx.save();
      ctx.strokeStyle = "#4caf50";
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.moveTo(blade.x, blade.y);
      ctx.quadraticCurveTo(
        blade.x + sway * 0.5,
        blade.y - blade.h * 0.5,
        blade.x + sway,
        blade.y - blade.h
      );
      ctx.stroke();
      ctx.restore();
    }
    // Draw land
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0, h - 30);
    ctx.bezierCurveTo(w * 0.3, h - 60, w * 0.7, h - 10, w, h - 30);
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.closePath();
    ctx.fillStyle = "#81c784";
    ctx.shadowColor = "#388e3c";
    ctx.shadowBlur = 16;
    ctx.fill();
    ctx.restore();
  }

  function drawLeaves() {
    for (let leaf of leaves) {
      leaf.x += leaf.speed + Math.sin(Date.now() * 0.001 + leaf.sway) * 0.5;
      leaf.y -= Math.abs(Math.cos(Date.now() * 0.001 + leaf.sway)) * 0.3;
      leaf.angle += 0.03;
      leaf.sway += leaf.swaySpeed;
      if (leaf.x > w + 20) {
        leaf.x = -20;
        leaf.y = h - 60 - Math.random() * 40;
      }
      ctx.save();
      ctx.translate(leaf.x, leaf.y);
      ctx.rotate(Math.sin(leaf.angle) * 0.7);
      ctx.beginPath();
      ctx.ellipse(0, 0, leaf.r, leaf.r * 0.5, 0, 0, Math.PI * 2);
      ctx.fillStyle = leaf.color;
      ctx.shadowColor = "#388e3c";
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.restore();
    }
  }

  function drawStars() {
    for (let s of stars) {
      ctx.save();
      ctx.globalAlpha = s.o * (0.7 + 0.3 * Math.sin(Date.now() / 700 + s.x));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = "#fff";
      ctx.shadowColor = "#fff";
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.restore();
    }
  }

  function createShootingStar() {
    if (shootingStars.length < 2 && Math.random() < 0.01) {
      shootingStars.push({
        x: Math.random() * w * 0.7 + w * 0.2,
        y: Math.random() * h * 0.3 + 10,
        len: 80 + Math.random() * 40,
        speed: 8 + Math.random() * 4,
        angle: Math.PI / 4 + Math.random() * 0.2,
        alpha: 1
      });
    }
  }

  function drawShootingStars() {
    for (let i = shootingStars.length - 1; i >= 0; i--) {
      let s = shootingStars[i];
      ctx.save();
      ctx.globalAlpha = s.alpha;
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(
        s.x - Math.cos(s.angle) * s.len,
        s.y - Math.sin(s.angle) * s.len
      );
      ctx.shadowColor = "#fff";
      ctx.shadowBlur = 12;
      ctx.stroke();
      ctx.restore();
      s.x += Math.cos(s.angle) * s.speed;
      s.y += Math.sin(s.angle) * s.speed;
      s.alpha -= 0.02;
      if (s.alpha <= 0) shootingStars.splice(i, 1);
    }
  }

  function createPlane() {
    return {
      x: -60,
      y: h * 0.13 + Math.random() * h * 0.12,
      speed: 2.2 + Math.random() * 1.2,
      angle: -Math.PI / 16 + Math.random() * 0.1
    };
  }

  function drawPlane(plane) {
    ctx.save();
    ctx.translate(plane.x, plane.y);
    ctx.rotate(plane.angle);
    // Body
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(38, -4);
    ctx.lineTo(42, 0);
    ctx.lineTo(38, 4);
    ctx.lineTo(0, 0);
    ctx.fillStyle = "#e3e3e3";
    ctx.shadowColor = "#fff";
    ctx.shadowBlur = 6;
    ctx.fill();
    // Tail
    ctx.beginPath();
    ctx.moveTo(8, -2);
    ctx.lineTo(8, 2);
    ctx.lineTo(2, 0);
    ctx.closePath();
    ctx.fillStyle = "#b0bec5";
    ctx.fill();
    // Wing
    ctx.beginPath();
    ctx.moveTo(16, -1);
    ctx.lineTo(28, -8);
    ctx.lineTo(30, -7);
    ctx.lineTo(20, 0);
    ctx.closePath();
    ctx.fillStyle = "#90caf9";
    ctx.fill();
    // Window
    ctx.beginPath();
    ctx.arc(34, -1, 1.2, 0, Math.PI * 2);
    ctx.fillStyle = "#1976d2";
    ctx.fill();
    ctx.restore();
  }

  function animate() {
    // Switch day/night every 3 seconds
    if (Date.now() - lastSwitch > 3000) switchMode();

    // Wind effect for grass and leaves
    wind = Math.sin(Date.now() * 0.002) * 1.5;

    // Background
    if (mode === "day") {
      // Sky
      let grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, "#87ceeb");
      grad.addColorStop(1, "#b3e0ff");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Sun
      drawSun();

      // Land and grass
      drawGrass();

      // Wind-blown leaves
      drawLeaves();
    } else {
      // Night sky
      let grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, "#0a1647");
      grad.addColorStop(1, "#1a237e");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Stars
      drawStars();

      // Moon
      drawMoon();

      // Land silhouette
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, h - 30);
      ctx.bezierCurveTo(w * 0.3, h - 60, w * 0.7, h - 10, w, h - 30);
      ctx.lineTo(w, h);
      ctx.lineTo(0, h);
      ctx.closePath();
      ctx.fillStyle = "#263238";
      ctx.shadowColor = "#111";
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.restore();

      // Shooting stars
      createShootingStar();
      drawShootingStars();
    }

    // Airplane for both modes
    if (!plane || plane.x > w + 60) plane = createPlane();
    plane.x += plane.speed;
    drawPlane(plane);

    // Add or update this inside your contact section animation IIFE
    function setContactTheme(mode) {
      const section = document.querySelector('.contact-section');
      if (!section) return;
      section.classList.remove('day', 'night');
      section.classList.add(mode);
    }

    // In your animate() function, after switching mode:
    setContactTheme(mode);

    requestAnimationFrame(animate);
  }

  animate();
  window.addEventListener('resize', resize);
})();

// Node network animation for home section
(function() {
  const canvas = document.getElementById('nodes-bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;
  let nodes = [];
  const NODE_COUNT = 20;
  const MAX_RADIUS = 10;
  const MIN_RADIUS = 6;
  const CONNECT_DIST = 200;

  function resize() {
    const homeSection = document.querySelector('.home');
    width = canvas.width = homeSection.offsetWidth;
    height = canvas.height = homeSection.offsetHeight;
  }

  function randomNode() {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      r: MIN_RADIUS + Math.random() * (MAX_RADIUS - MIN_RADIUS),
      grow: Math.random() > 0.5 ? 1 : -1
    };
  }

  function createNodes() {
    nodes = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push(randomNode());
    }
  }

  function updateNodes() {
    for (let node of nodes) {
      node.x += node.vx;
      node.y += node.vy;
      node.r += node.grow * 0.03;
      if (node.r > MAX_RADIUS || node.r < MIN_RADIUS) node.grow *= -1;
      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;
    }
  }

  function drawNodes() {
    ctx.clearRect(0, 0, width, height);
    // Draw connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        let dx = nodes[i].x - nodes[j].x;
        let dy = nodes[i].y - nodes[j].y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECT_DIST) {
          ctx.save();
          ctx.globalAlpha = 1 - dist / CONNECT_DIST;
          ctx.strokeStyle = '#2196f3';
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }
    // Draw nodes
    for (let node of nodes) {
      ctx.save();
      ctx.globalAlpha = 0.85;
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
      ctx.fillStyle = '#2196f3';
      ctx.shadowColor = '#6ec6ff';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.restore();
    }
  }

  function animate() {
    updateNodes();
    drawNodes();
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', () => {
    resize();
    createNodes();
  });

  // Initialize
  setTimeout(() => {
    resize();
    createNodes();
    animate();
  }, 10);
})();

// Add this to your JS (after DOM is ready) for interactive 3D tilt effect
document.querySelectorAll('.tilt-card').forEach(card => {
  card.addEventListener('mousemove', function(e) {
    const img = card.querySelector('img');
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;
    const rotateX = (-y / (rect.height/2)) * 12;
    const rotateY = (x / (rect.width/2)) * 12;
    img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
  });
  card.addEventListener('mouseleave', function() {
    const img = card.querySelector('img');
    img.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  });
});

  // Activate tilt effect on art cards
  VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.18,
    scale: 1.05
  });

  // Tab switching logic for gallery (for accessibility/fallback)
// Activate tilt effect on art cards
  VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.18,
    scale: 1.05
  });

  // Tab switching logic for gallery (for accessibility/fallback)
  document.querySelectorAll('.tabs input[type="radio"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
      document.querySelectorAll('.tab-gallery').forEach(function(gallery) {
        gallery.style.display = 'none';
      });
      if (radio.id === 'tab-upcoming') {
        document.querySelector('.tab-gallery-upcoming').style.display = 'flex';
      } else if (radio.id === 'tab-development') {
        document.querySelector('.tab-gallery-development').style.display = 'flex';
      } else if (radio.id === 'tab-completed') {
        document.querySelector('.tab-gallery-completed').style.display = 'flex';
      }
    });
  });
  // Show only the active tab on load
  window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.tab-gallery').forEach(function(gallery) {
      gallery.style.display = 'none';
    });
    if(document.getElementById('tab-upcoming').checked) {
      document.querySelector('.tab-gallery-upcoming').style.display = 'flex';
    } else if(document.getElementById('tab-development').checked) {
      document.querySelector('.tab-gallery-development').style.display = 'flex';
    } else if(document.getElementById('tab-completed').checked) {
      document.querySelector('.tab-gallery-completed').style.display = 'flex';
    }
  });
  // Place before </body>
  document.addEventListener("DOMContentLoaded", function() {
    var video = document.querySelector('.work .video-bg');
    if(video) video.playbackRate = 2.0; // 2x speed, adjust as needed
  });
// Add this script to trigger magic stars on click
document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById('magicGetMore');
  const starsContainer = document.getElementById('magicStars');
  btn.addEventListener('click', function(e) {
    starsContainer.innerHTML = '';
    starsContainer.style.display = 'block';
    // Generate 8 stars at random positions
    for(let i=0; i<8; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = (40 + Math.random()*40) + '%';
      star.style.top = (40 + Math.random()*20) + '%';
      star.style.animationDelay = (Math.random() * 0.2) + 's';
      starsContainer.appendChild(star);
    }
    setTimeout(() => {
      starsContainer.style.display = 'none';
      starsContainer.innerHTML = '';
    }, 900);
  });
});

// Magic star burst animation for Get More button
document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById('magicGetMore');
  const starsContainer = document.getElementById('magicStars');
  if (!btn || !starsContainer) return;

  // Ensure starsContainer is positioned over the button
  starsContainer.style.position = 'absolute';
  starsContainer.style.top = '50%';
  starsContainer.style.left = '50%';
  starsContainer.style.transform = 'translate(-50%, -50%)';
  starsContainer.style.width = btn.offsetWidth + 'px';
  starsContainer.style.height = btn.offsetHeight + 'px';
  starsContainer.style.pointerEvents = 'none';

  btn.addEventListener('click', function(e) {
    starsContainer.innerHTML = '';
    starsContainer.style.display = 'block';

    const btnRect = btn.getBoundingClientRect();
    const starCount = 12;
    const radius = btn.offsetWidth * 0.9; // distance stars travel

    for (let i = 0; i < starCount; i++) {
      const angle = (2 * Math.PI / starCount) * i;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      const star = document.createElement('div');
      star.className = 'star';
      star.style.position = 'absolute';
      star.style.left = '50%';
      star.style.top = '50%';
      star.style.width = '12px';
      star.style.height = '12px';
      star.style.background = 'radial-gradient(circle, #fff 60%, #ffd600 100%)';
      star.style.borderRadius = '50%';
      star.style.opacity = '0';
      star.style.pointerEvents = 'none';
      star.style.transform = 'translate(-50%, -50%) scale(0.5)';
      star.style.animation = `star-burst 0.8s cubic-bezier(.22,1,.36,1) forwards`;
      star.style.animationDelay = (Math.random() * 0.1) + 's';

      // Custom property for keyframes
      star.style.setProperty('--star-x', `${x}px`);
      star.style.setProperty('--star-y', `${y}px`);

      starsContainer.appendChild(star);
    }

    setTimeout(() => {
      starsContainer.style.display = 'none';
      starsContainer.innerHTML = '';
    }, 900);
  });
});
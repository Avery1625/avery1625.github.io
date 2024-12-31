function random(min, max) {
    return min + Math.random() * (max - min);
  }
function random_int(min,max) {
    return Math.floor(Math. random() * (max-min + 1) + min);
}
const body = document.querySelector('body'); //god i hate java wtf are curly braces
const snatched = body.offsetWidth*body.offsetHeight;
const starnum=Math.floor(snatched/2000);

// function clear(id)  //clears things
// {
//     document.getElementById(elementID).innerHTML = "";
// }
// const star = document.createElement('div');
// star.style.position = 'relative';
// star.style.left = 5 + '%';
// star.style.top = 14 + '%';
// star.style.opacity = .7;
// star.style.width = 17 + 'px';
// star.style.height = 17 + 'px';
// star.style.backgroundColor = '#ffffff';
// document.body.appendChild(star);

body.style.position = 'relative';
body.style.overflow = 'hidden';
for (let i=0; i<starnum; i++){
    let x=random(0,100);
    let y=random(0,100);
    let o_pac=random(0.5,1);  // u should listen to 2pac
    let size = random(1, 3);
    let color = '#ffffff';

    const star = document.createElement('div');
    star.style.position = 'absolute';
    star.style.left = x + '%';
    star.style.top = y + '%';
    star.style.opacity = o_pac;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.backgroundColor = color;
    star.style.borderRadius = '50%';

    document.body.appendChild(star);
}

const images = document.querySelectorAll('#hat img, #hoco img, .pic img');
let angle = 0;
let direction = 1;
setInterval(() => {
    angle += direction; 
    images.forEach((img) => {
        img.style.transform = `rotate(${angle}deg)`;
    });
    if (angle >= 15 || angle <= -15) {
        direction *= -1; 
    }
}, 60);

const canvas = document.getElementById('confettiCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const confettiParticles = [];
let isAnimating = false;
class confit{
    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.velocityX = (Math.random() - 0.5) * 8;
        this.velocityY = Math.random() * 8 + 2;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.08;
    }
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
    }

    update() {
        this.x += this.velocityX;
        this.y += this.velocityY;
        this.rotation += this.rotationSpeed;

        if (this.y > canvas.height) {
            this.y = -this.size;
            this.x = Math.random() * canvas.width;
        }
    }
}
const colors=['#9348f4','#e948f4', '#f448a9', '#f44853', '#f49348', '#f4e948'];
function make_confetti(){
    const color=colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 10 + 5;
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    confettiParticles.push(new confit(x, y, size, color));

}
function animate() {
    if (!isAnimating) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiParticles.forEach((particle) => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animate);
}
function confetti(duration){ 
    if(isAnimating) return;
    isAnimating=true;
    for (let i=0; i<150; i++) {
    make_confetti();
    }
    animate();
    setTimeout(() => {
        isAnimating = false; 
        confettiParticles.length = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const justine = document.getElementById('nameofthegame');
        justine.style.display='none';

        const button = document.querySelector(".button");
        button.style.display = "none";
        
        const letter=document.getElementById('letter');
        letter.style.display='inline-block';
        // clear(confettiParticles);  // i hate semicolons gimme python rn
    }, duration);
}

document.querySelector(".button").addEventListener("click", function () {
    confetti(3000);
    console.log("Button clicked!");
});
    // document.getElementById("letter").opacity=.8;

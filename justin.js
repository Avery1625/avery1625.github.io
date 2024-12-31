function random(min, max) {
    return min + Math.random() * (max - min);
  }
const body = document.querySelector('body');
const snatched = body.offsetWidth*body.offsetHeight;
const starnum=Math.floor(snatched/2000);


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

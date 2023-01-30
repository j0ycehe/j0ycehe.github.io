const sheepBody = document.getElementById('body');
const sheepHidden = document.querySelectorAll('.invisible');
const insides = document.getElementById('insides');
const about = document.getElementById('about');
const work = document.getElementById('work');
const sheep = document.getElementById('sheep');

// Related to clicking words in sheep

sheepBody.addEventListener("click", (event) => {
    sheepHidden.forEach(x => x.classList.toggle('invisible'));

    if (aboutNav.classList.contains('clicked') || workNav.classList.contains('clicked')) {
        hint.textContent = "So that's where the words went!";
    }
});

insides.addEventListener("click", (event) => {
    sheepHidden.forEach(x => x.classList.add('invisible'));
});

about.addEventListener("mouseover", (e) => {
    document.body.style.background = "#B51E5B";
    insides.style.fill = "#B51E5B";
    nav.style.fill = "#89194C";
});

about.addEventListener("mouseout", (e) => {
    insides.style.fill = "silver";
    document.body.style.background = "#D9D9D9";
    nav.style.fill = "silver";
});

work.addEventListener("mouseover", (e) => {
    document.body.style.background = "#01BE58";
    insides.style.fill = "#01BE58";
    nav.style.fill = "#079C4C";
});

work.addEventListener("mouseout", (e) => {
    insides.style.fill = "silver";
    document.body.style.background = "#D9D9D9";
    nav.style.fill = "silver";
});

// Related to pointer

const pointer = document.getElementById('pointer');
const onMouseMove = (e) =>{
  pointer.style.left = e.pageX + -25 + 'px';
  pointer.style.top = e.pageY + -25 + 'px';
}
document.addEventListener('mousemove', onMouseMove);

const rotatePointer = (e) => {
    let sheepWidth = sheep.getBoundingClientRect().width;
    let sheepCenterX = getOffset(sheep).left + sheepWidth / 2;
    let sheepHeight = sheep.getBoundingClientRect().height;
    let sheepCenterY = getOffset(sheep).top + sheepHeight / 2;
    let rad = Math.atan2(e.pageX - sheepCenterX, e.pageY - sheepCenterY);
    let rot = (rad * (180 / Math.PI) * -1) + 90;
    pointer.style.transform = "rotate(" + rot + "deg)"
}

document.addEventListener('mousemove', rotatePointer);


function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
}



// var cumulativeOffset = function(element) {
//     var top = 0, left = 0;
//     do {
//         top += element.offsetTop  || 0;
//         left += element.offsetLeft || 0;
//         element = element.offsetParent;
//     } while(element);

//     return {
//         top: top,
//         left: left
//     };
// };

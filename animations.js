
setTimeout(function () {
            let windowWidth = window.innerWidth;
            let mainDescript = document.querySelector(".main-description");
            mainDescript.classList.add("main-description-in");
            }, 500);


//update hr lengths
let sub_positions = document.getElementsByClassName("sub-position");
let description_width = document.getElementsByClassName("job-description")[0].offsetWidth - 180;
for (let i=0; i < sub_positions.length; i++) {
    let subpos = sub_positions[i];
    let subpos_title = subpos.children[0];
    let subpos_hr = subpos.children[1];
    let subpos_date = subpos.children[2];
    let total_offset = description_width - (subpos_title.offsetWidth + subpos_date.offsetWidth);
    subpos_hr.style.width = total_offset - 20 + "px";
}

// animations for fading in on scroll
document.addEventListener("scroll", function() {
    let cur_pos = document.documentElement.scrollTop;
    let window_bottom = cur_pos + window.innerHeight;
    let fadeInElements = document.getElementsByClassName("fadeOnScroll");
    for (let ele of fadeInElements) {
        let fadePadding = 20;
        if(window_bottom > (ele.offsetTop + ele.offsetHeight + fadePadding)) {
            if (ele.classList.value.includes("fadeFromLeft") )
                ele.classList.add("fadingLeft");
            else if (ele.classList.value.includes("fadeFromRight"))
                ele.classList.add("fadingRight");
            else   // fade up by default
                ele.classList.add("fadingUp");
        }
    }
});

// dropdown speed for job toggle
let job_descriptions = document.getElementsByClassName("job-description");
for (let job of job_descriptions) {
    let job_height = job.scrollHeight;
    let transition_time = 0.2 * (job_height/300);
    job.style.transition = `height ${transition_time}s ease-out, opacity 0.6s ease-out`;
}






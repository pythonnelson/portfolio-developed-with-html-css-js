let menu = document.querySelector('.menu-icon');

menu.onclick = () => {
    menu.classList.toggle("move");
}

// Review Swiper
var swiper = new Swiper(".reviews-content", {
    // slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      clickable: true,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  });


//   Email JS, uncomment the below code
function validate() {
    let fname = document.querySelector('.fname');
    let email = document.querySelector('.email');
    let message = document.querySelector('.message');
    let sendBtn = document.querySelector('.send-btn');

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (fname.value == "" || email.value == "" || message.value == ""){
            emptyerror();
        }else{
            sendmail (fname.value, email.value, message.value);
            success();
        }
    })
}
validate();

// function to send email
function sendmail(fname, email, message){
    emailjs.send("your-emailjs-api-id", "emailjs-template-name",{
        from_name: email,
        to_name: fname,
        message: message,
    });
}

// Sweet alert popup for error message
function emptyerror(){
    swal({
        title: "Sorry!!!!!!!",
        text: "All fields are required please!",
        icon: "error",
    });
}

// Sweet alert popup for success message
function success(){
    swal({
        title: "Success",
        text: "Thanks for sending me, i have sent your message.",
        icon: "success",
    });
}

// Header Background change on scroll
let header = document.querySelector('header')

window.addEventListener('scroll', () => {
    header.classList.toggle('header-active', window.scrollY > 0);
});

// Scroll to top
let scrollTop = document.querySelector('.scroll-top')

window.addEventListener('scroll', () => {
    scrollTop.classList.toggle('scroll-active', window.scrollY >= 400);
});


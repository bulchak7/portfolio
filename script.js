document.querySelectorAll('.sidebar nav ul li a').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({behavior:'smooth'});
    });
});

document.getElementById('contact-form').addEventListener('submit', function(e){
    e.preventDefault();
    emailjs.sendForm('service_dx5ma6j','template_dehs94t',this)
    .then(() => {
        document.getElementById('contact-status').textContent = 'Message Sent!';
        this.reset();
    }, (error) => {
        document.getElementById('contact-status').textContent = 'Failed to send message.';
        console.log(error);
    });
});

// Emailjs code
// import{ init } from 'emailjs-com';
// init("user_WC7Xvrlt9xmn9gWVYMbBV");

(function(){
   emailjs.init("user_000000000000000000");
})();

window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // generate a five digit number for the contact_number variable
    this.contact_number.value = Math.random() * 100000 | 0;
    // these IDs from the previous steps
    emailjs.sendForm('service_buwap2b', 'contact_form', this, 'user_WC7Xvrlt9xmn9gWVYMbBV')
      .then(function() {
          console.log('SUCCESS!');
          success();
      }, function(error) {
          failure();
          console.log('FAILED...', error);
      });
    });
}

// Success message
function success() {
  const form = document.querySelector("#contact-form");
  const senderName = document.querySelector("#sender_name");
  const firstName = senderName.value.split(" ")[0];
  form.style.marginTop = "50px";
  form.style.height = "485px";
  form.innerHTML = "<h2>Thank's for your interest, " + firstName + ". Keep an eye out for your quote in an email.</h2>";
}
function failure() {
  const form = document.querySelector("#contact-form");
  const senderName = document.querySelector("#sender_name");
  const firstName = senderName.value.split(" ")[0];
  form.style.marginTop = "50px";
  form.innerHTML = "<h2>Sorry, " + firstName + ". It seems that didn't go through. Send me a message at <a style='color: var(--white); text-decoration: underline;' href='mailto:mkdevsolutions@gmail.com'>mkdevsolutions@gmial.com</a></h2>";
}

let fullName = document.querySelector(".fname");
let email = document.querySelector(".email");
let subject = document.querySelector(".subject");
let message = document.querySelector(".message");
const form = document.querySelector("#item__form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!fullName.value && !email.value && !message.value) {
    showAlert("error", "All fields are required");
  } else if (!fullName.value) {
    showAlert("error", "Please input your full name");
  } else if (!email.value) {
    showAlert("error", "Please input a valid email");
  } else if (!subject.value) {
    showAlert("error", "Please input subject");
  } else if (!message.value) {
    showAlert("error", "Please input your message");
  } else {
    // Send email here
    const receipientEmail = "abeebayinla@gmail.com";
    const receipientPassword = "";

    Email.send({
      Host: "smtp.gmail.com",
      Username: `${email.value}`,
      Password: `${receipientPassword}`,
      To: `<${receipientEmail}>`,
      From: `${email.value}`,
      Subject: `${subject.value}`,
      Body: `${message.value}`,
    }).then((newMail) =>
      showAlert("success", "Your message has been submitted successfully")
    );

    fullName.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
  }
});

const hideAlert = () => {
  const el = document.querySelector(".alert");
  if (el) {
    el.parentElement.removeChild(el);
  }
};

// type is success or error
const showAlert = (type, message) => {
  hideAlert();
  const markup = `<div class="alert alert--${type}">${message}</div>`;
  document.querySelector("body").insertAdjacentHTML("afterbegin", markup);
  setTimeout(hideAlert, 3000);
};

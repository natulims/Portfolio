const btn = document.getElementById("submit");
form.addEventListener("click", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  // let body = `${name} <br/> ${lastname} <br/> ${email} <br/> ${subject} <br/>`;
  let body =
    "name: " + name + "<br/> email: " + email + "<br/> message: " + message;
  email.send({
      Host: "smtp.gmail.com",
      Username: "nxtxlix.lc@gmail.com",
      Password: "nxuhqjuoclopmzii",
      To: "nxtxlix.lc@gmail.com",
      From: email,
      Body: body,
    })
    .then((message) => alert(message));
});

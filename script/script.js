// submit form submision

document.getElementById("button").onclick = function submitData() {
  let name = document.getElementById("input-name").value;
  let email = document.getElementById("input-email").value;
  let phoneNumber = document.getElementById("input-number").value;
  let subject = document.getElementById("input-subject").value;
  let message = document.getElementById("input-message").value;

  if (name == "") {
    alert("Name can't null!");
  } else if (email == "") {
    alert("Email can't null!");
  } else if (phoneNumber == "") {
    alert("Phone number can't null!");
  } else if (subject == "") {
    alert("Subject can't null!");
  } else if (message == "") {
    alert("Message can't null!");
  }

  console.log(name);
  console.log(email);
  console.log(phoneNumber);
  console.log(subject);
  console.log(message);

  let emailReceiver = "ccngkremi1@gmail.com";

  let a = document.createElement("a");
  a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo, nama saya ${name}, ${message}. Silakan kontak ke nomer ${phoneNumber}`;
  a.click();

  let emailer = {
    name,
    email,
    phoneNumber,
    subject,
    message,
  };

  console.log(emailer);
};

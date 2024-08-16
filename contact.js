const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  // console.log(formData.get("firstname"));

  const fname = formData.get("firstname");
  const lname = formData.get("lastname");
  const eml = formData.get("email_acc");
  const qt = formData.get("radio");
  const msg = formData.get("textarea_msg");
  const chck = formData.get("chck");

  if (
    fname === "" ||
    fname === null ||
    lname === "" ||
    lname === null ||
    eml === "" ||
    eml === null ||
    qt === "" ||
    qt === null ||
    msg === "" ||
    msg === null ||
    chck === "" ||
    chck === null
  ) {
    //show error
    console.log("error");
  } else {
    //show success
    console.log("success");
    //show value user input
    document.getElementById("output1").innerHTML = fname;
    document.getElementById("output2").innerHTML = lname;
    document.getElementById("output3").innerHTML = eml;
    document.getElementById("output4").innerHTML = qt;
    document.getElementById("output5").innerHTML = msg;
    document.getElementById("output6").innerHTML = chck;
  }

  //console
  // const data = new URLSearchParams(formData);

  // fetch("https://reqres.in/api/users", {
  //   method: "POST",
  //   body: data,
  // })
  //   .then((res) => res.json())
  //   .then((data) => console.log(data))
  //   .catch((error) => console.log(error));
  validinput();
});

const firstname = document.getElementById("fn_input");
const lastname = document.getElementById("ln_input");
const email = document.getElementById("eml_input");
const message = document.getElementById("Msg_input");

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const validinput = () => {
  const fnvalue = firstname.value.trim();
  const lnvalue = lastname.value.trim();
  const eml = email.value.trim();
  const msg = message.value.trim();

  if (fnvalue === "") {
    setError(firstname, "First name is Required");
  } else {
    setSuccess(firstname);
  }

  if (lnvalue === "") {
    setError(lastname, "last name is Required");
  } else {
    setSuccess(lastname);
  }

  if (eml === "") {
    setError(email, "Email is Required");
  } else {
    setSuccess(email);
  }
  if (msg === "") {
    setError(message, "Message is Required");
  } else {
    setSuccess(message);
  }
};
/* for switch color background */
let body = document.querySelector("body");
let isToggled = false;

body.onclick = () => {
  isToggled = !isToggled;
  body.style.setProperty("--value", isToggled ? "gray" : "lightblue");
};
/* for switch color background */

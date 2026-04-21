const customerForm = document.getElementById("customerForm");
const formMessage = document.getElementById("formMessage");

const validators = {
  fullName: (value) => /^[A-Za-z\s]{3,}$/.test(value.trim()),
  email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
  phone: (value) => /^\d{10}$/.test(value.replace(/\D/g, "")),
  coffeeChoice: (value) => value.trim() !== ""
};

if (customerForm && formMessage) {
  customerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(customerForm);
    let formIsValid = true;

    ["fullName", "email", "phone", "coffeeChoice"].forEach((field) => {
      const input = customerForm.elements[field];
      const value = (formData.get(field) || "").toString();
      const isValid = validators[field](value);

      if (!isValid) {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        formIsValid = false;
      } else {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
      }
    });

    formMessage.classList.remove("d-none", "alert-success", "alert-danger");

    if (formIsValid) {
      formMessage.classList.add("alert", "alert-success");
      formMessage.textContent = "Valid data! Your information has been accepted.";
      customerForm.reset();
      Array.from(customerForm.elements).forEach((field) => field.classList?.remove("is-valid"));
      return;
    }

    formMessage.classList.add("alert", "alert-danger");
    formMessage.textContent = "Some fields are invalid. Please correct and submit again.";
  });
}
// <!-- Boostrap form validation JS part, keeping this in boilerTemplate -->

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // any custom file inputs on the page this code is initalized with some JS with some basics JS functionality
  // bsCustomFileInput.init();

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".validated-form");

  // Loop over them and prevent submission
  Array.from(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

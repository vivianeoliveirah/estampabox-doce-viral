const CHECKOUT_URL = "";
const modal = document.querySelector("#checkout-modal");
const close = document.querySelector(".modal-close");

document.querySelectorAll(".js-checkout").forEach((button) => {
  button.addEventListener("click", () => {
    if (CHECKOUT_URL) {
      window.location.href = CHECKOUT_URL;
      return;
    }
    modal.hidden = false;
    close.focus();
  });
});

close.addEventListener("click", () => { modal.hidden = true; });
modal.addEventListener("click", (event) => { if (event.target === modal) modal.hidden = true; });
document.addEventListener("keydown", (event) => { if (event.key === "Escape") modal.hidden = true; });

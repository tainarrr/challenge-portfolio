document
  .getElementById("formulario-contato")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const form = e.target;
    const mensagemStatus = document.getElementById("mensagem-status");

    mensagemStatus.style.display = "block";
    mensagemStatus.textContent = "Enviando sua mensagem...";

    setTimeout(() => {
      form.submit();
    }, 2000);
  });

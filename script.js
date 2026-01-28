document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("deudaForm");
  const lista = document.getElementById("listaDeudas");

  let deudas = JSON.parse(localStorage.getItem("deudas")) || [];

  function render() {
    lista.innerHTML = "";
    deudas.forEach((d, i) => {
      const li = document.createElement("li");
      li.textContent = `${d.nombre} - $${d.monto}`;
      lista.appendChild(li);
    });
  }

  form.addEventListener("submit", e => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const monto = document.getElementById("monto").value;

    deudas.push({ nombre, monto });
    localStorage.setItem("deudas", JSON.stringify(deudas));

    form.reset();
    render();
  });

  render();
});

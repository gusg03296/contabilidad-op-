<script>
/* ============================
   CONTABILIDAD OP - SCRIPT
   ============================ */

/* Cargar deudas guardadas */
let deudas = JSON.parse(localStorage.getItem("deudas")) || [];
render();

/* Guardar nueva deuda */
function guardarDeuda() {
  const cliente = document.getElementById("cliente").value.trim();
  const monto = document.getElementById("monto").value;
  const tipo = document.getElementById("tipo").value;

  if (!cliente || !monto || !tipo) {
    alert("Completa todos los campos");
    return;
  }

  const deuda = {
    cliente: cliente,
    monto: parseFloat(monto),
    tipo: tipo,
    fecha: new Date().toLocaleDateString("es-MX")
  };

  deudas.push(deuda);
  localStorage.setItem("deudas", JSON.stringify(deudas));

  limpiarFormulario();
  render();
}

/* Mostrar deudas */
function render() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  if (deudas.length === 0) {
    lista.innerHTML = "<li>No hay deudas registradas</li>";
    return;
  }

  deudas.forEach((d, i) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${d.cliente}</strong><br>
      💰 $${d.monto.toFixed(2)}<br>
      📌 ${d.tipo}<br>
      📅 ${d.fecha}
      <br><br>
      <button onclick="eliminarDeuda(${i})">❌ Eliminar</button>
    `;
    lista.appendChild(li);
  });
}

/* Eliminar deuda */
function eliminarDeuda(index) {
  if (!confirm("¿Eliminar esta deuda?")) return;
  deudas.splice(index, 1);
  localStorage.setItem("deudas", JSON.stringify(deudas));
  render();
}

/* Limpiar formulario */
function limpiarFormulario() {
  document.getElementById("cliente").value = "";
  document.getElementById("monto").value = "";
  document.getElementById("tipo").value = "";
}

/* Borrar TODO (modo admin) */
function borrarTodo() {
  if (!confirm("¿Borrar TODAS las deudas?")) return;
  localStorage.removeItem("deudas");
  deudas = [];
  render();
}

/* Calcular total */
function totalDeudas() {
  let total = 0;
  deudas.forEach(d => total += d.monto);
  alert("Total adeudado: $" + total.toFixed(2));
}
</script>

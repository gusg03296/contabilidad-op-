function guardarDeuda() {
  const nombre = document.getElementById("cliente").value;
  const monto = document.getElementById("monto").value;

  if (nombre === "" || monto === "") {
    alert("Completa todos los campos");
    return;
  }

  alert("Deuda guardada correctamente ✅");
}

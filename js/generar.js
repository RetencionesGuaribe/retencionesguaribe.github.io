// Función para calcular el IVA y generar el comprobante
function calcularYGenerarComprobante() {
    const baseImponible = parseFloat(document.getElementById('base-imponible').value) || 0;
    const exento = parseFloat(document.getElementById('exento').value) || 0;
    const iva = (baseImponible - exento) * 0.16; // Suponiendo un IVA del 16%

    // Almacenar el IVA en localStorage
    localStorage.setItem('iva', iva.toFixed(2));

    // Redirigir al comprobante
    window.location.href = 'comprobante.html'; // Cambia a la ruta de tu comprobante
}

// Asignar la función al evento de envío del formulario
document.getElementById("comprobante-form").addEventListener("submit", function(event) {
    event.preventDefault();
    calcularYGenerarComprobante();
});

// Función para actualizar datos del proveedor y calcular valores
function updateProveedorData() {
    const proveedorSelect = document.getElementById('proveedor');
    const selectedOption = proveedorSelect.options[proveedorSelect.selectedIndex];
    document.getElementById('rif').value = selectedOption.getAttribute('data-rif');
    document.getElementById('retencion').value = selectedOption.getAttribute('data-retencion');
    calculateValues(); // Recalcular cuando se selecciona un proveedor
}

// Función para calcular valores de IVA, Total Factura y Retención
function calculateValues() {
    const baseImponible = parseFloat(document.getElementById('base-imponible').value) || 0;
    const exento = parseFloat(document.getElementById('exento').value) || 0;
    const iva = (baseImponible - exento) * 0.16; // Suponiendo un IVA del 16%
    const totalFactura = baseImponible + iva;
    const retencion = parseFloat(document.getElementById('retencion').value) || 0;
    const ivaRetenido = iva * (retencion / 100);

    // Actualizar los resúmenes
    document.getElementById('iva-summary').innerText = iva.toFixed(2);
    document.getElementById('total-factura-summary').innerText = totalFactura.toFixed(2);
    document.getElementById('iva-retenido-summary').innerText = ivaRetenido.toFixed(2);
}

// Inicializar event listeners
document.getElementById('proveedor').addEventListener('change', updateProveedorData);
document.getElementById('base-imponible').addEventListener('input', calculateValues);
document.getElementById('exento').addEventListener('input', calculateValues);
document.getElementById('retencion').addEventListener('change', calculateValues);

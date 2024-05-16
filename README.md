<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Presupuesto Campañas Publicitarias</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Presupuesto Campañas Publicitarias</h1>
        <label for="company-name">Nombre de la Empresa:</label>
        <input type="text" id="company-name" placeholder="Nombre de la Empresa">
        <div id="item-form">
            <select id="preset-items">
                <option value="" disabled selected>Selecciona un ítem</option>
                <option value="Diseño de estrategia publicitaria">Diseño de estrategia publicitaria</option>
                <option value="Publicidad en redes sociales">Publicidad en redes sociales</option>
                <option value="Publicidad en Google">Publicidad en Google</option>
                <option value="Diseño gráfico">Diseño gráfico</option>
                <option value="Producción de video">Producción de video</option>
                <option value="Email marketing">Email marketing</option>
                <option value="Publicidad en televisión">Publicidad en televisión</option>
                <option value="Publicidad en radio">Publicidad en radio</option>
                <option value="Publicidad en periódicos">Publicidad en periódicos</option>
                <option value="Publicidad en revistas">Publicidad en revistas</option>
                <option value="Publicidad exterior (vallas, banners)">Publicidad exterior (vallas, banners)</option>
            </select>
            <input type="text" id="custom-category" placeholder="Categoría personalizada">
            <input type="number" id="item-quantity" placeholder="Cantidad">
            <input type="number" id="item-cost" placeholder="Precio Unitario">
            <button id="add-item">Agregar Ítem</button>
        </div>
        <table id="item-table">
            <thead>
                <tr>
                    <th>Ítem</th>
                    <th>Cantidad</th>
                    <th>Precio Unitario</th>
                    <th>Precio Total</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody id="item-list">
                <!-- Lista de ítems agregados aparecerá aquí -->
            </tbody>
        </table>
        <div id="total-container">
            <h2>Total: $<span id="total-cost">0</span></h2>
            <div>
                <label for="iva-percentage">IVA (%): </label>
                <input type="number" id="iva-percentage" placeholder="0" min="0">
            </div>
            <h2>Total con IVA: $<span id="total-cost-iva">0</span></h2>
        </div>
        <button id="download-pdf">Descargar PDF</button>
    </div>
    <!-- Incluir las bibliotecas -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.17.4/xlsx.full.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.min.js"></script>
    <script src="script.js"></script>
</body>
</html>
# Presupuesto-Campanas

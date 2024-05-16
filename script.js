document.addEventListener("DOMContentLoaded", function() {
    // Variables
    const companyNameInput = document.getElementById("company-name");
    const presetItemsSelect = document.getElementById("preset-items");
    const customCategoryInput = document.getElementById("custom-category");
    const itemQuantityInput = document.getElementById("item-quantity");
    const itemCostInput = document.getElementById("item-cost");
    const addItemButton = document.getElementById("add-item");
    const itemList = document.getElementById("item-list");
    const totalCostSpan = document.getElementById("total-cost");
    const ivaPercentageInput = document.getElementById("iva-percentage");
    const totalCostIvaSpan = document.getElementById("total-cost-iva");
    const downloadPdfButton = document.getElementById("download-pdf");

    // Event Listeners
    addItemButton.addEventListener("click", addItem);
    ivaPercentageInput.addEventListener("input", calculateTotalWithIva);
    downloadPdfButton.addEventListener("click", downloadPdf);

    // Functions
    function addItem() {
        const itemName = presetItemsSelect.value || customCategoryInput.value || "Personalizado";
        const itemQuantity = parseInt(itemQuantityInput.value) || 0;
        const itemCost = parseFloat(itemCostInput.value) || 0;
        const totalPrice = itemQuantity * itemCost;

        if (itemQuantity <= 0 || itemCost <= 0) {
            alert("Por favor, introduce una cantidad y un precio válidos.");
            return;
        }

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${itemName}</td>
            <td>${itemQuantity}</td>
            <td>$${itemCost.toFixed(2)}</td>
            <td>$${totalPrice.toFixed(2)}</td>
            <td><button class="delete-btn">Eliminar</button></td>
        `;
        itemList.appendChild(row);

        totalCostSpan.textContent = (parseFloat(totalCostSpan.textContent) + totalPrice).toFixed(2);
        calculateTotalWithIva();

        // Limpiar los campos de entrada
        customCategoryInput.value = "";
        itemQuantityInput.value = "";
        itemCostInput.value = "";

        // Restablecer el menú de selección de ítems
        presetItemsSelect.selectedIndex = 0;

        // Eliminar ítem
        row.querySelector(".delete-btn").addEventListener("click", function() {
            itemList.removeChild(row);
            totalCostSpan.textContent = (parseFloat(totalCostSpan.textContent) - totalPrice).toFixed(2);
            calculateTotalWithIva();
        });
    }

    function calculateTotalWithIva() {
        const ivaPercentage = parseFloat(ivaPercentageInput.value) || 0;
        const totalCost = parseFloat(totalCostSpan.textContent);

        const totalWithIva = totalCost * (1 + ivaPercentage / 100);
        totalCostIvaSpan.textContent = totalWithIva.toFixed(2);
    }

    function downloadPdf() {
        const htmlElement = document.querySelector(".container");
        
        html2pdf(htmlElement, {
            margin: 1,
            filename: 'documento.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { dpi: 192, letterRendering: true },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        }).save();
    }
});

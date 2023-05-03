document.getElementById("go_button").addEventListener("click", async () => {
    const inputAmountValue = document.getElementById("input_amount").value;
    const cleanInputAmountValue = inputAmountValue.replace('$', '');
    const inputAmount = parseFloat(cleanInputAmountValue);

    if (isNaN(inputAmount)) {
        alert("Please enter a valid number.");
        return;
    }

    const response = await fetch("items.json");
    const items = await response.json();

    const list = document.getElementById("result_list");
    list.innerHTML = "";

    for (const [key, value] of Object.entries(items)) {
        const listItem = document.createElement("li");
        listItem.textContent = `${(inputAmount / value).toFixed(2)} ${key}`;
        list.appendChild(listItem);
    }
});

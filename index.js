function getRandomItems(items) {
    const keys = Object.keys(items);
    const randomItems = {};

    for (let i = 0; i < 7; i++) {
        const randomIndex = Math.floor(Math.random() * keys.length);
        const key = keys[randomIndex];
        randomItems[key] = items[key];
        keys.splice(randomIndex, 1);
    }

    return randomItems;
}

async function displayItems(inputAmount) {
    const response = await fetch("items.json");
    const items = await response.json();
    const randomItems = getRandomItems(items);

    const list = document.getElementById("result_list");
    list.innerHTML = "";

    for (const [key, value] of Object.entries(randomItems)) {
        const listItem = document.createElement("li");
        listItem.textContent = `${(inputAmount / value).toFixed(2)} ${key}`;
        list.appendChild(listItem);
    }
}

document.getElementById("go_button").addEventListener("click", async () => {
    const inputAmountValue = document.getElementById("input_amount").value;
    const cleanInputAmountValue = inputAmountValue.replace('$', '');
    const inputAmount = parseFloat(cleanInputAmountValue);

    if (isNaN(inputAmount)) {
        alert("Please enter a valid number.");
        return;
    }

    await displayItems(inputAmount);
});


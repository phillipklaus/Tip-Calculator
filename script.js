function calculateTip() {
    const bill = parseFloat(document.getElementById("bill").value);
    const tipPercent = parseFloat(document.getElementById("tip").value);
    const people = parseInt(document.getElementById("people").value);

    if (isNaN(bill) || isNaN(tipPercent) || isNaN(people) || people <= 0) {
        alert("Please enter valid numbers");
        return;
    }

    const tipAmount = bill * (tipPercent / 100);
    const total = bill + tipAmount;
    const perPerson = total / people;

    document.getElementById("tip-amount").textContent = ` Tip Amount: $${tipAmount.toFixed(2)}`;
    document.getElementById("total").textContent = `Total Bill: $${total.toFixed(2)}`;
    document.getElementById("per-person").textContent = ` Per Person: $${perPerson.toFixed(2)}`;
}

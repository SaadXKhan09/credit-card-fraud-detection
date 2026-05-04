// Generate V1–V28 inputs dynamically
const container = document.getElementById("features");

for (let i = 1; i <= 28; i++) {
    let input = document.createElement("input");
    input.type = "number";
    input.value = 0;
    input.id = "V" + i;
    input.placeholder = "V" + i;
    container.appendChild(input);
}

async function predict() {

    let time = parseFloat(document.getElementById("time").value);
    let amount = parseFloat(document.getElementById("amount").value);

    let V_features = [];
    for (let i = 1; i <= 28; i++) {
        V_features.push(parseFloat(document.getElementById("V"+i).value));
    }

    const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            time: time,
            amount: amount,
            V_features: V_features
        })
    });

    const result = await response.json();

    let risk = (result.fraud_probability * 100).toFixed(2);

    document.getElementById("risk").innerText =
        "Risk Score: " + risk + "%";

    document.getElementById("status").innerText =
        result.prediction === 1 ? "🚨 FRAUD" : "✅ SAFE";
}
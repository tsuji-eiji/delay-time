const noteRatios = {
    "全音符": 4,
    "2分音符": 2,
    "4分音符": 1,
    "8分音符": 0.5,
    "16分音符": 0.25,
    "付点4分音符": 1.5,
    "付点8分音符": 0.75,
    "付点16分音符": 0.375,
    "3連4分音符": 1 / 1.5,
    "3連8分音符": 0.5 / 1.5,
    "3連16分音符": 0.25 / 1.5,
};

function calculateDelayTimes() {
    const bpm = parseFloat(document.getElementById("bpm").value);
    if (isNaN(bpm) || bpm <= 0) return;
    const beatDuration = 60000 / bpm;
    let html = `<table><tr><th>音符</th><th>ディレイタイム (ms)</th></tr>`;
    for (const note in noteRatios) {
        const time = (beatDuration * noteRatios[note]).toFixed(2);
        html += `<tr><td>${note}</td><td>${time}</td></tr>`;
    }
    html += `</table>`;
    document.getElementById("results").innerHTML = html;
}

function calculateBPMs() {
    const ms = parseFloat(document.getElementById("ms").value);
    if (isNaN(ms) || ms <= 0) return;
    let html = `<table><tr><th>音符</th><th>BPM</th></tr>`;
    for (const note in noteRatios) {
        const bpm = (60000 / (ms / noteRatios[note])).toFixed(2);
        html += `<tr><td>${note}</td><td>${bpm}</td></tr>`;
    }
    html += `</table>`;
    document.getElementById("results").innerHTML = html;
}

// タブ切り替え処理
document.getElementById("tab-bpm").onclick = () => {
    document.getElementById("tab-bpm").classList.add("active");
    document.getElementById("tab-ms").classList.remove("active");
    document.getElementById("bpm-input-area").style.display = "block";
    document.getElementById("ms-input-area").style.display = "none";
    document.getElementById("results").innerHTML = "";
};
document.getElementById("tab-ms").onclick = () => {
    document.getElementById("tab-ms").classList.add("active");
    document.getElementById("tab-bpm").classList.remove("active");
    document.getElementById("bpm-input-area").style.display = "none";
    document.getElementById("ms-input-area").style.display = "block";
    document.getElementById("results").innerHTML = "";
};

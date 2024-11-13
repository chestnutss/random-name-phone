// A群組的姓名
const names = [
    "王小明",
    "李大華",
    "張美麗",
    "陳建國",
    "林志玲"
];

// B群組的電話
const phones = [
    "0912-345-678",
    "0987-654-321",
    "0922-111-222",
    "0933-444-555",
    "0955-666-777"
];

function generateRandom() {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomPhone = phones[Math.floor(Math.random() * phones.length)];

    document.getElementById("output").innerText = `姓名: ${randomName}, 電話: ${randomPhone}`;
}

// A群組的姓名
const names = [
    "國祥",
    "逸庭",
    "海豹",
    "爾夫",
    "園長",
    "水哥",
    "宗憲",
    "栗子",
    "大姊"
];

// B群組的電話
const phones = [
    "0985-910-XXX"
];

function generateRandom() {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomPhone = phones[Math.floor(Math.random() * phones.length)];

    document.getElementById("output").innerText = `姓名: ${randomName}, 電話: ${randomPhone}`;
}

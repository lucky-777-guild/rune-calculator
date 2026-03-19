const broType = document.getElementById("broType");
const percentBox = document.getElementById("percentBox");
const calcBtn = document.getElementById("calcBtn");

broType.addEventListener("change", () => {
  percentBox.style.display = broType.value === "none" ? "none" : "block";
});

calcBtn.addEventListener("click", calc);

function calc() {
  const rune = Number(document.getElementById("runeType").value);
  const type = broType.value;
  const percent = Number(document.getElementById("percent").value);
  const pet = Number(document.getElementById("pet").value);

  let bro = 0;
  if (type !== "none") {
    const base = type === "myth" ? 1.12 : 1.09;
    bro = ((percent * 0.01 + 1) * 0.03 - 0.03) + base;
  }

  const baseTotal = bro + pet + 0.25;
  const final = (baseTotal + rune) / baseTotal;

  document.getElementById("result").innerHTML =
    `<div class="big">最終倍率: ${final.toFixed(6)}</div>
    ルーン: ${rune}<br>
    ブロ像: ${bro.toFixed(6)}<br>
    ペット: ${pet}<br>
    合計: ${baseTotal.toFixed(6)}`;
}

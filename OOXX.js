const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#status");
const resetButton = document.querySelector("#resetButton");

let currentPlayer = "O";


resetButton.addEventListener("click", () => {
    cells.forEach((cell) => {
        cell.textContent = "";
        cell.disabled = false;
    });

    currentPlayer = "O";
    statusText.textContent = "目前是 O 方";
});
cells.forEach((cell) => {
    cell.addEventListener("click", () => {

        if (cell.textContent.trim() !== "") {
            console.log("不可重複下棋");
            return;
        }
        cell.textContent = currentPlayer;
        const a = document.querySelector("#a").textContent;
        const b = document.querySelector("#b").textContent;
        const c = document.querySelector("#c").textContent;
        const d = document.querySelector("#d").textContent;
        const e = document.querySelector("#e").textContent;
        const f = document.querySelector("#f").textContent;
        const g = document.querySelector("#g").textContent;
        const h = document.querySelector("#h").textContent;
        const i = document.querySelector("#i").textContent;
        if (
            (a !== "" && a === b && b === c) ||
            (d !== "" && d === e && e === f) ||
            (g !== "" && g === h && h === i) ||
            (a !== "" && a === d && d === g) ||
            (b !== "" && b === e && e === h) ||
            (c !== "" && c === f && f === i) ||
            (a !== "" && a === e && e === i) ||
            (c !== "" && c === e && e === g)
        )
        {
            statusText.textContent = currentPlayer + " 獲勝！";
            cells.forEach((cell) => {
                cell.disabled = true;
            });
            return;
        }
        if (
            a !== "" && b !== "" && c !== "" &&
            d !== "" && e !== "" && f !== "" &&
            g !== "" && h !== "" && i !== ""
        ) {
            statusText.textContent = "平手";
            cells.forEach((cell) => {
                cell.disabled = true;
            });
            return;
        }
        currentPlayer = currentPlayer === "O" ? "X" : "O";
        statusText.textContent = "目前是 " + currentPlayer + " 方";

    });
});

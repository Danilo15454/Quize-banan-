const cells = document.querySelectorAll("td");
const width = 20;

cells.forEach((cell, index) => {

    const row = Math.floor(index / width);
    const col = index % width;

    // верхняя стена
    if (row === 0) {
        cell.classList.add("wall");
    }

    // нижняя стена
    if (row === width - 1) {
        cell.classList.add("wall");
    }

    // левая стена
    if (col === 0) {
        cell.classList.add("wall");
    }

    // правая стена
    if (col === width - 1) {
        cell.classList.add("wall");
    }

});
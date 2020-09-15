'use strict';

function sortTablerByName(table) {
    let sortedRows = Array.from(table.rows)
        .slice(1)
        .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);

    table.tBodies[0].append(...sortedRows)

}

function sortTablerBySurname(table) {
    let sortedRows = Array.from(table.rows)
        .slice(1)
        .sort((rowA, rowB) => rowA.cells[1].innerHTML > rowB.cells[1].innerHTML ? 1 : -1);

    table.tBodies[0].append(...sortedRows)

}

function sortTablerByAge(table) {
    let sortedRows = Array.from(table.rows)
        .slice(1)
        .sort((rowA, rowB) => +rowA.cells[2].innerHTML > +rowB.cells[2].innerHTML ? 1 : -1);

    table.tBodies[0].append(...sortedRows)

}


sortTablerByAge(table)
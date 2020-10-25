'use strict';

const talbeWithData = document.querySelector('#grid');

function sortByAgeOrName(event) {

    if (event.target.tagName != "TH") return;

    const tableTh = event.target; //+
    const colNum = tableTh.cellIndex; // как бы я догадлся до этого?
    const type = event.target.dataset.type;//+
    const tableBody = talbeWithData.querySelector('tbody');
    const rowsArr = Array.from(tableBody.rows); // как бы я догадлся до этого?

    switch (type) { //+
        case 'number': //+
            rowsArr.sort((a, b) => {
                return (a.cells[colNum].innerHTML - b.cells[colNum].innerHTML);
            });
            break;

        case 'string': //+
            rowsArr.sort((a, b) => {
                if (a.cells[colNum].innerHTML > b.cells[colNum].innerHTML) {
                    return 1;
                } else {
                    return -1;
                };
            })
            break;
    }

    tableBody.append(...rowsArr); //-

};

talbeWithData.addEventListener('click', sortByAgeOrName)
'use strict';

const table = document.getElementById('bagua-table');
let area = null;

table.addEventListener('click', editTd);

function editTd(event) {
    let target = event.target.closest('td,button');
    if (!table.contains(target)) return;

    if (target.tagName == 'TD') {
        if (area) return;
    }

    let coords = target.getBoundingClientRect();

    area = document.createElement('textarea');
    area.value = target.innerHTML;
    area.style.left = coords.x + 'px';
    area.style.top = coords.y + 'px';
    area.style.width = coords.width + 'px';
    area.style.height = coords.height + 'px';


    let btnOk = document.createElement('button');
    btnOk.innerHTML = 'OK';
    btnOk.style.left = coords.x + 'px';
    btnOk.style.top = coords.bottom + 'px';

    let btnCancel = document.createElement('button');
    btnCancel.innerHTML = 'CANCEL';
    btnCancel.style.top = coords.bottom + 'px';

    target.replaceWith(area);
    area.focus();

    document.body.after(btnOk);
    document.body.after(btnCancel);
    btnCancel.style.left = btnOk.getBoundingClientRect().right + 'px';

    document.addEventListener('click', saveEditTd);

    function saveEditTd(event) {
        let targ = event.target;

        if (!((targ == btnOk) || (targ == btnCancel))) return;

        if (targ == btnOk) {
            target.innerHTML = area.value;
        }
        area.replaceWith(target);
        btnOk.remove();
        btnCancel.remove();
        area = null;
    }
}
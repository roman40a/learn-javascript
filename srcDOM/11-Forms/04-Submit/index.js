'use srtict';

function showPrompt(html, callback) {
    let coverDiv = document.createElement('div');

    function showCover() {
        coverDiv.id = 'cover-div';
        document.body.style.overflowY = 'hidden';
        document.body.append(coverDiv);
    }

    function hideCover() {
        coverDiv.remove();
        document.body.style.overflowY = '';
    }

    showCover();

    const containerModWin = document.querySelector('#prompt-form-container');
    const promptForm = document.querySelector('#prompt-form');
    const text = document.querySelector('input[name="text"]');
    const btnCancel = document.querySelector('input[name="cancel"]');
    const message = document.querySelector('#prompt-message')
    message.innerHTML = html;
    text.value = '';

    function complete(value) {
        promptForm.removeEventListener('submit', isOk);
        btnCancel.removeEventListener('click', clickBtn);
        document.removeEventListener('keydown', pressBtn);

        hideCover();
        containerModWin.style.display = 'none';
        document.onkeydown = null;
        callback(value);
    }

    // пользовотель нажал ок

    promptForm.addEventListener('submit', isOk);

    function isOk(event) {
        let value = text.value;
        if (value == '') {
            event.preventDefault();
            return;
        }
        complete(value);
        event.preventDefault();
    }

    // пользователь нажал "отмена"
    btnCancel.addEventListener('click', clickBtn);
    document.addEventListener('keydown', pressBtn);

    function clickBtn() {
        complete(null);
    }

    function pressBtn(event) {
        if (event.key != 'Escape') return;
        complete(null);
    }


    // Запускаем TAB/ShiftTAB покругу внутри формы:
    btnCancel.addEventListener('keydown', (e) => {
        if (e.key == 'Tab' && !e.shiftKey) {
            text.focus();
            e.preventDefault();
        }
    });

    text.addEventListener('keydown', (e) => {
        if (e.key == 'Tab' && e.shiftKey) {
            btnCancel.focus();
            e.preventDefault();
        }
    });

    containerModWin.style.display = 'block';
    text.focus();
};

const modalwindowBtn = document.querySelector('.modalwindow');

modalwindowBtn.addEventListener('click', () => {
    showPrompt('Введите что-нибудь<br>...умное =)', function (value) {
        let elem = document.createElement('p');
        elem.innerHTML = "Вы ввели: " + value;
        document.body.append(elem);;
    });
});

// function showWin() {
//     showPrompt('Введите что-нибудь<br>...умное =)', function (value) {
//         result(value);
//     });
// };

// function result(value) {
//     let elem = document.createElement('p');
//     elem.innerHTML = "Вы ввели: " + value;
//     document.body.append(elem);
// }
import React from 'react';
import Dialog from './Dialog/Dialog';
import stl from './DialogsItems.module.css';

const dialogsData = [
    { id: 1, name: 'Maria' },
    { id: 2, name: 'Roman' },
    { id: 3, name: 'Yuriy' },
    { id: 4, name: 'Ivan' },
    { id: 5, name: 'Алексей Алексеевич' },
    { id: 6, name: 'Name' },
]

const DialogsItems = (probs) => {

    const dialogsElements = dialogsData
        .map(dialog => <Dialog name={dialog.name} id={dialog.id} />)

    return (
        <div className={stl.dialogsItems}>
            {dialogsElements}
        </div>
    );
}

export default DialogsItems;
import React from 'react';
import Dialog from './Dialog/Dialog';
import stl from './DialogsItems.module.css';

const DialogsItems = (probs) => {

    const dialogsElements = probs.dialogsData
        .map(dialog => <Dialog name={dialog.name} id={dialog.id} />)

    return (
        <div className={stl.dialogsItems}>
            {dialogsElements}
        </div>
    );
}

export default DialogsItems;
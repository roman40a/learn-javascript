import React from 'react';
import Dialog from './Dialog/Dialog';
import stl from './DialogsItems.module.css';

const DialogsItems = (probs) => {
    return (
        <div className={stl.dialogsItems}>
            <Dialog name='Roman' />
            <Dialog className={stl.active} name='Maria' />
            <Dialog name='Yuriy' />
            <Dialog name='Ivan' />
            <Dialog name='Алексей Алексеевич' />
            <Dialog name='Name' />
            <Dialog name='Name' />
            <Dialog name='Name' />
            <Dialog name='Name' />
            <Dialog name='Name' />
            <Dialog name='Name' />
            <Dialog name='Name' />
            <Dialog name='Name' />
            <Dialog name='Name' />
            <Dialog name='Name' />
            <Dialog name='Name' />
            <Dialog name='Name' />
            <Dialog name='Name' />
            <Dialog name='Name' />
            <Dialog name='Name' />
            <Dialog name='Name' />
            <Dialog name='Name' />
            <Dialog name='Name' />
            <Dialog name='Name' />
            <Dialog name='Name' />
            <Dialog name='Name' />
            <Dialog name='Name' />
            <Dialog name='Name' />
            <Dialog name='Name' />
            <Dialog name='Name' />
            <Dialog name='Name' />
            <Dialog name='Name' />
            <Dialog name='Name' />
            <Dialog name='Name' />
        </div>
    );
}

export default DialogsItems;
import React from 'react';
import stl from './Dialogs.module.css';
import DialogsItems from './DialogsItems/DialogItems';
import Messages from './Messages/Messages';

const Dialogs = (probs) => {
    return (
        <div className={stl.dialogs}>
            <DialogsItems />
            <Messages />
        </div>
    );
}

export default Dialogs;
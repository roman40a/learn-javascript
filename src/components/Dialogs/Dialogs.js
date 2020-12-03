import React from 'react';
import store from '../../redux/store';
import stl from './Dialogs.module.css';
import DialogsItems from './DialogsItems/DialogItems';
import Messages from './Messages/Messages';

const Dialogs = (probs) => {
    return (
        <div className={stl.dialogs}>
            <DialogsItems dialogsData={probs.store.getState().dialogsPage.dialogsData} />
            <Messages store={probs.store}
                messagesData={probs.store.getState().dialogsPage.messagesData} dispatch={probs.dispatch} />
        </div>
    );
}

export default Dialogs;
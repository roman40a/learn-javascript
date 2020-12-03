const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_CHANGE_NEW_MESSAGE_TEXT = 'ADD-CHANGE-NEW-MESSAGE-TEXT';

const dialogsPageReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            if (!state.messagesData.textareasValue) return state;

            let newMessage = {
                id: state.messagesData[state.messagesData.length - 1].id + 1,
                message: state.messagesData.textareasValue,
                me: true,
            };

            state.messagesData.push(newMessage);
            state.messagesData.textareasValue = '';

            return state;

        case ADD_CHANGE_NEW_MESSAGE_TEXT:
            state.messagesData.textareasValue = action.newText;
            return state;

        default:
            return state;
    }
};

export const addMessageCreator = () => ({ type: ADD_MESSAGE });
export const addChangeNewMessageText = (text) => ({ type: ADD_CHANGE_NEW_MESSAGE_TEXT, newText: text });

export default dialogsPageReducer;
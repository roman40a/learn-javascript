const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_POST = 'ADD-POST';
const ADD_CHANGE_NEW_POST_TEXT = 'ADD-CHANGE-NEW-POST-TEXT';
const ADD_CHANGE_NEW_MESSAGE_TEXT = 'ADD-CHANGE-NEW-MESSAGE-TEXT';

let store = {
    _subscriber() {
        console.log("нет наблюдателей (подписчиков)");
    },

    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: 'Привет! Как дела?', likes: 10 },
                { id: 2, message: 'Тут мы будем изучать ReactJS', likes: 15 },
                { id: 3, message: 'Добро пожаловать ко мне на мой сайт!', likes: 30 },
                { id: 4, message: 'А вот второй =)))', likes: 20 },
                { id: 4, message: 'Вот и мой первый пост!=)', likes: 25 },
            ],
            textareasValue: '',
        },
        dialogsPage: {
            dialogsData: [
                { id: 1, name: 'Мария' },
                { id: 2, name: 'Рома' },
                { id: 3, name: 'Иван' },
                { id: 4, name: 'Юра' },
            ],
            messagesData: [
                { id: 1, message: 'Привет!', me: true, },
                { id: 2, message: 'Как дела?', me: true, },
                { id: 3, message: 'Мяу!', me: false, },
                { id: 4, message: 'Я - весёлый котёнок!', me: false, },
            ],
            textareasValue: '',
        },
        navbar: {
            friendsData: [
                { id: 1, name: 'Мария', avUrl: 'https://sun9-52.userapi.com/c849020/v849020221/d7830/jkOQbCrpRNs.jpg' },
                { id: 2, name: 'Рома', avUrl: 'https://2.bp.blogspot.com/-jIY2gh7lUn0/V-Ru3koMKWI/AAAAAAAAEyI/_gH9SlcPFcoz09i2MmlWklD9jUIVmq7JwCLcB/s1600/Computer-Cat.jpg' },
                { id: 3, name: 'Иван', avUrl: 'https://img1.liveinternet.ru/images/attach/c/1/49/230/49230846_Hip_to_be_Square_by_Prettyscary.jpg' },
                { id: 4, name: 'Юра', avUrl: 'http://i.mycdn.me/i?r=AzGBqNaF5OQp2lMpnhRx4DEF1qIRIvb_SlKQCPLH8HDSF6Ph5YPCjWI7rWMYLE4nk_I' },
            ],
        },
    },

    getState() {
        return this._state;
    },

    subsribe(observer) {
        this._subscriber = observer;
    },

    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                this._addPost();
                break;

            case ADD_MESSAGE:
                this._addMessage();
                break;

            case ADD_CHANGE_NEW_POST_TEXT:
                this._addChangeNewPostText(action.newText);
                break;

            case ADD_CHANGE_NEW_MESSAGE_TEXT:
                this._addChangeNewMessageText(action.newText);
                break;

            default:
                break;
        }
    },

    _addPost() {
        if (!this._state.profilePage.textareasValue) return;

        let newPost = {
            id: this._state.profilePage.postsData[this._state.profilePage.postsData.length - 1].id + 1,
            message: this._state.profilePage.textareasValue,
            likes: 0,
        };

        this._state.profilePage.postsData.unshift(newPost);
        this._state.profilePage.textareasValue = '';
        this._subscriber();
    },

    _addMessage() {
        if (!this._state.dialogsPage.messagesData.textareasValue) return;

        let newMessage = {
            id: this._state.dialogsPage.messagesData[this._state.dialogsPage.messagesData.length - 1].id + 1,
            message: this._state.dialogsPage.messagesData.textareasValue,
            me: true,
        };

        this._state.dialogsPage.messagesData.push(newMessage);
        this._state.dialogsPage.messagesData.textareasValue = '';
        this._subscriber();

    },

    _addChangeNewPostText(text) {
        this._state.profilePage.textareasValue = text;
        this._subscriber(); //rerenderEntireTree(state); 
    },

    _addChangeNewMessageText(text) {
        this._state.dialogsPage.messagesData.textareasValue = text;
        this._subscriber(); //rerenderEntireTree(state); 
    },

}

export const addPostCreator = () => ({ type: ADD_POST });
export const addMessageCreator = () => ({ type: ADD_MESSAGE });
export const addChangeNewPostText = (text) => ({ type: ADD_CHANGE_NEW_POST_TEXT, newText: text });
export const addChangeNewMessageText = (text) => ({ type: ADD_CHANGE_NEW_MESSAGE_TEXT, newText: text });

export default store;
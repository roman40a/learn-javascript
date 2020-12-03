import dialogsPageReducer from "./dialogsPageReducer";
import navbarReducer from "./navbarReducer";
import profilePageReducer from "./profilePageReducer";


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
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);

        this._subscriber();
    },
}

export default store;
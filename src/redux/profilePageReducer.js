const ADD_POST = 'ADD-POST';
const ADD_CHANGE_NEW_POST_TEXT = 'ADD-CHANGE-NEW-POST-TEXT';

const profilePageReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            if (!state.textareasValue) return state;

            let newPost = {
                id: state.postsData[state.postsData.length - 1].id + 1,
                message: state.textareasValue,
                likes: 0,
            };

            state.postsData.unshift(newPost);
            state.textareasValue = '';
            return state;

        case ADD_CHANGE_NEW_POST_TEXT:
            state.textareasValue = action.newText;
            return state;

        default:
            return state;
    }
};

export const addPostCreator = () => ({ type: ADD_POST });
export const addChangeNewPostText = (text) => ({ type: ADD_CHANGE_NEW_POST_TEXT, newText: text });

export default profilePageReducer;
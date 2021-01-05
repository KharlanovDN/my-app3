// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer";
// import sidebarReducer from "./sidebar-reducer";
//
// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: "Hello World!", likesCount: 12},
//                 {id: 2, message: "Hello World!2", likesCount: 20}
//             ],
//             newPostText: 'it.com'
//         },
//         dialogsPage: {
//             messages: [
//                 {id: 1, message: "Hi1"},
//                 {id: 2, message: "Hi2"}
//             ],
//             newMessageBody: '',
//             dialogs: [
//                 {id: 1, name: "Dimon"},
//                 {id: 2, name: "Andrey"}
//             ]
//         },
//         sidebar: {}
//     },
//     getState() {
//         return this._state;
//     },
//     _callSubscriber() {
//         console.log('state changed');
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//
//         this._callSubscriber(this._state);
//     }
// };
//
// window.state = store;
//
// export default store;
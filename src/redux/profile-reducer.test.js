import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: "Hello World!", likesCount: 12},
        {id: 2, message: "Hello World!2", likesCount: 20}
    ],
}

it('length of posts should be incremented', function () {

    let action = addPostActionCreator("some text")

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
    expect(newState.posts[2].message).toBe('some text');
});

it('after deleting length of messages should be decrement', function () {

    let action = deletePost(2)

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(1);
});

it('after deleting length should not be decrement if id is incorrect', () => {
    let action  = deletePost(1000);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(2);
});




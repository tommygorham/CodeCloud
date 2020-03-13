class Dispatcher {
    constructor(user) {
        this.user = user;
    }

    dispatch(callback, post) {
        callback(post);
    }
}

export default Dispatcher;

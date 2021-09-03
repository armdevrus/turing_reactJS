class DataSource {
    users = [{name: 'John', age: 24}];
    callbacks = [];

    addUser = (userData) => {
        this.users = [...this.users, {name: userData.name || '', age: userData.age || 0}];
        this.callbackCall();
    };

    getUsers() {
        return this.users;
    };

    getUsersCount() {
        return this.users.length;
    };

    callbackCall = () => {
        for (let i = 0; i < this.callbacks.length; ++i) {
            this.callbacks[i](this.users);
        }
    };

    addListener = (callback) => {
        if (!(callback && typeof callback === 'function')) return;
        this.callbacks.push(callback);
    };

    removeListener = (callback) => {
        const callbackIndex = this.callbacks.findIndex(existingCallback => existingCallback === callback);
        if (callbackIndex !== -1) {
            this.callbacks.splice(callbackIndex, 1);
        }
    };
}

export const dataSource = new DataSource();
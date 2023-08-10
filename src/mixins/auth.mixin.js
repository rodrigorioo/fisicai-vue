export const authMixin = {
    methods: {
        _auth_login (accessToken) {
            localStorage.setItem("user", accessToken);
        },

        _auth_logout () {
            localStorage.removeItem("user");
        },

        _auth_check () {
            return false;
        },
    }
};

export const userEditData = [
    {
        title: "Name",
        text: "name"
    },
    {
        title: "Email",
        text: "email"
    },
    {
        title: "Password",
        text: "password"
    }
]

export const passwordCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{6,16}$/;

export const emailCheck = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
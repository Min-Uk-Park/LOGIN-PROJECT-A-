"use strict";

class UserStorage {
    static #users = {
        id : ["WoorimIT", "갑민욱", "홍길동" ],
        psword : ["1234", "1234", "12345"],
        name : ["김동현", "유지수", "김보민"],
    };

    static getUsers(...fields ) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});

        
        return newUsers;
    }

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) =>{
            newUser[info] = users[info][idx];
            return newUser;

        }, {});
        return userInfo;
    }
}

module.exports = UserStorage;

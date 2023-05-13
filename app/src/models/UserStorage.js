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
}

module.exports = UserStorage;

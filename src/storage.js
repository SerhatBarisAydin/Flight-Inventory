export function saveUser(newUserData){
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(newUserData);
    localStorage.setItem('users', JSON.stringify(users));

}

export function loadUser(){
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users;
}
import { headers } from "next/headers";


const url = 'https://jsonplaceholder.typicode.com/todos';

export const config = {
    baseUrl: 'https://nomoreparties.co/v1/wbf-cohort-9',
    headers: {
        authorization: '2cdae549-d4cc-4251-8eef-46d5577a6d11',
        'Content-Type': 'application/json'
    }
};

export async function getCards() {
    try {
        const response = await fetch(`${config.baseUrl}/cards`, {
            headers: config.headers
        });
        return response.json(); 
    } catch (error) {
        console.log(error)
    }
};

// export const fetchGetCards = () => {
//     return fetch (`${config.baseUrl}/cards`, {
//         headers: config.headers
//     })
//     .then(res => {
//         if (res.ok) {
//             return res.json();
//         } else {
//             return Promise.reject('Ошибка')
//         }
//     })
// };

// export const fetchGetUser = () => {
//     return fetch(`${config.baseUrl}/users/me`, {
//         headers: {
//             authorization: '2cdae549-d4cc-4251-8eef-46d5577a6d11',
//             "Content-type": "application/json"
//         }
//     })
//     .then(res => {
//         if (res.ok) {
//             return res.json()
//         } else {
//             return Promise.reject('Ошибка')
//         }
//     })
// }

// export const fetchSetPosts = ({id}) => {
//     return fetch(`${config.baseUrl}/cards`, {
//         method: "POST",
//         headers: {
//             authorization: '2cdae549-d4cc-4251-8eef-46d5577a6d11',
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify({
//             id: id
//         })
//     })
//     .then(res => {
//         if (res.ok) {
//             return res.json
//         } else {
//             return Promise.reject('Ошибка')
//         } 
//     });
// };

export async function getUser() {
    try {
        const response = await fetch(`${config.baseUrl}/users/me`, {
            headers: config.headers
        });
        return response.json();
    } catch (error) {
        console.log(error)
    }
}

export async function setPost(name: string, link: string) {
    try {
        const response = await fetch(`${config.baseUrl}/cards`, {
            method: 'POST',
            headers: config.headers,
            body: JSON.stringify({
                name: name,
                link: link
            })
        });
        return response.json();
    } catch (error) {
        console.log(error)
    }
}

export async function deletePost(id: string) {
    try {
        const response = await fetch(`${config.baseUrl}/cards/${id}`, {
            method: 'DELETE',
            headers: config.headers,
        });
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

export async function setLike(item) {
    try {
        const response = await fetch(`${config.baseUrl}/cards/likes/${item._id}`, {
            method: 'PUT',
            headers: config.headers,
        });
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

export async function unsetLike(item) {
    try {
        const response = await fetch(`${config.baseUrl}/cards/likes/${item._id}`, {
            method: 'DELETE',
            headers: config.headers,
        });
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

export async function updateUser(name, about) {
    try {
        const response = await fetch(`${config.baseUrl}/users/me`, {
            headers: config.headers,
            method: 'PATCH',
            body: JSON.stringify({
                name: name,
                about: about
            })
        })
        return response.json();
    } catch (error) {
        console.log(error)
    }
}

// export async function fetchTodos() {
//     console.log('Fetch started...');
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log('Data:', data);
//     } catch (error) {
//         console.error(error)
//     }
// };



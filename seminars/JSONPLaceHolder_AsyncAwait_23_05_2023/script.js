const usersContainer = document.getElementById('usersContainer');
const postsContainer = document.getElementById('postsContainer');

const baseUrl = 'https://jsonplaceholder.typicode.com/';

document.addEventListener('DOMContentLoaded', () => {

    async function getUsers() {
        try {
            const response = await fetch(`${baseUrl}users`);
            console.log(response);
            const users = response.json();
            return users;
        } catch (error) {
            console.log(error);
        }
    }

    async function getPosts(userId) {
        try {
            const response = await fetch(`${baseUrl}posts?userId=${userId}`);
            console.log(response);
            const posts = response.json();
            return posts;
        } catch (error) {
            console.log(error);
        }
    }
    async function displayUsers() {
        const users = await getUsers();
        users.forEach(user => {
            const userElement = document.createElement('div');
            userElement.classList.add('user');
            userElement.textContent = user.name;
            console.log(userElement);
            userElement.addEventListener('click', async () => {
                const posts = await getPosts(user.id);
                displayPosts(posts);
            });

            usersContainer.append(userElement); /*
                Метод append может принимать сколько угодно атрибутов, в том числе текст (будет добавлен как контент)
                Ничего не возвращает (appendChild возвращает добавленный элемент)
            */
            // const newElement = usersContainer.appendChild(userElement);
            // console.log(newElement);
        })
    }
    function displayPosts(posts) {
        postsContainer.innerHTML = '';

        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            `;
            postsContainer.append(postElement);
        })
    }

    displayUsers();
});
const baseUrl = 'https://jsonplaceholder.typicode.com/';


const usersList = document.getElementById("usersList");
const postsList = document.getElementById("postsList");
const title = document.getElementById("title");
const body = document.getElementById("body");
const loadUsersBtn = document.getElementById("loadUsersBtn");
const loadPostsBtn = document.getElementById("loadPostsBtn");
const addPostBtn = document.getElementById("addPostBtn");
const userDetailsDiv = document.getElementById("userDetails");


async function displayUsers(users) {
    usersList.innerHTML = "";
  
    const team = [];
  
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      const li = document.createElement("li");
      li.textContent = `${user.name}`;
      li.addEventListener('click', async () => {
        await displayUsersDetails(user);
      });
      usersList.append(li);
  
      team.push(li);
    }
  }



  async function displayUsersDetails(user) {
    userDetailsDiv.innerHTML = '';

    const nameHeading = document.createElement('h2');
    nameHeading.innerHTML = user.name;

    const username = document.createElement('p');
    username.innerHTML = `<strong>Username: </strong> ${user.username}`;

    const email = document.createElement('p');
    email.innerHTML = `<strong>Email: </strong> ${user.email}`;

    const phone = document.createElement('p');
    phone.innerHTML = `<strong>Phone: </strong> ${user.phone.split(" ")[0]}`;

    userDetailsDiv.append(nameHeading, username, email, phone);
    userDetailsDiv.classList.add('userDetailsDiv');
}


loadUsersBtn.addEventListener("click", async () => {
    const users = await fetchUsers();
    displayUsers(users);
});

loadPostsBtn.addEventListener("click", async () => {
    const posts = await fetchPosts();
    displayPosts(posts);
});

addPostBtn.addEventListener("click", handleAddPost); // заменил второй атрибут на простой вызов необходимой функции

async function fetchUsers() {
    try {
        const response = await fetch(`${baseUrl}users`);
        const users = response.json();
        return users;
    } catch (error) {
        console.log("Error fetching users: ", error);
    }
}

async function fetchPosts() {
    try {
        const response = await fetch(`${baseUrl}posts`);
        const posts = response.json();
        return posts;
    } catch (error) {
        console.log("Error fetching users: ", error);
    }
}

async function createPost(postData) {
    try {
        const response = await fetch(`${baseUrl}posts`, {
            method: "POST",
            body: JSON.stringify(postData),
        });
        const post = await response.json();
        return post;
    } catch (error) {
        console.log("Error fetching users: ", error);
    }
}

async function handleAddPost() {
    if (!title || !body) {
        alert("Please enter something in field title and body");
        return;
    }

    const postData = {  // id не нужен, он генерируется сервером
        title: title.value,
        body: body.value,
    };

    const post = await createPost(postData);

    if (post) {
        title.value = "";
        body.value = "";
        
        const posts = await fetchPosts();
        displayPosts(posts);
    } else {
        alert('Error');
    }
}

function displayPosts(posts) {
    postsList.innerHTML = "";

    posts.forEach((post) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <h4>${post.title}</h4>
            <p>${post.body}</p>
        `;
        postsList.append(li);
    });
}



    // const alt = users.map(user => {
    //     const phoneFormat = user.phone.split(' ')[0];
    //     return `<li>${user.name} ${phoneFormat}</li>`;
    // }).join('');

    // userList.innerHTML = alt;


//     // function displayUsers(users, usersList
// .) {
//     //     usersList
// .innerHTML = "";
        
//     //     const listEl = users.reduce((acc, {name}) => {
//     //       return acc + `<li>${name}</li>`;
//     //     }, "")
        
//     //     usersList
// .innerHTML = listEl;
//     //  }

// 
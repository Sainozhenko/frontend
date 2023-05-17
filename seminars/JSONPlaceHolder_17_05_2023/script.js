const baseUrl = 'https://jsonplaceholder.typicode.com/';

fetch(`${baseUrl}posts`)
    .then((res) => res.json())
    .then((posts) => {
        const postListDiv =document.getElementById('postList');
        posts.forEach(post=>{
            const postCard = document.createElement('div');
            postCard.classList.add('postCard');

            const postTitle = document.createElement('h3');
            postTitle.classList.add('postTitle')
            postTitle.textContent = post.title;

            const postBody = document.createElement('p');
            postBody.classList.add('postBody')
            postBody.textContent = post.body;

            postCard.append(postTitle,postBody);
            postListDiv.append(postCard);

        });
    })
    .catch((err)=> console.log(err));
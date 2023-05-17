const url = 'https://jsonplaceholder.typicode.com/';

// fetch(`${url}albums`)
//     .then(res => res.json())
//     .then(albums => {
//         const albumList = document.getElementById('albumList');

//         albums.forEach(album => {
//             const albumCard = document.createElement('div');
//             albumCard.classList.add('albumCard');

//             const title = document.createElement('h3');
//             title.classList.add('title');
//             title.textContent = album.title;

//             const photoList = document.createElement('div');
//             photoList.classList.add('photoList');
//             // https://jsonplaceholder.typicode.com/albums/1/photos
//             fetch(`${url}/albums/${album.id}/photos`)
//                 .then(res => res.json())
//                 .then(photos => {
//                     photos.forEach(photo => {
//                         const photoItem = document.createElement('div');
//                         photoItem.classList.add('photoItem');

//                         const a = document.createElement('a');
//                         a.classList.add('a');
                        
//                     })
//                 })
//         })
//     })
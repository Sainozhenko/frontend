const decrementButton = document.getElementById('decrement');
const decrement10Button = document.getElementById('decrement10');
const incrementButton = document.getElementById('increment');
const increment10Button = document.getElementById('increment10');
const countSpan = document.getElementById('count');
const resetButton = document.getElementById('reset');

let count = 0;

function updateCount(value){
    count+=value;
    countSpan.textContent =count;
};

decrementButton.addEventListener('click',()=> {
    //count--;
    // countSpan.textContent= --count;
updateCount(-1);
});

incrementButton.addEventListener('click',()=> {
    // count++;
    // countSpan.textContent=++count;
    updateCount(1);
});

decrement10Button.addEventListener('click',()=> {
    //count-=10;
    // countSpan.textContent= count;
    updateCount(-10);
});
    
increment10Button.addEventListener('click',()=> {
        // count+=10;
        // countSpan.textContent=count;
        updateCount(+10);
});

resetButton.addEventListener('click',()=> {
    // count+=10;
    // countSpan.textContent=count;
    updateCount(-count);
});
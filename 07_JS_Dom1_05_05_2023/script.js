console.log('Hello world!');
console.log(5+4);
console.log(document.body);

// document.body.innerHTML= '<h1>Hello world</h>';
//  var; переменные могут быть переприсвоенны видна везде 
//  let; переменные могут быть переприсвоенны.
// const a = 10; не может быть переприсвоена.

const div1 = document.getElementById('div1');
console.log(div1);
div1.style.border = '1px solid black';

const a = document.querySelector('#div1');
console.log(a);

const pDiv1 = document.querySelectorAll('#div1> p');
console.log(pDiv1.length);

for (let i = 0; i< pDiv1.length; i++) {
      pDiv1[i].innerHTML = `<span>new text ${i+1} </span>`;
    }

    const children = div1.children;
    console.log(children.length);

    for (let i = 0; i< children.length; i++) {
        children[i].style.color = 'red';
      }

      const newP = document.createElement('p');
      console.log(newP);

      const newPText = document.createTextNode('This text was create by special method');
      newP.appendChild(newPText);

      div1.appendChild(newP);
    //   div1.insertBefore(newP, div1.firstElementChild);
    // div1.insertBefore(newP, children[i]);

    const newP2 = document.createElement('p');
    const newP2Text = document.createTextNode('This is new p2 text');
    newP2.appendChild(newP2Text);
    div1.replaceChild(newP2, div1.firstElementChild);
    div1.removeChild(div1.firstElementChild);
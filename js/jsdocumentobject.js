let val;

val = document;
val = document.doctype;
val = document.head;
val = document.body;
val = document.URL;

val = document.links;  //   HTML COLLECTION
val = document.links[0];
val = document.links[3];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList;//DOMTOKEN LIST
val = document.links[0].classList[1];
val = document.links[0].classList[0];

val = document.forms; //HTML COLLECTION
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].className;
val = document.forms[0].classList;
val = document.forms[0].classList[0];
val = document.forms[0].action;
val = document.forms[0].method;

val = document.images; //HTML COLLECTION
val = document.images[0];
val = document.images[0].src;
val = document.images[0].className;
val = document.images[0].classList;
val = document.images[0].classList[0];
val = document.images[0].alt;
val = document.images[0].getAttribute('abc');

val = document.scripts;
val = document.scripts[0];
val = document.scripts[0].src;
val = document.scripts[0].type;
val = document.scripts[0].getAttribute('src');
val = document.scripts[0].getAttribute('type');

// console.log(val);

// change styling

document.getElementById('tasktitle').style.background = "gray";
// document.getElementById('tasktitle').style.color = "#fff";
document.getElementById('tasktitle').style.padding = "5px";

// change content

// document.getElementById('tasktitle').textContent = "My List";
// document.getElementById('tasktitle').innerText = "My tasks";
// document.getElementById('tasktitle').innerHTML = `<span style="color:yellow;">My Jobs</span>`;


// Call to Class Name

let lis = document.getElementsByClassName('list-group-item');  //HTML Collection

// console.log(lis);
// console.log(lis[0]);

// lis[0].style.color = "blue";
// lis[1].textContent = "Have to visit";

//Call to tag

let litags = document.getElementsByTagName("li");
console.log(litags);  //HTML Collection

// console.log(litags[0]);

// litags[0].style.color = "red";
// litags[1].innerText = "Hove to cook";

//querySelector
console.log(document.querySelector('#tasktitle'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h3'));

console.log(document.querySelector("li"));
// document.querySelector("li").style.color = "red";
// document.querySelector('ul li').style.color = "blue";
// document.querySelector("ul li:nth-child(odd)").style.background = "silver";
// document.querySelector("ul li:nth-child(even)").style.color = "gray";
// document.querySelector("ul li:nth-of-type(even)").style.color = "green";
// document.querySelector('ul li:nth-of-type(3)').innerText = "Have to read";                 



const listitems = document.querySelector('ul').getElementsByClassName("list-group-item");
console.log(listitems);

// listitems[2].textContent = "hello";
// console.log(typeof listitem);

let arritems = Array.from(listitems);
console.log(arritems);
console.log(typeof arritems)


//  arritems.forEach(function(arritem,index){
    // console.log(arritem);
    // arritem.textContent = "hello";
    // arritem.innerText = `${index} : Hello`;
//  });

 //quarySelectorAll

 let its = document.querySelector('ul.list-group li.list-group-item');
 console.log(lis);

 let itms = document.querySelectorAll('ul.list-group li.list-group-item');
 console.log(itms); //NodetList
 console.log(itms[0]);

//  itms.forEach(function(itm,index){
    // console.log(idx);
    // console.log(itm)
    // itm.innerText = `${index} : Hello World`;
//  });

const liodd = document.querySelectorAll('li:nth-child(odd)');
const lieven = document.querySelectorAll('li:nth-child(even)');
// console.log(lieven);

// liodd.forEach(function(li,index){
//     console.log(li);
//     li.style.background = "gray";
// });

// for(let i = 0 ; i < lieven.length ; i++){
    // console.log(i);
    // console.log(lieven[i]);
    // lieven[i].style.background = "silver";
// }

//children

let chl ;

const getul = document.querySelector('ul.list-group');
console.log(getul);
const getli = document.querySelector('li.list-group-item:first-child');
// console.log(getli);

chl = getul.children; //HTML COllection
console.log(chl);
console.log(chl[0]);
chl = getul.children[1];
console.log(chl);

//getul.chidern[1].innerText = "have to eat";

// getul.children[1].innerHTML = `Have to read <a href="#" id="delete-item2" class="delete-item"><i class="far fa-trash"></i></a>`;


//childre of children;

chl = getul.children[1].children //HTML Collection
chl = getul.children[1].children[0];
chl = getul.children[1].children[0].id;
chl = getul.children[1].children[0].className;
chl = getul.children[1].children[0].classList;  //DOM Token List
chl = getul.children[1].children[0].getAttribute("href");
chl = getul.children[0].children[0].children;
chl = getul.children[0].children[0].children[0];
console.warn(chl)


//first Element child
chl = getul.firstElementChild;

//last Element Child
chl = getul.lastElementChild;
console.log(chl);

//child ELement Count
chl = getul.children.length;
chl = getul.childElementCount;
chl = getul.children[0].childElementCount;
chl = getul.children[0].children[0].childElementCount;
console.log(chl);

//parent Element

const getfirstli = document.querySelector('li.list-group-item:first-child');
let par = getfirstli.parentElement;
// console.log(par);

//Get Sibling

let sbl = getfirstli.nextElementSibling;
console.log(sbl);

let abc = sbl.nextElementSibling;
        //   list item1    list item2    list item3      list item4      list item5
sbl = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
// console.log(sbl);

//previous element
            // list item1    list item2          list item3        list item2
let psbl = getfirstli.nextElementSibling.nextElementSibling.previousElementSibling;
// console.log(psbl);

//Create Element

const newli = document.createElement("li");
console.log(newli);

//Add Id;
newli.id = "new-item";

//Add Class
newli.className = "list-group-item";

//Add Attribute  (qualifiedname.value)
                //  attribute    value
newli.setAttribute('abc','newitem');

// newli.textContent = "hay";
// newli.innerText = "hi"
// newli.innerHTML = `List Item6<a href="#" id="delete-item6" class="delete-item"><i class="far fa-trash"></i></a>`

//Create Text Node;
let save = document.createTextNode('Save Myanmar');
// newli.appendChild(document.createTextNode('Save Myanmar'));

newli.appendChild(save);

const newlink = document.createElement('a');
newlink.href = "#";

//Add id
newlink.id = "delete-item6";

//Add Class
newlink.className = "delete-item";

newlink.innerHTML = `<i class="far fa-trash"></i>`;


newli.appendChild(newlink);

document.querySelector('ul.list-group').appendChild(newli);


// console.log(newlink)




//Replace Element
const newtitle = document.createElement('h2');

//Add ID
newtitle.id = "tasktitle"

newtitle.appendChild(document.createTextNode('All My List'));
// console.log(newtitle)

const oldtitle = document.getElementById('tasktitle');
console.log(oldtitle);

//Get Parent
const getcardaction = document.querySelector('.card-action');

//Replace Child (new ,old);
getcardaction.replaceChild(newtitle,oldtitle);

console.log(getcardaction);



//Remove Element
const getlis = document.querySelectorAll('li');  //Node list
// console.log(getlis)
// console.log(getlis[0]);

// getlis[0].remove();
// getlis[4].remove();



//Remove Child Element(child);
const getfirstul = document.querySelector('ul');
// console.log(getfirstul);
//console.log(getli[5]);

// getfirstul.removeChild(getlis[0]);
// getfirstul.removeChild(getlis[5]);

//ClassName Vs ClassList
const firstli = document.querySelector('li:first-child');
console.log(firstli);
// const firstlink = firstli.children//HTML Collection
const firstlink = firstli.children[0];
// console.log(firstlink);

firstlink.classList.add('delete-me');

let firstlnk;
firstlnk = firstlink.className;
console.log(firstlnk);



firstlnk.className = "delete-item";
// firstlink.className = "delete-item delete-myself";
// firstlink.className = "delete-item delete-me delete-myself";
// console.log(firstlink)

firstlnk = firstlink.classList; //DOM TOken List
// console.log(firstlnk);
// console.log(firstlnk[0]);
// console.log(firstlnk[1]);

// firstlink.classList.add('delete-ourserve');
// firstlink.classList.add('delete-myself');

// firstlink.classList.add('delete-myself','delete-ourserve');
// firstlink.classList.remove('delete-item');
// firstlink.classList.remove('delete-me','delete-myself');

//replace(old,new);
// firstlink.classList.replace('delete-ourserve','delete-delete');

// if(firstlink.classList.contains('delete-me')){
//     console.log("Yes");
// }else{
//     console.log('No');
// }

//Attribute;
let getatt = firstlink.getAttribute('href');
// console.log(getatt)

firstlink.setAttribute('href',"https://google.com");

getatt = firstlink.hasAttribute('href');
console.log(getatt);//true;

getatt = firstlink.hasAttribute('title');
console.log(getatt); //false





//addEventListener();
const clearbtn = document.querySelector('.clear-tasks');
// console.log(clearbtn)

//Method 1
// clearbtn.addEventListener('click',function(e){
//     console.log("hay i am working");
//     e.preventDefault();
// });


//Method 2
clearbtn.addEventListener('click',myclick);

function myclick(e){
    // console.log("hay i am my click");
    let val;
    val = e;

    // Event Target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList; //DOM Token List;

    // e.target.innerText = 'Finished';
    
    //Event Type;
    val = e.type;
           

        //   Coordinates event - relative to the window
    val = e.clientX;
    val = e.clientY;


          //Coordinates event - relative to the element
    val = e.offsetX;
    val = e.offsetY;

    // console.log(val);
    e.preventDefault();
}


//Mouser Event

const clbtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h2');
// console.log(heading);


//single click
// clbtn.addEventListener('click',mouseeventtype);

//double clck
// clbtn.addEventListener('dblclick',mouseeventtype);

//mousedown;

// clbtn.addEventListener('mousedown',mouseeventtype);

//mouseup;
// clbtn.addEventListener('mouseup',mouseeventtype);

//mouseenter
// card.addEventListener('mouseenter',mouseeventtype);

//mouseover
// card.addEventListener('mouseover',mouseeventtype);

//mouseleave
// card.addEventListener('mouseleave',mouseeventtype);

//mouseout
// card.addEventListener('mouseout',mouseeventtype);

//mousemove  = mouseover
// card.addEventListener('mousemove',mouseeventtype);

// function mouseeventtype(e){
//    console.log(`Event type = ${e.type}`);
//    heading.textContent = `MouseX : ${e.offsetX} MouseY : ${e.offsetY}`;
// //    document.body.style.background = `rgba(${e.offsetX},${e.offsetY},1)`;

//    e.preventDefault();
   
// }

const formel = document.querySelector('form');


// formel.addEventListener('submit',inputeventtype);

// function inputeventtype(e){
//     console.log(`Event Type = ${e.type}`);
//     // console.log(inputtask.value);
//     e.preventDefault();
// }

// const inputtask = document.getElementById('task');
// const geth2 = document.querySelector('h2');

//keydown
// inputtask.addEventListener('keydown',inputeventype);

//keypress = keydown
  //inputtask.addEventListener('keypress',inputeventype);

//keyup
// inputtask.addEventListener('keyup',inputeventype);

//input  = keyup
// inputtask.addEventListener('input',inputeventype);

//focus
// inputtask.addEventListener('focus',inputeventype);

//blur
// inputtask.addEventListener('blur',inputeventype);

//cut
// inputtask.addEventListener('cut',inputeventype);

//paste
// inputtask.addEventListener('paste',inputeventype);

//
// inputtask.addEventListener('paste',inputeventype);



// function inputeventype(e){
//     console.log(`Event Type = ${e.type}`);
//     console.log(e.target.value);
//     geth2.textContent = e.target.value;


// }


// Event Bubbling
  


// document.querySelector('.card-title').addEventListener('click',function(){
//     console.log("hay i am card title");
// });

// document.querySelector('.card-content').addEventListener('click',function(){
//     console.log("hay i am card content");
// });

// document.querySelector('.card').addEventListener('click',function(){
//     console.log("hay i am card");
// });






// Event Delegation
// const deleitem = document.querySelector('.delete-item');
// deleitem.addEventListener('click',deleteitem);

// function deleteitem(e){
//     console.log('i am delete item');
//     console.log(e.target);
//     e.preventDefault();
// }

document.body.addEventListener('click',evendelg);
function evendelg(e){
    // console.log("i am working")
    // console.log(e.target);

    // if(e.target.className === 'far fa-trash'){
    //     console.log("hay i am trash can");
    // }

    // if(e.target.parentElement.className === 'delete-item'){
    //     console.log("i am delete item by a tag");
    // }

    // if(e.target.parentElement.className === 'delete-item delete-me'){
    //     console.log("i am delete item by a tag");
    // }

    if(e.target.parentElement.classList.contains('delete-item')){
        console.log("i am delete item b a tag");
        // e.target.remove();
        // e.target.parentElement.remove();
            //  i      a             li
        // e.target.parentElement.parentElement.remove();
    };

    
    // e.preventDefault();
};

document.querySelector('form').addEventListener('submit',function(e){
    e.preventDefault();
    // console.log("hay i am working");
    const getnewtask = document.getElementById('task').value;
     console.log(getnewtask);

    //  localStorage.setItem('mytask',getnewtask);

    let alltasks;

    if(localStorage.getItem('mytasks') === null){
        alltasks = [];
    }else{
        alltasks = JSON.parse(localStorage.getItem('mytasks'));
    }
    
   
    alltasks.push(getnewtask);
    // console.log(alltasks);

    localStorage.setItem('mytasks',JSON.stringify(alltasks));


    
});

// console.log(JSON.parse(localStorage.getItem('mytasks')));

// console.log(typeof localStorage.getItem('mytasks'));

let getalltasks = localStorage.getItem('mytasks');
getalltasks = JSON.parse(getalltasks);
console.log(getalltasks);

getalltasks.forEach(function(getalltask){
    console.log(getalltask);
});






















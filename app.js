// <<<<<<< HEAD:app.js
console.log('checks');
showNotes();

//if user add a note, add it to the local Storage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");  //upd
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];  
    } else {
    //   notesObj = JSON.parse(notes);
      notesObj = JSON.parse(notes);
    }

    let myObj = {   //upd
        title: addTitle.value,
        text: addTxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";          //else title will be visible in inbox
    addTitle.value = "";         //else text will be visible in inbox
    // console.log(notesObj);
    showNotes();
});

//function to show elements from local storage
function showNotes(){
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
    }

    let html = '';
    notesObj.forEach(function(element, index){
        html += `
        <div class="noteCard my-2 mx-2 card" style='width: 18rem;'>
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class='card-text'>${element.text}</p>
                <button id='${index}' onclick='deleteNote(this.id)' class='btn btn-primary'>Delete Note</button>
            </div>
          </div>
        `;
    });

    let notesElm = document.getElementById('notes');
    if(notesObj.length != 0){
        notesElm.innerHTML = html;
    }else{
        notesElm.innerHTML = `Nothing to show! Use 'Add note' to add notes.`
    }
}

//function to delete a note
function deleteNote(index){
    // console.log("i am deleting ", index);

    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
};

let search = document.getElementById('searchTxt');
search.addEventListener('input', function(){

    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = 'block';
        }
        else{
            element.style.display = 'none';
        }
    });
});


/*
let search = document.getElementById('searchTxt');
search.addEventListener('input', function(){

    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = 'block';
        }
        else{
            element.style.display = 'none';
        }
    });

    html += `
        <div class="noteCard my-2 mx-2 card" style='width: 18rem;'>
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class='card-text'>${element.text}</p>
                <button id='${index}' onclick='deleteNote(this.id)' class='btn btn-primary'>Delete Note</button>
            </div>
          </div>
        `;
});
function deleteNote(index){
    // console.log("i am deleting ", index);

    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
      } else {
        n
        html += `
        <div class="noteCard my-2 mx-2 card" style='width: 18rem;'>
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class='card-text'>${element.text}</p>
                <button id='${index}' onclick='deleteNote(this.id)' class='btn btn-primary'>Delete Note</button>
            </div>
          </div>
        `;otesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
}
=======
console.log('checks');
showNotes();

//if user add a note, add it to the local Storage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");  //upd
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];  
    } else {
    //   notesObj = JSON.parse(notes);
      notesObj = JSON.parse(notes);
    }

    let myObj = {   //upd
        title: addTitle.value,
        text: addTxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";          //else title will be visible in inbox
    addTitle.value = "";         //else text will be visible in inbox
    // console.log(notesObj);
    showNotes();
});

//function to show elements from local storage
function showNotes(){
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
    }

    let html = '';
    notesObj.forEach(function(element, index){
        html += `
        <div class="noteCard my-2 mx-2 card" style='width: 18rem;'>
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class='card-text'>${element.text}</p>
                <button id='${index}' onclick='deleteNote(this.id)' class='btn btn-primary'>Delete Note</button>
            </div>
          </div>
        `;
    });

    let notesElm = document.getElementById('notes');
    if(notesObj.length != 0){
        notesElm.innerHTML = html;
    }else{
        notesElm.innerHTML = `Nothing to show! Use 'Add note' to add notes.`
    }
}

//function to delete a note
function deleteNote(index){
    // console.log("i am deleting ", index);

    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
};

let search = document.getElementById('searchTxt');
search.addEventListener('input', function(){

    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = 'block';
        }
        else{
            element.style.display = 'none';
        }
    });
});


/*
let search = document.getElementById('searchTxt');
search.addEventListener('input', function(){

    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = 'block';
        }
        else{
            element.style.display = 'none';
        }
    });

    html += `
        <div class="noteCard my-2 mx-2 card" style='width: 18rem;'>
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class='card-text'>${element.text}</p>
                <button id='${index}' onclick='deleteNote(this.id)' class='btn btn-primary'>Delete Note</button>
            </div>
          </div>
        `;
});
function deleteNote(index){
    // console.log("i am deleting ", index);

    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
      } else {
        n
        html += `
        <div class="noteCard my-2 mx-2 card" style='width: 18rem;'>
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class='card-text'>${element.text}</p>
                <button id='${index}' onclick='deleteNote(this.id)' class='btn btn-primary'>Delete Note</button>
            </div>
          </div>
        `;otesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
}
// >>>>>>> 5253d5913de8d234d6270a244fc8e645e055566a:js/app.js
*/
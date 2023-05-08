// JSON.stringify(object);
//превращает объект в строку в формате json

// JSON.parse(string);
//превращает строку в формате json в объект

//типичный объект
// let person = {
//     firstName: "Andrey",
//     lastName: "Ivanov",
//     birthDate: "04.05.2000",
//     'favourite animal': 'rat'
// }

// console.log(person.firstName); //Andrey
   

// А это представление объекта в JSON формате:
// "{
//  "firstName" : "Andrey",
//  "lastName" : "Ivanov",
//  "birthDate" : "04.05.2000"
// }"


// let person = {
//     firstName: "Andrey",
//     lastName: "Ivanov",
//     age: 20,
//     isStudent: true,
//     сontactInfo: {
//     "phone": "098-556-33-41",
//     "email": "AndreyIvanov@gmail.com"
//     },
//     disciplines: [
//     "Programming", "Machine engineering", "English"
//     ]
// }

// let jsonPerson = JSON.stringify(person);
// console.log(jsonPerson);

// let objPerson = JSON.parse(jsonPerson);
// console.log(objPerson);



// GET получение данных  пример: хочу войти в существующий аккаунт
// POST создание, отправка данных пример: хочу зарегистрировать новый аккаунт
// PUT изменение/обновление пример: изменить имя профиля
// DELETE  удаление пример: удалить профиль 


//fetch('адрес, то есть url, то есть api')
//используем метод ajax-запроса - fetch, в скобочках
//указываем api, то есть адрес по которому будем делать запрос
//по умолчанию будет выполнен get запрос 
//в качестве ответа приходит объект Promise
//чтобы обработать результат, вы используете метод then

const container = document.querySelector('.container');

fetch('https://rickandmortyapi.com/api/character')
    .then(response => {
        return response.json();
        //метод json обрабатывает объект Promise(response)
        //переведет в json, а затем этот json он переведт в типичный объект js
    })
   // .then(data => {
        // console.log(data);
        // console.log(data.results);
        // console.log(data.results[0]);
        // console.log(data.results[0].name);
        // console.log(data.results[0].image);


        // for(let character of data.results) {
        //     let title = document.createElement('h2');
        //     title.innerText = character.name;
        //     container.appendChild(title);
        //     let img = document.createElement('img');
        //     img.setAttribute('src', character.image);
        //     img.setAttribute('alt', character.name);
        //     container.appendChild(img);
        // }

        
    //     for(let i = 0; i < data.results.length; i++) {
    //         let title = document.createElement('h2');
    //         title.innerText = data.results[i].name;
    //         container.appendChild(title);
    //         let img = document.createElement('img');
    //         img.setAttribute('src', data.results[i].image);
    //         img.setAttribute('alt', data.results[i].name);
    //         container.appendChild(img);
    //     }
     //})


// hasAttribute(name) – проверяет наличие атрибута.
// getAttribute(name) – получает значение атрибута.
// setAttribute(name, value) – устанавливает значение атрибута.
// removeAttribute(name) – удаляет атрибут




// My Key For NASA-API
// dFFzpGvpZfUu0ZR3gMDvViG26boGRf6CHTyvAWur
// https://api.nasa.gov/planetary/apod?api_key=dFFzpGvpZfUu0ZR3gMDvViG26boGRf6CHTyvAWur

fetch('https://api.nasa.gov/planetary/apod?api_key=dFFzpGvpZfUu0ZR3gMDvViG26boGRf6CHTyvAWur')
.then(response=>{
    return response.json()
})
.then(data =>{
    console.log(data);  
    let title = document.createElement('h2');
    title.innerText = data.title;
    container.appendChild(title);
    let img = document.createElement('img');
    img.setAttribute('src', data.url);
    img.setAttribute('alt', data.title);
    container.appendChild(img);
    let explanation = document.createElement('p');
    explanation.innerText = data.explanation;
    container.appendChild(explanation);
   
})
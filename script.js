let book_info = document.querySelectorAll('.sidebar input')
let submitBook = document.querySelector('.add')


class Book {
    constructor ([title,author,pages,read]) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
}

// submitBook.addEventListener('click', (e) => {
//     console.log(book_info)
//     createCard(createBook(book_info))

// })

// book_info.forEach(ele =>{
//     ele.setCustomValidity('');
//     // ele.checkValidity();

//     ele.addEventListener('input',() => {

//         console.log(ele.checkValidity())

//     })
// })
const createBook = (info) => {
    const new_book = []

    info.forEach(ele => {
        if(ele.value == 'on'){return new_book.push(ele.checked)}
        new_book.push(ele.value)
    });
    return new Book(new_book)
}

function createCard (book) {
    const card = document.createElement('div')
    const book_container = document.querySelector('.books')
    const heading = document.createElement('h1')
    const info = document.createElement('ol')

    heading.innerText = book.title

    for (const key in book) {
        if (key == 'title') {
            continue
        }
        const element = book[key];
        const li = document.createElement('li')
        li.innerText = `${key}: ${element}`
        info.appendChild(li)
    }
    card.className = 'card'
    
    card.appendChild(heading)
    card.appendChild(info)
    // card.innerText = `By: ${book.author}|| Pages: ${book.pages}||Read: ${book.read}`
    book_container.appendChild(card)
}

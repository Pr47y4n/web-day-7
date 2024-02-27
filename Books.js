const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { id: 3, title: "1984", author: "George Orwell", year: 1949 },
];

const search_input = document.getElementById("search");
const book_list = document.getElementById("books");

function displayBooks(books) {
    book_list.innerHTML = "";
    books.forEach(book => {
        const book_item = document.createElement("div");
        book_item.innerHTML = `<strong>Title:</strong> ${highlight_matches(book.title)}<br><strong>Author:</strong> ${highlight_matches(book.author)}<br><br>`;
        book_list.appendChild(book_item);
    });
}


function highlight_matches(text) {
    const search_term = search_input.value.trim();
    if(search_term === "") return text;

    const regex = new RegExp(search_term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), "gi");
    return text.replace(regex, match => `<span class="highlight">${match}</span>`); 
}

function search_book() {
    const search_term = search_input.value.trim().toLowerCase();
    const filtered_books = books.filter(book => {
        return book.title.toLowerCase().includes(search_term) || book.author.toLowerCase().includes(search_term);
    })

    if(filtered_books.length === 0) {
        book_list.innerHTML = "No books found";
    } else {
        displayBooks(filtered_books);
    }
}

search_input.addEventListener("input", search_book);
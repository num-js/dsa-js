class Book {
    constructor(title, author, genre, published_year) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.published_year = published_year;
    }
}

/** 
 * 'this' keyword explanation ---
 * 'this' keyword points to the current object, in global space it refers to 'window'
 * But in this case, 'this' keyword refers to book object, because current instance for 'this' keyword is the Book class.
 * by using 'this' keyword we can access any variable (like-title, author,genre etc.) of the Book class 
*/

Book.prototype.getDescription = function () {
    return `${this.title} by ${this.author} (${this.genre}, ${this.published_year})`;
}

Book.prototype.isRecent = function () {
    if (this.published_year > 2000) {
        return true;
    }
    return false;
}

const book1 = new Book("Learn Angular", "Akhil Mehra", "Software Development", 2024);
console.log(book1.getDescription());
console.log("Is this recent book - ", book1.isRecent());

const book2 = new Book("You Don't Know JS", "Suman Sarkar", "Software Development", 1999);
console.log(book2.getDescription());
console.log("Is this recent book - ", book2.isRecent());
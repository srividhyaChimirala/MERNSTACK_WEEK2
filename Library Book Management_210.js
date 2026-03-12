/*
Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise




  1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.


  2. Perform the following operations:

      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books
*/
class Book{
     title;
      author;
      pages ;
      isAvailable;
      
      constructor(title,author,pages,isAvailable)
      {this.title=title;
        
        this.author=author;
        this.pages=pages;
        this.isAvailable=isAvailable;
      }
 borrow()
 {
  console.log(`book is not available `);
 }     
 returnBook()
 {
    console.log(`book as available ${this.isAvailable}`);
 }
 getInfo()
 {
    console.log(`book details the ${this.title} by ${ this.author} pages ${this.pages} `);
 }
 isLongBook()
 {  let c;
    if( this.pages >300)
    {  return true ;
    }
    else return false;
 }
}
let b1=new Book("abc","xyz",300,true);
let b2=new Book("def","pqr",600,true);
let b3=new Book("ghi","s",500,false);
let b4=new Book("jikl","t",900,true);
let b5=new Book("mno","u",200,false);
b1.getInfo()
b2.getInfo()
b3.getInfo()
b4.getInfo()
b5.getInfo()
b1.borrow()
b2.borrow()
b1.returnBook()
b2.isLongBook();
let arr=[b1,b2,b3,b4,b5]
let count=0;
for(let i=0;i<arr.length;i++)
{ 
    if(arr[i].pages>300)
    {
        count++;
    
    }
}
console.log( `no of books above 300 pages : ${count}`)

let c=0;
for(let i=0;i<arr.length;i++)
{ if(arr[i].isAvailable===true)
{
    console.log(`avalilable books ${arr[i].title}`)
}
}
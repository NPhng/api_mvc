export interface Book 
{
  id: number;
  title: string;
  author: string;
  year: number;
}
export const books: Book[] = [
{ 
    id: 1,
    title: "The Great Gatsby", 
    author: "F. Scott Fitzgerald",
    year: 1925 
},
  { 
    id: 2,
    title: "1984", 
    author: "George Orwell", 
    year: 1949 
}
];

import {db} from '../dbStrategy/mongo.js';

export async function getAllBooks(req, res){
    const books = await db
    .collection('books')
    .find()
    .toArray();
  res.send(books);
}
import mongoose from "mongoose";

export interface IBook {
  titulo: string;
  autor: string;
  precio: number;
  stock: number;
}

const bookSchema = new mongoose.Schema<IBook>({
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    precio: { type: Number, required: true },
    stock: { type: Number, required: true },
})

export const Book = mongoose.model<IBook>("Book", bookSchema);
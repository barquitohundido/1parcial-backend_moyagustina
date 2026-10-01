import dotenv from "dotenv";
import mongoose from "mongoose";
import { Book } from "./Book.js";
dotenv.config();
const action = process.argv[2];
const arg1 = process.argv[3] || "";
const arg2 = process.argv[4] || "";
const arg3 = process.argv[5] || "0";
const arg4 = process.argv[6] || "0";
const arg5 = process.argv[7] || "0";
async function main() {
    try {
        await mongoose.connect(process.env.URI_DB);
        console.log("Conectado a MongoDB con éxito");
        if (action === "create") {
            const nuevo = await Book.create({
                titulo: arg1,
                autor: arg2,
                precio: Number(arg3),
                stock: Number(arg4)
            });
            console.log("Libro creado:", nuevo);
        }
        else if (action === "read") {
            const libros = await Book.find();
            console.log("Lista de libros almacenados:", libros);
        }
        else if (action === "update") {
            const actualizado = await Book.findByIdAndUpdate(arg1, { titulo: arg2, autor: arg3, precio: Number(arg4), stock: Number(arg5) }, { new: true });
            console.log(actualizado ? "Libro actualizado:" : "No encontrado:", actualizado);
        }
        else if (action === "delete") {
            const eliminado = await Book.findByIdAndDelete(arg1);
            console.log(eliminado ? "Libro eliminado:" : "No encontrado:", eliminado);
        }
        await mongoose.disconnect();
    }
    catch (error) {
        console.error("Error en la operación:", error);
    }
}
main();
//# sourceMappingURL=index.js.map
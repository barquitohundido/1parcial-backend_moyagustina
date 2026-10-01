import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

async function main() {
  try {
    await mongoose.connect(process.env.URI_DB as string);
    console.log("Conectado a MongoDB con éxito");

    await mongoose.disconnect();
  } catch (error) {
    console.error("Error de conexión:", error);
  }
}

main();
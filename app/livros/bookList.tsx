import { ImageProps } from "react-native";

export interface Book {
    name: string;
    image: ImageProps["source"];
    description: string;
}

const sapiensImage =  require("../../src/assets/sapiens.jpg")
const arteDaGuerraImage = require("../../src/assets/arte-da-guerra.jpg")
const metamorfose = require("../../src/assets/metamorfose.jpg")
const meditacoes = require("../../src/assets/meditacoes.jpg")
const codigoLimpo = require("../../src/assets/codigo-limpo.jpg")

export const bookList: Book[] = [
    {
        name: "Sapiens: Uma Breve História da Humanidade",
        image: sapiensImage,
        description: "Yuval Noah Harari"
    },
    {
        name: "A Arte da Guerra",
        image: arteDaGuerraImage,
        description: "Sun Tzu"
    },
    {
        name: "Metamorfose",
        image: metamorfose,
        description: "Franz Kafka"
    },
    {
        name: "Meditações",
        image: meditacoes,
        description: "Marco Aurélio"
    },
    {
        name: "Código Limpo",
        image: codigoLimpo,
        description: "Robert C. Martin"
    }
]
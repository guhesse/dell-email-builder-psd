import { useContext } from "react";
import { CsvContext } from "../context/CsvContext";

export default function useCsvContext() {
    const context = useContext(CsvContext)

    if (context === undefined) {
        throw new Error('Não está dentro do contexto')
    }

    return context

}
import { useContext } from "react";
import { BannerContext } from "../context/BannerContext";

export default function useBannerContext() {
    const context = useContext(BannerContext)

    if (context === undefined) {
        throw new Error('Não está dentro do contexto')
    }

    return context

}
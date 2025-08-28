import type { Marca } from "@/types/marca";
import { v4 as uuid } from "uuid"

export const MARCAS: Marca[] = [
    {
        id: uuid(),
        name: "Alessi",
        href: "https://transquim.com/collections/alessi",
        src: "/img/marcas/alessi.webp",
        alt: "Alessi - Alcoholes, jabones y productos de limpieza",
        height: "228",
        width: "550",
    },
    {
        id: uuid(),
        name: "Slender",
        href: "https://transquim.com/collections/slender",
        src: "/img/marcas/slender.webp",
        alt: "Slender - Productos saludables para un estilo de vida sano",
        height: "228",
        width: "550",
    },
    {
        id: uuid(),
        name: "Yara",
        href: "https://transquim.com/collections/chocolateria-yara",
        src: "/img/marcas/yara.webp",
        alt: "Yara - Chocolate peruano con cacao orgánico fino de aroma",
        height: "228",
        width: "550",
    },
    {
        id: uuid(),
        name: "Slender Gel Reforzado",
        href: "https://transquim.com/collections/slender-gel-reforzado",
        src: "/img/marcas/slender2.webp",
        alt: "Slender Gel Reforzado - Gel tonificante que refresca y humecta la piel",
        height: "228",
        width: "550",
    },
    {
        id: uuid(),
        name: "Ecovibe",
        href: "https://transquim.com/collections/ecovibe",
        src: "/img/marcas/ecovibe.webp",
        alt: "Ecovibe - Gel de ecografía y ultrasonido, no alergénico y fácil de aplicar",
        height: "228",
        width: "550",
    },
    {
        id: uuid(),
        name: "Bioflux",
        href: "https://transquim.com/collections/insumos-agronomos",
        src: "/img/marcas/bioflux.webp",
        alt: "Bioflux - Agroquímicos y soluciones de tratamiento de aguas residuales",
        height: "228",
        width: "550",
    },
];

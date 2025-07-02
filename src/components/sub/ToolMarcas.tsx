import { v4 as uuid } from "uuid"

export interface IDevToolsElement {
    id: string
	href: string
    alt: string
    className?: string
	src: string
	width: string
    height: string
}

export const DevTools: IDevToolsElement[] = [
    {
        id: uuid(),
        href: "https://transquim.com/collections/alessi",
        alt: "Alessi - Alcoholes, jabones y productos de limpieza",
        src: "/img/marcas/alessi.webp",
        width: "550",
        height: "228",
    },
    {
        id: uuid(),
        href: "https://transquim.com/collections/slender",
        alt: "Slender - Productos saludables para un estilo de vida sano",
        src: "/img/marcas/slender.webp",
        width: "550",
        height: "228",
    },
    {
        id: uuid(),
        href: "https://transquim.com/collections/chocolateria-yara",
        alt: "Yara - Chocolate peruano con cacao orgánico fino de aroma",
        src: "/img/marcas/yara.webp",
        width: "550",
        height: "228",
    },
    {
        id: uuid(),
        href: "https://transquim.com/collections/slender-gel-reforzado",
        alt: "Slender Gel Reforzado - Gel tonificante que refresca y humecta la piel",
        src: "/img/marcas/slender2.webp",
        width: "550",
        height: "228",
    },
    {
        id: uuid(),
        href: "https://transquim.com/collections/ecovibe",
        alt: "Ecovibe - Gel de ecografía y ultrasonido, no alergénico y fácil de aplicar",
        src: "/img/marcas/ecovibe.webp",
        width: "550",
        height: "228",
    },
    {
        id: uuid(),
        href: "https://transquim.com/collections/insumos-agronomos",
        alt: "Bioflux - Agroquímicos y soluciones de tratamiento de aguas residuales",
        src: "/img/marcas/bioflux.webp",
        width: "550",
        height: "228",
    },
];


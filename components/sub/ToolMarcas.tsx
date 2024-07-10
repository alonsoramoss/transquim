import { v4 as uuid } from 'uuid'

export interface IDevToolsElement {
    id: string
	href: string
	src: string
	width: string
    height: string
	className?: string
}

export const DevTools: IDevToolsElement[] = [
    {
        id: uuid(),
        href: "https://transquim.com/collections/alessi",
        src: "/img/alessi.webp",
        width: "550",
        height: "400", 
    },
    {
        id: uuid(),
        href: "https://transquim.com/collections/slender",
        src: "/img/slender.webp",
        width: "550",
        height: "400", 
    },
    {
        id: uuid(),
        href: "https://transquim.com/collections/chocolateria-yara",
        src: "/img/yara.webp",
        width: "550",
        height: "400", 
    },
    {
        id: uuid(),
        href: "https://transquim.com/collections/insumos-agronomos",
        src: "/img/bioflux.webp",
        width: "550",
        height: "400", 
    },
    {
        id: uuid(),
        href: "https://transquim.com/collections/slender-gel-reforzado",
        src: "/img/slender2.webp",
        width: "550",
        height: "400", 
    },
    {
        id: uuid(),
        href: "https://transquim.com/collections/ecovibe",
        src: "/img/ecovibe.webp",
        width: "550",
        height: "400", 
    },
]

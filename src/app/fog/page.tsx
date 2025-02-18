import Gallery from "@components/Gallery";
import { GalleryImage } from "src/types";

const Fog = () => {
    const images: GalleryImage[] = [
        {
            imgSrc: "https://fastly.picsum.photos/id/538/200/300.jpg?hmac=QyW9exvhaGnW9uknxjXGZYm6JAtg9ctqbnYTTwBk61o",
            imgAlt: "",
            thumbnailSrc: "",
            thumbnailAlt: ""
        },
        {
            imgSrc: "https://fastly.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0",
            imgAlt: "",
            thumbnailSrc: "",
            thumbnailAlt: ""
        },
        {
            imgSrc: "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
            imgAlt: "",
            thumbnailSrc: "",
            thumbnailAlt: ""
        },
        {
            imgSrc: "https://fastly.picsum.photos/id/1027/200/300.jpg?hmac=WCxdERZ7sgk4jhwpfIZT0M48pctaaDcidOi3dKSHJYY",
            imgAlt: "",
            thumbnailSrc: "",
            thumbnailAlt: ""
        },
        {
            imgSrc: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
            imgAlt: "",
            thumbnailSrc: "",
            thumbnailAlt: ""
        },
        {
            imgSrc: "https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ",
            imgAlt: "",
            thumbnailSrc: "",
            thumbnailAlt: ""
        },
    ]

    return (
        <>
            <Gallery images={images} />
        </>
    );
}

export default Fog;
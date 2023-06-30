import SlideShow from '../SlideShow';
import { choosePicture } from '../utils/ChoosePicture';

function Gallery({ picturesDesktop, picturesPhone }) {

    const pictures = choosePicture(picturesDesktop, picturesPhone)

    return (
        <SlideShow
            pictures={pictures}
            onClick={true}
        />
    )
};

export default Gallery;
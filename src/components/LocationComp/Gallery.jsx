import SlideShow from '../SlideShow';
import { choosePicture } from '../utils/ChoosePicture';

function Gallery({ picturesDesktop, picturesPhone }) {

    const pictures = choosePicture(picturesDesktop, picturesPhone)

    return (
        <SlideShow
            pictures={pictures}
            onClick={true}
            autoplaySpeed={2500}
        />
    )
};

export default Gallery;
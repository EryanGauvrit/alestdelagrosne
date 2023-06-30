import { choosePicture } from '../utils/ChoosePicture';

function Logo({ logoDesktop, logoPhone, alt }) {

    const logo = choosePicture(logoDesktop, logoPhone);

    return (
        <img src={logo} alt={alt} />
    )
};

export default Logo;
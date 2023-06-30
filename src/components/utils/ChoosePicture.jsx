

export function choosePicture(picturesDesktop, picturesPhone) {
    const phoneScreenSize = 750;
    if (window.screen.width >= phoneScreenSize) {
        return picturesDesktop;
    } else {
        return picturesPhone;
    }
};




export function isDesktopScreenSize() {
    const phoneScreenSize = 750;
    if (window.screen.width >= phoneScreenSize) {
        return true;
    }
};


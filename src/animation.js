export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 100,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            when: "beforeChildren",
            staggerChildren: 0.25,
        },
    },
    exit: {
        opacity: 0,
        y: 100,
        transition: {
            duration: 0.3,
        },
    }
};

export const fade = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {ease: 'easeOut', duration: 1.0}
    }
};

export const titleAnim = {
    hidden: {y: 200},
    show: {
        y: 0,
        transition: {duration: 0.75, ease: "easeOut"}
    }
};

export const slider = {
    hidden: {x: '-130%', skew: '45deg'},
    show: {
        x: '100%',
        skew: '0deg',
        transition: {ease: "easeOut", duration: 1},
    }
}

export const sliderContainer = {
    hidden: {opacity: 1},
    show: {
        opacity: 1,
        transition: {staggerChildren: 0.1, ease: 'easeOut'},
    }
};
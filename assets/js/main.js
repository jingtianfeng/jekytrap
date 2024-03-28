if (!!bootstrap) {
    if (bootstrap.hasOwnProperty("Carousel")) {
        console.log(`Bootstrap \t ${bootstrap.Carousel.VERSION}`);
    } else {
        console.log("Bootstrap \t NO CAROUSEL");
    }
} else {
    console.log("Bootstrap \t ERROR");
}

if (!!gsap) {
    if (gsap.hasOwnProperty("version")) {
        console.log(`GSAP \t\t ${gsap.version}`);
    } else {
        console.log("GSAP \t\t NO VERSION");
    }
} else {
    console.log("GSAP \t\t ERROR");
}

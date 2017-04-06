const captions = [];
captions[0] = {
    startTime: 0,
    text: ""

};
captions[1] = {
    startTime: 240,
    text: "Now that we've looked at the architecture of the internet, let's see how you might",
    highlighted: false
};
captions[2] = {
    startTime: 4 * 1000 + 130,
    text: "connect your personal devices to the internet inside your house.",
    highlighted: false
};
captions[3] = {
    startTime: 7 * 1000 + 535,
    text: "Well there are many ways to connect to the internet, and",
    highlighted: false
}
captions[4] = {
    startTime: 11 * 1000 + 270,
    text: "most often people connect wirelessly.",
    highlighted: false
}
captions[5] = {
    startTime: 13 * 1000 + 960,
    text: "Let's look at an example of how you can connect to the internet.",
    highlighted: false
}
captions[6] = {
    startTime: 17 * 1000 + 940,
    text: "If you live in a city or a town, you probably have a coaxial cable for",
    highlighted: false
}
captions[7] = {
    startTime: 22 * 1000 + 370,
    text: "cable Internet, or a phone line if you have DSL, running to the outside of",
    highlighted: false
}
captions[8] = {
    startTime: 26 * 1000 + 880,
    text: "your house, that connects you to the Internet Service Provider, or ISP.",
    highlighted: false
}
captions[9] = {
    startTime: 30 * 1000 + 920,
    text: "If you live far out in the country, you'll more likely have",
    highlighted: false
}
captions[10] = {
    startTime: 34 * 1000 + 730,
    text: "a dish outside your house, connecting you wirelessly to your closest ISP, or",
    highlighted: false
}
captions[11] = {
    startTime: 39 * 1000 + 430,
    text: "you might also use the telephone system.",
    highlighted: false
}
captions[12] = {
    startTime: 42 * 1000 + 350,
    text: "Whether a wire comes straight from the ISP hookup outside your house, or",
    highlighted: false
}
captions[13] = {
    startTime: 46 * 1000 + 300,
    text: "it travels over radio waves from your roof,",
    highlighted: false
}
captions[14] = {
    startTime: 49 * 1000 + 270,
    text: "the first stop a wire will make once inside your house, is at your modem.",
    highlighted: false
}
captions[15] = {
    startTime: 53 * 1000 + 760,
    text: "A modem is what connects the internet to your network at home.",
    highlighted: false
}
captions[16] = {
    startTime: 57 * 1000 + 780,
    text: "A few common residential modems are DSL or",
    highlighted: false
}

const transcriptContainer = document.querySelector('.transcript-container');
const video = document.querySelector('video');

// Add span tag around each caption in transcript container
let textWithSpan;
for (let i = 0; i < captions.length; i++) {
    textWithSpan = '<span>' + captions[i].text + '</span>';
    transcriptContainer.innerHTML = transcriptContainer.innerHTML.replace(captions[i].text, textWithSpan);
}

const captionSpans = transcriptContainer.getElementsByTagName('span');

let highlightedIndex = 0;

video.addEventListener("timeupdate", function() {
    const currentTimeInMilliseconds = this.currentTime * 1000;
    for (let i = 0; i < captions.length - 1; i++) {
        if (parseFloat(currentTimeInMilliseconds) >= parseFloat(captions[i].startTime) &&
            parseFloat(currentTimeInMilliseconds) < parseFloat(captions[i + 1].startTime)) {

            if (highlightedIndex != i) { // check if the highlighted caption changed
                clearHighlight();
                captionSpans[i].className = "highlighted";
                highlightedIndex = i;
            }
            break;
        } else if (parseFloat(currentTimeInMilliseconds) >= parseFloat(captions[captions.length - 1].startTime)) {

            clearHighlight();
            captionSpans[captionSpans.length - 1].className = "highlighted";
            break;
        }
    }
});


    for (let i = 0; i < captionSpans.length; i++) {
        captionSpans[i].addEventListener("click", () => {
            video.currentTime = captions[i].startTime / 1000;
            console.log(video.currentTime);
        });
    }



const clearHighlight = () => {
    for (let i = 0; i < captionSpans.length; i++) {
        captionSpans[i].className = "";
    }
}

export default function calculateHeadlineFontSize(width, height, ratio) {
    let fontSize;
    let area = height * width;


    let xSmallScreen = 100000;
    let smallScreen = 250000;
    let mediumScreen = 500000;
    let largeScreen = 1000000;

    switch (true) {
        case (ratio < 0.5):
            switch (true) {
                case (area < smallScreen):
                    fontSize = area / (height * 10) * (ratio * 7);
                    break;
                case (area < mediumScreen):
                    fontSize = area / (height * 10) * (ratio * 2);
                    break;
                case (area >= mediumScreen):
                    fontSize = area / (height * 10) * (ratio * 3);
                    break;
            }
            break;
        case (ratio < 0.75):
            switch (true) {
                case (area < smallScreen):
                    fontSize = area / (height * 10) * (ratio * 1.5);
                    break;
                case (area < mediumScreen):
                    fontSize = area / (height * 10) * (ratio * 1);
                    break;
                case (area >= mediumScreen):
                    fontSize = area / (height * 10) * (ratio * 1.5);
                    break;
            }
            break;
        case (ratio < 1):
            switch (true) {
                case (area < smallScreen):
                    fontSize = area / (height * 10) * (ratio * 1.5);
                    break;
                case (area < mediumScreen):
                    fontSize = area / (height * 10) * (ratio * 3);
                    break;
                case (area >= mediumScreen):
                    fontSize = area / (height * 10) * (ratio * 0.75);
                    break;
            }
            break;

        case (ratio === 1):
            switch (true) {
                case (area < smallScreen):
                    fontSize = area / (height * 10) * (ratio * 0.65);
                    break;
                case (area < mediumScreen):
                    fontSize = area / (height * 10) * (ratio * 0.6);
                    break;
                case (area >= mediumScreen):
                    fontSize = area / (height * 10) * (ratio * 0.6);
                    break;
            }
            break;


        case (ratio < 1.25):
            switch (true) {
                case (area < smallScreen):
                    fontSize = area / (height * 10) * (ratio * 0.55);
                    break;
                case (area < mediumScreen):
                    fontSize = area / (height * 10) * (ratio * 0.55);
                    break;
                case (area >= mediumScreen):
                    fontSize = area / (height * 10) * (ratio * 0.55);
                    break;
            }
            break;

        case (ratio < 1.5):
            switch (true) {
                case (area < smallScreen):
                    fontSize = area / (height * 10) * (ratio * 0.5);
                    break;
                case (area < mediumScreen):
                    fontSize = area / (height * 10) * (ratio * 1);
                    break;
                case (area >= mediumScreen):
                    fontSize = area / (height * 10) * (ratio * 1);
                    break;
            }
            break;
        case (ratio < 1.75):
            switch (true) {
                case (area < smallScreen):
                    fontSize = area / (height * 10) * (ratio * 0.4);
                    break;
                case (area < mediumScreen):
                    fontSize = area / (height * 10) * (ratio * 0.4);
                    break;
                case (area >= mediumScreen):
                    fontSize = area / (height * 10) * (ratio * 0.4);
                    break;
            }
            break;
        case (ratio < 2):
            switch (true) {
                case (area < smallScreen):
                    fontSize = area / (height * 10) * (ratio * 0.3);
                    break;
                case (area < mediumScreen):
                    fontSize = area / (height * 10) * (ratio * 0.3);
                    break;
                case (area >= mediumScreen):
                    fontSize = area / (height * 10) * (ratio * 0.3);
                    break;
            }
            break;
        case (ratio < 3):
            switch (true) {
                case (area < smallScreen):
                    fontSize = area / (height * 10) * (ratio * 0.2);
                    break;
                case (area < mediumScreen):
                    fontSize = area / (height * 10) * (ratio * 0.2);
                    break;
                case (area >= mediumScreen):
                    fontSize = area / (height * 10) * (ratio * 0.2);
                    break;
            }
            break;

        case (ratio < 3.5):
            switch (true) {
                case (area < smallScreen):
                    fontSize = area / (height * 10) * (ratio * 0.14);
                    break;
                case (area < mediumScreen):
                    fontSize = area / (height * 10) * (ratio * 0.115);
                    break;
                case (area >= mediumScreen):
                    fontSize = area / (height * 10) * (ratio * 0.13);
                    break;
            }
            break;
        case (ratio < 4):
            switch (true) {
                case (area < xSmallScreen):
                    fontSize = area / (height * 10) * (ratio * 0.07);
                    break;
                case (area < smallScreen):
                    fontSize = area / (height * 10) * (ratio * 0.1);
                    break;
                case (area < mediumScreen):
                    fontSize = area / (height * 10) * (ratio * 0.1);
                    break;
                case (area >= mediumScreen):
                    fontSize = area / (height * 10) * (ratio * 0.1);
                    break;
            }
            break;
        case (ratio < 5):
            switch (true) {
                case (area < xSmallScreen):
                    fontSize = area / (height * 10) * (ratio * 0.08);
                    break;
                case (area < smallScreen):
                    fontSize = area / (height * 10) * (ratio * 0.08);
                    break;
                case (area < mediumScreen):
                    fontSize = area / (height * 10) * (ratio * 0.08);
                    break;
                case (area >= mediumScreen):
                    fontSize = area / (height * 10) * (ratio * 0.08);
                    break;
            }
            break;
        case (ratio < 6):
            switch (true) {
                case (area < xSmallScreen):
                    fontSize = area / (height * 10) * (ratio * 0.065);
                    break;
                case (area < smallScreen):
                    fontSize = area / (height * 10) * (ratio * 0.065);
                    break;
                case (area < mediumScreen):
                    fontSize = area / (height * 10) * (ratio * 0.065);
                    break;
                case (area >= mediumScreen):
                    fontSize = area / (height * 10) * (ratio * 0.065);
                    break;
            }
            break;
        case (ratio < 7):
            switch (true) {
                case (area < xSmallScreen):
                    fontSize = area / (height * 10) * (ratio * 0.05);
                    break;
                case (area < smallScreen):
                    fontSize = area / (height * 10) * (ratio * 0.05);
                    break;
                case (area < mediumScreen):
                    fontSize = area / (height * 10) * (ratio * 0.05);
                    break;
                case (area >= mediumScreen):
                    fontSize = area / (height * 10) * (ratio * 0.05);
                    break;
            }
            break;
        case (ratio < 10):
            switch (true) {
                case (area < xSmallScreen):
                    fontSize = area / (height * 10) * (ratio * 0.05);
                    break;
                case (area < smallScreen):
                    fontSize = area / (height * 10) * (ratio * 0.05);
                    break;
                case (area < mediumScreen):
                    fontSize = area / (height * 10) * (ratio * 0.05);
                    break;
                case (area >= mediumScreen):
                    fontSize = area / (height * 10) * (ratio * 0.05);
                    break;
            }
            break;
        case (ratio >= 10):
            switch (true) {
                case (area < xSmallScreen):
                    fontSize = area / (height * 10) * (ratio * 0.025);
                    break;
                case (area < smallScreen):
                    fontSize = area / (height * 10) * (ratio * 0.025);
                    break;
                case (area < mediumScreen):
                    fontSize = area / (height * 10) * (ratio * 0.025);
                    break;
                case (area >= mediumScreen):
                    fontSize = area / (height * 10) * (ratio * 0.025);
                    break;
            }
            break;
        default:
            fontSize = 10
            break;
    }
    return fontSize;
}
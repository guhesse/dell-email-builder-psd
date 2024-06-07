export default function calculateHeadlineFontSize(width, height, ratio) {
    let fontSize;
    let area = height * width;

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
        //     break;
        // case (ratio < 1.5):
        //     fontSize = (height * width) / (height * 10) * (width / height);
        //     break;
        // case (ratio <= 2):
        //     fontSize = (height * width) / (height * 10) * ((width / height) / (width / height * 2.5));
        //     break;
        // case (ratio < 3):
        //     fontSize = (height * width) / (height * 10) * ((width / height) / 4);
        //     break;
        // case (ratio <= 4):
        //     fontSize = (height * width) / (height * 10) * ((width / height) / (width / height * 2.5));
        //     break;
        // case (ratio < 5):
        //     fontSize = (height * width) / (height * 10) * ((width / height) / 10);
        //     break;
        // case (ratio <= 7):
        //     fontSize = (height * width) / (height * 10) * ((width / height) / (width / height * 3));
        //     break;
        // case (ratio <= 11):
        //     fontSize = (height * width) / (height * 10) * ((width / height) / (width / height * 3.5));
        //     break;
        default:
            fontSize = 30
            break;
    }
    return fontSize;
}
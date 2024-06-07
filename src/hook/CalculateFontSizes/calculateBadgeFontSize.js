export default function calculateBadgeFontSize(width, height, ratio) {
    let fontSize;
    switch (true) {
        // case (ratio < 0.5):
        //     fontSize = (height * width) / (height * 20) * ((width / height) * 6 );
        //     break;
        // case (ratio < 1):
        //     fontSize = (height * width) / (height * 20) * ((width / height) * 1.5);
        //     break;
        // case (ratio < 1.5):
        //     fontSize = (height * width) / (height * 20) * (width / height);
        //     break;
        // case (ratio < 2):
        //     fontSize = (height * width) / (height * 20) * ((width / height) / (width / height * 2.5));
        //     break;
        // case (ratio < 3):
        //     fontSize = (height * width) / (height * 20) * ((width / height) / 4);
        //     break;
        // case (ratio <= 4):
        //     fontSize = (height * width) / (height * 20) * ((width / height) / (width / height * 2.75));
        //     break;
        // case (ratio < 5):
        //     fontSize = (height * width) / (height * 20) * ((width / height) / 20);
        //     break;
        // case (ratio <= 7):
        //     fontSize = (height * width) / (height * 20) * ((width / height) / (width / height * 3));
        //     break;
        // case (ratio <= 11):
        //     fontSize = (height * width) / (height * 20) * ((width / height) / (width / height * 3.5));
        //     break;
        default:
            fontSize = 30;
            break;
    }
    return fontSize;
}
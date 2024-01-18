export default function limitCharsPerLine(text, limit) {
    const words = text.split(' ');
    let currentLine = '';
    let result = '';

    for (const word of words) {
        if ((currentLine + word).length <= limit) {
            currentLine += (currentLine === '' ? '' : ' ') + word;
        } else {
            result += (result === '' ? '' : '\r') + currentLine;
            currentLine = word;
        }
    }

    result += (result === '' ? '' : '\r') + currentLine;

    return result;
}
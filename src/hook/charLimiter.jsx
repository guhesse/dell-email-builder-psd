export default function limitCharsPerLine(text, limit, capitalization = "none") {
    const capitalizeText = (str, type) => {
        switch (type) {
            case "upper":
                return str.toUpperCase();
            case "lower":
                return str.toLowerCase();
            case "capitalized":
                return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
            default:
                return str;
        }
    };

    const words = text.split(' ');
    let currentLine = '';
    let result = '';

    for (const word of words) {
        if ((currentLine + word).length <= limit) {
            if (currentLine === '' || currentLine.endsWith('.')) {
                currentLine += (currentLine === '' ? '' : ' ') + capitalizeText(word.charAt(0), capitalization) + word.slice(1);
            } else {
                currentLine += ' ' + word;
            }
        } else {
            result += (result === '' ? '' : '\r') + currentLine;
            currentLine = capitalizeText(word.charAt(0), "none") + word.slice(1); // Não capitalizar após quebra de linha
        }
    }

    result += (result === '' ? '' : '\r') + currentLine;

    return result.trim(); // Remover espaços em branco no início e no final
}

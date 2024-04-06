import { batchPlay } from "../App";

export async function getBoundsAndPosition(action, method = "", i = 1, property = "", padding = 0) {
    const result = await batchPlay(action, {});
    const bounds = result[i][method];
    const position = bounds[property]._value + padding;
    return { position };
}

export async function getTextContent(action, i = 1) {
    const result = await batchPlay(action, {})
    const content =  result[i].textKey.textKey;
    const htmlContent = content.replace(/\r/g, ' ');
    return { content: htmlContent };
}
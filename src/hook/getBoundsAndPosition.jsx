import { batchPlay } from "../App";

export async function getBoundsAndPosition(action, method = "", i = 1, property = "", padding = 0) {
    const result = await batchPlay(action, {});
    const bounds = result[i][method];
    const position = bounds[property]._value + padding;
    return { position };
}

export async function getBoundsAndPositionNoProperty(action, method = "", i = 1) {
    const result = await batchPlay(action, {});
    const bounds = result[i][method];
    const height = bounds.height._value;
    const width = bounds.width._value;
    const top = bounds.top._value;
    const bottom = bounds.bottom._value;
    const left = bounds.left._value;
    const right = bounds.right._value;
    return { bounds, height, width, top, bottom, left, right };
}

export async function getTextContent(action, i = 1) {
    const result = await batchPlay(action, {})
    const content = result[i].textKey.textKey;
    const htmlContent = content.replace(/\r/g, ' ');
    return { content: htmlContent };
}

export async function getColorFromSolidContent(action, i = 1) {
    const result = await batchPlay(action, {})
    const red = result[i].adjustment[0].color.red;
    const green = result[i].adjustment[0].color.grain;
    const blue = result[i].adjustment[0].color.blue;
    return { r: red, g: green, b: blue };
}

export async function getColorFromTextContent(action, i = 1) {
    const result = await batchPlay(action, {})
    const red = result[i].textKey.textStyleRange[0].textStyle.color.red;
    const green = result[i].textKey.textStyleRange[0].textStyle.color.grain;
    const blue = result[i].textKey.textStyleRange[0].textStyle.color.blue;
    return { r: red, g: green, b: blue };
}



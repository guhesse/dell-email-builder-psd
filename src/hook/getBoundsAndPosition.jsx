import { batchPlay } from "../App";

export async function getBoundsAndPosition(action, method = "", i = 1, property = "", padding = 0) {
    const result = await batchPlay(action, {});
    const bounds = result[i][method];
    const position = bounds[property]._value + padding;
    return { position };
}

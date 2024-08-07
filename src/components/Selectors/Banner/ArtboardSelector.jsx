import React, { useState } from 'react';
import GroupLabel from "../../Labels/GroupLabel.jsx";
import { useToggleState } from "../../../hook/useToogle.jsx";
import useBannerContext from '../../../hook/useBannerContext.jsx';

const artboardsArr = {
    // 'MEDIO': {
    //     width: 1060,
    //     height: 680,
    //     ratio: 1060 / 680,
    // },
    // 'GRANDE': {
    //     width: 1590,
    //     height: 1020,
    //     ratio: 1590 / 1020,
    // },
    '970x90': { width: 970, height: 90, ratio: 970 / 90 }, // 10.78
    '1920x260': { width: 1920, height: 260, ratio: 1920 / 260 }, // 7.38
    '1920x300': { width: 1920, height: 300, ratio: 1920 / 300 }, // 6.40
    '1500x230': { width: 1500, height: 230, ratio: 1500 / 230 }, // 6.52
    '560x80': { width: 560, height: 80, ratio: 560 / 80 }, // 7.00
    '1500x300': { width: 1500, height: 300, ratio: 1500 / 300 }, // 5.00
    '570x114': { width: 570, height: 114, ratio: 570 / 114 }, // 5.00
    '600x115': { width: 600, height: 115, ratio: 600 / 115 }, // 5.22
    '2800x389': { width: 2800, height: 389, ratio: 2800 / 389 }, // 7.20
    '600x200': { width: 600, height: 200, ratio: 600 / 200 }, // 3.00
    '970x250': { width: 970, height: 250, ratio: 970 / 250 }, // 3.88
    '685x182': { width: 685, height: 182, ratio: 685 / 182 }, // 3.77
    '1920x600': { width: 1920, height: 600, ratio: 1920 / 600 }, // 3.20
    '814x347': { width: 814, height: 347, ratio: 814 / 347 }, // 2.35
    '790x290': { width: 790, height: 290, ratio: 790 / 290 }, // 2.72
    '1280x572': { width: 1280, height: 572, ratio: 1280 / 572 }, // 2.24
    '662x300': { width: 662, height: 300, ratio: 662 / 300 }, // 2.21
    '400x300': { width: 400, height: 300, ratio: 400 / 300 }, // 1.33
    '1200x350': { width: 1200, height: 350, ratio: 1200 / 350 }, // 3.43
    '510x390': { width: 510, height: 390, ratio: 510 / 390 }, // 1.31
    '960x240': { width: 960, height: 240, ratio: 960 / 240 }, // 4.00
    '530x340': { width: 530, height: 340, ratio: 530 / 340 }, // 1.56
    '1920x1080': { width: 1920, height: 1080, ratio: 1920 / 1080 }, // 1.78
    '424x237': { width: 424, height: 237, ratio: 424 / 237 }, // 1.79
    '736x420': { width: 736, height: 420, ratio: 736 / 420 }, // 1.75
    '600x230': { width: 600, height: 230, ratio: 600 / 230 }, // 2.61
    '990x350': { width: 990, height: 350, ratio: 990 / 350 }, // 2.83
    '1300x600': { width: 1300, height: 600, ratio: 1300 / 600 }, // 2.17
    '1000x600': { width: 1000, height: 600, ratio: 1000 / 600 }, // 1.67
    '1060x643': { width: 1060, height: 643, ratio: 1060 / 643 }, // 1.65
    '1200x628': { width: 1200, height: 628, ratio: 1200 / 628 }, // 1.91
    '1534x800': { width: 1534, height: 800, ratio: 1534 / 800 }, // 1.92
    '530x340': { width: 530, height: 340, ratio: 530 / 340 }, // 1.56
    '680x426': { width: 680, height: 426, ratio: 680 / 426 }, // 1.60
    '1080x1080': { width: 1080, height: 1080, ratio: 1080 / 1080 }, // 1.00
    '600x600': { width: 600, height: 600, ratio: 600 / 600 }, // 1.00
    '250x250': { width: 250, height: 250, ratio: 250 / 250 }, // 1.00
    '300x250': { width: 300, height: 250, ratio: 300 / 250 }, // 1.20
    '336x280': { width: 336, height: 280, ratio: 336 / 280 }, // 1.20
    '1500x300': { width: 1500, height: 300, ratio: 1500 / 300 }, // 5.00
    '1440x1660': { width: 1440, height: 1660, ratio: 1440 / 1660 }, // 0.87
    '1080x1920': { width: 1080, height: 1920, ratio: 1080 / 1920 }, // 0.56
    '720x1280': { width: 720, height: 1280, ratio: 720 / 1280 }, // 0.56
    '261x380': { width: 261, height: 380, ratio: 261 / 380 }, // 0.69
    '182x685': { width: 182, height: 685, ratio: 182 / 685 }, // 0.27
    '650x1440': { width: 650, height: 1440, ratio: 650 / 1440 }, // 0.45
    '160x600': { width: 160, height: 600, ratio: 160 / 600 }, // 0.27
    '266x165': { width: 266, height: 165, ratio: 266 / 165 }, // 1.61

};

export default function ArtboardSelector() {

    const { artboards, setArtboards } = useBannerContext();

    const buildInfo = {
        artboards
    };

    const [isOptionsOpen, toggleOptions] = useToggleState(true);

    const handleArtboardClick = (artboard) => {
        setArtboards(prevArtboards => {
            if (prevArtboards[artboard]) {
                const newArtboards = { ...prevArtboards };
                delete newArtboards[artboard];
                return newArtboards;
            } else {
                return {
                    ...prevArtboards,
                    [artboard]: artboardsArr[artboard]
                };
            }
        });
    };

    // Calcular a proporção de cada formato
    const artboardsArrWithRatio = Object.entries(artboardsArr).map(([key, { width, height }]) => ({
        key,
        width,
        height,
        ratio: width / height
    }));


    // Ordenar as artboards por proporção antes de processá-las
    artboardsArrWithRatio.sort((a, b) => a.ratio - b.ratio);
    return (
        <div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", flexDirection: "column" }} className="group">
                {isOptionsOpen ? (
                    <>
                        <GroupLabel onClick={toggleOptions} type="open" size="s" name="Artboards" />
                        <sp-field-group>
                            {artboardsArrWithRatio.map(({ key }, index) => (
                                <sp-checkbox
                                    key={`${key}-${index}`}
                                    onClick={() => handleArtboardClick(key)}
                                    checked={artboards[key] ? 'checked' : null}>
                                    {key}
                                </sp-checkbox>
                            ))}
                        </sp-field-group>
                    </>
                ) : (
                    <GroupLabel onClick={toggleOptions} type="closed" name="Artboards" size="s" />
                )}
            </div>
        </div>
    )
}
import React, { useState } from 'react';
import GroupLabel from "../../GroupLabel.jsx";
import { useToggleState } from "../../../hook/useToogle.jsx";
import useBannerContext from '../../../hook/useBannerContext.jsx';

const artboardsArr = {
    '160x600': {
        width: 160,
        height: 600,
        ratio: 160 / 600,
    },
    '1080x1080': {
        width: 1080,
        height: 1080,
        ratio: 1080 / 1080,
    },
    '250x250': {
        width: 250,
        height: 250,
        ratio: 250 / 250,
    },
    '300x250': {
        width: 300,
        height: 250,
        ratio: 300 / 250,
    },
    '336x280': {
        width: 336,
        height: 280,
        ratio: 336 / 280,
    },
    '970x90': {
        width: 970,
        height: 90,
        ratio: 970 / 90,
    },
    '970x250': {
        width: 970,
        height: 250,
        ratio: 970 / 250,
    },
    '2800x389': {
        width: 2800,
        height: 389,
        ratio: 2800 / 389,
    },
    '1534x800': {
        width: 1534,
        height: 800,
        ratio: 1534 / 800,
    },
    '1200x628': {
        width: 1200,
        height: 628,
        ratio: 1200 / 628,
    },
    '400x300': {
        width: 400,
        height: 300,
        ratio: 400 / 300,
    },
    '424x237': {
        width: 424,
        height: 237,
        ratio: 424 / 237,
    },
    '790x290': {
        width: 790,
        height: 290,
        ratio: 790 / 290,
    },
    '600x200': {
        width: 600,
        height: 200,
        ratio: 600 / 200,
    },
    '570x114': {
        width: 570,
        height: 114,
        ratio: 570 / 114,
    },
    '1060x643': {
        width: 1060,
        height: 643,
        ratio: 1060 / 643,
    },
    '1280x572': {
        width: 1280,
        height: 572,
        ratio: 1280 / 572,
    },
    '662x300': {
        width: 662,
        height: 300,
        ratio: 662 / 300,
    },
    '261x380': {
        width: 261,
        height: 380,
        ratio: 261 / 380,
    },
    '680x426': {
        width: 680,
        height: 426,
        ratio: 680 / 426,
    },
    '1080x1920': {
        width: 1080,
        height: 1920,
        ratio: 1080 / 1920,
    },
    '530x340': {
        width: 530,
        height: 340,
        ratio: 530 / 340,
    },
    '1440x1660': {
        width: 1440,
        height: 1660,
        ratio: 1440 / 1660,
    },
    '1200x350': {
        width: 1200,
        height: 350,
        ratio: 1200 / 350,
    },
    '560x80': {
        width: 560,
        height: 80,
        ratio: 560 / 80,
    },
    '1920x600': {
        width: 1920,
        height: 600,
        ratio: 1920 / 600,
    },
    '1300x600': {
        width: 1300,
        height: 600,
        ratio: 1300 / 600,
    },
    '1000x600': {
        width: 1000,
        height: 600,
        ratio: 1000 / 600,
    },
    '600x600': {
        width: 600,
        height: 600,
        ratio: 600 / 600,
    },
    '182x685': {
        width: 182,
        height: 685,
        ratio: 182 / 685,
    },
    '1920x300': {
        width: 1920,
        height: 300,
        ratio: 1920 / 300,
    },
    '960x240': {
        width: 960,
        height: 240,
        ratio: 960 / 240,
    },
    '1920x1080': {
        width: 1920,
        height: 1080,
        ratio: 1920 / 1080,
    },
    '1500x300': {
        width: 1500,
        height: 300,
        ratio: 1500 / 300,
    },
    '990x350': {
        width: 990,
        height: 350,
        ratio: 990 / 350,
    },
    '736x420': {
        width: 736,
        height: 420,
        ratio: 736 / 420,
    },
    '650x1440': {
        width: 650,
        height: 1440,
        ratio: 650 / 1440,
    },
    '266x165': {
        width: 266,
        height: 165,
        ratio: 266 / 165,
    },
    '685x182': {
        width: 685,
        height: 182,
        ratio: 685 / 182,
    },
    '600x230': {
        width: 600,
        height: 230,
        ratio: 600 / 230,
    },
    '600x115': {
        width: 600,
        height: 115,
        ratio: 600 / 115,
    },
    '1920x260': {
        width: 1920,
        height: 260,
        ratio: 1920 / 260,
    },
    '814x347': {
        width: 814,
        height: 347,
        ratio: 814 / 347,
    },
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
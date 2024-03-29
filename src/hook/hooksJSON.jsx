
//? Name = Nome da camada

//! Vamos lá, ainda precisamos fazer essas funções:
//. 3. Tranformar formas Horizontalmente
//? E decobrir no caso porque a altura não corresponde aos valores no Hero CTA

//  ##  Função para selecionar camadas  ## //

export function selectLayer({ Name }) {
    return {
        _obj: "select",
        _target: [{ _ref: "layer", _name: Name }],
        makeVisible: false,
        _options: { dialogOptions: "dontDisplay" }
    };
}

//  ##  Função para selecionar um grupo de camadas  ## //

export function selectGroup({ FirstName, LastName }) {
    return {
        _obj: "select", _target: [{ _ref: "layer", _name: FirstName }, { _ref: "layer", _name: LastName }], selectionModifier: { _enum: "selectionModifierType", _value: "addToSelectionContinuous" }, _options: { dialogOptions: "dontDisplay" }
    };
}

//  ##  Criar objetos inteligentes  ## //

export function makeSmartObj() {
    return {
        _obj: "newPlacedLayer", _options: { dialogOptions: "dontDisplay" }
    };
}

//  ##  Função para pegar boundingBox  ## //

export function getBounds({ Property, Name }) {
    Property = Property !== undefined ? Property : "boundingBox";
    return {
        _obj: "get",
        _target: [{ _property: Property }, { _ref: "layer", _name: Name },],
        _options: { dialogOptions: "dontDisplay" }
    };
}

//  ##  Função para criar um solid  ## //

export function makeSolid({ Name, RedColor, GreenColor, BlueColor, Shape, Top, Left, Bottom, Right, TopRight, TopLeft, BottomLeft, BottomRight, Index }) {

    Shape = Shape !== undefined ? Shape : "rectangle";
    Top = Top !== undefined ? Top : 0;
    Left = Left !== undefined ? Left : 0;
    Bottom = Bottom !== undefined ? Bottom : 0;
    Right = Right !== undefined ? Right : 0;
    TopRight = TopRight !== undefined ? TopRight : 0;
    TopLeft = TopLeft !== undefined ? TopLeft : 0;
    BottomLeft = BottomLeft !== undefined ? BottomLeft : 0;
    BottomRight = BottomRight !== undefined ? BottomRight : 0;
    Index = Index !== undefined ? Index : 0;

    return [
        {
            _obj: "make", _target: [{ _ref: "contentLayer" }],
            using: {
                _obj: "contentLayer", type: {
                    _obj: "solidColorLayer",
                    color: {
                        _obj: "RGBColor",
                        red: RedColor,
                        grain: GreenColor,
                        blue: BlueColor
                    }
                },
                shape: {
                    _obj: Shape, unitValueQuadVersion: 1,
                    top: { _unit: "pixelsUnit", _value: Top },
                    left: { _unit: "pixelsUnit", _value: Left },
                    bottom: { _unit: "pixelsUnit", _value: Bottom },
                    right: { _unit: "pixelsUnit", _value: Right },
                    topRight: { _unit: "pixelsUnit", _value: TopRight },
                    topLeft: { _unit: "pixelsUnit", _value: TopLeft },
                    bottomLeft: { _unit: "pixelsUnit", _value: BottomLeft },
                    bottomRight: { _unit: "pixelsUnit", _value: BottomRight }
                },
            }, _options: { dialogOptions: "dontDisplay" }
        },
        { _obj: "select", _target: [{ _ref: "layer", _name: "Rectangle 1" }], makeVisible: false, _options: { dialogOptions: "dontDisplay" } },
        { _obj: "set", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "layer", name: Name }, _options: { dialogOptions: "dontDisplay" } },
        { _obj: "move", _target: [{ _ref: "layer", _name: Name }], to: { _ref: "layer", _index: Index }, adjustment: false, version: 5, _options: { dialogOptions: "dontDisplay" } },
    ];
}

//  ##  Função para definir solid color fill  ## //

export function setSolidFill({ Name, RedColor, GreenColor, BlueColor }) {
    return {
        _obj: "set", _target: [{ _ref: "contentLayer", _name: Name }],
        to: {
            _obj: "solidColorLayer",
            color: {
                _obj: "RGBColor",
                red: RedColor,
                green: GreenColor,
                blue: BlueColor
            },
        }, _options: { dialogOptions: "dontDisplay" }
    };
}

//  ##  Função para definir overlay color  ## //

export function setOverlayColor({ Name, RedColor, GreenColor, BlueColor }) {
    return {
        _obj: "set", _target: [{ _ref: "property", _property: "layerEffects" }, { _ref: "layer", _name: Name }],
        to: {
            _obj: "layerEffects", scale: { _unit: "percentUnit", _value: 100 },
            solidFill: {
                _obj: "solidFill", enabled: true, present: true, showInDialog: true,
                mode: { _enum: "blendMode", _value: "normal" },
                color: { _obj: "RGBColor", red: RedColor, grain: GreenColor, blue: BlueColor },
                opacity: { _unit: "percentUnit", _value: 100 }
            }
        },
        _isCommand: false,
        _options: { dialogOptions: "dontDisplay" }
    };
}

//  ##  Função para fazer offset  ## //
// Necessário selecionar a camada antes de usar a função

export function setOffset({ Name, Horizontal, Vertical }) {
    Horizontal = Horizontal !== undefined ? Horizontal : 0;
    Vertical = Vertical !== undefined ? Vertical : 0;
    return {
        _obj: "move", _target: [{ _ref: "layer", _name: Name }],
        to: {
            _obj: "offset",
            horizontal: { _unit: "pixelsUnit", _value: Horizontal, },
            vertical: { _unit: "pixelsUnit", _value: Vertical, }
        },
        _options: { dialogOptions: "dontDisplay" }
    };
}

//  ##  Função para alterar as fontes e texto  ## //

export function setFontStyle({ Name, Value, FontScript, FontName, FontWeight, Size, RedColor, GreenColor, BlueColor, Tracking, FontCaps, AutoLeading, Leading }) {
    FontScript = FontName + "-" + FontWeight;
    Tracking = Tracking !== undefined ? Tracking : 0;
    AutoLeading = AutoLeading !== undefined ? AutoLeading : true;
    Leading = Leading !== undefined ? Leading : 0;
    FontCaps = FontCaps === false ? "normal" : "allCaps";

    return {
        _obj: "set",
        _target: [{ _ref: "textLayer", _name: Name }],
        to: {
            _obj: "textLayer",
            textKey: Value,
            textStyleRange: [{
                _obj: "textStyleRange",
                from: 0,
                to: Number.MAX_SAFE_INTEGER,
                textStyle: {
                    _obj: "textStyle",
                    fontPostScriptName: FontScript,
                    fontName: FontName,
                    fontStyleName: FontWeight,
                    size: { _unit: "pointsUnit", _value: Size },
                    color: {
                        _obj: "RGBColor",
                        red: RedColor,
                        green: GreenColor,
                        blue: BlueColor
                    },
                    tracking: Tracking,
                    fontCaps: { _enum: "fontCaps", _value: FontCaps },
                    autoLeading: AutoLeading,
                    leading: { _unit: "pointsUnit", _value: Leading },
                    impliedLeading: { _unit: "pointsUnit", _value: Leading }
                }
            }]
        },
        _isCommand: true
    };
}

//  ##  Função para alterar as dois slices de texto em um elemento ## //

export function setTwoFontStyle({ Name, Value, FontScript, FontName, FontWeight, Size, RedColor, GreenColor, BlueColor, Tracking, FontCaps, AutoLeading, Leading, Slice, BaselineShift }) {

    FontScript = [
        FontName[0] + "-" + FontWeight[0],
        FontName[1] + "-" + FontWeight[1]
    ];

    Tracking = Tracking !== undefined ? Tracking : 0;
    AutoLeading = AutoLeading !== undefined ? AutoLeading : true;
    Leading = Leading !== undefined ? Leading : 0;
    FontCaps = FontCaps === false ? "normal" : "allCaps";

    return {
        _obj: "set",
        _target: [{ _ref: "textLayer", _name: Name }],
        to: {
            _obj: "textLayer",
            textKey: Value,
            textStyleRange: [
                {
                    _obj: "textStyleRange",
                    from: 0,
                    to: Slice,
                    textStyle: {
                        _obj: "textStyle",
                        fontPostScriptName: FontScript[0],
                        fontName: FontName[0],
                        fontStyleName: FontWeight[0],
                        size: { _unit: "pointsUnit", _value: Size[0] },
                        color: {
                            _obj: "RGBColor",
                            red: RedColor[0],
                            green: GreenColor[0],
                            blue: BlueColor[0]
                        },
                        tracking: Tracking[0],
                        fontCaps: { _enum: "fontCaps", _value: FontCaps[0] },
                        autoLeading: AutoLeading[0],
                        leading: { _unit: "pointsUnit", _value: Leading[0] },
                        impliedLeading: { _unit: "pointsUnit", _value: Leading[0] },
                        baselineShift: { _unit: "pointsUnit", _value: BaselineShift[0] },
                        impliedBaselineShift: { _unit: "pointsUnit", _value: BaselineShift[0] },
                    }
                },
                {
                    _obj: "textStyleRange",
                    from: Slice,
                    to: Number.MAX_SAFE_INTEGER,
                    textStyle: {
                        _obj: "textStyle",
                        fontPostScriptName: FontScript[1],
                        fontName: FontName[1],
                        fontStyleName: FontWeight[1],
                        size: { _unit: "pointsUnit", _value: Size[1] },
                        color: {
                            _obj: "RGBColor",
                            red: RedColor[1],
                            green: GreenColor[1],
                            blue: BlueColor[1]
                        },
                        tracking: Tracking[1],
                        fontCaps: { _enum: "fontCaps", _value: FontCaps[1] },
                        autoLeading: AutoLeading[1],
                        leading: { _unit: "pointsUnit", _value: Leading[1] },
                        impliedLeading: { _unit: "pointsUnit", _value: Leading[1] },
                        baselineShift: { _unit: "pointsUnit", _value: BaselineShift[1] },
                        impliedBaselineShift: { _unit: "pointsUnit", _value: BaselineShift[1] },
                    }
                },
            ]
        },
        _isCommand: true
    };
}

//  ##  Função para tranformar todo o documento em objeto inteligente e copiar  ## //

export function selectAllAndCopy() {
    return [
        { _obj: "selectAllLayers", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], _options: { dialogOptions: "dontDisplay" } },
        { _obj: "newPlacedLayer", _options: { dialogOptions: "dontDisplay" } },
        { _obj: "copyEvent", _options: { dialogOptions: "dontDisplay" } },
        { _obj: "close", saving: { _enum: "yesNo", _value: "no" }, documentID: 507, _options: { dialogOptions: "dontDisplay" } }
    ];
}

//  ##  Função para alinhar seleção horizontal ## //

export function alignGroupX() {
    return {
        _obj: "align", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], using: { _enum: "alignDistributeSelector", _value: "ADSCentersH" }, alignToCanvas: false, _isCommand: false, _options: { dialogOptions: "dontDisplay" },
    }
}

//  ##  Função para alinhar seleção vertical ## //

export function alignGroupY() {
    return {
        _obj: "align", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], using: { _enum: "alignDistributeSelector", _value: "ADSCentersV" }, alignToCanvas: false, _isCommand: false, _options: { dialogOptions: "dontDisplay" },
    }
}

// ## Função para ajustar a borda do CTA

export function setCTABorder({ Width }) {
    return {
        _obj: "transform", _target: [{ _ref: "path", _enum: "ordinal", _value: "targetEnum" }], freeTransformCenterState: { _enum: "quadCenterState", _value: "QCSAverage" }, offset: { _obj: "offset", horizontal: { _unit: "pixelsUnit", _value: 0 }, vertical: { _unit: "pixelsUnit", _value: 0 } }, width: { _unit: "pixelsUnit", _value: Width }
    };
}

// ## Função para recorte final do documento/módulo
export function setFinalCrop({ Bottom }) {

    return [
        { _obj: "select", _target: [{ _ref: "cropTool" }], _options: { dialogOptions: "dontDisplay" } },
        { _obj: "select", _target: [{ _ref: "moveTool" }], _options: { dialogOptions: "dontDisplay" } },
        { _obj: "crop", to: { _obj: "rectangle", top: { _unit: "pixelsUnit", _value: 0 }, left: { _unit: "pixelsUnit", _value: 0 }, bottom: { _unit: "pixelsUnit", _value: Bottom }, right: { _unit: "pixelsUnit", _value: 600 } }, angle: { _unit: "angleUnit", _value: 0 }, delete: true, AutoFillMethod: 1, cropFillMode: { _enum: "cropFillMode", _value: "defaultFill" }, cropAspectRatioModeKey: { _enum: "cropAspectRatioModeClass", _value: "pureAspectRatio" }, constrainProportions: false, _options: { dialogOptions: "dontDisplay" } },
    ];
}

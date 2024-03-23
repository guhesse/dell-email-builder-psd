
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

export function setFontStyle({ Type, Name, Value, FontScript, FontName, FontWeight, Size, RedColor, GreenColor, BlueColor, Tracking, FontCaps, AutoLeading, Leading }) {
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


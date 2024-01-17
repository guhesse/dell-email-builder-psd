

const [selectedColorValues, setSelectedColorValues] = useState(null);

const initialAccentColorValues = {
    redAccent: 36,
    greenAccent: 71,
    blueAccent: 57
};

const initialSecondaryColorValues = {
    redSecondary: 159,
    greenSecondary: 255,
    blueSecondary: 153
};

const initialTertiaryColorValues = {
    redTertiary: 191,
    greenTertiary: 255,
    blueTertiary: 183
};


const [accentColorValues, setAccentColorValues] = useState(initialAccentColorValues);
const [secondaryColorValues, setSecondaryColorValues] = useState(initialSecondaryColorValues);
const [tertiaryColorValues, setTertiaryColorValues] = useState(initialTertiaryColorValues);

const handleAccentColorChange = (values) => {
    setSelectedColorValues(values);

    if (values) {
        setAccentColorValues({
            redAccent: values.rgbValues.r,
            greenAccent: values.rgbValues.g,
            blueAccent: values.rgbValues.b
        });
    }
};

const handleSecondaryColorChange = (values) => {
    setSelectedColorValues(values);

    if (values) {
        setSecondaryColorValues({
            redSecondary: values.rgbValues.r,
            greenSecondary: values.rgbValues.g,
            blueSecondary: values.rgbValues.b
        });
    }
};


const handleTertiaryColorChange = (values) => {
    setSelectedColorValues(values);

    if (values) {
        setTertiaryColorValues({
            redTertiary: values.rgbValues.r,
            greenTertiary: values.rgbValues.g,
            blueTertiary: values.rgbValues.b
        });
    }
};

const { redAccent, greenAccent, blueAccent } = accentColorValues;
const { redSecondary, greenSecondary, blueSecondary } = secondaryColorValues;
const { redTertiary, greenTertiary, blueTertiary } = tertiaryColorValues;
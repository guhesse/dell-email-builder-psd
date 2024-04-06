import React, { useState, useEffect } from 'react';
import useAppContext from './hook/useAppContext.jsx';

export default function FundingSelector() {
    const { csvValues, setCsvValues, fundingCopyValue, setFundingCopyValue, selectedFunding, setSelectedFunding } = useAppContext();


    const [isOptionsOpen, setIsOptionsOpen] = useState(false);

    const toggleOptions = () => {
        setIsOptionsOpen(!isOptionsOpen);
    };

    const [selected, setSelected] = useState({
        selectedFunding: false
    });

    const handleFundingClick = (selectedFunding) => {
        setSelectedFunding(selectedFunding);
    };

    const handleResetClick = () => {
        setSelectedFunding(null)
        setFundingCopyValue("")
    };

    const [formState, setFormState] = useState({
        fundingCopyValue: csvValues['Funding/WEP Content'] || "",
    });

    const [tempFormState, setTempFormState] = useState({
        fundingCopyValue: "",
    });

    const [valid, setValid] = useState({
        fundingCopyValue: false,
    });

    useEffect(() => {

        setTempFormState({
            fundingCopyValue: fundingCopyValue || "",
        });

        setFormState({
            fundingCopyValue: fundingCopyValue || "",
        });

    }, [selectedFunding]);

    const handleInputChange = (key, value) => {
        setTempFormState((prevTempFormState) => ({
            ...prevTempFormState,
            [key]: value,
        }));

        setValid((prevValid) => ({
            ...prevValid,
            [key]: value !== "",
        }));
    };

    const handleBlur = (key) => {
        setCsvValues({
            ...csvValues,
            [key]: tempFormState[key],
        });

        setFundingCopyValue(tempFormState[key]);

        setFormState({
            ...formState,
            [key]: tempFormState[key],
        });
    };

    const [isEditClicked, setIsEditClicked] = useState(false);

    const handleEditClick = () => {
        setIsEditClicked((prevIsEditClicked) => !prevIsEditClicked);
    };


    return (
        <div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", flexDirection: "column" }} className="group">
                <sp-icons>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        {((selectedFunding === "") || (selectedFunding && fundingCopyValue !== "")) ? (
                            <div className="sp-icon" id="status-check">
                                <svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 18 18" width="14">
                                    <title>Check</title>
                                    <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" /><path d="M9,1a8,8,0,1,0,8,8A8,8,0,0,0,9,1Zm5.333,4.54L8.009,13.6705a.603.603,0,0,1-.4375.2305H7.535a.6.6,0,0,1-.4245-.1755L3.218,9.829a.6.6,0,0,1-.00147-.84853L3.218,8.979l.663-.6625A.6.6,0,0,1,4.72953,8.315L4.731,8.3165,7.4,10.991l5.257-6.7545a.6.6,0,0,1,.8419-.10586L13.5,4.1315l.7275.5685A.6.6,0,0,1,14.333,5.54Z" />
                                </svg>
                            </div>
                        ) : (
                            ((selectedFunding && fundingCopyValue === "")) ? (
                                <div className="sp-icon" id="status-half">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 18 18" width="14">
                                        <title>Half</title>
                                        <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" /><path d="M9.05,1.1A7.95,7.95,0,1,0,17,9.05,7.95,7.95,0,0,0,9.05,1.1Zm0,14.906A6.956,6.956,0,1,1,16.006,9.05,6.956,6.956,0,0,1,9.05,16.006Zm4.49072-9.68845-5.436,6.98773a.5.5,0,0,1-.74839.04628L4.2779,10.28586a.50035.50035,0,0,1,.00021-.70736l.66226-.66226a.5.5,0,0,1,.70709,0l1.939,1.92155,4.43735-5.701a.50006.50006,0,0,1,.70176-.08744h0l.72764.56642A.50016.50016,0,0,1,13.54072,6.31755Z" />
                                    </svg>
                                </div>
                            ) : (
                                <div className="sp-icon" id="status-not">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 18 18" width="14">
                                        <title>Status</title>
                                        <rect id="Canvas" fill="#ff13dc" opacity="0" width="14" height="14" /><path d="M5.9,2.73l-.327-.95A8.01151,8.01151,0,0,0,3,3.714l.8285.5795A7.00718,7.00718,0,0,1,5.9,2.73Z" />
                                        <path d="M2.804,5.7465l-.8285-.58a7.91953,7.91953,0,0,0-.922,2.944H2.062A6.95948,6.95948,0,0,1,2.804,5.7465Z" />
                                        <path d="M2.062,9.8885H1.05a8.01058,8.01058,0,0,0,1.0725,3.18l.8-.603A6.94592,6.94592,0,0,1,2.062,9.8885Z" />
                                        <path d="M3.992,13.886l-.803.605a7.93456,7.93456,0,0,0,2.6365,1.85l.295-.9645A7.0131,7.0131,0,0,1,3.992,13.886Z" />
                                        <path d="M9,16a6.98925,6.98925,0,0,1-1.1785-.107l-.295.9665a7.931,7.931,0,0,0,3.22-.058L10.42,15.855A7,7,0,0,1,9,16Z" />
                                        <path d="M12.1,15.2695l.3265.95A7.99992,7.99992,0,0,0,15,14.2845l-.8265-.579A7.01919,7.01919,0,0,1,12.1,15.2695Z" />
                                        <path d="M15.937,9.8885a6.95007,6.95007,0,0,1-.742,2.364l.828.5795a7.921,7.921,0,0,0,.922-2.9435Z" />
                                        <path d="M15.937,8.1105H16.95A8.01009,8.01009,0,0,0,15.8765,4.93l-.8.6035A6.94357,6.94357,0,0,1,15.937,8.1105Z" />
                                        <path d="M14.0065,4.113l.8035-.6055a7.94254,7.94254,0,0,0-2.637-1.85l-.295.965A7.01144,7.01144,0,0,1,14.0065,4.113Z" />
                                        <path d="M9,2a7.03464,7.03464,0,0,1,1.178.1065l.2955-.9675a7.9399,7.9399,0,0,0-3.22.0585l.3265.947A7.02938,7.02938,0,0,1,9,2Z" />
                                    </svg>
                                </div>
                            )
                        )}
                        <div onClick={handleResetClick} className="sp-icon" id="bin">
                            <svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 18 18" width="14">
                                <title>Bin</title>
                                <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" /><path d="M15.75,3H12V2a1,1,0,0,0-1-1H6A1,1,0,0,0,5,2V3H1.25A.25.25,0,0,0,1,3.25v.5A.25.25,0,0,0,1.25,4h1L3.4565,16.55a.5.5,0,0,0,.5.45H13.046a.5.5,0,0,0,.5-.45L14.75,4h1A.25.25,0,0,0,16,3.75v-.5A.25.25,0,0,0,15.75,3ZM5.5325,14.5a.5.5,0,0,1-.53245-.46529L5,14.034l-.5355-8a.50112.50112,0,0,1,1-.067l.5355,8a.5.5,0,0,1-.46486.53283ZM9,14a.5.5,0,0,1-1,0V6A.5.5,0,0,1,9,6ZM11,3H6V2h5Zm1,11.034a.50112.50112,0,0,1-1-.067l.5355-8a.50112.50112,0,1,1,1,.067Z" />
                            </svg>
                        </div>
                    </div>
                </sp-icons>
                {isOptionsOpen ? (
                    <>
                        <sp-label onClick={toggleOptions} style={{ cursor: "pointer" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <p>Funding </p>
                                <span style={{ marginLeft: "8px", display: "flex", alignItems: "center", fill: "#8a8a8a" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 14 16" >
                                        <title>S ChevronDown 18 N</title>
                                        <rect id="Canvas" fill="#8a8a8a" opacity="0" width="11" height="11" />
                                        <path d="M4,7.01a1,1,0,0,1,1.7055-.7055l3.289,3.286,3.289-3.286a1,1,0,0,1,1.437,1.3865l-.0245.0245L9.7,11.7075a1,1,0,0,1-1.4125,0L4.293,7.716A.9945.9945,0,0,1,4,7.01Z" />
                                    </svg>
                                </span>
                            </div>
                        </sp-label>
                        <sp-field-group style={{ width: "100vw", display: "flex", flexDirection: "row", gap: "5px" }}>
                            <sp-picker style={{ margin: "0 4px 0 0" }} id="picker-m" size="m" label="Selection type" placeholder="Selecione o funding">
                                <sp-menu>
                                    <sp-menu-item selected={selectedFunding === "" ? selected.selectedFunding : undefined} onClick={() => handleFundingClick("")}>No VF</sp-menu-item>
                                    <sp-menu-divider></sp-menu-divider>
                                    <sp-menu-group>
                                        <sp-menu-item selected={selectedFunding === "win11" ? selected.selectedFunding : undefined} onClick={() => handleFundingClick('win11')}>Windows 11</sp-menu-item>
                                        <sp-menu-item disabled selected={selectedFunding === "ms365" ? selected.selectedFunding : undefined} onClick={() => handleFundingClick('ms365')}>Microsoft 365</sp-menu-item>
                                        <sp-menu-item disabled selected={selectedFunding === "msserver" ? selected.selectedFunding : undefined} onClick={() => handleFundingClick('msserver')}>Microsoft Server</sp-menu-item>
                                    </sp-menu-group>
                                    <sp-menu-divider></sp-menu-divider>
                                    <sp-menu-group>
                                        <sp-menu-item disabled selected={selectedFunding === "intelcorp" ? selected.selectedFunding : undefined} onClick={() => handleFundingClick('intelcorp')}>Intel Corporate</sp-menu-item>
                                        <sp-menu-item disabled selected={selectedFunding === "xeon" ? selected.selectedFunding : undefined} onClick={() => handleFundingClick('xeon')}>Xeon</sp-menu-item>
                                        <sp-menu-item disabled selected={selectedFunding === "i5" ? selected.selectedFunding : undefined} onClick={() => handleFundingClick('i5')}>i5</sp-menu-item>
                                        <sp-menu-item disabled selected={selectedFunding === "i7" ? selected.selectedFunding : undefined} onClick={() => handleFundingClick('i7')}>i7</sp-menu-item>
                                        <sp-menu-item disabled selected={selectedFunding === "i9" ? selected.selectedFunding : undefined} onClick={() => handleFundingClick('i9')}>i9</sp-menu-item>
                                        <sp-menu-item disabled selected={selectedFunding === "evo" ? selected.selectedFunding : undefined} onClick={() => handleFundingClick('evo')}>Evo</sp-menu-item>
                                        <sp-menu-item disabled selected={selectedFunding === "vpro" ? selected.selectedFunding : undefined} onClick={() => handleFundingClick('vpro')}>V Pro</sp-menu-item>
                                    </sp-menu-group>
                                    <sp-menu-divider></sp-menu-divider>
                                    <sp-menu-group>
                                        <sp-menu-item disabled selected={selectedFunding === "mcaffee" ? selected.selectedFunding : undefined} onClick={() => handleFundingClick('mcaffee')}>McAffee</sp-menu-item>
                                    </sp-menu-group>x
                                </sp-menu>
                            </sp-picker>
                            <div className="sp-tab-page" id="sp-spectrum-widgets-tab-page">
                                <sp-action-button class='editBtn' label="Edit" onClick={handleEditClick}>
                                    <div slot="icon" className="icon">
                                        <svg id="spectrum-icon-18-Edit" viewBox="0 0 36 36">
                                            <path d="M33.567 8.2L27.8 2.432a1.215 1.215 0 0 0-.866-.353H26.9a1.371 1.371 0 0 0-.927.406L5.084 23.372a.99.99 0 0 0-.251.422L2.055 33.1c-.114.377.459.851.783.851a.251.251 0 0 0 .062-.007c.276-.063 7.866-2.344 9.311-2.778a.972.972 0 0 0 .414-.249l20.888-20.889a1.372 1.372 0 0 0 .4-.883 1.221 1.221 0 0 0-.346-.945zM11.4 29.316c-2.161.649-4.862 1.465-6.729 2.022l2.009-6.73z"></path>
                                        </svg>
                                    </div>
                                </sp-action-button>
                            </div>
                        </sp-field-group>
                    </>
                ) : (
                    <sp-label onClick={toggleOptions} style={{ cursor: "pointer" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <p>Funding</p>
                            <span style={{ marginLeft: "10px", display: "flex", alignItems: "center", fill: "#8a8a8a" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 10 10" >
                                    <g id="ChevronSize75">
                                        <rect id="Frame" width="7" height="7" fill="black" opacity="0" />
                                        <path d="M7.4834,4.40625,3.85986.7832a.83969.83969,0,0,0-1.1875,1.1875L5.70166,5,2.67236,8.0293a.83969.83969,0,1,0,1.1875,1.1875l3.62354-3.623A.83933.83933,0,0,0,7.4834,4.40625Z" />
                                    </g>
                                </svg>

                            </span>
                        </div>
                    </sp-label>
                )}
                {selectedFunding !== null && selectedFunding !== "" && (
                    <>
                        {isEditClicked && isOptionsOpen && (
                            <div>
                                <sp-detail for="funding-copy-field">FUNDING COPY</sp-detail>
                                <sp-textfield
                                    id="funding-copy-field"
                                    placeholder="Insira o Funding Copy"
                                    value={tempFormState.fundingCopyValue}
                                    onInput={(e) => handleInputChange('fundingCopyValue', e.target.value)}
                                    onBlur={() => handleBlur('fundingCopyValue')}
                                    valid={fundingCopyValue !== "" ? valid.fundingCopyValue : undefined}
                                ></sp-textfield>
                            </div>
                        )}
                    </>
                )}
            </div>



        </div>
    );
}
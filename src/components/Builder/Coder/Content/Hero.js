import { core, batchPlay } from "../../../../App.js";
import { clearAllSlices, getTextProperty, getBounds, makeSlice, selectLayer, convertToLayers, selectGroup, makeSmartObj } from "../../../../hook/hooksJSON.jsx";
import { getBoundsAndPosition, getTextContent } from "../../../../hook/getBoundsAndPosition.jsx";

export async function getHeroContent(params) {
    const { copyValues, setCopyValues, selectedModules } = params;
    const heroContentFunctions = {
        "hero1-lifestyle-product": {
            getImages: async () => {
                const targetFunction = async (executionContext) => {
                    try {

                        const clearAllSlicesStart = [clearAllSlices()]

                        await batchPlay(clearAllSlicesStart, {})

                        const getHeadCopyBounds = [

                            getBounds({
                                Name: "Badge"
                            }),
                            getBounds({
                                Name: "Headline"
                            })
                        ];

                        const { position: badgeTop } = await getBoundsAndPosition(getHeadCopyBounds, "boundingBox", 0, "top", -1);

                        const { position: headlineBottom } = await getBoundsAndPosition(getHeadCopyBounds, "boundingBox", 1, "bottom", 1);

                        const sliceHeadlineCopy = makeSlice({
                            Name: "XXXXXX_Hero_Headline_Image",
                            Top: badgeTop,
                            Bottom: headlineBottom,
                        })

                        await batchPlay(sliceHeadlineCopy, {})

                        const getLifestyleBounds = [
                            getBounds({
                                Name: "Lifestyle",
                                Property: "bounds"
                            }),
                        ];

                        const { position: lifestyleTop } = await getBoundsAndPosition(getLifestyleBounds, "bounds", 0, "top", 0);

                        const { position: lifestyleBottom } = await getBoundsAndPosition(getLifestyleBounds, "bounds", 0, "bottom", 0);


                        const sliceLifestyle = makeSlice({
                            Name: "XXXXXX_Hero1_Lifestyle_Image",
                            Top: lifestyleTop,
                            Bottom: lifestyleBottom,
                        })

                        await batchPlay(sliceLifestyle, {})

                        const getProductBounds = [
                            getBounds({
                                Name: "Product",
                                Property: "bounds"
                            }),
                        ];

                        const { position: productTop } = await getBoundsAndPosition(getProductBounds, "bounds", 0, "top", 0);

                        const { position: productBottom } = await getBoundsAndPosition(getProductBounds, "bounds", 0, "bottom", 0);


                        const sliceProduct = makeSlice({
                            Name: "XXXXXX_Hero1_Product_Image",
                            Top: productTop,
                            Bottom: productBottom,
                        })

                        await batchPlay(sliceProduct, {})

                        console.log('Hero recortado com sucesso!', 'color: #00EAADFF;');
                    } catch (error) {
                        console.error('Não foi posssível recortar o Hero', error);
                    }
                }

                const options = {
                    commandName: 'Recortar Hero',
                    interactive: true,
                };

                await core.executeAsModal(targetFunction, options);
            },
            getContent: async () => {
                const targetFunction = async (executionContext) => {
                    try {

                        if (copyValues.hero.subheadline === "" || copyValues.hero.subheadline === null) {

                            const getSubheadlineCopy = [
                                getTextProperty({
                                    Name: "Subheadline",
                                })
                            ]

                            const { content: heroSubheadlineHTML } = await getTextContent(getSubheadlineCopy, 0);

                            await setCopyValues(prevState => ({
                                ...prevState,
                                hero: {
                                    ...prevState.hero,
                                    subheadline: heroSubheadlineHTML
                                }
                            }));
                        }

                        if (copyValues.hero.cta === "" || copyValues.hero.cta === null) {

                            const getHeroCtaCopy = [
                                selectLayer({
                                    Name: "Hero CTA"
                                }),
                                convertToLayers(),
                                getTextProperty({
                                    Name: "Hero CTA Copy",
                                }),
                                selectGroup({
                                    FirstName: "Hero CTA",
                                    LastName: "Hero CTA Border"
                                }),
                                makeSmartObj()
                            ]

                            const { content: heroCtaHTML } = await getTextContent(getHeroCtaCopy, 2);

                            await setCopyValues(prevState => ({
                                ...prevState,
                                hero: {
                                    ...prevState.hero,
                                    cta: heroCtaHTML
                                }
                            }));
                        }


                        console.log('Hero recortado com sucesso!', 'color: #00EAADFF;');
                    } catch (error) {
                        console.error('Não foi posssível recortar o Hero', error);
                    }
                }

                const options = {
                    commandName: 'Get All Hero Content',
                    interactive: false,
                };

                await core.executeAsModal(targetFunction, options);

            },
        },
        "hero1-lifestyle": {
            getImages: async () => {
                const targetFunction = async (executionContext) => {
                    try {

                        const clearAllSlicesStart = [clearAllSlices()]

                        await batchPlay(clearAllSlicesStart, {})

                        const getHeadCopyBounds = [

                            getBounds({
                                Name: "Badge"
                            }),
                            getBounds({
                                Name: "Headline"
                            })
                        ];

                        const { position: badgeTop } = await getBoundsAndPosition(getHeadCopyBounds, "boundingBox", 0, "top", -1);

                        const { position: headlineBottom } = await getBoundsAndPosition(getHeadCopyBounds, "boundingBox", 1, "bottom", 1);

                        const sliceHeadlineCopy = makeSlice({
                            Name: "XXXXXX_Hero_Headline_Image",
                            Top: badgeTop,
                            Bottom: headlineBottom,
                        })

                        await batchPlay(sliceHeadlineCopy, {})



                        const getLifestyleBounds = [
                            selectGroup({
                                FirstName: "Lifestyle",
                                LastName: "Lifestyle Image"
                            }),

                            makeSmartObj(),

                            getBounds({
                                Name: "Lifestyle",
                                Property: "bounds"
                            }),

                            convertToLayers(),
                        ];

                        const { position: lifestyleTop } = await getBoundsAndPosition(getLifestyleBounds, "bounds", 2, "top", 0);

                        const { position: lifestyleBottom } = await getBoundsAndPosition(getLifestyleBounds, "bounds", 2, "bottom", 0);


                        const sliceLifestyle = makeSlice({
                            Name: "XXXXXX_Hero1_Lifestyle_Image",
                            Top: lifestyleTop,
                            Bottom: lifestyleBottom,
                        })

                        await batchPlay(sliceLifestyle, {})

                        console.log('Hero recortado com sucesso!', 'color: #00EAADFF;');
                    } catch (error) {
                        console.error('Não foi posssível recortar o Hero', error);
                    }
                }

                const options = {
                    commandName: 'Recortar Hero',
                    interactive: true,
                };

                await core.executeAsModal(targetFunction, options);
            },
            getContent: async () => {
                const targetFunction = async (executionContext) => {
                    try {

                        if (copyValues.hero.subheadline === "" || copyValues.hero.subheadline === null) {

                            const getSubheadlineCopy = [
                                getTextProperty({
                                    Name: "Subheadline",
                                })
                            ]

                            const { content: heroSubheadlineHTML } = await getTextContent(getSubheadlineCopy, 0);

                            await setCopyValues(prevState => ({
                                ...prevState,
                                hero: {
                                    ...prevState.hero,
                                    subheadline: heroSubheadlineHTML
                                }
                            }));
                        }


                        if (copyValues.hero.cta === "" || copyValues.hero.cta === null) {

                            const getHeroCtaCopy = [
                                selectLayer({
                                    Name: "Hero CTA"
                                }),
                                convertToLayers(),
                                getTextProperty({
                                    Name: "Hero CTA Copy",
                                }),
                                selectGroup({
                                    FirstName: "Hero CTA",
                                    LastName: "Hero CTA Border"
                                }),
                                makeSmartObj()
                            ]

                            const { content: heroCtaHTML } = await getTextContent(getHeroCtaCopy, 2);

                            await setCopyValues(prevState => ({
                                ...prevState,
                                hero: {
                                    ...prevState.hero,
                                    cta: heroCtaHTML
                                }
                            }));
                        }


                        console.log('Hero recortado com sucesso!', 'color: #00EAADFF;');
                    } catch (error) {
                        console.error('Não foi posssível recortar o Hero', error);
                    }
                }

                const options = {
                    commandName: 'Get All Hero Content',
                    interactive: false,
                };

                await core.executeAsModal(targetFunction, options);

            },
        },
    };

    const selectedHeroFunctions = heroContentFunctions[selectedModules.hero];

    if (selectedHeroFunctions) {
        await selectedHeroFunctions.getImages();
        await selectedHeroFunctions.getContent();

    } else {
        console.warn("getHeroContent não executada - Layout não selecionado");
    }
}
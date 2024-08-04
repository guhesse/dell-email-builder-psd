import React from 'react';
import { storage, batchPlay, core } from '../../../App.js';
import useAppContext from '../../../hook/useAppContext.jsx';
import { selectGroup, makeSmartObj, getBounds, makeSlice, selectLayer, hideLayer, showLayer, getContent, getTextProperty, convertToLayers, clearAllSlices, getSolidColor, getTextColor, setName } from '../../../hook/hooksJSON.jsx';
import { getBoundsAndPosition, getColorContent, getColorFromSolidContent, getColorFromTextContent, getContentAndBatch, getTextContent } from '../../../hook/getBoundsAndPosition.jsx';
import { Header, Funding, Hero, Plugin, Subject, Fpo, Banner } from './HTMLs/Codes.js';

export default function EmailCoder() {
	const fs = storage.localFileSystem;

	const { colors, selectedModules, copyValues, setCopyValues } = useAppContext();

	const params = { colors, selectedModules, copyValues, setCopyValues };

	var { header, brand, vf, skinny, hero, plugin, fpo, banner, footer, birdseed } = selectedModules
	var { subject, vf, skinny, hero, plugin, fpo, birdseed, banner } = copyValues

	const subjectHTML = Subject({ params });
	const { desktopFundingHTML, mobileFundingHTML } = Funding({ params });
	const headerHTML = Header({ params, desktopFundingHTML });
	const heroHTML = Hero({ params });
	const { desktopPluginHTML, mobilePluginHTML } = Plugin({ params });
	const fpoHTML = Fpo({ params });
	const bannerHTML = Banner({ params });

	async function getAllHeroContent() {
		const heroContentFunctions = {
			"hero1-lifestyle-product": {
				getHeroImages: async () => {
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
				getHeroContent: async () => {
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
				getHeroImages: async () => {
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
				getHeroContent: async () => {
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

		console.log("selectedhero Functions", selectedHeroFunctions)

		if (selectedHeroFunctions) {
			await selectedHeroFunctions.getHeroImages();
			await selectedHeroFunctions.getHeroContent();

		} else {
			console.error("Nenhuma função encontrada para o layout selecionado.");
		}
	}

	async function getSuperchargerSlices() {

		const targetFunction = async (executionContext) => {
			try {
				const getSuperchargerBounds = [
					getBounds({
						Name: "Plugin Background",
						Property: "bounds"
					}),
				];

				const { position: superchargerTop } = await getBoundsAndPosition(getSuperchargerBounds, "bounds", 0, "top", -1);

				const { position: superchargerBottom } = await getBoundsAndPosition(getSuperchargerBounds, "bounds", 0, "bottom", 1);

				const sliceSupercharger = makeSlice({
					Name: "XXXXXX_Plugin1_Image",
					Top: superchargerTop,
					Bottom: superchargerBottom,
				})

				console.log(superchargerTop, superchargerBottom)

				await batchPlay(sliceSupercharger, {})

				console.log('Cores obtidas com sucesso!', 'color: #00EAADFF;');
			} catch (error) {
				console.error('Não obter as cores', error);
			}
		}

		const options = {
			commandName: 'Get All Hero Content',
			interactive: false,
		};

		await core.executeAsModal(targetFunction, options);
	}

	async function getBannerSlices() {

		const targetFunction = async (executionContext) => {
			try {
				const getHeadlineBounds = [
					getBounds({
						Name: "Banner Headline",
						Property: "bounds"
					}),
				];

				const { position: headlineTop } = await getBoundsAndPosition(getHeadlineBounds, "bounds", 0, "top", -1);

				const { position: headlineRight } = await getBoundsAndPosition(getHeadlineBounds, "bounds", 0, "right", 1);

				const { position: headlineBottom } = await getBoundsAndPosition(getHeadlineBounds, "bounds", 0, "bottom", 1);

				const { position: headlineLeft } = await getBoundsAndPosition(getHeadlineBounds, "bounds", 0, "left", 1);

				const sliceHeadline = makeSlice({
					Name: "XXXXXX_Banner1_Headline_Image",
					Top: headlineTop,
					Right: headlineRight,
					Bottom: headlineBottom,
					Left: headlineLeft
				})

				await batchPlay(sliceHeadline, {})

				const getLifestyleBounds = [
					getBounds({
						Name: "Image Container",
						Property: "bounds"
					}),
				];

				const { position: lifestyleTop } = await getBoundsAndPosition(getLifestyleBounds, "bounds", 0, "top", -1);

				const { position: lifestyleRight } = await getBoundsAndPosition(getLifestyleBounds, "bounds", 0, "right", 1);

				const { position: lifestyleBottom } = await getBoundsAndPosition(getLifestyleBounds, "bounds", 0, "bottom", 1);

				const { position: lifestyleLeft } = await getBoundsAndPosition(getLifestyleBounds, "bounds", 0, "left", 1);


				const sliceLifestyle = makeSlice({
					Name: "XXXXXX_Banner1_Image",
					Top: lifestyleTop,
					Right: lifestyleRight,
					Bottom: lifestyleBottom,
					Left: lifestyleLeft
				})

				await batchPlay(sliceLifestyle, {})

				console.log('Cores obtidas com sucesso!', 'color: #00EAADFF;');
			} catch (error) {
				console.error('Não obter as cores', error);
			}
		}

		const options = {
			commandName: 'Get All Hero Content',
			interactive: false,
		};

		await core.executeAsModal(targetFunction, options);
	}




	// async function getHeroColors() {

	// 	function findNearestColor(rgb) {
	// 		let minDist = Infinity;
	// 		let nearestColor = null;

	// 		for (const color in cores) {
	// 			const coresRgb = cores[color];

	// 			const dist = Math.sqrt(
	// 				Math.pow(rgb.r - coresRgb.r, 2) +
	// 				Math.pow(rgb.g - coresRgb.g, 2) +
	// 				Math.pow(rgb.b - coresRgb.b, 2)
	// 			);

	// 			if (dist < minDist) {
	// 				minDist = dist;
	// 				nearestColor = color;
	// 			}
	// 		}

	// 		return nearestColor;
	// 	}


	// 	const targetFunction = async (executionContext) => {
	// 		try {

	// 			async function setAccentColorFromPSD() {
	// 				const getAccentColor = [
	// 					getSolidColor({
	// 						Name: "Hero Background"
	// 					})
	// 				]

	// 				const { r: accentRed, g: accentGreen, b: accentBlue } = await getColorFromSolidContent(getAccentColor, 0);

	// 				const rgbAccent = { r: Math.round(accentRed), g: Math.round(accentGreen), b: Math.round(accentBlue) };

	// 				const nearestAccentColor = findNearestColor(rgbAccent);

	// 				await setAccentColor(nearestAccentColor);
	// 			}

	// 			await setAccentColorFromPSD()

	// 			async function setSecondaryColorFromPSD() {
	// 				const getSecondaryColor = [
	// 					getTextColor({
	// 						Name: "Badge"
	// 					})
	// 				]

	// 				const { r: secondaryRed, g: secondaryGreen, b: secondaryBlue } = await getColorFromTextContent(getSecondaryColor, 0);

	// 				const rgbSecondary = { r: Math.round(secondaryRed), g: Math.round(secondaryGreen), b: Math.round(secondaryBlue) };

	// 				const nearestSecondaryColor = findNearestColor(rgbSecondary);

	// 				await setSecondaryColor(nearestSecondaryColor);
	// 			}

	// 			await setSecondaryColorFromPSD()


	// 			async function setTertiaryColorFromPSD() {

	// 				const getTertiaryColor = [
	// 					selectLayer({
	// 						Name: "Hero CTA"
	// 					}),
	// 					convertToLayers(),
	// 					getSolidColor({
	// 						Name: "Hero CTA Border"
	// 					}),
	// 					selectGroup({
	// 						FirstName: "Hero CTA",
	// 						LastName: "Hero CTA Border"
	// 					}),
	// 					makeSmartObj()
	// 				]

	// 				const { r: tertiaryRed, g: tertiaryGreen, b: tertiaryBlue } = await getColorFromSolidContent(getTertiaryColor, 2);

	// 				const rgbTertiary = { r: Math.round(tertiaryRed), g: Math.round(tertiaryGreen), b: Math.round(tertiaryBlue) };

	// 				const nearestTetiaryColor = findNearestColor(rgbTertiary);

	// 				await setTertiaryColor(nearestTetiaryColor);
	// 			}

	// 			await setTertiaryColorFromPSD()


	// 			console.log('Cores obtidas com sucesso!', 'color: #00EAADFF;');
	// 		} catch (error) {
	// 			console.error('Não obter as cores', error);
	// 		}
	// 	}

	// 	const options = {
	// 		commandName: 'Get All Hero Content',
	// 		interactive: false,
	// 	};

	// 	await core.executeAsModal(targetFunction, options);
	// }

	// Função para exportar o HTML

	async function mountHTML() {

		console.log("Hero copy values no mountHTML", copyValues.hero)

		// app.activeDocument.layers.forEach((layer) => {
		//     // Aqui você pode extrair informações relevantes de cada camada
		//     // layersHTML.push(`<div>${layer.name}</div>`);
		// });

		const cssStyles = []

		cssStyles.push(`
		<!DOCTYPE html
		PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml">
	
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<!--[if !mso]><!-->
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<!--<![endif]-->
		<title>Dell</title>
		<style type="text/css">
			/* Reset styles */
	
			a,
			a:link,
			a:hover,
			a:visited,
			a:active {
				color: #0076ce;
				text-decoration: none;
			}
	
			.reset-blue-link {
				color: #0076ce !important;
			}
	
			.iosLink a {
				color: #444444 !important;
				text-decoration: none !important;
			}
	
			.iosLinkWhite a {
				color: #ffffff !important;
				text-decoration: none !important;
			}
	
			a.disable-link {
				pointer-events: none;
				cursor: default;
			}
	
			a[x-apple-data-detectors=true] {
				color: inherit !important;
				text-decoration: inherit !important;
				pointer-events: none !important;
			}
	
			u~div a,
			#MessageViewBody a {
				color: inherit;
				text-decoration: none;
				font-weight: inherit;
			}
	
			.yshortcuts a {
				border-bottom: none !important;
			}
	
			#outlook a {
				padding: 0;
			}
	
			span.MsoHyperlink {
				mso-style-priority: 99;
				color: inherit;
			}
	
			span.MsoHyperlinkFollowed {
				mso-style-priority: 99;
				color: inherit;
			}
	
			.ReadMsgBody {
				width: 100%;
				background-color: #ffffff;
			}
	
			.ExternalClass {
				width: 100%;
			}
	
			.ExternalClass,
			.ExternalClass p,
			.ExternalClass span,
			.ExternalClass font,
			.ExternalClass td,
			.ExternalClass div {
				line-height: 100%;
			}
	
			table,
			td,
			th {
				border-collapse: collapse;
				mso-table-lspace: 0pt;
				mso-table-rspace: 0pt;
			}
	
			body,
			table,
			td,
			th,
			p,
			a,
			li,
			blockquote {
				-ms-text-size-adjust: 100%;
				-webkit-text-size-adjust: 100%;
			}
	
			body {
				margin: 0;
				padding: 0;
				background-color: #ffffff;
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
			}
	
			p {
				margin: 0;
			}
	
			ol,
			ul {
				padding-left: 2em;
			}
	
			sup {
				font-size: 0.6em;
				vertical-align: 0.5em;
				line-height: 1em;
			}
	
			body,
			table,
			td,
			th,
			p,
			ul,
			ol,
			li {
				font-family: Arial, Helvetica, sans-serif;
				font-size: 13px;
				line-height: 16px;
				font-weight: 400;
			}
	
			img,
			a img {
				display: block;
				border: 0;
				text-decoration: none;
				font-size: 13px;
				line-height: 16px;
				color: #0076ce;
				font-family: Arial, Helvetica, sans-serif;
			}
	
			hr {
				border: 0;
				border-top: 1px solid #aaaaaa;
			}
	
			img {
				-ms-interpolation-mode: bicubic;
			}
	
			.showMobile {
				display: none;
	
			}
	
			/* Android 4.4 */
			body[style*="margin: 0 10px"] {
				margin: 0 auto !important;
				padding: 0px !important;
			}
	
			div[style*="margin: 16px 0"] {
				margin: 0 auto !important;
				font-size: 100% !important;
			}
	
			/* Gmail */
			* img[tabindex="0"]+div {
				display: none !important;
			}
	
			/* ------------- MOBILE START  ------------------ */
	
			@media screen and (max-width: 600px) {
				u~div #fw-container {
					min-width: 100vw !important;
				}
	
				#m-p-container {
					padding: 10px !important;
				}
	
				/* ------------- Hero Image Swap  ------------------ */
	
				img[class=topbannerSwitcher] {
					display: block !important;
					content: url(images/XXXXXX_hero-320.jpg) !important;
					width: 100% !important;
					height: auto !important;
				}
	
				img[class=mobile] {
					display: block !important;
					width: 100% !important;
					height: auto !important;
				}
	
				/* ------------- END Hero Image Swap  ------------------ */
	
				.wrap {
					width: 100% !important;
					height: auto !important;
				}
	
				.showMobile {
					display: block !important;
				}
	
				.hide {
					display: none !important;
				}
	
				.stack {
					width: 100% !important;
					height: auto !important;
					display: block !important;
					border: none !important;
				}
	
				.m-p-reset {
					padding-top: 10px !important;
				}
	
				.m-px-reset {
					padding-left: 0 !important;
					padding-right: 0 !important;
				}
	
				.m-py-reset {
					padding-top: 0 !important;
					padding-bottom: 0 !important;
				}
	
				.m-p-10 {
					padding: 10px !important;
				}
	
				.m-p-15 {
					padding: 15px !important;
				}
	
				.m-px-20 {
					padding-left: 20px !important;
					padding-right: 20px !important;
				}
	
				.m-px-15 {
					padding-left: 15px !important;
					padding-right: 15px !important;
				}
	
				.m-px-10 {
					padding-left: 10px !important;
					padding-right: 10px !important;
				}
	
				.m-pb-10 {
					padding-bottom: 10px !important;
				}
	
				.m-pb-45 {
					padding-left: 45px !important;
				}
	
				.m-pb-20 {
					padding-bottom: 20px !important;
				}
	
				.m-pt-10 {
					padding-bottom: 10px !important;
				}
	
				.m-pt-20 {
					padding-top: 20px !important;
				}
	
				.mobile-skinny-banner-padding {
					padding: 0 0 15px 0 !important;
				}
	
				.hero-padding {
					padding-top: 25px !important;
					padding-bottom: 15px !important;
				}
	
				.mobile-cta-padding {
					padding: 10px 0px 0px 0px !important;
				}
	
				.mobile-cta-padding2 {
					padding: 10px 0px 20px 0px !important;
				}
	
				.width-auto {
					width: auto !important;
				}
	
				.height-auto {
					height: auto !important;
				}
	
				.align-center {
					text-align: center !important;
				}
	
				.align-left,
				.align-left td {
					text-align: left !important;
				}
	
				.fs13 {
					font-size: 11px !important;
					line-height: 13px !important;
				}
	
				.promo {
					font-size: 104px !important;
					line-height: 54px !important;
				}
	
				.promo-text {
					font-size: 40px !important;
					line-height: 42px !important;
				}
	
				.hero-subhead-padding {
					padding-top: 10px !important;
					padding-bottom: 15px !important;
				}
	
				.product-padding {
					padding-left: 20px !important;
					padding-right: 20px !important;
					padding-bottom: 15px !important;
				}
	
				.product-padding img {
					width: 100% !important;
					height: auto !important;
				}
	
				.product-padding-b15 {
					padding-left: 0px !important;
					padding-right: 0px !important;
					padding-bottom: 15px !important;
				}
	
				.product-padding-b15 img {
					width: 100% !important;
					height: auto !important;
				}
	
				.product-nopadding img {
					width: 100% !important;
					height: auto !important;
				}
	
				.product-col {
					padding-bottom: 25px !important;
				}
	
				.product-col-border {
					padding-top: 25px !important;
					border-top: 1px solid #c8c9c7 !important;
				}
	
				.product-col-middle-border {
					padding: 25px 0 !important;
					border-top: 1px solid #c8c9c7 !important;
				}
	
				#coop-banner .image1 {
					width: calc(120px * 1.5) !important;
				}
	
				#coop-banner .image2 {
					width: calc(53px * 1.5) !important;
				}
	
				#coop-banner .image3 {
					width: calc(74px * 1.5) !important;
				}
	
				.stack.mobile-ql table {
					border-bottom: 1px solid #ffffff !important;
				}
	
				.stack.mobile-ql table * {
					border-bottom: 0 !important;
				}
	
				.mobile-ql .stack {
					padding: 5px 0 !important;
				}
	
				.connect-text-padding {
					padding: 0 0 10px !important;
				}
	
				.wd_auto_3up4 {
					width: 100% !important;
					height: auto !important;
					border-right: none !important;
					padding: 15px 15px !important;
				}
	
				.wd_auto_3up3 {
					width: 100% !important;
					height: auto !important;
					padding-top: 10px !important;
				}
	
				.padding_mid {
					padding-left: 15px !important;
					padding-right: 15px !important;
				}
	
				.h_auto {
					height: auto !important;
				}
	
				.noneMobile {
					display: none !important;
				}
	
				td[class="hero-product"] .product_image_small {
					display: table-cell !important;
					height: auto !important;
					max-height: inherit !important;
					overflow: visible !important;
					float: none !important;
					padding-bottom: 10px;
				}
	
				td[class="hero-product"] .product_image_small img {
					width: 100%;
					height: auto !important;
					display: block !important;
				}
	
				.config-border {
					width: 100% !important;
					height: auto !important;
					border-right: none !important;
					padding-bottom: 15px !important;
					/*border-bottom: 1px solid #aaaaaa !important;*/
				}
	
				.cta-button a {
					padding: 12px 20px !important;
				}
			}
		</style>
	
		<!-- Non-Gmail supported CSS -->
	
		<style>
			/* Outlook app iOS */
			body[data-outlook-cycle] #m-p-container {
				padding: 10px !important;
				background-color: #ffffff !important;
			}
	
			/* Outlook app Android */
			@media (min-resolution: 1dpi) {
				body[data-outlook-cycle] #m-p-container {
					padding: 0px !important;
				}
			}
		</style>
	
		<!-- Microsoft Windows Outlook specific CSS -->
		<!--[if gte mso 9]>
			<xml>
			<o:OfficeDocumentSettings>
				<o:AllowPNG/>
				<o:PixelsPerInch>96</o:PixelsPerInch>
			</o:OfficeDocumentSettings>
			</xml>
			<![endif]-->
	
		<!--[if (gte mso 9)|(IE)]>
			<style type="text/css">
			sup {
				font-size: 90% !important;
				vertical-align: 0 !important;
			}
			.hero-cta-button {
				padding: 15px 20px 15px !important;
				border: 2px solid #444444 !important;
			}
			.cta-button {
				padding: 10px 10px 10px !important;
				border: 2px solid #444444 !important;
			}
			.cta-button-white {
				padding: 7px 10px 7px !important;
				border: 2px solid #ffffff !important;
			}
			.cta-button a, .cta-button-legal, .cta-button-white a, .hero-cta-button a {
				padding: 0 !important;
				border: 0 !important;
			}
			
			a span, .cta-button a, .cta-button span, .cta-button a span, .hero-cta-button a, .hero-cta-button span, .hero-cta-button a span, .cta-button-legal a, .cta-button-legal span, .cta-button-legal a span, .cta-button-white a, .cta-button-white span, .cta-button-white a span {
				text-decoration: none !important;
			}       
			</style>
			<![endif]-->
	</head>
		`)

		// 	try {
		// 		if (selectedModules.hero === "hero1-lifestyle-product") {
		// 			heroHTML.push(`
		// 		<!-- ### HERO  ### -->
		// <tr>
		// <td width="600" align="center" bgcolor="${colors.accentColor.hex}">
		// <table cellpadding="0" cellspacing="0"> 
		// 	<tr>
		// 	<td align="center" valign="top" style="padding-top: 50px;">
		// 	<table role="presentation"  border="0" cellspacing="0" cellpadding="0">
		// 		<tr>
		// 			<td align="center" valign="middle">
		// 				<a href=""  target="_blank" style="outline:none; color:#ffffff; text-decoration:none;">
		// 					<img src="images/XXXXXX_Hero_Headline_Image.png" alt="Dell" border="0" style="display:block; font-size:16px; color:#0076ce;" class="wrap" />
		// 				</a>
		// 			</td>
		// 		</tr>
		// 	</table>
		// 	</td>
		// 	</tr>
		// 	<tr>
		// 		<td align="center" valign="top" style="padding-top: 35px">
		// 		<table role="presentation"  border="0" cellspacing="0" cellpadding="0">
		// 		<tr>
		// 			<td align="center" valign="middle">
		// 				<a href=""  target="_blank" style="outline:none; color:#ffffff; text-decoration:none;">
		// 					<img src="images/XXXXXX_Hero1_Lifestyle_Image.png" alt="Hero Lifestyle Image" border="0" style="display:block; font-size:16px; color:#0076ce;" class="wrap" />
		// 				</a>
		// 			</td>
		// 		</tr>
		// 		</table>
		// 		</td>
		// 	</tr>
		// 	<tr>
		// 		<td align="center" valign="top" style="padding:0">
		// 		<table role="presentation"  border="0" cellspacing="0" cellpadding="0">
		// 		<tr>
		// 			<td width="70" class="noneMobile">&nbsp;</td>
		// 			<td style=" font-family: Arial, Helvetica, sans-serif; padding:30px 12px 30px 12px; font-size:18px;line-height:22px;mso-line-height-rule:exactly; text-align:center; color:#ffffff;">
		// 				<a href="" target="_blank" style="outline:none; color:#ffffff; text-decoration:none;">
		// 					${copyValues.hero.subheadline}
		// 				</a>
		// 			</td>
		// 			<td width="70" class="noneMobile">&nbsp;</td>
		// 		</tr>
		// 		</table>
		// 		</td>
		// 	</tr>
		// 	<tr>
		// 		<td align="center" valign="top" style="padding:0">
		// 		<table role="presentation"  border="0" cellspacing="0" cellpadding="0">
		// 		<tr>
		// 			<td align="center" valign="middle">
		// 				<a href=""  target="_blank" style="outline:none; color:#ffffff; text-decoration:none;">
		// 					<img src="images/XXXXXX_Hero1_Product_Image.png" alt="Dell" border="0" style="display:block; font-size:16px; color:#0076ce;" class="wrap" />
		// 				</a>
		// 			</td>
		// 		</tr>
		// 		</table>
		// 		</td>
		// 	</tr>
		// <!-------- Buttons ----------->
		// 	<tr>
		// 		<td style="padding:30px 20px;" align="center" valign="middle">
		// 		<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" class="wrap">
		// 		<tr>
		// 			<th valign="top" style="box-sizing:border-box; padding:0 5px;" class="stack m-px-reset m-pb-10">
		// 			<table role="presentation" width="180" align="center" border="0" cellpadding="0" cellspacing="0" style="width:180px;" class="wrap">
		// 			<tr>
		// 				<td valign="middle" align="center" style="font-family:Arial, Helvetica, sans-serif; font-size:16px; mso-line-height-rule:exactly; line-height:22px; font-weight:700; color:${colors.accentColor.hex}; background-color:${colors.tertiaryColor.hex}; letter-spacing:0.03em; white-space: nowrap;" class="hero-cta-button">
		// 					<a href="" target="_blank" style="color:${colors.accentColor.hex}; border:2px solid ${colors.tertiaryColor.hex}; text-decoration:none; padding:15px 20px; display:block;">
		// 						${copyValues.hero.cta}
		// 					</a>
		// 				</td>
		// 			</tr>
		// 			</table>
		// 			</th>
		// 		</tr>
		// 		</table>
		// 		</td>
		// 	</tr>
		// </table>
		// </td>
		// </tr>
		// <!-- ### END HERO  ### -->

		// 		`)

		// 		} else if (selectedModules.hero === "hero1-lifestyle") {
		// 			heroHTML.push(`
		// 		<!-- ### HERO  ### -->
		// <tr>
		// <td width="600" align="center" bgcolor="${colors.accentColor.hex}">
		// <table cellpadding="0" cellspacing="0"> 
		// 	<tr>
		// 		<td align="center" valign="top" style="padding-top: 0">
		// 		<table role="presentation"  border="0" cellspacing="0" cellpadding="0">
		// 		<tr>
		// 			<td align="center" valign="middle">
		// 				<a href=""  target="_blank" style="outline:none; color:#ffffff; text-decoration:none;">
		// 					<img src="images/XXXXXX_Hero1_Lifestyle_Image.png" alt="Hero Lifestyle Image" border="0" style="display:block; font-size:16px; color:#0076ce;" class="wrap" />
		// 				</a>
		// 			</td>
		// 		</tr>
		// 		</table>
		// 		</td>
		// 	</tr>
		// 	<tr>
		// 	<td align="center" valign="top" style="padding-top: 50px;">
		// 	<table role="presentation"  border="0" cellspacing="0" cellpadding="0">
		// 		<tr>
		// 			<td align="center" valign="middle">
		// 				<a href=""  target="_blank" style="outline:none; color:#ffffff; text-decoration:none;">
		// 					<img src="images/XXXXXX_Hero_Headline_Image.png" alt="Dell" border="0" style="display:block; font-size:16px; color:#0076ce;" class="wrap" />
		// 				</a>
		// 			</td>
		// 		</tr>
		// 	</table>
		// 	</td>
		// 	</tr>
		// 	<tr>
		// 		<td align="center" valign="top" style="padding:0">
		// 		<table role="presentation"  border="0" cellspacing="0" cellpadding="0"><tr>
		// 		<td width="8" class="noneMobile">&nbsp;</td>
		// 			<td style=" font-family: Arial, Helvetica, sans-serif; padding:20px 12px 10px 22px; font-size:18px;line-height:22px;mso-line-height-rule:exactly; text-align:left; color:#ffffff;">
		// 				<a href="" target="_blank" style="outline:none; color:#ffffff; text-decoration:none;">
		// 					${copyValues.hero.subheadline}
		// 				</a>
		// 			</td>
		// 			<td width="30" class="noneMobile">&nbsp;</td>
		// 		</tr>
		// 		</table>
		// 		</td>
		// 	</tr>
		// <!-------- Buttons ----------->
		// 	<tr>
		// 		<td style="padding:30px 20px;" align="center" valign="middle">
		// 		<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" class="wrap">
		// 		<tr>
		// 			<th valign="top" style="box-sizing:border-box; padding:0 5px;" class="stack m-px-reset m-pb-10">
		// 			<table role="presentation" width="180" align="center" border="0" cellpadding="0" cellspacing="0" style="width:180px;" class="wrap">
		// 			<tr>
		// 				<td valign="middle" align="center" style="font-family:Arial, Helvetica, sans-serif; font-size:16px; mso-line-height-rule:exactly; line-height:22px; font-weight:700; color:${colors.accentColor.hex}; background-color:${colors.tertiaryColor.hex}; letter-spacing:0.03em; white-space: nowrap;" class="hero-cta-button">
		// 					<a href="" target="_blank" style="color:${colors.accentColor.hex}; border:2px solid ${colors.tertiaryColor.hex}; text-decoration:none; padding:15px 20px; display:block;">
		// 						${copyValues.hero.cta}
		// 					</a>
		// 				</td>
		// 			</tr>
		// 			</table>
		// 			</th>
		// 		</tr>
		// 		</table>
		// 		</td>
		// 	</tr>
		// </table>
		// </td>
		// </tr>
		// <!-- ### END HERO  ### -->

		// 		`)


		// 			console.log("Cosneguimos pegar os valores", copyValues.hero.subheadline, copyValues.hero.cta)
		// 		}
		// 	} catch (error) {
		// 		console.error('Erro ao exportar HTML:', error);
		// 	}


		const htmlContent = `

		${cssStyles.join('\n')}

<body bgcolor="#ffffff" style="margin:0; padding:0px;">

<table role="presentation" align="center" width="100%" border="0" cellspacing="0" cellpadding="0">
<tr>
<td align="center" valign="top" bgcolor="#ffffff" id="fw-container">
	
<table role="presentation" align="center" width="100%" border="0" cellspacing="0" cellpadding="0">
<tr>
<td align="center" valign="top" style="padding:25px;" id="m-p-container">
<table role="presentation" width="600" bgcolor="#ffffff" class="wrap" align="center" cellpadding="0" cellspacing="0" border="0" style="width:600px; margin: 0 auto;">


	<!-- ### EMAIL HEADER ### -->

	<!-- -------------- SSL  ### -->
	${subjectHTML.join('\n')}
	<!-- -------------- /END SSL  ### -->
	
	${headerHTML.join('\n')}

	<!-- -------------- MOBILE PLUGIN BANNER  ### -->
	${mobilePluginHTML.join('\n')}			
	<!-- -------------- MOBILE PLUGIN BANNER END / ### --> 
	<!--<![endif]-->
	
	
	${heroHTML.join('\n')}
	${mobileFundingHTML.join('\n')}
	${desktopPluginHTML.join('\n')}
	
	<tr>
	<td class="showMobile" height="10"></td>
	</tr>	

	${fpoHTML.join('\n')}
	
	<tr>
		<td height="10"></td>
	</tr>

	${bannerHTML.join('\n')}

	<tr>
		<td height="10"></td>
	</tr>	


	<!-- ### MCAFEE BANNER ### -->
	<tr>
	<td align="center" valign="top" style="padding:0px;">
	<table dir="rtl" role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
		<tr>
			<td align="center" style="padding:0px;">
			<table width="100%" role="presentation" border="0" cellspacing="0" cellpadding="0">
			<tr>
				<th align="left" valign="top" class="stack">
				<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td align="right" valign="middle" class="product-nopadding">
							<a href=""  target="_blank">
								<img src="images/XXXXXX_mcafee.jpg" alt="McAfee" border="0" style="display:block;" />
							</a>
						</td>
					</tr>
				</table>
                </th>
                <th bgcolor="#c32026" align="center" valign="top" class="stack">
				<table dir="ltr" role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
					<td style="padding:0px 20px;" class="m-pb-20">
					<table>
						<tr>
						<td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; mso-line-height-rule:exactly; line-height:15px; font-weight:bold; color:#444444; letter-spacing:0em; padding-bottom:3px;" class="align-center">
						<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
							<tr>
								<td height="20" >&nbsp;</td>
							</tr>
							<tr>
								<td valign="top" style="font-family: Arial, Helvetica, sans-serif;color:#ffffff;font-size:13px;padding-bottom:10px;" class="align-center">
									<a href=""   target="_blank" style="outline:none; color:#ffffff; text-decoration:none;">
										<strong>Invista em PCs bem protegidos.</strong>
									</a>
								</td>
							</tr>
							<tr>
								<td style="font-family: Arial, Helvetica, sans-serif; font-size:12px;line-height:15px; color:#ffffff;" class="align-center">
									<a href=""   target="_blank" style="outline:none; color:#ffffff; text-decoration:none;">
										A Dell oferece McAfee Small Business Security para garantir a segurança da sua empresa.
									</a>
								</td>
							</tr>
							<tr>
								<td height="10"></td>
							</tr>
							<tr>
								<td class="align-center m-px-5 m-pt-15" valign="top">
								<table role="presentation" align="left" border="0" cellpadding="0" cellspacing="0" class="wrap">
									<tr>
										<td valign="middle" align="center" style="font-family:Arial, Helvetica, sans-serif; font-size:14px; mso-line-height-rule:exactly; line-height:16px; font-weight:700; color:#ffffff; letter-spacing:0.03em;" class="cta-button-white">
											<a href="" target="_blank" style="color:#ffffff; border:2px solid #ffffff; text-decoration:none; padding:10px 10px; display:block;">
												Saiba mais
											</a>
										</td>
									</tr>
								</table>
								</td>
							</tr>
						</table>
						</td>
						</tr>
					</table>
					</td>
					</tr>
				</table>
				</th>
			</tr>
			</table>
			</td>
		</tr>
	</table>
	</td>
	</tr>
	<!-- ### /END MCAFEE BANNER / ### --> 
	

	<!-- ### MICORSOFT SB BANNER ### -->
	<tr>
	<td align="center" valign="top" style="padding:0px;">
	<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
		<tr>
			<td align="center" style="padding:0px;">
			<table width="100%" role="presentation" border="0" cellspacing="0" cellpadding="0">
			<tr>
				<th align="left" valign="middle" class="stack">
					<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td align="center" valign="middle" class="product-padding-b15">
								<a href=""  target="_blank">
									<img src="images/XXXXXX_microsoft-sb.png" alt="Microsoft" border="0" style="display:block;" />
								</a>
							</td>
						</tr>
					</table>
				</th>
                <th align="center" valign="top" class="stack" style="padding:0 0px;">
				<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
				<tr>
					<td style="padding:0px 20px;" class="m-pb-20">
					<table>
						<tr>
						<td align="left" style="font-family:Arial, Helvetica, sans-serif;" class="align-center">
						<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
							<tr>
								<td height="20" class="noneMobile">&nbsp;</td>
							</tr>
							<tr>
								<td valign="top" style="font-family: Arial, Helvetica, sans-serif;color:#444444;font-size:18px; line-height: 22px; padding-bottom:5px;" class="align-center">
									<a href=""   target="_blank" style="outline:none; color:#444444; text-decoration:none;">
										Não se esqueça de adicionar o <br />
										Office 2019, o essencial para criar.
									</a>
								</td>
							</tr>
							<tr>
								<td style="font-family: Arial, Helvetica, sans-serif; font-size:11px;line-height:14px; color:#444444;" class="align-center">
									<a href=""   target="_blank" style="outline:none; color:#444444; text-decoration:none;">
										Os aplicativos clássicos do Office – Word, Excel, PowerPoint e OneNote – para criar e apresentar suas ideias.
									</a>
								</td>
							</tr>
							<tr>
								<td height="10"></td>
							</tr>
							<tr>
								<td class="align-center m-px-5 m-pt-15" valign="top">
								<table role="presentation" align="left" border="0" cellpadding="0" cellspacing="0" class="wrap">
									<tr>
										<td valign="middle" align="center" style="font-family:Arial, Helvetica, sans-serif; font-size:14px; mso-line-height-rule:exactly; line-height:16px; font-weight:700; color:#444444; letter-spacing:0.03em;" class="cta-button">
											<a href="" target="_blank" style="color:#444444; border:2px solid #444444; text-decoration:none; padding:10px 10px; display:block;">
												Saiba mais
											</a>
										</td>
									</tr>
								</table>
								</td>
							</tr>
						</table>
						</td>
						</tr>
					</table>
					</td>
				</tr>
				</table>
				</th>
            </tr>
			</table>
			</td>
		</tr>
	</table>
	</td>
    </tr>
	<!-- ### /END MICORSOFT SB BANNER / ### -->


	<!-- ### FOOTER ### -->
	<!-- Buttons-->
	<tr>
	<td style="padding:30px 0px 30px;" align="center" valign="middle">
	<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" class="wrap">
		<tr>
			<th valign="top" style="box-sizing:border-box; padding:0 5px;" class="stack m-px-reset m-pb-10">
			<table role="presentation" width="130" align="center" border="0" cellpadding="0" cellspacing="0" style="width:130px;" class="wrap">
				<tr>
					<td valign="middle" align="center" style="font-family:Arial, Helvetica, sans-serif; font-size:15px; mso-line-height-rule:exactly; line-height:17px; font-weight:700; color:#444444; letter-spacing:0.03em;" class="cta-button">
						<a href="" target="_blank" style="color:#444444; border:2px solid #444444; text-decoration:none; padding:15px 20px; display:block;">
							Notebooks
						</a>
					</td>
				</tr>
			</table>
			</th>
			<th valign="top" style="box-sizing:border-box; padding:0 5px;" class="stack m-px-reset m-pb-10">
			<table role="presentation" width="130" align="center" border="0" cellpadding="0" cellspacing="0" style="width:130px;" class="wrap">
				<tr>
					<td valign="middle" align="center" style="font-family:Arial, Helvetica, sans-serif; font-size:15px; mso-line-height-rule:exactly; line-height:17px; font-weight:700; color:#444444; letter-spacing:0.03em;" class="cta-button">
						<a href="" target="_blank" style="color:#444444; border:2px solid #444444; text-decoration:none; padding:15px 20px; display:block;">
							Ofertas
						</a>
					</td>
				</tr>
			</table>
			</th>
			<th valign="top" style="box-sizing:border-box; padding:0 5px;" class="stack m-px-reset m-pb-10">
			<table role="presentation" width="130" align="center" border="0" cellpadding="0" cellspacing="0" style="width:130px;" class="wrap">
				<tr>
					<td valign="middle" align="center" style="font-family:Arial, Helvetica, sans-serif; font-size:15px; mso-line-height-rule:exactly; line-height:17px; font-weight:700; color:#444444; letter-spacing:0.03em;" class="cta-button">
						<a href="" target="_blank" style="color:#444444; border:2px solid #444444; text-decoration:none; padding:15px 20px; display:block;">
							Desktops
						</a>
					</td>
				</tr>
			</table>
			</th>
			<th valign="top" style="box-sizing:border-box; padding:0 5px;" class="stack m-px-reset m-pb-10">
			<table role="presentation" width="130" align="center" border="0" cellpadding="0" cellspacing="0" style="width:130px;" class="wrap">
				<tr>
					<td valign="middle" align="center" style="font-family:Arial, Helvetica, sans-serif; font-size:15px; mso-line-height-rule:exactly; line-height:17px; font-weight:700; color:#444444; letter-spacing:0.03em;" class="cta-button">
						<a href="" target="_blank" style="color:#444444; border:2px solid #444444; text-decoration:none; padding:15px 20px; display:block;">
							Acessórios
						</a>
					</td>
				</tr>
			</table>
			</th>
		</tr>
	</table>
	</td>
	</tr>
	
	<!-- -------------- SOCIAL MEDIA ROW ------------------------------>		
	<tr>	  
	<td width="100%" align="center">
	<table cellpadding="0" cellspacing="0">
		<tr>
		<td align="center">
		<table cellpadding="0" cellspacing="0">
			<tr>
				<td class="social-icon" align="center" style="padding:0 5px;"><a href="" target="_blank" style="outline:none;"><img src="images/XXXXXX_icon-ig.png" alt="Instagram" style="border: 0;"/></a></td>
				<td class="social-icon" align="center" style="padding:0 5px;"><a href="" target="_blank" style="outline:none;"><img src="images/XXXXXX_icon-twitter.png" alt="Twitter" style="border: 0;"/></a></td>
				<td class="social-icon" align="center" style="padding:0 5px;"><a href="" target="_blank" style="outline:none;"><img src="images/XXXXXX_icon-facebook.png" alt="Facebook"  style="border: 0;"/></a></td> 
				<td class="social-icon" align="center" style="padding:0 5px;"><a href="" target="_blank" style="outline:none;"><img src="images/XXXXXX_icon-li.png" alt="LinkedIn" style="border: 0;"/></a></td>  
			</tr>
		</table>
		</td>
		</tr>
	</table>
	</td>
	</tr>
	<!-- -------------- /END SOCIAL MEDIA ROW ------------------------------>


	<tr>
		<td height="10"></td>
	</tr>


	<tr>
	<td valign="top" style="padding:20px;">
	<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
		<tr>
			<td align="center" valign="top" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:15px; mso-line-height-rule:exactly; color:#444444; padding-top:0px;">
				<a href=""  target="_blank" style="outline:none; color:#0076ce; text-decoration:none;">Gerencie suas preferências</a>&nbsp; | &nbsp;
				<a href=""  target="_blank" style="outline:none; color:#0076ce; text-decoration:none;">Cancelar inscrição</a>&nbsp; | &nbsp;
				<a href=""  target="_blank" style="outline:none; color:#0076ce; text-decoration:none;">Declaração de privacidade</a>
				<br><br>
			</td>
		</tr>
		<tr>
			<td align="left" valign="top" style="font-family:Arial, Helvetica, sans-serif; font-size:10px; line-height:14px; mso-line-height-rule:exactly; color:#444444; padding-top:0px;text-align: justify;">
				<center>Para informações sobre suas preferências de e-mail, entre em contato conosco em <a href="mailto:Privacy@Dell.com"  target="_blank" style="outline:none; color:#0076ce; text-decoration:underline;">Privacy@Dell.com</a>.<br>
				A sede global da Dell Technologies está localizada em One Dell Way, Round Rock, TX 78682, EUA.</center><br>

				TEXT <a href=""  target="_blank" style="outline:none; color:#0076ce; text-decoration:underline;">www.dell.com.br</a>.
				<br><br>

				TEXT <a href=""  target="_blank" style="outline:none; color:#0076ce; text-decoration:underline;">www.dell.com.br/servicos</a>.
				<br><br>

				Empresa beneficiada pela Lei da Informática. Fotos meramente ilustrativas. PowerEdge, Vostro, Latitude, PowerVault, Precision, OptiPlex, XPS, Inspiron, Alienware, CompleteCare e ProSupport são marcas registradas da &copy; 2023 Dell Inc. Todos osdireitos reservados. Microsoft e Windows são marcas registradas da Microsoft Corporation nos EUA. Ultrabook, Celeron, Celeron Inside, Core Inside, Intel, Intel Logo, Intel Atom, Intel Atom Inside, Intel Core, Intel Inside, Intel Inside Logo, Intel vPro,Intel Evo, Pentium, Pentium Inside, vPro Inside, Xeon, Xeon Inside, Intel Agilex, Arria, Cyclone, Movidius, eASIC, Ethernet, Iris, MAX, Select Solutions, Si Photonics, Stratix, Tofino, and Intel Optane são marcas registradas da Intel Corporation e suassubsidiárias. &copy; 2023 Advanced Micro Devices, Inc. Todos os direitos reservados. A sigla AMD, o logotipo de seta da AMD e as combinações resultantes são marcas registradas da Advanced Micro Devices, Inc. &copy; 2023 NVIDIA, o logotipo NVIDIA,GeForce, GeForce RTX, GeForce RTX Super, GeForce GTX, GeForce GTX Super, GRID, SHIELD, Battery Boost, Reflex, DLSS, CUDA, FXAA, GameStream, G-SYNC, G-SYNC Ultimate, NVLINK, ShadowPlay, SLI, TXAA, PhysX, GeForce Experience, GeForce NOW, Maxwell, Pascal eTuring são marcas comerciais e/ou marcas registradas da NVIDIA Corporation nos EUA e em outros países.
				<br><br>
				
				Dell Brasil / Av. Industrial Belgraf, 400 / Eldorado do Sul, RS / CEP 92990-000 / Brasil.<br>
			</td>
		</tr>		
	</table>
	</td>
    </tr>
	<!-- ### FOOTER END / ### -->


</table>
</td>
</tr>


	<!-- Forces desktop layout for non-CSS supported clients --> 
	<!--[if !mso]><!-->
	<tr>
	<td class="hide" align="center" height="1" style="font-size:1px; line-height:1px;">
	<table role="presentation" class="hide" width="600" align="center" cellpadding="0" cellspacing="0" style="min-width: 600px; mso-hide:all;" border="0">
		<tr>
			<td style="font-size:0px; line-height:0px; border:0px;">&nbsp;</td>
		</tr>
	</table>
	</td>
	</tr>
	<!--<![endif]-->
	<!-- Forces desktop layout for non-CSS supported clients / -->
	

</table>
</td>
</tr>
</table>


	<!-- --------------ADD Impression Tag HERE -->		
	<style> @media print{ #_two50 { background-image:url('https://dellconsumer.everestengagement.com/ea/HKxSNe3g9p/?t=p&e=<%= recipient.id %>&c=<%= message.delivery.operation.campaignID %>'); } } blockquote #_two50, #mailContainerBody #_two50, div.OutlookMessageHeader, table.moz-email-headers-table { background-image:url('https://dellconsumer.everestengagement.com/ea/HKxSNe3g9p/?t=f&e=<%= recipient.id %>&c=<%= message.delivery.operation.campaignID %>'); } </style> <div id='_two50'></div> <img id='_two50_img' src='https://dellconsumer.everestengagement.com/ea/HKxSNe3g9p/?e=<%= recipient.id %>&c=<%= message.delivery.operation.campaignID %>' width='1' height='1' style='margin:0 !important; padding:0 !important; border:0 !important; height:1px !important; width:1px !important;' />		


</body>
</html>
`

		try {
			// Pedir ao usuário para selecionar onde salvar o arquivo
			const folder = await fs.getFolder();

			if (folder) {
				// Criar um arquivo HTML dentro da pasta
				const file = await folder.createFile("email.html", { overwrite: true });
				await file.write(htmlContent);
				console.log('Arquivo HTML exportado com sucesso!');

				//Criar uma nova pasta chamada "images" dentro da pasta principal
				const imagesFolder = await folder.createFolder("images", { overwrite: true });

				// Copiar a imagem do diretório do plugin para a nova pasta "images" com novo nome
				const pluginDir = await fs.getPluginFolder();

				let logoHeader;
				let iconCall;
				let iconChat;
				let iconNb;

				if (header === "csb") {
					logoHeader = await pluginDir.getEntry('assets/html/html-images/XXXXXX_dell-logo.png');
					iconCall = await pluginDir.getEntry('assets/html/html-images/XXXXXX_icon-call.png');
					iconChat = await pluginDir.getEntry('assets/html/html-images/XXXXXX_icon-chat.png');
					iconNb = await pluginDir.getEntry('assets/html/html-images/XXXXXX_icon-nb.png');
				} else if (header === "outlet") {
					logoHeader = await pluginDir.getEntry('assets/html/html-images/XXXXXX_outlet-logo.png');
					iconCall = await pluginDir.getEntry('assets/html/html-images/XXXXXX_icon-call.png');
					iconChat = await pluginDir.getEntry('assets/html/html-images/XXXXXX_icon-chat.png');
					iconNb = await pluginDir.getEntry('assets/html/html-images/XXXXXX_icon-nb.png');
				} else if (header === "alienware") {
					logoHeader = await pluginDir.getEntry('assets/html/html-images/XXXXXX_alienware-logo.png');
					iconCall = await pluginDir.getEntry('assets/html/html-images/XXXXXX_icon-call.png');
					iconChat = await pluginDir.getEntry('assets/html/html-images/XXXXXX_icon-chat.png');
					iconNb = await pluginDir.getEntry('assets/html/html-images/XXXXXX_icon-nb.png');
				} else if (header === "sb-gdo-dexn" || header === "sb-rd") {
					logoHeader = await pluginDir.getEntry('assets/html/html-images/XXXXXX_dell-logo.png');
					iconCall = await pluginDir.getEntry('assets/html/html-images/XXXXXX_icon-rd-chat.png');
				}

				try {
					if (logoHeader) {
						const copyLogoHeader = await logoHeader.copyTo(imagesFolder, { overwrite: true });

						// Deixar aqui anotado para lógica futura - Aqui devemos deixar o copy para a pasta raiz e usar o moveTo para renomear o arquivo e jogar dentro da pasta images já com o DSID correto da campanha
						console.log('Logo do header copiado com sucesso!');
					} else {
						console.log('Erro ao encontrar o logo do header no diretório do plugin.');
					}
				} catch (error) {
					console.error('Erro ao copiar o logo do Header:', error);
				}

				try {
					if (iconCall) {
						const copyIconCall = await iconCall.copyTo(imagesFolder, { overwrite: true });
						console.log('Ícone de call copiado com sucesso!');
					} else {
						console.log('Erro ao encontrar o ícone de call no diretório do plugin.');
					}
				} catch (error) {
					console.error('Erro ao copiar o ícone de call:', error);
				}

				try {
					if (iconChat) {
						const copyIconChat = await iconChat.copyTo(imagesFolder, { overwrite: true });
						console.log('Ícone de chat copiado com sucesso!');
					} else {
						console.log('Erro ao encontrar o ícone de chat no diretório do plugin.');
					}
				} catch (error) {
					console.error('Erro ao copiar o ícone de chat:', error);
				}

				try {
					if (iconNb) {
						const copyIconNb = await iconNb.copyTo(imagesFolder, { overwrite: true });
						console.log('Ícone do notebook copiado com sucesso!');
					} else {
						console.log('Erro ao encontrar o ícone do notebook no diretório do plugin.');
					}
				} catch (error) {
					console.error('Erro ao copiar o ícone do notebook:', error);
				}


				let logoWin;

				if (selectedModules.vf === "win11") {
					logoWin = await pluginDir.getEntry('assets/html/html-images/XXXXXX_win11.png');
				}
				try {
					if (logoWin) {
						const copyLogoWin = await logoWin.copyTo(imagesFolder, { overwrite: true });
						console.log('Logo Windows 11 copiado com sucesso!');
					} else {
						console.log('Erro ao encontrar o logo do Windows 11 no diretório do plugin.');
					}
				} catch (error) {
					console.error('Erro ao copiar o logo do Windows 11:', error);
				}

				async function exportSlices(folder) {
					try {

						// Criar um token de sessão usando o diretório escolhido
						const token = fs.createSessionToken(folder);

						// Definir as opções de exportação
						const exportOptions = {
							as: {
								_obj: "PNG",
								extendedQuality: 9,
								matteColor: {
									_enum: "matteColor",
									_value: "none"
								}
							},
							in: {
								_path: token,
								_kind: "local"
							},
							lowerCase: true,
							saveStage: {
								_enum: "saveStageType",
								_value: "saveBegin"
							},
							_isCommand: false
						};

						// Criar uma função para executar dentro do escopo modal
						const targetFunction = async (executionContext) => {

							try {
								const token = fs.createSessionToken(folder);

								const hideBackgrounds = [
									hideLayer({
										Name: "Hero Background"
									})
								];

								if (plugin === "plugin" || plugin === "supercharger") {
									hideBackgrounds.push(
										hideLayer({
											Name: "Plugin Background"
										})
									);
								}

								if (banner === "left" || banner === "right") {
									hideBackgrounds.push(
										hideLayer({
											Name: "Banner Background"
										})
									);
								}

								hideBackgrounds.push(
									hideLayer({
										Name: "Background"
									})
								);

								await batchPlay(hideBackgrounds, {})

								async function exportSlices() {
									const saveForWebSlices = await batchPlay(
										[
											{
												_obj: "export",
												using: {
													_obj: "SaveForWeb",
													$Op: {
														_enum: "$SWOp",
														_value: "$OpSa"
													},
													$DIDr: true,
													in: {
														_path: token,
														_kind: "local"
													},
													pathName: "C:\Users\hesse\Downloads\HTML\images\XXXXXX_Hero_Headline_Image.png",
													format: {
														_enum: "$IRFm",
														_value: "$PN24"
													},
													interfaceIconFrameDimmed: false,
													transparency: true,
													$Mtt: true,
													$EICC: true,
													$MttR: 255,
													$MttG: 255,
													$MttB: 255,
													$SHTM: false,
													$SImg: true,
													$SWsl: {
														_enum: "$STsl",
														_value: "$SLUs"
													},
													$SWch: {
														_enum: "$STch",
														_value: "$CHsR"
													},
													$SWmd: {
														_enum: "$STmd",
														_value: "$MDCC"
													},
													$ohXH: false,
													$ohIC: true,
													$ohAA: true,
													$ohQA: true,
													$ohCA: false,
													$ohIZ: true,
													$ohTC: {
														_enum: "$SToc",
														_value: "$OC03"
													},
													$ohAC: {
														_enum: "$SToc",
														_value: "$OC03"
													},
													$ohIn: -1,
													$ohLE: {
														_enum: "$STle",
														_value: "$LE03"
													},
													$ohEn: {
														_enum: "$STen",
														_value: "$EN00"
													},
													$olCS: false,
													$olEC: {
														_enum: "$STst",
														_value: "$ST00"
													},
													$olWH: {
														_enum: "$STwh",
														_value: "$WH01"
													},
													$olSV: {
														_enum: "$STsp",
														_value: "$SP04"
													},
													$olSH: {
														_enum: "$STsp",
														_value: "$SP04"
													},
													$olNC: [
														{
															_obj: "$SCnc",
															$ncTp: {
																_enum: "$STnc",
																_value: "$NC00"
															}
														},
														{
															_obj: "$SCnc",
															$ncTp: {
																_enum: "$STnc",
																_value: "$NC19"
															}
														},
														{
															_obj: "$SCnc",
															$ncTp: {
																_enum: "$STnc",
																_value: "$NC28"
															}
														},
														{
															_obj: "$SCnc",
															$ncTp: {
																_enum: "$STnc",
																_value: "$NC24"
															}
														},
														{
															_obj: "$SCnc",
															$ncTp: {
																_enum: "$STnc",
																_value: "$NC24"
															}
														},
														{
															_obj: "$SCnc",
															$ncTp: {
																_enum: "$STnc",
																_value: "$NC24"
															}
														}
													],
													$obIA: false,
													$obIP: "",
													$obCS: {
														_enum: "$STcs",
														_value: "$CS01"
													},
													$ovNC: [
														{
															_obj: "$SCnc",
															$ncTp: {
																_enum: "$STnc",
																_value: "$NC01"
															}
														},
														{
															_obj: "$SCnc",
															$ncTp: {
																_enum: "$STnc",
																_value: "$NC20"
															}
														},
														{
															_obj: "$SCnc",
															$ncTp: {
																_enum: "$STnc",
																_value: "$NC02"
															}
														},
														{
															_obj: "$SCnc",
															$ncTp: {
																_enum: "$STnc",
																_value: "$NC19"
															}
														},
														{
															_obj: "$SCnc",
															$ncTp: {
																_enum: "$STnc",
																_value: "$NC06"
															}
														},
														{
															_obj: "$SCnc",
															$ncTp: {
																_enum: "$STnc",
																_value: "$NC24"
															}
														},
														{
															_obj: "$SCnc",
															$ncTp: {
																_enum: "$STnc",
																_value: "$NC24"
															}
														},
														{
															_obj: "$SCnc",
															$ncTp: {
																_enum: "$STnc",
																_value: "$NC24"
															}
														},
														{
															_obj: "$SCnc",
															$ncTp: {
																_enum: "$STnc",
																_value: "$NC22"
															}
														}
													],
													$ovCM: false,
													$ovCW: true,
													$ovCU: true,
													$ovSF: true,
													$ovCB: true,
													$ovSN: "images"
												},
												_options: {
													dialogOptions: "dontDisplay"
												}
											}
										],
										{}
									);
								}

								exportSlices()

								const showBackgrounds = [
									showLayer({
										Name: "Hero Background"
									}),
								];

								if (plugin === "plugin" || plugin === "supercharger") {
									showBackgrounds.push(
										showLayer({
											Name: "Plugin Background"
										}),
									);
								}

								if (banner === "left" || banner === "right") {
									showBackgrounds.push(
										showLayer({
											Name: "Banner Background"
										})
									);
								}

								showBackgrounds.push(
									showLayer({
										Name: "Background"
									})
								);

								await batchPlay(showBackgrounds, {})


							} catch (error) {
								console.error('Erro ao salvar o arquivo:', error);
							}
						};

						// Executar a função dentro do escopo modal
						await core.executeAsModal(targetFunction);
					} catch (error) {
						console.error('Erro ao exportar fatias:', error);
					}
				}

				// Chamar a função para exportar as fatias, passando a pasta selecionada pelo usuário
				await exportSlices(folder);


			} else {
				console.log('Operação cancelada pelo usuário.');
			}
		} catch (error) {
			console.error('Erro ao exportar HTML:', error);
		}
	}

	async function clearAllSlicesEnd() {
		const targetFunction = async (executionContext) => {
			try {

				const clearAllSlicesEnd = [clearAllSlices()]

				await batchPlay(clearAllSlicesEnd, {})

				console.log('Todas as slices limpas ao final!', 'color: #00EAADFF;');
			} catch (error) {
				console.error('Não foi posssível limpar as slices ao final.', error);
			}
		}

		const options = {
			commandName: 'Recortar Hero',
			interactive: true,
		};

		await core.executeAsModal(targetFunction, options);
	}


	const getAllContent = async () => {
		try {
			await getAllHeroContent();
			if (selectedModules.plugin === "supercharger") {
				await getSuperchargerSlices();
			}
			if (selectedModules.banner === "left" || selectedModules.banner === "right") {
				await getBannerSlices();
			}
			// await getHeroColors()

			console.log('%cTodas as fun\u00e7\u00f5es foram executadas com sucesso.', 'color: #00EAADFF;');
		} catch (error) {
			console.error('Erro ao montar o layout:', error);
		}
	};


	const exportHTML = async () => {
		try {
			await mountHTML();
			await clearAllSlicesEnd()

			console.log('%cTodas as fun\u00e7\u00f5es foram executadas com sucesso.', 'color: #00EAADFF;');
		} catch (error) {
			console.error('Erro ao montar o layout:', error);
		}
	};

	return (
		<>
			<button onClick={getAllContent}>Get PSD Info</button>
			<button onClick={exportHTML}>Exportar HTML</button>
		</>
	);
}

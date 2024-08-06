import React from 'react';
import { storage, batchPlay, core } from '../../../App.js';
import useAppContext from '../../../hook/useAppContext.jsx';
import { getBounds, makeSlice, hideLayer, showLayer, clearAllSlices } from '../../../hook/hooksJSON.jsx';
import { getBoundsAndPosition } from '../../../hook/getBoundsAndPosition.jsx';
import { Head, Header, Funding, Hero, Plugin, Subject, Fpo, Banner, VfBanner, Footer, Birdseed } from './HTMLs/Codes.js';
import { getHeroContent, getPluginContent, getBannerContent } from './Content/Contents.js';

export default function EmailCoder() {
	const fs = storage.localFileSystem;

	const { colors, selectedModules, copyValues, setCopyValues } = useAppContext();

	const params = { colors, selectedModules, copyValues, setCopyValues };

	var { header, brand, vf, skinny, hero, plugin, fpo, banner, footer, birdseed } = selectedModules
	var { subject, vf, skinny, hero, plugin, fpo, birdseed, banner } = copyValues

	const headHTML = Head({ params });
	const subjectHTML = Subject({ params });
	const { desktopFundingHTML, mobileFundingHTML } = Funding({ params });
	const headerHTML = Header({ params, desktopFundingHTML });
	const heroHTML = Hero({ params });
	const { desktopPluginHTML, mobilePluginHTML } = Plugin({ params });
	const fpoHTML = Fpo({ params });
	const bannerHTML = Banner({ params });
	const vfBannerHTML = VfBanner({ params });
	const footerHTML = Footer({ params });
	const birdseedHTML = Bir({ params });

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

		const htmlContent = `
<!DOCTYPE html
PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
		${headHTML.join('\n')}
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

	${vfBannerHTML.join('\n')}

	<!-- ### FOOTER ### -->
	${footerHTML.join('\n')}
	${birdseedHTML.join('\n')}
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
			await getHeroContent(params);
			await getPluginContent(params);
			await getBannerContent(params);
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

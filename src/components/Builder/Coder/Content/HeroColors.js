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

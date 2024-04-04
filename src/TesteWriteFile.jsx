import React from 'react';
import { storage } from './App.js';
import useAppContext from './hook/useAppContext.jsx';



export default function TesteWriteFile() {
	const fs = storage.localFileSystem;

	const { accentColor, secondaryColor, tertiaryColor, cores, slValue, sslValue, selectedHeader, selectedFunding, fundingCopyValue, selectedSkinny, skinnyTitleValue, skinnyCopyValue, selectedHero, heroCopyValues, selectedPlugin, pluginCopyValues, selectedFpoSegment, selectedFpoValue, selectedBanner, bannerCopyValues, selectedFooter, selectedBirdseed, birdseedDate, selectedBirdseedCopy, birdseedCopyValues, selectedBrand } = useAppContext();

	console.log(selectedHeader)

	// Função para exportar o HTML
	async function exportHTML() {
		// Construir o conteúdo HTML com base nas informações das camadas
		const headerHTML = [];
		// app.activeDocument.layers.forEach((layer) => {
		//     // Aqui você pode extrair informações relevantes de cada camada
		//     // layersHTML.push(`<div>${layer.name}</div>`);
		// });

		if (selectedHeader === "csb") {
			headerHTML.push(`
		<!---------------- CONSUMER DESKTOP HEADER  ### -->
	<tr>
		<td valign="top" bgcolor="#ffffff" class="noneMobile">
		<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
			<tr>
				<td valign="top" style="padding:0px;" class="m-p-15">
				<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
				<tr>
					<td class="m-pb-10" style="padding:7px;" valign="top" align="center">
						<a href=""  target="_blank">
							<img src="XXXXXX_dell-logo.png" alt="DELL" width="66" height="37" style="display:block; border:0;" />
						</a>
					</td>
					<td valign="top">
					<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td valign="middle" align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:14px; color:#444444; padding:20px 0 0 18px;">
								<a href=""  target="_blank" style="outline:none; color:#444444;  text-decoration:none;">PRODUTOS</a>&nbsp; &nbsp;
								<a href="tel:08007223428" target="_blank" style="outline:none; color:#444444; text-decoration:none;">LIGUE AGORA</a>&nbsp; &nbsp;
								<a href=""  target="_blank" style=" color:#444444;text-decoration:none;">WHATSAPP</a>
							</td>
						</tr>
					</table>
					</td>	
					
					
	<!-- ### FUNDING  ### -->	
					<td  align="right">
					<table cellpadding="0" cellspacing="0">
						<tr>
							<td align="right" style="padding-bottom:20px;">
								<img src="XXXXXX_funding.png" alt="Dell partner" style="display: block; border: 0;" /></td>
							</tr>
						<tr>
							<td valign="middle" align="right" style="font-family:Arial, Helvetica, sans-serif; font-size:10px; line-height:12px; color:#444444;">
								Otimize o espaço da tela rapidamente.
							</td>
						</tr>
						<tr>
							<td class="align-center" valign="top" align="right" style="font-family:Arial, Helvetica, sans-serif; font-size:10px; line-height:12px; color:#444444; padding-top: 10px;">
								<a href="<%@ include view='MirrorPageUrl' %>"  target="_blank" style="color:#0076ce; text-decoration:none;">
									Visualize no navegador.
								</a>
							</td>
						</tr>
					</table>
					</td> 
	<!-- ### END FUNDING  ### -->	


				</tr>
				</table>
				</td>
			</tr>
			<tr>
				<td height="15"></td>
			</tr>
		</table>
		</td>
	</tr>
	<!-- -------------- /END CONSUMER DESKTOP HEADER  ### -->	
	

	<!--[if !mso]><!-->
	<tr>
	<td class="showMobile" bgcolor="#ffffff" style="padding-bottom:10px;">
	<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
		<tr>
			<td class="m-pb-10" style="padding:0px;" valign="middle" align="center">
				<a href=""  target="_blank">
					<img src="XXXXXX_dell-logo.png" alt="DELL" width="66" height="37"  style="display:block; border:0;" />
				</a>
			</td>
			<td align="center">
			<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
				<tr>
				<td width="100%" align="right">
				<table cellpadding="0" cellspacing="0">
				<tr>
					<td align="center" style="padding:0 10px;">
					<table cellpadding="0" cellspacing="0">
						<tr>
							<td class="social-icon" align="center" style="padding-bottom:5px;">
								<a href="" target="_blank" style="outline:none;">
									<img src="images/XXXXXX_icon-nb.png" alt="PRODUTOS" width="32" height="25" style="border: 0;"/>
								</a>
							</td>
						</tr>
						<tr>
							<td class="social-icon" align="center" style="font-family: Arial, Helvetica, sans-serif; font-size:10px; line-height:14px; color:#444444;">
								<a href=""   target="_blank" style="outline:none; color:#444444; text-decoration:none;">
									PRODUTOS
								</a>
							</td>
						</tr>
					</table>
					</td>
					<td align="center" style="padding:0 10px;">
					<table cellpadding="0" cellspacing="0">
						<tr>
							<td class="social-icon" align="center" style="padding-bottom:5px;">
								<a href="tel:08007223428" target="_blank" style="outline:none;">
									<img src="images/XXXXXX_icon-call.png" alt="LIGUE" width="25" height="25" style="border: 0;"/>
								</a>
							</td>
						</tr>
						<tr>
							<td class="social-icon" align="center" style="font-family: Arial, Helvetica, sans-serif; font-size:10px; line-height:14px; color:#444444;">
								<a href="tel:08007223428"   target="_blank" style="outline:none; color:#444444; text-decoration:none;">
									LIGUE
								</a>
							</td>
						</tr>
					</table>
					</td>
					<td align="center" style="padding:0 10px;">
					<table cellpadding="0" cellspacing="0">
						<tr>
							<td class="social-icon" align="center" style="padding-bottom:5px;">
								<a href="" target="_blank" style="outline:none;">
									<img src="images/XXXXXX_icon-chat.png" alt="WHATSAPP" width="25" height="25" style="border: 0;"/>
								</a>
							</td>
						</tr>
						<tr>
							<td class="social-icon" align="center" style="font-family: Arial, Helvetica, sans-serif; font-size:10px; line-height:14px; color:#444444;">
								<a href=""   target="_blank" style="outline:none; color:#444444; text-decoration:none;">
									WHATSAPP
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
	</td>
	</tr>
		`)
		} else if (selectedHeader === "outlet") {
			headerHTML.push(`
		<!---------------- OUTLET DESKTOP HEADER  ### -->
	<tr>
		<td valign="top" bgcolor="#ffffff" class="noneMobile">
		<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
			<tr>
				<td valign="top" style="padding:0px;" class="m-p-15">
				<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
				<tr>
					<td class="m-pb-10" style="padding: 12px 0;" valign="top" align="center">
						<a href="" target="_blank">
							<img src="XXXXXX_outlet-logo.png" 
							alt="DELL OUTLET" style="display:block; border:0;" />
						</a>
					</td>
					<td valign="top">
					<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td valign="middle" align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:14px; color:#444444; padding:20px 0 0 2px;">
								<a href="" target="_blank" style="outline:none; color:#444444; text-decoration:none;">CONFIRA OS PRODUTOS</a>&nbsp; &nbsp;
							</td>
						</tr>
					</table>
					</td>	
					
					
	<!-- ### FUNDING  ### -->	
					<td  align="right">
					<table cellpadding="0" cellspacing="0">
						<tr>
							<td align="right" style="padding-bottom:20px;">
								<img src="images/XXXXXX_funding.png" alt="Dell partner" style="display: block; border: 0;" /></td>
							</tr>
						<tr>
							<td valign="middle" align="right" style="font-family:Arial, Helvetica, sans-serif; font-size:10px; line-height:12px; color:#444444;">
								Jogue a qualquer hora
							</td>
						</tr>
						<tr>
							<td class="align-center" valign="top" align="right" style="font-family:Arial, Helvetica, sans-serif; font-size:10px; line-height:12px; color:#444444; padding-top: 10px;">
								<a href="<%@ include view='MirrorPageUrl' %>"  target="_blank" style="color:#0076ce; text-decoration:none;">
									Visualize no navegador.
								</a>
							</td>
						</tr>
					</table>
					</td> 
	<!-- ### END FUNDING  ### -->	


				</tr>
				</table>
				</td>
			</tr>
			<tr>
				<td height="15"></td>
			</tr>
		</table>
		</td>
	</tr>
	<!-- -------------- /END OUTLET DESKTOP HEADER  ### -->	
	

	<!--[if !mso]><!-->
	<tr>
	<td class="showMobile" bgcolor="#ffffff" style="padding-bottom:10px;">
	<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
		<tr>
			<td class="m-pb-10" style="padding:0px;" valign="middle" align="center">
				<a href=""  target="_blank">
					<img src="XXXXXX_outlet-logo.png" alt="DELL OUTLET" style="display:block; border:0;" />
				</a>
			</td>
			<td align="center">
			<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
				<tr>
				<td width="100%" align="right">
				<table cellpadding="0" cellspacing="0">
				<tr>
					<td align="center" style="padding:0 10px;">
					<table cellpadding="0" cellspacing="0">
						<tr>
							<td class="social-icon" align="center" style="padding-bottom:5px;">
								<a href="" target="_blank" style="outline:none;">
									<img src="XXXXXX_icon-nb.png" alt="PRODUTOS" width="32" height="25" style="border: 0;"/>
								</a>
							</td>
						</tr>
						<tr>
							<td class="social-icon" align="center" style="font-family: Arial, Helvetica, sans-serif; font-size:10px; line-height:14px; color:#444444;">
								<a href="" target="_blank" style="outline:none; color:#444444; text-decoration:none;">
									PRODUTOS
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
	</td>
	</tr>
		`)
		} else if (selectedHeader === "alienware") {
			headerHTML.push(`
		<!---------------- ALIENWARE DESKTOP HEADER  ### -->
	<tr>
		<td valign="top" bgcolor="#ffffff" class="noneMobile">
		<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
			<tr>
				<td valign="top" style="padding:0px;" class="m-p-15">
				<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
				<tr>
					<td class="m-pb-10" style="padding:0px;" valign="top" align="center">
						<a href="" target="_blank">
							<img src="XXXXXX_alienware-logo.png" alt="ALIENWARE" style="display:block; border:0;" />
						</a>
					</td>
					<td valign="top">
					<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td valign="middle" align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:14px; color:#444444; padding:20px 0 0 2px;">
								<a href="" target="_blank" style="outline:none; color:#444444; text-decoration:none;">ALIENWARE</a>&nbsp; &nbsp;
								<a href="tel:08007223428" target="_blank" style="outline:none; color:#444444; text-decoration:none;">LIGUE AGORA</a>&nbsp; &nbsp;
								<a href="" target="_blank" style=" color:#444444;text-decoration:none;">WHATSAPP</a>
							</td>
						</tr>
					</table>
					</td>	
					
					
	<!-- ### FUNDING  ### -->	
					<td  align="right">
					<table cellpadding="0" cellspacing="0">
						<tr>
							<td align="right" style="padding-bottom:20px;">
								<img src="images/XXXXXX_funding.png" alt="Dell partner" style="display: block; border: 0;" /></td>
							</tr>
						<tr>
							<td valign="middle" align="right" style="font-family:Arial, Helvetica, sans-serif; font-size:10px; line-height:12px; color:#444444;">
								Jogue a qualquer hora
							</td>
						</tr>
						<tr>
							<td class="align-center" valign="top" align="right" style="font-family:Arial, Helvetica, sans-serif; font-size:10px; line-height:12px; color:#444444; padding-top: 10px;">
								<a href="<%@ include view='MirrorPageUrl' %>"  target="_blank" style="color:#0076ce; text-decoration:none;">
									Visualize no navegador.
								</a>
							</td>
						</tr>
					</table>
					</td> 
	<!-- ### END FUNDING  ### -->	


				</tr>
				</table>
				</td>
			</tr>
			<tr>
				<td height="15"></td>
			</tr>
		</table>
		</td>
	</tr>
	<!-- -------------- /END ALIENWARE DESKTOP HEADER  ### -->	
	

	<!--[if !mso]><!-->
	<tr>
	<td class="showMobile" bgcolor="#ffffff" style="padding-bottom:10px;">
	<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
		<tr>
			<td class="m-pb-10" style="padding:0px;" valign="middle" align="center">
				<a href=""  target="_blank">
					<img src="XXXXXX_alienware-logo.png" alt="DELL" style="display:block; border:0;" />
				</a>
			</td>
			<td align="center">
			<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
				<tr>
				<td width="100%" align="right">
				<table cellpadding="0" cellspacing="0">
				<tr>
					<td align="center" style="padding:0 10px;">
					<table cellpadding="0" cellspacing="0">
						<tr>
							<td class="social-icon" align="center" style="padding-bottom:5px;">
								<a href="" target="_blank" style="outline:none;">
									<img src="XXXXXX_icon-nb.png" alt="PRODUTOS" width="32" height="25" style="border: 0;"/>
								</a>
							</td>
						</tr>
						<tr>
							<td class="social-icon" align="center" style="font-family: Arial, Helvetica, sans-serif; font-size:10px; line-height:14px; color:#444444;">
								<a href="" target="_blank" style="outline:none; color:#444444; text-decoration:none;">
									ALIENWARE
								</a>
							</td>
						</tr>
					</table>
					</td>
					<td align="center" style="padding:0 10px;">
					<table cellpadding="0" cellspacing="0">
						<tr>
							<td class="social-icon" align="center" style="padding-bottom:5px;">
								<a href="tel:08007223428" target="_blank" style="outline:none;">
									<img src="XXXXXX_icon-call.png" alt="LIGUE" width="25" height="25" style="border: 0;"/>
								</a>
							</td>
						</tr>
						<tr>
							<td class="social-icon" align="center" style="font-family: Arial, Helvetica, sans-serif; font-size:10px; line-height:14px; color:#444444;">
								<a href="tel:08007223428" target="_blank" style="outline:none; color:#444444; text-decoration:none;">
									LIGUE
								</a>
							</td>
						</tr>
					</table>
					</td>
					<td align="center" style="padding:0 10px;">
					<table cellpadding="0" cellspacing="0">
						<tr>
							<td class="social-icon" align="center" style="padding-bottom:5px;">
								<a href="" target="_blank" style="outline:none;">
									<img src="XXXXXX_icon-chat.png" alt="WHATSAPP" width="25" height="25" style="border: 0;"/>
								</a>
							</td>
						</tr>
						<tr>
							<td class="social-icon" align="center" style="font-family: Arial, Helvetica, sans-serif; font-size:10px; line-height:14px; color:#444444;">
								<a href="" target="_blank" style="outline:none; color:#444444; text-decoration:none;">
									WHATSAPP
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
	</td>
	</tr>
		`)
		} else {
			headerHTML.push(`<div> Aparentemente você não selecionou um header meu big fella</div>`)
		}



		const htmlContent = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<!--[if !mso]><!-->
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<!--<![endif]-->
<title>Dell</title>
<style type="text/css">
/* Reset styles */

a, a:link, a:hover, a:visited, a:active {
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
u ~ div a, #MessageViewBody a {
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
.ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {
	line-height: 100%;
}
table, td, th {
	border-collapse: collapse;
	mso-table-lspace: 0pt;
	mso-table-rspace: 0pt;
}
body, table, td, th, p, a, li, blockquote {
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
ol, ul {
	padding-left: 2em;
}
sup {
	font-size: 0.6em;
	vertical-align: 0.5em;
	line-height: 1em;
}
body, table, td, th, p, ul, ol, li {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 13px;
	line-height: 16px;
	font-weight: 400;
}
img, a img {
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
* img[tabindex="0"] + div {
	display: none !important;
}
	
/* ------------- MOBILE START  ------------------ */	
	
@media screen and (max-width: 600px) {
u ~ div #fw-container {
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
.align-left, .align-left td {
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
	<tr>
		<td style="display: none; max-height: 0px; overflow: hidden;color:#444444;">
		${slValue}
		<!-- ### leave a space here ### --> &#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;#847;&nbsp;&#847;&nbsp;#847;	nb&#847&nbsp;	&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;nbsp;	#847;&nb&#847;&nbsp;&#847&nbsp;	&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;nbsp;&#847;	nbsp;&#847;&nb&#847;&nbsp;&#847;&nbsp&#847;&nbsp;	&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;nbsp;&#847;&nbsp;	#847;&nbsp;&#847;&nb&#847;&nbsp;&#847;&nbsp;&#847;&nbsp&#847;&nbsp;	&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;nbsp;&#847;&nbsp;&#847;	nbsp;&#847;&nbsp;&#847;&nb&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847&nbsp;&#847;&nbsp;	&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;nbsp;&#847;&nbsp;&#847;&nbsp;	#847;&nbsp;&#847;&nbsp;&#847;&nb&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847&nbsp;&#847;nbsp;	&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;&nbsp;&#847;nbsp;&#847;&nbsp;&#847;&nbsp;	
		</td>
	</tr>

	<!-- -------------- /END SSL  ### -->
	
	${headerHTML.join('\n')}

	<!-- -------------- MOBILE PLUGIN BANNER  ### -->
	<tr>
	<td  class="showMobile" bgcolor="#41b6e6" align="center">
	<table cellpadding="0" cellspacing="0"> 
		<tr>
		<td align="center" valign="top" style="padding:10px 0;">
		<table role="presentation"  border="0" cellspacing="0" cellpadding="0">
			<tr>
				<td align="center" valign="middle">
					<a href=""  target="_blank" style="outline:none; color:#ffffff; text-decoration:none;">
						<img src="images/XXXXXX_plug-img.png" alt="Dell" border="0" style="display:block; font-size:16px;" class="wrap" />
					</a>
				</td>
			</tr>
		</table>
		</td>
		</tr>
	</table>
	</td>
	</tr>
	<!-- -------------- MOBILE PLUGIN BANNER END / ### --> 
	<!--<![endif]-->
	
	
	<!-- ### HERO  ### -->
	<tr>
	<td width="600" align="center">
	<table cellpadding="0" cellspacing="0"> 
		<tr>
		<td align="center" valign="top" style="padding-top:0px;">
		<table role="presentation"  border="0" cellspacing="0" cellpadding="0">
			<tr>
				<td align="center" valign="middle">
					<a href=""  target="_blank" style="outline:none; color:#ffffff; text-decoration:none;">
						<img src="images/XXXXXX_headline.png" alt="Dell" border="0" style="display:block; font-size:16px; color:#0076ce;" class="wrap" />
					</a>
				</td>
			</tr>
		</table>
		</td>
		</tr>
		<tr>
			<td align="center" valign="top" style="padding:0">
			<table role="presentation"  border="0" cellspacing="0" cellpadding="0">
			<tr>
				<td align="center" valign="middle">
					<a href=""  target="_blank" style="outline:none; color:#ffffff; text-decoration:none;">
						<img src="images/XXXXXX_hero.png" alt="Dell" border="0" style="display:block; font-size:16px; color:#0076ce;" class="wrap" />
					</a>
				</td>
			</tr>
			</table>
			</td>
		</tr>
		<tr>
			<td align="center" valign="top" style="padding:0">
			<table role="presentation"  border="0" cellspacing="0" cellpadding="0">
			<tr>
				<td width="70" class="noneMobile">&nbsp;</td>
				<td style=" font-family: Arial, Helvetica, sans-serif; padding:30px 20px 30px 20px; font-size:20px;line-height:24px;mso-line-height-rule:exactly; text-align:center; color:#444444;">
					<a href=""   target="_blank" style="outline:none; color:#444444; text-decoration:none;">
						Com a tecnologia Dell, você pode dar vida às suas melhores ideias.
					</a>
				</td>
				<td width="70" class="noneMobile">&nbsp;</td>
			</tr>
			</table>
			</td>
		</tr>
	<!-------- Buttons ----------->
		<tr>
			<td style="padding:0px 20px 30px;" align="center" valign="middle">
			<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" class="wrap">
			<tr>
				<th valign="top" style="box-sizing:border-box; padding:0 5px;" class="stack m-px-reset m-pb-10">
				<table role="presentation" width="180" align="center" border="0" cellpadding="0" cellspacing="0" style="width:180px;" class="wrap">
				<tr>
					<td valign="middle" align="center" style="font-family:Arial, Helvetica, sans-serif; font-size:16px; mso-line-height-rule:exactly; line-height:22px; font-weight:700; color:#444444; letter-spacing:0.03em;" class="hero-cta-button">
						<a href="" target="_blank" style="color:#444444; border:2px solid #444444; text-decoration:none; padding:15px 20px; display:block;">
							Compre agora
						</a>
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
	<!-- ### END HERO  ### -->


	<!-- ### MOBILE FUNDING  ### -->	
	<!--[if !mso]><!-->
	<tr>
	<td class="showMobile" align="center">
	<table cellpadding="0" cellspacing="0">
		<tr>
			<td style="padding: 20px;" align="center">
				<img src="images/XXXXXX_funding.png" alt="Dell partner" style="display: block; border: 0;" />
			</td>
		</tr>
		<tr>
			<td valign="middle" align="center" style="font-family:Arial, Helvetica, sans-serif; font-size:10px; line-height:14px; color:#444444;padding-bottom:10px;">
				Otimize o espaço da tela rapidamente.
			</td>
		</tr>
	</table>
	</td>
	</tr>	
	<!--<![endif]-->
	<!-- ### END MOBILE FUNDING  ### -->


	<tr>
		<td height="10"></td>
	</tr>	


	<!---------------- SUPERCHARGER BANNER  ### -->
	<tr>
	<td class="noneMobile" bgcolor="#41b6e6" align="center">
	<table cellpadding="0" cellspacing="0"> 
		<tr>
		<td align="center" valign="top" style="padding:10px 0;">
		<table role="presentation"  border="0" cellspacing="0" cellpadding="0">
			<tr>
				<td align="center" valign="middle">
					<a href=""  target="_blank" style="outline:none; color:#ffffff; text-decoration:none;">
						<img src="images/XXXXXX_plug-img.png" alt="Dell" border="0" style="display:block; font-size:16px; color:#0076ce;" class="wrap" />
					</a>
				</td>
			</tr>
		</table>
		</td>
		</tr>
	</table>
	</td>
	</tr>
	<!---------------- SUPERCHARGER BANNER END / ### -->


	<!---------------- PLUGIN BANNER  ### -->
	<tr>
	<td bgcolor="#444444" align="center" valign="top" style="padding:0">
	<table role="presentation"  border="0" cellspacing="0" cellpadding="0">
		<tr>
			<td width="40" class="noneMobile">&nbsp;</td>
			<td bgcolor="#444444" align="center" style=" font-family: Arial, Helvetica, sans-serif;font-size:15px; line-height:20px;  color:#ffffff; padding:10px 20px;">
				<a href=""  target="_blank" style="outline:none; color:#ffffff; text-decoration:none;">
					DESCUBRA O PODER DO PREMIUM COM NOSSA MAIS RECENTE TECNOLOGIA DE ALTA PERFORMANCE&nbsp;›
				</a>
			</td>
			<td width="40" class="noneMobile">&nbsp;</td>
		</tr>
	</table>
	</td>
	</tr>
	<!---------------- PLUGIN BANNER END / ### --> 
	

	<!-- ### 1UP MODULE ### -->
	<tr>
	<td align="center" valign="top" style="padding:20px 20px 0 20px;" class="m-px-20">
	<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">

	<!-- ### PRODUCT LEFT START ### -->
		<tr>
		<td align="center" style="padding:10px 0;">
		<table width="100%" role="presentation" border="0" cellspacing="0" cellpadding="0">
			<tr>
				<th align="left" valign="top" class="stack">
				<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td align="center" valign="middle" style="padding:0 20px 0 0px;" class="product-padding">
							<a href=""  target="_blank">
								<img src="images/XXXXXX_img1.png" alt="Vostro 14 5000 Laptop" border="0" style="display:block; font-size:16px; color:#0076ce;" />
							</a>
						</td>
					</tr>
				</table>
				</th>
				<th align="center" valign="top" class="stack" style="padding-right:0px;">
				<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
					<td align="left" style="font-family:Arial, Helvetica, sans-serif;" class="align-center">
					<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td height="10" class="noneMobile">&nbsp;</td>
						</tr>
						<tr>
							<td valign="middle" style="font-family: Arial, Helvetica, sans-serif;color:#444444;font-size:12px;padding-bottom:2px;" class="align-center">
								<a href=""   target="_blank" style="outline:none; color:#444444; text-decoration:none;">
									<strong>DESCONTO DE R$ XXX</strong>
								</a>
							</td>
						</tr>
						<tr>
							<td valign="top" style="font-family: Arial, Helvetica, sans-serif;color:#444444;font-size:13px;padding-bottom:5px;" class="align-center">
								<a href=""   target="_blank" style="outline:none; color:#444444; text-decoration:none;">
									<strong>Novo Latitude 14 3000</strong>
								</a>
							</td>
						</tr>
						<tr>
							<td style="font-family: Arial, Helvetica, sans-serif; font-size:11px;line-height:14px; color:#444444;padding-bottom:5px;" class="align-center">
								De R$ XXX<br />
								Por <strong style="font-size: 20px; line-height: 22px;">R$ XXX</strong> à vista<br />
								em até 12x de R$ XXX sem juros
							</td>
						</tr>
						<tr>
							<td style="font-family: Arial, Helvetica, sans-serif; font-size:11px;line-height:14px; color:#444444;" class="align-center">
								<a href=""   target="_blank" style="outline:none; color:#444444; text-decoration:none;">
									8ª geração do processador Intel<sup style="line-height: 1; font-size: 75%; vertical-align: top; mso-text-raise:30%;">&reg;</sup> Core™ i5, Windows 10 Pro, 4GB de memória, HD de 500GB, 1 ano de assistência no local e teclado retroiluminado.
								</a>
							</td>
						</tr>
						<tr>
							<td height="10"></td>
						</tr>
						<tr>
							<td style="font-family: Arial, Helvetica, sans-serif;font-size:10px;color:#444444;" class="align-center">
								Frete grátis para todo o Brasil.
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
										Compre agora
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
				</th>
			</tr>
		</table>
		</td>
		</tr>
	<!-- ### PRODUCT LEFT END ### -->
	<!-- ### PRODUCT RIGHT START ### -->
		<tr>
		<td align="center" style="padding:10px 0;">
		<table dir="rtl" width="100%" role="presentation" border="0" cellspacing="0" cellpadding="0">
			<tr>
				<th align="left" valign="top" class="stack">
				<table width="100%" role="presentation" border="0" cellspacing="0" cellpadding="0">
				<tr>
					<td align="center" valign="middle" style="padding:0 0 0 20px;" class="product-padding">
						<a href=""  target="_blank">
							<img src="images/XXXXXX_img2.png" alt="XPS 13 Laptop" border="0" style="display:block; font-size:16px; color:#00447c;">
						</a>
					</td>
				</tr>
				</table>
				</th>
				<th align="center" valign="top" class="stack">
				<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td align="left" style="font-family:Arial, Helvetica, sans-serif;" class="align-center">
						<table dir="ltr" role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
							<tr>
								<td height="10" class="noneMobile">&nbsp;</td>
							</tr>
							<tr>
								<td valign="middle" style="font-family: Arial, Helvetica, sans-serif;color:#444444;font-size:12px;padding-bottom:2px;" class="align-center">
									<a href=""   target="_blank" style="outline:none; color:#444444; text-decoration:none;">
										<strong>DESCONTO DE R$ XXX</strong>
									</a>
								</td>
							</tr>
							<tr>
								<td valign="top" style="font-family: Arial, Helvetica, sans-serif;color:#444444;font-size:13px;padding-bottom:5px;" class="align-center">
									<a href=""   target="_blank" style="outline:none; color:#444444; text-decoration:none;">
										<strong>Novo Latitude 14 3000</strong>
									</a>
								</td>
							</tr>
							<tr>
								<td style="font-family: Arial, Helvetica, sans-serif; font-size:11px;line-height:14px; color:#444444;padding-bottom:5px;" class="align-center">
									De R$ XXX<br />
									Por <strong style="font-size: 20px; line-height: 22px;">R$ XXX</strong> à vista<br />
									em até 12x de R$ XXX sem juros
								</td>
							</tr>
							<tr>
								<td style="font-family: Arial, Helvetica, sans-serif; font-size:11px;line-height:14px; color:#444444;" class="align-center">
									<a href=""   target="_blank" style="outline:none; color:#444444; text-decoration:none;">
										8ª geração do processador Intel<sup style="line-height: 1; font-size: 75%; vertical-align: top; mso-text-raise:30%;">&reg;</sup> Core™ i5, Windows 10 Pro, 4GB de memória, HD de 500GB, 1 ano de assistência no local e teclado retroiluminado.
									</a>
								</td>
							</tr>
							<tr>
								<td height="10"></td>
							</tr>
							<tr>
								<td style="font-family: Arial, Helvetica, sans-serif;font-size:10px;color:#444444;" class="align-center">
									Frete grátis para todo o Brasil.
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
											Compre agora
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
				</th>
			</tr>
		</table>
		</td>
		</tr>
	<!-- ### PRODUCT RIGHT END ### -->
	</table>
	</td>
    </tr>
	<!-- ### 1UP MODULE END / ### --> 


	<!-- ###-------------- 2UP ### -->
	<tr>
	<td align="center">
	<table cellpadding="0" cellspacing="0">
		<tr>
			<td width="10" class="noneMobile">&nbsp;</td>
	<!-- ### PRODUCT 1 ### -->
			<th align="left" valign="top" class="stack">
			<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
				<tr>
					<td style="padding: 20px 10px;" class="m-px-20" align="center" valign="top">
					<table cellpadding="0" cellspacing="0">
						<tr>
							<td align="center" style="padding-bottom:10px">
								<a href="" target="_blank" style="outline:none;">
									<img src="images/XXXXXX_2up-img1.png" alt="Novo Latitude 14 3000" class="product-img-2up" style="border: 0;"/>
								</a>
							</td>
						</tr>
						<tr>
							<td valign="middle" style="font-family: Arial, Helvetica, sans-serif;color:#444444;font-size:12px;padding-bottom:2px;" class="align-center">
								<a href=""   target="_blank" style="outline:none; color:#444444; text-decoration:none;">
									<strong>DESCONTO DE R$ XXX</strong>
								</a>
							</td>
						</tr>
						<tr>
						<td valign="top" height="90">
						<table class="product-specs" width="100%" cellpadding="0" cellspacing="0" border="0" align="left" style="font-family: Arial, Helvetica, sans-serif; font-size:11px;line-height:14px; color:#444444;">
							<tr>
								<td valign="top" style="font-family: Arial, Helvetica, sans-serif;color:#444444;font-size:13px;padding-bottom:5px;" class="align-center">
									<a href=""   target="_blank" style="outline:none; color:#444444; text-decoration:none;">
										<strong>Novo Latitude 14 3000</strong>
									</a>
								</td>
							</tr>
							<tr>
								<td style="font-family: Arial, Helvetica, sans-serif; font-size:11px;line-height:14px; color:#444444;" class="align-center">
									<a href=""   target="_blank" style="outline:none; color:#444444; text-decoration:none;">
										8ª geração do processador Intel<sup style="line-height: 1; font-size: 75%; vertical-align: top; mso-text-raise:30%;">&reg;</sup> Core™ i5, Windows 10 Pro, 4GB de memória, HD de 500GB, 1 ano de assistência no local e teclado retroiluminado.
									</a>
								</td>
							</tr>
						</table>
						</td>
						</tr>
						<tr>
							<td height="10"></td>
						</tr>
						<tr>
							<td style="font-family: Arial, Helvetica, sans-serif;font-size:10px;color:#444444;" class="align-center">
								Frete grátis para todo o Brasil.
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
										Compre agora
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
			</th>
	<!-- ### PRODUCT 1 END / ### -->
	<!-- ### PRODUCT 2 / ### -->
			<th align="left" valign="top" class="stack">
			<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
				<tr>
					<td class="m-px-20" style="padding: 20px 10px;" align="center" valign="top">
					<table cellpadding="0" cellspacing="0">
						<tr>
							<td align="center" style="padding-bottom:10px">
								<a href="" target="_blank" style="outline:none;">
									<img src="images/XXXXXX_2up-img2.png" alt="Latitude 5400" class="product-img-2up" style="border: 0;"/>
								</a>
							</td>
						</tr>
						<tr>
							<td valign="middle" style="font-family: Arial, Helvetica, sans-serif;color:#444444;font-size:12px;padding-bottom:2px;" class="align-center">
								<a href=""   target="_blank" style="outline:none; color:#444444; text-decoration:none;">
									<strong>DESCONTO DE R$ XXX</strong>
								</a>
							</td>
						</tr>
						<tr>
						<td valign="top" height="90">
						<table class="product-specs" width="100%" cellpadding="0" cellspacing="0" border="0" align="left" style="font-family: Arial, Helvetica, sans-serif; font-size:11px;line-height:14px; color:#444444;">
							<tr>
								<td valign="top" style="font-family: Arial, Helvetica, sans-serif;color:#444444;font-size:13px;padding-bottom:5px;" class="align-center">
									<a href=""   target="_blank" style="outline:none; color:#444444; text-decoration:none;">
										<strong>Novo Latitude 14 3000</strong>
									</a>
								</td>
							</tr>
							<tr>
								<td style="font-family: Arial, Helvetica, sans-serif; font-size:11px;line-height:14px; color:#444444;" class="align-center">
									<a href=""   target="_blank" style="outline:none; color:#444444; text-decoration:none;">
										8ª geração do processador Intel<sup style="line-height: 1; font-size: 75%; vertical-align: top; mso-text-raise:30%;">&reg;</sup> Core™ i5, Windows 10 Pro, 4GB de memória, HD de 500GB, 1 ano de assistência no local e teclado retroiluminado.
									</a>
								</td>
							</tr>
						</table>
						</td>
						</tr>
						<tr>
							<td height="10"></td>
						</tr>
						<tr>
							<td style="font-family: Arial, Helvetica, sans-serif;font-size:10px;color:#444444;" class="align-center">
								Frete grátis para todo o Brasil.
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
										Compre agora
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
			</th>
	<!-- ### PRODUCT 2 END / ### -->		
		</tr>
	</table>
	</td> 
    </tr>
	<!-- ###-------/END 2UP ### --> 


	<!-- ###-------------- 3UP ### --> 
	<tr>
	<td align="center">
	<table cellpadding="0" cellspacing="0">
		<tr>
			<td width="10" class="noneMobile">&nbsp;</td>
	<!-- ### PRODUCT 1  ### --> 
			<th align="left" valign="top" class="stack">
			<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
				<tr>
					<td style="padding: 20px 5px 20px 10px;" class="m-px-20" align="center" valign="top">
					<table cellpadding="0" cellspacing="0">
						<tr>
							<td align="center" style="padding-bottom:10px">
								<a href="" target="_blank" style="outline:none;">
									<img src="images/XXXXXX_3up-img1.png" alt="Novo Latitude 14 3000" class="product-img-2up" style="border: 0;"/>
								</a>
							</td>
						</tr>
						<tr>
							<td valign="middle" style="font-family: Arial, Helvetica, sans-serif;color:#444444;font-size:12px;padding-bottom:2px;" class="align-center">
								<a href=""   target="_blank" style="outline:none; color:#444444; text-decoration:none;">
									<strong>DESCONTO DE R$ XXX</strong>
								</a>
							</td>
						</tr>
						<tr>
						<td valign="top" height="110">
						<table class="product-specs" width="100%" cellpadding="0" cellspacing="0" border="0" align="left" style="font-family: Arial, Helvetica, sans-serif; font-size:11px;line-height:14px; color:#444444;">
							<tr>
								<td valign="top" style="font-family: Arial, Helvetica, sans-serif;color:#444444;font-size:13px;padding-bottom:5px;" class="align-center">
									<a href=""   target="_blank" style="outline:none; color:#444444; text-decoration:none;">
										<strong>Novo Latitude 14 3000</strong>
									</a>
								</td>
							</tr>
							<tr>
								<td style="font-family: Arial, Helvetica, sans-serif; font-size:11px;line-height:14px; color:#444444;" class="align-center">
									<a href=""   target="_blank" style="outline:none; color:#444444; text-decoration:none;">
										8ª geração do processador Intel<sup style="line-height: 1; font-size: 75%; vertical-align: top; mso-text-raise:30%;">&reg;</sup> Core™ i5, Windows 10 Pro, 4GB de memória, HD de 500GB, 1 ano de assistência no local e teclado retroiluminado.
									</a>
								</td>
							</tr>
						</table>
						</td>
						</tr>
						<tr>
							<td height="10"></td>
						</tr>
						<tr>
							<td style="font-family: Arial, Helvetica, sans-serif;font-size:10px;color:#444444;" class="align-center">
								Frete grátis para todo o Brasil.
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
										Compre agora
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
			</th>
	<!-- ### PRODUCT 1 END / ### -->			
	<!-- ### PRODUCT 2 ### -->	
			<th align="left" valign="top" class="stack">
			<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
				<tr>
					<td class="m-px-20" style="padding: 20px 5px;" align="center" valign="top">
					<table cellpadding="0" cellspacing="0">
						<tr>
							<td align="center" style="padding-bottom:10px">
								<a href="" target="_blank" style="outline:none;">
									<img src="images/XXXXXX_3up-img2.png" alt="Latitude 5400" class="product-img-2up" style="border: 0;"/>
								</a>
							</td>
						</tr>
						<tr>
							<td valign="middle" style="font-family: Arial, Helvetica, sans-serif;color:#444444;font-size:12px;padding-bottom:2px;" class="align-center">
								<a href=""   target="_blank" style="outline:none; color:#444444; text-decoration:none;">
									<strong>DESCONTO DE R$ XXX</strong>
								</a>
							</td>
						</tr>
						<tr>
						<td valign="top" height="110">
						<table class="product-specs" width="100%" cellpadding="0" cellspacing="0" border="0" align="left" style="font-family: Arial, Helvetica, sans-serif; font-size:11px;line-height:14px; color:#444444;">
							<tr>
								<td valign="top" style="font-family: Arial, Helvetica, sans-serif;color:#444444;font-size:13px;padding-bottom:5px;" class="align-center">
									<a href=""   target="_blank" style="outline:none; color:#444444; text-decoration:none;">
										<strong>Novo Latitude 14 3000</strong>
									</a>
								</td>
							</tr>
							<tr>
								<td style="font-family: Arial, Helvetica, sans-serif; font-size:11px;line-height:14px; color:#444444;" class="align-center">
									<a href=""   target="_blank" style="outline:none; color:#444444; text-decoration:none;">
										8ª geração do processador Intel<sup style="line-height: 1; font-size: 75%; vertical-align: top; mso-text-raise:30%;">&reg;</sup> Core™ i5, Windows 10 Pro, 4GB de memória, HD de 500GB, 1 ano de assistência no local e teclado retroiluminado.
									</a>
								</td>
							</tr>
						</table>
						</td>
						</tr>
						<tr>
							<td height="10"></td>
						</tr>
						<tr>
							<td style="font-family: Arial, Helvetica, sans-serif;font-size:10px;color:#444444;" class="align-center">
								Frete grátis para todo o Brasil.
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
										Compre agora
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
			</th>
	<!-- ### PRODUCT 2 END / ### -->
	<!-- ### PRODUCT 3 ### -->	
			<th align="left" valign="top" class="stack">
			<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
				<tr>
					<td style="padding: 20px 5px;" class="m-px-20" align="center" valign="top">
					<table cellpadding="0" cellspacing="0">
						<tr>
							<td align="center" style="padding-bottom:10px">
								<a href="" target="_blank" style="outline:none;">
									<img src="images/XXXXXX_3up-img3.png" alt="Novo Latitude 14 3000" class="product-img-2up" style="border: 0;"/>
								</a>
							</td>
						</tr>
						<tr>
							<td valign="middle" style="font-family: Arial, Helvetica, sans-serif;color:#444444;font-size:12px;padding-bottom:2px;" class="align-center">
								<a href=""   target="_blank" style="outline:none; color:#444444; text-decoration:none;">
									<strong>DESCONTO DE R$ XXX</strong>
								</a>|
							</td>
						</tr>
						<tr>
						<td valign="top" height="110">
						<table class="product-specs" width="100%" cellpadding="0" cellspacing="0" border="0" align="left" style="font-family: Arial, Helvetica, sans-serif; font-size:11px;line-height:14px; color:#444444;">
							<tr>
								<td valign="top" style="font-family: Arial, Helvetica, sans-serif;color:#444444;font-size:13px;padding-bottom:5px;" class="align-center">
									<a href=""   target="_blank" style="outline:none; color:#444444; text-decoration:none;">
										<strong>Novo Latitude 14 3000</strong>
									</a>
								</td>
							</tr>
							<tr>
								<td style="font-family: Arial, Helvetica, sans-serif; font-size:11px;line-height:14px; color:#444444;" class="align-center">
									<a href=""   target="_blank" style="outline:none; color:#444444; text-decoration:none;">
										8ª geração do processador Intel<sup style="line-height: 1; font-size: 75%; vertical-align: top; mso-text-raise:30%;">&reg;</sup> Core™ i5, Windows 10 Pro, 4GB de memória, HD de 500GB, 1 ano de assistência no local e teclado retroiluminado.
									</a>
								</td>
							</tr>
						</table>
						</td>
						</tr>
						<tr>
							<td height="10"></td>
						</tr>
						<tr>
							<td style="font-family: Arial, Helvetica, sans-serif;font-size:10px;color:#444444;" class="align-center">
								Frete grátis para todo o Brasil.
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
										Compre agora
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
			</th>
	<!-- ### PRODUCT 3 END / ### -->
			</tr>
		</table>
		</td>
    </tr>
	<!-- ###-------/END 3UP ### -->


	<tr>
		<td height="10"></td>
	</tr>


	<!-- ### BANNER WITH IMAGE LEFT CENTERED  **** DELETE BORDER IF NOT NECESSARY *** ### -->
	<tr>
	<td align="center" valign="top" style="border:1px solid #c8c9c7;">
	<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
		<tr>
			<td align="center" style="padding:0px;">
			<table width="100%" role="presentation" border="0" cellspacing="0" cellpadding="0">
			<tr>
				<th align="left" valign="top" class="stack">
				<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td align="center" valign="middle" class="product-padding-b15">
							<a href=""  target="_blank">
								<img src="images/XXXXXX_banner-img.jpg" alt="Dell" border="0" style="display:block;" />
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
									<td align="center" valign="middle">
										<a href=""  target="_blank">
											<img src="images/XXXXXX_banner-head.png" alt="Dell" border="0" style="display:block;" />
										</a>
									</td>
								</tr>
								<tr>
									<td align="center" style="font-family: Arial, Helvetica, sans-serif; font-size:11px;line-height:14px; color:#444444;" class="align-center">
										<a href=""   target="_blank" style="outline:none; color:#444444; text-decoration:none;">
											Sua empresa mais segura e operando com performance máxima com o serviço ProSupport Plus. Além de antecipar potenciais falhas com a ferramenta SupportAssist, protege suas máquinas contra danos acidentais e permite o acesso rápido aos mais experientes engenheiros de suporte, 24h por dia.
										</a>
									</td>
								</tr>
								<tr>
									<td height="10"></td>
								</tr>
								<tr>
									<td class="align-center m-px-5 m-pt-15" valign="top">
									<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" class="wrap">
										<tr>
											<td valign="middle" align="center" style="font-family:Arial, Helvetica, sans-serif; font-size:14px; mso-line-height-rule:exactly; line-height:16px; font-weight:700; color:#444444; letter-spacing:0.03em;" class="cta-button">
												<a href="" target="_blank" style="color:#444444; border:2px solid #444444; text-decoration:none; padding:10px 10px; display:block;">
													Compre agora
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
	<!-- ### /END BANNER WITH IMAGE LEFT / ### -->	
	
	
	<!-- ### BANNER WITH IMAGE RIGHT  **** DELETE BORDER IF NOT NECESSARY *** ### -->
	<tr>
	<td align="center" valign="top" style="border:1px solid #c8c9c7;">
	<table dir="rtl" role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
		<tr>
			<td align="center" style="padding:0px;">
			<table width="100%" role="presentation" border="0" cellspacing="0" cellpadding="0">
			<tr>
				<th align="left" valign="top" class="stack">
				<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td align="center" valign="middle" class="product-padding-b15">
							<a href=""  target="_blank">
								<img src="images/XXXXXX_banner-img.jpg" alt="Dell" border="0" style="display:block;" />
							</a>
						</td>
					</tr>
				</table>
                </th>
                <th align="center" valign="top" class="stack" style="padding:0 0px;">
				<table dir="ltr" role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
					<td style="padding:0px 20px;" class="m-pb-20">
					<table>
						<tr>
						<td align="left" style="font-family:Arial, Helvetica, sans-serif;">
						<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
							<tr>
								<td height="20" class="noneMobile">&nbsp;</td>
							</tr>
							<tr>
								<td align="center" valign="middle" >
									<a href=""  target="_blank">
										<img src="images/XXXXXX_banner-head.png" alt="Dell" border="0" style="display:block;" />
									</a>
								</td>
							</tr>
							<tr>
								<td align="center" style="font-family: Arial, Helvetica, sans-serif; font-size:11px;line-height:14px; color:#444444;">
									<a href=""   target="_blank" style="outline:none; color:#444444; text-decoration:none;">
										Sua empresa mais segura e operando com performance máxima com o serviço ProSupport Plus. Além de antecipar potenciais falhas com a ferramenta SupportAssist, protege suas máquinas contra danos acidentais e permite o acesso rápido aos mais experientes engenheiros de suporte, 24h por dia.
									</a>
								</td>
							</tr>
							<tr>
								<td height="10"></td>
							</tr>
							<tr>
								<td class="align-center m-px-5 m-pt-15" valign="top">
								<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" class="wrap">
									<tr>
										<td valign="middle" align="center" style="font-family:Arial, Helvetica, sans-serif; font-size:14px; mso-line-height-rule:exactly; line-height:16px; font-weight:700; color:#444444; letter-spacing:0.03em;" class="cta-button">
											<a href="" target="_blank" style="color:#444444; border:2px solid #444444; text-decoration:none; padding:10px 10px; display:block;">
												Compre agora
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
	<!-- ### /END BANNER WITH IMAGE RIGHT / ### --> 


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
				// const imagesFolder = await folder.createFolder("images", { overwrite: true });

				// Copiar a imagem do diretório do plugin para a nova pasta "images" com novo nome
				const pluginDir = await fs.getPluginFolder();

				let logoHeader;
				let iconCall;
				let iconChat;
				let iconNb;

				if (selectedHeader === "csb") {
					logoHeader = await pluginDir.getEntry('assets/html-images/XXXXXX_dell-logo.png');
					iconCall = await pluginDir.getEntry('assets/html-images/XXXXXX_icon-call.png');
					iconChat = await pluginDir.getEntry('assets/html-images/XXXXXX_icon-chat.png');
					iconNb = await pluginDir.getEntry('assets/html-images/XXXXXX_icon-nb.png');
				} else if (selectedHeader === "outlet") {
					logoHeader = await pluginDir.getEntry('assets/html-images/XXXXXX_outlet-logo.png');
					iconCall = await pluginDir.getEntry('assets/html-images/XXXXXX_icon-call.png');
					iconChat = await pluginDir.getEntry('assets/html-images/XXXXXX_icon-chat.png');
					iconNb = await pluginDir.getEntry('assets/html-images/XXXXXX_icon-nb.png');
				} else if (selectedHeader === "alienware") {
					logoHeader = await pluginDir.getEntry('assets/html-images/XXXXXX_alienware-logo.png');
					iconCall = await pluginDir.getEntry('assets/html-images/XXXXXX_icon-call.png');
					iconChat = await pluginDir.getEntry('assets/html-images/XXXXXX_icon-chat.png');
					iconNb = await pluginDir.getEntry('assets/html-images/XXXXXX_icon-nb.png');
				}
				try {
					if (logoHeader) {
						const copyLogoHeader = await logoHeader.copyTo(folder, { overwrite: true });
						console.log('Logo do header copiado com sucesso!');
					} else {
						console.log('Erro ao encontrar o logo do header no diretório do plugin.');
					}
				} catch (error) {
					console.error('Erro ao copiar o logo do Header:', error);
				}

				try {
					if (iconCall) {
						const copyIconCall = await iconCall.copyTo(folder, { overwrite: true });
						console.log('Ícone de call copiado com sucesso!');
					} else {
						console.log('Erro ao encontrar o ícone de call no diretório do plugin.');
					}
				} catch (error) {
					console.error('Erro ao copiar o ícone de call:', error);
				}

				try {
					if (iconChat) {
						const copyIconChat = await iconChat.copyTo(folder, { overwrite: true });
						console.log('Ícone de chat copiado com sucesso!');
					} else {
						console.log('Erro ao encontrar o ícone de chat no diretório do plugin.');
					}
				} catch (error) {
					console.error('Erro ao copiar o ícone de chat:', error);
				}

				try {
					if (iconNb) {
						const copyIconNb = await iconNb.copyTo(folder, { overwrite: true });
						console.log('Ícone do notebook copiado com sucesso!');
					} else {
						console.log('Erro ao encontrar o ícone do notebook no diretório do plugin.');
					}
				} catch (error) {
					console.error('Erro ao copiar o ícone do notebook:', error);
				}
			} else {
				console.log('Operação cancelada pelo usuário.');
			}
		} catch (error) {
			console.error('Erro ao exportar HTML:', error);
		}
	}

	return (
		<button onClick={exportHTML}>Exportar HTML</button>
	);
}

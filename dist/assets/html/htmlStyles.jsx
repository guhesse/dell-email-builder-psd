export const htmlStyles = () => {
	`
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
`
}
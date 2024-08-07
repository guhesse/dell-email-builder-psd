import react from "react";
import { Head, Header, Funding, Hero, Plugin, Subject, Fpo, Banner, VfBanner, Footer, Birdseed } from './Codes.js';
import useAppContext from "../../../../hook/useAppContext.jsx";

const EmailHTML = ({}) => {
    const { colors, selectedModules, copyValues, setCopyValues } = useAppContext();
    const params = { colors, selectedModules, copyValues, setCopyValues };

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
	const birdseedHTML = Birdseed({ params });


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
`;

    return htmlContent;

}


export default EmailHTML;
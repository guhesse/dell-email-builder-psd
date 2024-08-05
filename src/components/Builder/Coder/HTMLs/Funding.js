const Funding = ({ params }) => {

    const { selectedModules, copyValues } = params;
    const vf = selectedModules.vf;
    const vfCopy = copyValues.vf.copy;

    let desktopFundingHTML = [];
    let mobileFundingHTML = [];

    if (vf === "win11") {
        desktopFundingHTML.push(`
<!-- ### FUNDING  ### -->	
            <td  align="right">
            <table cellpadding="0" cellspacing="0">
                <tr>
                    <td align="right" style="padding-bottom:15px;">
                        <img src="images/XXXXXX_win11.png" alt="Dell partner" style="display: block; border: 0;" /></td>
                    </tr>
                <tr>
                    <td valign="middle" align="right" style="font-family:Arial, Helvetica, sans-serif; font-size:10px; line-height:12px; color:#444444;">
                        ${vfCopy}
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
    `) && mobileFundingHTML.push(`
        <!-- ### MOBILE FUNDING  ### -->	
	<!--[if !mso]><!-->
	<tr>
	<td class="showMobile" align="center">
	<table cellpadding="0" cellspacing="0">
		<tr>
			<td style="padding: 20px;" align="center">
				<img src="images/XXXXXX_win11.png" alt="Dell partner" style="display: block; border: 0;" />
			</td>
		</tr>
		<tr>
			<td valign="middle" align="center" style="font-family:Arial, Helvetica, sans-serif; font-size:10px; line-height:14px; color:#444444;padding-bottom:10px;">
				${vfCopy}
			</td>
		</tr>
	</table>
	</td>
	</tr>	
	<!--<![endif]-->
	<!-- ### END MOBILE FUNDING  ### -->
    `)
    } else if (vf === "" || vf === null) {
        desktopFundingHTML.push(`
<!-- ### FUNDING  ### -->	
    <td align="right">
    <table cellpadding="0" cellspacing="0">
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
`) && mobileFundingHTML.push(``)
    }


    return { desktopFundingHTML, mobileFundingHTML };
}

export default Funding;
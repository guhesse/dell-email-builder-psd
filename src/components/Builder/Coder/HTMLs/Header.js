const Header = ({ selectedModules, desktopFundingHTML }) => {

    const header = selectedModules.header

    let headerHTML = [];

    if (header === "csb") {
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
                    <img src="images/XXXXXX_dell-logo.png" alt="DELL" width="66" height="37" style="display:block; border:0;" />
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
            ${desktopFundingHTML.join('\n')}
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
            <img src="images/XXXXXX_dell-logo.png" alt="DELL" width="66" height="37"  style="display:block; border:0;" />
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
                        <a href="" target="_blank" style="outline:none; color:#444444; text-decoration:none;">
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
    } else if (header === "outlet") {
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
                    <img src="images/XXXXXX_outlet-logo.png" 
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
        ${desktopFundingHTML.join('\n')}
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
            <img src="images/XXXXXX_outlet-logo.png" alt="DELL OUTLET" style="display:block; border:0;" />
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
    } else if (header === "alienware") {
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
                    <img src="images/XXXXXX_alienware-logo.png" alt="ALIENWARE" style="display:block; border:0;" />
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
            ${desktopFundingHTML.join('\n')}
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
            <img src="images/XXXXXX_alienware-logo.png" alt="DELL" style="display:block; border:0;" />
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
                            <img src="images/XXXXXX_icon-call.png" alt="LIGUE" width="25" height="25" style="border: 0;"/>
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
                            <img src="images/XXXXXX_icon-chat.png" alt="WHATSAPP" width="25" height="25" style="border: 0;"/>
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
    } else if (header === "sb-rd") {
        headerHTML.push(`
<!---------------- SB RD DESKTOP HEADER  ### -->
<tr>
<td valign="top" bgcolor="#ffffff" class="noneMobile">
<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
        <td valign="top" style="padding:0px;" class="m-p-15">
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
            <td class="m-pb-10" style="padding: 10px 0;" valign="top" align="center">
                <a href="" target="_blank">
                    <img src="images/XXXXXX_dell-logo.png" width="66" height="37" 
                    alt="DELL" style="display:block; border:0;" />
                </a>
            </td>
            <td valign="top">
            <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td valign="middle" align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:14px; color:#444444; padding:20px 0 0 2px;">
                        <a href="" target="_blank" style="outline:none; color:#444444; text-decoration:none;">FALE COM O SEU CONSULTOR</a>&nbsp; &nbsp;
                    </td>
                </tr>
            </table>
            </td>	
        ${desktopFundingHTML.join('\n')}
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
<!-- -------------- /END SB RD DESKTOP HEADER  ### -->	


<!--[if !mso]><!-->
<tr>
<td class="showMobile" bgcolor="#ffffff" style="padding-bottom:10px;">
<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
<tr>
    <td class="m-pb-10" style="padding: 10px 0;" valign="middle" align="center">
        <a href=""  target="_blank">
            <img src="images/XXXXXX_dell-logo.png" width="66" height="37" alt="DELL" style="display:block; border:0;" />
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
                            <img src="images/XXXXXX_icon-rd-chat.png" alt="FALE COM SEU CONSULTOR" width="32" height="25" style="border: 0;"/>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td class="social-icon" align="center" style="font-family: Arial, Helvetica, sans-serif; font-size:10px; line-height:14px; color:#444444;">
                        <a href="" target="_blank" style="outline:none; color:#444444; text-decoration:none;">
                            FALE COM SEU CONSULTOR
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
    } else if (header === "sb-gdo-dexn") {
        headerHTML.push(`
<!---------------- SB DEXN DESKTOP HEADER  ### -->
<tr>
<td valign="top" bgcolor="#ffffff" class="noneMobile">
<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
        <td valign="top" style="padding: 10px 0;" class="m-p-15">
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
            <td class="m-pb-10" style="padding: 10px 0;" valign="top" align="center">
                <a href="" target="_blank">
                    <img src="images/XXXXXX_dell-logo.png" width="66" height="37" 
                    alt="DELL" style="display:block; border:0;" />
                </a>
            </td>
            <td valign="top">
            <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td valign="middle" align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:14px; color:#444444; padding:20px 0 0 2px;">
                        <a href="" target="_blank" style="outline:none; color:#444444; text-decoration:none;">FALE COM O SEU GERENTE</a>&nbsp; &nbsp;
                    </td>
                </tr>
            </table>
            </td>	
        ${desktopFundingHTML.join('\n')}
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
<!-- -------------- /END SB DEXN DESKTOP HEADER ### -->	


<!--[if !mso]><!-->
<tr>
<td class="showMobile" bgcolor="#ffffff" style="padding-bottom:10px;">
<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
<tr>
    <td class="m-pb-10" style="padding: 10px 0;" valign="middle" align="center">
        <a href=""  target="_blank">
            <img src="images/XXXXXX_dell-logo.png" width="66" height="37" alt="DELL" style="display:block; border:0;" />
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
                            <img src="images/XXXXXX_icon-rd-chat.png" alt="FALE COM O SEU GERENTE" width="32" height="25" style="border: 0;"/>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td class="social-icon" align="center" style="font-family: Arial, Helvetica, sans-serif; font-size:10px; line-height:14px; color:#444444;">
                        <a href="" target="_blank" style="outline:none; color:#444444; text-decoration:none;">
                        FALE COM O SEU GERENTE
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
        headerHTML.push(`
    <!---------------- NONE HEADER  ### -->
    <tr>
        <td valign="top" bgcolor="#ffffff" class="noneMobile">
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
                <td valign="top" style="padding:0px;" class="m-p-15">
                <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td class="m-pb-10" style="padding: 12px 0;" valign="top" align="center">
                    </td>
                    <td valign="top">
                    <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                        </tr>
                    </table>
                    </td>	
                    ${desktopFundingHTML.join('\n')}
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
                        </tr>
                        <tr>
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
    }

    return headerHTML;
}

export default Header;
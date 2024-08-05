const Plugin = ({ params }) => {   

    const { selectedModules, copyValues, colors } = params;
    let desktopPluginHTML = []
    let mobilePluginHTML = []

    if (selectedModules.plugin === "plugin") {
        desktopPluginHTML.push(`


<!---------------- PLUGIN BANNER  ### -->
<tr>
<td class="noneMobile" bgcolor="${colors.secondaryColor.hex}" align="center" valign="top" style="padding:0">
<table role="presentation"  border="0" cellspacing="0" cellpadding="0">
    <tr>
        <td width="40" class="noneMobile">&nbsp;</td>
        <td bgcolor="${colors.secondaryColor.hex}" align="center" style=" font-family: Arial, Helvetica, sans-serif;font-size:15px; line-height:20px; padding:15px 20px;">
            <a href="" target="_blank" style="outline:none; color: ${colors.accentColor.hex}; text-decoration:none; text-transform: uppercase">
                ${copyValues.plugin.single}&nbsp;›
            </a>
        </td>
        <td width="40" class="noneMobile">&nbsp;</td>
    </tr>
</table>
</td>
</tr>
<!---------------- PLUGIN BANNER END / ### --> 

        `) && mobilePluginHTML.push(`
	<tr>
	<td  class="showMobile" bgcolor="${colors.secondaryColor.hex}" align="center">
	<table cellpadding="0" cellspacing="0"> 
		<tr>
		<td align="center" valign="top" style="padding:20px 0;">
		<table role="presentation" border="0" cellspacing="0" cellpadding="0">
			<tr>
				<td bgcolor="${colors.secondaryColor.hex}" align="center" style=" font-family: Arial, Helvetica, sans-serif;font-size:15px; line-height:20px; padding:5px 20px;">
                    <a href="" target="_blank" style="outline:none; color: ${colors.accentColor.hex}; text-decoration:none; text-transform: uppercase">
                        ${copyValues.plugin.single}&nbsp;›
                    </a>
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
    else if (selectedModules.plugin === "supercharger") {
        desktopPluginHTML.push(`
        <!---------------- SUPERCHARGER BANNER  ### -->
<tr>
<td class="noneMobile" bgcolor= "${colors.secondaryColor.hex}" align="center">
<table cellpadding="0" cellspacing="0"> 
    <tr>
    <td align="center" valign="top" style="padding:10px 0;">
    <table role="presentation"  border="0" cellspacing="0" cellpadding="0">
        <tr>
            <td align="center" valign="middle">
                <a href=""  target="_blank" style="outline:none; color:${colors.accentColor.hex}; text-decoration:none;">
                    <img src="images/XXXXXX_Plugin1_Image.png" alt="Dell" border="0" style="display:block; font-size:16px; color: ${colors.secondaryColor.hex} " class="wrap" />
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
`)

    }

    return { desktopPluginHTML, mobilePluginHTML };
}

export default Plugin;

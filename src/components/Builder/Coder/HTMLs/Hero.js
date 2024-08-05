const Hero = ({ params }) => {
    const { selectedModules, copyValues, colors } = params;
    const hero = selectedModules.hero;
    const { badge, headline, ot, subheadline, inlinePromo, specs, price, productName, productSupercharger, cta } = copyValues.hero;

    let heroHTML = [];

    try {
        if (selectedModules.hero === "hero1-lifestyle-product") {
            heroHTML.push(`
        <!-- ### HERO  ### -->
<tr>
<td width="600" align="center" bgcolor="${colors.accentColor.hex}">
<table cellpadding="0" cellspacing="0"> 
    <tr>
    <td align="center" valign="top" style="padding-top: 50px;">
    <table role="presentation"  border="0" cellspacing="0" cellpadding="0">
        <tr>
            <td align="center" valign="middle">
                <a href=""  target="_blank" style="outline:none; color:#ffffff; text-decoration:none;">
                    <img src="images/XXXXXX_Hero_Headline_Image.png" alt="Dell" border="0" style="display:block; font-size:16px; color:#0076ce;" class="wrap" />
                </a>
            </td>
        </tr>
    </table>
    </td>
    </tr>
    <tr>
        <td align="center" valign="top" style="padding-top: 35px">
        <table role="presentation"  border="0" cellspacing="0" cellpadding="0">
        <tr>
            <td align="center" valign="middle">
                <a href=""  target="_blank" style="outline:none; color:#ffffff; text-decoration:none;">
                    <img src="images/XXXXXX_Hero1_Lifestyle_Image.png" alt="Hero Lifestyle Image" border="0" style="display:block; font-size:16px; color:#0076ce;" class="wrap" />
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
            <td style=" font-family: Arial, Helvetica, sans-serif; padding:30px 12px 30px 12px; font-size:18px;line-height:22px;mso-line-height-rule:exactly; text-align:center; color:#ffffff;">
                <a href="" target="_blank" style="outline:none; color:#ffffff; text-decoration:none;">
                    ${subheadline}
                </a>
            </td>
            <td width="70" class="noneMobile">&nbsp;</td>
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
                    <img src="images/XXXXXX_Hero1_Product_Image.png" alt="Dell" border="0" style="display:block; font-size:16px; color:#0076ce;" class="wrap" />
                </a>
            </td>
        </tr>
        </table>
        </td>
    </tr>
<!-------- Buttons ----------->
    <tr>
        <td style="padding:30px 20px;" align="center" valign="middle">
        <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" class="wrap">
        <tr>
            <th valign="top" style="box-sizing:border-box; padding:0 5px;" class="stack m-px-reset m-pb-10">
            <table role="presentation" width="180" align="center" border="0" cellpadding="0" cellspacing="0" style="width:180px;" class="wrap">
            <tr>
                <td valign="middle" align="center" style="font-family:Arial, Helvetica, sans-serif; font-size:16px; mso-line-height-rule:exactly; line-height:22px; font-weight:700; color:${colors.accentColor.hex}; background-color:${colors.tertiaryColor.hex}; letter-spacing:0.03em; white-space: nowrap;" class="hero-cta-button">
                    <a href="" target="_blank" style="color:${colors.accentColor.hex}; border:2px solid ${colors.tertiaryColor.hex}; text-decoration:none; padding:15px 20px; display:block;">
                        ${cta}
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
        
        `)

        } else if (selectedModules.hero === "hero1-lifestyle") {
            heroHTML.push(`
        <!-- ### HERO  ### -->
<tr>
<td width="600" align="center" bgcolor="${colors.accentColor.hex}">
<table cellpadding="0" cellspacing="0"> 
    <tr>
        <td align="center" valign="top" style="padding-top: 0">
        <table role="presentation"  border="0" cellspacing="0" cellpadding="0">
        <tr>
            <td align="center" valign="middle">
                <a href=""  target="_blank" style="outline:none; color:#ffffff; text-decoration:none;">
                    <img src="images/XXXXXX_Hero1_Lifestyle_Image.png" alt="Hero Lifestyle Image" border="0" style="display:block; font-size:16px; color:#0076ce;" class="wrap" />
                </a>
            </td>
        </tr>
        </table>
        </td>
    </tr>
    <tr>
    <td align="center" valign="top" style="padding-top: 50px;">
    <table role="presentation"  border="0" cellspacing="0" cellpadding="0">
        <tr>
            <td align="center" valign="middle">
                <a href=""  target="_blank" style="outline:none; color:#ffffff; text-decoration:none;">
                    <img src="images/XXXXXX_Hero_Headline_Image.png" alt="Dell" border="0" style="display:block; font-size:16px; color:#0076ce;" class="wrap" />
                </a>
            </td>
        </tr>
    </table>
    </td>
    </tr>
    <tr>
        <td align="center" valign="top" style="padding:0">
        <table role="presentation"  border="0" cellspacing="0" cellpadding="0"><tr>
        <td width="8" class="noneMobile">&nbsp;</td>
            <td style=" font-family: Arial, Helvetica, sans-serif; padding:20px 12px 10px 22px; font-size:18px;line-height:22px;mso-line-height-rule:exactly; text-align:left; color:#ffffff;">
                <a href="" target="_blank" style="outline:none; color:#ffffff; text-decoration:none;">
                    ${subheadline}
                </a>
            </td>
            <td width="30" class="noneMobile">&nbsp;</td>
        </tr>
        </table>
        </td>
    </tr>
<!-------- Buttons ----------->
    <tr>
        <td style="padding:30px 20px;" align="center" valign="middle">
        <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" class="wrap">
        <tr>
            <th valign="top" style="box-sizing:border-box; padding:0 5px;" class="stack m-px-reset m-pb-10">
            <table role="presentation" width="180" align="center" border="0" cellpadding="0" cellspacing="0" style="width:180px;" class="wrap">
            <tr>
                <td valign="middle" align="center" style="font-family:Arial, Helvetica, sans-serif; font-size:16px; mso-line-height-rule:exactly; line-height:22px; font-weight:700; color:${colors.accentColor.hex}; background-color:${colors.tertiaryColor.hex}; letter-spacing:0.03em; white-space: nowrap;" class="hero-cta-button">
                    <a href="" target="_blank" style="color:${colors.accentColor.hex}; border:2px solid ${colors.tertiaryColor.hex}; text-decoration:none; padding:15px 20px; display:block;">
                        ${cta}
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
        
        `)


            console.log("Cosneguimos pegar os valores", subheadline, cta)
        }
    } catch (error) {
        console.error('Erro ao exportar HTML:', error);
    }

    return heroHTML;


}

export default Hero;
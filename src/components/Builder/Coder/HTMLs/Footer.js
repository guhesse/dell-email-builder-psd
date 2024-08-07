const Footer = ({ params, desktopFundingHTML }) => {

    const { selectedModules } = params;
    const footer = selectedModules.footer

    let footerHTML = [];

    if (footer === "sb-four-btn") {
        footerHTML.push(`
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
							Servidores
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
				<td class="social-icon" align="center" style="padding:0 5px;">
                    <a href="" target="_blank" style="outline:none;">
                        <img src="images/XXXXXX_icon-li.png" alt="LinkedIn" style="border: 0;"/>
                    </a>
                </td>
				<td class="social-icon" align="center" style="padding:0 5px;">
                    <a href="" target="_blank" style="outline:none;">
                        <img src="images/XXXXXX_icon-x.png" alt="X" style="border: 0;"/>
                    </a>
                </td>
				<td class="social-icon" align="center" style="padding:0 5px;">
                    <a href="" target="_blank" style="outline:none;">
                        <img src="images/XXXXXX_icon-fb.png" alt="Facebook" style="border: 0;"/>
                    </a>
                </td> 
			</tr>
		</table>
		</td>
		</tr>
	</table>
	</td>
	</tr>
	<!-- -------------- /END SOCIAL MEDIA ROW ------------------------------>

`)
    } else if (footer === "csb-four-btn") {
        footerHTML.push(`
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
				<td class="social-icon" align="center" style="padding:0 5px;">
                    <a href="" target="_blank" style="outline:none;">
                        <img src="images/XXXXXX_icon-ig.png" alt="Instagram" style="border: 0;"/>
                    </a>
                </td>
				<td class="social-icon" align="center" style="padding:0 5px;">
                    <a href="" target="_blank" style="outline:none;">
                        <img src="images/XXXXXX_icon-x.png" alt="X" style="border: 0;"/>
                    </a>
                </td>
				<td class="social-icon" align="center" style="padding:0 5px;">
                    <a href="" target="_blank" style="outline:none;">
                        <img src="images/XXXXXX_icon-fb.png" alt="Facebook" style="border: 0;"/>
                    </a>
                </td> 
				<td class="social-icon" align="center" style="padding:0 5px;">
                    <a href="" target="_blank" style="outline:none;">
                        <img src="images/XXXXXX_icon-li.png" alt="LinkedIn" style="border: 0;"/>
                    </a>
                </td>  
			</tr>
		</table>
		</td>
		</tr>
	</table>
	</td>
	</tr>
	<!-- -------------- /END SOCIAL MEDIA ROW ------------------------------>
`)
    } else if (footer === "aw-three-btn") {
        footerHTML.push(`
            <!-- Buttons-->
	<tr>
	<td style="padding:30px 0px 30px;" align="center" valign="middle">
	<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" class="wrap">
		<tr>
			<th valign="top" style="box-sizing:border-box; padding:0 5px;" class="stack m-px-reset m-pb-10">
			<table role="presentation" width="180" align="center" border="0" cellpadding="0" cellspacing="0" style="width:180px;" class="wrap">
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
			<table role="presentation" width="180" align="center" border="0" cellpadding="0" cellspacing="0" style="width:180px;" class="wrap">
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
			<table role="presentation" width="180" align="center" border="0" cellpadding="0" cellspacing="0" style="width:180px;" class="wrap">
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
				<td class="social-icon" align="center" style="padding:0 5px;">
                    <a href="" target="_blank" style="outline:none;">
                        <img src="images/XXXXXX_icon-ig.png" alt="Instagram" style="border: 0;"/>
                    </a>
                </td>
				<td class="social-icon" align="center" style="padding:0 5px;">
                    <a href="" target="_blank" style="outline:none;">
                        <img src="images/XXXXXX_icon-yt.png" alt="Youtube" style="border: 0;"/>
                    </a>
                </td>
				<td class="social-icon" align="center" style="padding:0 5px;">
                    <a href="" target="_blank" style="outline:none;">
                        <img src="images/XXXXXX_icon-x.png" alt="X" style="border: 0;"/>
                    </a>
                </td> 
				<td class="social-icon" align="center" style="padding:0 5px;">
                    <a href="" target="_blank" style="outline:none;">
                        <img src="images/XXXXXX_icon-fb.png" alt="Facebook" style="border: 0;"/>
                    </a>
                </td>  
			</tr>
		</table>
		</td>
		</tr>
	</table>
	</td>
	</tr>

    <tr>
	<td align="center" valign="top" style="padding:0">
	<table role="presentation"  border="0" cellspacing="0" cellpadding="0">
		<tr>
			<td style=" font-family: Arial, Helvetica, sans-serif; padding:25px 20px 0px 20px; font-size:13px;line-height:18px;mso-line-height-rule:exactly; text-align:center; color:#444444; letter-spacing: 2px;">
				<a href="" target="_blank" style="outline:none; color:#444444; text-decoration:none;">
					0800 722 3428</a>
			</td>
		</tr>
		<tr>
			<td style=" font-family: Arial, Helvetica, sans-serif; padding:5px 20px 0px 20px; font-size:13px;line-height:18px;mso-line-height-rule:exactly; text-align:center; color:#62cdf2; letter-spacing: 2px;">
				<a href="" target="_blank" style="outline:none; color:#62cdf2; text-decoration:none;">
					DELL.COM.BR/ALIENWARE</a>
			</td>
		</tr>
	</table>
	</td>
	</tr>
	<!-- -------------- /END SOCIAL MEDIA ROW ------------------------------>
            
`)
    } else if (footer === "aw-four-btn") {
        footerHTML.push(`
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
				<td class="social-icon" align="center" style="padding:0 5px;">
                    <a href="" target="_blank" style="outline:none;">
                        <img src="images/XXXXXX_icon-ig.png" alt="Instagram" style="border: 0;"/>
                    </a>
                </td>
				<td class="social-icon" align="center" style="padding:0 5px;">
                    <a href="" target="_blank" style="outline:none;">
                        <img src="images/XXXXXX_icon-yt.png" alt="Youtube" style="border: 0;"/>
                    </a>
                </td>
				<td class="social-icon" align="center" style="padding:0 5px;">
                    <a href="" target="_blank" style="outline:none;">
                        <img src="images/XXXXXX_icon-x.png" alt="X" style="border: 0;"/>
                    </a>
                </td> 
				<td class="social-icon" align="center" style="padding:0 5px;">
                    <a href="" target="_blank" style="outline:none;">
                        <img src="images/XXXXXX_icon-fb.png" alt="Facebook" style="border: 0;"/>
                    </a>
                </td>  
			</tr>
		</table>
		</td>
		</tr>
	</table>
	</td>
	</tr>

    <tr>
	<td align="center" valign="top" style="padding:0">
	<table role="presentation"  border="0" cellspacing="0" cellpadding="0">
		<tr>
			<td style=" font-family: Arial, Helvetica, sans-serif; padding:25px 20px 0px 20px; font-size:13px;line-height:18px;mso-line-height-rule:exactly; text-align:center; color:#444444; letter-spacing: 2px;">
				<a href="" target="_blank" style="outline:none; color:#444444; text-decoration:none;">
					0800 722 3428</a>
			</td>
		</tr>
		<tr>
			<td style=" font-family: Arial, Helvetica, sans-serif; padding:5px 20px 0px 20px; font-size:13px;line-height:18px;mso-line-height-rule:exactly; text-align:center; color:#62cdf2; letter-spacing: 2px;">
				<a href="" target="_blank" style="outline:none; color:#62cdf2; text-decoration:none;">
					DELL.COM.BR/ALIENWARE</a>
			</td>
		</tr>
	</table>
	</td>
	</tr>
	<!-- -------------- /END SOCIAL MEDIA ROW ------------------------------>
`)
    } else if (footer === "gaming") {
        footerHTML.push(`
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
				<td class="social-icon" align="center" style="padding:0 5px;">
                    <a href="" target="_blank" style="outline:none;">
                        <img src="images/XXXXXX_icon-ig.png" alt="Instagram" style="border: 0;"/>
                    </a>
                </td>
				<td class="social-icon" align="center" style="padding:0 5px;">
                    <a href="" target="_blank" style="outline:none;">
                        <img src="images/XXXXXX_icon-yt.png" alt="Youtube" style="border: 0;"/>
                    </a>
                </td>
				<td class="social-icon" align="center" style="padding:0 5px;">
                    <a href="" target="_blank" style="outline:none;">
                        <img src="images/XXXXXX_icon-x.png" alt="X" style="border: 0;"/>
                    </a>
                </td> 
				<td class="social-icon" align="center" style="padding:0 5px;">
                    <a href="" target="_blank" style="outline:none;">
                        <img src="images/XXXXXX_icon-fb.png" alt="Facebook" style="border: 0;"/>
                    </a>
                </td>  
			</tr>
		</table>
		</td>
		</tr>
	</table>
	</td>
	</tr>
	<!-- -------------- /END SOCIAL MEDIA ROW ------------------------------>
`)
    } else if (footer === "outlet") {
        footerHTML.push(`
`)
    } else if (footer === "experts") {
        footerHTML.push(`
        <!-- ### FOOTER ### -->
	<td height="20"></td>
	
	<tr>
	<td  align="center" valign="middle" bgcolor="#eeeeee">
	<table role="presentation" align="left" border="0" cellpadding="0" cellspacing="0" class="wrap" >
		<tr>
			<td align="left" style="font-family:Arial, Helvetica, sans-serif;" class="align-center">
			<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-left: 25px;">
				<tr>
					<td height="20" class="noneMobile">&nbsp;</td>
				</tr>
				<tr>
					<td valign="top" style="font-family: Arial, Helvetica, sans-serif;color:#444444;font-size:14px; line-height: 24px; padding-bottom:5px; " class="align-center">
						<a href=""  target="_blank" style="outline:none; color:#565656; text-decoration:none;">
							<strong>Entre em contato com o seu gerente de contas para mais informações:</strong>
						</a>
					</td>
				</tr>
				<tr>
					<td style="font-family: Arial, Helvetica, sans-serif; font-size:12px;line-height:16px; color:#444444;" class="align-center">
						<a href="" target="_blank" style="outline:none; color:#444444; text-decoration:none;">
							[SPEC_NOME]
						</a>
					</td>
				</tr>
				<tr>
					<td style="font-family: Arial, Helvetica, sans-serif; font-size:12px;line-height:16px; color:#444444;" class="align-center">
						<a href="" target="_blank" style="outline:none; color:#444444; text-decoration:none;">
							[SPEC_PHONE]
						</a>
					</td>
				</tr>
				<tr>
					<td style="font-family: Arial, Helvetica, sans-serif; font-size:12px;line-height:16px; color:#444444;" class="align-center">
						<a href="" target="_blank" style="outline:none; color:#444444; text-decoration:none;">
							[SPEC_MAIL]
						</a>
					</td>
				</tr>
				<tr>
					<td height="20"></td>
				</tr>
			</table>
			</td>
			</tr>
	</table>
	</td>
	</tr>

	<td height="20"></td>
	
	
	<!-- -------------- SOCIAL MEDIA ROW ------------------------------>		
	<tr>	  
	<td width="100%" align="center">
	<table cellpadding="0" cellspacing="0">
		<tr>
		<td align="center">
		<table cellpadding="0" cellspacing="0">
			<tr>
				<td class="social-icon" align="center" style="padding:0 5px;"><a href="" target="_blank" style="outline:none;"><img src="images/XXXXXX_icon-li.png" alt="LinkedIn" style="border: 0;"/></a></td> 
                <td class="social-icon" align="center" style="padding:0 5px;"><a href="" target="_blank" style="outline:none;"><img src="images/XXXXXX_icon-twitter.png" alt="Twitter" style="border: 0;"/></a></td>
                <td class="social-icon" align="center" style="padding:0 5px;"><a href="" target="_blank" style="outline:none;"><img src="images/XXXXXX_icon-facebook.png" alt="Facebook"  style="border: 0;"/></a></td> 
			</tr>
		</table>
		</td>
		</tr>
	</table>
	</td>
	</tr>
	
	
	<!-- -------------- /END SOCIAL MEDIA ROW ------------------------------>


`)
    } else {
        footerHTML.push(``)
    }

    return footerHTML;
}

export default Footer;
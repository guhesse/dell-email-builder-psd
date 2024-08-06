const VfBanner = ({ params }) => {
    const { selectedModules, copyValues } = params;
    const vfbanner = selectedModules.vfbanner;
    const bannerCopy = copyValues.vfbanner;
    const { headline, copy, cta } = bannerCopy;

    let vfBannerHTML = [];

    if (vfbanner === "ms365") {
        vfBannerHTML.push(`
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
        `)
    } else if (vfbanner === "msserver") {
        vfBannerHTML.push(`  
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
        `)
    } else if (vfbanner === "mcafee") {
        vfBannerHTML.push(`
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
    `)
    }

    return vfBannerHTML;
}

export default VfBanner;
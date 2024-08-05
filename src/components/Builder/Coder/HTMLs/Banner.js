const Banner = ({ params }) => {
	const { selectedModules, copyValues } = params;
    const banner = selectedModules.banner;
    const bannerCopy = copyValues.banner;
    const { headline, copy, cta } = bannerCopy;

    let bannerHTML = [];

    if (banner === "left") {
        bannerHTML.push(` 
        <!-- ### BANNER WITH IMAGE LEFT CENTERED -->
	<tr>
	<td align="middle" valign="top">
	<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
		<tr>
			<td align="center" style="padding:0px;">
			<table width="100%" role="presentation" border="0" cellspacing="0" cellpadding="0">
			<tr>
				<th align="center" valign="top" class="stack">
				<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td align="left" valign="middle" class="product-padding-b15">
							<a href=""  target="_blank">
								<img src="images/XXXXXX_Banner1_Image.png" alt="Dell" border="0" style="display:block;" />
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
							<td align="center" style="font-family:Arial, Helvetica, sans-serif;" class="align-center">
							<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
								<tr>
									<td height="20" class="noneMobile">&nbsp;</td>
								</tr>
								<tr>
									<td align="center" valign="middle">
										<a href="" target="_blank">
											<img src="images/XXXXXX_Banner1_Headline_Image.png" alt="Dell" border="0" style="display:block;" />
										</a>
									</td>
								</tr>
								<tr>
									<td align="center" style="font-family: Arial, Helvetica, sans-serif; font-size:11px;line-height:14px; color:#444444;" class="align-center">
										<a href="" target="_blank" style="outline:none; color:#444444; text-decoration:none;">
                                        ${copy}
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
													${cta}
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
        `)
    } else if (banner === "right") {
        bannerHTML.push(`
	
	<!-- ### BANNER WITH IMAGE RIGHT -->
	<tr>
	<td align="center" valign="top">
	<table dir="rtl" role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
		<tr>
			<td align="center" style="padding:0px;">
			<table width="100%" role="presentation" border="0" cellspacing="0" cellpadding="0">
			<tr>
				<th align="right" valign="top" class="stack">
				<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td align="right" valign="middle" class="product-padding-b15">
							<a href=""  target="_blank">
								<img src="images/XXXXXX_Banner1_Image.png" alt="Dell" border="0" style="display:block;" />
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
						<td align="center" style="font-family:Arial, Helvetica, sans-serif;">
						<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
							<tr>
								<td height="20" class="noneMobile">&nbsp;</td>
							</tr>
							<tr >
								<td align="center" valign="middle" >
									<a href=""  target="_blank">
										<img src="images/XXXXXX_Banner1_Headline_Image.png" alt="Dell" border="0" style="display:block;" />
									</a>
								</td>
							</tr>
							<tr>
								<td align="center" style="font-family: Arial, Helvetica, sans-serif; font-size:11px;line-height:14px; color:#444444;">
									<a href=""   target="_blank" style="outline:none; color:#444444; text-decoration:none;">
										${copy}
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
												${cta}
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
    `)
    }

    return bannerHTML;
}

export default Banner;
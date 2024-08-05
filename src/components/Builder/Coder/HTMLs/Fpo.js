const Fpo = ({ params }) => {
	const { colors, selectedModules } = params;
    const fpo = selectedModules.fpo

    let fpoHTML = [];

    if (fpo !== null) {
        fpoHTML.push(`

	<!-- ### 1UP MODULE ### -->
	<tr>
	<td align="center" bgcolor="${colors.tertiaryColor.hex}" valign="top" style="padding:20px 20px 0 20px;" class="m-px-20">
	<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">

	<!-----* PRODUCT LEFT START *-----> 
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
							<td valign="middle" style="font-family: Arial, Helvetica, sans-serif;color:${colors.accentColor.hex};font-size:12px;padding-bottom:2px;" class="align-center">
								<a href=""   target="_blank" style="outline:none; color:${colors.accentColor.hex}; text-decoration:none;">
									<strong>DESCONTO DE R$ XXX</strong>
								</a>
							</td>
						</tr>
						<tr>
							<td valign="top" style="font-family: Arial, Helvetica, sans-serif;color:${colors.accentColor.hex};font-size:13px;padding-bottom:5px;" class="align-center">
								<a href=""   target="_blank" style="outline:none; color:${colors.accentColor.hex}; text-decoration:none;">
									<strong>Novo Latitude 14 3000</strong>
								</a>
							</td>
						</tr>
						<tr>
							<td style="font-family: Arial, Helvetica, sans-serif; font-size:11px;line-height:14px; color:${colors.accentColor.hex};padding-bottom:5px;" class="align-center">
								De R$ XXX<br />
								Por <strong style="font-size: 20px; line-height: 22px;">R$ XXX</strong> à vista<br />
								em até 12x de R$ XXX sem juros
							</td>
						</tr>
						<tr>
							<td style="font-family: Arial, Helvetica, sans-serif; font-size:11px;line-height:14px; color:${colors.accentColor.hex};" class="align-center">
								<a href="" target="_blank" style="outline:none; color:${colors.accentColor.hex}; text-decoration:none;">
									8ª geração do processador Intel<sup style="line-height: 1; font-size: 75%; vertical-align: top; mso-text-raise:30%;">&reg;</sup> Core™ i5, Windows 10 Pro, 4GB de memória, HD de 500GB, 1 ano de assistência no local e teclado retroiluminado.
								</a>
							</td>
						</tr>
						<tr>
							<td height="10"></td>
						</tr>
						<tr>
							<td style="font-family: Arial, Helvetica, sans-serif;font-size:10px;color:${colors.accentColor.hex};" class="align-center">
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
								<td valign="middle" align="center" bgcolor="${colors.accentColor.hex}" style="font-family:Arial, Helvetica, sans-serif; font-size:15px; mso-line-height-rule:exactly; line-height:17px; font-weight:700; color:${colors.tertiaryColor.hex}; letter-spacing:0.03em;" class="cta-button">
									<a href="" target="_blank" style="color:${colors.tertiaryColor.hex}; border:2px solid ${colors.accentColor.hex}; text-decoration:none; padding:10px 10px; display:block;">
										Compre Agora
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
	<!-----* PRODUCT LEFT END *-----> 
	<!-----* PRODUCT RIGHT START *-----> 
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
							<td valign="middle" style="font-family: Arial, Helvetica, sans-serif;color:${colors.accentColor.hex};font-size:12px;padding-bottom:2px;" class="align-center">
								<a href=""   target="_blank" style="outline:none; color:${colors.accentColor.hex}; text-decoration:none;">
									<strong>DESCONTO DE R$ XXX</strong>
								</a>
							</td>
						</tr>
						<tr>
							<td valign="top" style="font-family: Arial, Helvetica, sans-serif;color:${colors.accentColor.hex};font-size:13px;padding-bottom:5px;" class="align-center">
								<a href=""   target="_blank" style="outline:none; color:${colors.accentColor.hex}; text-decoration:none;">
									<strong>Novo Latitude 14 3000</strong>
								</a>
							</td>
						</tr>
						<tr>
							<td style="font-family: Arial, Helvetica, sans-serif; font-size:11px;line-height:14px; color:${colors.accentColor.hex};padding-bottom:5px;" class="align-center">
								De R$ XXX<br />
								Por <strong style="font-size: 20px; line-height: 22px;">R$ XXX</strong> à vista<br />
								em até 12x de R$ XXX sem juros
							</td>
						</tr>
						<tr>
							<td style="font-family: Arial, Helvetica, sans-serif; font-size:11px;line-height:14px; color:${colors.accentColor.hex};" class="align-center">
								<a href="" target="_blank" style="outline:none; color:${colors.accentColor.hex}; text-decoration:none;">
									8ª geração do processador Intel<sup style="line-height: 1; font-size: 75%; vertical-align: top; mso-text-raise:30%;">&reg;</sup> Core™ i5, Windows 10 Pro, 4GB de memória, HD de 500GB, 1 ano de assistência no local e teclado retroiluminado.
								</a>
							</td>
						</tr>
						<tr>
							<td height="10"></td>
						</tr>
						<tr>
							<td style="font-family: Arial, Helvetica, sans-serif;font-size:10px;color:${colors.accentColor.hex};" class="align-center">
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
									<td valign="middle" align="center" bgcolor="${colors.accentColor.hex}" style="font-family:Arial, Helvetica, sans-serif; font-size:15px; mso-line-height-rule:exactly; line-height:17px; font-weight:700; color:${colors.tertiaryColor.hex}; letter-spacing:0.03em;" class="cta-button">
									<a href="" target="_blank" style="color:${colors.tertiaryColor.hex}; border:2px solid ${colors.accentColor.hex}; text-decoration:none; padding:10px 10px; display:block;">
										Compre Agora
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
	<!-----* PRODUCT RIGHT END *-----> 
	</table>
	</td>
    </tr>
	<!-----* 1UP MODULE END *-----> 


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

    `)
    }
    return fpoHTML;
}

export default Fpo;



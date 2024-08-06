const Birdseed = ({ params }) => {
	const { selectedModules, copyValues } = params;
	const birdseed = selectedModules.birdseed;
	const birdseedCopy = copyValues.birdseed;
	const { day, month, year, copy } = birdseedCopy;

	let birdseedHTML = [];

	if (birdseed === "standard") {
		birdseedHTML.push(` 
        <tr>
		<td height="10"></td>
		</tr>


	<tr>
	<td valign="top" style="padding:20px;">
	<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
		<tr>
			<td align="center" valign="top" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:15px; mso-line-height-rule:exactly; color:#444444; padding-top:0px;">
				<a href=""  target="_blank" style="outline:none; color:#0076ce; text-decoration:none;">Gerencie suas preferências</a>&nbsp; | &nbsp;
				<a href=""  target="_blank" style="outline:none; color:#0076ce; text-decoration:none;">Cancelar inscrição</a>&nbsp; | &nbsp;
				<a href=""  target="_blank" style="outline:none; color:#0076ce; text-decoration:none;">Declaração de privacidade</a>
				<br><br>
			</td>
		</tr>
		<tr>
			<td align="left" valign="top" style="font-family:Arial, Helvetica, sans-serif; font-size:10px; line-height:14px; mso-line-height-rule:exactly; color:#444444; padding-top:0px;text-align: justify;">
				<center>Para informações sobre suas preferências de e-mail, entre em contato conosco em <a href="mailto:Privacy@Dell.com"  target="_blank" style="outline:none; color:#0076ce; text-decoration:underline;">Privacy@Dell.com</a>.<br>
				A sede global da Dell Technologies está localizada em One Dell Way, Round Rock, TX 78682, EUA.</center><br>

				Ofertas válidas até ${day}/${month}/${year}, limitadas, por linha de produto, a 3 unidades para pessoa física, seja por aquisição direta e/ou entrega a ordem, que não tenha adquirido equipamentos Dell nos últimos 4 meses, e a 5 unidades para pessoa jurídica ou grupo de empresas com até 500 funcionários registrados. Frete grátis para todo o Brasil. Cálculo do valor do produto sem frete. Nossos notebooks e desktops são construídos especialmente para você. Nada de máquinas paradas em estoque. O prazo de entrega pode ser estimado junto ao site da Dell.
				<br><br>
				
				Preços referenciados com impostos para consumidores pessoas físicas, comprando com CPF. O preço final aplicável nas vendas para pessoas jurídicas comprando com CNPJ pode variar de acordo com o Estado em que estiver localizado o adquirente do produto, em razão dos diferenciais de impostos para cada estado. As ofertas podem ser adquiridas através de cartão de crédito das operadoras Visa, MasterCard, American Express, Elo e Hypercard, através de Boleto ou PayPal. Para mais detalhes, consulte o seu representante de vendas ou visite o site.<a href=""  target="_blank" style="outline:none; color:#0076ce; text-decoration:underline;">www.dell.com.br</a>.
				<br><br>

				Garantia total mínima (legal + contratual) de 1 ano, inclui peças e mão de obra, restrita aos produtos Dell. Na garantia no centro de reparos, o cliente, após contato telefônico com o Suporte Técnico da Dell com diagnóstico remoto, deverá levar o seu equipamento ao centro de reparos localizado em SP ou encaminhar pelos Correios. Na garantia a domicílio/assistência técnica no local, técnicos serão deslocados, se necessário, após consulta telefônica com diagnóstico remoto. Garantia a domicílio não disponível para acessórios. Produtos e softwares de outras marcas estão sujeitos aos termos de garantia dos respectivos fabricantes. Para mais informações sobre Serviços, acesse <a href=""  target="_blank" style="outline:none; color:#0076ce; text-decoration:underline;">www.dell.com.br/servicos</a>.
				<br><br>

				Empresa beneficiada pela Lei da Informática. Fotos meramente ilustrativas. PowerEdge, Vostro, Latitude, PowerVault, Precision, OptiPlex, XPS, Inspiron, Alienware, CompleteCare e ProSupport são marcas registradas da &copy; 2023 Dell Inc. Todos osdireitos reservados. Microsoft e Windows são marcas registradas da Microsoft Corporation nos EUA. Ultrabook, Celeron, Celeron Inside, Core Inside, Intel, Intel Logo, Intel Atom, Intel Atom Inside, Intel Core, Intel Inside, Intel Inside Logo, Intel vPro,Intel Evo, Pentium, Pentium Inside, vPro Inside, Xeon, Xeon Inside, Intel Agilex, Arria, Cyclone, Movidius, eASIC, Ethernet, Iris, MAX, Select Solutions, Si Photonics, Stratix, Tofino, and Intel Optane são marcas registradas da Intel Corporation e suassubsidiárias. &copy; 2023 Advanced Micro Devices, Inc. Todos os direitos reservados. A sigla AMD, o logotipo de seta da AMD e as combinações resultantes são marcas registradas da Advanced Micro Devices, Inc. &copy; 2023 NVIDIA, o logotipo NVIDIA,GeForce, GeForce RTX, GeForce RTX Super, GeForce GTX, GeForce GTX Super, GRID, SHIELD, Battery Boost, Reflex, DLSS, CUDA, FXAA, GameStream, G-SYNC, G-SYNC Ultimate, NVLINK, ShadowPlay, SLI, TXAA, PhysX, GeForce Experience, GeForce NOW, Maxwell, Pascal eTuring são marcas comerciais e/ou marcas registradas da NVIDIA Corporation nos EUA e em outros países.
				<br><br>
				
				Dell Brasil / Av. Industrial Belgraf, 400 / Eldorado do Sul, RS / CEP 92990-000 / Brasil.<br>
			</td>
		</tr>		
	</table>
	</td>
    </tr>
        `)
	} else if (birdseed === "outlet") {
		birdseedHTML.push(`
	
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
	} else {
		birdseedHTML.push(``)
	}
	return birdseedHTML;
}

export default Birdseed;
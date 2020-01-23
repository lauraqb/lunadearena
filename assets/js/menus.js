(function($) {

	let lang = "ESP";
	if (window.location.href.indexOf("/ENG/")!=-1) lang = "ENG";

	let setTitle = function setHeadTitle() 
	{
		let title;
		if (lang == "ESP") {
			title = '<title>Luna de Arena - Apartamentos con encanto en Menorca, Marrakech y Granada</title>';
		} else {
			title = '<title>Luna de Arena - Sea-side apartments with swimming-pool and garden</title>';
		}
		$('head').append(title);
	}

	let setHeader = function setHeaderAndMenu(){
		let header_html;
		let index, menorca, marrakech, granada, contacto, quienessomos;
		let prefix="";
		let indexPrefix="../";
		let assetsPrefix=".";
		var filename = window.location.href.split("/").pop();
		filename = filename.replace(".html", "");
		switch (filename) {
			case "":
			case "index": 
				index = 'class="current"'; 
				indexPrefix = "";
				assetsPrefix="";
				prefix = 'ESP/';
				break;
			case "marrakech": 
				marrakech = 'class="current"'; 
				break;
			case "granada":
				granada = 'class="current"'; 
				break;
			case "contacto":
				contacto = 'class="current"'; 
				break;
			case "quienessomos":
				quienessomos = 'class="current"'; 
				break;
			default:
				menorca = 'class="current"'; 
				break;
		}
		if (lang == "ESP") {
			header_html = '<div class="contact"><img src="'+assetsPrefix+'./images/contact.png"> +34 666 07 16 38</div>\
				<!-- Logo -->\
				<h1><a href="./index.html" id="logo">Luna de Arena | <em>Apartamentos con encanto</em></a></h1>\
				<!-- Nav -->\
				<nav id="nav">\
					<ul>\
						<li '+index+'><a href="'+indexPrefix+'index.html">Inicio</a></li>\
						<li '+menorca+'><a href="'+prefix+'menorca.html">Menorca</a></li>\
						<li '+marrakech+'><a href="'+prefix+'marrakech.html">Marrakech</a></li>\
						<li '+granada+'><a href="'+prefix+'granada.html">Granada</a></li>\
						<li '+contacto+'><a href="'+prefix+'contacto.html">Contacto</a></li>\
						<li '+quienessomos+'><a href="'+prefix+'quienessomos.html">Quiénes somos</a></li>\
						<li class="language">\
							<a><img src="'+assetsPrefix+'./images/flag_es.svg" class="flag"/> ES <img src="'+assetsPrefix+'./images/arrow_down.svg" /></a>\
							<ul style="width: 50px">\
								<li style="width: 50px"><a href="'+assetsPrefix+'./index-en.html"><img src="'+assetsPrefix+'./images/flag_en.svg" class="flag"/> EN</a></li>\
							</ul>\
						</li>\
					</ul>\
				</nav>'
		}
		$('body #header').html(header_html);
	}

	let setMenorcaMenu = function setMenorcaSubMenu() 
	{
		let submenu_html;
		let menorca, tarifas, disponibilidad, localizacion, quehacer;
		var filename = window.location.href.split("/").pop();
		filename = filename.replace(".html", "");
		switch (filename) {
			case "tarifas": 
				tarifas = 'class="current"'; 
				break;
			case "dispon":
				disponibilidad = 'class="current"'; 
				break;
			case "localizacion":
				localizacion = 'class="current"'; 
				break;
			case "quehacer":
				quehacer = 'class="current"'; 
				break;
			default:
				menorca = 'class="current"'; 
				break;
		}
		if (lang == "ESP") {
			submenu_html = '<ul>\
						<li '+menorca+'><a href="menorca.html">Apartamentos</a>\
							<ul class="dropdown">\
								<li>\
									<a href="#">De 2 dormitorios <img src="../images/arrow_right.svg" /></a>\
									<ul>\
										<li><a href="apto55.html">Costa Arenal Nº55</a></li>\
										<li><a href="apto11.html">Costa Arenal Nº11</a></li>\
									</ul>\
								</li>\
								<li>\
									<a href="apto_maghen.html">De 3 dormitorios</a>\
								</li>\
							</ul>\
						</li>\
						<li '+tarifas+'><a href="tarifas.html">Tarifas</a></li>\
						<li '+disponibilidad+'><a href="dispon.html">Disponibilidad</a></li>\
						<li '+localizacion+'><a href="localizacion.html">Localización</a></li>\
						<li '+quehacer+'><a href="quehacer.html">Qué hacer en Menorca</a></li>\
					</ul>';

		} else {
			submenu_html = '<ul>\
						<li '+menorca+'><a href="menorca.html">Apartaments</a>\
							<ul class="dropdown">\
								<li>\
									<a href="#">2 bedrooms <img src="../images/arrow_right.svg" /></a>\
									<ul>\
										<li><a href="apto55.html">Costa Arenal Nº55</a></li>\
										<li><a href="apto11.html">Costa Arenal Nº11</a></li>\
									</ul>\
								</li>\
								<li>\
									<a href="apto_maghen.html">3 bedrooms</a>\
								</li>\
							</ul>\
						</li>\
						<li '+tarifas+'><a href="tarifas.html">Rental rates</a></li>\
						<li '+disponibilidad+'><a href="dispon.html">Availability</a></li>\
						<li '+localizacion+'><a href="localizacion.html">Location</a></li>\
						<li '+quehacer+'><a href="quehacer.html">What to do in Menorca</a></li>\
					</ul>';
		}

		$('body #subnav').append(submenu_html);
	}


	setTitle();
	setHeader();
	if($('body #subnav').length>0) {
		setMenorcaMenu();
	}
		


})(jQuery);
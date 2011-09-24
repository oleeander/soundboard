<!DOCTYPE html> 
<html> 
	<head> 
		<title>Soundboard</title> 
		<meta charset="utf-8">
		<style type="text/css">
			@import url(style.css);
		</style>
		<script type="text/javascript" src="jquery.min.js"></script>
		<script type="text/javascript" src="script.js"></script>
		<script type="text/javascript" src="saved.js"></script>
	</head>
	<body>
		<div id="board">
			<?php
				$keys = array("1", "2", "3", "4", "5", "6", "7", "8", "q", "w", "e", "r", "t", "z", "u", "i", "a", "s", "d", "f", "g", "h", "j", "k", "y", "x", "c", "v", "b", "n", "m", ",");
				for($i = 0; $i < 31; $i++)
				{
					echo "\t\t\t".'<div class="player" id="d'.$keys[$i].'">
						<div class="status" id="s'.$keys[$i].'">
						</div>
						<div class="key" onclick="return false;">
							<svg xmlns="http://www.w3.org/2000/svg">
							  <defs
								 id="defs3197">
								<linearGradient
								   x1="168.57144"
								   y1="200.43361"
								   x2="168.57144"
								   y2="384.29077"
								   id="linearGradient3700"
								   xlink:href="#linearGradient3141"
								   gradientUnits="userSpaceOnUse" />
								<linearGradient
								   id="linearGradient3141">
								  <stop
									 id="stop3143"
									 style="stop-color:#d8d8d8;stop-opacity:1"
									 offset="0" />
								  <stop
									 id="stop3145"
									 style="stop-color:#a3a3a3;stop-opacity:1"
									 offset="1" />
								</linearGradient>
								<linearGradient
								   x1="90.58992"
								   y1="292.36218"
								   x2="250.18001"
								   y2="292.36218"
								   id="linearGradient3702"
								   xlink:href="#linearGradient3165"
								   gradientUnits="userSpaceOnUse"
								   gradientTransform="matrix(0.8317353,0,0,0.8368438,27.650334,44.986416)" />
								<linearGradient
								   id="linearGradient3165">
								  <stop
									 id="stop3171"
									 style="stop-color:#d7d7d7;stop-opacity:1"
									 offset="0" />
								  <stop
									 id="stop3173"
									 style="stop-color:#e7e7e7;stop-opacity:1"
									 offset="0.5" />
								  <stop
									 id="stop3169"
									 style="stop-color:#d7d7d7;stop-opacity:1"
									 offset="1" />
								</linearGradient>
								<linearGradient
								   y2="292.36218"
								   x2="250.18001"
								   y1="292.36218"
								   x1="90.58992"
								   gradientTransform="matrix(0.8317353,0,0,0.8368438,27.650334,44.986416)"
								   gradientUnits="userSpaceOnUse"
								   id="linearGradient3120"
								   xlink:href="#linearGradient3165"
								   inkscape:collect="always" />
							  </defs>
							  <sodipodi:namedview
								 id="base"
								 pagecolor="#ffffff"
								 bordercolor="#666666"
								 borderopacity="1.0"
								 inkscape:pageopacity="0.0"
								 inkscape:pageshadow="2"
								 inkscape:zoom="1.0289025"
								 inkscape:cx="97.642925"
								 inkscape:cy="-45.326121"
								 inkscape:document-units="px"
								 inkscape:current-layer="layer1"
								 showgrid="false"
								 fit-margin-top="0"
								 fit-margin-left="0"
								 fit-margin-right="0"
								 fit-margin-bottom="0"
								 inkscape:window-width="1280"
								 inkscape:window-height="756"
								 inkscape:window-x="0"
								 inkscape:window-y="0"
								 inkscape:window-maximized="1" />
							  <metadata
								 id="metadata3200">
								<rdf:RDF>
								  <cc:Work
									 rdf:about="">
									<dc:format>image/svg+xml</dc:format>
									<dc:type
									   rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
									<dc:title></dc:title>
								  </cc:Work>
								</rdf:RDF>
							  </metadata>
							  <g
								 inkscape:label="Ebene 1"
								 inkscape:groupmode="layer"
								 id="layer1"
								 transform="translate(-252.35707,-456.90878)">
								<g
								   id="g3175"
								   transform="matrix(0.16386247,0,0,0.16386247,240.73454,424.06523)">
								  <rect
									 style="fill:url(#linearGradient3700);fill-opacity:1;fill-rule:evenodd;stroke:#8d8d8d;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
									 id="rect2168"
									 y="200.93361"
									 x="71.428574"
									 ry="21.428572"
									 height="182.85715"
									 width="194.28572" />
								  <rect
									 style="fill:url(#linearGradient3120);fill-opacity:1;fill-rule:evenodd;stroke:#f8f8f8;stroke-width:0.83428556px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
									 id="rect3157"
									 y="213.13647"
									 x="87.059998"
									 ry="17.932365"
									 height="153.02286"
									 width="161.59431" />
								</g>
								<g
								   style="font-size:40px;font-style:normal;font-weight:normal;fill:#515151;fill-opacity:1;stroke:none;font-family:Bitstream Vera Sans"
								   id="flowRoot2909-7"
								   transform="matrix(0.23339893,0,0,0.23339893,195.13704,383.44956)">
								  <text
									 xml:space="preserve"
									 style="font-size:88.63430786px;font-style:italic;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:start;line-height:125%;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#4d4d4d;fill-opacity:1;stroke:none;font-family:Sans;-inkscape-font-specification:Sans Italic"
									 x="267.50589"
									 y="415.79782"
									 id="text3238"
									 sodipodi:linespacing="125%"><tspan
									   sodipodi:role="line"
									   id="tspan3240"
									   x="267.50589"
									   y="415.79782">'.strtoupper($keys[$i]).'</tspan></text>
								</g>
							  </g>
							</svg>
						</div>
						<audio id="player'.$keys[$i].'" src="silent.ogg"></audio>
						<div class="info">
							<p class="countdown" id="c'.$keys[$i].'">-0:00</p>
							<p class="titel" id="t'.$keys[$i].'">Bereit</p>
						</div>
					</div>
						<div class="control">
							<form action="#" method="GET">
								<p style="margin: -5px 0px -25px -80px;"><a id="s'.$keys[$i].'" href="#"><img src="control_stop.png" alt="x" /></a></p>
								<input id="v'.$keys[$i].'" type="range" style="width:70px; margin-right: -10px;" min="0" max="1" value="0.8" step="0.01">
							</form>
						</div>';
				}
			?>
			<div class="ctrl" id="stop">
				<p>☐</p>
			</div>
			<div class="ctrl" id="program">
				<p>⌘</p>
			</div>
			<div class="ctrl" id="reloadconfig">
				<p onclick="reloadconfig;">↺</p>
			</div>
		</div>
	</body> 
</html> 

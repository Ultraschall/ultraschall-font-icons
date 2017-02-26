/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'ultraschall\'">' + entity + '</span>' + html;
	}
	var icons = {
		'usi-txtlable': '&#x77;',
		'usi-newregion': '&#x78;',
		'usi-newitem': '&#x75;',
		'usi-txt': '&#x76;',
		'usi-unlink': '&#x74;',
		'usi-link': '&#x73;',
		'usi-folder': '&#x72;',
		'usi-export': '&#x71;',
		'usi-grid': '&#x70;',
		'usi-coffee': '&#x6f;',
		'usi-mic': '&#x6e;',
		'usi-music': '&#x6d;',
		'usi-idea': '&#x6c;',
		'usi-trim': '&#x6b;',
		'usi-tape': '&#x6a;',
		'usi-fader': '&#x69;',
		'usi-zoom': '&#x61;',
		'usi-ripple_one': '&#x62;',
		'usi-ripple_all': '&#x63;',
		'usi-marker': '&#x64;',
		'usi-glue': '&#x65;',
		'usi-cut': '&#x66;',
		'usi-selection': '&#x67;',
		'usi-mute': '&#x68;',
		'usi-ultraschall': '&#x30;',
		'usi-ultraschall-full': '&#x31;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/usi-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());

/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

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
		'usi-zoom': '&#x31;',
		'usi-follow': '&#x32;',
		'usi-ripple_one': '&#x33;',
		'usi-ripple_all': '&#x34;',
		'usi-glue': '&#x35;',
		'usi-marker': '&#x36;',
		'usi-cut': '&#x37;',
		'usi-mouse_select': '&#x38;',
		'usi-selection': '&#x39;',
		'usi-mute': '&#x30;',
		'usi-fader': '&#x71;',
		'usi-ultraschall': '&#xb4;',
		'usi-ultraschall-full': '&#xdf;',
		'usi-tape': '&#x77;',
		'usi-trim': '&#x65;',
		'usi-idea': '&#x72;',
		'usi-music': '&#x61;',
		'usi-mic': '&#x73;',
		'usi-coffee': '&#x64;',
		'usi-onAir': '&#x66;',
		'usi-grid': '&#x79;',
		'usi-export': '&#x78;',
		'usi-mp3': '&#x63;',
		'usi-folder': '&#x76;',
		'usi-link': '&#x74;',
		'usi-unlink': '&#x7a;',
		'usi-txtlable': '&#x75;',
		'usi-txt': '&#x69;',
		'usi-newitem': '&#x6f;',
		'usi-newregion': '&#x70;',
		'usi-studio-link': '&#x23;',
		'usi-soundboard': '&#x2b;',
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

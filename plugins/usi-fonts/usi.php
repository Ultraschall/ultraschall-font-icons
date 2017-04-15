<?php
/*
Plugin Name: Ultraschall Icons
Plugin URI: http://ultraschall.fm
Description: Create easy shortcode for Ultraschall website
Version: 1.0.0.2
Author: Michael McCouman Junior
Author URI: http://wikibyte.org
Copyright: Ultraschall Project
Text Domain: usi
*/

//include css in wp header
add_action('wp_enqueue_scripts', 'wp_plugin_usi_fonts');

function wp_plugin_usi_fonts()
{
    wp_enqueue_style('usi-fonts', plugin_dir_url(__FILE__) . 'css/usi.css');
}


//shorcode to create css output
function usi_fonts($atts = null)
{
    $style = '';
    $atts = shortcode_atts(array(
        'icon' => 'ultraschall',
        'size' => '45',
        'color' => ''
    ), $atts, 'usi_fonts');

    if($atts['color']){
        $color = 'color: '.$atts['color'].';';
    }
    if($atts['size']){
        $style = 'style="font-size: '.$atts['size'].'px;'.$color.'"';
    }
    return '<i '.$style.' class="usi-' . $atts['icon'] . '"></i>';

/*
[usi icon="ultraschall" color="#f00" size="50"]
[usi icon="zoom" size="50"]
[usi icon="ripple_one" size="50"]
[usi icon="ripple_all" size="50"]
[usi icon="glue" size="50"]
[usi icon="marker" size="50"]
[usi icon="cut" size="50"]
[usi icon="mouse_select" size="50"]
[usi icon="selection" size="50"]
[usi icon="mute" size="50"]
[usi icon="fader" size="50"]
[usi icon="tape" size="50"]
[usi icon="trim" size="50"]
[usi icon="idea" size="50"]
[usi icon="music" size="50"]
[usi icon="mic" size="50"]
[usi icon="coffee" size="50"]
[usi icon="onAir" size="50"]
[usi icon="grid" size="50"]
[usi icon="export" size="50"]
[usi icon="mp3" size="50"]
[usi icon="folder" size="50"]
[usi icon="link" size="50"]
[usi icon="unlink" size="50"]
[usi icon="txtlable" size="50"]
[usi icon="txt" size="50"]
[usi icon="newitem" size="50"]
[usi icon="newregion" size="50"]
[usi icon="ultraschall-full" size="50"]
*/
}
add_shortcode('usi', 'usi_fonts');
<?php
/**
* Plugin Name: Tachyon
* Plugin URI: https://fasterthanlight.net/
* Description: Make your WordPress site faster than light.
* Version: 0.3.0
* Author: weebney
* Author URI: https://github.com/weebney
* License: MIT
* License URI: https://github.com/weebney/tachyon/blob/master/LICENSE
**/
/* Start Adding Functions Below this Line */
function wpb_hook_javascript() {
    ?>
    <script src="https://unpkg.com/tachyonjs@0.3.0/tachyon.min.js" integrity="sha384-umSCiduUXC3WjlGsseGIEmhM6tRFPRIGLWINkZ/s7v/ql175CtYIh1c7C0SrUx3s" type="module" crossorigin data-tachyon defer></script>
    <?php
}
add_action('wp_head', 'wpb_hook_javascript');
/* Stop Adding Functions Below this Line */
?>
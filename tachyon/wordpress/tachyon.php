<?php
/**
* Plugin Name: Tachyon
* Plugin URI: https://fasterthanlight.net/
* Description: Make your WordPress site faster than light.
* Version: 1.0.0
* Author: weebney
* Author URI: https://github.com/weebney
* License: MIT
* License URI: https://github.com/weebney/tachyon/blob/master/LICENSE
**/
/* Start Adding Functions Below this Line */
function wpb_hook_javascript() {
    ?>
    <script src="https://unpkg.com/tachyonjs@1.0.0/tachyon.min.js" integrity="sha384-heQJwFpZJtRgNigl/AIBiJDMVXglsdy1NzLiOjjc9yo8qLqSiBFPKCzVRiSKHNa4" type="module" crossorigin defer></script>
    <?php
}
add_action('wp_head', 'wpb_hook_javascript');
/* Stop Adding Functions Below this Line */
?>
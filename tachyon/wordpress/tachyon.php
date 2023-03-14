<?php
/**
* Plugin Name: Tachyon
* Plugin URI: https://fasterthanlight.net/
* Description: Make your WordPress site faster than light.
* Version: 1.1.1
* Author: weebney
* Author URI: https://github.com/weebney
* License: MIT
* License URI: https://github.com/weebney/tachyon/blob/master/LICENSE
**/
/* Start Adding Functions Below this Line */
function wpb_hook_javascript() {
    ?>
    <script src="https://unpkg.com/tachyonjs@1.1.1/tachyon.min.js" integrity="sha384-eAVplf5NYzHCSEB5NSZ5vabWAMYIb9Y2E4SKcU78UTIjukDs0tMxFQX0FLmBVYi8" type="module" crossorigin defer></script>
    <?php
}
add_action('wp_head', 'wpb_hook_javascript');
/* Stop Adding Functions Below this Line */
?>
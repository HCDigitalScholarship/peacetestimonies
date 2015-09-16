<?php

/**
 * @package     omeka
 * @subpackage  neatline
 * @copyright   2014 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

?>

<!-- Files. -->
<?php if (metadata('item', 'has files')): ?>
  <?php echo files_for_item(); ?>
<?php endif; ?>


<!-- Texts. -->
<?php echo all_element_texts('item'); ?>

<hr />

<!-- Link. -->

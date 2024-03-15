<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 * @package block-developer-examples
 */

use JohnsHopkins\Color\Colors;

if (isset($attributes['color'])) {

  $color = Colors::getById($attributes['color']);
  $contrast = $color->getContrastingColor();

  ?>

  <div class="wp-block-jhu-color-block type-<?= $color->type ?>">

    <div class="swatch" style="background-color:#<?= $color->hex ?>; color:#<?= $contrast->hex ?>">
      <?= $color->name ?>
    </div>

    <dl>

      <div>
        <dt>PMS</dt>
        <dd>
          <?= $color->pms ?>
          <?= color_block_click_to_copy($color->pms) ?>
        </dd>
      </div>

      <div>
        <dt>CMYK</dt>
        <dd><?= implode(', ', $color->cmyk) ?></dd>
      </div>

      <div>
        <dt>RGB</dt>
        <dd><?= implode(', ', $color->rgb) ?></dd>
      </div>

      <div>
        <dt>HEX</dt>
        <dd>
          #<?= $color->hex ?>
          <?= color_block_click_to_copy('#' . $color->hex) ?>
        </dd>
      </div>
    </dl>

  </div>

<?php

} else {

  ?>

  <div class="wp-block-jhu-color-block gutenberg-error">
    <p>Please select a color in the sidebar.</p>
  </div>

  <?php

}

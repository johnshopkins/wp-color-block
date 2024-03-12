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

$color = color_block_get_color_by_id($attributes['color']);

function clickToCopy($text): string
{
  $html = '<a class="click-to-copy" title="Click to copy" href="#" data-text="' . $text . '">';
  $html .= '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true" class="copy"><path d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"/></svg>';
  $html .= '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="error"><title>Unable to copy to clipboard</title><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>';
  $html .= '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="success"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>';
  $html .= '</a>';
  return $html;
}

?>

<div class="wp-block-jhu-color-block type-<?= $color['type'] ?>">

  <div class="swatch" style="background-color:#<?= $color['hex'] ?>">
    <?= $color['name']; ?>
  </div>

  <dl>

    <div>
      <dt>PMS</dt>
      <dd>
        <?= $color['pms']; ?>
        <?= clickToCopy($color['pms']); ?>
      </dd>
    </div>

    <div>
      <dt>CMYK</dt>
      <dd><?= implode(', ', $color['cmyk']) ?></dd>
    </div>

    <div>
      <dt>RGB</dt>
      <dd><?= implode(', ', $color['rgb']) ?></dd>
    </div>

    <div>
      <dt>HEX</dt>
      <dd>
        #<?= $color['hex']; ?>
        <?= clickToCopy('#' . $color['hex']) ?>
      </dd>
    </div>
  </dl>

</div>



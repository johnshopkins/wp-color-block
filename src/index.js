/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata, {
  icon: {
    src: <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M479.231-100.001q-77.769 0-146.923-29.962-69.153-29.961-120.769-81.576-51.615-51.616-81.576-120.962Q100.001-401.846 100.001-480q0-79.154 30.77-148.499 30.769-69.346 83.576-120.654 52.808-51.307 123.538-81.076 70.731-29.77 150.884-29.77 75 0 142.153 25.577 67.154 25.577 117.962 70.808 50.807 45.23 80.961 107.499 30.154 62.269 30.154 135.038 0 103.845-61.731 162.46-61.73 58.616-158.268 58.616h-72.461q-17.078 0-27.309 11.154-10.231 11.154-10.231 26.386 0 18.539 15 38.538 15 20 15 45.923 0 39.615-21.923 58.807t-58.845 19.192ZM480-480Zm-220 29.999q21.384 0 35.692-14.307 14.307-14.308 14.307-35.692t-14.307-35.692Q281.384-549.999 260-549.999t-35.692 14.307Q210.001-521.384 210.001-500t14.307 35.692q14.308 14.307 35.692 14.307Zm120-160q21.384 0 35.692-14.307 14.307-14.308 14.307-35.692t-14.307-35.692Q401.384-709.999 380-709.999t-35.692 14.307Q330.001-681.384 330.001-660t14.307 35.692q14.308 14.307 35.692 14.307Zm200 0q21.384 0 35.692-14.307 14.307-14.308 14.307-35.692t-14.307-35.692Q601.384-709.999 580-709.999t-35.692 14.307Q530.001-681.384 530.001-660t14.307 35.692q14.308 14.307 35.692 14.307Zm120 160q21.384 0 35.692-14.307 14.307-14.308 14.307-35.692t-14.307-35.692Q721.384-549.999 700-549.999t-35.692 14.307Q650.001-521.384 650.001-500t14.307 35.692q14.308 14.307 35.692 14.307ZM479.231-160q9.769 0 15.269-4.808Q500-169.615 500-178q0-14-15-31.461-15-17.462-15-54.693 0-42.769 29-69.307Q528-360 570-360h70q70.616 0 115.308-41.385Q800-442.77 800-521.077q0-121.385-93.077-200.154Q613.846-800 488.769-800q-137.154 0-232.961 93Q160-614 160-480q0 133 93.5 226.5T479.231-160Z"/></svg>
  },

  /**
   * @see ./edit.js
   */
  edit: Edit,

  /**
   * @see ./save.js
   */
  save,
} );

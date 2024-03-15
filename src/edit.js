import { __ } from '@wordpress/i18n';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { ColorPalette, PanelBody } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

import { colors as ColorsLibrary } from '@johnshopkins/brand-colors';

import './editor.scss';

export default function Edit({ attributes, name, isSelected, setAttributes }) {

  const colors = ColorsLibrary.get();

  const formattedColors = colors.map(color => {
    return {
      name: color.name,
      color: '#' + color.hex
    }
  });

  const getColor = (id) => {
    const color = ColorsLibrary.getByID(id);
    return color ? '#' + color.hex : '';
  };

  const setColor = (hex) => {

    hex = hex.replace('#', '');

    const match = colors.filter(color => color.hex === hex);
    const id = match[0].id;

    console.log('id to set', id)

    setAttributes({ color: id });
  };

  return (
    <div { ...useBlockProps() }>
      {isSelected && <InspectorControls>
        <PanelBody title={__('Color', 'color-block')} initialOpen={true}>
          <ColorPalette
            clearable={false}
            disableCustomColors={true}
            colors={formattedColors}
            value={attributes.color ? getColor(attributes.color) : ''}
            onChange={setColor}
          />
        </PanelBody>
      </InspectorControls>}

      <ServerSideRender
        block={name}
        attributes={attributes}
      />
    </div>
  );
}

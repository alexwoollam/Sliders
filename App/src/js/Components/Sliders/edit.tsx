// @ts-ignore
const {InspectorControls} = wp.blockEditor;
// @ts-ignore
const {TextControl, ToggleControl, PanelBody, PanelRow } = wp.components;

export const SlidersEdit = ({setAttributes, attributes}) => {

    return (
        
        <InspectorControls>
            <PanelBody
                title="Sliders Settings"
                initialOpen={true}>
                <PanelRow>
                    <TextControl
                        label="Slider ID"
                        id="slider-id"
                        value={attributes['slider-id']}
                        onChange={(newValue) => setAttributes({'slider-id': newValue})}
                    />
                </PanelRow>
                <PanelRow>
                    <ToggleControl
                        label="Show Title"
                        id="show-title"
                        checked={attributes['show-title']}
                        onChange={() => setAttributes({'show-title': !attributes['show-title']})}
                    />
                </PanelRow>
                <PanelRow>
                    <ToggleControl
                        label="Show Description"
                        id="show-description"
                        checked={attributes['show-description']}
                        onChange={() => setAttributes({'show-description': !attributes['show-description']})}
                    />
                </PanelRow>
            </PanelBody>
            <PanelBody title="Manage Size">
                <PanelRow>
                    <ToggleControl
                        label="Default (use all available space)"
                        id="use-default-width"
                        checked={attributes['use-default-width']}
                        onChange={() => setAttributes({'use-default-width': !attributes['use-default-width']})}
                    />
                </PanelRow>
                {
                    !attributes['use-default-width'] &&
					<PanelRow>
						<TextControl
							type="number"
							label="Width of slider (%)"
							id="width"
                            min={1}
                            max={100}
                            step={1}
							value={attributes['width']}
							onChange={(newValue) => setAttributes({'width': parseInt(newValue)})}
						/>
					</PanelRow>
                }
            </PanelBody>
        </InspectorControls>
    );
};
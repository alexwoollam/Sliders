import {SlidersEdit} from './edit';
import {SliderPreview} from './preview';

// @ts-ignore
const {registerBlockType} = wp.blocks;


registerBlockType(
    Sliders.namespace+'/'+Sliders.name, { 
        title: Sliders.title,
        icon: Sliders.icon,
        category: Sliders.category,
        attributes: Sliders.attributes,
        edit: (attributes,setAttributes) => {
            return [
                <SliderPreview />,
                <SlidersEdit attributes={attributes} setAttributes={setAttributes} />          
            ];
        },
        save: () => null
    }
);
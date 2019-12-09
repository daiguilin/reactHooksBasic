import React from 'react';
import ShowArea from './showArea';
import Buttons from './Button';
import { Color } from './color';
function Example5() {
    return (
        <div>
            <Color>
                <ShowArea />
                <Buttons />
            </Color>
        </div>
    )
}
export default Example5;
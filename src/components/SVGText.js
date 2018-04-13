import React from 'react'
import PropTypes from 'prop-types'
import style from './SVGText.module.css'

const SVGText = ({text, width, height}) => (

    <svg className={style.svg} style={{
        width: width,
        height: height
    }}>
        <circle cx={35} cy={35} r="33" stroke="white" strokeWidth="3" fill="none" />
        <text x={18} y={42} className={style.text}>
            {text}
        </text>
    </svg>

);

SVGText.propTypes = {
    text: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
};

export default SVGText;
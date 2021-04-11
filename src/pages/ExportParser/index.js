import React from 'react'
import { ReactComponent as FileIcon } from './svg/file.svg'
import { ReactComponent as OtherExportIcon } from './svg/otherExport.svg'
import { ReactComponent as SmarFucntionIcon } from './svg/smartFunction.svg'
import './style.css'


const OptionRender = ({ name, Icon }) => {
    return <div className="option-render">
        <div className="option-render-text">
            {name}
        </div>
        <div>
            <Icon style={{ width: "10vh", height: "10vh", fill: "#8a2846" }} />
        </div>

    </div>
}

export const ExportParser = (props) => {
    return (
        <div className="export-parser-container">
            <div className="export-option-container">
                <OptionRender name="Transformation File" Icon={FileIcon} />
                <OptionRender name="Function Jar" Icon={OtherExportIcon} />
                <OptionRender name="Other Export" Icon={SmarFucntionIcon} />
            </div>
        </div>
    )
}

export default ExportParser
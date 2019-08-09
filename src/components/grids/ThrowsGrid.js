import React from "react";
import utils from "../../utils/utils";

const ThrowsGrid = props => {
    const [score, setScore] = React.useState(0);
    React.useEffect(() => {
        //debugger;
        console.log("[ThrowsGrid.js] effect loaded, throw modifiers set");

        let tempScore = props.throws.reduce((sum, dieThrowData) => sum += dieThrowData.dieThrow, 0);
        if (props.throwsScoreModifiers.filter(x => x.id === 13).length === 1) {
            tempScore = (tempScore % 2 === 0 ? tempScore*2 : Math.floor(tempScore/2));
        }
        setScore(tempScore);
        return () => {
            console.log("[ThrowsGrid.js] clearing effect hook");
        }
    }, [props.throwsScoreModifiers, props.throws]);
    return (
        <>
            <div className="throws-container">
                <div className={"enemy-info-sprite " + props.spriteTex} />
                <div className="scroll-y flex-row-wrap flex-grow-3x">
                    {props.throws.map((dieThrowData, idx) => (
                        <span key={idx} className={"throw-result " + utils.getColorCssForSign(dieThrowData.sign)}>
                            {utils.formatDieThrowToString(dieThrowData)}
                        </span>
                    ))}
                </div>
                <div style={{width: "6%"}}>
                    <div className="throws-sum-container">
                        {score}
                    </div>
                </div>
                {/* <div className="flex-grow" style={{textAlign: "end"}}>
                        {"= " + throws.reduce((sum, dieThrow) => sum += dieThrow, 0)}
                    </div> */}
            </div>
        </>
    );
}

export default ThrowsGrid;
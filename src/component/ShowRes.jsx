import React from 'react';

const ShowRes = (props) => {

    return (
        <div className="result">
            <div className="content-qwest">
                <div className="content-text">
                    <div>
                        <h4>You correct answers {props.balls} of {props.firstQuiz.length}</h4>
                    </div>
                    <div>
                        <h4>You time: {Math.floor((props.timer % (60 * 60 * 24)) / (60 * 60))} hours, {Math.floor((props.timer % (60 * 60)) / (60))} minuts, {Math.floor((props.timer % (60)) / 1)} second.</h4>
                        {props.complit}
                    </div>
                </div>

                <div className="content-btn">
                    <button onClick={props.startTest}>Restert test</button>
                    <button onClick={props.changeQuiz}>Select new quiz</button>
                </div>

            </div>
        </div>
    );
};

export default ShowRes;
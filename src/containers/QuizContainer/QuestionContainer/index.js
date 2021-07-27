import React from 'react';
import questions from './questions';

// material ui components
import { Box, Collapse, Divider } from '@material-ui/core';

// core components
import QuestionStep from 'components/QuestionStep/QuestionStep';

const QuestionContainer = ({ onChange }) => {
    const [category, setCategory] = React.useState(null);
    const [pc, setPC] = React.useState(null);

    React.useEffect(() => {
        if (category !== null && pc !== null) {
            onChange && onChange([category, pc]);
        }
    }, [pc, category, onChange]);

    return (
        <Box>
            <Divider />
            <QuestionStep
                step={1}
                onChange={setCategory}
                questions={questions[1]}
                label="CHOOSE YOUR CATEGORY"
            />
            <Collapse in={category !== null}>
                <Divider />
                <QuestionStep
                    step={2}
                    questions={questions[2]}
                    label="CHOSE YOUR PC"
                    onChange={setPC}
                />
            </Collapse>
        </Box>
    );
};

export default QuestionContainer;

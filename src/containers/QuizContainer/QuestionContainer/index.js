import React from 'react';
import { Button, Grid, Box, Collapse } from '@material-ui/core';
import questions from './questions';

// core components
import QuestionStep from 'components/QuestionStep/QuestionStep';

const QuestionContainer = ({ onUpdateQuestion }) => {
    const [openSecond, setOpenSecond] = React.useState(false);
    return (
        <Box>
            <QuestionStep
                questions={questions[1]}
                label="CHOOSE YOUR CATEGORY"
            />
            <Collapse in={openSecond}>
                <QuestionStep questions={questions[2]} label="CHOSE YOUR PC" />
            </Collapse>
        </Box>
    );
};

export default QuestionContainer;

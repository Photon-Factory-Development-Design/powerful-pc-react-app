import React from 'react';

// material ui components
import Box from '@material-ui/core/Box';

// core components
import Button from 'components/Button/Button';
import Typography from 'components/Typography/index';

const QuestionStep = ({ questions, step, label }) => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Box
                width={60}
                height={60}
                borderRadius="50%"
                bgcolor="background.blue">
                <Typography
                    variant="h1"
                    color="white"
                    align="center"
                    fontSize="45px"
                    lineHeight="48px">
                    {step}
                </Typography>
            </Box>
            <Typography
                variant="h3"
                color="black"
                align="center"
                fontSize="45px"
                lineHeight="48px">
                {label}
            </Typography>
            <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center">
                {questions.map((question) => (
                    <Button {...question}></Button>
                ))}
            </Box>
        </Box>
    );
};

export default QuestionStep;

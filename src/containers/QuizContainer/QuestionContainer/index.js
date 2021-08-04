import React from 'react';
import questions from './questions';

// material ui components
import { Box, Collapse, Divider } from '@material-ui/core';

// core components
import QuestionStep from 'components/QuestionStep/QuestionStep';
import { Stepper, Carousel } from 'components';
import { getAsins } from 'common/constant/questions';

const QuestionContainer = ({ onChange }) => {
    const [category, setCategory] = React.useState(null);
    const [pc, setPC] = React.useState(null);
    const [steps, setSteps] = React.useState(['']);
    const [stepperStep, setStepperStep] = React.useState(0);

    const onUpdateStep = (step) => {
        setSteps((prev) => prev.slice(0, step + 1));
        setStepperStep(step);
    };

    React.useEffect(() => {
        if (category !== null && pc !== null) {
            onChange && onChange([category, pc]);
        }
    }, [pc, category, onChange]);

    const onUpdate = (index, value) => {
        if (index === 0) {
            setCategory(value);
            setStepperStep(1);
            setSteps(['', '']);
        } else if (index === 1) {
            setPC(value);
        }
    };

    const getQuestions = () => {
        let newQuestions = questions;
        if (stepperStep === 1 && category) {
            newQuestions[2] = newQuestions[2].filter(
                (question, index) => getAsins([category, index]).length > 0
            );
        }

        return newQuestions;
    };

    return (
        <Box py={2}>
            <Box py={5}>
                <Divider />
            </Box>
            <Stepper
                steps={steps}
                activeStep={stepperStep}
                onUpdateIndex={onUpdateStep}
            />
            <Carousel
                items={[1, 2]}
                activeIndex={stepperStep}
                onSelectQuestion={onUpdate}
                questions={getQuestions()}
            />

            {/* <Collapse in={category !== null}>
                <Divider />
                <QuestionStep
                    step={2}
                    questions={questions[2]}
                    label="CHOOSE YOUR PC"
                    onChange={setPC}
                />
            </Collapse> */}
        </Box>
    );
};

export default QuestionContainer;

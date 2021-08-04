import React from 'react';

// material ui components
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

// core components
import Button from 'components/Button/Button';
import Typography from 'components/Typography/index';

const QuestionStep = ({ questions, step, label, onChange }) => {
    const [question, setQuestion] = React.useState(null);

    React.useEffect(() => {
        if (question !== null) {
            onChange && onChange(question);
        }
    }, [question, onChange]);

    return (
        <Container>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                py={5}>
                <Typography
                    variant="h3"
                    color="black"
                    align="center"
                    fontSize="25px"
                    lineHeight="28px"
                    fontWeight={300}>
                    {label}
                </Typography>
                <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center">
                    {questions.map((_question, idx) => (
                        <Button
                            key={idx}
                            selected={question === idx}
                            onSelect={() => setQuestion(idx)}
                            {..._question}></Button>
                    ))}
                </Box>
            </Box>
        </Container>
    );
};

export default QuestionStep;

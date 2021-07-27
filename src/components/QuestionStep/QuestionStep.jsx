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
            <Box display="flex" flexDirection="column" alignItems="center" py={5}>
                <Box
                    width={60}
                    height={60}
                    borderRadius="50%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bgcolor="background.blue"
                    my={2}>
                    <Typography
                        variant="h1"
                        color="white"
                        align="center"
                        fontSize="30px"
                        lineHeight="32px">
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

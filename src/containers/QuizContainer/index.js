import React from 'react';
import { Container, Box } from '@material-ui/core';
import { BackgroundContainer, Typography } from 'components';
import ProductContainer from './ProductContainer';
import { getAsins } from 'common/constant/questions';
import { defaultAsins as DefaultAsins } from 'common/data/products';
import QuestionContainer from 'containers/QuizContainer/QuestionContainer';

const QuizContainer = React.forwardRef((props, ref) => {
    const [questionPath, setQuestionPath] = React.useState(null);
    const [asins, setAsins] = React.useState(DefaultAsins);

    React.useEffect(() => {
        if (questionPath && questionPath.length === 2) {
            setAsins(getAsins(questionPath));
        }
    }, [questionPath]);

    return (
        <BackgroundContainer ref={ref}>
            <QuestionContainer onChange={setQuestionPath} />

            <Box
                className="adt-results"
                bgcolor="background.lightGray"
                mt={2}
                mb={9}
                pb={6}
                pt={5}>
                <Box mt={5} py={2}>
                    <Typography
                        variant="h3"
                        color="gray"
                        fontSize="22px"
                        lineHeight="24px">
                        RECOMMENDED FOR YOU
                    </Typography>
                </Box>
                <Box my={2} mt={4} bgcolor="background.lightGray">
                    <Container>
                        <ProductContainer
                            setDetailProduct={props.setDetailProduct}
                            asins={asins}
                        />
                    </Container>
                </Box>
            </Box>

            <Box
                className="adt-results"
                bgcolor="background.lightGray"
                pb={6}
                pt={5}
                mt={9}>
                <Box mt={5} py={2}>
                    <Typography
                        variant="h3"
                        color="gray"
                        fontSize="22px"
                        lineHeight="25px">
                        RECOMMENDED ACCESSORIES FOR YOUR PC
                    </Typography>
                </Box>
                <Box my={2} mt={4} bgcolor="background.lightGray">
                    <Container>
                        <ProductContainer
                            setDetailProduct={props.setDetailProduct}
                            asins={asins}
                        />
                    </Container>
                </Box>
            </Box>
        </BackgroundContainer>
    );
});

export default QuizContainer;

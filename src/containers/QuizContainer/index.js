import React from 'react';
import { Container, Box, Button, Collapse } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import { BackgroundContainer, Typography } from 'components';
import ProductContainer from './ProductContainer';
import {
    getAsins,
    getRecommendedText,
    getGoodAccessoryAsins,
    getBestAccessoryAsins
} from 'common/constant/questions';
import { defaultAsins as DefaultAsins } from 'common/data/products';
import QuestionContainer from 'containers/QuizContainer/QuestionContainer';

// styles
import styles from './quizContainerStyle';

const QuizContainer = React.forwardRef((props, ref) => {
    const [questionPath, setQuestionPath] = React.useState(null);
    const [asins, setAsins] = React.useState(DefaultAsins);
    const [accessAsins, setAccessAsins] = React.useState([]);
    const [bestAccessoryAsins, setBestAccessoryAsins] = React.useState([]);
    const [showBest, setShowBest] = React.useState(false);

    React.useEffect(() => {
        if (questionPath && questionPath.length === 2) {
            setAsins(getAsins(questionPath));
            setAccessAsins(getGoodAccessoryAsins(questionPath));
            setBestAccessoryAsins(getBestAccessoryAsins(questionPath));

            setShowBest(false);
        }
    }, [questionPath]);

    console.log(accessAsins);
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
                        {getRecommendedText(questionPath)}
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

            <Container
                classes={{
                    root: props.classes.accessoryContainer
                }}>
                <Box
                    className="adt-results"
                    bgcolor="background.lightGray"
                    pb={6}
                    pt={5}
                    mt={9}>
                    <React.Fragment>
                        {accessAsins.length > 0 && (
                            <Box mt={5} py={2}>
                                <Typography
                                    variant="h3"
                                    color="gray"
                                    fontSize="22px"
                                    lineHeight="25px">
                                    RECOMMENDED ACCESSORIES FOR YOUR PC
                                </Typography>
                            </Box>
                        )}
                        <Box my={2} mt={4} bgcolor="background.lightGray">
                            <ProductContainer
                                setDetailProduct={props.setDetailProduct}
                                asins={accessAsins}
                            />
                        </Box>
                    </React.Fragment>

                    {bestAccessoryAsins.length > 0 && (
                        <Box py={2}>
                            <Button
                                classes={{ root: props.classes.seeMoreButton }}
                                onClick={() => setShowBest(true)}>
                                See More
                            </Button>
                        </Box>
                    )}

                    {bestAccessoryAsins.length > 0 && (
                        <React.Fragment>
                            <Collapse in={showBest}>
                                <Box
                                    my={2}
                                    mt={4}
                                    bgcolor="background.lightGray">
                                    <Container>
                                        <ProductContainer
                                            setDetailProduct={
                                                props.setDetailProduct
                                            }
                                            asins={bestAccessoryAsins}
                                        />
                                    </Container>
                                </Box>
                            </Collapse>
                        </React.Fragment>
                    )}
                </Box>
            </Container>
        </BackgroundContainer>
    );
});

export default withStyles(styles)(QuizContainer);

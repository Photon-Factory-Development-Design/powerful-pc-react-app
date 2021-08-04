import React from 'react';
import { Box } from '@material-ui/core';
import MuiCarousel from 'react-material-ui-carousel';
// core components
import QuestionStep from 'components/QuestionStep/QuestionStep';

// questions

const CarouselItem = ({ index, questions, onSelectQuestion }) => {
    return (
        <Box>
            <QuestionStep
                step={index + 1}
                onChange={(value) => onSelectQuestion(index, value)}
                questions={questions || []}
                label="CHOOSE YOUR CATEGORY"
            />
        </Box>
    );
};

const Carousel = ({ items, questions, activeIndex, onSelectQuestion }) => {
    console.log(activeIndex);
    return (
        <MuiCarousel
            animation="slide"
            index={activeIndex}
            autoPlay={false}
            indicators={false}
            NextIcon={null}
            navButtonsProps={{
                className: '',
                style: {
                    display: 'none'
                }
            }}
            navButtonsWrapperProps={{
                className: '',
                style: {
                    display: 'none'
                }
            }}>
            {items.map((_, index) => (
                <CarouselItem
                    key={index}
                    index={index}
                    onSelectQuestion={onSelectQuestion}
                    questions={questions[index + 1]}
                />
            ))}
        </MuiCarousel>
    );
};

export default Carousel;

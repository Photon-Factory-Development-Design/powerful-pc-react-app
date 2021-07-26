const styles = () => ({
    iconContainer: {
        width: 120,
        height: 120,
        position: 'relative',
        borderRadius: '10px',
        border: '1px solid #999',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FBF5F5',
        overflow: 'hidden',
        '& .triangle': {
            display: 'none',
            borderBottom: '50px solid #00A8E8',
            borderRight: '60px solid transparent',
            position: 'absolute',
            left: 0,
            bottom: 0
        },
        '&.active': {
            backgroundColor: '#3CC0F3',
            '& .triangle': {
                display: 'block'
            }
        },
        '&:hover': {
            backgroundColor: '#3CC0F3',
            '& .triangle': {
                display: 'block'
            }
        },
        '& img': {
            width: 60,
            height: 60
        }
    }
});

export default styles;

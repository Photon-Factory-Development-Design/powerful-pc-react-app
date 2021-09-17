import React from 'react';
// import styled from 'styled-components';
import { Grid, useMediaQuery, useTheme } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import products from 'common/data/products';
import MuiCarousel from 'react-material-ui-carousel';
// import { Typography, Link } from 'components';
import ProductCard from 'components/ProductCard';
import { ProductDetail } from 'components';

import styles from './productContainerStyle';

// util to get products from question value
const getProducts = (asins) =>
    products.filter((product) => asins.includes(product.data.ASIN.value));

const ProductContainer = ({ asins, setDetailProduct, classes }) => {
    const [products, setProducts] = React.useState([]);
    const productDetailRef = React.useRef(null);
    const theme = useTheme();

    // update products for question
    React.useEffect(() => {
        if (asins) {
            setProducts(getProducts(asins) || []);
        }
    }, [asins]);

    React.useEffect(() => {
        if (products.length === 1) {
            productDetailRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }, [products]);

    const _getProducts = () => {
        const newProducts = [];
        products.forEach((_product) => {
            if (
                !newProducts.some(
                    (product) =>
                        product.data.ASIN.value === _product.data.ASIN.value
                )
            ) {
                newProducts.push(_product);
            }
        });

        return newProducts;
    };

    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    const _products = _getProducts();

    console.log('product container', _products.length);

    // render
    return (
        <Grid container direction="row" spacing={5} justify="center">
            {matches ? (
                <React.Fragment>
                    {_products.length > 1 &&
                        _products.map((product, index) => (
                            <ProductCard
                                setDetailProduct={setDetailProduct}
                                key={`product-item-${index}`}
                                product={product}
                                {...product.data}
                            />
                        ))}
                </React.Fragment>
            ) : (
                <MuiCarousel
                    animation="slide"
                    autoPlay={false}
                    navButtonsWrapperProps={{
                        className: classes.navButtonWrapper
                    }}
                    indicators={false}>
                    {_products.length > 1 &&
                        _products.map((product, index) => (
                            <ProductCard
                                setDetailProduct={setDetailProduct}
                                key={`product-item-${index}`}
                                product={product}
                                {...product.data}
                            />
                        ))}
                </MuiCarousel>
            )}
            {_products.length === 1 && _products[0] && (
                <ProductDetail
                    ref={productDetailRef}
                    product={_products[0]}
                    {..._products[0].data}
                />
            )}
        </Grid>
    );
};

export default withStyles(styles)(ProductContainer);

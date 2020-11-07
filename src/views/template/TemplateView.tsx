import React from 'react';
import { Box, Container, Typography, makeStyles } from '@material-ui/core';
import Page from '../../components/Page';

const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: theme.palette.background.dark,
        height: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3),
    },
    image: {
        marginTop: 50,
        display: 'inline-block',
        maxWidth: '100%',
        width: 560,
    },
}));

const TemplateView: React.FC = () => {
    const classes = useStyles();

    return (
        <Page className={classes.root} title="Template">
            <Box display="flex" flexDirection="column" height="100%" justifyContent="center">
                <Container maxWidth="md">
                    <Typography align="center" color="textPrimary" variant="h1">
                        This is a template page
                    </Typography>
                </Container>
            </Box>
        </Page>
    );
};

export default TemplateView;

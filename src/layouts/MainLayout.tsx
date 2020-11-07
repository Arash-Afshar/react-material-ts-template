import React from 'react';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    topRoot: {},
    toolbar: {
        height: 64,
    },
    root: {
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        height: '100%',
        overflow: 'hidden',
        width: '100%',
    },
    wrapper: {
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
        paddingTop: 64,
    },
    contentContainer: {
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
    },
    content: {
        flex: '1 1 auto',
        height: '100%',
        overflow: 'auto',
    },
}));

interface IProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<IProps> = ({ children }: IProps) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className={classes.topRoot} elevation={0}>
                <Toolbar className={classes.toolbar}></Toolbar>
            </AppBar>
            <div className={classes.wrapper}>
                <div className={classes.contentContainer}>
                    <div className={classes.content}>{children}</div>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;

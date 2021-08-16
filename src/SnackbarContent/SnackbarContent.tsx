import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { Theme } from '@material-ui/core/styles';
import { createStyles, withStyles, WithStyles } from '@material-ui/styles';
import { SnackbarContentProps } from '../index';

const styles = (theme: Theme) => createStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexGrow: 1,
        [theme.breakpoints.up('sm')]: {
            flexGrow: 'initial',
            minWidth: 288,
        },
    }
});

interface Props extends WithStyles<typeof styles>, SnackbarContentProps { }

const SnackbarContent = forwardRef<HTMLDivElement, Props>(({ classes, className, ...props }, ref) => (
    <div ref={ref} className={clsx(classes.root, className)}  {...props} />
))

export default withStyles(styles)(SnackbarContent);

import React, { memo, forwardRef } from 'react';
import SnackbarContent from '../../SnackbarContent';
import { CustomContentProps } from '../../index';
import makeStyles from '../../utils/makeStyles';
import clsx from 'clsx';

const classes = makeStyles({
    root: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        fontSize: '0.875rem',
        lineHeight: 1.43,
        letterSpacing: '0.01071em',
        color: '#fff',
        alignItems: 'center',
        padding: '6px 16px',
        borderRadius: '4px',
        boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
    },
    lessPadding: {
        paddingLeft: `${8 * 2.5}px`,
    },
    default: {
        backgroundColor: '#313131', // dark grey
    },
    success: {
        backgroundColor: '#43a047', // green
    },
    error: {
        backgroundColor: '#d32f2f', // dark red
    },
    warning: {
        backgroundColor: '#ff9800', // amber
    },
    info: {
        backgroundColor: '#2196f3', // nice blue
    },
    message: {
        display: 'flex',
        alignItems: 'center',
        padding: '8px 0',
    },
    action: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 'auto',
        paddingLeft: '16px',
        marginRight: '-8px',
    },
})

const MaterialDesignContent = forwardRef<HTMLDivElement, CustomContentProps>((props, forwardedRef) => {
    const {
        id,
        message,
        action: componentOrFunctionAction,
        iconVariant,
        variant,
        hideIconVariant,
        style,
    } = props;

    const icon = iconVariant[variant];

    let action = componentOrFunctionAction;
    if (typeof action === 'function') {
        action = action(id);
    }

    return (
        <SnackbarContent
            ref={forwardedRef}
            role="alert"
            style={style}
            className={clsx(
                classes.root,
                { [classes.lessPadding]: !hideIconVariant && icon },
                classes[variant],
            )}
        >
            <div id="notistack-snackbar" className={classes.message}>
                {!hideIconVariant ? icon : null}
                {message}
            </div>
            {action && (
                <div className={classes.action}>{action}</div>
            )}
        </SnackbarContent>
    )
});

export default memo(MaterialDesignContent);
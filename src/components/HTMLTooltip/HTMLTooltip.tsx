import React from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Demo2 from '../../pages/Demo/Demo2';

type Props = {
    JSX: JSX.Element
    JSXContent: JSX.Element
}



const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        minWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}));

export default function HTMLTooltip({ JSX, JSXContent}: Props) {
    return (
        <HtmlTooltip
            enterDelay={500}
            title={
                JSX
            }
        >
            {JSXContent}
        </HtmlTooltip>
    )
}
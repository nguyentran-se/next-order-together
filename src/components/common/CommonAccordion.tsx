import { secondary } from '@/theme/colors/secondary';
import { CARD_BOX_SHADOW } from '@/theme/styles/box-shadow';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionDetails, AccordionProps, AccordionSummary, Accordion as MuiAccordion, SxProps, useTheme } from '@mui/material';
import React from 'react';

function CommonAccordion({
  summary,
  details,
  props,
  enableExpandIcon = true,
  sx,
  summarySx,
  detailsSx,
}: {
  summary: React.ReactNode;
  details: React.ReactNode;
  props?: Partial<AccordionProps>;
  enableExpandIcon?: boolean;
  sx?: SxProps;
  summarySx?: SxProps;
  detailsSx?: SxProps;
}) {
  const theme = useTheme();
  return (
    <MuiAccordion elevation={0} sx={{ mb: 3, boxShadow: CARD_BOX_SHADOW, borderRadius: '4px', ...sx }} {...props}>
      <AccordionSummary
        expandIcon={enableExpandIcon && <ExpandMoreIcon />}
        sx={{
          flexDirection: 'row-reverse',
          backgroundColor: secondary[50],
          ...summarySx,
        }}
      >
        {summary}
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0, ...detailsSx }}>{details}</AccordionDetails>
    </MuiAccordion>
  );
}

export default CommonAccordion;

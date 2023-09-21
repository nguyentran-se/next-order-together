import { secondary } from '@/theme/colors/secondary';
import { CARD_BOX_SHADOW } from '@/theme/styles/box-shadow';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Accordion as MuiAccordion, useTheme } from '@mui/material';
import React from 'react';

function CommonAccordion({ summary, details }: { summary: React.ReactNode; details: React.ReactNode }) {
  const theme = useTheme();
  return (
    <Accordion elevation={0} sx={{ mb: 3, boxShadow: CARD_BOX_SHADOW, borderRadius: '4px' }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          flexDirection: 'row-reverse',
          backgroundColor: secondary[50],
        }}
      >
        {summary}
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>{details}</AccordionDetails>
    </Accordion>
  );
}

export default CommonAccordion;

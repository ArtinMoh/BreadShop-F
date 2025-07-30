import styled from 'styled-components';
import { typography } from '../assets/Styles/typography.js';
import { colors } from '../assets/Styles/colors.js';

/** Used as Heading (h1) in site's body. xlarge font size, black color */
export const Heading1 = styled.h1`
  ${typography.xlarge};
  color: ${colors.textDark};
`;
/** Used as Heading (h2) in site's body for main content title. large font size, black color (#222) */
export const Heading2 = styled.h2`
  ${typography.large};
  color: ${colors.textDark2};
`;
/** Used as Paragraph (p) in site's body for multiple line content in heading. medium font size, black color */
export const ParagraphHeading = styled.p`
  ${typography.medium};
  color: ${colors.textDark};
`;
/** Used as Paragraph (p) in site's body for footer. small font size, black color */
export const ParagraphFooter = styled.p`
  ${typography.small};
  color: ${colors.textDark};
`;
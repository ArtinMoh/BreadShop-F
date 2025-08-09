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
/** Used as Paragraph (p) in site's body for footer or something else. small font size, black color */
export const ParagraphFooter = styled.p`
  ${typography.small};
  color: ${colors.textDark};
`;
/** Used as Paragraph (p) in site's body for footer or something else. font size between small and medium, color: none */
export const ParagraphFooterL = styled.p`
  ${typography.smallL};
`;

// Buttons
export const Button = styled.button`
    padding: 10px 40px;
    border-radius: 30px;
    background: linear-gradient(157deg, #f69148, #f69148, #ff6a0090);
    border: none;
    color: white;
    font-family: 'instrumentSans-medium';
    cursor: pointer;
    transition: 0.2s;
    border: 2px solid #f69148;
    &:active {
        opacity: 0.9;
    border: 2px solid #ff6a0090;
    border-radius: 10px;
    }
`;
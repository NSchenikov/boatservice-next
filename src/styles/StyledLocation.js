import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Section = styled(motion.section)`
  background: var(--background);
  padding: 100px 20px;
  scroll-margin-top: 80px;
`;

export const MapWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  height: 400px;
  margin: 0 auto 1.5rem auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  position: relative;
`;

export const AddressText = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: var(--text);
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

//for LocationMap
// const MapWrapperx = styled.div`
//   width: 100%;
//   max-width: 800px;
//   height: 400px;
//   min-height: 400px;
//   position: relative;
//   overflow: hidden;
//   margin: 0 auto 1.5rem auto;
//   border-radius: 12px;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
// `;

// const AddressTextx = styled.p`
//   text-align: center;
//   font-size: 1.1rem;
//   color: var(--text);
//   margin-top: 0.5rem;

//   @media (max-width: 768px) {
//     font-size: 1rem;
//   }
// `;
import propTypes from 'prop-types';

// import { SectionWrap } from './SectionStyled';

export function Section({ title, children }) {
  return (
    // <SectionWrap>
    <div>
      <h1>{title}</h1>
      {children}
      </div>
    // </SectionWrap>
  );
}

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};

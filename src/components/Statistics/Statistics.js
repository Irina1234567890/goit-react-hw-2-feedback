// import React, { Component } from 'react';
// import styles from './feedback.module.css';
// class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//     total: 0,
//     positivePercent: 0,
//   };

//   newValue = el => {
//     this.setState(currState => {
//       return {
//         [el]: this.state[el] + 1,
//       };
//     });
//   };

//   countTotalFeedback = el => {
//     this.setState({
//       total: this.state.total + 1,
//     });
//   };

//   countPositiveFeedbackPercentage = () => {
//     this.setState(currState => {
//       return {
//         positivePercent: ((currState.good * 100) / currState.total).toFixed(0),
//       };
//     });
//   };

//   render() {
//     return (
//       <div className={styles.mainBox}>
//         <h2 className={styles.title}>Please leave feedback</h2>
//         <div className={styles.buttonsBlock}>
//           <button
//             type="button"
//             onClick={event => {
//               this.newValue('good');
//               this.countTotalFeedback();
//               this.countPositiveFeedbackPercentage();
//             }}
//           >
//             Good
//           </button>
//           <button
//             type="button"
//             onClick={event => {
//               this.newValue('neutral');
//               this.countTotalFeedback();
//               this.countPositiveFeedbackPercentage();
//             }}
//           >
//             Neutral
//           </button>
//           <button
//             type="button"
//             onClick={event => {
//               this.newValue('bad');
//               this.countTotalFeedback();
//               this.countPositiveFeedbackPercentage();
//             }}
//           >
//             Bad
//           </button>
//         </div>
//         <div className={styles.statisticsBlock}>
//           <h3 className={styles.statistics}>Statistics</h3>
//           <ul className={styles.statList}>
//             <li className={styles.statItem}>Good: {this.state.good}</li>
//             <li className={styles.statItem}>Neutral: {this.state.neutral}</li>
//             <li className={styles.statItem}>Bad: {this.state.bad}</li>
//             <li className={styles.statItem}>Total: {this.state.total}</li>
//             <li className={styles.statItem}>
//               Positive feedback: {this.state.positivePercent}%
//             </li>
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }

// export default Feedback;




import propTypes from 'prop-types';

import { StatsList, StatsItem, StatsText } from './Statistics.styled';

export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <StatsList className="statistics-list">
      <StatsItem className="statistics-list__item">
        <StatsText className="statistics-list__item-text">
          Good: {good}
        </StatsText>
      </StatsItem>
      <StatsItem className="statistics-list__item">
        <StatsText className="statistics-list__item-text">
          Neutral: {neutral}
        </StatsText>
      </StatsItem>
      <StatsItem className="statistics-list__item">
        <StatsText className="statistics-list__item-text">Bad: {bad}</StatsText>
      </StatsItem>
      <StatsItem className="statistics-list__item">
        <StatsText className="statistics-list__item-text">
          Total: {total}
        </StatsText>
      </StatsItem>
      <StatsItem className="statistics-list__item">
        <StatsText className="statistics-list__item-text">
          Positive feedback: {positivePercentage}
        </StatsText>
      </StatsItem>
    </StatsList>
  );
}

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.string.isRequired,
};

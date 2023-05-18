import PropTypes from 'prop-types';

import { StatItem, StatTitle } from './OtherStatistics.styled';

export const OtherStatistics = ({
  total,
  positivePercentage,
  totalTitle,
  percentageTitle,
}) => {
  return (
    <>
      <StatItem>
        <StatTitle>{totalTitle}:</StatTitle>
        <span> {total}</span>
      </StatItem>
      <StatItem>
        <StatTitle>{percentageTitle}:</StatTitle>
        <span> {positivePercentage}%</span>
      </StatItem>
    </>
  );
};

OtherStatistics.propTypes = {
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
  totalTitle: PropTypes.string,
  percentageTitle: PropTypes.string,
};

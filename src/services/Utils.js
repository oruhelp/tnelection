import {additionalDetails} from '../constants/additionalDetails';
import {masterData} from '../constants/masterData';

export const getAllianceDetails = (allianceId) => {
  return additionalDetails?.alliance[allianceId];
};

export const getCountAsText = (likesCount) => {
  if (!likesCount) return '0';
  if (likesCount > 9999999) {
    return (likesCount / 10000000).toFixed(1).replace('.0', '') + 'Cr';
  }
  if (likesCount > 99999) {
    return (likesCount / 100000).toFixed(1).replace('.0', '') + 'Lk';
  }
  if (likesCount > 999) {
    return (likesCount / 1000).toFixed(1).replace('.0', '') + 'K';
  }
  return likesCount;
};

export const getCandidateDetails = (candidateId) => {
  return masterData?.candidates.filter(
    (_candidate) => _candidate.id === candidateId,
  )[0];
};

export const getTotalSeatsOfParty = (partyId) => {
  return masterData.candidates.filter(
    (_candidate) => _candidate.party === partyId,
  ).length;
};

export const getTimestampString = (timestamp) => {
  var inputDate = new Date(timestamp);

  if (
    new Date(timestamp).setHours(0, 0, 0, 0) == new Date().setHours(0, 0, 0, 0)
  ) {
    return (
      inputDate.getHours() +
      ':' +
      (inputDate.getMinutes() < 10
        ? '0' + inputDate.getMinutes()
        : inputDate.getMinutes())
    );
  }
  var monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  return inputDate.getDate() + ' ' + monthNames[inputDate.getMonth()];
};

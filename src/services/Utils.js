import {additionalDetails} from '../constants/additionalDetails';
import {masterData} from '../constants/masterData';

export const getAllianceDetails = (allianceId) => {
  return additionalDetails?.alliance[allianceId];
};

export const getCountAsText = (likesCount) => {
  if (likesCount > 9999999) {
    return (likesCount / 10000000).toFixed(1).replace('.0', '') + 'Cr';
  }
  if (likesCount > 99999) {
    return (likesCount / 100000).toFixed(1).replace('.0', '') + 'lk';
  }
  if (likesCount > 999) {
    return (likesCount / 1000).toFixed(1).replace('.0', '') + 'k';
  }
  return likesCount;
};

export const getCandidateDetails = (candidateId) => {
return masterData?.candidates.filter(_candidate => _candidate.id === candidateId)[0];
}

export const getTotalSeatsOfParty = (partyId) => {
  return masterData.candidates.filter(_candidate => _candidate.party === partyId).length;
}
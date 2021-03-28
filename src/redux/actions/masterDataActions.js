export const override = (masterData) => ({
  type: 'OVERIDE',
  payload: masterData,
});

export const partyLikedLocal = (partyId) => ({
  type: 'PARTY_LIKED',
  payload: partyId,
});

export const partyDislikedLocal = (partyId) => ({
  type: 'PARTY_DISLIKED',
  payload: partyId,
});

export const candidateLikedLocal = (candidateId) => ({
  type: 'CANDIDATE_LIKED',
  payload: candidateId,
});

export const candidateDislikedLocal = (candidateId) => ({
  type: 'CANDIDATE_DISLIKED',
  payload: candidateId,
});

export const constituencyLikedLocal = (constituencyId) => ({
  type: 'CONSTITUENCY_LIKED',
  payload: constituencyId,
});

export const constituencyDislikedLocal = (constituencyId) => ({
  type: 'CONSTITUENCY_DISLIKED',
  payload: constituencyId,
});

export const increaseOpenCount = () => ({
  type:'INCREASE_OPEN_COUNT'
})
function showHalfScores({
  starOff,
  starOn,
  starHalf,
  scoreName,
  size,
}) {
  const elements = $('.app-score');
  if (elements.length == 0) return;
  elements.raty({
    starOff,
    starOn,
    starHalf,
    half:  true,
    hints: [['bad 1/2', 'bad'], ['poor 1/2', 'poor'], ['regular 1/2', 'regular'], ['good 1/2', 'good'], ['gorgeous 1/2', 'gorgeous']],
    size,
    scoreName,
  });
}

function showReadonlyHalfScores({
  starOff,
  starOn,
  starHalf,
  scoreName,
  size,
}) {
  const elements = $('.app-score_readonly');
  if (elements.length == 0) return;
  elements.raty({
    starOff,
    starOn,
    starHalf,
    readOnly: true,
    half:  true,
    size,
    scoreName,
    hints: [['bad 1/2', 'bad'], ['poor 1/2', 'poor'], ['regular 1/2', 'regular'], ['good 1/2', 'good'], ['gorgeous 1/2', 'gorgeous']]
  });
}
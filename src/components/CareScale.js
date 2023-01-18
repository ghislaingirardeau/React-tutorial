function CareScale({ scaleValue, careType }) {
  // recupere ici les props du parent comme parametre
  const range = [1, 2, 3];

  const scaleType = careType === "light" ? "☀️" : "💧";

  return (
    <div>
      {careType} :
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? ( // si true pour chaque rangeElem alors retourne un span
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;

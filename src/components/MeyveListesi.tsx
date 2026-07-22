function MeyveListesi() {
  const meyveler = ["Elma", "Armut", "Muz", "Çilek"];

  return(
    <ul>
        {meyveler.map((meyve) => (
            <li key={meyve}>{meyve}</li>
        ))}
    </ul>
  )
}

export default MeyveListesi;
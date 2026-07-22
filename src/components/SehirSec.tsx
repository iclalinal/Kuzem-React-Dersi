function SehirSec() {
    const sehirler = ["İstanbul", "Ankara", "İzmir", "Bursa", "Antalya"];

    return(
        <select>
            {sehirler.map((s) => (
                <option key={s} value={s}>{s}</option>
            ))}
        </select>
    )
}
export default SehirSec;
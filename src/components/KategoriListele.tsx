
function KategoriListele() {
    
    const menu = [
        {id:1, kategori:"Bilgisayar", urunler:["Laptop","Masaüstü","Tablet"]},
        {id:2, kategori:"Telefon", urunler:["iPhone","Samsung","Xiaomi"]},
        {id:3, kategori:"Beyaz Eşya", urunler:["Buzdolabı","Çamaşır Makinesi","Bulaşık Makinesi"]},
    ];

    return(
        <>
            {menu.map(k => (
                <div key={k.id}>
                    <h2>{k.kategori}</h2>
                    <ul>
                        {k.urunler.map((u, index) => (
                            <li key={index}>{u}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    )
} export default KategoriListele;
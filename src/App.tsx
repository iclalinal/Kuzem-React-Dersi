import Layout from "./components/Layout";
import Alert from "./components/Alert";
import SectionCard from "./components/SectionCard";

function App(){
  return(
    <>
    <Alert variant="info" onDismiss={()=>{alert("Info kapatıldı")}}>
      <strong>Bilgi:</strong> Kayıt yapıldı.
      </Alert>

   <SectionCard title="Duyuru">
        <p>Burası duyuru içeriğidir.</p>
      </SectionCard>

    <Alert variant="warning" onDismiss={()=>{alert("Warning kapatıldı")}}>
      <strong>Uyarı:</strong> Kayıt yaparken bir hata oluştu.
      </Alert>

    <Alert variant="error" onDismiss={()=>{alert("Error kapatıldı")}}>
      <strong>Hata:</strong> Kayıt yapılamadı.
      </Alert>

    <Layout header={<h1>Başlık</h1>} >
      <p>Buraya metin gelecek</p>
    </Layout>
    </>
  )
}
export default App;
interface User{
  name: string;
}

function App() {
  const user: User = {name:"İclal İnal"};
  return <Page user={user} />
}

function Page({user}:{user:User}){
  return <Headers user={user} />
}

function Headers({user}:{user:User}){
  return(
    <div>
      <h1>Merhaba {user.name}</h1>
    </div>
      )}

export default App;

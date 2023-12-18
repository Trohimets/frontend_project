import Styles from './app.module.css'

const App = () =>{
  return (
    <div className={Styles['wrapper']}>
    <header>
      <a href="">Ссылка 1</a>
      <a href="">Ссылка 2</a>
      <a href="">Ссылка 3</a>
      <a href="">Ссылка 4</a>
    </header>
    <aside>Я сайдбар</aside>
    <main>
      <div>
        <img src=""/>
        <h2>Я карточка 1</h2>
        <p>Описание</p>
      </div>
    </main>
    </div>
  );
}

export default App;

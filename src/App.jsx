import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const posts = [
  {
    id: 1,
    title: "Introduzione a JavaScript",
    content: "In questo articolo esploriamo le basi di JavaScript e come iniziare a usarlo per il web development...",
    author: "Mario Rossi",
    date: "2024-11-01"
  },
  {
    id: 2,
    title: "Flexbox in CSS: Guida Completa",
    content: "Flexbox è uno strumento potente per creare layout responsive in CSS. In questa guida, vedremo come funziona e come usarlo...",
    author: "Lucia Bianchi",
    date: "2024-11-05"
  },
  {
    id: 3,
    title: "Asincronicità in JavaScript: Callback, Promises e Async/Await",
    content: "Gestire il codice asincrono in JavaScript è fondamentale per lavorare con le API e migliorare le performance delle applicazioni...",
    author: "Giuseppe Verdi",
    date: "2024-11-10"
  },
  {
    id: 4,
    title: "Creare un Mockup con HTML e CSS",
    content: "Un mockup è una rappresentazione visuale di un'applicazione. In questo articolo vedremo come creare un mockup di base con HTML e CSS...",
    author: "Sofia Neri",
    date: "2024-11-15"
  },
  {
    id: 5,
    title: "Introduzione a React",
    content: "React è una libreria JavaScript per la costruzione di interfacce utente. In questo post, discuteremo i concetti base e come iniziare...",
    author: "Alessandro Blu",
    date: "2024-11-18"
  }
];




function App() {
  const [article, setArticle] = useState(posts)
  const [newArticle, setNewArticle] = useState("")


  function handleSubmit(e) { 
    e.preventDefault()
    
    setArticle([
      ...article,
      {
        id: article.length + 1,
        title: "Introduzione a React",
        content: "New",
        author: "Alessandro Blu",
        date: "2024-11-18"
      }])
    setNewArticle("")
  }

  return (
    <>
      <header>
        <h1>React Form</h1>
      </header>
    
      <main>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id='newArticle'
            value={newArticle}
            onChange={e => setNewArticle(e.target.value)} />
          

          <button type="submit">Aggiungi nuovo articolo</button>
        </form>


        <div className="list">
          <ul>
            {article.map((post, index) => 
              <li key={index}>
                {post.content}
            </li>)}
          </ul>
        </div>
      </main>
    </>
  )
}

export default App

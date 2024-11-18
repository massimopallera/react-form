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
  const [newTitle, setNewTitle] = useState("")
  const [newContent, setNewContent] = useState("")
  const [newAuthor, setNewAuthor] = useState("")

  function handleSubmit(e) { 
    e.preventDefault()
    const year = new Date().getFullYear()
    const month = new Date().getMonth()
    const day = new Date().getDate()

    setArticle([
      ...article,
      {
        id: article.length + 1,
        title: newTitle,
        content: newContent,
        author: newAuthor,
        date: `${year}-${month}-${day}`
      }])
    
    console.log(article);
  }

  return (
    <>
      <header>
        <h1>React Form</h1>
      </header>
    
      <main>
        <div className="container">

        <form onSubmit={handleSubmit}>

            <h2>Title</h2>
            <input
              type="text"
              id='newArticle-id'
              value={newTitle}
              onChange={e =>setNewTitle(e.target.value)}
            />

            <h2>Content</h2>
            <input
              type="text"
              id='newArticle-content'
              value={newContent}
              onChange={e => setNewContent(e.target.value)}
            />

            <h2>Author</h2>
            <input
              type="text"
              id='newArticle-content'
              value={newAuthor}
              onChange={e => setNewAuthor(e.target.value)}
            />


          <div className='submit-button'>
            <button type="submit">Aggiungi nuovo articolo</button>
              
          </div>
        </form>


        <div className="list">
          <ol>
            {article.map((post, index) => 
              <li key={index}>
                {post.content}
            </li>)}
          </ol>
        </div>
      </div>

      </main>
    </>
  )
}

export default App

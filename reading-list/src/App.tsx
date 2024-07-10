import './App.css'

function App() {

  return (
    <main>
      <aside>
        <h1>Prueba tecnica de React</h1>
        <h2>Añadir y eliminar elementos de una lista </h2>

        <form action="">
          <label htmlFor="">
            Elemento a introducir:
            <input
              name='item'
              required
              type="text"
              placeholder='Libros'
            />
          </label>
          <button>Añadir elemento a la lista</button>
        </form>

      </aside>

      <section>
        <h2>Lista de elementos</h2>
        <ul>
          <li>Libro 1</li>
          <li>Libro 2</li>
          <li>Libro 3</li>
          <li>Libro 4</li>
        </ul>
      </section>
    </main>
  )
}

export default App

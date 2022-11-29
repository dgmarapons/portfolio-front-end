fetch('http://127.0.0.1:5500/libros.json').then((response) => response.json()).then((libros) => {
  const nombreDeLibros = libros. map
  ((libro) => libro.nombre); console.log(nombreDeLibros);});
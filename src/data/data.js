export const initialCards = [
  { id: 1, content: '<a>', match: 'href', type: 'tag', description: "La etiqueta A define un hipervínculo." },
  { id: 2, content: 'href', match: '<a>', type: 'attr', description: "El atributo HREFF especifica la dirección de destino del enlace." },
  { id: 3, content: '<img>', match: 'src', type: 'tag', description: "La etiqueta IMG se usa para incrustar imágenes." },
  { id: 4, content: 'src', match: '<img>', type: 'attr', description: "El atributo SORC especifica la ruta de la imagen." },
  { id: 5, content: '<form>', match: 'action', type: 'tag', description: "La etiqueta FORM define un formulario para recoger datos." },
  { id: 6, content: 'action', match: '<form>', type: 'attr', description: "El atributo ACTION indica a dónde enviar los datos del formulario." },
  { id: 7, content: '<input>', match: 'placeholder', type: 'tag', description: "La etiqueta INPUT es un campo donde el usuario puede escribir." },
  { id: 8, content: 'placeholder', match: '<input>', type: 'attr', description: "El atributo PLACEHOLDER muestra un texto de ayuda dentro del campo." },
  { id: 9, content: '<button>', match: 'type', type: 'tag', description: "La etiqueta BUTTON define un botón clickeable." },
  { id: 10, content: 'type', match: '<button>', type: 'attr', description: "El atributo TYPE indica si el botón es para enviar, resetear o un botón simple." },
  { id: 11, content: '<label>', match: 'for', type: 'tag', description: "La etiqueta LABEL define una leyenda para un elemento de interfaz." },
  { id: 12, content: 'for', match: '<label>', type: 'attr', description: "El atributo FOR vincula la etiqueta con el ID de un campo de entrada." }
].sort(() => Math.random() - 0.5);
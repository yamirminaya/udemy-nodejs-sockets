let socket = io()
// ON: Escuchar
socket.on('connect', () => {
  console.log('Conectado al servidor')
})
socket.on('disconnect', () => {
  console.log('Perdimos conexión con el servidor')
})
socket.on('enviarMensaje', (mensaje) => {
  console.log(mensaje)
})

// EMITS: (Emitir) Enviar información
socket.emit(
  'enviarMensaje',
  {
    usuario: 'Yamir',
    mensaje: '¡Hola!',
  },
  (resp) => {
    console.log('Rpta. SERVER:', resp)
  }
)

import { html, render } from 'lit-html';
import { helloworldicpsimple_backend } from 'declarations/helloworldicpsimple_backend';

class App {
  constructor() {
    this.#render();
  }

  #showNames = async () => {
    const names = await helloworldicpsimple_backend.submittedNames();
    document.getElementById('names-list').innerText = names.join(', ');
  };

  #submitMessage = async () => {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;
    await helloworldicpsimple_backend.submitMessage(message);
    messageInput.value = '';
    this.#showMessages();
  };

  #showMessages = async () => {
    const messages = await helloworldicpsimple_backend.submittedMessages();
    document.getElementById('messages-list').innerText = messages.join(', ');
  };

  #render() {
    let body = html`
      <main>
        <h1>🇲🇽 México y 🇹🇭 Tailandia</h1>
        <br />
        <button id="show-names-btn">Mostrar Nombres Enviados</button>
        <div id="names-list"></div>
        <br />
        <input type="text" id="message-input" placeholder="Escribe tu mensaje aquí" />
        <button id="submit-message-btn">Enviar Mensaje</button>
        <div id="messages-list"></div>
      </main>
    `;
    render(body, document.getElementById('root'));
    document
      .getElementById('show-names-btn')
      .addEventListener('click', this.#showNames);
    document
      .getElementById('submit-message-btn')
      .addEventListener('click', this.#submitMessage);
  }
}

export default App;

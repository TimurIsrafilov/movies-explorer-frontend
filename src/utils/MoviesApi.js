class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getInitialMovies() {
    return fetch(`${this._baseUrl}`).then(this._getResponseData);
  }
}

const beatfilmApi = new Api({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin":
      "https://api.nomoreparties.co/beatfilm-movies",
      authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export default beatfilmApi;

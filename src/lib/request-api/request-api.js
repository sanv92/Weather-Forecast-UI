import axios from 'axios'


const CONTENT_TYPE = 'Content-Type'

class RequestApi {
  /**
   * @param {string} serverUri
   * @param {Object} defaultOptions
   */
  constructor(serverUri, defaultOptions = { headers: {} }) {
    this.baseUri = serverUri
    this.options = {
      ...defaultOptions,
      headers: {
        ...defaultOptions.headers || {},
      },
    }
  }

  /**
   * @param {string} method
   * @param {string} url
   * @param {Object} options
   * @returns {Promise<AxiosResponse<any>>}
   */
  request(method, url, options = {}) {
    const fullOptions = {
      method,
      withCredentials: true,
      headers: {
        ...this.options.headers,
        ...options.headers,
        [CONTENT_TYPE]: (options.headers && options.headers[CONTENT_TYPE]) ? options.headers[CONTENT_TYPE] : 'application/json;charset=UTF-8',
      },
      // eslint-disable-next-line unicorn/prevent-abbreviations
      params: options.params,
      data: options.body,
      url: `${this.baseUri}${url}`,
    }

    return axios(fullOptions)
      .then((response) => response.data)
  }

  /**
   * @param {string} url
   * @param {Object} options
   * @returns {Promise<any>}
   */
  get(url, options) {
    return this.request('GET', url, options)
  }

  /**
   * @param {string} url
   * @param {any} body
   * @param {Object} options
   * @returns {Promise<any>}
   */
  post(url, body, options) {
    return this.request('POST', url, { body, ...options })
  }

  /**
   * @param {string} url
   * @param {any} body
   * @param {Object} options
   * @returns {Promise<any>}
   */
  put(url, body, options) {
    return this.request('PUT', url, { body, ...options })
  }

  /**
   * @param {string} url
   * @param {any} body
   * @param {Object} options
   * @returns {Promise<any>}
   */
  patch(url, body, options) {
    return this.request('PATCH', url, { body, ...options })
  }

  /**
   * @param {string} url
   * @param {any} body
   * @param {Object} options
   * @returns {Promise<any>}
   */
  delete(url, body, options) {
    return this.request('DELETE', url, { body, ...options })
  }
}

export const api = new RequestApi('/api')

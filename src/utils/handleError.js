import Notice from './Notice';

export function handleError(error, message = '', errorInMessage = true, type = 'error') {
  let errorMsg = error.message;
  if (error && error.response) {
    errorMsg = `
      status: ${error.response.status}, statusText: ${error.response.statusText}
      method: ${error.response.config.method}, url: ${error.response.config.url}
      ${error.response.config.data ? `requestBody:  ${error.response.config.data} \n` : ''} 
    `;
    if (error.response.data) {
      errorMsg += JSON.stringify(error.response.data);
      console.error(message, error.response);
    } else {
      errorMsg += JSON.stringify(error.response);
      console.error(message, error.response);
    }
  } else {
    console.error(message, error);
  }
  if (message) {
    message += '\n';
    Notice[type](`${message}${errorInMessage ? errorMsg : ''}`);
  }
  return `${message}${errorMsg}`;
}

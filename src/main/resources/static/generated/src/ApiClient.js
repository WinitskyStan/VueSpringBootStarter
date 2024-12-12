class ApiClient {
constructor() {
this.basePath = 'http://localhost:8080';
}

callApi(path, method, queryParams, body) {
const request = window.superagent[method.toLowerCase()](this.basePath + path);
if (queryParams) request.query(queryParams);
if (body) request.send(body);
return request.then(response => response.body);
}
}

export default ApiClient;
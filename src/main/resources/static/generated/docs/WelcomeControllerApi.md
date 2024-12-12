# OpenApiDefinition.WelcomeControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRandomWelcome**](WelcomeControllerApi.md#getRandomWelcome) | **GET** /welcome | 



## getRandomWelcome

> WelcomeMessage getRandomWelcome()



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.WelcomeControllerApi();
apiInstance.getRandomWelcome().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**WelcomeMessage**](WelcomeMessage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


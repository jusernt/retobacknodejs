// this file was generated by serverless-auto-swagger
            module.exports = {
  "swagger": "2.0",
  "info": {
    "title": "retobacknodejs01",
    "version": "1"
  },
  "paths": {
    "/people": {
      "get": {
        "summary": "myList",
        "description": "",
        "operationId": "myList.get./people",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      },
      "post": {
        "summary": "myCreate",
        "description": "",
        "operationId": "myCreate.post./people",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "name",
            "in": "body",
            "required": true,
            "type": "string"
          },
          {
            "name": "height",
            "in": "body",
            "required": false,
            "type": "integer"
          }
        ],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/people/{id}": {
      "get": {
        "summary": "myGet",
        "description": "",
        "operationId": "myGet.get./people/{id}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/swapi/people/{id}": {
      "get": {
        "summary": "getPeople",
        "description": "swapi, consultar People",
        "operationId": "getPeople.get./swapi/people/{id}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/swapi/planets/{id}": {
      "get": {
        "summary": "getPlanets",
        "description": "swapi, consultar Planets",
        "operationId": "getPlanets.get./swapi/planets/{id}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    }
  },
  "definitions": {},
  "securityDefinitions": {}
};
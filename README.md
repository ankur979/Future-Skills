
# Help center

A brief description of what this project does and who it's for


## API Reference

#### Get all cards

```http
  GET /api/cards
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get cards

```http
  GET /api/cards/${title}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**. The title of the card to fetch |

#### new card

```http
  POST /api/cards
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**. The title of the card to create |
| `description`      | `string` | **Required**. A brief description of the card |


## Installation

Follow these steps to set up and run the project:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/ankur979/Future-Skills.git
   cd Future-Skills
   npm install

*Install Backend Dependencies:*
  ```bash
   cd backend
   npm install
   ```

*Install Frontend Dependencies:*
  ```bash
  cd ../frontend
  npm install
 ```

*Start the Application:*
 ```bash
   cd ..
   npm start
   ```




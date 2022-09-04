# My IMDB
A small version of IMDB built with React, TypeScript, Node.js, Prisma and PostgreSQL.

![imdb_top_movies](https://user-images.githubusercontent.com/104270514/188314689-cdda48de-b754-467c-9564-023f5c253954.jpg)

![imdb_details_page](https://user-images.githubusercontent.com/104270514/188314686-c990616f-59f7-4241-8b04-7622685f79fa.jpg)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

1. Clone this project to your computer with:

```sh
git clone https://github.com/coutinhoa/my-imdb
```

2. Move to the project root directory and install the client and server packages:

```sh
cd my-imdb/client
yarn
```

```sh
cd my-imdb/server
yarn
```

3. On the server folder, setup Prisma:

```sh
cd server
prisma init
prisma generate
prisma push
prisma execute

```

## Usage

1. Run the web application for both the server and the client in the terminal:

```sh
yarn dev
```

2. Access the application through the browser at http://localhost:5173.

3. When clicking on a movie Title, you`ll be redirected to the movie details page.

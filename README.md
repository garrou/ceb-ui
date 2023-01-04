# ceb-ui

Front-end of [ceb-api](https://github.com/garrou/ceb-api)       

## Docker

### Pull & Run

[Docker Hub](https://hub.docker.com/r/garrou/ceb-ui)

```sh
docker pull garrou/ceb-ui
docker run --name ceb-ui --rm -d -p 80:80 garrou/ceb-ui
```

### Build & Run

```sh
git clone https://github.com/garrou/ceb-ui
cd ceb-ui
docker build -t ceb-ui .
docker run --name ceb-ui --rm -d -p 80:80 ceb-ui
```

## Web

[Access](http://localhost)

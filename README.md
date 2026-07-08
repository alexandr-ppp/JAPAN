# Japan 2026

Интерактивный статический сайт по плану поездки в Японию.

## Быстрый запуск через Docker Compose

```bash
git clone git@github.com:alexandr-ppp/JAPAN.git
cd JAPAN
docker compose up -d --build
```

Если на сервере не настроен SSH-ключ для GitHub:

```bash
git clone https://github.com/alexandr-ppp/JAPAN.git
cd JAPAN
docker compose up -d --build
```

После запуска сайт будет доступен на:

```text
http://SERVER_IP:8080
```

Порт можно поменять через переменную `PORT`:

```bash
PORT=80 docker compose up -d --build
```

## Запуск без Compose

```bash
docker build -t japan-site .
docker run -d --name japan-site --restart unless-stopped -p 8080:80 japan-site
```

## Обновление на сервере

```bash
git pull
docker compose up -d --build
```

## Управление контейнером

```bash
docker compose ps
docker compose logs -f
docker compose down
```

## Структура

```text
japan-site/           # статический сайт
nginx/default.conf    # nginx-конфиг контейнера
Dockerfile            # production image
docker-compose.yml    # быстрый запуск на сервере
```

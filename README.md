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
http://SERVER_IP
https://japan.feast-bridge.ru
```

HTTP/HTTPS порты можно поменять через переменные:

```bash
HTTP_PORT=8080 HTTPS_PORT=8443 docker compose up -d --build
```

## Запуск без Compose

```bash
docker build -t japan-site .
docker run -d --name japan-site --restart unless-stopped -p 80:80 -p 443:443 japan-site
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
Caddyfile             # домен, HTTPS и static server
Dockerfile            # production image
docker-compose.yml    # быстрый запуск на сервере
```

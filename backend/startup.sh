#!/bin/bash
cd /usr/src/app
sed -i -e "s/^DATABASE_URL.*/DATABASE_URL=postgresql:\/\/${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}\/${POSTGRES_NAME}/g" /usr/src/app/.env
cat .env

# wait for postgres


until psql postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}\/${POSTGRES_NAME} -c '\l'; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

>&2 echo "Postgres is up - executing command"


python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py collectstatic --noinput
service nginx start
gunicorn config.wsgi:application --bind=unix:/var/run/gunicorn/gunicorn.sock
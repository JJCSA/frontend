#### All this is for local environment testing.

docker network create jjcsa


# -------- frontend -------- #

docker stop frontend && docker rm frontend

# docker build -t frontend:latest --build-arg npm_config_loglevel=debug --no-cache .
docker build -t frontend:latest --build-arg npm_config_loglevel=error .

docker run --name frontend \
    -p 8888:80 \
    -d frontend:latest


docker logs -f frontend

open http://localhost:8888


# https://typeofnan.dev/how-to-serve-a-react-app-with-nginx-in-docker/



# -------------------------- #






# -------- docker system -------- #
docker system df
docker system prune --all
docker system prune --volumes 



docker stop frontend && docker rm frontend
docker stop backend && docker rm backend
docker stop keycloak && docker rm keycloak
docker stop postgres && docker rm postgres


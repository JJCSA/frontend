#### All this is for local environment testing.

docker network create jjcsa


# -------- frontend -------- #

docker stop frontend && docker rm frontend

# docker build -t jjcsa-frontend:latest --build-arg npm_config_loglevel=debug --no-cache .
docker build -t jjcsa-frontend:latest --build-arg npm_config_loglevel=error .

docker run --name frontend \
    -p 8888:80 \
    -d jjcsa-frontend


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

# -------- AWS FrontEnd Build + Push --------

aws ecr get-login-password --profile jjcsaDD --region us-east-2 | docker login --username AWS --password-stdin 247935169035.dkr.ecr.us-east-2.amazonaws.com
docker build -t jjcsa-frontend:latest --build-arg npm_config_loglevel=error .

docker tag jjcsa-frontend:latest 247935169035.dkr.ecr.us-east-2.amazonaws.com/jjcsa-frontend:latest
docker push 247935169035.dkr.ecr.us-east-2.amazonaws.com/jjcsa-frontend:latest

docker tag jjcsa-frontend:latest 247935169035.dkr.ecr.us-east-2.amazonaws.com/jjcsa-frontend:b756874
docker push 247935169035.dkr.ecr.us-east-2.amazonaws.com/jjcsa-frontend:b756874



## JJCSA-Stage
aws ecr get-login-password --profile jjcsaDD --region us-east-2 | docker login --username AWS --password-stdin 247935169035.dkr.ecr.us-east-2.amazonaws.com
docker pull 247935169035.dkr.ecr.us-east-2.amazonaws.com/jjcsa-frontend:latest

aws ecr get-login-password --profile jjcsaStageDD --region us-east-2 | docker login --username AWS --password-stdin 477908470333.dkr.ecr.us-east-2.amazonaws.com

docker tag 247935169035.dkr.ecr.us-east-2.amazonaws.com/jjcsa-frontend:latest 477908470333.dkr.ecr.us-east-2.amazonaws.com/jjcsa-frontend:aws-cfn-jjcsa
docker push 477908470333.dkr.ecr.us-east-2.amazonaws.com/jjcsa-frontend:aws-cfn-jjcsa

docker tag 247935169035.dkr.ecr.us-east-2.amazonaws.com/jjcsa-frontend:latest 477908470333.dkr.ecr.us-east-2.amazonaws.com/jjcsa-frontend:b756874
docker push 477908470333.dkr.ecr.us-east-2.amazonaws.com/jjcsa-frontend:b756874

docker tag 247935169035.dkr.ecr.us-east-2.amazonaws.com/jjcsa-frontend:latest 477908470333.dkr.ecr.us-east-2.amazonaws.com/jjcsa-frontend:stable
docker push 477908470333.dkr.ecr.us-east-2.amazonaws.com/jjcsa-frontend:stable

docker tag 247935169035.dkr.ecr.us-east-2.amazonaws.com/jjcsa-frontend:latest 477908470333.dkr.ecr.us-east-2.amazonaws.com/jjcsa-frontend:latest
docker push 477908470333.dkr.ecr.us-east-2.amazonaws.com/jjcsa-frontend:latest





aws ecr get-login-password --profile jjcsaStageDD --region us-east-2 | docker login --username AWS --password-stdin 477908470333.dkr.ecr.us-east-2.amazonaws.com
docker build -t jjcsa-frontend:latest --build-arg npm_config_loglevel=error .

docker tag jjcsa-frontend:latest 477908470333.dkr.ecr.us-east-2.amazonaws.com/jjcsa-frontend:latest
docker push 477908470333.dkr.ecr.us-east-2.amazonaws.com/jjcsa-frontend:latest

docker tag jjcsa-frontend:latest 477908470333.dkr.ecr.us-east-2.amazonaws.com/jjcsa-frontend:3a27472
docker push 477908470333.dkr.ecr.us-east-2.amazonaws.com/jjcsa-frontend:3a27472

docker tag jjcsa-frontend:latest 477908470333.dkr.ecr.us-east-2.amazonaws.com/jjcsa-frontend:aws-cfn-jjcsa
docker push 477908470333.dkr.ecr.us-east-2.amazonaws.com/jjcsa-frontend:aws-cfn-jjcsa

## Update Frontend Stage
aws ecs update-service \
    --profile jjcsaStageDD --region us-east-2 \
    --cluster JJCSA-ECS-ECSCluster-DDCb0xV7qQFv \
    --service JJCSA-ECS-FrontendECSService-tbpkdR8583gj \
    --task-definition Frontend \
    --desired-count 1 \
    --force-new-deployment



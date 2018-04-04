#/bin/bash
npm run prestart:prod
docker stop shijh.node
docker rm shijh.node
docker rmi shijh.node

docker build -t shijh.node .

docker run -d --name shijh.node -p 7777:4000 shijh.node

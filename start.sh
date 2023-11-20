git pull
yarn --registry=https://registry.npm.taobao.org/ && yarn build
#删除容器
docker rm -f jjwu27_1 &> /dev/null
#启动容器
docker run -d --restart=on-failure:5\
    -p 8080:80 \
    -v $PWD/dist:/usr/share/nginx/html \
    --name jjwu27_1 nginx
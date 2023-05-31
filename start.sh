#!/bin/bash

CONTAINER_NAME="kaze-dsbot-container"
IMAGE_NAME="kaze-dsbot-image"

# Check if the image exists locally
if [[ "$(docker images -q $IMAGE_NAME 2> /dev/null)" == "" ]]; then
    echo "Image $IMAGE_NAME does not exist. Building the image..."
    docker-compose build
fi

# Run the container
docker-compose up

# Stop and remove the container
docker stop $CONTAINER_NAME
docker rm $CONTAINER_NAME

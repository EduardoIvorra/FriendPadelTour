echo "To run this scrip it is necessary to be on the directory webapp1, make sure that you have the project on your machine and the directory is correct. If you need to clone the project press Y"
read VAR
if [[ $VAR = Y && $VAR = y ]]
then
    mkdir FriendsPadelTourApp
    cd FriendsPadelTourApp
    git clone https://github.com/CodeURJC-DAW-2020-21/webapp1
fi


rem CREATE THE .JAR WITH THE PROJECT
cd "FriendsPadelTour/friends_padel_tour"
docker run --rm -v "$PWD":/data -w /data maven mvn package



rem COPY THE .JAR ON THE DOCKER FOLDER
set BUILD_FILENAME=\target\marketplace-0.0.1-SNAPSHOT.jar
set DEST_FILENAME=DOCKER



rem  TO BE SURE ON THE JAR
cd DOCKER
del *.jar

cd ..
xcopy %BUILD_FILENAME% %DEST_FILENAME%*




rem CREATE THE DOCKER IMAGE WITH THE DOCKERFILE

cd "DOCKER"

rem Build the docker image

docker build -t friendspadeltour .

rem START THE APP WITH THE DB USING DOCKER-COMPOSE

docker-compose up -d


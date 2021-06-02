# FROM mysql

# WORKDIR /data

# COPY . .
# #--ENV MYSQL_ROOT_PASSWORD = root
# CMD mysql < database.sql

FROM debian

RUN apt-get update -y && apt-get install -q -y mariadb-server

WORKDIR /data

COPY . .
#--- ARG pour déclarer une variable locale dans le dockerfile et ENV pour déclarer une variable d'env accessible à la fois dans le dockerfile et conteneur
ENV MYSQL_USER="root"

RUN service mysql start && mysql -u ${MYSQL_USER} < database.sql
CMD bash
# ENTRYPOINT ["bash"]
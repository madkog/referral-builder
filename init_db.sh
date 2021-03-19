RUN /bin/bash -c "/usr/bin/mysqld_safe --skip-grant-tables &" && \
  sleep 5 && \
  mysql -u root -e "CREATE DATABASE referral_app" && \
  mysql -u root mydb < /tmp/dump.sql
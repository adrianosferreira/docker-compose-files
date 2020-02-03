FROM php:7.3.13-cli-stretch
MAINTAINER Adriano Ferreira <adrianokta@gmail.com>

RUN apt-get update && apt-get install vim -y && \
    apt-get install openssl -y && \
    apt-get install libssl-dev -y && \
    apt-get install wget -y && \
    apt-get install git -y && \
    apt-get install procps -y && \
    apt-get install htop -y && \
    apt-get install zip -y && \
    apt-get install unzip

RUN cd /tmp && git clone https://github.com/swoole/swoole-src.git && \
    cd swoole-src && \
    git checkout v4.4.15 && \
    phpize  && \
    ./configure  --enable-openssl && \
    make && make install

RUN touch /usr/local/etc/php/conf.d/swoole.ini && \
    echo 'extension=swoole.so' > /usr/local/etc/php/conf.d/swoole.ini

RUN docker-php-ext-install pdo_mysql

RUN wget -O /usr/local/bin/swoolefor https://github.com/mix-php/swoolefor/releases/download/v1.1.7/swoolefor.phar
RUN chmod +x /usr/local/bin/swoolefor

RUN apt-get update; \
    apt-get install wget zip unzip; \
    yes | apt-get install git; \
    /usr/bin/wget https://get.symfony.com/cli/installer -O - | bash; \
    mv /root/.symfony/bin/symfony /usr/local/bin/symfony;

RUN wget -O /usr/local/bin/composer-setup.php https://getcomposer.org/installer; \
    php /usr/local/bin/composer-setup.php; \
    php -r "unlink('/usr/local/bin/composer-setup.php');"; \
    mv composer.phar /usr/local/bin/composer;

CMD test ! -f /app/symfony.lock && \
    composer create-project symfony/website-skeleton app && \
    cd app && \
    composer require k911/swoole-bundle && \
    sed -i "s?];?K911\\\Swoole\\\Bridge\\\Symfony\\\Bundle\\\SwooleBundle::class => ['all' => true]];?g" config/bundles.php && \
    sed -i 's;^DATABASE_URL=.*;DATABASE_URL=mysql://admin:1@db:3306/app?serverVersion=5.7;' .env && \
    cd ..; \
    cd app && \
    #bin/console swoole:server:run;
    /usr/local/bin/swoolefor --exec="/app/bin/console swoole:server:run" --no-inotify
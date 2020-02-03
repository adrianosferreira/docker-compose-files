FROM php:7.1-apache
MAINTAINER Adriano Ferreira <adrianokta@gmail.com>

RUN pecl install redis \
    && pecl install xdebug-2.8.1 \
    && docker-php-ext-enable redis xdebug
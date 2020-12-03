# RailTableWeb

## Developoing locally

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Testing docker locally

To build image run 'docker build . -t rail-table-web:1.0'
To run image (and us it as contaienr) run 'docker run -p 3000:80 rail-table-web:1.0'
On localhost:3000 application will be waiting not only as angular app, but as dockerised nginx server with angular inside

## Deploying on heroku
Heroku requires creation 'backdoor' to web server - heroku defines number of port, that's why it needs to have way to change it in web server. $PORT is defined in nginx.conf, and it's exposed in dockerfile in 'CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;''.

To deploy docker image to heroku run 'heroku container:push web -a rail-table-web' from app direcotry. It read dockerfile, and based on it create image and push it to heroku.

To run image on heroku run 'heroku container:release web -a rail-table-web' from app dir. Then 'heroku open -a rail-table-web', and app from heroku should open.


### Resources:
1. https://dev.to/usmslm102/containerizing-angular-application-for-production-using-docker-3mhi 
2. http://coding-karma.com/2018/10/14/docker-deployment-angular-5-application-to-heroku/
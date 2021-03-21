# gulp-frontend-boilerplate
### Installation
1. install Node.js <https://nodejs.org/en/>
2. install global GULP: run npm install --global gulp-cli https://gulpjs.com/docs/en/getting-started/quick-start
3. download repository https://github.com/kmv-dev/gulp-start
4. run **npm i**  terminal

### Quick Start

```
run "gulp" in terminal
```
### build project

```
run "gulp build" in terminal
```

### include html

```html
        <!DOCTYPE html>
        <html>
        <head>
            <title>include html</title>
        </head>
        <body>
            <!--=include ./module/header.html -->
            <main class="content">
              content
            </main>
            <!--=include ./module/footer.html -->
        </body>
        </html>
```

### url img
+ **scss** background-image: url('../assets/img/image.jpg');
+ **html** style="background-image: url('./assets/img/image.jpg')"
+ **< img >** src="./assets/img/image.jpg"

### media scss
setting mixin/media **src/scss/mixin/media.scss**

setting media query permissions **src/scss/variables/media.scss**

+ $mediaXS: 0px ;
+ $mediaSM: 768px;
+ $mediaMD: 1024px;
+ $mediaLG: 1440px;
+ $mediaXM: 1600px;
+ $mediaXL: 1920px;
+ $mediaMAX: 999999px;

```scss
    &__div {
        width: 100px;
        height: auto;
        @include mediaXS {
            //width: 30px;
            //max-height: 50px;
        }
    }
```

### live reload
+ html
+ js
+ css

### compression img
+ .jpg
+ .svg
+ .png


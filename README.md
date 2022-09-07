# time-tracking-web-app

Frontend for the Personal Time Tracking App. It allows for such that users should be a able to input their checkin, view it,
and have it visualize through charts.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Project Structure

The project follows a simple Vue JS structure with the App.vue file and the components directory serving as the foundation for the visuals of this project.

#### App.vue

Contains the main view / the root for this Vue project. This is where Nav Bars / App Bars are commonly located.

#### main.js

The main javascript file that renders App.vue

#### src/components

Contains the web components such as forms, charts, small views that can be used and imported in other components 
or pages to build the content for this project.

#### src/router

Contains the router code to enable navigation between pages.

#### src/store

Contains the Vuex store that contains modules for State Management. For this project, there are two main modules namely, the auth 
module that takes care of the authentication as well as token handling, and the checkins which handles the checkins as well fetching data from 
the backend API, perform create and delete operations, as well as parse the data for it to be visualized in charts.

#### src/views

Contains the Pages to which users can navigate to using the router.

##### Landing Page / Login
![image](https://user-images.githubusercontent.com/48959530/188934600-60b58510-9b71-4226-9c3a-e1eaba7490b1.png)

##### Checkins
![image](https://user-images.githubusercontent.com/48959530/188935681-eed0a67b-f82f-4d78-9593-02483d92a6e4.png)

##### Charts 
![image](https://user-images.githubusercontent.com/48959530/188935967-c51b7fa1-c3c4-4b9c-8de8-b8195981c131.png)

![image](https://user-images.githubusercontent.com/48959530/188936041-8972abcf-7b0d-46a3-9447-1afa7a2da8c4.png)

### Challenges

The main challenge for this frontend piece is being bothered by the UI/UX in itself. I haven't had much professional experience working with frontend
and as such it is a struggle writing code for this part. The deployment part was easier than the backend due to available web hosting services however the disparity between http and https prevents the marriage between the frontend and backend to finally deploy the time-tracking web application.

### Future Improvements

1. The User interface needs improvement. The UX can be improved by adding loading components and the transitions between state changes could use minor animation changes like snackbars for example.
2. The structure of the Vuex can be further improved and refactored.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

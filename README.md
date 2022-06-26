# FisicAI Vue

## About the project

Implementation of a frontend to interact with the backend builded in Node.

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

## How to use it

We have two ways of use
- Put the problem in the big textarea en press "Resolver". Then you can see all the data, requested data and resolutions that backend catch.
- Add all the data and the requested data in fields manually

#### Send all the problem

The program will recognize all data and the requested data in the problem and show it with the correspondant solution. 

Take care of the response. If you see that some data are incorrect (Incorrect unit, value or some data are not recognized) you can add it, or edit, manually and send it again but with the button "Resolver con datos".

#### Complete all the data manually

##### Datos solicitados
You need add only names of data in lowercase and replace spaces with underscores. Some of the data that program recognize:

aceleracion, distancia, velocidad_final, velocidad_inicial, tiempo, velocidad, etc

##### Datos obtenidos
You need add name of data in lowercase and replace spaces with underscores (aceleracion, distancia, velocidad, velocidad_final, etc), value (15, 20, etc) and unit (km/h, s, m/s2, etc). So, if you need add 30 metters per second, you need add:
- name: velocidad
- value: 30
- unit: m/s

After all the data is completed, we need press "Resolver con datos" and you receive the response and the calculations




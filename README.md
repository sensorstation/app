# Sensor Station Dashboard UI

## Project setup

### Important

In order for the sensor data to be displayed, you need to run the sensorstation websocket server.

### Scripts

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

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Environment Variables

There's a file named `.env.local.example`, which you can copy and rename to `.evn.local`, which will be used by Vue to inject Environment Variables in the code.

For now, the only environment variable is the WebSocket API URL.

| Environment Variable        | Description                                                                                                   |
| --------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `VUE_APP_WEBSOCKET_API_URL` | WebSocket API URL and port number. Won't be able to fetch sensor data without this. Example: `localhost:8081` |

For more information on Vue and Environment Variables, see [Vue.js: Modes and Environment Variables](https://cli.vuejs.org/guide/mode-and-env.html#modes-and-environment-variables)

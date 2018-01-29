module.exports = {
  apps : [
      {
        name: "server",
        script: "./dist/main.js",
        watch: true,
        env: {
            "PORT": 4000,
            "NODE_ENV": "development"
        },
        env_dev: {
            "PORT": 4000,
            "NODE_ENV": "development"
        },
        env_pro: {
            "PORT": 4000,
            "NODE_ENV": "production",
        },
        env_test: {
            "PORT": 4000,
            "NODE_ENV": "test",
        }
      }
  ]
}

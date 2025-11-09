module.exports = {
    apps: [
      {
        name: "sowsiLandingPage",
        script: "server/index.ts",
        // Use tsx as the execution interpreter for .ts files
        interpreter: "tsx",
        // Alternatively, ensure exec_interpreter is set:
        exec_interpreter: "tsx",
        instances: 1,
        exec_mode: "fork",
        watch: false,
        env_production: {
          NODE_ENV: "production",
          PORT: 5027
        }
      }
    ]
  };
  
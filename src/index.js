const http = require('http');

const PORT = 3000;

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>DevOps Node.js App</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(to right, #4facfe, #00f2fe);
      color: #fff;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .container {
      display: flex;
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 20px;
      padding: 40px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
      max-width: 800px;
      align-items: center;
      gap: 30px;
    }
    .girl-icon {
      width: 150px;
    }
    .text {
      text-align: left;
    }
    h1 {
      font-size: 2.5em;
      margin-bottom: 10px;
    }
    p {
      font-size: 1.2em;
      margin: 5px 0;
    }
    footer {
      position: absolute;
      bottom: 20px;
      width: 100%;
      text-align: center;
      font-size: 1em;
      color: #f0f0f0;
    }
  </style>
</head>
<body>

  <div class="container">
    <img class="girl-icon" src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png" alt="Girl pointing" />
    <div class="text">
      <h1>🚀 Welcome to DevOps Node.js App!</h1>
      <p>CI/CD with Git, Docker, Terraform, Ansible & Jenkins</p>
      <p>💡 Seamlessly deployed on AWS Free Tier</p>
    </div>
  </div>

  <footer>
    Developed by Pranjal Shinde © 2025
  </footer>

</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(html);
});

server.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}/`);
});

// src/index.js

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
      text-align: center;
      margin: 0;
    }
    .header-image {
      width: 100%;
      max-height: 300px;
      object-fit: cover;
    }
    .container {
      max-width: 700px;
      margin: auto;
      background-color: rgba(0,0,0,0.2);
      border-radius: 20px;
      padding: 40px 30px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
      margin-top: -30px;
    }
    h1 {
      font-size: 3em;
      margin-bottom: 10px;
    }
    p {
      font-size: 1.3em;
    }
    .icon {
      width: 100px;
      margin: 20px auto;
    }
    footer {
      margin-top: 40px;
      padding: 15px;
      font-size: 1em;
      background-color: rgba(0, 0, 0, 0.2);
      border-top: 1px solid #ccc;
    }
  </style>
</head>
<body>
  <img class="header-image" src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80" alt="DevOps Banner" />

  <div class="container">
    <img class="icon" src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt="Node.js Logo" />
    <h1>🚀 Welcome to DevOps Node.js App!</h1>
    <p>CI/CD with Git, Docker, Terraform, Ansible & Jenkins</p>
    <p>💡 Deployed seamlessly on AWS Free Tier</p>
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

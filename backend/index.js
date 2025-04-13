const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/run', (req, res) => {
    const { command } = req.body;
    exec(`make ${command}`, { cwd: '../' }, (err, stdout, stderr) => {
        res.json({ output: stdout + stderr });
    });
});

app.listen(3000, () => {
    console.log('✅ Dashboard backend lancé sur http://localhost:3000');
});

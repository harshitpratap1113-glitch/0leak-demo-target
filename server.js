/**
 * 0LEAK Security Scanner Demo Server
 * Contains benign demonstration vectors for GitRadar & OSV intelligence testing.
 */

const express = require('express');
const lodash = require('lodash');
const { exec } = require('child_process');

const app = express();
app.use(express.json());

// =========================================================================
// VECTOR 1: SEEDED DEMO CREDENTIAL (High Shannon Entropy String)
// =========================================================================
// Demo Test Key Pattern (Benign dummy test key for scanner calibration)
const STRIPE_TEST_SECRET = "sk_test_51MzDemo0LEAKSecretKeyNeverLeakInProd001928475";
const AWS_MOCK_ACCESS_KEY = "AKIAIOSFODNN7EXAMPLE";

// =========================================================================
// VECTOR 2: UNVALIDATED SINK (AST Taint Detection)
// =========================================================================
app.get('/api/lookup', (req, res) => {
  const targetHost = req.query.host || '127.0.0.1';
  
  // Vulnerable Sink: direct command interpolation
  exec(`nslookup ${targetHost}`, (err, stdout, stderr) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ output: stdout });
  });
});

app.get('/health', (req, res) => {
  res.json({ status: "healthy", platform: "0LEAK Demo Target" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Demo target running on port ${PORT}`);
});

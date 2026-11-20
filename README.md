# 🎯 0LEAK Security Scanner — Official Public Demo Target

[![0LEAK Security Audit](https://img.shields.io/badge/0LEAK-Audit_This_Repo-6366f1?style=for-the-badge&logo=shield)](https://0leak.duckdns.org)
[![Zero-Leak Guarantee](https://img.shields.io/badge/Protection-In--Memory_Only-10b981?style=for-the-badge)](https://0leak.duckdns.org)

> **Benign Security Benchmark**: This repository is an official, safe demonstration codebase intentionally seeded with standard security findings to showcase [0LEAK SecOps Platform](https://0leak.duckdns.org) multi-agency scanning capabilities.

---

## ⚡ How to Test Live on 0LEAK:
1. Open **[0LEAK Security Scanner](https://0leak.duckdns.org)** *(or https://sentinel-secops-platform.vercel.app)*.
2. In the repository box, paste:
   ```text
   harshitpratap1113-glitch/0leak-demo-target
   ```
3. Click **`[ 🛡️ Start Security Audit ]`**.
4. Watch 0LEAK detect **Shannon Entropy**, **High-entropy API Tokens**, **Google OSV Vulnerabilities**, and **AST Injection Sinks** in sub-second time with zero false positives.

---

## 🔍 Seeded Benchmark Vectors in this Target:
* **Vector 1: Shannon Entropy Token Leak** (High-entropy dummy API keys in `server.js`)
* **Vector 2: Known Supply Chain CVEs** (Vulnerable `lodash` & `express` in `package.json` tracked by Google OSV & Snyk)
* **Vector 3: AST Taint & Command Injection Sink** (Unsanitized execution flow in `api/routes.js`)
* **Vector 4: Perimeter Exposure** (Missing security headers in manifest)

---
*Built for safe educational and demonstration purposes with [0LEAK SecOps](https://0leak.duckdns.org).*

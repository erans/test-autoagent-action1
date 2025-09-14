// WARNING: This code has security vulnerabilities for testing purposes
// Trigger build 4

function login(username, password) {
    // SQL injection vulnerability
    const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
    
    // Hardcoded credentials
    const adminUser = 'admin';
    const adminPass = 'password123';
    
    // Insecure direct object reference
    if (username === adminUser && password === adminPass) {
        return { role: 'admin', access: 'full' };
    }
    
    // No input validation
    const result = database.query(query);
    return result;
}

// XSS vulnerability
function displayUser(userInput) {
    return `<div>Welcome ${userInput}</div>`;
}

// Insecure deserialization
function processData(data) {
    return eval(data); // Dangerous!
}

// Missing error handling
function getSecretData() {
    const secret = process.env.SECRET_KEY;
    return secret;
}

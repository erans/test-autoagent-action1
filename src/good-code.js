/**
 * Well-structured authentication module
 */
class AuthService {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.isAuthenticated = false;
    }

    async login(username, password) {
        try {
            // Validate input
            if (!username || !password) {
                throw new Error('Username and password are required');
            }

            // Hash password securely
            const hashedPassword = await this.hashPassword(password);
            
            // Make API call
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.apiKey}`
                },
                body: JSON.stringify({ username, password: hashedPassword })
            });

            if (response.ok) {
                this.isAuthenticated = true;
                return { success: true, token: response.data.token };
            } else {
                throw new Error('Login failed');
            }
        } catch (error) {
            console.error('Login error:', error.message);
            return { success: false, error: error.message };
        }
    }

    async hashPassword(password) {
        // Use proper password hashing
        const crypto = require('crypto');
        return crypto.pbkdf2Sync(password, 'salt', 100000, 64, 'sha512').toString('hex');
    }

    logout() {
        this.isAuthenticated = false;
    }
}

module.exports = AuthService;

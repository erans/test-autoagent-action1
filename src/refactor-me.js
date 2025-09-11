// This code needs refactoring

function processUserData(userData) {
    // Long method with multiple responsibilities
    let result = {};
    
    // Validate user data
    if (userData.name && userData.email && userData.age) {
        if (userData.age > 0 && userData.age < 150) {
            if (userData.email.includes('@')) {
                // Process user data
                result.name = userData.name.toUpperCase();
                result.email = userData.email.toLowerCase();
                result.age = userData.age;
                
                // Calculate category
                if (userData.age < 18) {
                    result.category = 'minor';
                } else if (userData.age < 65) {
                    result.category = 'adult';
                } else {
                    result.category = 'senior';
                }
                
                // Generate ID
                result.id = Math.random().toString(36).substr(2, 9);
                
                // Log result
                console.log('User processed:', result);
                
                return result;
            } else {
                console.log('Invalid email');
                return null;
            }
        } else {
            console.log('Invalid age');
            return null;
        }
    } else {
        console.log('Missing required fields');
        return null;
    }
}

// Duplicate code
function processAdminData(adminData) {
    let result = {};
    
    if (adminData.name && adminData.email && adminData.age) {
        if (adminData.age > 0 && adminData.age < 150) {
            if (adminData.email.includes('@')) {
                result.name = adminData.name.toUpperCase();
                result.email = adminData.email.toLowerCase();
                result.age = adminData.age;
                result.category = 'admin';
                result.id = Math.random().toString(36).substr(2, 9);
                console.log('Admin processed:', result);
                return result;
            } else {
                console.log('Invalid email');
                return null;
            }
        } else {
            console.log('Invalid age');
            return null;
        }
    } else {
        console.log('Missing required fields');
        return null;
    }
}

/**
 * Here i am going to learn the snapshot test
 * It usually do it in frontend .
 */

export function fetchData(userId?: number){
    return {
        id: userId,
        name: "john Doe",
        roles: ['user', 'admin'],
        lastLogin: new Date().toISOString(), // here will give error. give exact date
        preferences: {
            notifications: true,
            theme: "Dark",
        }
    };
}

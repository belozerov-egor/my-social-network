import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": 'bb36931e-ec0c-4605-9b68-f20125e9ce40'
    }
});

export const usersAPI = {
    fetchUsers: (page: number, pageSize: number) => {
    
         return  instance.get(`users?page=${page}&count=${pageSize}`);
       
    },
    follow: async (id: number) => {
        try {
            const response = await instance.post(`follow/${id}`);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },
    unFollow: async (id: number) => {
        try {
            const response = await instance.delete(`follow/${id}`);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },
}

export const profileAPI = {
    getProfile(id: string) {
        return instance.get(`profile/` + id);
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put('profile/status', {status})
    }
}

export const loginApi = {
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete('auth/login')
    }
}

export const authApi = {
    auth() {
        return instance.get('auth/me');

    }
}

// export const fetchUsers = async (page: number, pageSize: number) => {
//     try {
//         const response = await instance.get(`users?page=${page}&count=${pageSize}`);
//         return response.data;
//     } catch (error) {
//         console.error(error);
//     }
// };

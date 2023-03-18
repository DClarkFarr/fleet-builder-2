import { defineStore } from "pinia";
import { ref } from "vue";
import { User } from "@/types/User";
import AuthService, {
    AuthServiceLoginCredentials,
} from "@/services/AuthService";

const useUserStore = defineStore("user", () => {
    const user = ref<User | null>(null);

    const setUser = (u: User | null) => {
        user.value = u;
    };
    const refresh = () => {
        return AuthService.me()
            .then((res) => {
                setUser(res.data.user);

                return res;
            })
            .catch(() => {
                // user not found?
                setUser(null);
            });
    };

    const login = (credentials: AuthServiceLoginCredentials) => {
        return AuthService.login(credentials).then((res) => {
            setUser(res.data.user);

            return res;
        });
    };

    return {
        user,
        setUser,
        refresh,
        login,
    };
});

export default useUserStore;

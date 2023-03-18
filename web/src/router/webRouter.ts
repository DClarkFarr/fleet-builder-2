import useUserStore from "@/stores/useUserStore";
import * as VueRouter from "vue-router";

import routes from "./routes";

const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHistory(),
    routes, // short for `routes: routes`
});

export const registerWebRouter = () => {
    const user = useUserStore();

    router.beforeEach(async (to, from, next) => {
        console.log("before each check", to.name, to.meta);
        if (to.meta?.auth) {
            if (!user.user) {
                await user.refresh();
            }

            if (!user.user) {
                next({ name: "login" });
            } else {
                next();
            }
        } else {
            next();
        }
    });
};
export default router;

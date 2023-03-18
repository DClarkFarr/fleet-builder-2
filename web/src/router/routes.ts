import HomePage from "@/pages/HomePage.vue";
import UserCalcPage from "@/pages/UserCalcPage.vue";
import LoginPage from "@/pages/LoginPage.vue";

const routes = [
    {
        name: "home",
        path: "/",
        component: HomePage,
    },
    {
        name: "user.calc",
        path: "/user/calc",
        component: UserCalcPage,
        meta: {
            auth: true,
        },
    },
    {
        name: "login",
        path: "/login",
        component: LoginPage,
    },
];

export default routes;

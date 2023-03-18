import HomePage from "@/pages/HomePage.vue";
import HullCalcPage from "@/pages/HullCalcPage.vue";
import LoginPage from "@/pages/LoginPage.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: HomePage,
  },
  {
    name: "hull.calc",
    path: "/hull/calc",
    component: HullCalcPage,
  },
  {
    name: "login",
    path: "/login",
    component: LoginPage,
  },
];

export default routes;

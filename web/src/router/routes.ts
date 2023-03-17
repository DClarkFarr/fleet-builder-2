import HomePage from "@/pages/HomePage.vue";
import HullCalcPage from "@/pages/HullCalcPage.vue";

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
];

export default routes;

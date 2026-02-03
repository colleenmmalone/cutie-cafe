import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts, NavLink, Link } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  if (request.method.toUpperCase() === "HEAD") {
    return new Response(null, {
      status: responseStatusCode,
      headers: responseHeaders
    });
  }
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
function Footer() {
  return /* @__PURE__ */ jsxs("div", { className: "w-full min-h-[300px] flex flex-1 flex-row items-left justify-between bg-[#bb99ff] py-2 px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full min-h-[300px] flex flex-col items-left justify-center gap-6", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-white text-2xl", children: "Cute Cafe" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "123 Cutie Cafe Ct",
        /* @__PURE__ */ jsx("br", {}),
        "NYC, NY"
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Mon - Thurs : 9am - 7pm",
        /* @__PURE__ */ jsx("br", {}),
        "Fri - Sat : 9am - 9pm",
        /* @__PURE__ */ jsx("br", {}),
        "Sun : Closed"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-1 items-center justify-center", children: /* @__PURE__ */ jsx("p", { className: "text-9xl", children: "☕" }) })
  ] });
}
function NavTop() {
  return /* @__PURE__ */ jsxs("nav", { className: "w-full flex flex-1 sm:flex-row flex-col items-center justify-between bg-[#bb99ff] py-2 px-8", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-white text-2xl", children: "Cute Cafe" }),
    /* @__PURE__ */ jsx("ul", { className: "flex flex-row space-x-4 ", children: resources$1.map(({ href, text }) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
      NavLink,
      {
        className: ({ isActive }) => isActive ? `${linkStyle} bg-[#63a] text-white` : `${linkStyle} text-[#63a]`,
        to: href,
        rel: "noreferrer",
        children: text
      }
    ) }, href)) })
  ] });
}
const linkStyle = "group flex items-center gap-3 self-stretch p-3 leading-normal border-2 border-transparent hover:border-b-inherit ";
const resources$1 = [
  {
    href: "/",
    text: "Home"
  },
  {
    href: "/about",
    text: "About"
  },
  {
    href: "/menu",
    text: "Menu"
  }
];
const layout = UNSAFE_withComponentProps(function Layout2() {
  return /* @__PURE__ */ jsxs("div", {
    className: "flex-1 flex flex-col items-center min-h-0",
    children: [/* @__PURE__ */ jsx(NavTop, {}), /* @__PURE__ */ jsx(Outlet, {}), /* @__PURE__ */ jsx(Footer, {})]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: layout
}, Symbol.toStringTag, { value: "Module" }));
function Hero() {
  return /* @__PURE__ */ jsx("div", { className: "w-full m-0 p-0", children: /* @__PURE__ */ jsx("div", { className: "hero-splash h-[calc(100vh-95px)] sm:h-[calc(100vh-64px)] w-screen p-0 m-0 bg-cover bg-center overflow-scroll", children: /* @__PURE__ */ jsx("div", { className: "h-[200%] flex items-center", children: /* @__PURE__ */ jsx("h1", { className: "text-white text-4xl text-center mt-auto mb-[50vh] mx-auto border-1 rounded-lg py-2 px-6 bg-[#3079]", children: "Where caffeine meets cute!" }) }) }) });
}
function Card(props) {
  return /* @__PURE__ */ jsx("div", { className: "flex-1 flex flex-col items-center gap-12 p-6 py-16 min-h-0 bg-white my-16 min-w-[80%] rounded-3xl", children: props.children });
}
function BtnSeeMenu() {
  return /* @__PURE__ */ jsx(Link, { to: "/menu", children: /* @__PURE__ */ jsx("button", { className: "rounded-xl bg-[#880088] text-white py-4 px-6", children: "See the Menu" }) });
}
function Welcome() {
  return /* @__PURE__ */ jsxs("main", { className: "flex flex-col items-center justify-center pt-0 mt-0 pb-4", children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx("p", { children: "We can't wait to meet you!" }),
      /* @__PURE__ */ jsx(BtnSeeMenu, {})
    ] })
  ] });
}
function meta$2({}) {
  return [{
    title: "New React Router App"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
const home = UNSAFE_withComponentProps(function Home() {
  return /* @__PURE__ */ jsx(Welcome, {});
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
function PageTitle(props) {
  return /* @__PURE__ */ jsx("div", { className: "w-full items-left justify-center", children: /* @__PURE__ */ jsx("h1", { className: "text-red text-3xl font-bold", children: props.text }) });
}
const barista = "/cutie-cafe/assets/barista-BxlOgb5S.jpg";
function meta$1({}) {
  return [{
    title: "About Cute Cafe"
  }, {
    name: "description",
    content: "About"
  }];
}
const about = UNSAFE_withComponentProps(function About() {
  return /* @__PURE__ */ jsx("main", {
    className: "flex items-center justify-center gap-16 pb-4",
    children: /* @__PURE__ */ jsxs("div", {
      className: "flex-1 flex flex-col items-center gap-6 min-h-0",
      children: [/* @__PURE__ */ jsx("header", {
        className: "flex flex-col items-center",
        children: /* @__PURE__ */ jsx("div", {
          className: "w-[500px] max-w-[100vw] px-4 pt-16",
          children: /* @__PURE__ */ jsx(PageTitle, {
            text: "About Cute Cafe"
          })
        })
      }), /* @__PURE__ */ jsx("div", {
        className: "max-w-[80%]",
        children: /* @__PURE__ */ jsxs(Card, {
          children: [/* @__PURE__ */ jsx("h3", {
            className: "w-full text-left text-3xl px-10",
            children: " Meet our Barista!"
          }), /* @__PURE__ */ jsx("img", {
            src: barista,
            alt: "picture of barista employee of the month",
            className: "max-w-[70%] rounded-xl"
          }), /* @__PURE__ */ jsxs("p", {
            className: "w-full text-left text-lg px-10",
            children: ["Hairy is our top-notch always-friendly barista! With over 8 years of experience, he has traveled the globe, searching for the highest quality, best-tasting coffee to bring home to you. No wonder he is employee of the month every month!", /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("br", {}), "Hurry in to our shop to experience the world's best coffee for yourself!"]
          }), /* @__PURE__ */ jsx(BtnSeeMenu, {})]
        })
      })]
    })
  });
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: about,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
function MenuCard({ props }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl w-full h-full p-3 flex sm:flex-col flex-row items-center justify-center text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "min-w-[90px]", children: /* @__PURE__ */ jsxs("p", { className: "text-7xl", children: [
      " ",
      props.icon
    ] }) }),
    /* @__PURE__ */ jsxs("p", { className: "font-semibold ml-4 sm:ml-0", children: [
      " ",
      props.text
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "text-xs ml-auto sm:mx-auto", children: [
      "$",
      props.price
    ] })
  ] }) });
}
function MenuMap() {
  return /* @__PURE__ */ jsx("div", { className: "w-full items-center justify-center", children: /* @__PURE__ */ jsx("ul", { className: " w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto", children: resources.map((m, i) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(MenuCard, { props: m }) }, i)) }) });
}
const resources = [
  {
    text: "Espresso",
    price: 1.99,
    icon: /* @__PURE__ */ jsx(Fragment, { children: "☃" })
  },
  {
    text: "Latte",
    price: 5.99,
    icon: /* @__PURE__ */ jsx(Fragment, { children: "☆" })
  },
  {
    text: "Cappucino",
    price: 3.99,
    icon: /* @__PURE__ */ jsx(Fragment, { children: "♔" })
  },
  {
    text: "Chai",
    price: 5.99,
    icon: /* @__PURE__ */ jsx(Fragment, { children: "☕" })
  },
  {
    text: "Hot Tea",
    price: 1.5,
    icon: /* @__PURE__ */ jsx(Fragment, { children: "⚖" })
  },
  {
    text: "Iced Tea",
    price: 2.99,
    icon: /* @__PURE__ */ jsx(Fragment, { children: "⚓" })
  },
  {
    text: "Hot Chocolate",
    price: 4.45,
    icon: /* @__PURE__ */ jsx(Fragment, { children: "♨" })
  },
  {
    text: "Lemonade",
    price: 3.99,
    icon: /* @__PURE__ */ jsx(Fragment, { children: "⚡" })
  }
];
function meta({}) {
  return [{
    title: "Cute Cafe Menu"
  }, {
    name: "description",
    content: "Cute Cafe Menu"
  }];
}
const menu = UNSAFE_withComponentProps(function Menu() {
  return /* @__PURE__ */ jsx("main", {
    className: "flex items-center justify-center gap-16 pb-16",
    children: /* @__PURE__ */ jsxs("div", {
      className: "flex-1 flex flex-col items-center gap-6 min-h-0",
      children: [/* @__PURE__ */ jsx("header", {
        className: "flex flex-col items-center",
        children: /* @__PURE__ */ jsx("div", {
          className: "w-[500px] max-w-[100vw] p-4 pt-16",
          children: /* @__PURE__ */ jsx(PageTitle, {
            text: "Menu"
          })
        })
      }), /* @__PURE__ */ jsx("p", {
        children: "Come into the shop for a delicious treat!"
      }), /* @__PURE__ */ jsx("div", {
        className: "max-w-[80%] sm:max-w-[100%] w-full space-y-6 px-4",
        children: /* @__PURE__ */ jsx(MenuMap, {})
      })]
    })
  });
});
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: menu,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/cutie-cafeassets/entry.client-LfwCoNJB.js", "imports": ["/cutie-cafeassets/chunk-EPOLDU6W-DI_FKu8q.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/cutie-cafeassets/root-Dvd0Og-q.js", "imports": ["/cutie-cafeassets/chunk-EPOLDU6W-DI_FKu8q.js"], "css": ["/cutie-cafeassets/root-B9iLSHAX.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/layout": { "id": "routes/layout", "parentId": "root", "path": void 0, "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/cutie-cafeassets/layout-C0wHOhKB.js", "imports": ["/cutie-cafeassets/chunk-EPOLDU6W-DI_FKu8q.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "routes/layout", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/cutie-cafeassets/home-C9wnNcem.js", "imports": ["/cutie-cafeassets/chunk-EPOLDU6W-DI_FKu8q.js", "/cutie-cafeassets/btn-seemenu-CsawUTR2.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/about": { "id": "routes/about", "parentId": "routes/layout", "path": "about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/cutie-cafeassets/about-DpqgBvMu.js", "imports": ["/cutie-cafeassets/chunk-EPOLDU6W-DI_FKu8q.js", "/cutie-cafeassets/pagetitle-q9cWpAch.js", "/cutie-cafeassets/btn-seemenu-CsawUTR2.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/menu": { "id": "routes/menu", "parentId": "routes/layout", "path": "menu", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/cutie-cafeassets/menu-CMBY7i9a.js", "imports": ["/cutie-cafeassets/chunk-EPOLDU6W-DI_FKu8q.js", "/cutie-cafeassets/pagetitle-q9cWpAch.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/cutie-cafeassets/manifest-98fdc51b.js", "version": "98fdc51b", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_optimizeDeps": false, "unstable_subResourceIntegrity": false, "unstable_trailingSlashAwareDataRequests": false, "v8_middleware": false, "v8_splitRouteModules": false, "v8_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/cutie-cafe";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/layout": {
    id: "routes/layout",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/home": {
    id: "routes/home",
    parentId: "routes/layout",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route2
  },
  "routes/about": {
    id: "routes/about",
    parentId: "routes/layout",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/menu": {
    id: "routes/menu",
    parentId: "routes/layout",
    path: "menu",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  }
};
const allowedActionOrigins = false;
export {
  allowedActionOrigins,
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};

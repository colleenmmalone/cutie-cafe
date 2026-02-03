import { c as createContext, R as RouterContextProvider, a as createRequestHandler$1, b as build } from "./assets/server-build-D6y-Xo8G.js";
function createNetlifyRequestHandler({
  build: build2,
  mode,
  getLoadContext,
  netlifyRouterContext: netlifyRouterContext2,
  runtimeName
}) {
  const reactRouterHandler = createRequestHandler$1(build2, mode);
  return async (request, netlifyContext) => {
    const start = Date.now();
    console.log(`[${request.method}] ${request.url}`);
    try {
      const getDefaultReactRouterContext = () => {
        const ctx = new RouterContextProvider();
        ctx.set(netlifyRouterContext2, netlifyContext);
        Object.assign(ctx, netlifyContext);
        return ctx;
      };
      const reactRouterContext = await getLoadContext?.(request, netlifyContext) ?? getDefaultReactRouterContext();
      const response = await reactRouterHandler(request, reactRouterContext);
      response.headers.set("x-nf-runtime", runtimeName);
      console.log(`[${response.status}] ${request.url} (${Date.now() - start}ms)`);
      return response;
    } catch (error) {
      console.error(error);
      return new Response("Internal Error", { status: 500 });
    }
  };
}
function createNetlifyRouterContext() {
  return createContext(
    new Proxy(
      // Can't reference `Netlify.context` here because it isn't set outside of a request lifecycle
      {},
      {
        get(_target, prop, receiver) {
          return Reflect.get(Netlify.context ?? {}, prop, receiver);
        },
        set(_target, prop, value, receiver) {
          return Reflect.set(Netlify.context ?? {}, prop, value, receiver);
        },
        has(_target, prop) {
          return Reflect.has(Netlify.context ?? {}, prop);
        },
        deleteProperty(_target, prop) {
          return Reflect.deleteProperty(Netlify.context ?? {}, prop);
        },
        ownKeys(_target) {
          return Reflect.ownKeys(Netlify.context ?? {});
        },
        getOwnPropertyDescriptor(_target, prop) {
          return Reflect.getOwnPropertyDescriptor(Netlify.context ?? {}, prop);
        }
      }
    )
  );
}
var netlifyRouterContext = createNetlifyRouterContext();
function createRequestHandler({
  build: build2,
  mode,
  getLoadContext
}) {
  return createNetlifyRequestHandler({
    build: build2,
    mode,
    getLoadContext,
    netlifyRouterContext,
    runtimeName: "edge"
  });
}
const _virtual_netlifyServer = createRequestHandler({
  build
});
export {
  _virtual_netlifyServer as default
};

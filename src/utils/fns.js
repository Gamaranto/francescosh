export function isOdd(n) {
    return n % 2 === 1;
}

export function pathFromLocation(location) {
    let paths = location.pathname.match(/\b(?!\bhttps?\b)([^/])+\b/g);
    let [lastPath] = paths.splice(-1);
    let { hostname } = location;
    return { hostname, paths, lastPath };
}

export function capitalize(s) {
    return Boolean(s)
        ? s.slice(0, 1).toUpperCase() + s.slice(1)
        : "Francesco.sh";
}

export function clean(s) {
    return s.replace(/\//g, "").replace(/-/g, " ");
}

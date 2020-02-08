export function isOdd(n) {
    return n % 2 === 1;
}

export function pathFromLocation(location) {
    let paths = location.href.match(/\b(?!\bhttps?\b)([^/])+\b/g);
    let lastPath = paths.splice(-1);
    return { paths, lastPath };
}

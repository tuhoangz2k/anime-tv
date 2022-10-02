function useTrunc(string, max) {
    if (!string) return undefined;
    if (string.length > max) {
        let newString = string.slice(0, max - 1);
        return `${newString}...`;
    }
    return string;
}

export default useTrunc;

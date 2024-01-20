const useLocalStorage = () => {
    const setItem = (key: string, value: unknown) => {
        localStorage.setItem(key, JSON.stringify(value));
    };

    const getItem = (key: string): string | any => {
        const item = localStorage.getItem(key);
        console.log(item);

        if (item) return JSON.parse(item);
        return item;
    };

    const removeItem = (key: string) => {
        localStorage.removeItem(key);
    };

    return { setItem, getItem, removeItem };
};

export { useLocalStorage };

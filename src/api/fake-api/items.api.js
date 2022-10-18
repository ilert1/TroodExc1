const ITEMS = {
    items: [
        { name: "Sold", color: "#BD1FBE", value: 677 },
        { name: "Got free", color: "#FC64FF", value: 23 },
        { name: "Burned", color: "#00FF00", value: 202 },
        { name: "Free float", color: "#000000", value: 323 },
    ],
    width: 70,
    height: 25,
};

export function fetchAll() {
    return ITEMS;
}

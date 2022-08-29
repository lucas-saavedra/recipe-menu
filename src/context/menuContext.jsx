import { createContext, useState, useEffect } from "react";

export const MenuContext = createContext();

export const MenuProvider = (props) => {
    const [menu, setMenu] = useState([]);
    const [veganCounter, setVeganCounter] = useState(false);
    const [otherCounter, setOtherCounter] = useState(false);

    useEffect(() => {
        let mounted = true;
        if (mounted) {
            setVeganCounter((menu.filter((item) => item.vegan === true)).length === 2 && true);
            setOtherCounter((menu.filter((item) => item.vegan === false)).length === 2 && true);
        }
        return function cleanup() {
            mounted = false
        }

    }, [menu]);

    const addToMenu = (item) => {
        setMenu([...menu, { ...item }])
    }
    const clearMenu = () => {
        setMenu([]);
    }
    const deleteFromMenu = (id) => {
        const tempMenu = [...menu];
        const idx = tempMenu.findIndex((item) => item.id === id);
        const item = tempMenu.find((item) => item.id === id);
        tempMenu.splice(idx, 1);
        if (item.vegan) {
            setVeganCounter(veganCounter - 1)
        } else {

        }
        setMenu([...tempMenu])
    }

    const menuTotal = () =>
        (menu.map((item) => item.pricePerServing))
            .reduce(((acc, value) => { return acc + value }), 0)

    const menuHealthy = () => {
        const healthScoreTotal = (menu.map((item) => item.healthScore))
            .reduce(((acc, value) => { return acc + value }), 0)
        return Number.parseInt(healthScoreTotal / menu.length);
    }
    const averageMinutesReady = () => {
        const minutes = menu.map(item => item.readyInMinutes);
        const averageMinutesTotal = Math.max(...minutes)
        return Number.parseInt(averageMinutesTotal);
    }
    const menuAmount = () => menu.length


    return (
        <MenuContext.Provider value={{ averageMinutesReady, clearMenu, menuHealthy, addToMenu, deleteFromMenu, menu, menuTotal, menuAmount, veganCounter, otherCounter }}>
            {props.children}
        </MenuContext.Provider>
    )
}
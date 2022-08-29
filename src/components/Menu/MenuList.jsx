import MenuItem from './MenuItem'
const MenuList = ({ recipes }) => {
    return (
        <>
            {
                recipes.map((item, idx) =>
                    <MenuItem
                        key={idx}
                        item={item}
                    />)
            }
        </>
    )
}

export default MenuList
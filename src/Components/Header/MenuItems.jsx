
const MenuItems = (props) => {
    return (   
        <ul class="hidden lg:flex ">
            {
                props.menuItems.map(items => (
                    <li className="group relative" key={items.index}>
                        <a href={'#'+items}
                                class="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70">
                                {items}
                        </a>
                    </li>
                ))
           }
        </ul>
    )
}

export default MenuItems
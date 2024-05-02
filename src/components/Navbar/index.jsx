import { NavLink } from "react-router-dom"

const Navbar = () => {
    const activeStyle = 'underline underline-offset-4'

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='font-semiblod text-lg'>
                    <NavLink to='/'>
                        one style
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/All'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }> 
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/American-Brans'
                    className={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }> 
                        American Brans
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                     to='/Esprit'
                     className={({ isActive }) =>
                         isActive ? activeStyle : undefined
                        }> 
                      Esprit
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/Rifle'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }> 
                        Rifle
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/MNG' 
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        MNG
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/Others' 
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Others
                    </NavLink>
                </li>

            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>

                    sss@aaaa

                </li>
                <li>
                    <NavLink 
                    to='/my-orders' 
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/my-account' 
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/sign-in' 
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Signd In
                    </NavLink>
                </li>
                <li>
                    carrito
                </li>


            </ul>
        </nav>
    )
}

export default Navbar
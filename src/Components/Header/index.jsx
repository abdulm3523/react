import Button from "../Button"
import Logo from "../Logo"
import MenuItems from "./MenuItems"
// import ""
const Header = () => {
    return (
        <div class="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent">
            <div class="container">
                <div class="relative -mx-4 flex items-center justify-between">
                    <div class="flex w-full items-center justify-between px-4 py-3">

                    <Logo logoUrl={'../../../src/assets/images/logo/logo.svg'} />
                    <MenuItems menuItems={['Home','About','Pricing','Blog']} />

                    <div class="sm:flex">
                     
                            <Button url={'signin.html'} btnText={'Sign In'}
                                styleClass={'flex-1 loginBtn px-[22px] py-2 text-base font-medium text-white hover:opacity-70'} />
                            
                            <Button url={'signup.html'} btnText={'Sign Up'}
                                styleClass={'signUpBtn rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark'} />
                        
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header